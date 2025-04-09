import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome deve ter pelo menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Por favor, introduza um endereço de email válido.',
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(2, {
    message: 'O assunto deve ter pelo menos 2 caracteres.',
  }),
  message: z.string().min(10, {
    message: 'A mensagem deve ter pelo menos 10 caracteres.',
  }),
  privacy: z.literal(true, {
    errorMap: () => ({ message: 'Deve aceitar a nossa política de privacidade.' }),
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Get Microsoft Graph API access token using client credentials flow
 */
async function getMsGraphToken(): Promise<string | null> {
  try {
    const clientId = process.env.OUTLOOK_API_CLIENT_ID;
    const clientSecret = process.env.OUTLOOK_API_CLIENT_SECRET;
    const tenantId = process.env.OUTLOOK_API_TENANT_ID;
    
    if (!clientId || !clientSecret || !tenantId) {
      console.error('Missing Microsoft Graph API credentials');
      return null;
    }
    
    const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
    const scope = 'https://graph.microsoft.com/.default';
    
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        scope,
        grant_type: 'client_credentials',
      }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error('Error getting Microsoft Graph token:', data);
      return null;
    }
    
    return data.access_token;
  } catch (error) {
    console.error('Error in getMsGraphToken:', error);
    return null;
  }
}

/**
 * Send email using Microsoft Graph API
 */
async function sendEmailWithMsGraph(formData: ContactFormValues): Promise<boolean> {
  try {
    const token = await getMsGraphToken();
    
    if (!token) {
      console.error('Failed to get Microsoft Graph token');
      return false;
    }
    
    const recipientEmail = process.env.OUTLOOK_RECIPIENT_EMAIL || 'contacto@acc-wise.com';
    
    // Construct email message
    const emailContent = `
      <h2>Novo contacto do website:</h2>
      <p><strong>Nome:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Telefone:</strong> ${formData.phone || 'Não fornecido'}</p>
      <p><strong>Empresa:</strong> ${formData.company || 'Não fornecida'}</p>
      <p><strong>Assunto:</strong> ${formData.subject}</p>
      <h3>Mensagem:</h3>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Enviado através do formulário de contacto no website AcctWise em ${new Date().toLocaleString('pt-PT')}</em></p>
    `;
    
    const emailMessage = {
      message: {
        subject: `Novo contacto website: ${formData.subject}`,
        body: {
          contentType: 'HTML',
          content: emailContent,
        },
        toRecipients: [
          {
            emailAddress: {
              address: recipientEmail,
            },
          },
        ],
        replyTo: [
          {
            emailAddress: {
              address: formData.email,
              name: formData.name,
            },
          },
        ],
      },
      saveToSentItems: true,
    };
    
    // Send email using MS Graph
    const response = await fetch('https://graph.microsoft.com/v1.0/users/me/sendMail', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailMessage),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error sending email with MS Graph:', errorData);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error in sendEmailWithMsGraph:', error);
    return false;
  }
}

/**
 * Send notification to n8n webhook for automation
 */
async function notifyN8n(formData: ContactFormValues): Promise<boolean> {
  try {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    const webhookSecret = process.env.N8N_WEBHOOK_SECRET;
    
    if (!webhookUrl) {
      console.error('Missing n8n webhook URL');
      return false;
    }
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(webhookSecret ? { 'x-n8n-signature': webhookSecret } : {}),
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'website-contact-form',
      }),
    });
    
    if (!response.ok) {
      console.error('Error notifying n8n webhook:', await response.text());
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error in notifyN8n:', error);
    return false;
  }
}

/**
 * Submit contact form data
 * Handles both MS Graph email sending and n8n webhook notification
 */
export async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  try {
    // Check for environment - if in development mode or missing configs, use mock implementation
    if (process.env.NODE_ENV === 'development' && !process.env.OUTLOOK_API_CLIENT_ID) {
      // Simulate network request for development testing
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Development mode: Mock form submission', data);
      return {
        success: true,
        message: 'Mensagem enviada com sucesso. Entraremos em contacto brevemente. (Modo de desenvolvimento)',
      };
    }
    
    // Try to send email via Microsoft Graph API
    const emailSent = await sendEmailWithMsGraph(data);
    
    // Try to notify n8n webhook (don't block on this)
    notifyN8n(data).catch(error => {
      console.error('Error with n8n notification (non-blocking):', error);
    });
    
    if (!emailSent) {
      return {
        success: false,
        message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou contacte-nos diretamente por telefone.',
      };
    }
    
    return {
      success: true,
      message: 'Mensagem enviada com sucesso. Entraremos em contacto brevemente. Obrigado!',
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Ocorreu um erro ao processar o seu pedido. Por favor, tente novamente mais tarde.',
    };
  }
}
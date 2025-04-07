# AcctWise Contact Form Integration with Outlook & n8n

## Overview

The AcctWise website contact form will be enhanced with two powerful integrations:

1. **Microsoft Outlook Integration**: For email notifications and managing client inquiries directly in Outlook
2. **n8n Workflow Automation**: To automate the processing of form submissions, follow-ups, and data management

This document outlines the implementation approach for both integrations in European Portuguese context.

## 1. Microsoft Outlook Integration

### 1.1 Overview & Benefits

The Microsoft Outlook integration will enable:

- Automatic email notifications for new form submissions
- Direct storage of contact details in Outlook contacts
- Calendar event creation for follow-up meetings
- Email template responses in European Portuguese
- Team notification for new inquiries

### 1.2 Technical Implementation

#### Microsoft Graph API Setup

```javascript
// src/lib/outlook-api.ts
import { Client } from '@microsoft/microsoft-graph-client';
import { AuthProvider } from '@microsoft/microsoft-graph-client';

// Configure auth provider with AcctWise credentials
const authProvider: AuthProvider = {
  getAccessToken: async () => {
    // Retrieve token from secure storage or OAuth flow
    return process.env.OUTLOOK_API_TOKEN || '';
  }
};

// Create a client instance
export const graphClient = Client.initWithMiddleware({ authProvider });

// Send email notification
export async function sendContactNotification(formData: ContactFormData) {
  try {
    const message = {
      subject: `Novo Contacto Website: ${formData.subject}`,
      body: {
        contentType: 'HTML',
        content: `
          <h2>Novo Contacto do Website AcctWise</h2>
          <p><strong>Nome:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Telefone:</strong> ${formData.phone || 'Não fornecido'}</p>
          <p><strong>Assunto:</strong> ${formData.subject}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p>Enviado através do formulário de contacto do website AcctWise em ${new Date().toLocaleString('pt-PT')}</p>
        `
      },
      toRecipients: [
        {
          emailAddress: {
            address: 'contacto@acc-wise.com'
          }
        }
      ]
    };

    await graphClient
      .api('/me/sendMail')
      .post({ message });
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error };
  }
}

// Add contact to Outlook
export async function addOutlookContact(formData: ContactFormData) {
  try {
    const contact = {
      givenName: formData.name.split(' ')[0],
      surname: formData.name.split(' ').slice(1).join(' '),
      emailAddresses: [
        {
          address: formData.email,
          name: formData.name
        }
      ],
      businessPhones: formData.phone ? [formData.phone] : [],
      businessHomePage: 'https://acc-wise.com',
      jobTitle: '',
      companyName: formData.company || ''
    };

    await graphClient
      .api('/me/contacts')
      .post(contact);
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao adicionar contacto:', error);
    return { success: false, error };
  }
}
```

#### Server-side API Route

```typescript
// src/app/api/contacto/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendContactNotification, addOutlookContact } from '@/lib/outlook-api';
import { z } from 'zod';

// Form validation schema in Portuguese
const contactSchema = z.object({
  name: z.string().min(2, 'Por favor insira o seu nome completo'),
  email: z.string().email('Por favor insira um email válido'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Por favor indique um assunto'),
  message: z.string().min(10, 'Por favor escreva uma mensagem com pelo menos 10 caracteres'),
  company: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate form data
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.format() },
        { status: 400 }
      );
    }
    
    const formData = result.data;
    
    // Send email notification via Outlook
    const emailResult = await sendContactNotification(formData);
    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, message: 'Erro ao enviar notificação por email' },
        { status: 500 }
      );
    }
    
    // Add contact to Outlook (optional based on privacy policy)
    if (body.saveContact) {
      await addOutlookContact(formData);
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso! Entraremos em contacto em breve.' 
    });
  } catch (error) {
    console.error('Erro no processamento do formulário:', error);
    return NextResponse.json(
      { success: false, message: 'Ocorreu um erro ao processar o seu pedido' },
      { status: 500 }
    );
  }
}
```

### 1.3 Required Environment Variables

```
OUTLOOK_API_CLIENT_ID=your_client_id
OUTLOOK_API_CLIENT_SECRET=your_client_secret
OUTLOOK_API_TENANT_ID=your_tenant_id
OUTLOOK_API_TOKEN=your_access_token
OUTLOOK_RECIPIENT_EMAIL=contacto@acc-wise.com
```

### 1.4 Authentication & Security Considerations

- Use Microsoft Azure AD authentication for secure API access
- Store credentials in secure environment variables
- Implement token refresh mechanism
- Configure CORS policies for API endpoints
- Ensure compliance with Portuguese data protection laws (RGPD/GDPR)

## 2. n8n Workflow Automation

### 2.1 Overview & Benefits

The n8n workflow automation will enable:

- Automatic processing of contact form submissions
- Integration with CRM systems
- Lead qualification and routing
- Automatic follow-up sequences
- Data analytics and reporting
- Multi-channel notifications (email, SMS, Slack)

### 2.2 Technical Implementation

#### n8n Webhook Setup

```typescript
// src/lib/n8n-webhook.ts
export async function triggerN8nWorkflow(formData: ContactFormData) {
  try {
    // Get the webhook URL from environment variables
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    
    if (!webhookUrl) {
      throw new Error('N8N webhook URL not configured');
    }
    
    // Send data to n8n webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData,
        metadata: {
          source: 'website_contact_form',
          timestamp: new Date().toISOString(),
          locale: 'pt-PT',
        }
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Error triggering n8n workflow: ${response.statusText}`);
    }
    
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error triggering n8n workflow:', error);
    return { success: false, error };
  }
}
```

#### Integration with API Route

```typescript
// Update the contact form API route to include n8n integration
// src/app/api/contacto/route.ts

import { triggerN8nWorkflow } from '@/lib/n8n-webhook';

export async function POST(request: NextRequest) {
  try {
    // ... existing validation code ...
    
    // Send email notification via Outlook
    const emailResult = await sendContactNotification(formData);
    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, message: 'Erro ao enviar notificação por email' },
        { status: 500 }
      );
    }
    
    // Trigger n8n workflow
    const n8nResult = await triggerN8nWorkflow(formData);
    if (!n8nResult.success) {
      console.error('Erro ao acionar fluxo de trabalho n8n:', n8nResult.error);
      // Continue processing even if n8n fails
    }
    
    // ... rest of the existing code ...
  } catch (error) {
    // ... existing error handling ...
  }
}
```

### 2.3 n8n Workflow Configuration

#### Basic Contact Form Processing Workflow

1. **Webhook Node**: Receives form data from AcctWise website
2. **IF Node**: Checks form validity and content
3. **Microsoft Outlook Node**: Creates contact and sends notifications
4. **Function Node**: Processes and transforms data
5. **Google Sheets Node** (optional): Logs all inquiries in a spreadsheet
6. **Slack Node** (optional): Sends notification to team channel
7. **Switch Node**: Routes based on inquiry type
   - Financial inquiries → Finance team
   - Tax inquiries → Tax specialist
   - General inquiries → Admin team
8. **Set Node**: Prepares data for CRM
9. **HTTP Request Node**: Sends to CRM system
10. **Respond to Webhook Node**: Returns success response

#### Example n8n Workflow JSON

```json
{
  "nodes": [
    {
      "parameters": {
        "path": "contacto-acctwise",
        "options": {}
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [
        250,
        300
      ]
    },
    {
      "parameters": {
        "authentication": "serviceAccount",
        "resource": "message",
        "operation": "send",
        "subject": "=Novo contacto do website: {{$json[\"formData\"][\"subject\"]}}",
        "html": "=<h2>Novo Contacto do Website AcctWise</h2><p><strong>Nome:</strong> {{$json[\"formData\"][\"name\"]}}</p><p><strong>Email:</strong> {{$json[\"formData\"][\"email\"]}}</p>...",
        "options": {}
      },
      "name": "Microsoft Outlook",
      "type": "n8n-nodes-base.microsoftOutlook",
      "typeVersion": 1,
      "position": [
        600,
        300
      ]
    }
    // Additional nodes configuration...
  ],
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "Microsoft Outlook",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
    // Additional connections...
  }
}
```

### 2.4 Required Environment Variables

```
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contacto-acctwise
N8N_API_KEY=your_api_key
```

## 3. Contact Form Component Update

The contact form component needs to be updated to support these integrations:

```tsx
// src/components/contact/ContactForm.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Form validation schema in Portuguese
const contactSchema = z.object({
  name: z.string().min(2, 'Por favor insira o seu nome completo'),
  email: z.string().email('Por favor insira um email válido'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, 'Por favor indique um assunto'),
  message: z.string().min(10, 'Por favor escreva uma mensagem com pelo menos 10 caracteres'),
  saveContact: z.boolean().optional(),
  privacyPolicy: z.boolean().refine(val => val === true, {
    message: 'Deve aceitar a política de privacidade para prosseguir'
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      saveContact: false,
      privacyPolicy: false,
    }
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Ocorreu um erro ao processar o seu pedido');
      }
      
      // Success
      setFormStatus({
        type: "success",
        message: result.message || 'Mensagem enviada com sucesso! Entraremos em contacto em breve.'
      });
      
      // Reset form
      reset();
    } catch (error) {
      console.error('Erro ao submeter formulário:', error);
      setFormStatus({
        type: "error",
        message: error instanceof Error ? error.message : 'Ocorreu um erro ao enviar a sua mensagem. Por favor tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold mb-6 text-secondary">Envie-nos uma Mensagem</h2>
      
      {formStatus.type && (
        <div 
          className={`mb-6 p-4 rounded-md ${
            formStatus.type === "success" 
              ? "bg-green-50 text-green-700 border border-green-200" 
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {formStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nome Completo *
            </label>
            <input
              id="name"
              {...register('name')}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          
          {/* Additional form fields */}
          {/* ... */}
        </div>
        
        {/* Privacy Policy Checkbox */}
        <div className="mb-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="privacyPolicy"
                type="checkbox"
                {...register('privacyPolicy')}
                className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="privacyPolicy" className="text-gray-700">
                Li e aceito a <Link href="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link> *
              </label>
              {errors.privacyPolicy && (
                <p className="mt-1 text-sm text-red-600">{errors.privacyPolicy.message}</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Save Contact Checkbox (Optional) */}
        <div className="mb-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="saveContact"
                type="checkbox"
                {...register('saveContact')}
                className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="saveContact" className="text-gray-700">
                Guardar os meus dados para contactos futuros
              </label>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-primary text-white rounded-md font-medium shadow-button hover:bg-primary-dark transition-colors disabled:opacity-70"
        >
          {isSubmitting ? "A enviar..." : "Enviar Mensagem"}
        </button>
      </form>
    </div>
  );
};
```

## 4. Testing & Security

### 4.1 Testing Procedures

1. Create test accounts for Microsoft Outlook integration
2. Set up a staging n8n instance for workflow testing
3. Test form submissions with various data sets
4. Verify email delivery and content formatting
5. Confirm workflow execution and data processing
6. Test error handling and fallback mechanisms
7. Validate RGPD/GDPR compliance

### 4.2 Security Considerations

1. Implement CSRF protection on form submissions
2. Validate and sanitize all form inputs
3. Use environment variables for sensitive credentials
4. Set up proper CORS policies
5. Implement rate limiting to prevent abuse
6. Monitor for suspicious activity
7. Ensure secure storage of contact information
8. Comply with Portuguese data protection requirements
9. Provide clear privacy policy and data handling information

## 5. Implementation Steps

1. **Setup Microsoft Outlook API Integration**
   - Register application in Azure AD
   - Configure API permissions
   - Generate and secure access tokens
   - Implement email notification functionality
   - Test email delivery and formatting

2. **Setup n8n Integration**
   - Install and configure n8n instance
   - Create contact form processing workflow
   - Set up webhook endpoints
   - Configure action nodes (email, CRM, notifications)
   - Test workflow execution

3. **Update Contact Form Component**
   - Implement form validation
   - Add privacy policy consent
   - Connect to API endpoints
   - Add loading states and feedback messages
   - Test form submission process

4. **Setup API Routes**
   - Create contact form API route
   - Implement validation logic
   - Connect to Outlook API and n8n
   - Add error handling and logging
   - Test API endpoints

5. **Security Review**
   - Review permissions and access controls
   - Validate data sanitization
   - Test for vulnerabilities
   - Ensure RGPD/GDPR compliance

## 6. Maintenance & Monitoring

1. **Monitoring**
   - Set up logging for form submissions
   - Monitor email delivery rates
   - Track workflow execution in n8n
   - Set up alerts for failures

2. **Maintenance**
   - Regularly refresh Outlook API tokens
   - Update n8n workflows as needed
   - Monitor for API changes or deprecations
   - Keep dependencies updated

3. **Analytics**
   - Track form submission metrics
   - Analyze inquiry types and response times
   - Monitor lead conversion rates
   - Generate monthly reports

## 7. Best Practices

1. Provide clear privacy information to users
2. Only collect necessary information
3. Implement proper data retention policies
4. Provide users with options to control their data
5. Ensure all communications are in European Portuguese
6. Follow Portuguese business communication etiquette
7. Optimize for Portuguese market needs
8. Ensure all automated emails appear to come from a human sender

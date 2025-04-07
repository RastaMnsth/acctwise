import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | AcctWise',
  description: 'Política de privacidade da AcctWise. Saiba como protegemos os seus dados pessoais e respeitamos a sua privacidade.',
};

export default function PrivacidadePage() {
  return (
    <main className="pt-20">
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-secondary">
            Política de <span className="text-primary">Privacidade</span>
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            A sua privacidade é importante para nós. Esta política explica como recolhemos, utilizamos e protegemos os seus dados pessoais.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2>Introdução</h2>
              <p>
                A AcctWise, Lda. ("AcctWise", "nós", "nosso") está empenhada em proteger a sua privacidade e os seus dados pessoais. Esta Política de Privacidade explica como recolhemos, utilizamos, partilhamos e protegemos as informações pessoais que obtemos quando visita o nosso website ou utiliza os nossos serviços.
              </p>
              <p>
                Ao utilizar o nosso website ou fornecer-nos os seus dados pessoais, está a aceitar as práticas descritas nesta Política de Privacidade. Se não concordar com esta Política, por favor não utilize o nosso website ou forneça-nos os seus dados pessoais.
              </p>
              
              <h2>Responsável pelo Tratamento de Dados</h2>
              <p>
                A AcctWise, com sede em Rua Example, 123, 2670-000 Moscavide, Portugal, é a entidade responsável pelo tratamento dos seus dados pessoais.
              </p>
              
              <h2>Dados Pessoais que Recolhemos</h2>
              <p>
                Podemos recolher os seguintes tipos de informações pessoais:
              </p>
              <ul>
                <li>Nome completo</li>
                <li>Endereço de email</li>
                <li>Número de telefone</li>
                <li>Nome da empresa (se aplicável)</li>
                <li>Informações de contacto profissional (se aplicável)</li>
                <li>Dados de navegação no website</li>
                <li>Outras informações que opte por fornecer-nos</li>
              </ul>
              
              <h2>Como Recolhemos os Seus Dados</h2>
              <p>
                Recolhemos os seus dados pessoais através das seguintes formas:
              </p>
              <ul>
                <li>Quando preenche o formulário de contacto no nosso website</li>
                <li>Quando subscreve a nossa newsletter</li>
                <li>Quando interage connosco através de email, telefone ou redes sociais</li>
                <li>Quando se torna nosso cliente ou fornecedor</li>
                <li>Através de cookies e tecnologias semelhantes quando navega no nosso website</li>
              </ul>
              
              <h2>Finalidades do Tratamento dos Dados</h2>
              <p>
                Utilizamos os seus dados pessoais para os seguintes fins:
              </p>
              <ul>
                <li>Fornecer os serviços que solicitou</li>
                <li>Responder às suas perguntas ou pedidos</li>
                <li>Enviar-lhe informações sobre os nossos serviços, quando solicitado</li>
                <li>Cumprir as nossas obrigações contratuais e legais</li>
                <li>Melhorar o nosso website e os nossos serviços</li>
                <li>Prevenir fraudes e proteger os nossos direitos e interesses legítimos</li>
              </ul>
              
              <h2>Base Legal para o Tratamento</h2>
              <p>
                Processamos os seus dados pessoais com base nas seguintes condições legais:
              </p>
              <ul>
                <li>O seu consentimento (que pode ser retirado a qualquer momento)</li>
                <li>A necessidade de executar um contrato consigo</li>
                <li>O cumprimento das nossas obrigações legais</li>
                <li>Os nossos interesses legítimos, desde que não prejudiquem os seus direitos e liberdades</li>
              </ul>
              
              <h2>Período de Conservação dos Dados</h2>
              <p>
                Conservamos os seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram recolhidos, ou conforme exigido por lei. Para determinar o período apropriado de conservação, consideramos a quantidade, natureza e sensibilidade dos dados, o risco potencial de danos resultantes de uso não autorizado, e os requisitos legais aplicáveis.
              </p>
              
              <h2>Partilha de Dados</h2>
              <p>
                Podemos partilhar os seus dados pessoais com:
              </p>
              <ul>
                <li>Prestadores de serviços que nos ajudam a gerir o nosso negócio (processadores de pagamentos, fornecedores de hospedagem web, etc.)</li>
                <li>Autoridades públicas, quando exigido por lei</li>
                <li>Consultores profissionais, como advogados e contabilistas</li>
              </ul>
              <p>
                Não vendemos os seus dados pessoais a terceiros. Quando partilhamos dados com terceiros, garantimos que estes respeitam a confidencialidade e segurança dos seus dados.
              </p>
              
              <h2>Os Seus Direitos</h2>
              <p>
                De acordo com o Regulamento Geral de Proteção de Dados (RGPD), tem os seguintes direitos:
              </p>
              <ul>
                <li>Direito de acesso aos seus dados pessoais</li>
                <li>Direito de retificação de dados incorretos ou incompletos</li>
                <li>Direito ao apagamento dos seus dados ("direito a ser esquecido")</li>
                <li>Direito à limitação do tratamento dos seus dados</li>
                <li>Direito à portabilidade dos seus dados</li>
                <li>Direito de oposição ao tratamento dos seus dados</li>
                <li>Direito de não estar sujeito a decisões automatizadas, incluindo definição de perfis</li>
              </ul>
              <p>
                Para exercer qualquer um destes direitos, por favor contacte-nos através do email info@acc-wise.com ou por correio para a nossa morada.
              </p>
              
              <h2>Segurança dos Dados</h2>
              <p>
                Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados pessoais contra acesso não autorizado, perda, alteração ou divulgação. Revemos regularmente as nossas medidas de segurança para garantir a sua eficácia.
              </p>
              
              <h2>Cookies e Tecnologias Semelhantes</h2>
              <p>
                O nosso website utiliza cookies e tecnologias semelhantes para melhorar a experiência do utilizador, analisar como o website é utilizado e para fins de marketing. Pode configurar o seu navegador para recusar todos ou alguns cookies, ou para alertá-lo quando os websites definem ou acedem a cookies.
              </p>
              
              <h2>Alterações a Esta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Publicaremos quaisquer alterações no nosso website e, se as alterações forem significativas, notificá-lo-emos por email ou por outro meio apropriado.
              </p>
              
              <h2>Contacte-nos</h2>
              <p>
                Se tiver alguma dúvida sobre esta Política de Privacidade ou sobre como tratamos os seus dados pessoais, por favor contacte-nos através do email info@acc-wise.com, por telefone +351 210 000 000 ou por correio para Rua Example, 123, 2670-000 Moscavide, Portugal.
              </p>
              
              <p className="text-sm text-gray-600 mt-8">
                Última atualização: 7 de abril de 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
# AcctWise Website Project

This repository contains the official website for AcctWise - Contabilidade, Manutenção e Consultoria, Lda., a professional services firm in Moscavide, Portugal.

## 🏢 Project Overview

- **Client**: AcctWise (AcctWise - Contabilidade, Manutenção e Consultoria, Lda.)
- **Domain**: Acc-Wise.com
- **Technology Stack**: Next.js 15, TypeScript, React, Tailwind CSS
- **Language**: European Portuguese

## 🎨 Brand Colors

- **Primary**: #0F5132 (Dark Green)
- **Secondary**: #121212 (Rich Black)
- **Accent**: #E8F5E9 (Light Green)
- **Text**: #333333 (Dark Gray)
- **Background**: #FFFFFF (White)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd acctwise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
   OUTLOOK_API_CLIENT_ID=your_client_id
   OUTLOOK_API_CLIENT_SECRET=your_client_secret
   OUTLOOK_API_TENANT_ID=your_tenant_id
   OUTLOOK_RECIPIENT_EMAIL=contacto@acc-wise.com
   N8N_WEBHOOK_URL=your_webhook_url
   N8N_WEBHOOK_SECRET=your_webhook_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📂 Project Structure

- `/src/app`: Pages using the App Router
- `/src/components`: Reusable UI components
- `/src/lib`: Utility functions and API clients
- `/src/hooks`: Custom React hooks
- `/src/types`: TypeScript type definitions
- `/public`: Static assets (images, fonts, etc.)

## 🔧 Key Features

- Professional design inspired by Nucase.pt with AcctWise branding
- Fully responsive layout with mobile-first approach
- Comprehensive service pages for all offerings:
  - Accounting services
  - Maintenance services
  - Consultancy services
  - Taxation services
  - Financial reporting
- Contact form with Microsoft Outlook integration (planned)
- n8n workflow automation for form submissions (planned)
- Google Maps integration for office location (planned)
- LinkedIn integration

## 🌐 Third-Party Integrations

- **Google Maps API**: For office location display
- **Microsoft Graph API**: For email notifications and contact management
- **n8n**: For workflow automation of form submissions
- **LinkedIn**: For company profile integration

## 📑 Services Offered

- **Contabilidade (Accounting)**: Full accounting services for businesses of all sizes
- **Manutenção (Maintenance)**: Comprehensive maintenance services for systems and equipment
- **Consultoria (Consultancy)**: Business and financial consultancy services
- **Fiscalidade (Taxation)**: Tax planning and compliance services
- **Relatórios Financeiros (Financial Reports)**: Detailed financial reporting and analysis

## 📅 Last Updated

7 de abril de 2025

## 👥 Contributors

- Development Team 

## 📄 License

All rights reserved. This code is proprietary to AcctWise.

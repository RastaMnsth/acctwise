# AcctWise Website Development Documentation

## Project Overview
This document outlines the development process and structure for the AcctWise website, a professional landing website for an accounting, maintenance and consultancy firm based in Moscavide, Portugal.

## Technologies Used
- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: European Portuguese language
- **Integrations**: 
  - Google Maps API (implemented)
  - Microsoft Outlook integration (planned)
  - n8n workflow automation (planned)
  - LinkedIn company profile (implemented)

## Project Structure
```
acctwise/
├── public/            # Static assets, images, and icons
│   └── testimonials/  # Client testimonial photos
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Organized by section/feature
│   │   ├── about/     # About page components
│   │   ├── contact/   # Contact page components
│   │   ├── home/      # Homepage components
│   │   ├── layout/    # Layout components (header, footer, etc)
│   │   ├── services/  # Service page components
│   │   ├── shared/    # Shared components across pages
│   │   └── ui/        # UI component library
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Third-party libraries and helpers
│   │   ├── api/       # API client functions
│   │   └── maps/      # Google Maps integration
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Utility functions
```

## Brand Colors
- **Primary**: #0F5132 (Dark Green)
- **Secondary**: #121212 (Rich Black)
- **Accent**: #E8F5E9 (Light Green)
- **Text**: #333333 (Dark Gray)
- **Background**: #FFFFFF (White)

## Main Services Offered
- **Contabilidade (Accounting)**: Full accounting services for businesses of all sizes
- **Manutenção (Maintenance)**: Comprehensive maintenance services for systems and equipment
- **Consultoria (Consultancy)**: Business and financial consultancy services
- **Fiscalidade (Taxation)**: Tax planning and compliance services
- **Relatórios Financeiros (Financial Reports)**: Detailed financial reporting and analysis

## Components Developed
- [x] Page layout with Header and Footer
- [x] Hero section for homepage
- [x] Services section with cards
- [x] About section with company info
- [x] Team section with profiles
- [x] Testimonials section
- [x] Call-to-action section
- [x] Contact form with validation
- [x] Google Maps integration
- [ ] Microsoft Outlook integration
- [ ] n8n workflow automation
- [x] LinkedIn company profile integration

## Pages Developed
- [x] Homepage (including testimonials and CTA)
- [x] Services overview page
- [x] Individual service pages:
  - [x] Contabilidade (Accounting)
  - [x] Manutenção (Maintenance)
  - [x] Consultoria (Consultancy)
  - [x] Fiscalidade (Taxation)
  - [x] Relatórios Financeiros (Financial Reports)
- [ ] About page (in progress)
- [x] Team page
- [x] Contact page (fully functional)
- [x] Privacy policy page

## Development Approach
1. Set up project structure and configuration
2. Implement core layouts and UI components
3. Develop homepage with key sections
4. Create inner pages for services, about, and contact
5. Implement integrations (Google Maps, Outlook, n8n)
6. Add form handling and validation
7. Optimize for SEO and performance
8. Testing and quality assurance
9. Deployment

## Recent Updates (As of 8 de abril de 2025)
- Created reusable Call-to-Action (CTA) component with primary/secondary variants
- Added CTAs to homepage and services page
- Implemented testimonials section with carousel component
- Implemented contact form with complete validation
- Added Google Maps integration for office location
- Created form submission handler with mock functionality (preparing for MS Outlook integration)
- Finalized team page structure
- Implemented LinkedIn integration
- Created GDPR-compliant privacy policy page

## Completed Sprint Tasks (8 de abril de 2025)
1. ✅ Implement contact form with validation
2. ✅ Begin Google Maps integration for contact page
3. ✅ Start development of testimonials section
4. ✅ Create privacy policy page for GDPR compliance
5. ⏳ Add actual images for team members
6. ✅ Create Call-to-Action component

## Current Sprint Focus (15 de abril de 2025)
1. Replace placeholder testimonial and team images with actual photos
2. Set up Microsoft Outlook integration for email notifications
3. Implement n8n workflow automation for form submissions
4. Add Call-to-Action sections to individual service pages
5. Finalize About page
6. Implement page load animations and transitions

## Next Steps - Priority Order
1. Replace placeholder Google Maps coordinates with actual office location
2. Add actual testimonial client photos and team member images
3. Set up Microsoft Outlook integration for email notifications
4. Implement n8n workflow automation for form submissions
5. Finalize About page content and design
6. Add animations for page transitions and component loading
7. Optimize for SEO and performance
   - Add meta tags to all pages
   - Implement Open Graph protocol for social sharing
   - Optimize image loading and Core Web Vitals
8. Conduct cross-browser compatibility testing
9. Perform responsive design testing on multiple devices
10. Address any accessibility issues (WCAG compliance)
11. Final review and deployment preparation

## GitHub Workflow
1. Create feature branches for each major task
2. Commit changes with descriptive commit messages
3. Create pull requests for code review
4. Merge approved changes to main branch
5. Tag releases with version numbers
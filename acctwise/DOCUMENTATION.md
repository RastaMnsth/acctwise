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
  - Microsoft Outlook integration (implemented)
  - n8n workflow automation (implemented)
  - LinkedIn company profile (implemented)

## Project Structure
```
acctwise/
├── public/            # Static assets, images, and icons
│   ├── about/         # About page images and team photos
│   ├── og/            # Open Graph images for social sharing
│   ├── testimonials/  # Client testimonial photos
│   ├── og-image.jpg   # Default Open Graph image
│   ├── robots.txt     # Instructions for search engines
│   └── sitemap.xml    # Site structure for search engines
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
│   │   ├── maps/      # Google Maps integration
│   │   └── seo.ts     # SEO configuration utilities
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
- [x] Microsoft Outlook integration
- [x] n8n workflow automation
- [x] LinkedIn company profile integration
- [x] Page transitions and animations

## Pages Developed
- [x] Homepage (including testimonials and CTA)
- [x] Services overview page
- [x] Individual service pages:
  - [x] Contabilidade (Accounting)
  - [x] Manutenção (Maintenance)
  - [x] Consultoria (Consultancy)
  - [x] Fiscalidade (Taxation)
  - [x] Relatórios Financeiros (Financial Reports)
- [x] About page (completed)
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

## Recent Updates (As of 9 de abril de 2025)
- Enhanced About page with complete content, improved structure and visual organization
- Implemented page transitions and animations for improved user experience
- Integrated Microsoft Outlook API for contact form email notifications
- Added n8n webhook integration for workflow automation
- Updated Google Maps with correct office location in Moscavide
- Implemented comprehensive SEO optimizations:
  - Added metadata for all pages
  - Created robots.txt and sitemap.xml files
  - Added Open Graph tags for social media sharing
  - Improved title and description tags
- Created placeholders for team and testimonial images
- Updated contact information across all pages

## Completed Sprint Tasks (9 de abril de 2025)
1. ✅ Implement Microsoft Outlook integration for email notifications
2. ✅ Set up n8n workflow automation for form submissions
3. ✅ Complete About page content and design
4. ✅ Update Google Maps with correct office location
5. ✅ Add page transitions and animations
6. ✅ Implement SEO improvements across the site

## Current Sprint Focus (15 de abril de 2025)
1. Replace placeholder images with actual photos:
   - Team member photos for About and Team pages
   - Client testimonial photos
   - Open Graph images for social sharing
2. Conduct cross-browser compatibility testing
3. Perform responsive design testing on multiple devices
4. Optimize website performance:
   - Image optimization
   - Core Web Vitals improvements
   - Caching strategies
5. Address accessibility issues (WCAG compliance)
6. Prepare for deployment

## Next Steps - Priority Order
1. Replace placeholder images with actual photos
   - Coordinate with client to obtain approved photos
   - Optimize images for web use (compression, sizing)
   - Update placeholders with actual content
2. Conduct thorough testing
   - Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - Responsive design testing (mobile, tablet, desktop)
   - Performance testing
   - Accessibility testing
3. Optimize for Core Web Vitals
   - Largest Contentful Paint (LCP)
   - First Input Delay (FID)
   - Cumulative Layout Shift (CLS)
4. Finalize deployment preparation
   - Configure hosting environment
   - Set up domain and SSL certificates
   - Configure email service for form submissions
5. Deploy to production
   - Conduct final QA on production environment
   - Verify all functionality and integrations
   - Monitor performance post-launch

## GitHub Workflow
1. Create feature branches for each major task
2. Commit changes with descriptive commit messages
3. Create pull requests for code review
4. Merge approved changes to main branch
5. Tag releases with version numbers
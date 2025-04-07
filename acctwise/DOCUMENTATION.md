# AcctWise Website Development Documentation

## Project Overview
This document outlines the development process and structure for the AcctWise website, a professional landing website for an accounting firm based in Moscavide, Portugal.

## Technologies Used
- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: European Portuguese language
- **Integrations**: 
  - Google Maps API (planned)
  - Microsoft Outlook integration (planned)
  - n8n workflow automation (planned)

## Project Structure
```
acctwise/
├── public/            # Static assets, images, and icons
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

## Components Developed
- [x] Page layout with Header and Footer
- [x] Hero section for homepage
- [x] Services section with cards
- [ ] About section with company info
- [ ] Team section with profiles
- [ ] Testimonials section
- [ ] Call-to-action section
- [ ] Contact form with validation
- [ ] Google Maps integration
- [ ] Microsoft Outlook integration
- [ ] n8n workflow automation

## Pages to Develop
- [x] Homepage (basic structure)
- [ ] About page
- [ ] Services overview page
- [ ] Individual service pages
- [ ] Team page
- [ ] Contact page
- [ ] Privacy policy page

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

## Next Steps
1. Create additional homepage sections (About, Team preview, CTA)
2. Develop inner pages for services, about, and team
3. Implement contact form with validation
4. Set up Google Maps integration for contact page
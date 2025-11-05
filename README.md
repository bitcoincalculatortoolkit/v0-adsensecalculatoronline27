# AdSense Calculator Online

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/oneskillspk-7594s-projects/v0-adsensecalculatoronlinemain)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/0u0rNeianRK)

A professional, high-performance web application for estimating Google AdSense earnings. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4, this calculator provides accurate revenue projections based on page views, CTR, CPC, niche, and geographic location.


## Features

### Core Calculator
- **Advanced Revenue Estimation** - Calculate daily, monthly, and yearly AdSense earnings
- **Multi-Factor Analysis** - Accounts for niche multipliers, geographic location, ad density, and fill rates
- **Real-Time Calculations** - Instant updates as you adjust parameters
- **Visual Analytics** - Interactive charts showing earnings projections and revenue breakdown
- **Saved Calculations** - Store and compare multiple calculation scenarios
- **Export Functionality** - Download calculation data as JSON

### Calculator Inputs
- Page views or impressions mode
- CTR (Click-Through Rate) slider: 0.1% - 10%
- CPC (Cost Per Click) slider: $0.01 - $5.00
- Niche selection with multipliers (Finance, Insurance, Legal, Health, Technology, Travel, Lifestyle, Entertainment, Gaming, General)
- Geographic targeting (US, UK, Canada, Australia, Germany, France, India, Global)
- Ad density control (1-10 ads per page)
- Fill rate adjustment (50%-100%)

### Results & Metrics
- Daily, monthly, and yearly earnings projections
- RPM (Revenue Per Mille) calculation
- eCPM (Effective Cost Per Mille) calculation
- Click and impression statistics
- 12-month earnings projection chart
- Revenue breakdown by ad type (Display, In-Article, Matched Content)
- Mini sparkline visualizations for key metrics

### Additional Pages
- **FAQ** - Comprehensive answers to common AdSense questions
- **How It Works** - Detailed explanation of calculation methodology
- **Optimization Tips** - Best practices for maximizing AdSense revenue
- **Contact** - Contact form for inquiries
- **Dashboard** - User analytics and saved calculations overview
- **Privacy Policy** - Data handling and privacy information
- **Terms of Service** - Usage terms and conditions

### SEO & Performance
- **Comprehensive SEO** - Meta tags, Open Graph, Twitter Cards on all pages
- **Structured Data** - JSON-LD schemas (Organization, SoftwareApplication, WebApplication, FAQ, HowTo, Article, Breadcrumb)
- **XML Sitemap** - Auto-generated sitemap for search engines
- **Robots.txt** - Optimized crawl directives
- **Canonical URLs** - Proper canonicalization across all pages
- **Performance Optimized** - Dynamic imports, image optimization, caching headers
- **Core Web Vitals** - Monitored LCP, FID, CLS metrics
- **Internationalization** - English and Spanish language support

### UI/UX Features
- **Premium Design** - Modern, high-end interface with glass-morphism effects
- **Responsive Layout** - Mobile-first design that works on all devices
- **Dark Mode Ready** - Theme system with light/dark mode support
- **Smooth Animations** - Micro-interactions and hover effects
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **Loading States** - Skeleton loaders and suspense boundaries
- **Error Handling** - Comprehensive error reporting and recovery

## Tech Stack

### Core Framework
- **Next.js 15.3.5** - React framework with App Router
- **React 19.1.0** - UI library with latest features
- **TypeScript 5.7.3** - Type-safe development
- **Tailwind CSS 4.1.9** - Utility-first CSS framework

### UI Components
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Pre-built component library
- **Lucide React 0.400.0** - Icon library
- **Recharts 2.15.0** - Chart and data visualization library
- **Framer Motion 11.11.17** - Animation library

### Form & Validation
- **React Hook Form 7.54.2** - Form state management
- **Zod 3.25.1** - Schema validation
- **@hookform/resolvers 3.9.1** - Form validation integration

### Utilities
- **date-fns 4.1.0** - Date manipulation
- **clsx 2.1.0** - Conditional class names
- **tailwind-merge 2.5.3** - Merge Tailwind classes
- **class-variance-authority 0.7.0** - Component variants

### Analytics & Monitoring
- **@vercel/analytics 1.4.1** - Web analytics
- **@vercel/speed-insights 1.1.0** - Performance monitoring
- **Custom Performance Monitor** - Core Web Vitals tracking

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/oneskillspk/v0-adsensecalculatoronline22.git
cd adsensecalculator-online
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Set up environment variables (optional):
\`\`\`bash
# Create .env.local file
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-google-analytics-id
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Project Structure

\`\`\`
adsensecalculator-online/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── contact/                  # Contact page
│   │   ├── dashboard/                # Dashboard page
│   │   ├── faq/                      # FAQ page
│   │   ├── how-it-works/             # How It Works page
│   │   ├── optimization-tips/        # Optimization Tips page
│   │   ├── privacy/                  # Privacy Policy page
│   │   ├── terms/                    # Terms of Service page
│   │   ├── layout.tsx                # Root layout with metadata
│   │   ├── page.tsx                  # Homepage
│   │   ├── globals.css               # Global styles and design tokens
│   │   ├── sitemap.ts                # Dynamic sitemap generation
│   │   └── robots.ts                 # Robots.txt configuration
│   ├── components/                   # React components
│   │   ├── ui/                       # shadcn/ui components
│   │   ├── advanced-adsense-calculator.tsx  # Main calculator
│   │   ├── breadcrumb.tsx            # Breadcrumb navigation
│   │   ├── footer.tsx                # Site footer
│   │   ├── saas-header.tsx           # Site header
│   │   ├── json-ld-schema.tsx        # Structured data schemas
│   │   ├── performance-monitor.tsx   # Performance tracking
│   │   └── ...                       # Other components
│   └── lib/                          # Utility functions
│       ├── i18n/                     # Internationalization
│       └── utils.ts                  # Helper functions
├── app/                              # Route wrappers for deployment
├── components/                       # Component wrappers for deployment
├── public/                           # Static assets
├── next.config.mjs                   # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Dependencies and scripts
\`\`\`

## Configuration

### Next.js Configuration
The `next.config.mjs` file includes:
- Image optimization with AVIF/WebP support
- Cache headers for static assets
- Package import optimization
- Console removal in production

### Tailwind CSS
Custom design tokens in `globals.css`:
- Color system with CSS variables
- Typography scale
- Shadow system
- Border radius values
- Spacing scale

## SEO Features

### Meta Tags
- Title, description, keywords on all pages
- Open Graph tags for social sharing
- Twitter Card meta tags
- Canonical URLs
- Alternate language tags (hreflang)

### Structured Data
- Organization schema
- SoftwareApplication schema
- WebApplication schema
- FAQ schema
- HowTo schema
- Article schema
- Breadcrumb schema

### Performance
- Preload critical fonts
- Preconnect to external domains
- DNS prefetch for third-party resources
- Lazy loading for images and components
- Dynamic imports for heavy components

## Internationalization

The application supports multiple languages:
- English (default)
- Spanish

Language files located in `src/lib/i18n/locales/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- First Contentful Paint < 1.5s
- Time to Interactive < 3.0s
- Cumulative Layout Shift < 0.1

## How v0 Deployment Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
- Deployed on [Vercel](https://vercel.com/)
- Created with [v0.app](https://v0.app)

## Support

For support, open an issue on GitHub or contact through the website.

## Author

**AdsenseCalculator.online Team**

- Website: [https://adsensecalculator.online](https://adsensecalculator.online)
- Twitter: [@adsensecalc](https://twitter.com/adsensecalc)

---

Made with ❤️ for content creators and publishers worldwide.

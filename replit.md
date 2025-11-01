# HALEY CIBUS PVT. LTD. Website

## Overview
A modern React-based website for HALEY CIBUS PVT. LTD., featuring product catalog, contact forms, company information, and client showcase. Built with React 19, Vite, and Tailwind CSS 4.

## Project Type
Frontend-only React application with client-side routing.

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Linting**: ESLint 9

## Project Structure
```
src/
├── components/
│   ├── Home.jsx           # Homepage
│   ├── Contact.jsx        # Contact form page
│   ├── AboutUs.jsx        # About page
│   ├── Products.jsx       # Products listing
│   ├── ProductDetail.jsx  # Product details
│   ├── OurClients.jsx     # Client showcase
│   ├── ProductVideos.jsx  # Product videos
│   ├── Header.jsx         # Header component
│   ├── Footer.jsx         # Footer component
│   └── Modals/            # Modal components
├── App.jsx                # Main app with routing
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Routes
- `/` - Home page
- `/about` - About us
- `/products` - Products listing
- `/products/:slug` - Product details
- `/contact` - Contact form
- `/clients` - Client showcase
- `/videos` - Product videos

## Replit Configuration
- **Dev Server**: Runs on port 5000 with 0.0.0.0 host
- **Workflow**: `npm run dev` configured with webview output
- **Vite Config**: Configured for Replit proxy with HMR on port 443

## Recent Changes (Nov 1, 2025)
- Imported from GitHub
- Configured Vite for Replit environment (port 5000, host 0.0.0.0)
- Set up workflow for development server
- Created project documentation
- Enhanced global CSS with improved typography, scrollbars, and accessibility:
  - Better font rendering with antialiasing
  - Custom scrollbar styling matching brand colors (#d19336 gold/orange)
  - Accessible focus states for forms and interactive elements
  - Smooth scroll behavior
  - Custom utility classes (fade-in animation, shadows, selection styling)

## Development
```bash
npm run dev    # Start development server on port 5000
npm run build  # Build for production
npm run lint   # Run ESLint
```

## User Preferences
None specified yet.

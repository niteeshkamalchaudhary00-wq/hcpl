# HALEY CIBUS PVT. LTD. - Contact Page

A modern React contact page for HALEY CIBUS PVT. LTD., built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🔍 Product/Service autocomplete functionality
- 📝 Comprehensive contact form with validation
- 🗺️ Embedded Google Maps
- 📱 Fully responsive design
- ⚡ Fast development with Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   └── Contact.jsx    # Main contact page component
├── App.jsx            # App component
├── App.css            # App styles
├── index.css          # Global styles
└── main.jsx           # Entry point
```

## Features Details

### Contact Form
- Product/Service autocomplete with 70+ products
- Quantity and unit input with autocomplete
- Name, Email, Mobile, and Enquiry Details fields
- Form validation
- Responsive layout

### Contact Information
- Display of company contact details
- Corporate and registered addresses
- Phone numbers and email addresses
- Social media links

### Map Integration
- Embedded Google Maps showing company location

## Build for Production

```bash
npm run build
```

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **ESLint** - Code linting

## Customization

The contact form can be customized by:
- Modifying the `products` array in `Contact.jsx` to add/remove products
- Updating the `units` array for unit types
- Adjusting colors in Tailwind classes (current theme: `#231f20` and `#d19336`)
- Updating contact information in the `contactInfo` array

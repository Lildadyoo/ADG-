# ADG Website - Action for Development Group

A modern, responsive NGO website built with Next.js and Tailwind CSS for Action for Development Group (ADG) - a Uganda-based nonprofit empowering communities through education, health, and sustainable growth.

## Features

- **7 Main Pages**: Home, About, Programs, Get Involved, Gallery, News, and Contact
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean grid layouts, generous whitespace, and smooth transitions
- **Color Palette**: 
  - Deep Blue (#005f86) - Trust, stability
  - Emerald Green (#2D6A4F) - Sustainability, hope
  - Off-White (#F8FAFC) - Calm, clarity
  - Accent Gray (#E5E7EB) - Neutral backgrounds

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── programs/       # Programs page
│   ├── get-involved/   # Get Involved page
│   ├── gallery/        # Gallery page
│   ├── news/           # News pages
│   ├── contact/        # Contact page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   └── Section.tsx     # Reusable section wrapper
└── public/             # Static assets
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## License

This project is created for Action for Development Group (ADG).


# Envell Uz

A multi-page fan website dedicated to the **Envell** animated series, built with React, TypeScript, Vite and Tailwind CSS.

> 🚧 **Work in progress.** The landing page and header are in place; the remaining pages are being built.

## Overview

Envell Uz is a front-end project focused on a bold, neon-inspired visual identity. It uses a custom design system defined with Tailwind CSS 4 theme tokens, client-side routing with React Router, and a component-based structure that is easy to extend with new pages.

## Current Status

**Done**
- Header with logo, navigation pills and a Gallery call-to-action
- Landing page with a hero banner
- Client-side routing setup (`/`, `/about`)
- Custom theme: color palette and fonts (Montserrat, Jersey 20, Geist Pixel)

**In progress / planned**
- About page
- Gallery page
- Game section
- Contact and Support pages
- Wiring the header links to real routes
- Responsive layout polish

## Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 19, TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Routing | React Router |
| Icons | Material Symbols, Font Awesome |
| Linting | ESLint, typescript-eslint |

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Installation

```bash
git clone https://github.com/qayumjon-coder/EnvelluzProject.git
cd EnvelluzProject
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the codebase with ESLint |

## Project Structure

```
.
├── public/
│   └── images/
│       ├── bg_assets/     # banner and background images
│       └── logo/          # site logo
├── src/
│   ├── components/        # Header, Banner
│   ├── pages/
│   │   ├── Landing/
│   │   ├── About/
│   │   └── Gallery/
│   ├── App.tsx            # routes
│   ├── main.tsx           # entry point, router provider
│   └── index.css          # Tailwind import and theme tokens
├── index.html
└── vite.config.ts
```

## Design System

Theme tokens live in `src/index.css` under Tailwind's `@theme` block.

- **Fonts:** Montserrat (body), Jersey 20 (headings), Geist Pixel (accents)
- **Colors:** deep violet backgrounds (`#0a0720`, `#0d0a41`, `#2000af`), electric purple accent (`#5729ff`), pink highlight (`#ff006a`) and soft light tones for text

## Author

Created by [qayumjon-coder](https://github.com/qayumjon-coder).

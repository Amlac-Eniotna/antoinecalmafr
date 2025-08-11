# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Antoine Calma built with Next.js 15, showcasing UX design projects and development skills. The site features a single-page application with smooth scrolling sections (Me, Projects, Contact) and focuses on typography with custom Editorial Old and Editorial Sans fonts.

## Development Commands

- **Development server**: `npm run dev` - Starts the Next.js development server on http://localhost:3000
- **Build**: `npm run build` - Creates an optimized production build
- **Production server**: `npm start` - Starts the production server (requires build first)
- **Linting**: `npm run lint` - Runs ESLint with Next.js configuration

## Architecture & Structure

### Core Architecture
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with inline theme configuration
- **Fonts**: Custom local fonts (Editorial Old & Editorial Sans) loaded via next/font/local
- **Email**: Server actions using nodemailer for contact form

### Key Directories
- `app/` - Next.js app router pages (layout.tsx, page.tsx, globals.css)
- `layout/` - Main section components (header.tsx, me.tsx, projects.tsx, contact.tsx)
- `components/` - Reusable UI components (currently empty)
- `action/` - Server actions (sendMail.ts for contact form)
- `data/` - Static data (projects.json with project portfolio data)
- `fonts/` - Custom font files and configuration
- `public/` - Static assets including project images and CV

### Layout Structure
The main page uses a snap-scroll layout with three sections:
1. **Me** - Hero section with introduction
2. **Projects** - Portfolio showcase with project cards
3. **Contact** - Contact form with email functionality

### Font System
Custom Editorial fonts are optimized for performance:
- Only essential font weights are loaded (ultralight 200, medium 500 for Sans; regular 400 for Old)
- Uses `display: swap` for better loading performance
- Fonts are not preloaded to reduce initial bundle size

### Email Configuration
Contact form requires these environment variables:
- `SMTP_HOST` - SMTP server host
- `SMTP_PORT` - SMTP server port
- `SMTP_SECURE` - Boolean for TLS/SSL
- `SMTP_USER` - SMTP username
- `SMTP_PASSWORD` - SMTP password
- `CONTACT_EMAIL` - Destination email address

## Project Data Structure

Projects are stored in `data/projects/projects.json` with the following schema:
- `title` - Project name
- `url` - Live site URL
- `github` - GitHub repository URL (optional)
- `technologie` - Array of technologies used
- `date` - Project date (MM/YYYY format)
- `image` - Path to project image in /public/projects/
- `description` - French description of the project

## Styling Conventions

- Uses Tailwind CSS v4 with inline theme configuration in globals.css
- Custom CSS classes for card hover animations (.card-invert)
- Responsive design with mobile-first approach
- Snap scrolling for smooth section navigation
- Typography uses ligatures for enhanced readability (.ligatures class)

## Development Notes

- The site is in French (lang="fr" in root layout)
- Images are stored in /public/projects/ and referenced in projects.json
- Contact form uses Zod for validation and server actions for email sending
- Mobile responsiveness handled through CSS media queries and Tailwind classes
- Font optimization prioritizes performance over complete font family loading
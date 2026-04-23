# Tobams Group Landing Page

A modern, responsive landing page for Tobams Group built with Next.js, TypeScript, and Tailwind CSS. This project showcases the company's services in training and development, IT consulting, and talent solutions.

## Project Overview

This is a frontend development test project for a frontend developer intern role. The landing page features a clean, professional design with multiple sections highlighting Tobams Group's offerings and capabilities.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Project Structure

### Pages

#### `src/app/page.tsx`
The main landing page that renders all components in a vertical layout. It serves as the entry point and orchestrates the entire page structure.

### Components

#### Main Components (`src/app/components/`)

1. **Avatar.tsx**
   - Displays user profile images with rounded styling
   - Props: `name` (string), `avatar` (string), `bgColor` (string)
   - Uses Next.js Image component for optimized loading

2. **BookCTA.tsx**
   - Call-to-action section for booking consultations
   - Features responsive design with different text for mobile/desktop
   - Contains a styled button linking to consultation booking

3. **ContactCTA.tsx**
   - Contact call-to-action section at the bottom of the page
   - Dark background with prominent "Get In Touch" button
   - Responsive layout adapting to different screen sizes

4. **EngagementSection.tsx**
   - Highlights key benefits of Tobams Group's training programs
   - Features four key points: Expert-led Learning, Interactive Workshops, Comprehensive Curriculum, and Global Recognition
   - Uses Lucide React icons for visual enhancement

5. **Footer.tsx**
   - Comprehensive footer with company information
   - Includes contact details, social media links, and navigation menus
   - Organized into sections: What We Do, Company, and Contact Info

6. **HeroSection.tsx**
   - Main hero banner with background image
   - Features company tagline and call-to-action button
   - Responsive text sizing and overlay design

7. **OverviewSection.tsx**
   - Introduces the Learning Management System
   - Features a large circular image and descriptive text
   - Lists available courses and program benefits

#### Header Components (`src/app/components/header/`)

8. **Header.tsx**
   - Main navigation header with responsive mobile menu
   - Includes logo, navigation items, and dropdown functionality
   - Uses React hooks for mobile menu and dropdown state management

   **Subcomponents:**
   - **HeaderNavItem.tsx**: Individual navigation menu items
   - **NavDropDownItems.tsx**: Dropdown menu items for navigation

#### Services Section (`src/app/components/services-section/`)

9. **ServiceSection.tsx**
   - Main services showcase section
   - Displays corporate training and personalized individual training services

   **Subcomponents:**
   - **HighlightServiceItem.tsx**: Highlighted service cards with images and bullet points
   - **OtherHighlightServiceItem.tsx**: Alternative service item styling
   - **ServicesItem.tsx**: Standard service item component

#### Testimonials Section (`src/app/components/testimonial-section/`)

10. **TestimonialsSection.tsx**
    - Customer testimonials and reviews section

    **Subcomponents:**
    - **TestimonialCard.tsx**: Individual testimonial cards with user avatars and quotes

#### Utility Components

11. **icons.tsx**
    - Custom icon components for social media platforms
    - Includes InstagramIcon and LinkedInIcon

### Utilities

#### `src/app/utils/colors.ts`
- Color constants and theme definitions
- Centralizes color values used throughout the application

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, professional design with consistent branding
- **Performance Optimized**: Uses Next.js Image component for optimized loading
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling approach
- **Accessibility**: Semantic HTML and proper ARIA attributes

## Component Architecture

The application follows a modular component architecture:

- **Pages**: Top-level route components
- **Main Components**: Reusable UI components
- **Subcomponents**: Smaller, focused components within feature folders
- **Utilities**: Helper functions and constants

This structure promotes maintainability, reusability, and clear separation of concerns.

## Development Notes

This project demonstrates:
- Component composition and props passing
- Responsive design principles
- State management with React hooks
- Modern React patterns (functional components, hooks)
- CSS-in-JS with Tailwind CSS
- Image optimization with Next.js
- TypeScript integration for type safety
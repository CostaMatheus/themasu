# Portfolio Website

## Overview

A modern, responsive one-page portfolio website built with React, TypeScript, and Express. The site features smooth scroll animations, full-screen sections, and a clean UI design system using shadcn/ui components. The portfolio showcases projects, provides contact functionality, and includes a resume section.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **TailwindCSS** for utility-first styling with custom design tokens

**Component Library**
- **shadcn/ui** components (Radix UI primitives) for accessible, pre-styled UI elements
- Custom component aliases configured via `@/components`, `@/lib`, `@/hooks` paths
- Extensive set of UI components including dialogs, forms, buttons, cards, carousels, and more

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management and data fetching
- Custom query client with configured defaults (no automatic refetching, infinite stale time)
- Form handling via **React Hook Form** with **Zod** validation through `@hookform/resolvers`

**UI/UX Features**
- One-page scroll design with full-screen sections (Hero, Projects, Contact, Resume)
- Smooth scroll animations using Intersection Observer API
- Fixed navigation header with mobile responsive menu
- Navigation dots indicator for section tracking
- Mobile-optimized touch carousel for projects section
- Custom fade-in animations with intersection observer hook

### Backend Architecture

**Server Framework**
- **Express.js** server with TypeScript
- Modular route registration system via `registerRoutes` function
- Request/response logging middleware for API endpoints
- Error handling middleware for consistent error responses

**Development Environment**
- Vite middleware integration for HMR in development
- SSR-capable setup with custom HTML template rendering
- Separate build process for client (Vite) and server (esbuild)

**Storage Layer**
- In-memory storage implementation (`MemStorage`) for user data
- Interface-based storage design (`IStorage`) allowing easy swap to database implementations
- CRUD operations for user management (getUser, getUserByUsername, createUser)

### Data Storage Solutions

**Database Configuration (Prepared for PostgreSQL)**
- **Drizzle ORM** configured for PostgreSQL with Neon serverless driver
- Schema definitions in shared directory for type safety across client/server
- Migration system setup via drizzle-kit pointing to `./migrations` directory
- User table schema with UUID primary keys and unique username constraints
- Zod schema integration for runtime validation via `drizzle-zod`

**Current Implementation**
- In-memory storage for development/testing
- Designed for easy migration to PostgreSQL when database is provisioned
- Shared types between storage interface and database schema

### External Dependencies

**UI & Styling**
- **Radix UI** (@radix-ui/*): Accessible component primitives for all interactive elements
- **TailwindCSS** with PostCSS: Utility-first CSS framework with autoprefixer
- **class-variance-authority**: Type-safe variant-based styling
- **clsx** + **tailwind-merge**: Conditional className handling

**Forms & Validation**
- **react-hook-form**: Performant form state management
- **zod**: TypeScript-first schema validation
- **@hookform/resolvers**: React Hook Form + Zod integration

**Data Fetching & State**
- **@tanstack/react-query**: Server state management
- Custom fetch wrapper with credentials and error handling

**Database & ORM**
- **drizzle-orm**: Type-safe SQL ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-kit**: Database migration toolkit

**Date & Utilities**
- **date-fns**: Modern date utility library
- **nanoid**: Unique ID generation
- **embla-carousel-react**: Touch-enabled carousel for mobile projects view

**Development Tools**
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast bundler for production server build
- **@replit/vite-plugin-***: Replit-specific development plugins (error overlay, cartographer, dev banner)

**Session Management**
- **express-session**: Session middleware (prepared for use)
- **connect-pg-simple**: PostgreSQL session store (configured for future use)
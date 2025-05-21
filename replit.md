# RealEstateAI Web Application

## Overview

This is a modern web application for RealEstateAI, a platform that provides AI automation solutions for real estate professionals. The application follows a full-stack architecture with a React frontend and Node.js/Express backend. It uses Drizzle ORM for database interactions and follows modern development practices with TypeScript.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application is structured as a full-stack JavaScript/TypeScript application with distinct client and server components:

1. **Frontend**: React-based SPA with TypeScript, utilizing modern UI components from Radix UI and styled with Tailwind CSS. The UI follows a cohesive design system with a real estate theme.

2. **Backend**: Express.js server running on Node.js, serving both the API endpoints and the static frontend assets. The server is configured to work in both development and production environments.

3. **Database Layer**: Uses Drizzle ORM for database operations. The schema indicates a PostgreSQL database design, though the current implementation uses an in-memory storage for development.

4. **API Design**: RESTful API architecture with JSON as the data exchange format. Currently includes a contact form submission endpoint.

5. **Build System**: Vite for frontend bundling and esbuild for server-side code. This enables fast development and optimized production builds.

## Key Components

### Frontend Components

1. **UI Framework**: 
   - Uses shadcn/ui, which is built on Radix UI primitives
   - Fully styled with Tailwind CSS using a custom color theme
   - Component library includes buttons, forms, navigation elements, etc.

2. **Page Structure**:
   - Landing page with multiple sections: Hero, Solutions, Data Quality, Security, etc.
   - Responsive design that works across device sizes

3. **Application State Management**:
   - TanStack React Query for API data fetching and caching
   - React's Context API for UI state management

4. **Routing**:
   - Uses Wouter for lightweight client-side routing

### Backend Components

1. **Server**:
   - Express.js application with middleware for parsing JSON and URL-encoded requests
   - Route handlers for API endpoints
   - Request logging
   - Error handling middleware

2. **Storage**:
   - Interface-based storage system that allows different implementations (in-memory vs. database)
   - User model with basic CRUD operations
   - Schema defined with Drizzle ORM and validated with Zod

3. **Vite Integration**:
   - Development server setup with HMR (Hot Module Replacement)
   - Static file serving
   - Custom logging

## Data Flow

1. **Frontend to Backend**:
   - API requests using fetch with JSON payloads
   - Contact form submissions
   - Query client manages request state and caching

2. **Backend Processing**:
   - Request validation using Zod schemas
   - Business logic processing
   - Database operations through the storage layer

3. **Response Handling**:
   - JSON responses with appropriate status codes
   - Error handling with descriptive messages
   - UI state updates based on response data

## External Dependencies

### Frontend Dependencies

1. **UI Components**:
   - Radix UI: Accessible component primitives
   - Tailwind CSS: Utility-first CSS framework
   - Lucide React: Icon library
   - React Hook Form: Form validation library
   - Zod: Schema validation

2. **Data Management**:
   - TanStack React Query: Data fetching and state management
   - Wouter: Lightweight routing

### Backend Dependencies

1. **Core**:
   - Express: Web server framework
   - Drizzle ORM: Database ORM
   - Zod: Schema validation

2. **Database**:
   - PostgreSQL: Database (via Neon serverless)
   - @neondatabase/serverless: Serverless PostgreSQL client

3. **Development**:
   - Vite: Development server and build tool
   - esbuild: JavaScript bundler
   - TypeScript: Type checking and compilation

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Build Process**:
   - Frontend: Vite builds static assets
   - Backend: esbuild bundles server code into a single file

2. **Runtime**:
   - Node.js 20 serving the express application
   - PostgreSQL 16 database
   - Port 5000 mapped to external port 80

3. **Development Mode**:
   - `npm run dev` starts the development server
   - Hot module reloading for frontend changes
   - Automatic restart for backend changes

4. **Production Mode**:
   - `npm run build` creates optimized production bundles
   - `npm run start` runs the production server
   - Environment-specific configuration via NODE_ENV

## Database Schema

The application uses a simple schema with a users table:

```
users table:
- id: serial primary key
- username: text (unique, not null)
- password: text (not null)
```

The schema is defined using Drizzle ORM and can be extended with additional tables as needed.

## Current Implementation Status

1. **Complete**:
   - Frontend UI components and pages
   - Basic server setup
   - Contact form API endpoint
   - Storage interface
   - Build configuration

2. **In Progress / To Be Implemented**:
   - Database integration with Postgres
   - Authentication system
   - Additional API endpoints
   - Real data integration

## Extension Points

1. **Authentication**: Implement a full auth system using the existing user schema.
2. **Database Migration**: Move from in-memory to PostgreSQL storage implementation.
3. **Additional Features**: Add more real estate specific functionality like listing management, scheduling, etc.
4. **Testing**: Add unit and integration tests.
5. **Analytics**: Implement tracking and reporting features.
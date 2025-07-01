# 🌐 NEXUS Platform MVP

**Modern Corporate Website Platform** built with cutting-edge technologies for maximum performance,
scalability, and user experience.

## 🎯 Project Overview

NEXUS Platform is a comprehensive corporate website solution designed for IT companies and modern
businesses. It provides a robust foundation for showcasing services, managing team members, handling
contact inquiries, and delivering exceptional user experiences through interactive animations and
responsive design.

### ✨ Vision

- **Innovation-First**: Leverage the latest web technologies to create standout experiences
- **Performance-Optimized**: Lightning-fast loading and smooth interactions
- **Scalable Architecture**: Built to grow with your business needs
- **Developer-Friendly**: Clean code structure with comprehensive documentation

## 🚀 Key Features

- **🏢 Corporate Showcase**: Professional service presentation with dynamic content management
- **👥 Team Management**: Comprehensive team member profiles with social integration
- **📧 Contact System**: Advanced contact form with status tracking and CRM capabilities
- **🎨 Modern UI/UX**: Tailwind CSS with Framer Motion animations
- **🔒 Secure Backend**: Supabase integration with Row Level Security
- **📱 Responsive Design**: Mobile-first approach with cross-device compatibility
- **⚡ Performance**: Next.js 15 with Turbopack for blazing-fast development
- **🔧 TypeScript**: Full type safety and enhanced developer experience

## 🛠️ Technology Stack

### Frontend

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12](https://www.framer.com/motion/)** - Production-ready motion library

### Backend & Database

- **[Supabase](https://supabase.com/)** - Backend-as-a-Service
  - PostgreSQL Database
  - Authentication & Authorization
  - Real-time subscriptions
  - Edge Functions
  - Storage

### Development Tools

- **[Turbopack](https://turbo.build/pack)** - Ultra-fast bundler for development
- **[ESLint 9](https://eslint.org/)** - Code linting and quality
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons
- **[clsx](https://github.com/lukeed/clsx)** &
  **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Conditional class handling

## 🏗️ Project Structure

```
nexus-platform/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   └── lib/
│       └── supabase.ts         # Supabase client & types
├── public/                     # Static assets
├── docs/                       # Project documentation
├── package.json                # Dependencies & scripts
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── next.config.ts             # Next.js configuration
```

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** (recommended: 20+)
- **npm**, **yarn**, **pnpm**, or **bun**
- **Supabase Account** (for backend services)

### 1. Installation

```bash
# Clone the repository
git clone [repository-url]
cd nexus-platform

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Additional environment variables
DATABASE_URL=your_supabase_database_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Database Setup

The project includes predefined database schemas for:

- `contacts` - Contact form submissions
- `team_members` - Team member profiles
- `services` - Service offerings

**Supabase SQL Schema:**

```sql
-- Create contacts table
CREATE TABLE contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'processing', 'resolved')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Create team_members table
CREATE TABLE team_members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    bio TEXT NOT NULL,
    image_url TEXT,
    linkedin_url TEXT,
    github_url TEXT,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Create services table
CREATE TABLE services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    features TEXT[] NOT NULL DEFAULT '{}',
    icon TEXT NOT NULL,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);
```

### 4. Development Server

```bash
# Start development server with Turbopack
npm run dev

# Alternative package managers
yarn dev
pnpm dev
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 Usage Guide

### Development Workflow

1. **Component Development**: Create reusable components in `src/components/`
2. **Page Creation**: Add new pages in `src/app/` following App Router conventions
3. **Database Operations**: Use the Supabase client from `src/lib/supabase.ts`
4. **Styling**: Utilize Tailwind CSS classes with custom configurations
5. **Animations**: Implement Framer Motion for enhanced user interactions

### Key Files to Modify

- `src/app/page.tsx` - Main landing page
- `src/app/layout.tsx` - Global layout and metadata
- `src/lib/supabase.ts` - Database types and client configuration
- `tailwind.config.js` - Custom design system configurations

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint code analysis

# Database
npm run db:types     # Generate TypeScript types from Supabase schema
npm run db:reset     # Reset database to initial state
```

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

```bash
# Manual deployment
npm run build
npm run start
```

### Other Platforms

- **Netlify**: Configure build settings for Next.js
- **Railway**: Use the provided Dockerfile
- **DigitalOcean App Platform**: Configure app spec

## 🏗️ Architecture Decisions

### Why Next.js 15?

- **App Router**: Modern routing with layouts and nested routes
- **Server Components**: Improved performance and SEO
- **Turbopack**: Significantly faster development builds
- **Image Optimization**: Automatic image optimization and lazy loading

### Why Supabase?

- **PostgreSQL**: Reliable, ACID-compliant database
- **Real-time**: WebSocket connections for live updates
- **Authentication**: Built-in auth with social providers
- **Edge Functions**: Serverless functions at the edge

### Why Tailwind CSS 4?

- **Performance**: Smaller bundle sizes with new engine
- **Developer Experience**: Better IntelliSense and debugging
- **Customization**: Extensive theming capabilities
- **Consistency**: Design system enforcement

## 📚 Documentation

- [Technical Specifications](./docs/TECHNICAL_SPEC.md) - Detailed system architecture
- [API Documentation](./docs/API.md) - Backend API endpoints
- [Component Library](./docs/COMPONENTS.md) - Reusable component documentation
- [Deployment Guide](./docs/DEPLOYMENT.md) - Production deployment instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards

- Follow TypeScript strict mode
- Use Prettier for code formatting
- Write comprehensive tests for new features
- Maintain high code coverage (>80%)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [nexus-platform.vercel.app](https://nexus-platform.vercel.app)
- **Documentation**: [docs.nexus-platform.com](https://docs.nexus-platform.com)
- **Support**: [support@nexus-platform.com](mailto:support@nexus-platform.com)

---

**Built with ❤️ by the NEXUS Platform Team**

_Empowering businesses with modern web technologies_

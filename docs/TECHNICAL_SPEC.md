# 🏗️ NEXUS Platform - Technical Specifications

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Database Design](#database-design)
3. [API Specifications](#api-specifications)
4. [Frontend Architecture](#frontend-architecture)
5. [Backend Architecture](#backend-architecture)
6. [Security & Authentication](#security--authentication)
7. [Performance Optimization](#performance-optimization)
8. [Deployment Architecture](#deployment-architecture)

## System Architecture

### 🎯 Overview

NEXUS Platform follows a modern **JAMstack architecture** with a **serverless backend**, ensuring
high performance, scalability, and maintainability.

```mermaid
graph TB
    A[Client Browser] --> B[Next.js Frontend]
    B --> C[Supabase Edge Functions]
    B --> D[Supabase Database]
    C --> D
    B --> E[Vercel CDN]
    D --> F[PostgreSQL]
    G[Admin Dashboard] --> D
    H[External APIs] --> C
```

### 🏭 Architecture Layers

#### 1. Presentation Layer (Frontend)

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 + Framer Motion
- **State Management**: React Server Components + Client State
- **Routing**: File-based routing with layouts

#### 2. API Layer (Backend)

- **Database**: Supabase PostgreSQL
- **Authentication**: Supabase Auth with RLS
- **Real-time**: Supabase Realtime subscriptions
- **Functions**: Supabase Edge Functions (Deno)
- **Storage**: Supabase Storage for file uploads

#### 3. Data Layer

- **Primary Database**: PostgreSQL with Row Level Security
- **Caching**: Redis for session and API caching
- **CDN**: Vercel Edge Network for static assets
- **Search**: PostgreSQL Full-Text Search

## Database Design

### 📊 Entity Relationship Diagram

```mermaid
erDiagram
    CONTACTS {
        uuid id PK
        text name
        text email
        text company
        text message
        enum status
        timestamp created_at
    }

    TEAM_MEMBERS {
        uuid id PK
        text name
        text role
        text bio
        text image_url
        text linkedin_url
        text github_url
        integer order_index
        timestamp created_at
    }

    SERVICES {
        uuid id PK
        text title
        text description
        text_array features
        text icon
        integer order_index
        timestamp created_at
    }

    PROJECTS {
        uuid id PK
        text title
        text description
        text image_url
        text demo_url
        text github_url
        text_array technologies
        integer order_index
        boolean featured
        timestamp created_at
    }

    BLOG_POSTS {
        uuid id PK
        text title
        text slug
        text excerpt
        text content
        text author_id
        text featured_image
        text_array tags
        boolean published
        timestamp published_at
        timestamp created_at
        timestamp updated_at
    }

    BLOG_POSTS ||--|| TEAM_MEMBERS : "authored_by"
```

### 🗃️ Database Schema

#### Contacts Table

```sql
CREATE TABLE contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL CHECK (char_length(name) <= 100),
    email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    company TEXT CHECK (char_length(company) <= 100),
    message TEXT NOT NULL CHECK (char_length(message) <= 2000),
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'processing', 'resolved')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),

    -- Indexes for performance
    CONSTRAINT contacts_email_valid CHECK (email IS NOT NULL),
    CONSTRAINT contacts_name_valid CHECK (name IS NOT NULL AND trim(name) != '')
);

-- Indexes
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX idx_contacts_email ON contacts(email);
```

#### Team Members Table

```sql
CREATE TABLE team_members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL CHECK (char_length(name) <= 100),
    role TEXT NOT NULL CHECK (char_length(role) <= 100),
    bio TEXT NOT NULL CHECK (char_length(bio) <= 1000),
    image_url TEXT,
    linkedin_url TEXT CHECK (linkedin_url ~* '^https?://.*linkedin\.com/.*' OR linkedin_url IS NULL),
    github_url TEXT CHECK (github_url ~* '^https?://.*github\.com/.*' OR github_url IS NULL),
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),

    -- Constraints
    CONSTRAINT team_members_order_unique UNIQUE (order_index),
    CONSTRAINT team_members_name_valid CHECK (trim(name) != '')
);

-- Indexes
CREATE INDEX idx_team_members_order ON team_members(order_index);
CREATE INDEX idx_team_members_role ON team_members(role);
```

#### Services Table

```sql
CREATE TABLE services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL CHECK (char_length(title) <= 200),
    description TEXT NOT NULL CHECK (char_length(description) <= 1000),
    features TEXT[] NOT NULL DEFAULT '{}',
    icon TEXT NOT NULL CHECK (char_length(icon) <= 50),
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),

    -- Constraints
    CONSTRAINT services_order_unique UNIQUE (order_index),
    CONSTRAINT services_title_valid CHECK (trim(title) != ''),
    CONSTRAINT services_features_valid CHECK (array_length(features, 1) <= 10)
);

-- Indexes
CREATE INDEX idx_services_order ON services(order_index);
CREATE INDEX idx_services_title ON services(title);
```

### 🔒 Row Level Security (RLS) Policies

```sql
-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Public read access for team_members and services
CREATE POLICY "Public read access" ON team_members FOR SELECT USING (true);
CREATE POLICY "Public read access" ON services FOR SELECT USING (true);

-- Admin only write access
CREATE POLICY "Admin write access" ON team_members FOR ALL USING (auth.role() = 'admin');
CREATE POLICY "Admin write access" ON services FOR ALL USING (auth.role() = 'admin');

-- Contact form submissions (public insert, admin read/update)
CREATE POLICY "Public insert contacts" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin manage contacts" ON contacts FOR ALL USING (auth.role() = 'admin');
```

## API Specifications

### 🚀 REST API Endpoints

#### Contact Management

```typescript
// POST /api/contacts - Submit contact form
interface ContactRequest {
  name: string; // Required, max 100 chars
  email: string; // Required, valid email format
  company?: string; // Optional, max 100 chars
  message: string; // Required, max 2000 chars
}

interface ContactResponse {
  id: string;
  status: 'success' | 'error';
  message: string;
  data?: Contact;
}

// GET /api/contacts - Get all contacts (Admin only)
interface ContactsResponse {
  contacts: Contact[];
  total: number;
  page: number;
  limit: number;
}

// PATCH /api/contacts/[id] - Update contact status (Admin only)
interface UpdateContactRequest {
  status: 'new' | 'processing' | 'resolved';
}
```

#### Team Management

```typescript
// GET /api/team - Get team members
interface TeamResponse {
  members: TeamMember[];
  total: number;
}

// POST /api/team - Create team member (Admin only)
interface CreateTeamMemberRequest {
  name: string;
  role: string;
  bio: string;
  image_url?: string;
  linkedin_url?: string;
  github_url?: string;
  order_index: number;
}
```

#### Services Management

```typescript
// GET /api/services - Get services
interface ServicesResponse {
  services: Service[];
  total: number;
}

// POST /api/services - Create service (Admin only)
interface CreateServiceRequest {
  title: string;
  description: string;
  features: string[];
  icon: string;
  order_index: number;
}
```

### 📡 Supabase Client Configuration

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

// Type-safe database operations
export const contactsService = {
  async create(contact: Database['public']['Tables']['contacts']['Insert']) {
    return supabase.from('contacts').insert(contact).select().single();
  },

  async getAll(page = 1, limit = 10) {
    const { data, error, count } = await supabase
      .from('contacts')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range((page - 1) * limit, page * limit - 1);

    return { data, error, count };
  },

  async updateStatus(
    id: string,
    status: Database['public']['Tables']['contacts']['Row']['status']
  ) {
    return supabase.from('contacts').update({ status }).eq('id', id).select().single();
  },
};
```

## Frontend Architecture

### 🎨 Component Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   ├── layout/                # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/              # Page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   └── Contact.tsx
│   └── forms/                 # Form components
│       ├── ContactForm.tsx
│       └── NewsletterForm.tsx
├── hooks/                     # Custom React hooks
│   ├── useContact.ts
│   ├── useTeam.ts
│   └── useServices.ts
├── lib/                       # Utilities and configurations
│   ├── supabase.ts
│   ├── utils.ts
│   └── validations.ts
└── types/                     # TypeScript type definitions
    ├── database.ts
    └── api.ts
```

### 🎯 Component Design Patterns

#### 1. Compound Components Pattern

```typescript
// components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
      {children}
    </div>
  )
}

function CardHeader({ children, className }: CardProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
      {children}
    </div>
  )
}

function CardContent({ children, className }: CardProps) {
  return (
    <div className={cn("p-6 pt-0", className)}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Content = CardContent
```

#### 2. Custom Hooks for Data Fetching

```typescript
// hooks/useContact.ts
import { useState } from 'react';
import { contactsService } from '@/lib/supabase';

export function useContact() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContact = async (data: ContactRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await contactsService.create(data);
      if (result.error) throw new Error(result.error.message);
      return result.data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { submitContact, isLoading, error };
}
```

### 🎭 Animation & Interactions

```typescript
// components/sections/Hero.tsx
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

export function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center"
    >
      <motion.h1 variants={itemVariants} className="text-5xl font-bold">
        Welcome to NEXUS Platform
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xl mt-4">
        Next-generation web solutions
      </motion.p>
    </motion.section>
  )
}
```

## Backend Architecture

### 🔧 Supabase Edge Functions

```typescript
// supabase/functions/contact-submission/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  message: string;
}

serve(async req => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { name, email, company, message }: ContactSubmission = await req.json();

    // Validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Insert contact
    const { data, error } = await supabase
      .from('contacts')
      .insert({ name, email, company, message })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(JSON.stringify({ error: 'Failed to save contact' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send notification email (optional)
    await sendNotificationEmail(data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});

async function sendNotificationEmail(contact: any) {
  // Email notification logic
  // Integration with services like Resend, SendGrid, etc.
}
```

## Security & Authentication

### 🛡️ Security Implementation

#### 1. Input Validation & Sanitization

```typescript
// lib/validations.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name contains invalid characters'),

  email: z
    .string()
    .email('Invalid email format')
    .max(254, 'Email must be less than 254 characters'),

  company: z.string().max(100, 'Company name must be less than 100 characters').optional(),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
});

export const validateContact = (data: unknown) => {
  return contactSchema.safeParse(data);
};
```

#### 2. Rate Limiting

```typescript
// lib/rate-limit.ts
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function rateLimit(identifier: string, limit = 5, window = 3600) {
  const key = `rate_limit:${identifier}`;
  const current = await redis.incr(key);

  if (current === 1) {
    await redis.expire(key, window);
  }

  return {
    success: current <= limit,
    remaining: Math.max(0, limit - current),
    resetTime: Date.now() + window * 1000,
  };
}
```

#### 3. CSRF Protection

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // CSRF protection for form submissions
  if (request.method === 'POST' && request.nextUrl.pathname.startsWith('/api/')) {
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');

    if (!origin || !host || !origin.endsWith(host)) {
      return new NextResponse('Forbidden', { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
```

## Performance Optimization

### ⚡ Frontend Optimizations

#### 1. Code Splitting & Lazy Loading

```typescript
// app/admin/page.tsx
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const AdminDashboard = dynamic(() => import('@/components/admin/Dashboard'), {
  loading: () => <div>Loading dashboard...</div>,
  ssr: false
})

export default function AdminPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminDashboard />
    </Suspense>
  )
}
```

#### 2. Image Optimization

```typescript
// components/TeamMember.tsx
import Image from 'next/image'

interface TeamMemberProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberProps) {
  return (
    <div className="team-member-card">
      <Image
        src={member.image_url || '/default-avatar.jpg'}
        alt={member.name}
        width={300}
        height={300}
        className="rounded-full"
        priority={false}
        placeholder="blur"
        blurDataURL="/avatar-placeholder.jpg"
      />
    </div>
  )
}
```

#### 3. Caching Strategies

```typescript
// app/api/services/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const { data, error } = await supabase.from('services').select('*').order('order_index');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
```

### 🗄️ Database Optimizations

#### 1. Query Optimization

```sql
-- Efficient pagination with cursor-based pagination
SELECT * FROM contacts
WHERE created_at < $1
ORDER BY created_at DESC
LIMIT 20;

-- Composite indexes for common query patterns
CREATE INDEX idx_contacts_status_created ON contacts(status, created_at DESC);
CREATE INDEX idx_team_members_active_order ON team_members(active, order_index) WHERE active = true;
```

#### 2. Connection Pooling

```typescript
// lib/supabase-admin.ts
import { createClient } from '@supabase/supabase-js';

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    db: {
      schema: 'public',
    },
    global: {
      headers: {
        Connection: 'keep-alive',
      },
    },
  }
);
```

## Deployment Architecture

### 🚀 Production Deployment

#### 1. Vercel Configuration

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/api/sitemap"
    }
  ]
}
```

#### 2. Environment Variables

```bash
# Production Environment Variables
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
DATABASE_URL=postgresql://user:pass@host:port/db
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-redis-token
RESEND_API_KEY=your-resend-api-key
```

#### 3. CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build application
        run: npm run build
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### 📊 Monitoring & Analytics

#### 1. Error Tracking

```typescript
// lib/monitoring.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
});

export { Sentry };
```

#### 2. Performance Monitoring

```typescript
// lib/analytics.ts
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  )
}
```

---

**Document Version**: 1.0.0  
**Last Updated**: 2025-07-01  
**Maintained by**: NEXUS Platform Team

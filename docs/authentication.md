# Authentication Guide

## Overview

All authentication in this application is handled exclusively by **Clerk**. No other authentication methods or providers should be implemented.

## Core Rules

### 1. Clerk Only
- **NEVER** implement custom authentication logic
- **NEVER** use alternative auth providers (Auth.js, NextAuth, Firebase Auth, etc.)
- All auth-related features must use Clerk's SDK and components

### 2. Protected Routes

**Dashboard Route (`/dashboard`)**
- Must be protected and require authentication
- Unauthenticated users should be redirected to sign-in

**Implementation Pattern:**
```typescript
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }
  
  // Dashboard content...
}
```

### 3. Home Page Redirection

**Rule:** If a user is authenticated and visits the home page (`/`), redirect them to `/dashboard`.

**Implementation Pattern:**
```typescript
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const { userId } = await auth();
  
  if (userId) {
    redirect('/dashboard');
  }
  
  // Home page content for unauthenticated users...
}
```

### 4. Sign In / Sign Up Modals

**Rule:** Sign In and Sign Up flows must always launch as modals, not separate pages.

**Implementation:**
- Use Clerk's `<SignIn />` and `<SignUp />` components with modal mode
- Configure in middleware or component props to display as overlays
- Ensure seamless UX without full page navigation

**Example:**
```typescript
import { SignIn } from '@clerk/nextjs';

export default function SignInModal() {
  return (
    <SignIn 
      routing="hash"
      appearance={{
        elements: {
          // Modal styling
        }
      }}
    />
  );
}
```

## Environment Variables

Required Clerk environment variables in `.env.local`:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_***
CLERK_SECRET_KEY=sk_***
```

## Middleware Setup

Configure Clerk middleware to protect routes:

```typescript
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
```

## Common Patterns

### Get Current User
```typescript
import { currentUser } from '@clerk/nextjs/server';

const user = await currentUser();
```

### Check Authentication Status
```typescript
import { auth } from '@clerk/nextjs/server';

const { userId } = await auth();
const isAuthenticated = !!userId;
```

### User Button Component (Client)
```typescript
'use client';

import { UserButton } from '@clerk/nextjs';

export function HeaderUserButton() {
  return <UserButton afterSignOutUrl="/" />;
}
```

## Security Checklist

- ✅ All auth handled by Clerk
- ✅ `/dashboard` requires authentication
- ✅ Authenticated users redirected from `/` to `/dashboard`
- ✅ Sign In/Sign Up use modal mode
- ✅ Server-side auth checks on protected routes
- ✅ Never trust client-side auth state for authorization
- ✅ Environment variables properly configured

## Resources

- [Clerk Next.js Documentation](https://clerk.com/docs/quickstarts/nextjs)
- [Clerk Components](https://clerk.com/docs/components/overview)

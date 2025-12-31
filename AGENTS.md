# Agent Instructions - Link Shortener Project

## ⚠️ CRITICAL: READ DOCUMENTATION FIRST

**DO NOT generate any code without first reading the relevant documentation file in [/docs](docs/).**

This is not optional. Every code generation task requires:
1. **FIRST**: Read the appropriate .md file from [/docs](docs/)
2. **THEN**: Generate code following those specific guidelines

Generating code without reading documentation will result in:
- ❌ Incorrect patterns and architecture
- ❌ Missing security considerations
- ❌ Non-compliant component usage
- ❌ Code that will need to be rewritten

---

## Quick Start

This is a modern link shortener application built with **Next.js 16**, **React 19**, **TypeScript 5**, **Drizzle ORM**, **Clerk Auth**, and **Tailwind CSS 4**.

## Documentation Structure

**READ THE RELEVANT FILE BEFORE CODING:**

- **[Authentication](docs/authentication.md)** - Clerk authentication setup, protected routes, and auth patterns
  - *Read this before: any auth code, protected routes, user data access*
- **[UI Components](docs/ui-components.md)** - shadcn/ui component standards and usage guidelines
  - *Read this before: creating/using any UI components, forms, buttons*

## Core Principles

1. **Type Safety First** - Strict TypeScript, no `any` without justification
2. **Server-First Architecture** - Default to Server Components, use Client Components only when needed
3. **Security Always** - Validate all inputs server-side, never trust client data
4. **Performance Matters** - Optimize for Core Web Vitals, use proper data fetching patterns
5. **Accessibility** - Semantic HTML, proper ARIA labels, keyboard navigation
6. **Clean Code** - Self-documenting, maintainable, and idiomatic

## Quick Reference

### File Structure
```
/app          # Next.js App Router (layouts, pages)
/db           # Database config and schema
/lib          # Shared utilities
/docs         # Detailed documentation
/public       # Static assets
```

### Essential Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
```

### Environment Variables
Required in `.env.local`:
- `DATABASE_URL` - Neon PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk public key
- `CLERK_SECRET_KEY` - Clerk secret key

---

**For detailed guidelines, patterns, and examples, refer to the documentation in [/docs](docs/).**
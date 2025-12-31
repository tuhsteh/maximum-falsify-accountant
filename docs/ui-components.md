# UI Components

This document outlines the UI component standards for the Link Shortener project.

## Component Library

This project uses **[shadcn/ui](https://ui.shadcn.com/)** exclusively for all UI components.

## Core Principles

1. **No Custom Components** - Use shadcn/ui components directly. Do not create custom UI components from scratch.
2. **Consistent Design System** - shadcn/ui provides a cohesive design system built on Radix UI primitives and Tailwind CSS.
3. **Accessible by Default** - All shadcn/ui components follow accessibility best practices.

## Usage Guidelines

### Adding New Components

When you need a UI component:

1. Check if shadcn/ui provides it: https://ui.shadcn.com/docs/components
2. Install the component using the CLI:
   ```bash
   npx shadcn@latest add [component-name]
   ```
3. Import and use the component in your code

### Available Components

shadcn/ui provides a comprehensive set of components including:

- **Forms**: Button, Input, Label, Textarea, Select, Checkbox, Radio Group, Switch, Slider
- **Layout**: Card, Separator, Tabs, Dialog, Sheet, Popover, Dropdown Menu
- **Feedback**: Alert, Toast, Progress, Skeleton, Badge
- **Data Display**: Table, Avatar, Calendar, Accordion
- **Navigation**: Navigation Menu, Command, Breadcrumb
- **Usage Examples**: [shadcn/ui Examples](https://ui.shadcn.com/examples)

### Component Customization

- shadcn/ui components are installed directly into your codebase (in `/components/ui/`)
- You can modify the component code if needed, but prefer composition over modification
- Use Tailwind CSS classes via the `className` prop for styling variations
- Use the `cn()` utility from `/lib/utils.ts` to merge class names

### Example

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function MyForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Link</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter URL" />
        <Button>Shorten</Button>
      </CardContent>
    </Card>
  )
}
```

## Important Notes

- **Do not install other UI libraries** (Material UI, Ant Design, Chakra, etc.)
- **Do not create custom button, input, or form components** - use shadcn/ui versions
- If a component doesn't exist in shadcn/ui, compose existing components or ask for guidance

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [Radix UI Primitives](https://www.radix-ui.com/primitives) (underlying library)

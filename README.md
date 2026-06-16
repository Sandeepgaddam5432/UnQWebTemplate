# UnQWebTemplate

<p align="center">
  <strong>A Premium, Cinematic Next.js Web Template &mdash; The Complete UI/UX Universe</strong>
</p>

<p align="center">
  Built with ❤️ by <strong>Sandeep Gaddam</strong>
</p>

<p align="center">
  <em>Where Design Meets Innovation</em>
</p>

---

## Overview

UnQWebTemplate is a production-ready, visually stunning Next.js web template that combines the power of 21st.dev ecosystem, Magic UI components, shadcn/ui, and custom-built cinematic animations into a single premium template. Featuring 19+ showcase pages, 65+ UI components, and integration with the 21st.dev component registry, this is not just a template &mdash; it's a complete UI/UX universe.

## Pages

| # | Page | Route | Description |
|---|------|-------|-------------|
| 1 | **Landing** | `/` | Cinematic hero, bento grid, orbit features, testimonials, glass swiper, particle effects |
| 2 | **Dashboard** | `/dashboard` | Stats, charts, data tables, glass calendar & clock, terminal, marquee |
| 3 | **AI Tools** | `/tools` | AI image/video generation, API playground, expandable tabs |
| 4 | **Component Explorer** | `/explorer` | Searchable gallery of 65+ components with live preview & copy-code |
| 5 | **SaaS Landing** | `/saas` | Hero, stats, features, pricing tiers, testimonials, CTA |
| 6 | **Marketing** | `/marketing` | Announcement bar, globe hero, logo cloud, comparison, FAQ |
| 7 | **Blocks Gallery** | `/blocks` | 21 reusable page sections: heroes, features, CTAs, pricing, footers |
| 8 | **Components** | `/components` | shadcn/ui: buttons, badges, cards, avatars, accordions, dialogs, tabs |
| 9 | **Animations** | `/animations` | Hero, morphing cards, stagger, parallax, spring, word rotate, hyper text |
| 10 | **Cards** | `/cards` | Magic cards, bento grid, glassmorphism, gradient, meteors, hover effects |
| 11 | **Navigation** | `/navigation` | Expandable tabs, macOS dock, breadcrumbs, floating nav, sidebars |
| 12 | **Forms** | `/forms` | Contact, login, registration, settings, multi-step with progress |
| 13 | **Data Display** | `/data-display` | Data tables, timelines, charts, orbital timeline, collection view |
| 14 | **Feedback** | `/feedback` | Alerts, toasts, toggles, progress bars, skeletons, hover cards |
| 15 | **Loaders** | `/loaders` | Cube loader, spinners, skeletons, progress, page transitions |
| 16 | **Effects** | `/effects` | Particles, aurora, border beam, marquee, meteors, animated beam |
| 17 | **Search** | `/search` | Command palette, global search, filtered search, recent searches |
| 18 | **Calendar & Clock** | `/calendar-clock` | Glass calendar, glass clock, world clock, date picker |
| 19 | **About** | `/about` | Creator info, tech stack, 15-page showcase, open source |

## Component Sources

### 21st.dev Ecosystem (Magic UI)

Components installed from the 21st.dev registry via Magic UI:

| Component | Description |
|-----------|-------------|
| MagicCard | Animated gradient card with mouse tracking |
| BorderBeam | Animated beam border effect |
| AnimatedBeam | SVG beam connections between elements |
| Marquee | Auto-scrolling content marquee |
| Meteors | Meteor shower animation overlay |
| OrbitingCircles | Orbiting circle animation |
| Particles | Interactive particle background |
| Ripple | Click ripple effect |
| AnimatedGridPattern | Animated grid background |
| DotPattern | Dot pattern background |
| FlickeringGrid | Flickering grid effect |
| GridPattern | Grid pattern background |
| Globe | 3D interactive globe |
| NumberTicker | Animated number counter |
| WordRotate | Rotating words animation |
| BlurFade | Blur-to-fade entrance animation |
| HyperText | Scramble/decode text animation |
| ScrollBasedVelocity | Velocity-based scroll text |
| Terminal | Terminal/command-line component |
| AnimatedList | Staggered list entrance animation |
| CoolMode | Fun particle click effect |

### shadcn/ui

Full set of shadcn/ui components: Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Checkbox, Collapsible, Command, ContextMenu, Dialog, Drawer, DropdownMenu, Form, HoverCard, Input, InputOTP, Label, Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toast, Toggle, ToggleGroup, Tooltip

### Custom Components

GlassCalendar, GlassClock, ParticleTextEffect, MacOSDock, RadialOrbitalTimeline, ShamayimToggleSwitch, CubeLoader, ActionSearchBar, APIPlayground, AIMultiModalGeneration, ExpandableTabs, BentoGrid, HeroGeometric, TestimonialStack, AnimatedTestimonials, FooterSection, StackFeatureSection, AlertBanner, DataTable, Timeline

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/) + [Magic UI](https://magicui.design/) (21st.dev)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **3D**: [Three.js](https://threejs.org/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Database**: [Prisma](https://www.prisma.io/) with SQLite
- **State**: [Zustand](https://zustand-demo.pmnd.rs/) + [TanStack Query](https://tanstack.com/query)

## Design System

### Color Palette

- **Primary**: Terracotta/Copper (`#c96442` light / `#d97757` dark)
- **Background**: Warm neutrals with cinematic dark tones
- **Accent**: Soft amber highlights with glassmorphism effects

### Design Principles

- **Cinematic First**: Every page feels like a premium visual experience
- **21st.dev Powered**: Integrating the best of the 21st.dev component ecosystem
- **Accessibility**: 4.5:1 contrast ratios, semantic HTML, ARIA support
- **Responsive**: Mobile-first design with touch-friendly 44px targets
- **Performance**: Optimized animations, lazy loading, efficient rendering

## Getting Started

### Prerequisites

- Node.js 18+
- Bun (recommended) or npm

### Installation

```bash
git clone <repository-url>
cd unq-web-template
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Installing More 21st.dev Components

```bash
# Install any component from the 21st.dev ecosystem
npx shadcn@latest add "https://magicui.design/r/COMPONENT_NAME"

# Example: Install the sparkles component
npx shadcn@latest add "https://magicui.design/r/sparkles"
```

Browse available components at [21st.dev](https://21st.dev) or [magicui.design](https://magicui.design).

## Project Structure

```
unq-web-template/
├── src/
│   ├── app/                    # 19+ Next.js App Router pages
│   ├── components/
│   │   ├── ui/                 # 65+ UI components
│   │   │   ├── magic-card.tsx  # 21st.dev/Magic UI components
│   │   │   ├── border-beam.tsx
│   │   │   ├── marquee.tsx
│   │   │   ├── ... (65+ more)
│   │   │   └── button.tsx      # shadcn/ui components
│   │   └── navigation/         # Sidebar navigation
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utilities
├── prisma/                     # Database schema
├── public/                     # Static assets
└── README.md
```

## Key Features

- 19 beautifully crafted showcase pages
- 65+ production-ready UI components
- 21st.dev ecosystem integration with Magic UI
- Searchable component explorer with live preview
- Dark/Light mode with smooth transitions
- Cinematic animations powered by Framer Motion
- Glassmorphism and aurora UI effects
- SaaS landing page sections
- Marketing page templates
- Reusable blocks and sections gallery
- AI-powered tools (image generation, API playground)
- Interactive data visualizations
- Comprehensive form components
- Copy-code functionality in component explorer

## License

MIT License

---

<p align="center">
  Built with ❤️ by <strong>Sandeep Gaddam</strong>
</p>

<p align="center">
  <strong>UnQWebTemplate</strong> &mdash; The Complete UI/UX Universe
</p>

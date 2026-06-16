# UnQWebTemplate

<p align="center">
  <strong>A Premium, Cinematic Next.js Web Template</strong>
</p>

<p align="center">
  Built with ❤️ by <strong>Sandeep Gaddam</strong>
</p>

---

## Overview

UnQWebTemplate is a production-ready, visually stunning Next.js web template featuring 15+ showcase pages, 30+ UI components, glassmorphism effects, cinematic animations, and AI-powered tools. Designed for developers who demand excellence in both aesthetics and functionality.

## Pages

| # | Page | Route | Description |
|---|------|-------|-------------|
| 1 | Landing | `/` | Cinematic hero, bento grid, testimonials, particle effects |
| 2 | Dashboard | `/dashboard` | Stats, charts, data tables, glass calendar & clock |
| 3 | AI Tools | `/tools` | AI image/video generation, API playground |
| 4 | Components | `/components` | Buttons, badges, cards, avatars, accordions, dialogs, tabs |
| 5 | Animations | `/animations` | Hero, morphing cards, stagger, parallax, spring physics |
| 6 | Cards | `/cards` | Bento grid, glassmorphism, gradient, hover effects |
| 7 | Navigation | `/navigation` | Expandable tabs, macOS dock, breadcrumbs, floating nav |
| 8 | Forms | `/forms` | Contact, login, registration, settings, multi-step forms |
| 9 | Data Display | `/data-display` | Data tables, timelines, charts, orbital timelines |
| 10 | Feedback | `/feedback` | Alerts, toasts, toggles, progress bars, hover cards |
| 11 | Loaders | `/loaders` | Cube loader, spinners, skeletons, page transitions |
| 12 | Effects | `/effects` | Particles, aurora, glow, glassmorphism, floating elements |
| 13 | Search | `/search` | Command palette, global search, filtered search |
| 14 | Calendar & Clock | `/calendar-clock` | Glass calendar, glass clock, world clock, date picker |
| 15 | About | `/about` | Creator info, tech stack, open source section |

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **3D**: [Three.js](https://threejs.org/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode)
- **Database**: [Prisma](https://www.prisma.io/) with SQLite
- **State**: [Zustand](https://zustand-demo.pmnd.rs/) + [TanStack Query](https://tanstack.com/query)

## Design System

### Color Palette

- **Primary**: Terracotta/Copper (`#c96442` light / `#d97757` dark)
- **Background**: Warm neutrals with cinematic dark tones
- **Accent**: Soft amber highlights with glassmorphism effects

### Design Principles

- **Cinematic First**: Every page feels like a premium visual experience
- **Accessibility**: 4.5:1 contrast ratios, semantic HTML, ARIA support
- **Responsive**: Mobile-first design with touch-friendly 44px targets
- **Performance**: Optimized animations, lazy loading, efficient rendering
- **Consistency**: 4pt/8dp spacing rhythm, unified component patterns

## Getting Started

### Prerequisites

- Node.js 18+
- Bun (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd unq-web-template

# Install dependencies
bun install

# Start development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
bun run build
bun run start
```

## Project Structure

```
unq-web-template/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Landing page
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles & theme
│   │   ├── dashboard/          # Dashboard page
│   │   ├── tools/              # AI Tools page
│   │   ├── components/         # Components showcase
│   │   ├── animations/         # Animations showcase
│   │   ├── cards/              # Cards showcase
│   │   ├── navigation/         # Navigation showcase
│   │   ├── forms/              # Forms showcase
│   │   ├── data-display/       # Data display showcase
│   │   ├── feedback/           # Feedback showcase
│   │   ├── loaders/            # Loaders showcase
│   │   ├── effects/            # Effects showcase
│   │   ├── search/             # Search showcase
│   │   ├── calendar-clock/     # Calendar & Clock showcase
│   │   └── about/              # About page
│   ├── components/
│   │   ├── ui/                 # shadcn/ui + custom components
│   │   └── navigation/         # Sidebar navigation
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utilities
├── prisma/                     # Database schema
├── public/                     # Static assets
└── package.json
```

## Key Components

### Custom Components

- **GlassCalendar** - Frosted glass calendar with weekly/monthly views
- **GlassClock** - Braun-inspired analog clock with glass effect
- **ParticleTextEffect** - Canvas-based particle text animation
- **MacOSDock** - Fish-eye magnification dock navigation
- **RadialOrbitalTimeline** - Interactive orbital timeline visualization
- **ShamayimToggleSwitch** - Premium toggle with 16 pattern presets
- **CubeLoader** - 3D rotating cube loading animation
- **ActionSearchBar** - Animated search with action results
- **APIPlayground** - Interactive API testing tool
- **AIMultiModalGeneration** - AI image/video/avatar generation UI
- **ExpandableTabs** - Animated tabs with icon expansion
- **BentoGrid** - Flexible bento-style grid layout
- **HeroGeometric** - Cinematic geometric hero section
- **TestimonialStack** - Draggable glass testimonial cards

## Features

- 15+ beautifully crafted showcase pages
- 30+ production-ready UI components
- Dark/Light mode with smooth transitions
- Cinematic animations powered by Framer Motion
- Glassmorphism and aurora UI effects
- Responsive design for all screen sizes
- AI-powered tools (image generation, API playground)
- Interactive data visualizations
- Comprehensive form components
- Advanced navigation patterns
- Search and command palette
- Calendar and clock widgets
- Customizable theme with CSS variables

## License

MIT License

---

<p align="center">
  Built with ❤️ by <strong>Sandeep Gaddam</strong>
</p>

<p align="center">
  <strong>UnQWebTemplate</strong> — Where Design Meets Innovation
</p>

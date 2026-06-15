"use client";

import React, { useState } from "react";
import { Rocket, LayoutDashboard, Wrench, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Button } from "@/components/ui/button";

// Landing
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import FeatureSection from "@/components/ui/stack-feature-section";
import {
  BentoGridWithFeatures,
  type BentoFeature,
} from "@/components/ui/bento-grid";
import { AnimatedTestimonials, type Testimonial } from "@/components/ui/animated-testimonials";
import { TestimonialStack, type GlassTestimonial } from "@/components/ui/glass-testimonial-swiper";
import { Footer } from "@/components/ui/footer-section";

// Dashboard
import MacOSDock from "@/components/ui/mac-os-dock";
import { GlassCalendar } from "@/components/ui/glass-calendar";
import { GlassClock } from "@/components/ui/glass-clock";
import { DataTable, type DataTableColumn } from "@/components/ui/basic-data-table";
import { Timeline, type TimelineItemData } from "@/components/ui/timeline";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { AlertBanner } from "@/components/ui/alert-banner";
import { AnimatePresence } from "framer-motion";

// Tools
import { AIMultiModalGeneration } from "@/components/ui/ai-gen";
import { APIPlayground } from "@/components/ui/api-playground";
import { ActionSearchBar } from "@/components/ui/action-search-bar";
import { ShamayimToggleSwitch } from "@/components/ui/shamayim-toggle-switch";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { CubeLoader } from "@/components/ui/cube-loader";

// ===== DATA =====

const navTabs = [
  { title: "Landing", icon: Rocket },
  { title: "Dashboard", icon: LayoutDashboard },
  { title: "Tools", icon: Wrench },
];

// Bento Grid Features
const bentoFeatures: BentoFeature[] = [
  {
    id: "1",
    title: "AI-Powered Generation",
    description: "Create stunning images, videos, and avatars with state-of-the-art AI models.",
    content: (
      <div className="bg-gradient-to-br from-primary/20 to-primary/5 mt-4 rounded-xl h-32 w-full flex items-center justify-center">
        <Rocket className="h-12 w-12 text-primary/60" />
      </div>
    ),
    className: "col-span-1 md:col-span-3 lg:col-span-2 border-b md:border-r dark:border-neutral-800",
  },
  {
    id: "2",
    title: "Real-time Dashboard",
    description: "Monitor your projects with beautiful glassmorphism widgets and data visualizations.",
    content: (
      <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 mt-4 rounded-xl h-32 w-full flex items-center justify-center">
        <LayoutDashboard className="h-12 w-12 text-blue-500/60" />
      </div>
    ),
    className: "col-span-1 md:col-span-3 lg:col-span-2 border-b lg:border-r dark:border-neutral-800",
  },
  {
    id: "3",
    title: "Developer Tools",
    description: "API playground, command palette, and more tools to boost your productivity.",
    content: (
      <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 mt-4 rounded-xl h-32 w-full flex items-center justify-center">
        <Wrench className="h-12 w-12 text-amber-500/60" />
      </div>
    ),
    className: "col-span-1 md:col-span-6 md:border-b lg:border-r-0 lg:col-span-2 border-b dark:border-neutral-800",
  },
  {
    id: "4",
    title: "",
    description: "",
    content: (
      <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-xl h-40 w-full" />
    ),
    className: "col-span-1 md:col-span-6 lg:col-span-6 border-b lg:border-r-0 dark:border-neutral-800",
  },
  {
    id: "5",
    title: "Modern Stack",
    description: "Built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui for the best developer experience.",
    content: (
      <div className="bg-gradient-to-br from-teal-500/20 to-teal-500/5 mt-4 rounded-xl h-32 w-full" />
    ),
    className: "col-span-1 md:col-span-3 lg:col-span-2 md:border-r dark:border-neutral-800",
  },
  {
    id: "6",
    title: "Responsive Design",
    description: "Beautiful on every screen, from mobile to ultrawide displays.",
    content: (
      <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 mt-4 rounded-xl h-32 w-full" />
    ),
    className: "col-span-1 md:col-span-3 lg:col-span-2 lg:border-r dark:border-neutral-800",
  },
  {
    id: "7",
    title: "Dark Mode",
    description: "Stunning dark mode with glass effects and smooth transitions. Your eyes will thank you.",
    content: (
      <div className="bg-gradient-to-br from-violet-500/20 to-violet-500/5 mt-4 rounded-xl h-32 w-full" />
    ),
    className: "col-span-1 md:col-span-6 lg:border-r-0 lg:col-span-2 dark:border-neutral-800",
  },
];

// Animated Testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Full Stack Developer",
    company: "TechFlow",
    content: "This platform saved me weeks of setup time. The AI integration is flawless, and the UI components are beautiful and easy to customize.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Frontend Engineer",
    company: "DesignHub",
    content: "I've used many starter templates, but this one stands out for its clean architecture and attention to detail. The TypeScript support is excellent.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "Our team was able to launch our MVP in record time thanks to this template. The authentication flow worked right out of the box!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

// Glass Testimonials
import { Users, Calendar, ThumbsUp, ShieldCheck, Rocket as RocketIcon, Zap, Gem } from "lucide-react";

const glassTestimonials: GlassTestimonial[] = [
  {
    id: 1,
    initials: "SM",
    name: "Sarah Mitchell",
    role: "VP of Engineering at TechFlow",
    quote: "This platform has completely transformed how our team collaborates. The AI-powered analytics provide insights we never had before.",
    tags: [{ text: "FEATURED", type: "featured" }, { text: "Enterprise", type: "default" }],
    stats: [{ icon: Users, text: "200+ team" }, { icon: Calendar, text: "2 years" }],
    avatarGradient: "linear-gradient(135deg, #5e6ad2, #8b5cf6)",
  },
  {
    id: 2,
    initials: "MC",
    name: "Marcus Chen",
    role: "Product Manager at DataSync",
    quote: "The real-time collaboration features are game-changing. Our remote team feels more connected than ever with outstanding reliability.",
    tags: [{ text: "Startup", type: "default" }, { text: "Mobile", type: "default" }],
    stats: [{ icon: ThumbsUp, text: "Helpful" }, { icon: ShieldCheck, text: "Verified" }],
    avatarGradient: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    id: 3,
    initials: "EJ",
    name: "Emily Johnson",
    role: "Founder of Innovate Inc.",
    quote: "As a new company, speed is everything. This tool allowed us to scale our operations twice as fast without doubling our headcount.",
    tags: [{ text: "New", type: "default" }, { text: "Growth", type: "featured" }],
    stats: [{ icon: RocketIcon, text: "Scaled 2x" }, { icon: Zap, text: "Fast Setup" }],
    avatarGradient: "linear-gradient(135deg, #ec4899, #d946ef)",
  },
];

// Dock Apps
const dockApps = [
  { id: "finder", name: "Finder", icon: "https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024" },
  { id: "safari", name: "Safari", icon: "https://cdn.jim-nielsen.com/macos/1024/safari-2021-06-02.png?rf=1024" },
  { id: "mail", name: "Mail", icon: "https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024" },
  { id: "notes", name: "Notes", icon: "https://cdn.jim-nielsen.com/macos/1024/notes-2021-05-25.png?rf=1024" },
  { id: "calendar", name: "Calendar", icon: "https://cdn.jim-nielsen.com/macos/1024/calendar-2021-04-29.png?rf=1024" },
  { id: "photos", name: "Photos", icon: "https://cdn.jim-nielsen.com/macos/1024/photos-2021-05-28.png?rf=1024" },
  { id: "music", name: "Music", icon: "https://cdn.jim-nielsen.com/macos/1024/music-2021-05-25.png?rf=1024" },
  { id: "terminal", name: "Terminal", icon: "https://cdn.jim-nielsen.com/macos/1024/terminal-2021-06-03.png?rf=1024" },
];

// Data Table
const tableData = [
  { id: 1, name: "Alice Brown", email: "alice@nexus.ai", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Wilson", email: "bob@nexus.ai", role: "Developer", status: "Active" },
  { id: 3, name: "Carol Davis", email: "carol@nexus.ai", role: "Designer", status: "Inactive" },
  { id: 4, name: "David Lee", email: "david@nexus.ai", role: "Developer", status: "Active" },
  { id: 5, name: "Eva Martinez", email: "eva@nexus.ai", role: "PM", status: "Active" },
  { id: 6, name: "Frank Chen", email: "frank@nexus.ai", role: "Developer", status: "Inactive" },
  { id: 7, name: "Grace Kim", email: "grace@nexus.ai", role: "Designer", status: "Active" },
  { id: 8, name: "Henry Park", email: "henry@nexus.ai", role: "Admin", status: "Active" },
];

const tableColumns: DataTableColumn<typeof tableData[0]>[] = [
  { key: "id", header: "ID", sortable: true, width: "60px" },
  { key: "name", header: "Name", sortable: true, filterable: true },
  { key: "email", header: "Email", sortable: true, filterable: true },
  { key: "role", header: "Role", sortable: true, filterable: true },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: (value: string) => (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${value === "Active" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
        {value}
      </span>
    ),
  },
];

// Timeline
const timelineItems: TimelineItemData[] = [
  { id: "1", title: "Project Kickoff", description: "Initial planning and requirements gathering", date: "Jan 2024", status: "completed", icon: RocketIcon },
  { id: "2", title: "Design Phase", description: "UI/UX design and system architecture", date: "Feb 2024", status: "completed", icon: Gem },
  { id: "3", title: "Development", description: "Core features implementation", date: "Mar 2024", status: "in-progress", icon: Zap },
  { id: "4", title: "Testing", description: "QA testing and bug fixes", date: "Apr 2024", status: "pending", icon: ShieldCheck },
  { id: "5", title: "Launch", description: "Production deployment", date: "May 2024", status: "pending", icon: RocketIcon },
];

// Orbital Timeline
const orbitalTimelineData = [
  { id: 1, title: "Planning", date: "Jan 2024", content: "Project planning and requirements gathering phase.", category: "Planning", icon: Calendar, relatedIds: [2], status: "completed" as const, energy: 100 },
  { id: 2, title: "Design", date: "Feb 2024", content: "UI/UX design and system architecture.", category: "Design", icon: Gem, relatedIds: [1, 3], status: "completed" as const, energy: 90 },
  { id: 3, title: "Develop", date: "Mar 2024", content: "Core features implementation and testing.", category: "Development", icon: Zap, relatedIds: [2, 4], status: "in-progress" as const, energy: 60 },
  { id: 4, title: "Testing", date: "Apr 2024", content: "User testing and bug fixes.", category: "Testing", icon: Users, relatedIds: [3, 5], status: "pending" as const, energy: 30 },
  { id: 5, title: "Release", date: "May 2024", content: "Final deployment and release.", category: "Release", icon: RocketIcon, relatedIds: [4], status: "pending" as const, energy: 10 },
];

// ===== PAGE COMPONENT =====

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const { theme, setTheme } = useTheme();
  const [openApps, setOpenApps] = useState<string[]>(["finder", "safari"]);
  const [alertVisible, setAlertVisible] = useState(true);
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({});

  const handleNavChange = (index: number | null) => {
    if (index !== null) setActiveTab(index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Rocket className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg hidden sm:inline">Nexus AI</span>
          </div>

          <ExpandableTabs
            tabs={navTabs}
            onChange={handleNavChange}
            selectedIndex={activeTab}
            activeColor="text-primary"
          />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* ===== LANDING SECTION ===== */}
        {activeTab === 0 && (
          <div className="space-y-0">
            {/* Hero */}
            <HeroGeometric
              badge="Nexus AI Platform"
              title1="Elevate Your"
              title2="Digital Vision"
            />

            {/* Feature Section with Orbit */}
            <div className="px-4">
              <FeatureSection />
            </div>

            {/* Bento Grid */}
            <div className="px-4 md:px-8 lg:px-16 py-16">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-4xl font-bold text-foreground">
                  Everything You Need
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A complete platform with AI tools, interactive dashboards, and stunning components.
                </p>
              </div>
              <BentoGridWithFeatures features={bentoFeatures} />
            </div>

            {/* Animated Testimonials */}
            <AnimatedTestimonials
              testimonials={testimonials}
              trustedCompanies={["Google", "Microsoft", "Airbnb", "Spotify", "Netflix"]}
            />

            {/* Glass Testimonial Swiper */}
            <div className="relative w-full py-16 px-4 overflow-hidden bg-black">
              <div className="max-w-lg mx-auto text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">What People Say</h2>
                <p className="text-white/50">Swipe through our community testimonials</p>
              </div>
              <div className="max-w-lg mx-auto" style={{ minHeight: "350px" }}>
                <TestimonialStack testimonials={glassTestimonials} />
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        )}

        {/* ===== DASHBOARD SECTION ===== */}
        {activeTab === 1 && (
          <div className="space-y-8 p-4 md:p-8">
            {/* Dashboard Header */}
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground mt-1">Your workspace at a glance</p>
            </div>

            {/* Alert Banner */}
            <AnimatePresence>
              {alertVisible && (
                <div className="max-w-2xl">
                  <AlertBanner
                    variant="success"
                    onDismiss={() => setAlertVisible(false)}
                    title="Welcome to Nexus AI Dashboard!"
                    description="All systems are operational. Click around to explore the widgets."
                    primaryAction={{ label: "Dismiss", onClick: () => setAlertVisible(false) }}
                  />
                </div>
              )}
            </AnimatePresence>

            {!alertVisible && (
              <Button variant="outline" size="sm" onClick={() => setAlertVisible(true)} className="cursor-pointer">
                Show Alert
              </Button>
            )}

            {/* MacOS Dock */}
            <div className="flex flex-col items-center py-8 bg-black/5 dark:bg-white/5 rounded-2xl">
              <h2 className="text-lg font-semibold mb-4">MacOS Dock</h2>
              <MacOSDock
                apps={dockApps}
                onAppClick={(appId) => {
                  setOpenApps(prev =>
                    prev.includes(appId) ? prev.filter(id => id !== appId) : [...prev, appId]
                  );
                }}
                openApps={openApps}
              />
            </div>

            {/* Clock & Calendar Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Glass Clock */}
              <div className="bg-black rounded-2xl p-6 flex flex-col items-center">
                <h2 className="text-lg font-semibold text-white mb-4">Glass Clock</h2>
                <GlassClock />
              </div>

              {/* Glass Calendar */}
              <div className="bg-black rounded-2xl p-6 flex flex-col items-center justify-start pt-12">
                <h2 className="text-lg font-semibold text-white mb-4">Glass Calendar</h2>
                <GlassCalendar />
              </div>
            </div>

            {/* Data Table */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Team Members</h2>
              <DataTable data={tableData} columns={tableColumns} searchable itemsPerPage={5} />
            </div>

            {/* Timelines Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Simple Timeline */}
              <div className="p-6 border rounded-2xl">
                <h2 className="text-lg font-semibold mb-6">Project Timeline</h2>
                <Timeline items={timelineItems} />
              </div>

              {/* Orbital Timeline */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Orbital Timeline</h2>
                <RadialOrbitalTimeline timelineData={orbitalTimelineData} />
              </div>
            </div>
          </div>
        )}

        {/* ===== TOOLS SECTION ===== */}
        {activeTab === 2 && (
          <div className="space-y-8 p-4 md:p-8">
            {/* Tools Header */}
            <div>
              <h1 className="text-3xl font-bold">Tools</h1>
              <p className="text-muted-foreground mt-1">Powerful utilities and AI-powered generation tools</p>
            </div>

            {/* AI Generation */}
            <div>
              <h2 className="text-lg font-semibold mb-4">AI Generation Studio</h2>
              <AIMultiModalGeneration />
            </div>

            {/* API Playground */}
            <div>
              <h2 className="text-lg font-semibold mb-4">API Playground</h2>
              <APIPlayground />
            </div>

            {/* Action Search Bar */}
            <div className="border rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4">Command Palette</h2>
              <ActionSearchBar />
            </div>

            {/* Particle Text Effect */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Particle Text Effect</h2>
              <ParticleTextEffect />
            </div>

            {/* Toggle Switches & Cube Loader */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Toggle Switches */}
              <div className="border rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-6">Toggle Switches</h2>
                <div className="space-y-8">
                  {(["conic", "dots", "checker", "waves"] as const).map((pattern) => (
                    <div key={pattern} className="flex items-center justify-between">
                      <span className="text-sm font-medium capitalize">{pattern} Pattern</span>
                      <ShamayimToggleSwitch
                        defaultState={toggleStates[pattern] || false}
                        onChange={(v) => setToggleStates(prev => ({ ...prev, [pattern]: v }))}
                        pattern={pattern}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Cube Loader */}
              <div className="border rounded-2xl flex flex-col items-center justify-center">
                <h2 className="text-lg font-semibold mb-4">3D Cube Loader</h2>
                <CubeLoader />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

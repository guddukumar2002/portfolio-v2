export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  github: string;
  live: string;
  screenshot: string;
  featured: boolean;
  category: "Full Stack" | "AI & Automation" | "Backend & APIs" | "Educational & Systems";
  metrics: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
}

export const projects: Project[] = [
  {
    id: "aivoa-complaint-system",
    title: "AIVOA — AI Complaint & QMS Engine",
    subtitle: "AI-Powered Quality Management & Root Cause Analysis Workflow",
    description:
      "Enterprise-grade Quality Management System (QMS) built with Next.js 14, TypeScript, Tailwind CSS, and LangGraph workflow orchestration — automating root cause analysis (RCA), complaint triage, and CAPA recommendation generation.",
    problem:
      "Quality assurance teams struggled with manual complaint categorization, delayed investigation cycles, and inconsistent root cause analysis across operational incidents.",
    solution:
      "Engineered an automated AI Copilot platform combining LangGraph stateful multi-agent workflows, interactive ticket timelines, and structured JSON outputs for instant root cause diagnosis.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "LangGraph",
      "AI Workflows",
      "Tailwind CSS",
      "Zustand",
    ],
    github: "https://github.com/guddukumar2002/aivoa-complaint-system",
    live: "https://aivoa-complaint-system-nu.vercel.app",
    screenshot: "/assets/screenshots/aivoa.png",
    featured: true,
    category: "AI & Automation",
    metrics: ["AI Copilot RCA", "LangGraph Workflow", "Enterprise QMS"],
    keyFeatures: [
      "Automated Root Cause Analysis (RCA) Engine",
      "CAPA (Corrective Action) AI Recommendation Generation",
      "LangGraph Multi-Agent Stateful Workflow Pipelines",
      "Interactive Complaint Lifecycle Dashboard & Audit Log",
      "Zustand State Management & Real-time UI Filters",
    ],
    architectureHighlights: [
      "LangGraph graph-based node execution for multi-step AI reasoning",
      "Type-safe API routes handling asynchronous AI synthesis",
      "Modular React 18 UI components with Framer Motion animations",
    ],
  },
  {
    id: "seglko",
    title: "SEGLKO — Saroj Educational Group Main Portal",
    subtitle: "Enterprise Next.js Institutional Platform & Multi-Microsite Engine",
    description:
      "Official production web portal for Saroj Educational Group (seglko.org) built with Next.js, Tailwind CSS, and custom microsite routing rewrites (/ssitm, /sitm) — serving thousands of active students, prospective applicants, and academic departments.",
    problem:
      "SEG needed a unified enterprise platform capable of managing multiple college microsites, SEO sitemap generation, dynamic routing, and fast load speeds across mobile & desktop.",
    solution:
      "Architected a Next.js platform with custom Vercel rewrite rules, sitemap generation, responsive Tailwind design system, and security hardening.",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Vercel Rewrites",
      "SEO",
    ],
    github: "https://github.com/guddukumar2002/seglko",
    live: "https://seglko.org/",
    screenshot: "/assets/screenshots/seglko.png",
    featured: true,
    category: "Full Stack",
    metrics: ["Live seglko.org", "Multi-Microsite Engine", "Web Developer @ SEG"],
    keyFeatures: [
      "Multi-Microsite Path Rewrites (/ssitm, /sitm routing)",
      "Automated Sitemap Generator & Search Console Indexing",
      "Responsive Multi-Page Educational Institution Layout",
      "Security-Hardened Next.js Configuration & Headers",
      "Dynamic Department & Academic Program Pages",
    ],
    architectureHighlights: [
      "Vercel edge rewrite rules connecting static microsites seamlessly under one primary domain",
      "SEO metadata hierarchy optimizing search rankings for Saroj Educational Group",
    ],
  },
  {
    id: "medgallery",
    title: "MedGallery — Medical File Management Portal",
    subtitle: "Clinical File & Patient Document Management System",
    description:
      "Production-ready medical file management system with role-based admin panel, drag & drop uploads, PDF preview, Cloudinary storage, and public gallery with instant search & filter — actively used in a real clinical environment.",
    problem:
      "Clinics & healthcare practitioners struggled with fragmented file organization, slow PDF previewing, insecure file sharing, and lack of role-based document access controls.",
    solution:
      "Engineered an end-to-end full-stack portal leveraging Next.js 16, NextAuth.js role authorization, Cloudinary CDN asset pipelines, and PostgreSQL Prisma ORM for ultra-fast document search and secure access.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL",
      "NextAuth.js",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github: "https://github.com/guddukumar2002/medical-gallery",
    live: "https://medical-gallery-xi.vercel.app",
    screenshot: "/assets/screenshots/medgallery.png",
    featured: true,
    category: "Full Stack",
    metrics: ["Real Clinical Use", "Role-Based Auth", "Cloudinary Storage"],
    keyFeatures: [
      "Role-Based Access Control (Admin / Staff / Public)",
      "Instant PDF & Image Preview Engine",
      "Cloudinary Upload Stream & Optimization",
      "Real-time Fuzzy Search & Category Filtering",
      "PostgreSQL Database with Prisma ORM",
    ],
    architectureHighlights: [
      "Next.js App Router with Server Components for low latency page loads",
      "Prisma ORM schema with strict relational integrity for audit logs",
      "Secure NextAuth JWT session management",
    ],
  },
  {
    id: "spl",
    title: "SPL — Saroj Premier League",
    subtitle: "Official Tournament Registration & Management Platform",
    description:
      "Official cricket tournament platform for SPL U19 with team & individual registration, admin dashboard, JWT + Clerk auth, Razorpay payment integration, and automated SMS & email notifications — handling 100+ registrations with zero downtime.",
    problem:
      "Tournament organizers faced manual registration tracking, payment collection delays, lost player details, and tedious communication dispatch.",
    solution:
      "Built a seamless registration engine backed by Razorpay payments, MongoDB database, Prisma data modelling, automated SMS/email triggers, and a real-time admin portal.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "Razorpay",
      "Clerk Auth",
    ],
    github: "https://github.com/guddukumar2002/SPL",
    live: "https://spl-tournament-up.vercel.app",
    screenshot: "/assets/screenshots/spl.png",
    featured: true,
    category: "Full Stack",
    metrics: ["100+ Registrations", "Razorpay Payments", "Auto SMS & Email"],
    keyFeatures: [
      "Individual & Team Registration Workflows",
      "Razorpay Payment Gateway Integration",
      "Automated SMS & Email Confirmation Dispatches",
      "Admin Control Panel for Team Verification",
      "Responsive Tournament Schedule & Standings UI",
    ],
    architectureHighlights: [
      "MongoDB + Prisma schema optimized for fast query responses under load spikes",
      "Webhook verification for Razorpay payment receipts",
      "Typesafe API endpoints built with Next.js Route Handlers",
    ],
  },
  {
    id: "slooze-food-ordering",
    title: "Slooze — Food Ordering System",
    subtitle: "NestJS GraphQL Enterprise API & Food Platform",
    description:
      "Full-stack role-based food ordering system built with NestJS, GraphQL (Code-First), Apollo Client, Prisma ORM, Next.js, and RBAC + ReBAC granular permission control.",
    problem:
      "Legacy food ordering APIs struggled with REST over-fetching, complex multi-role authorization rules, and slow customer checkout workflows.",
    solution:
      "Architected a modular NestJS GraphQL backend with Code-First resolvers, Relationship-Based Access Control (ReBAC), and Next.js Apollo Client frontend.",
    tech: [
      "NestJS",
      "GraphQL",
      "Prisma ORM",
      "Next.js",
      "Apollo Client",
      "TypeScript",
      "PostgreSQL",
    ],
    github: "https://github.com/guddukumar2002/slooze-food-ordering",
    live: "https://slooze-food-ordering.vercel.app",
    screenshot: "/assets/screenshots/slooze.svg",
    featured: false,
    category: "Backend & APIs",
    metrics: ["GraphQL API", "RBAC + ReBAC Auth", "NestJS Architecture"],
    keyFeatures: [
      "Code-First GraphQL Schema & Apollo Client Integration",
      "RBAC + Relationship-Based Access Control (ReBAC)",
      "Order Checkout Flow & Real-time Status Mutations",
      "Prisma Relational Data Model for Items & Orders",
      "Next.js Consumer Portal & Admin Control Interface",
    ],
    architectureHighlights: [
      "NestJS dependency injection modules for scalable service boundaries",
      "GraphQL query optimization with Dataloader pattern to eliminate N+1 queries",
      "Prisma migration pipelines with strict PostgreSQL schema definitions",
    ],
  },
  {
    id: "customer-support-dashboard",
    title: "Customer Support Ops Dashboard",
    subtitle: "Real-Time Ticket Management & Analytics Control Center",
    description:
      "High-performance support ticketing dashboard built with React 18, TypeScript, Tailwind CSS, and Zustand — featuring real-time status filtering, priority tagging, SLA tracking, and CSV data exports.",
    problem:
      "Customer support teams lacked an intuitive single-page interface to monitor SLA breaches, filter high-priority tickets, and export operational reports.",
    solution:
      "Built a snappy React dashboard leveraging Zustand state slices for instant zero-latency filtering, ticket lifecycle mutations, and automated CSV summary generation.",
    tech: ["React 18", "TypeScript", "Zustand", "Tailwind CSS", "Lucide Icons"],
    github: "https://github.com/guddukumar2002/customer-support-dashboard",
    live: "https://customer-support-dashboard-psi.vercel.app",
    screenshot: "/assets/screenshots/support-dashboard.svg",
    featured: false,
    category: "Full Stack",
    metrics: ["Zustand State", "Real-time Metrics", "CSV Data Export"],
    keyFeatures: [
      "Instant Ticket Filtering & Multi-Column Sorting",
      "Zustand Global State Management Slices",
      "CSV & JSON Data Export Engine",
      "Ticket Priority & SLA Aging Analytics Charts",
      "100% Responsive Grid Dashboard for Desktop & Mobile",
    ],
    architectureHighlights: [
      "Zustand persistent state management for client-side query filters",
      "Memoized React components preventing unnecessary re-renders",
      "Clean utility-first design system with Tailwind CSS",
    ],
  },
  {
    id: "studiox-broadcasting",
    title: "StudioX Broadcasting",
    subtitle: "Educational Content Broadcasting System",
    description:
      "Full-stack video content platform for educational content broadcasting built with Next.js 14, Tailwind CSS, React Hook Form, and Zod schema validation.",
    problem:
      "Educational content creators required a streamlined interface to manage video metadata, validate multi-step uploads, and broadcast lectures seamlessly.",
    solution:
      "Developed a Next.js 14 publishing engine with type-safe Zod schema validation, React Hook Form dynamic inputs, and video stream layouts.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod"],
    github: "https://github.com/guddukumar2002/studiox-broadcasting",
    live: "https://studiox-broadcasting.vercel.app",
    screenshot: "/assets/screenshots/studiox.svg",
    featured: false,
    category: "Educational & Systems",
    metrics: ["Strict Zod Validation", "Video Streaming", "Next.js 14"],
    keyFeatures: [
      "Video Content Categorization & Broadcast Streaming",
      "Type-safe Form Controls with React Hook Form + Zod",
      "Fast Server-Side Rendering (SSR) & Static Optimization",
      "Custom Video Player Controls & Responsive Layout",
    ],
    architectureHighlights: [
      "Zod schema inferencing for client & server form validations",
      "Next.js App Router layout composition for fluid video playback",
    ],
  },
  {
    id: "content-broadcasting-system",
    title: "Teacher Content Broadcasting Backend",
    subtitle: "Real-Time Educational Content Stream Engine",
    description:
      "High-throughput backend microservice designed for broadcasting live teacher course materials, video streams, and lecture assets to thousands of concurrent student clients.",
    problem:
      "Educational institutions experienced high latency and stream drops during peak lecture broadcast hours.",
    solution:
      "Architected an Express.js & Railway streaming service utilizing asynchronous event queues, optimized chunk dispatches, and CORS security layers.",
    tech: ["Node.js", "Express.js", "Railway", "REST API", "WebSocket / Streams"],
    github: "https://github.com/guddukumar2002/content-broadcasting-system",
    live: "https://content-broadcasting.up.railway.app/",
    screenshot: "/assets/screenshots/content-broadcasting.svg",
    featured: false,
    category: "Backend & APIs",
    metrics: ["High Concurrency", "Railway Deployed", "Live Stream Queue"],
    keyFeatures: [
      "High-Throughput Live Content Dispatch Engine",
      "Role Middleware for Teacher vs Student Subscriptions",
      "Railway Microservice Deployment with Auto-Scaling",
      "Real-Time Stream Buffering & Chunk Management",
    ],
    architectureHighlights: [
      "Asynchronous stream dispatch handlers preventing thread blocking under load",
      "Railway cloud container configuration for continuous integration",
    ],
  },
  {
    id: "inventory-order-api",
    title: "Inventory & Order Management API",
    subtitle: "Enterprise Node.js REST Service with Atomic Transactions",
    description:
      "Robust RESTful backend microservice built with Node.js, Express.js, MongoDB, Mongoose, and JWT authentication — featuring atomic order fulfillment, stock lock mechanisms, and role middleware.",
    problem:
      "E-commerce backends often experience race conditions during concurrent order placements, leading to negative inventory stock levels.",
    solution:
      "Engineered an Express.js API enforcing MongoDB atomic session transactions, strict input validation, and role-based middleware guards.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth"],
    github: "https://github.com/guddukumar2002/inventory-order-api",
    live: "https://github.com/guddukumar2002/inventory-order-api",
    screenshot: "/assets/screenshots/inventory-api.svg",
    featured: false,
    category: "Backend & APIs",
    metrics: ["Atomic Transactions", "JWT Middleware", "Enterprise Microservice"],
    keyFeatures: [
      "Atomic Order & Inventory Stock Lock Operations",
      "JWT Bearer Token Authentication & Role Middleware",
      "Comprehensive Express Request Validation & Error Handlers",
      "MongoDB Aggregation Pipelines for Inventory Stock Reports",
    ],
    architectureHighlights: [
      "MongoDB transactional sessions to guarantee database ACID compliance during checkout",
      "Modular MVC directory layout with decoupled controllers, routes, and services",
    ],
  },
  {
    id: "url-shortner",
    title: "Multi-Tenant URL Shortener Engine",
    subtitle: "High-Performance Analytics & Link Management Service",
    description:
      "Scalable multi-tenant URL shortening service built with click analytics tracking, custom alias resolution, rate limiting, and instant redirect dispatch.",
    problem:
      "Legacy link shorteners lacked custom domain routing, click geo-analytics, and tenant data isolation.",
    solution:
      "Engineered a lightweight link routing service with hash-indexing, click counters, and rate-limited endpoints.",
    tech: ["Laravel / Node.js", "REST API", "SQLite / MongoDB", "Tailwind CSS"],
    github: "https://github.com/guddukumar2002/url-shortner",
    live: "https://github.com/guddukumar2002/url-shortner",
    screenshot: "/assets/screenshots/url-shortener.svg",
    featured: false,
    category: "Backend & APIs",
    metrics: ["Multi-Tenant", "Click Analytics", "Instant Redirects"],
    keyFeatures: [
      "Fast Base62 Short Code Encoding & Alias Lookup",
      "Real-Time Click Counter & Referral Analytics",
      "Rate-Limited REST Endpoints Preventing Spam",
      "Clean Dashboard Interface for Link Management",
    ],
    architectureHighlights: [
      "Indexed database lookups delivering sub-10ms redirect response times",
      "Sanitized URL input validation guarding against malicious redirects",
    ],
  },
  {
    id: "ssitm",
    title: "Shivdhan Singh Institute (SSITM)",
    subtitle: "Institutional Portal & Academic Platform",
    description:
      "Complete institutional website for SSITM with course listings, faculty profiles, admission info, and fully responsive design — live and actively used by the institute and its students.",
    problem:
      "The institution needed a modern, accessible, fast-loading digital web portal to showcase degree programs, facilitate student inquiries, and publish announcements.",
    solution:
      "Designed and deployed a responsive Next.js application featuring structured course catalogs, inquiry dispatch, and accessible layout standards.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/guddukumar2002/ssitm",
    live: "https://ssitm.vercel.app/",
    screenshot: "/assets/screenshots/ssitm.png",
    featured: false,
    category: "Educational & Systems",
    metrics: ["Live Institutional Website", "100% Responsive Layout", "Fast SSG Load Speed"],
    keyFeatures: [
      "Comprehensive Course & Curriculum Directory",
      "Faculty & Academic Department Pages",
      "Student Admission Inquiry Form",
      "Mobile-First Responsive Design System",
      "SEO Optimized Metadata Structure",
    ],
    architectureHighlights: [
      "Static Site Generation (SSG) for instant page load times",
      "Tailwind UI component modularity for fast updates",
    ],
  },
  {
    id: "vignam-landing",
    title: "Vignam — EdTech Landing Platform",
    subtitle: "Interactive Course Directory & Student Engagement Hub",
    description:
      "Modern EdTech marketing and landing application built with TypeScript, React, and Tailwind CSS — showcasing curriculum paths, interactive course cards, and student inquiry flows.",
    problem:
      "EdTech startups required an engaging, mobile-responsive landing engine with fast conversion forms and course catalogs.",
    solution:
      "Built a high-converting single-page landing application with fluid animations, course filters, and responsive layout grids.",
    tech: ["TypeScript", "React.js", "Tailwind CSS", "Vite"],
    github: "https://github.com/guddukumar2002/vignam-landing",
    live: "https://vignam-landing-theta.vercel.app",
    screenshot: "/assets/screenshots/vignam.svg",
    featured: false,
    category: "Educational & Systems",
    metrics: ["EdTech Platform", "TypeScript", "Fast Load Speed"],
    keyFeatures: [
      "Interactive Course Catalog & Curriculum Explorer",
      "Mobile-First Responsive Layout & Fluid Animations",
      "Instant Inquiry Form Dispatch with Validation",
      "Clean Component Modularity & Design System",
    ],
    architectureHighlights: [
      "Vite static bundling for ultra-fast asset delivery",
      "TypeScript interfaces ensuring strict prop safety across UI components",
    ],
  },
  {
    id: "hubspot-project",
    title: "HubCraft — Enterprise HubSpot CMS Theme",
    subtitle: "Modular Custom HubSpot CMS Theme & HubDB Engine",
    description:
      "Full-featured custom HubSpot CMS theme featuring 8 modular sections, HubDB dynamic database filtering, Swiper.js sliders, AOS scroll animations, custom field schemas (meta.json), and responsive breakpoint layouts.",
    problem:
      "Marketing teams needed a flexible, high-converting HubSpot CMS theme with customizable section modules and database-driven resource hubs without writing custom code for every page.",
    solution:
      "Engineered a 100% modular HubSpot theme with reusable HubL/HTML modules, HubDB relational schema for resource libraries, and Swiper.js interactive elements.",
    tech: [
      "HubSpot CMS",
      "HubL",
      "HubDB",
      "JavaScript",
      "CSS3",
      "Swiper.js",
      "AOS",
    ],
    github: "https://github.com/guddukumar2002/hubspot-project",
    live: "https://hubcraft-guddu.netlify.app/",
    screenshot: "/assets/screenshots/hubspot.svg",
    featured: false,
    category: "Educational & Systems",
    metrics: ["8 Custom Modules", "HubDB Filtering", "HubSpot Theme"],
    keyFeatures: [
      "8 Editable Modules (Hero Slider, Parallax, Accordion, Tabber, Popup Cards, etc.)",
      "HubDB Resource Library with Server-Side Category Filtering",
      "HubSpot CLI Sync Workflow (@hubspot/cli)",
      "Custom Meta.json Schema with Repeater Group Fields",
      "Swiper.js v11 & AOS Scroll Animations",
    ],
    architectureHighlights: [
      "Decoupled HubL template architecture enabling non-technical marketers to build pages via drag-and-drop",
      "HubDB query optimization using server-side category filters for instant resource retrieval",
    ],
  },
  {
    id: "aanchal-task",
    title: "Aanchal — Figma-to-Code Saree & Ethnic Fashion Web App",
    subtitle: "Pixel-Perfect Figma Design Conversion for Saree E-Commerce Brand",
    description:
      "Frontend web application converting an intricate Figma UI design for Aanchal (Saree & Ethnic Fashion E-Commerce brand) into a responsive React web app with custom styling, product showcases, interactive catalog layouts, and Vercel SPA routing.",
    problem:
      "Translating high-fidelity Figma fashion mockups (saree collections, hero sliders, luxury typography, product details) into responsive, high-speed React code without losing visual precision.",
    solution:
      "Engineered a clean React + Vite application translating Figma design tokens, layout grids, luxury color palettes, and product catalog components with pixel-perfect accuracy.",
    tech: ["Figma to Code", "React.js", "Vite", "Tailwind CSS", "JavaScript", "Vercel"],
    github: "https://github.com/guddukumar2002/Aanchal-Task",
    live: "https://aanchal-task.vercel.app/",
    screenshot: "/assets/screenshots/aanchal.png",
    featured: false,
    category: "Full Stack",
    metrics: ["Figma to Code 100%", "Saree E-Commerce UI", "Pixel-Perfect Design"],
    keyFeatures: [
      "Pixel-Perfect Conversion of Figma Saree & Ethnic Wear UI Design",
      "Responsive Product Showcase Grid & Heritage Collection Sections",
      "Smooth Client-Side Navigation & Vercel SPA Routing Rules",
      "Tailwind CSS Custom Theme Palette & Luxury Typography",
      "Optimized Image Loading & Interactive Card Hover States",
    ],
    architectureHighlights: [
      "Strict Figma design token translation for typography, spacing scale, and luxury color scheme",
      "Vite build setup for sub-second hot reloading and optimized static asset dispatches",
    ],
  },
];

export const experiences = [
  {
    role: "Web Developer",
    company: "SEG",
    type: "Onsite",
    location: "Ghaziabad, India",
    duration: "Sept 2025 – Present",
    current: true,
    points: [
      "Developed and maintained scalable educational web platforms using React.js and Next.js.",
      "Built responsive, accessible, and reusable UI components adhering to modern TypeScript standards.",
      "Deployed and managed web infrastructure on Google Cloud Platform (GCP) ensuring reliable high availability.",
      "Improved platform Core Web Vitals, page speed, and responsive cross-browser performance.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "GCP", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer",
    company: "Pearl Thoughts",
    type: "Remote",
    location: "India",
    duration: "Jul 2025 – Aug 2025",
    current: false,
    points: [
      "Engineered responsive frontend modules using HTML, CSS, JavaScript (ES6+), and React.",
      "Demonstrated strong analytical problem-solving skills in high-velocity sprint environments.",
      "Utilized Git workflows, VS Code, and Slack for continuous integration and team delivery.",
    ],
    tech: ["React", "JavaScript", "HTML5/CSS3", "Git", "REST APIs"],
  },
  {
    role: "Node.js Developer Intern",
    company: "Inlign Tech",
    type: "Remote",
    location: "India",
    duration: "Mar 2025 – Jul 2025",
    current: false,
    points: [
      "Developed and maintained scalable backend microservices for enterprise customer platforms.",
      "Designed, documented, and implemented secure RESTful APIs using Node.js and Express.js.",
      "Optimized MongoDB query performance, indexing, and data schema relationships.",
      "Collaborated closely with cross-functional frontend teams in agile sprint cycles.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Postman"],
  },
  {
    role: "Web Developer Intern",
    company: "Code Alpha",
    type: "Remote",
    location: "India",
    duration: "Mar 2024 – May 2024",
    current: false,
    points: [
      "Developed dynamic full-stack web applications using the MERN stack (MongoDB, Express, React, Node).",
      "Integrated RESTful API endpoints and managed backend controller logic for seamless data flow.",
      "Implemented JWT authentication and authorization protocols for secure user access control.",
      "Participated in peer code reviews, debugging sessions, and query optimization.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
  },
];

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "DevOps & Cloud" | "Tools & AI";
  level: "expert" | "proficient" | "familiar";
  iconName: string;
  description: string;
}

export const skills: SkillItem[] = [
  // Frontend
  { name: "React.js", category: "Frontend", level: "expert", iconName: "SiReact", description: "Hooks, Context, State Management, Custom Hooks" },
  { name: "Next.js", category: "Frontend", level: "expert", iconName: "SiNextdotjs", description: "App Router, SSR, SSG, Server Actions, Route Handlers" },
  { name: "TypeScript", category: "Frontend", level: "expert", iconName: "SiTypescript", description: "Strict Typing, Interfaces, Generics, Type Guarding" },
  { name: "Tailwind CSS", category: "Frontend", level: "expert", iconName: "SiTailwindcss", description: "Custom Design Systems, Responsive Utilities, Dark Mode" },
  { name: "HTML5 / CSS3", category: "Frontend", level: "expert", iconName: "SiHtml5", description: "Semantic Markup, Flexbox, Grid, CSS Variables" },
  { name: "Framer Motion", category: "Frontend", level: "proficient", iconName: "SiFramer", description: "Scroll Animations, Page Transitions, Layout Animations" },
  { name: "Bootstrap", category: "Frontend", level: "proficient", iconName: "SiBootstrap", description: "Grid System, Utility Classes" },

  // Backend
  { name: "Node.js", category: "Backend", level: "expert", iconName: "SiNodedotjs", description: "Asynchronous I/O, Event Loop, Stream Processing" },
  { name: "Express.js", category: "Backend", level: "expert", iconName: "SiExpress", description: "REST Middleware, Route Controllers, Error Handling" },
  { name: "REST APIs", category: "Backend", level: "expert", iconName: "TbApi", description: "API Architecture, JSON Payloads, Status Codes" },
  { name: "Prisma ORM", category: "Backend", level: "proficient", iconName: "SiPrisma", description: "Relational Modeling, Migrations, Type-safe Queries" },
  { name: "JWT Auth", category: "Backend", level: "proficient", iconName: "SiJsonwebtokens", description: "Token Signing, Bearer Auth, Refresh Flows" },

  // Databases
  { name: "MongoDB", category: "Databases", level: "expert", iconName: "SiMongodb", description: "Aggregations, Mongoose Schema, Indexing" },
  { name: "PostgreSQL", category: "Databases", level: "proficient", iconName: "SiPostgresql", description: "Relational Queries, Foreign Keys, Indexes" },

  // DevOps & Cloud
  { name: "Google Cloud (GCP)", category: "DevOps & Cloud", level: "proficient", iconName: "SiGooglecloud", description: "App Hosting, VM Management, GCP Cloud Storage" },
  { name: "Vercel", category: "DevOps & Cloud", level: "expert", iconName: "SiVercel", description: "Edge Network, CI/CD Deployments, Domain Routing" },
  { name: "Git & GitHub", category: "DevOps & Cloud", level: "expert", iconName: "SiGit", description: "Branching, Pull Requests, Version Tracking" },
  { name: "Nginx / PM2", category: "DevOps & Cloud", level: "proficient", iconName: "Server", description: "Reverse Proxies, Process Monitoring, SSL Setup" },

  // Tools & AI
  { name: "AI APIs & LLMs", category: "Tools & AI", level: "proficient", iconName: "Sparkles", description: "OpenAI/Gemini APIs, Prompt Engineering, Structured JSON Outputs" },
  { name: "AI Dev Tooling", category: "Tools & AI", level: "proficient", iconName: "Bot", description: "AI-Assisted Pair Programming, Code Generation" },
  { name: "Postman", category: "Tools & AI", level: "proficient", iconName: "SiPostman", description: "API Testing, Environment Collections" },
  { name: "VS Code", category: "Tools & AI", level: "expert", iconName: "VscVscode", description: "Extensions, Debugging, Workspace Settings" },
  { name: "npm / yarn", category: "Tools & AI", level: "expert", iconName: "SiNpm", description: "Dependency Management, Custom Scripts" },
];

export const engineeringCapabilities = [
  {
    title: "Frontend Engineering",
    icon: "Layout",
    description: "Responsive, pixel-perfect user interfaces built with React, Next.js, and TypeScript. Focused on modern component architecture, state management, and Core Web Vitals performance.",
    tech: ["React.js", "Next.js App Router", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & REST APIs",
    icon: "Server",
    description: "Scalable backend microservices and RESTful API endpoints with Node.js and Express. Implement JWT auth, middleware validation, rate limiting, and robust error handling.",
    tech: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Prisma ORM"],
  },
  {
    title: "Full-Stack Applications",
    icon: "Layers",
    description: "End-to-end web platforms from UI design to database schemas and payment processing. Experience building medical portals, tournament engines, and real-time auditing tools.",
    tech: ["MERN Stack", "Next.js", "Razorpay Payments", "Cloudinary Storage", "PostgreSQL/MongoDB"],
  },
  {
    title: "AI Integrations & Modern Web",
    icon: "Sparkles",
    description: "Integrating LLM APIs (OpenAI / Gemini), prompt engineering, structured outputs, and modern AI-assisted workflows into web applications for intelligent user experiences.",
    tech: ["LLM APIs", "Structured Outputs", "Prompt Workflows", "AI Tooling"],
  },
  {
    title: "Cloud & Deployment",
    icon: "Cloud",
    description: "Deploying and managing production applications on Google Cloud Platform (GCP) and Vercel. Configuring domain DNS, SSL certificates, PM2 process management, and Nginx.",
    tech: ["GCP", "Vercel", "Nginx", "PM2", "Domain & SSL"],
  },
];

export const stats = [
  { value: 4, suffix: "+", label: "Companies & Internships" },
  { value: 5, suffix: "+", label: "Production Apps Built" },
  { value: 20, suffix: "+", label: "Technologies Mastered" },
  { value: 2, suffix: "+", label: "Years Hands-On Dev" },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science & Engineering",
  institution: "ABES Institute of Technology",
  location: "Ghaziabad, India",
  duration: "July 2020 – July 2024",
  cgpa: "6.9 / 10",
  highlights: [
    "Comprehensive foundation in Data Structures, Algorithms & System Architecture",
    "Built 5+ production-ready full stack web applications during engineering degree",
    "Completed 4 industry development internships concurrently with coursework",
  ],
};

export const availability = {
  status: "Available immediately",
  type: "Full-time / Freelance",
  location: "Remote / Ghaziabad, India",
  email: "gk13212@gmail.com",
  github: "https://github.com/guddukumar2002",
  githubUsername: "guddukumar2002",
  linkedin: "https://www.linkedin.com/in/guddu-kumar-dev21/",
  resumeUrl: "/assets/GudduKumarResume.pdf",
};

export const certificates = [
  {
    title: "Certified Frontend Developer",
    issuer: "Pearl Thoughts",
    desc: "Validates proficiency in modern frontend development, React component architecture, and responsive UI performance.",
  },
  {
    title: "Certified Web Developer",
    issuer: "Code Alpha",
    desc: "Validates full-stack capability across MongoDB, Express, React, Node.js, and secure API architecture.",
  },
];

export const testimonials = [
  {
    step: "01",
    title: "Understand the Problem",
    desc: "I start by deeply understanding requirements — what the user needs, what the business needs, and what can go wrong. No code before clarity.",
    icon: "🔍",
    color: "#818cf8",
  },
  {
    step: "02",
    title: "Plan the Architecture",
    desc: "I design the data flow, API structure, and component hierarchy before writing a single line. This prevents rewrites and saves days of work.",
    icon: "🖥️",
    color: "#34d399",
  },
  {
    step: "03",
    title: "Build & Iterate Fast",
    desc: "I ship working features quickly, get feedback, and iterate. I've taken projects from zero to production in under 2 weeks.",
    icon: "⚡",
    color: "#60a5fa",
  },
  {
    step: "04",
    title: "Deploy & Monitor",
    desc: "I handle deployment on Vercel and GCP, set up error monitoring, and ensure the app stays live and performant after launch.",
    icon: "🚀",
    color: "#c084fc",
  },
];

export const whyHireMe = [
  {
    icon: "🚀",
    title: "Ships Fast",
    desc: "Delivered 4 production apps across 4 companies — from idea to live deployment with zero downtime.",
    stat: "4 live apps",
  },
  {
    icon: "🧱",
    title: "Full Stack",
    desc: "Built complete systems — Razorpay payments, role-based auth, cloud storage, REST APIs, real-time features.",
    stat: "End-to-end",
  },
  {
    icon: "📈",
    title: "Impact-Driven",
    desc: "SPL platform handled 100+ registrations. MedGallery is actively used in a real clinical environment.",
    stat: "Real users",
  },
  {
    icon: "🤝",
    title: "Team-Ready",
    desc: "Worked in agile teams across 4 companies — remote & onsite. Strong Git workflow and communication.",
    stat: "4 companies",
  },
];

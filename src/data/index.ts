export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    role: "Web Developer",
    company: "SEG",
    type: "Onsite",
    duration: "Sept 2025 – Present",
    current: true,
    points: [
      "Developed and maintained scalable educational web platforms using React.js and Next.js",
      "Built responsive and reusable UI components using React, HTML, CSS, and modern JavaScript (ES6+)",
      "Deployed and managed applications on Google Cloud Platform (GCP) ensuring reliable hosting",
      "Improved user experience by optimizing page performance, accessibility, and responsive layouts",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Pearl Thoughts",
    type: "Remote",
    duration: "Jul 2025 – Aug 2025",
    current: false,
    points: [
      "Demonstrated strong analytical and problem-solving abilities in a fast-paced environment",
      "Worked on frontend development tasks applying HTML, CSS, JavaScript, React, and responsive design",
      "Utilized modern tooling: Git, VS Code, Slack for collaborative development workflows",
    ],
  },
  {
    role: "Node.js Developer Intern",
    company: "Inlign Tech",
    type: "Remote",
    duration: "Mar 2025 – Jul 2025",
    current: false,
    points: [
      "Developed and maintained scalable backend services for enterprise applications",
      "Designed and implemented RESTful APIs using Node.js and Express.js",
      "Optimized database queries and managed data using MongoDB",
      "Collaborated with frontend developers and product teams in agile sprints",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Code Alpha",
    type: "Remote",
    duration: "Mar 2024 – May 2024",
    current: false,
    points: [
      "Developed dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Integrated RESTful APIs and managed backend logic for seamless data flow",
      "Implemented JWT authentication and authorization for secure user access",
      "Participated in code reviews, debugging sessions, and performance optimization",
    ],
  },
];

export const projects = [
  {
    title: "SPL — Saroj Premier League",
    description:
      "Official cricket tournament platform for SPL U19 with team & individual registration, admin dashboard, JWT + Clerk auth, Razorpay payment integration, and automated SMS & email notifications — handling 100+ registrations with zero downtime.",
    tech: ["Next.js 14", "TypeScript", "Tailwind", "Prisma", "MongoDB"],
    github: "https://github.com/guddukumar2002/SPL",
    live: "https://spl-tournament-up.vercel.app",
    screenshot: "/assets/screenshots/spl.png",
    featured: true,
    metrics: ["100+ registrations", "Razorpay payments", "Auto SMS/email"],
  },
  {
    title: "MedGallery — Medical File Portal",
    description:
      "Production-ready medical file management system with role-based admin panel, drag & drop uploads, PDF preview, Cloudinary storage, and public gallery with search/filter — actively used in a real clinical environment.",
    tech: ["Next.js 16", "TypeScript", "Prisma 7", "PostgreSQL", "NextAuth.js", "Cloudinary", "Tailwind"],
    github: "https://github.com/guddukumar2002/medical-gallery",
    live: "https://medical-gallery-xi.vercel.app",
    screenshot: "/assets/screenshots/medgallery.png",
    featured: true,
    metrics: ["Role-based auth", "Cloudinary storage", "Real clinical use"],
  },
  {
    title: "SEO Analyzer Tool",
    description:
      "Full-stack SEO audit tool that crawls any URL and scores meta tags, headings, performance & accessibility in real time — delivering actionable fixes instantly with no third-party API dependency.",
    tech: ["React", "Node.js", "Express", "REST API"],
    github: "https://github.com/guddukumar2002/seo-analyzer",
    live: "https://seo-analyzer-frontend-blue.vercel.app/",
    screenshot: "/assets/screenshots/seo-analyzer.png",
    featured: true,
    metrics: ["Real-time audit", "No 3rd-party API", "Full-stack"],
  },
  {
    title: "Shivdhan Singh Institute",
    description:
      "Complete institutional website for SSITM with course listings, faculty profiles, admission info, and fully responsive design — live and actively used by the institute and its students.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/guddukumar2002/ssitm.git",
    live: "https://ssitm.vercel.app/",
    screenshot: "/assets/screenshots/ssitm.png",
    featured: true,
    metrics: ["Live production", "Fully responsive", "Active users"],
  },
];

export const skills = [
  { name: "React.js", category: "Frontend", level: "expert" },
  { name: "Next.js", category: "Frontend", level: "expert" },
  { name: "TypeScript", category: "Frontend", level: "expert" },
  { name: "Tailwind CSS", category: "Frontend", level: "expert" },
  { name: "HTML5 / CSS3", category: "Frontend", level: "expert" },
  { name: "Framer Motion", category: "Frontend", level: "proficient" },
  { name: "Bootstrap", category: "Frontend", level: "proficient" },
  { name: "Node.js", category: "Backend", level: "expert" },
  { name: "Express.js", category: "Backend", level: "expert" },
  { name: "MongoDB", category: "Backend", level: "expert" },
  { name: "REST APIs", category: "Backend", level: "expert" },
  { name: "Prisma ORM", category: "Backend", level: "proficient" },
  { name: "JWT Auth", category: "Backend", level: "proficient" },
  { name: "SQL", category: "Backend", level: "familiar" },
  { name: "JavaScript", category: "Language", level: "expert" },
  { name: "Java", category: "Language", level: "proficient" },
  { name: "C++", category: "Language", level: "proficient" },
  { name: "Python", category: "Language", level: "familiar" },
  { name: "Git & GitHub", category: "Tools", level: "expert" },
  { name: "Vercel", category: "Tools", level: "expert" },
  { name: "Google Cloud (GCP)", category: "Tools", level: "proficient" },
  { name: "Postman", category: "Tools", level: "proficient" },
  { name: "npm / yarn", category: "Tools", level: "expert" },
  { name: "VS Code", category: "Tools", level: "expert" },
  { name: "Webpack", category: "Tools", level: "familiar" },
];

export const stats = [
  { value: 4, suffix: "+", label: "Internships & Jobs" },
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 2, suffix: "+", label: "Years Experience" },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science",
  institution: "ABES Institute of Technology, Ghaziabad",
  location: "Ghaziabad, India",
  duration: "July 2020 – July 2024",
  cgpa: "6.9",
  highlights: [
    "Strong in Data Structures, Algorithms & System Design",
    "Built 5+ production projects during college",
    "Completed 4 industry internships while studying",
  ],
};

export const availability = {
  status: "Available immediately",
  type: "Full-time / Freelance",
  location: "Remote / Ghaziabad, India",
  github: "guddukumar2002",
};

export const certificates = [
  {
    title: "Certified Frontend Developer",
    issuer: "Pearl Thoughts",
    desc: "Validates skills in frontend development, problem-solving, and building scalable applications.",
  },
  {
    title: "Certified Web Developer",
    issuer: "Code Alpha",
    desc: "Validates skills in frontend & backend development, clean maintainable code and high-performance web applications.",
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

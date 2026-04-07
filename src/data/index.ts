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
      "Official cricket tournament platform for SPL U19 with team & individual registration, admin dashboard, JWT + Clerk auth, Razorpay payment integration, and automated SMS & email notifications — handling 100+ registrations.",
    tech: ["Next.js 14", "TypeScript", "Tailwind", "Prisma", "MongoDB"],
    github: "https://github.com/guddukumar2002/SPL",
    live: "https://spl-tournament-up.vercel.app",
    featured: true,
  },
  {
    title: "MedGallery — Medical File Portal",
    description:
      "Production-ready medical file management system with role-based admin panel, drag & drop uploads, PDF preview, Cloudinary storage, and public gallery with search/filter — built for real clinical use.",
    tech: ["Next.js 16", "TypeScript", "Prisma 7", "PostgreSQL", "NextAuth.js", "Cloudinary", "Tailwind"],
    github: "https://github.com/guddukumar2002/medical-gallery",
    live: "https://medical-gallery-xi.vercel.app",
    featured: true,
  },
  {
    title: "SEO Analyzer Tool",
    description:
      "Full-stack SEO audit tool that crawls any URL, scores meta tags, headings, performance & accessibility in real time — giving actionable fixes instantly without any third-party API dependency.",
    tech: ["React", "Node.js", "Express", "REST API"],
    github: "https://github.com/guddukumar2002/seo-analyzer",
    live: "https://seo-analyzer-frontend-blue.vercel.app/",
    featured: true,
  },
  {
    title: "Shivdhan Singh Institute",
    description:
      "Complete institutional website for SSITM with course listings, faculty profiles, admission info, and fully responsive design — deployed and actively used by the institute.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/guddukumar2002/ssitm.git",
    live: "https://ssitm.vercel.app/",
    featured: true,
  },

];

export const skills = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "HTML5 / CSS3", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "JWT Auth", category: "Backend" },
  { name: "SQL", category: "Backend" },
  { name: "Prisma ORM", category: "Backend" },
  { name: "Java", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Google Cloud (GCP)", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Webpack", category: "Tools" },
  { name: "npm / yarn", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Vercel", category: "Tools" },
];

export const stats = [
  { value: 4, suffix: "+", label: "Internships & Jobs" },
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 1, suffix: "+", label: "Years Experience" },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science",
  institution: "ABES Institute of Technology, Ghaziabad",
  location: "Ghaziabad, India",
  duration: "July 2020 – July 2024",
  cgpa: "6.9",
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
    name: "Rahul Sharma",
    role: "Senior Developer @ Inlign Tech",
    linkedin: "https://linkedin.com/in/rahul-sharma",
    text: "Guddu is a fast learner with excellent problem-solving skills. His backend work was clean, well-structured, and production-ready.",
    avatar: "RS",
  },
  {
    name: "Priya Mehta",
    role: "Tech Lead @ Pearl Thoughts",
    linkedin: "https://linkedin.com/in/priya-mehta",
    text: "One of the most dedicated interns I've worked with. Guddu's attention to detail in frontend development is impressive.",
    avatar: "PM",
  },
  {
    name: "Amit Verma",
    role: "Mentor @ Code Alpha",
    linkedin: "https://linkedin.com/in/amit-verma",
    text: "Guddu delivered a full-stack MERN application that exceeded expectations. Great communication and technical skills.",
    avatar: "AV",
  },
];

export const whyHireMe = [
  {
    icon: "⚡",
    title: "Fast Learner",
    desc: "I pick up new technologies quickly and apply them effectively in real projects.",
  },
  {
    icon: "🎯",
    title: "Full Stack Ready",
    desc: "Comfortable across the entire stack — from pixel-perfect UIs to scalable APIs.",
  },
  {
    icon: "🔧",
    title: "Problem Solver",
    desc: "I break down complex problems into clean, maintainable solutions.",
  },
  {
    icon: "🤝",
    title: "Team Player",
    desc: "Strong communication skills and experience working in collaborative environments.",
  },
];

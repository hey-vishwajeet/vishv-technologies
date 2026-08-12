export const siteConfig = {
  name: "Vishv Technologies",
  shortName: "Vishv Technologies",
  tagline: "Software. Education. Community.",
  description:
    "Vishv Technologies builds production software, runs career-focused developer education, and maintains an active open-source community from Satara, India.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vishvtech.io",
  email: "vishvtechnologies.info@gmail.com",
  phone: "+91 93092 35319",
  address: {
    streetAddress: "Satwashila, Sambhaji Nagar",
    addressLocality: "Satara",
    addressRegion: "Maharashtra",
    postalCode: "415004",
    addressCountry: "IN",
  },
  social: {
    github: "https://github.com/vishvtechnologies",
    linkedin: "https://www.linkedin.com/company/vishv-technologies/",
    twitter: "https://twitter.com/vishvtechnologies",
    instagram: "https://instagram.com/vishvtechnologies",
    discord: "https://discord.gg/7RKBmEfqKm",
  },
  keywords: [
    "Vishv Technologies",
    "software development",
    "web development",
    "professional courses",
    "developer community",
    "Next.js development",
    "TypeScript",
    "AI solutions",
    "cloud DevOps",
    "tech education",
  ],
} as const;

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#community", label: "Community" },
  { href: "/contact", label: "Contact" },
] as const;

/* ── Icon keys (mapped to SVG in ServiceCard) ── */
export type IconKey =
  | "code"
  | "globe"
  | "smartphone"
  | "cpu"
  | "cloud"
  | "palette"
  | "link"
  | "cog"
  | "shield"
  | "graduation"
  | "map"
  | "trophy"
  | "broadcast"
  | "bolt"
  | "rocket"
  | "chat"
  | "building"
  | "earth"
  | "mic"
  | "handshake"
  | "network";

export const services = [
  {
    icon: "code" as IconKey,
    title: "Software Development",
    description:
      "Custom enterprise software built with clean architecture, scalable backends, and maintainable codebases that evolve with your business.",
  },
  {
    icon: "globe" as IconKey,
    title: "Web Development",
    description:
      "Performant websites and web apps crafted with Next.js, TypeScript, and modern tooling — pixel-perfect across all devices.",
  },
  {
    icon: "smartphone" as IconKey,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps with Flutter, delivering native performance and polished UI for iOS and Android simultaneously.",
  },
  {
    icon: "cpu" as IconKey,
    title: "AI Solutions",
    description:
      "Intelligent automation, machine learning integrations, and LLM-powered products that give your business a decisive competitive edge.",
  },
  {
    icon: "cloud" as IconKey,
    title: "Cloud & DevOps",
    description:
      "AWS, GCP, and Azure architectures with CI/CD pipelines, containerization, and infrastructure-as-code for reliable deployments.",
  },
  {
    icon: "palette" as IconKey,
    title: "UI/UX Design",
    description:
      "Human-centered design that converts — from wireframes to high-fidelity prototypes, we craft interfaces users actually enjoy.",
  },
] as const;

export const learningItems = [
  {
    icon: "graduation" as IconKey,
    title: "Professional Courses",
    description:
      "Industry-aligned courses from foundational programming to advanced system design, taught by working professionals.",
  },
  {
    icon: "map" as IconKey,
    title: "Career Roadmaps",
    description:
      "Structured learning paths for frontend, backend, fullstack, AI/ML, and DevOps — from zero to job-ready.",
  },
  {
    icon: "trophy" as IconKey,
    title: "Certifications",
    description:
      "Industry-recognized certificates that validate your skills to employers and open doors to better opportunities.",
  },
  {
    icon: "broadcast" as IconKey,
    title: "Live Classes",
    description:
      "Real-time sessions with instructors and cohorts — ask questions, get feedback, and learn together.",
  },
  {
    icon: "bolt" as IconKey,
    title: "Coding Challenges",
    description:
      "Daily challenges and weekly contests that sharpen your problem-solving and prepare you for technical interviews.",
  },
  {
    icon: "rocket" as IconKey,
    title: "Project-Based Learning",
    description:
      "Build portfolio-worthy projects with guided mentorship — real apps, real code, real results.",
  },
] as const;

export const communityItems = [
  {
    icon: "chat" as IconKey,
    title: "Discord Community",
    description:
      "An active server of 500+ developers — ask questions, share projects, find collaborators, and land opportunities.",
  },
  {
    icon: "building" as IconKey,
    title: "Hackathons",
    description:
      "Quarterly hackathons with real prizes, industry judges, and the chance to build something extraordinary under pressure.",
  },
  {
    icon: "earth" as IconKey,
    title: "Open Source",
    description:
      "Contribute to and maintain open source projects — build your GitHub profile and give back to the community.",
  },
  {
    icon: "mic" as IconKey,
    title: "Workshops",
    description:
      "Monthly hands-on workshops led by CTOs, senior engineers, and product leaders from top tech companies.",
  },
  {
    icon: "handshake" as IconKey,
    title: "Mentorship",
    description:
      "1-on-1 mentorship with vetted industry professionals who have shipped products at scale and know how to guide careers.",
  },
  {
    icon: "network" as IconKey,
    title: "Global Networking",
    description:
      "Connect with developers, designers, and founders across 40+ countries — your next collaborator or co-founder is here.",
  },
] as const;

export const approachItems = [
  {
    title: "Subject-specific architecture",
    description:
      "Every project starts with your domain — not a template. We study your business model, user base, and growth plan before writing a single line of code.",
  },
  {
    title: "Rapid, iterative delivery",
    description:
      "Working software in days, not months. Our sprints are short and our demos are frequent, so your feedback shapes the product continuously.",
  },
  {
    title: "Modern stack, no legacy drag",
    description:
      "We work with current, proven technologies — Next.js, TypeScript, Python, Flutter, AWS. Your codebase will be maintainable from day one.",
  },
  {
    title: "Security from line one",
    description:
      "Security isn't bolted on later. We follow OWASP, implement encryption by default, and audit before every release.",
  },
  {
    title: "Built for your five-year vision",
    description:
      "Architecture that handles 100 users as gracefully as 10 million. We design for scale because retrofitting is expensive.",
  },
  {
    title: "Senior engineers, real accountability",
    description:
      "Every team member has shipped production products. You work directly with the people writing your code — no handoffs to offshore juniors.",
  },
] as const;

export const projects = [
  {
    title: "SmartAgri",
    description: "AI-powered disease detection and crop management system for farmers.",
    image: "/portfolio/industry-solutions.png",
    link: "https://github.com/vishwajeetdeshmukhdeveloper/SmartAgri",
  },
  {
    title: "Alpha",
    description: "AI-powered personal assistant robot with ESP32 and LLM integration.",
    image: "/portfolio/ai-solutions.png",
    link: "https://github.com/vishwajeetdeshmukhdeveloper/Alpha-Robot-Companion",
  },
  {
    title: "ExpensePro",
    description: "Expense tracking and budgeting web application for personal finance management.",
    image: "/portfolio/business-software.png",
    link: "https://github.com/vishwajeetdeshmukhdeveloper/Expense-Tracker-App",
  },
  {
    title: "Signify",
    description: "Signature replication tool for digital document authentication and verification.",
    image: "/portfolio/mobile-apps.png",
    link: "https://github.com/vishwajeetdeshmukhdeveloper/Photo-Replication-System",
  },
  {
    title: "SumHealth",
    description: "Summary generation for healthcare reports using NLP and AI techniques.",
    image: "/portfolio/sumhealth.png",
    link: "https://github.com/vishwajeetdeshmukhdeveloper/Summary-Generater",
  },
  {
    title: "Pefind",
    description: "Early disease risk prediction and health monitoring platform using AI.",
    image: "/portfolio/learning-platform.png",
    link: "https://github.com/vishwajeetdeshmukhdeveloper/Early-Disease-Detection-App",
  },
] as const;

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Flutter",
  "Firebase",
  "Docker",
  "Kubernetes",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "TensorFlow",
  "Tailwind CSS",
  "Three.js",
  "Prisma",
  "Stripe",
  "Supabase",
] as const;

export const testimonials = [
  {
    text: "Vishv Technologies didn't just build our product — they transformed our entire technical vision. The team's depth of knowledge and commitment to quality is unmatched.",
    initials: "AK",
    name: "Aryan Kapoor",
    role: "CTO, NexaFinance",
  },
  {
    text: "The learning platform they built for us enrolled 3,000 students in the first month. It was beautiful, fast, and exactly what we envisioned. Exceptional execution.",
    initials: "PS",
    name: "Priya Sharma",
    role: "Founder, EduPath",
  },
  {
    text: "I went from zero coding knowledge to a full-time developer role in 9 months. The Vishv curriculum and mentorship completely changed my career trajectory.",
    initials: "RM",
    name: "Rohan Mehta",
    role: "Software Engineer, Razorpay",
  },
] as const;

export const faqItems = [
  {
    question: "What services does Vishv Technologies offer?",
    answer:
      "We offer software development, web and mobile apps, AI solutions, cloud DevOps, UI/UX design, API development, automation, and security compliance.",
  },
  {
    question: "Do you provide professional learning courses?",
    answer:
      "Yes. Our learning platform includes professional courses, career roadmaps, certifications, live classes, coding challenges, and project-based learning.",
  },
  {
    question: "How can I join the Vishv developer community?",
    answer:
      "Join our Discord community, participate in hackathons, contribute to open source, attend workshops, and connect with mentors worldwide.",
  },
  {
    question: "How do I start a project with Vishv Technologies?",
    answer:
      "Contact us through our contact form with your project details. Our team will respond within 24 hours to schedule a discovery call.",
  },
] as const;

export const contactServiceOptions = [
  { value: "software", label: "Software Development" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile App" },
  { value: "ai", label: "AI Solutions" },
  { value: "learning", label: "Learning Platform" },
  { value: "other", label: "Something Else" },
] as const;

export const footerLinks = {
  company: [
    { href: "/#about", label: "About Us" },
    { href: "/#work", label: "Our Work" },
    { href: "/#approach", label: "Our Approach" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/#services", label: "Software Dev" },
    { href: "/#services", label: "Web Apps" },
    { href: "/#services", label: "Mobile" },
    { href: "/#services", label: "AI Solutions" },
    { href: "/#services", label: "Cloud" },
  ],
  community: [
    { href: "/#community", label: "Courses" },
    { href: siteConfig.social.discord, label: "Discord", external: true },
    { href: "/#community", label: "Hackathons" },
    { href: "/#community", label: "Mentorship" },
    { href: "/#community", label: "Open Source" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookies" },
  ],
} as const;

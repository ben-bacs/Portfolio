export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  techStack: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'Code2' | 'Layers' | 'ShieldCheck' | 'Cpu';
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number; // percentage
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "BENEDICT NEIL DACULA BACUD",
    name: "Benedict Neil Bacud",
    firstName: "Benedict Neil",
    lastName: "Bacud",
    title: "Full-Stack Developer | Systems & Security Specialist",
    statusBadge: "AVAILABLE FOR WORK",
    subtitle: "Network & Information Security Major | Full-Stack Software Engineer",
    
    // Images & Branding (Relative for GitHub Pages)
    profileImage: "./profile-hero.jpg",
    aboutImage: "./profile.jpg",
    logoUrl: "./logo-badge.png",
    logoIcon: "./logo.png",
    
    // Contact Information from Business Card
    email: "benedictneilbacud@gmail.com",
    phones: ["0945 201 3603", "0963 930 3496"],
    offices: [
      { city: "Iloilo City", province: "Iloilo", label: "Iloilo City, Iloilo" },
      { city: "Koronadal City", province: "South Cotabato", label: "Koronadal City, South Cotabato" },
    ],
    location: "Iloilo City & Koronadal City, Philippines",
    
    github: "https://github.com/ben-bacs",
    linkedin: "https://linkedin.com",
    cvUrl: "#",
    
    headline: {
      regular1: "I build robust ",
      highlight1: "backend systems",
      regular2: " that scale & ",
      highlight2: "secure",
      regular3: " digital platforms.",
    },
    heroSubtitle:
      "IT Major in Network & Information Security at WVSU. Software engineer specializing in scalable modular monoliths, Java/Spring Boot & Go systems, Cloudflare/Supabase edge architectures, and Linux environments.",
    aboutHeading: {
      regular1: "I'm a ",
      highlight1: "security-minded engineer",
      regular2: " who bridges code & infrastructure.",
    },
    aboutBio: [
      "With a strong foundation in Network and Information Security, I engineer resilient digital backbones. I specialize in crafting high-throughput distributed services, bulletproof authentication mechanisms (RLS, RBAC, BCrypt, Argon2id), and responsive modern web applications.",
      "Dual-certified in Cisco Networking (CCNA 1-3) and Computer Systems Servicing (CSS NC II), I bring deep infrastructure empathy to every software layer—from Linux daemon configurations to cloud deployment pipelines."
    ],
    experienceBadge: {
      title: "Dual Certified",
      subtitle: "CCNA 1-3 & CSS NC II",
      tag: "Network & Security"
    }
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Certifications", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  projects: [
    {
      id: "ijwkms-next",
      title: "IJWKMS Next Academic Operations",
      category: "Modular Monolith & RBAC",
      description: "Enterprise student operations management system with BCrypt auth, session management, versioned curricula, transactional enrollment, and audit logs.",
      tags: ["Java 25", "Spring Boot 4", "PostgreSQL 17", "Flyway"],
      techStack: ["Java 25", "Spring Boot 4", "PostgreSQL 17", "Flyway", "React 19", "TypeScript", "Docker Compose", "Vite"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs/IJWKMS---Admin-Student-Management-System",
      githubUrl: "https://github.com/ben-bacs/IJWKMS---Admin-Student-Management-System",
      featured: true,
    },
    {
      id: "bensoy",
      title: "BENSOY Spotify Intelligence",
      category: "Edge Analytics & Privacy",
      description: "Private, edge-native Spotify listening intelligence and chronobiology analytics platform with zero external tracking and encrypted token storage.",
      tags: ["Cloudflare Workers", "Cloudflare D1", "Next.js", "Drizzle ORM"],
      techStack: ["Cloudflare Workers", "Cloudflare D1 (Edge SQLite)", "Next.js", "React 19", "Drizzle ORM", "TypeScript", "Tailwind CSS", "AES-256-GCM"],
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs/BENSOY",
      githubUrl: "https://github.com/ben-bacs/BENSOY",
      featured: true,
    },
    {
      id: "pcms-v2",
      title: "PCMS v2 Pediatric Clinic Management",
      category: "Healthcare EMR & RLS",
      description: "Security-hardened medical records and clinic administration platform with strict Row-Level Security (RLS), RBAC, and conflict-free scheduling.",
      tags: ["Next.js App Router", "Supabase", "PostgreSQL", "RLS"],
      techStack: ["Next.js 15+", "Supabase Auth", "PostgreSQL", "Row Level Security", "React 19", "TypeScript", "Docker", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs/Pediatric-Clinic-Management-System-PCMS-",
      githubUrl: "https://github.com/ben-bacs/Pediatric-Clinic-Management-System-PCMS-",
      featured: true,
    },
    {
      id: "heatsafe-campus",
      title: "HeatSafe Campus Decision Support",
      category: "Environmental Risk Analytics",
      description: "Mobile-first heat-risk assessment platform calculating deterministic health indices, weather normalization, and institutional policy advisories.",
      tags: ["Next.js 16", "Supabase", "Open-Meteo", "TypeScript"],
      techStack: ["Next.js 16", "React 19", "TypeScript", "Supabase Postgres", "Row Level Security", "Open-Meteo API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs/HeatSafe",
      githubUrl: "https://github.com/ben-bacs/HeatSafe",
      featured: true,
    },
    {
      id: "acams-rotc",
      title: "A.C.A.M.S. ROTC-AF Attendance System",
      category: "Offline-First Muster Platform",
      description: "Automated Cadre Attendance Management System for ROTC muster operations with tenant RLS isolation and sub-10ms p99 query benchmarks.",
      tags: ["Go (Golang)", "PostgreSQL 16", "Docker", "Row Level Security"],
      techStack: ["Go 1.24", "PostgreSQL 16", "Docker Compose", "Row Level Security", "Append-Only Auditing"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs",
      githubUrl: "https://github.com/ben-bacs",
      featured: true,
    },
    {
      id: "calcom-ssrf",
      title: "Cal.com SSRF Vulnerability Defense",
      category: "Open Source Security Research",
      description: "Upstream security contribution mitigating Server-Side Request Forgery (SSRF) in ICS feed calendars and AvatarAPI prefill flows (PR #30158).",
      tags: ["AppSec", "TypeScript", "Node.js", "Jest"],
      techStack: ["TypeScript", "Node.js", "Next.js", "SSRF Defense", "Jest Test Suite", "Network Security"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/calcom/cal.diy/pull/30158",
      githubUrl: "https://github.com/calcom/cal.diy/pull/30158",
      featured: true,
    },
    {
      id: "secure-service-desk",
      title: "Secure Service Desk API",
      category: "ITSM Modular Monolith",
      description: "Production-oriented multi-tenant IT service management API with Argon2id password hashing, rotating refresh tokens, RBAC guards, and immutable audit logs.",
      tags: ["NestJS 11", "TypeScript", "PostgreSQL 17", "Prisma ORM"],
      techStack: ["NestJS 11", "TypeScript", "PostgreSQL 17", "Prisma ORM", "Argon2id", "JWT", "Docker", "OpenAPI"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs",
      githubUrl: "https://github.com/ben-bacs",
      featured: true,
    },
    {
      id: "autorest-sleep-tracker",
      title: "AutoRest Sleep Tracker PWA",
      category: "PWA & Web Audio Synthesis",
      description: "Zero-server-cost, 100% private sleep debt analytics PWA featuring hypnogram visualizations, circadian recovery scores, and procedural audio synthesis.",
      tags: ["React 19", "TypeScript", "Web Audio API", "PWA"],
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "Web Audio API", "PWA", "Vite", "GitHub Pages"],
      image: "https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://ben-bacs.github.io/Sleep-Tracker/",
      githubUrl: "https://github.com/ben-bacs/Sleep-Tracker",
      featured: true,
    },
    {
      id: "academic-courseware-hub",
      title: "BSIT 4B Academic Courseware Hub",
      category: "Interactive Educational Platform",
      description: "Academic lecture portal and 479-slide deck system covering CIT 245 (Cyberforensics) and CIT 220 (Information Assurance & Security 2).",
      tags: ["React", "TypeScript", "Vite", "Cyberforensics"],
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "LocalStorage", "Syntax Highlighting"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs/bsit4b-nis-st",
      githubUrl: "https://github.com/ben-bacs/bsit4b-nis-st",
      featured: true,
    },
    {
      id: "wellness-journal",
      title: "A Day of Reset Wellness Journal",
      category: "Interactive Deck & Telemetry",
      description: "24-hour lifestyle and wellness protocol journal and presentation deck with client-side PowerPoint (.pptx) export and verified Strava/sleep telemetry.",
      tags: ["React", "TypeScript", "PptxGenJS", "Tailwind CSS"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "PptxGenJS", "Strava Telemetry", "GitHub Pages"],
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://ben-bacs.github.io/wellness-journal-presentation/",
      githubUrl: "https://github.com/ben-bacs/wellness-journal-presentation",
      featured: true,
    },
  ] as Project[],

  services: [
    {
      id: "backend-architecture",
      title: "Backend Architecture & APIs",
      icon: "Code2",
      description: "Designing resilient RESTful services, modular monoliths, JWT/opaque session lifecycles, and high-performance PostgreSQL schemas with strict isolation.",
      highlights: ["Java Spring Boot & Go", "NestJS & Next.js APIs", "PostgreSQL 16/17 & Supabase", "JWT / RBAC / RLS Security"],
    },
    {
      id: "fullstack-development",
      title: "Full-Stack Development",
      icon: "Layers",
      description: "Building responsive, accessible web applications and full-stack solutions using React 19, TypeScript, Next.js App Router, and Cloudflare edge workers.",
      highlights: ["React 19 & Next.js 16", "Cloudflare Workers & D1", "TypeScript Strict Mode", "Tailwind CSS & Mobile-First"],
    },
    {
      id: "linux-network-systems",
      title: "Linux & Network Security",
      icon: "ShieldCheck",
      description: "Linux server administration, CCNA-grounded routing and switching, SSRF mitigations, container security hardening, and digital forensics.",
      highlights: ["Ubuntu / Debian / Kali", "Docker & Compose Stacks", "SSRF & OWASP Defenses", "CCNA Enterprise Routing"],
    },
    {
      id: "edge-offline-systems",
      title: "Edge & Offline-First Systems",
      icon: "Cpu",
      description: "Engineering client-side PWA tools, edge SQLite storage, zero-server-cost architectures, and offline-first muster management platforms.",
      highlights: ["Offline-First Muster Apps", "Cloudflare Edge D1 SQLite", "Progressive Web Apps (PWA)", "Web Audio API Synthesis"],
    },
  ] as Service[],

  skills: [
    { name: "Backend Architecture & APIs (Java, Go, NestJS, Next.js)", level: 95, category: "Core" },
    { name: "Relational Databases & RLS (PostgreSQL, Supabase, D1)", level: 92, category: "Data" },
    { name: "Application Security & Hardening (SSRF, RBAC, OWASP)", level: 90, category: "Security" },
    { name: "Linux Administration & Docker Containerization", level: 88, category: "Infrastructure" },
    { name: "Modern Web Frontend (React 19, TypeScript, Tailwind)", level: 88, category: "Frontend" },
    { name: "Network Infrastructure (Cisco CCNA 1-3 Routing & Switching)", level: 85, category: "Networking" },
  ] as Skill[],

  testimonials: [
    {
      id: "1",
      name: "Chris Apin",
      role: "Lead Project Manager",
      company: "Apex Tech Logistics",
      avatar: "./Chris Apin.jpg",
      quote: "Benedict delivers exceptional backend architecture. His network security background gives us total peace of mind regarding database efficiency and API security.",
    },
    {
      id: "2",
      name: "Richyll Gabinera",
      role: "Operations Director",
      company: "CarePulse Health",
      avatar: "./Richyll Gabinera.jpg",
      quote: "The clinic management system Benedict architected streamlined our appointment workflows and record security. Clean code, strict permissions, and reliable delivery.",
    },
    {
      id: "3",
      name: "Jaspher Ebarle",
      role: "Lead Systems Architect",
      company: "Veloce Infrastructure Group",
      avatar: "./Jaspher Ebarle.jpg",
      quote: "The academic management system Benedict architected handled high-concurrency operations flawlessly. Rock-solid database consistency and exemplary clean architecture.",
    },
  ] as Testimonial[],

  footer: {
    ctaHeading: "Have a project in mind?",
    ctaSubtext: "I'm always open to discussing new opportunities, backend architecture challenges, and full-stack partnerships.",
    coreStack: [
      "Java 25 / Spring Boot 4",
      "Go (Golang)",
      "Next.js & React 19",
      "NestJS & Node.js",
      "PostgreSQL 17 / Supabase",
      "Cloudflare Workers & D1",
      "Docker & Linux Admin",
      "CCNA Networking",
    ],
  }
};

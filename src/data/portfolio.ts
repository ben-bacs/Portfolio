export interface Project {
  id: string;
  title: string;
  category: string;
  domain: 'Backend & Systems' | 'Security & Edge' | 'Apps & Tooling';
  description: string;
  highlights?: string[];
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
    subtitle: "Network & Information Security Major | Backend, Systems & Security Engineer",
    
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
      "IT Major in Network & Information Security at WVSU. Software engineer specializing in scalable modular monoliths (Java/Spring Boot, Go, NestJS), native Rust/Tauri desktop systems, Cloudflare/Supabase edge architectures, and Linux environments.",
    aboutHeading: {
      regular1: "I'm a ",
      highlight1: "security-minded engineer",
      regular2: " who bridges code & infrastructure.",
    },
    aboutBio: [
      "With a strong foundation in Network and Information Security, I engineer resilient digital backbones—from enterprise modular monoliths and native Rust/WASAPI audio-DSP applications to edge-native cloud workers. I specialize in high-throughput services, strict tenant isolation (PostgreSQL RLS, RBAC, Argon2id, BCrypt), and responsive modern web interfaces.",
      "Dual-certified in Cisco Networking (CCNA 1-3) and Computer Systems Servicing (CSS NC II), and an upstream open-source security contributor (Cal.com SSRF defense), I bring deep infrastructure empathy to every software layer."
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
      id: "resona",
      title: "RESONA Native Audio Visualizer",
      category: "Native Rust & WebGL2 DSP",
      domain: "Backend & Systems",
      description: "Lightweight Windows 11 desktop music-reactive idle visualizer powered by native Rust WASAPI loopback capture, a 64-band logarithmic FFT DSP engine, and 8 decoupled WebGL2 shader scenes.",
      highlights: [
        "Zero-permission Windows WASAPI loopback audio capture in native Rust with 64-band logarithmic FFT & Hann windowing",
        "8 hardware-accelerated WebGL2 presets decoupled from React with 60/30 FPS power throttling",
        "Atomic filesystem transactions (.tmp write-sync-replace, .bak rollback, .corrupt quarantine) & CI/CD MSI/NSIS releases"
      ],
      tags: ["Rust", "Tauri 2.2", "WebGL2", "TypeScript"],
      techStack: ["Rust 1.78+", "Tauri 2.2", "Windows WASAPI", "WebGL2 Shaders", "React 18", "TypeScript", "Tailwind CSS", "GitHub Actions"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs/RESONA/releases",
      githubUrl: "https://github.com/ben-bacs/RESONA",
      featured: true,
    },
    {
      id: "ijwkms-next",
      title: "IJWKMS Next Academic Operations",
      category: "Modular Monolith & RBAC",
      domain: "Backend & Systems",
      description: "Enterprise student operations management system with BCrypt auth, session management, versioned curricula, transactional enrollment, and audit logs.",
      highlights: [
        "Modular monolith architecture in Java 25 & Spring Boot 4 with strict domain boundaries",
        "Server-revocable HttpOnly cookie sessions, BCrypt password hashing, and multi-role RBAC enforcement",
        "Flyway-versioned PostgreSQL 17 schema with prerequisite validation and append-only audit trails"
      ],
      tags: ["Java 25", "Spring Boot 4", "PostgreSQL 17", "Flyway"],
      techStack: ["Java 25", "Spring Boot 4", "PostgreSQL 17", "Flyway", "React 19", "TypeScript", "Docker Compose", "Vite"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs/IJWKMS---Admin-Student-Management-System",
      githubUrl: "https://github.com/ben-bacs/IJWKMS---Admin-Student-Management-System",
      featured: true,
    },
    {
      id: "calcom-ssrf",
      title: "Cal.com SSRF Vulnerability Defense",
      category: "Open Source Security Research",
      domain: "Security & Edge",
      description: "Upstream security contribution mitigating Server-Side Request Forgery (SSRF) in ICS feed calendars and AvatarAPI prefill flows (PR #30158).",
      highlights: [
        "Engineered fetchWithSSRFProtection() in packages/lib/ssrfProtection.ts for upstream Cal.com",
        "Enforced strict IP/hostname validation across HTTP redirect hops and capped maximum redirect depth",
        "Isolated multi-feed calendar failures via Promise.allSettled() with full Jest test coverage for loopback/private IPs"
      ],
      tags: ["AppSec", "TypeScript", "Node.js", "Jest"],
      techStack: ["TypeScript", "Node.js", "Next.js", "SSRF Defense", "Jest Test Suite", "Network Security"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/calcom/cal.diy/pull/30158",
      githubUrl: "https://github.com/calcom/cal.diy/pull/30158",
      featured: true,
    },
    {
      id: "bensoy",
      title: "BENSOY Spotify Intelligence",
      category: "Edge Analytics & Privacy",
      domain: "Security & Edge",
      description: "Private, edge-native Spotify listening intelligence and chronobiology analytics platform with zero external tracking and encrypted token storage.",
      highlights: [
        "AES-256-GCM encryption at rest for Spotify OAuth tokens stored in Cloudflare D1 edge SQLite",
        "Deterministic cron polling (*/30 * * * *) on Cloudflare Workers with idempotent playback deduplication",
        "24-hour circadian listening distribution analytics and custom vector receipt generation"
      ],
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
      domain: "Security & Edge",
      description: "Security-hardened medical records and clinic administration platform with strict Row-Level Security (RLS), RBAC, and conflict-free scheduling.",
      highlights: [
        "Database-enforced PostgreSQL Row-Level Security (RLS) isolating sensitive pediatric EMR records",
        "Role-based clinical workflows for pediatricians, staff, and guardians with vaccine ledger tracking",
        "Conflict-free appointment scheduling and containerized local Supabase + Next.js deployment"
      ],
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
      domain: "Security & Edge",
      description: "Mobile-first heat-risk assessment platform calculating deterministic health indices, weather normalization, and institutional policy advisories.",
      highlights: [
        "Decoupled architecture separating weather observation ingestion, deterministic heat-index math, and policy advisories",
        "Auditable human-in-the-loop institutional advisory workflow backed by Supabase PostgreSQL RLS",
        "Mobile-first telemetry UI engineered with Next.js 16 and React 19"
      ],
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
      domain: "Backend & Systems",
      description: "Automated Cadre Attendance Management System for ROTC muster operations with tenant RLS isolation and sub-10ms p99 query benchmarks.",
      highlights: [
        "Engineered in Go 1.24 & PostgreSQL 16 achieving sub-10ms p99 latency across 1,000+ cadet muster records",
        "Offline-first field operation resilience with strict multi-tenant Row-Level Security isolation",
        "Immutable append-only attendance audit logs for command accountability"
      ],
      tags: ["Go (Golang)", "PostgreSQL 16", "Docker", "Row Level Security"],
      techStack: ["Go 1.24", "PostgreSQL 16", "Docker Compose", "Row Level Security", "Append-Only Auditing"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs",
      githubUrl: "https://github.com/ben-bacs",
      featured: true,
    },
    {
      id: "secure-service-desk",
      title: "Secure Service Desk API",
      category: "ITSM Modular Monolith",
      domain: "Backend & Systems",
      description: "Production-oriented multi-tenant IT service management API with Argon2id password hashing, rotating refresh tokens, RBAC guards, and immutable audit logs.",
      highlights: [
        "NestJS 11 modular monolith with strict tenant isolation and Prisma + PostgreSQL 17 persistence",
        "Argon2id credential hashing, short-lived JWT access tokens, and revocable rotating refresh tokens",
        "Comprehensive OpenAPI/Swagger specification and automated Docker Compose orchestration"
      ],
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
      domain: "Apps & Tooling",
      description: "Zero-server-cost, 100% private sleep debt analytics PWA featuring hypnogram visualizations, circadian recovery scores, and procedural audio synthesis.",
      highlights: [
        "100% client-side offline-capable PWA with zero external telemetry or cloud vendor dependencies",
        "Procedural Web Audio API brown/pink/rain noise synthesizer and interactive sleep stage hypnograms",
        "Apple Health / AutoSleep-inspired dark OLED aesthetic deployed on GitHub Pages"
      ],
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
      domain: "Apps & Tooling",
      description: "Academic lecture portal and 479-slide deck system covering CIT 245 (Cyberforensics) and CIT 220 (Information Assurance & Security 2).",
      highlights: [
        "479 interactive lecture slides covering Cyberforensics (CIT 245) and Information Assurance & Security 2 (CIT 220)",
        "Built-in syntax-highlighted terminal simulators, forensic command breakdowns, and persistent study progress",
        "Keyboard-navigable presentation engine hosted live on GitHub Pages"
      ],
      tags: ["React", "TypeScript", "Vite", "Cyberforensics"],
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "LocalStorage", "Syntax Highlighting", "GitHub Pages"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://ben-bacs.github.io/bsit4b-nis-st/",
      githubUrl: "https://github.com/ben-bacs/bsit4b-nis-st",
      featured: true,
    },
    {
      id: "wellness-journal",
      title: "A Day of Reset Wellness Journal",
      category: "Interactive Deck & Telemetry",
      domain: "Apps & Tooling",
      description: "24-hour lifestyle and wellness protocol journal and presentation deck with client-side PowerPoint (.pptx) export and verified Strava/sleep telemetry.",
      highlights: [
        "Interactive 16:9 presentation deck with one-click client-side PowerPoint (.pptx) generation via PptxGenJS",
        "Integrates verified Strava running metrics and circadian sleep recovery telemetry",
        "Responsive editorial layout deployed on GitHub Pages"
      ],
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
      title: "Backend & Systems Engineering",
      icon: "Code2",
      description: "Designing resilient modular monoliths, native Rust/Go systems, revocable session lifecycles, and high-performance PostgreSQL schemas with strict isolation.",
      highlights: ["Java 25 (Spring Boot 4) & Go", "Rust & Tauri 2 Native Apps", "NestJS 11 & Next.js 16 APIs", "PostgreSQL 17 & RLS Security"],
    },
    {
      id: "fullstack-development",
      title: "Full-Stack & Graphics Engineering",
      icon: "Layers",
      description: "Building responsive web platforms and hardware-accelerated interfaces using React 19, TypeScript, Next.js App Router, WebGL2 shaders, and Cloudflare Workers.",
      highlights: ["React 19 & Next.js 16", "Decoupled WebGL2 & Web Audio", "Cloudflare Workers & D1", "TypeScript Strict Mode"],
    },
    {
      id: "linux-network-systems",
      title: "AppSec & Network Security",
      icon: "ShieldCheck",
      description: "Upstream vulnerability mitigation (SSRF), CCNA-grounded routing and switching, Linux server hardening, cryptographic token isolation, and digital forensics.",
      highlights: ["SSRF & OWASP Top 10 Defense", "Argon2id / BCrypt / AES-GCM", "Ubuntu / Debian / Kali Linux", "CCNA 1–3 Enterprise Networking"],
    },
    {
      id: "edge-offline-systems",
      title: "Edge & Offline-First Runtimes",
      icon: "Cpu",
      description: "Engineering atomic local persistence, client-side PWA tools, edge SQLite storage, zero-server-cost architectures, and offline-first muster platforms.",
      highlights: ["Atomic Filesystem Persistence", "Cloudflare Edge D1 SQLite", "Offline-First Muster Engines", "Zero-Cost Progressive Web Apps"],
    },
  ] as Service[],

  skills: [
    { name: "Backend & Systems (Java 25, Rust, Go, NestJS)", level: 95, category: "Core" },
    { name: "Database Engineering & RLS (PostgreSQL 17, Supabase, D1)", level: 92, category: "Data" },
    { name: "Application Security & AppSec (SSRF, RBAC, OWASP)", level: 92, category: "Security" },
    { name: "Modern Frontend & WebGL2 (React 19, Next.js 16, TS)", level: 90, category: "Frontend" },
    { name: "Linux Administration, Docker & CI/CD Pipelines", level: 88, category: "Infrastructure" },
    { name: "Network Infrastructure (Cisco CCNA 1-3 & Forensics)", level: 86, category: "Networking" },
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
    ctaSubtext: "I'm always open to discussing new opportunities, backend architecture challenges, native systems, and full-stack partnerships.",
    coreStack: [
      "Java 25 / Spring Boot 4",
      "Rust / Tauri 2.2 / WebGL2",
      "Go (Golang) 1.24",
      "Next.js 16 & React 19",
      "NestJS 11 & Node.js",
      "PostgreSQL 17 / Supabase RLS",
      "Cloudflare Workers & D1",
      "Docker, Linux & CCNA",
    ],
  }
};

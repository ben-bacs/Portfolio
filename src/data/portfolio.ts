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
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Contract Experience' | 'Education' | 'Leadership & Organizations';
  location: string;
  summary: string;
  highlights: string[];
  techStack?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'National Certification' | 'Cisco Networking Academy';
  badge: string;
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
    name: "Benedict Neil D. Bacud",
    firstName: "Benedict Neil",
    lastName: "Bacud",
    title: "Software Development & Network and Information Security",
    statusBadge: "AVAILABLE FOR WORK & OJT",
    subtitle: "BSIT Major in Network & Information Security | Full-Stack, Backend & Security Engineer",

    // Images & Branding (Relative for GitHub Pages)
    profileImage: "./profile-hero.jpg",
    aboutImage: "./profile.jpg",
    logoUrl: "./logo-badge.png",
    logoIcon: "./logo.png",

    // Contact Information synced with finalized CV
    email: "benedictneildaculabacud@gmail.com",
    secondaryEmail: "benedictneilbacud@gmail.com",
    phones: ["0945 201 3603", "0963 930 3496"],
    offices: [
      { city: "Iloilo City", province: "Iloilo", label: "Iloilo City, Iloilo" },
      { city: "Koronadal City", province: "South Cotabato", label: "Koronadal City, South Cotabato" },
    ],
    location: "Iloilo City & Koronadal City, Philippines",

    github: "https://github.com/ben-bacs",
    linkedin: "https://linkedin.com",
    cvUrl: "./Benedict_Neil_Bacud_CV.pdf",

    headline: {
      regular1: "I engineer secure ",
      highlight1: "backend systems",
      regular2: ", resilient networks & ",
      highlight2: "verified",
      regular3: " web platforms.",
    },
    heroSubtitle:
      "Fourth-year BSIT student specializing in Network and Information Security at West Visayas State University – Main Campus. Experienced in backend authorization, API contracts, automated regression testing, modular monoliths (Java/Spring Boot, Go, NestJS, Rust), and team-led Nessus vulnerability assessments.",
    aboutHeading: {
      regular1: "I'm a ",
      highlight1: "security-first engineer",
      regular2: " bridging backend systems & network defense.",
    },
    aboutBio: [
      "As a fourth-year BS Information Technology student specializing in Network and Information Security at West Visayas State University (Main Campus) and an ongoing Backend Assistant for A.L.E.X. Car Dealership, I build secure software where authorization, API contracts, database isolation (PostgreSQL RLS), and automated regression tests are first-class citizens.",
      "My work spans merged upstream open-source contributions (Mealie PR #8984, Cal.com SSRF defense PR #30158), our AI-assisted thesis platform Voice Voyage, team-led Nessus vulnerability assessments, and digital forensics (Quiet Campus). Hold TESDA Computer Systems Servicing NC II and Cisco Networking Academy certifications in CCNA 1–2, Network Defense, and Cybersecurity."
    ],
    experienceBadge: {
      title: "TESDA & Cisco",
      subtitle: "CSS NC II • CCNA • NetDef",
      tag: "Verified Credentials"
    }
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "About & Skills", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  experiences: [
    {
      id: "alex-car-dealership",
      role: "Backend Assistant (Contract Project Experience)",
      organization: "A.L.E.X. Car Dealership",
      period: "September 2026 – Present",
      type: "Contract Experience",
      location: "Remote / Contract",
      summary: "Ongoing contract engineering focused on backend authorization, API contract enforcement, PostgreSQL integration evidence, and browser test verification.",
      highlights: [
        "Engineered role-scoped backend authorization guards and strict REST/RPC API contracts across dealership workflows",
        "Delivered verifiable PostgreSQL database integration evidence and schema migration validation",
        "Authored automated browser & integration tests submitted and reviewed through production pull requests"
      ],
      techStack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Automated Browser Testing", "Git PR Workflows"]
    },
    {
      id: "wvsu-bsit",
      role: "BS Information Technology – Network & Information Security",
      organization: "West Visayas State University – Main Campus",
      period: "August 2023 – June 2027 (Expected)",
      type: "Education",
      location: "La Paz, Iloilo City",
      summary: "Fourth-year BSIT candidate specializing in Network and Information Security, enterprise systems development, vulnerability assessment, and digital forensics.",
      highlights: [
        "Team Lead for an external organization's Nessus-based Vulnerability Assessment and Quiet Campus digital forensics investigation",
        "Co-developer of Voice Voyage (Thesis) utilizing Flutter, Dart, Python/FastAPI, and Firebase with regression test suites",
        "Completed CCNA Introduction to Networks, CCNA Switching/Routing/Wireless Essentials, Network Defense, and Cybersecurity"
      ],
      techStack: ["Network & InfoSec", "TCP/IP & Subnetting", "Nessus", "Digital Forensics", "Software Engineering"]
    },
    {
      id: "wvsu-cyberobotics",
      role: "Technical Member & Prospective Auditor",
      organization: "WVSU Cyberobotics",
      period: "2025 – Present",
      type: "Leadership & Organizations",
      location: "WVSU Main Campus, Iloilo City",
      summary: "Contributes to academic-system modernization, technical governance, and secure software architecture initiatives.",
      highlights: [
        "Architected academic-system modernization modules with multi-role authorization and revocable sessions",
        "Implemented transactional enrollment validation and automated test coverage"
      ],
      techStack: ["System Modernization", "Authorization", "Session Security", "Automated Testing"]
    },
    {
      id: "af-rotc",
      role: "Wing 7 Officer",
      organization: "Air Force ROTC – WVSU Unit",
      period: "2024 – Present",
      type: "Leadership & Organizations",
      location: "WVSU Main Campus, Iloilo City",
      summary: "Provides technical editing, cadet database administration, and intelligence/operations support for unit muster and administrative workflows.",
      highlights: [
        "Managed unit database records, technical documentation, and operational intelligence support",
        "Spearheaded digital muster and attendance system workflows for cadet accountability"
      ],
      techStack: ["Database Support", "Technical Documentation", "Operations & Intelligence"]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      id: "tesda-css-ncii",
      title: "Computer Systems Servicing NC II",
      issuer: "TESDA (Technical Education and Skills Development Authority)",
      date: "May 2026",
      category: "National Certification",
      badge: "NC II National Certificate"
    },
    {
      id: "ccna-srwe",
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      date: "January 14, 2026",
      category: "Cisco Networking Academy",
      badge: "Cisco Verified"
    },
    {
      id: "cisco-netdef",
      title: "Network Defense",
      issuer: "Cisco Networking Academy",
      date: "April 29, 2026",
      category: "Cisco Networking Academy",
      badge: "Cisco Security"
    },
    {
      id: "ccna-itn",
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "May 20, 2025",
      category: "Cisco Networking Academy",
      badge: "Cisco Verified"
    },
    {
      id: "cisco-intro-cyber",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2026",
      category: "Cisco Networking Academy",
      badge: "Cisco Security"
    }
  ] as CertificationItem[],

  projects: [
    {
      id: "alex-dealership",
      title: "A.L.E.X. Car Dealership Backend",
      category: "Contract Backend Engineering",
      domain: "Backend & Systems",
      badge: "Contract Work",
      description: "Production dealership backend engineering covering role-based authorization, API contracts, PostgreSQL integration verification, and browser regression testing.",
      highlights: [
        "Implemented strict backend authorization guards and typed API contracts for dealership inventory and transaction flows",
        "Produced verifiable PostgreSQL integration evidence and relational data integrity checks",
        "Submitted end-to-end browser and API regression tests through peer-reviewed pull requests"
      ],
      tags: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
      techStack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "API Contracts", "Automated Browser Tests"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs",
      githubUrl: "https://github.com/ben-bacs",
      featured: true,
    },
    {
      id: "voice-voyage",
      title: "Voice Voyage (Thesis Project)",
      category: "AI-Assisted Mobile & FastAPI Platform",
      domain: "Apps & Tooling",
      badge: "Thesis Project",
      description: "Cross-platform mobile thesis application built with Flutter, Dart, Python/FastAPI, and Firebase featuring structured client progression and service integration.",
      highlights: [
        "Engineered client progression workflows and resilient Python/FastAPI + Firebase backend service integration",
        "Resolved critical Flutter state and UI lifecycle bugs backed by automated unit and widget regression tests",
        "Coordinated multi-layer API serialization and authentication state across mobile clients"
      ],
      tags: ["Flutter", "Dart", "Python / FastAPI", "Firebase"],
      techStack: ["Flutter", "Dart", "Python", "FastAPI", "Firebase", "Automated Regression Tests"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs",
      githubUrl: "https://github.com/ben-bacs",
      featured: true,
    },
    {
      id: "mealie-opensource",
      title: "Mealie Open-Source Contribution (PR #8984)",
      category: "Merged Open-Source Bug Fix",
      domain: "Backend & Systems",
      badge: "Merged PR #8984",
      description: "Merged upstream contribution to Mealie (self-hosted recipe manager) fixing multi-tenant household-specific recipe filtering in Python & SQLAlchemy.",
      highlights: [
        "Diagnosed and fixed a cross-household recipe filtering defect in Mealie's Python / SQLAlchemy query layer (PR #8984)",
        "Enforced strict household tenant isolation across combined search and category filter queries",
        "Added comprehensive combined-filter and tenant-isolation regression tests to the upstream pytest suite"
      ],
      tags: ["Python", "SQLAlchemy", "Pytest", "PR #8984"],
      techStack: ["Python", "SQLAlchemy", "FastAPI", "Pytest", "Multi-Tenant Isolation", "Open Source"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/mealie-recipes/mealie/pull/8984",
      githubUrl: "https://github.com/ben-bacs/mealie",
      featured: true,
    },
    {
      id: "pcms-v2",
      title: "PCMS v2 Pediatric Clinic Management",
      category: "Healthcare Replatform & RLS/MFA",
      domain: "Security & Edge",
      badge: "CV Highlight",
      description: "Clinic-management replatform engineered with Next.js, TypeScript, and Supabase PostgreSQL featuring role-scoped clinical workflows, RLS/MFA, and synthetic test suites.",
      highlights: [
        "Database-enforced PostgreSQL Row-Level Security (RLS) and Multi-Factor Authentication (MFA) isolating clinical records",
        "Role-scoped workflows for pediatricians, staff, and guardians validated exclusively with privacy-safe synthetic data",
        "Automated security and workflow regression tests verifying zero cross-role data leakage"
      ],
      tags: ["Next.js", "TypeScript", "Supabase PostgreSQL", "RLS/MFA"],
      techStack: ["Next.js", "TypeScript", "Supabase PostgreSQL", "Row-Level Security (RLS)", "MFA", "Automated Testing"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs/Pediatric-Clinic-Management-System-PCMS-",
      githubUrl: "https://github.com/ben-bacs/Pediatric-Clinic-Management-System-PCMS-",
      featured: true,
    },
    {
      id: "ijwkms-next",
      title: "IJWKMS Next Academic Operations",
      category: "Modular Monolith & RBAC",
      domain: "Backend & Systems",
      badge: "CV Highlight",
      description: "Academic-system modernization built with Java/Spring Boot, PostgreSQL, and React featuring multi-role authorization, revocable sessions, and enrollment tests.",
      highlights: [
        "Modular monolith architecture in Java & Spring Boot with strict domain boundaries and Flyway migrations",
        "Server-revocable HttpOnly cookie sessions, BCrypt password hashing, and multi-role RBAC enforcement",
        "Transactional prerequisite validation, append-only audit trails, and automated enrollment test suites"
      ],
      tags: ["Java / Spring Boot", "PostgreSQL", "React", "RBAC"],
      techStack: ["Java 25", "Spring Boot 4", "PostgreSQL 17", "Flyway", "React 19", "TypeScript", "Docker Compose"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs/IJWKMS---Admin-Student-Management-System",
      githubUrl: "https://github.com/ben-bacs/IJWKMS---Admin-Student-Management-System",
      featured: true,
    },
    {
      id: "nessus-va",
      title: "External Vulnerability Assessment",
      category: "Team Lead • Nessus Security Audit",
      domain: "Security & Edge",
      badge: "Team Lead",
      description: "Led a team's Nessus-based vulnerability assessment for an external partner organization, covering non-intrusive scanning, CVSS triage, and remediation reporting.",
      highlights: [
        "Directed credentialed and non-credentialed Nessus vulnerability scanning across the partner organization's network perimeter",
        "Analyzed CVE findings, eliminated false positives, and prioritized remediation roadmaps by CVSS severity and exploitability",
        "Enforced strict evidence integrity, redaction, and confidentiality protocols to protect internal organizational assets"
      ],
      tags: ["Nessus", "Vulnerability Assessment", "CVSS Triage", "Network Security"],
      techStack: ["Tenable Nessus", "CVE / CVSS Analysis", "Network Reconnaissance", "Evidence Integrity", "Remediation Reporting"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "#contact",
      githubUrl: "https://github.com/ben-bacs",
      featured: true,
    },
    {
      id: "quiet-campus",
      title: "Quiet Campus Digital Forensics",
      category: "Digital Forensics & Incident Analysis",
      domain: "Security & Edge",
      badge: "Forensics Lead",
      description: "AI-assisted academic digital forensics investigation guiding team roles, evidence chain-of-custody, artifact extraction, and timeline reconstruction.",
      highlights: [
        "Coordinated forensic team roles and structured the end-to-end digital forensics assessment methodology",
        "Extracted and verified required disk, log, and memory case artifacts while preserving cryptographic hash integrity",
        "Synthesized technical forensic findings into an auditable incident timeline and evidentiary report"
      ],
      tags: ["Digital Forensics", "Evidence Integrity", "Linux CLI", "Incident Analysis"],
      techStack: ["Digital Forensics", "Artifact Extraction", "Chain of Custody", "Linux CLI", "Forensic Documentation"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "#contact",
      githubUrl: "https://github.com/ben-bacs",
      featured: true,
    },
    {
      id: "calcom-ssrf",
      title: "Cal.com SSRF Vulnerability Defense",
      category: "Open Source Security Research",
      domain: "Security & Edge",
      badge: "PR #30158",
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
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
    }
  ] as Project[],

  services: [
    {
      id: "backend-architecture",
      title: "Backend & API Engineering",
      icon: "Code2",
      description: "Engineering secure backend authorization, strict API contracts, modular monoliths (Java/Spring Boot, Python/FastAPI, Node.js, Go), and PostgreSQL schemas.",
      highlights: ["TypeScript, Next.js & Node.js", "Java 25 (Spring Boot 4) & Python", "PostgreSQL & SQLAlchemy / Prisma", "Automated Browser & PR Testing"],
    },
    {
      id: "linux-network-systems",
      title: "Network & Security Assessments",
      icon: "ShieldCheck",
      description: "Leading Nessus-based vulnerability assessments, upstream SSRF/tenant-isolation defense, digital forensics artifact extraction, and CCNA network architecture.",
      highlights: ["Nessus Vulnerability Assessments", "PostgreSQL RLS & Tenant Isolation", "Digital Forensics & Evidence Integrity", "CCNA 1–2 & Network Defense"],
    },
    {
      id: "fullstack-development",
      title: "Full-Stack & Mobile Systems",
      icon: "Layers",
      description: "Building cross-platform Flutter/Dart mobile apps and responsive React/Next.js web applications backed by regression test suites and clean state architecture.",
      highlights: ["React 19, Next.js & TypeScript", "Flutter & Dart Mobile Apps", "FastAPI & Firebase Integration", "End-to-End Regression Suites"],
    },
    {
      id: "edge-offline-systems",
      title: "Systems Servicing & Edge Infra",
      icon: "Cpu",
      description: "TESDA CSS NC II certified hardware/network servicing combined with Linux CLI administration, Cloudflare Workers/D1 edge storage, and native Rust/Tauri apps.",
      highlights: ["TESDA CSS NC II Certified", "Linux CLI & Git/GitHub Workflows", "Cloudflare Workers & Edge D1", "Rust / Tauri 2 & WebGL2 DSP"],
    },
  ] as Service[],

  skills: [
    { name: "Backend & APIs (TypeScript, Node.js, Python, Java/Spring Boot)", level: 95, category: "Development" },
    { name: "Database Engineering & RLS (PostgreSQL, Supabase, SQLAlchemy)", level: 93, category: "Data" },
    { name: "Network & Security (TCP/IP, Subnetting, Nessus, Forensics)", level: 92, category: "Security" },
    { name: "Frontend & Mobile (React, Next.js, Dart / Flutter, Tailwind)", level: 90, category: "Frontend" },
    { name: "Testing & Tooling (Automated Tests, Git/GitHub, Linux CLI)", level: 91, category: "Tooling" },
    { name: "Systems Servicing & Cisco Routing/Switching (CSS NC II, CCNA)", level: 89, category: "Infrastructure" },
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
    ctaHeading: "Have a project or internship opportunity?",
    ctaSubtext: "I'm open to IT internship / OJT roles, backend & full-stack engineering collaborations, and security assessment projects.",
    coreStack: [
      "TypeScript / Next.js / Node.js",
      "Python / FastAPI / SQLAlchemy",
      "Java 25 / Spring Boot 4",
      "Dart / Flutter & React 19",
      "PostgreSQL 17 / Supabase RLS",
      "Tenable Nessus & Forensics",
      "Rust / Tauri 2.2 / WebGL2",
      "Linux CLI, CCNA & CSS NC II",
    ],
  }
};

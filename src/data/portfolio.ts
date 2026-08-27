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
    title: "Full-Stack Developer | Network & Security Specialist",
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
      "IT Major in Network & Information Security. Full-stack developer specializing in scalable REST APIs, PERN/MERN/Laravel architectures, and Linux environments.",
    aboutHeading: {
      regular1: "I'm a ",
      highlight1: "security-minded developer",
      regular2: " who bridges code & infrastructure.",
    },
    aboutBio: [
      "With a strong foundation in Network and Information Security, I engineer resilient digital backbones. I specialize in crafting high-throughput RESTful services, bulletproof authentication mechanisms, and responsive web applications.",
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
      id: "car-dealership",
      title: "Alex Car Dealership",
      category: "Commercial Dynamic Platform",
      description: "Dynamic vehicle catalog with real-time filtering, admin inventory management engine, quotation generator, and responsive UI.",
      tags: ["Laravel / MERN", "MySQL", "Tailwind CSS", "REST API"],
      techStack: ["Laravel", "React", "MySQL", "Tailwind CSS", "Redux"],
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs",
      githubUrl: "https://github.com/ben-bacs",
      featured: true,
    },
    {
      id: "pediatric-clinic",
      title: "Pediatric Clinic Management",
      category: "Healthcare System & RBAC",
      description: "Secure medical records portal with role-based access control (RBAC), patient history tracking, and conflict-free appointment scheduling.",
      tags: ["PHP / Node.js", "PostgreSQL", "JWT Auth", "RBAC"],
      techStack: ["Node.js", "Express", "PostgreSQL", "React", "Docker"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs",
      githubUrl: "https://github.com/ben-bacs",
      featured: true,
    },
    {
      id: "attendance-tracker",
      title: "Organization Attendance Tracker",
      category: "Full-Stack Web App",
      description: "Automated session check-in platform with role authentication, QR validation, live activity feeds, and exportable audit logs.",
      tags: ["PERN Stack", "TypeScript", "Supabase", "Tailwind"],
      techStack: ["PostgreSQL", "Express", "React", "Node.js", "Supabase"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs",
      githubUrl: "https://github.com/ben-bacs",
      featured: true,
    },
    {
      id: "network-scanner",
      title: "Network Subnet Scanner & Monitor",
      category: "Security & Infrastructure",
      description: "Live subnet discovery tool performing ping sweeps, open port detection, host fingerprinting, and real-time device health telemetry.",
      tags: ["Python", "Linux Sockets", "React", "WebSockets"],
      techStack: ["Python", "AsyncIO", "Raw Sockets", "React", "Tailwind"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://github.com/ben-bacs",
      githubUrl: "https://github.com/ben-bacs",
      featured: true,
    },
  ] as Project[],

  services: [
    {
      id: "backend-architecture",
      title: "Backend Architecture & APIs",
      icon: "Code2",
      description: "Designing resilient RESTful microservices, JWT/OAuth auth lifecycles, and high-performance database schemas with caching layers.",
      highlights: ["REST & GraphQL APIs", "PostgreSQL & MongoDB", "Caching & Rate Limiting", "JWT / RBAC Security"],
    },
    {
      id: "fullstack-development",
      title: "Full-Stack Development",
      icon: "Layers",
      description: "Building reactive, accessible web applications and full-stack solutions using PERN, MERN, and modern Laravel stacks.",
      highlights: ["React / Next.js / TypeScript", "State Architecture", "Modern Tailwind CSS", "End-to-End Integration"],
    },
    {
      id: "linux-network-systems",
      title: "Linux & Network Systems",
      icon: "ShieldCheck",
      description: "Linux server administration, CCNA-grounded routing/switching logic, security hardening, and deep packet troubleshooting.",
      highlights: ["Ubuntu / Debian Server", "Nginx & Reverse Proxies", "Firewall & Hardening", "CCNA Routing Logic"],
    },
    {
      id: "ai-integration",
      title: "AI Integration & Calibration",
      icon: "Cpu",
      description: "Connecting state-of-the-art LLM APIs, multi-modal prompt engineering, structured JSON outputs, and automated data pipelines.",
      highlights: ["Gemini / OpenAI API", "Function Calling / Tools", "Structured Outputs", "RAG & Pipeline Automation"],
    },
  ] as Service[],

  skills: [
    { name: "Backend & REST APIs", level: 95, category: "Core" },
    { name: "Full-Stack (PERN / MERN / Laravel)", level: 90, category: "Core" },
    { name: "Linux CLI & Server Management", level: 88, category: "Infrastructure" },
    { name: "Relational & NoSQL Databases", level: 85, category: "Data" },
    { name: "AI API Integration & Calibration", level: 80, category: "AI & Tools" },
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
      quote: "The clinic management system Benedict architected streamlined our appointment workflows and record security. Clean code and reliable delivery.",
    },
    {
      id: "3",
      name: "Jaspher Ebarle",
      role: "Founder & CTO",
      company: "Veloce Auto Group",
      avatar: "./Jaspher Ebarle.jpg",
      quote: "The car dealership platform's performance exceeded our expectations. Filters load instantaneously and the inventory dashboard is effortless to manage.",
    },
  ] as Testimonial[],

  footer: {
    ctaHeading: "Have a project in mind?",
    ctaSubtext: "I'm always open to discussing new opportunities, backend architecture challenges, and full-stack partnerships.",
    coreStack: [
      "PERN Stack",
      "Laravel Framework",
      "Linux Administration",
      "PostgreSQL / MySQL",
      "Supabase & Docker",
      "CCNA Networking",
    ],
  }
};

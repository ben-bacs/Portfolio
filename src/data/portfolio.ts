interface Project {
  title: string;
  category: string;
  description: string;
  detail: string;
  stack: string;
  url: string;
  linkLabel?: string;
}

const featured = {
  title: 'RESONA',
  category: 'Desktop audio',
  description: 'A Windows visualizer that reacts to whatever is playing on your computer.',
  detail: 'Rust captures system audio through WASAPI loopback and splits it into 64 frequency bands. WebGL uses those bands to drive eight visual scenes.',
  stack: 'Rust / Tauri / WebGL2',
  url: 'https://github.com/ben-bacs/RESONA',
  releaseUrl: 'https://github.com/ben-bacs/RESONA/releases',
};

const work: Project[] = [
  {
    title: 'Cal.com',
    category: 'Open-source security',
    description: 'An SSRF defense for calendar feeds and avatar requests.',
    detail: 'The patch validates destinations at each redirect and tests that requests to loopback and private addresses are blocked.',
    stack: 'TypeScript / Node.js / Jest',
    url: 'https://github.com/calcom/cal.diy/pull/30158',
    linkLabel: 'Read the pull request',
  },
  {
    title: 'IJWKMS Next',
    category: 'Academic operations',
    description: 'A student operations system for enrollment and curriculum management.',
    detail: 'The backend separates academic workflows into modules and uses versioned curricula, role-based access, and audit logs.',
    stack: 'Java / Spring Boot / PostgreSQL',
    url: 'https://github.com/ben-bacs/IJWKMS---Admin-Student-Management-System',
  },
  {
    title: 'AutoRest',
    category: 'Offline-first web app',
    description: 'A private sleep tracker that works offline.',
    detail: 'Sleep charts and recovery estimates run in the browser. A Web Audio synthesizer generates background sounds on demand.',
    stack: 'React / TypeScript / Web Audio',
    url: 'https://github.com/ben-bacs/Sleep-Tracker',
  },
  {
    title: 'BSIT 4B Hub',
    category: 'Courseware',
    description: 'An interactive lecture portal for cyberforensics and information security.',
    detail: 'The site combines keyboard-navigable slide decks with terminal simulations and saved study progress.',
    stack: 'React / TypeScript / Vite',
    url: 'https://github.com/ben-bacs/bsit4b-nis-st',
  },
];

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Benedict Neil Bacud',
    profileImage: './profile-hero.jpg',
    email: 'benedictneilbacud@gmail.com',
    github: 'https://github.com/ben-bacs',
  },
  projects: [featured, ...work] as const,
};

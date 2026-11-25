export interface StackCategory {
  index: string;
  label: string;
  items: { name: string; tag: string }[];
}

export interface ExperienceEntry {
  id: string;
  mark: string;
  markTone: 'blue' | 'emerald' | 'amber' | 'violet' | 'zinc';
  title: string;
  role: string;
  badge: string;
  period: string;
  location: string;
  metrics?: string[];
  summary: string;
  bullets: string[];
  tags: string[];
  linkUrl?: string;
  linkLabel?: string;
}

export interface EducationEntry {
  id: string;
  mark: string;
  markTone: 'blue' | 'emerald' | 'amber' | 'zinc';
  institution: string;
  program: string;
  badge: string;
  period: string;
  location: string;
  details: string[];
  linkUrl?: string;
}

export interface MilestoneEntry {
  id: string;
  mark: string;
  markTone: 'blue' | 'emerald' | 'amber' | 'violet';
  title: string;
  subtitle: string;
  category: string;
  timeframe: string;
  status: 'MERGED' | 'ACTIVE' | 'CERTIFIED' | 'SHIPPED';
  note: string;
  href?: string;
}

export interface BlueprintProject {
  id: string;
  title: string;
  statusLabel: string;
  domain: 'Backend & Systems' | 'Security & Edge' | 'Apps & Tooling';
  summary: string;
  bullets: string[];
  stackIcons: string[];
  featureChips: string[];
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  preview: {
    header: string;
    tag: string;
    lines: { prefix?: string; text: string; tone?: 'add' | 'del' | 'accent' | 'ok' | 'muted' }[];
  };
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Benedict Neil D. Bacud',
    fullName: 'Benedict Neil Dacula Bacud',
    monogram: 'BNB',
    handle: '@ben-bacs',
    pronunciation: 'beh-neh-dikt neel bah-kood',
    taglines: [
      'Backend authorization, API contracts, and network security.',
      'BSIT (Network & Information Security) at WVSU Main Campus.',
      'Shipping tested code across TypeScript, Python, Java, and Rust.',
    ],
    avatar: './profile-hero.jpg',
    portrait: './profile-hero.jpg',
    logo: './logo-badge.png',
    email: 'benedictneildaculabacud@gmail.com',
    secondaryEmail: 'benedictneilbacud@gmail.com',
    phones: ['0945 201 3603', '0963 930 3496'],
    locationShort: 'Iloilo City, Philippines',
    locationSub: 'Koronadal City · Open to Remote',
    timezone: 'Asia/Manila',
    github: 'https://github.com/ben-bacs',
    cvUrl: './Benedict_Neil_Bacud_CV.pdf',
  },

  telemetry: [
    {
      label: 'Status',
      pill: 'Active',
      pillTone: 'emerald' as const,
      value: 'Open to OJT & Work',
      sub: 'CDRRMO Slot · Backend & InfoSec',
      dot: true,
    },
    {
      label: 'Building',
      pill: '2023 - Now',
      pillTone: 'neutral' as const,
      value: '3+ Years',
      sub: 'Backend, APIs & Network Defense',
    },
    {
      label: 'Location',
      pill: 'UTC+8',
      pillTone: 'neutral' as const,
      value: 'Iloilo City, PH',
      sub: 'Koronadal City · Remote Ready',
    },
    {
      label: 'Local Time',
      isClock: true,
      value: 'PHT',
      sub: 'Philippine Standard Time',
    },
    {
      label: 'Focus',
      value: 'Backend & Security',
      sub: 'TS, Python, Java, Rust & Nessus',
    },
    {
      label: 'Education',
      value: 'BS Information Tech',
      sub: 'WVSU Main · Net & InfoSec',
    },
  ],

  aboutBullets: [
    {
      id: 'intro',
      lead: "I'm Benedict Neil D. Bacud",
      body: ', a fourth-year BS Information Technology student majoring in Network and Information Security at West Visayas State University (Main Campus) and a contract Backend Assistant for A.L.E.X. Car Dealership.',
      links: [],
    },
    {
      id: 'code',
      lead: 'Recent engineering work includes upstream open-source fixes in ',
      body: ' (household recipe filter isolation in Python/SQLAlchemy) and Cal.com PR #30158 (SSRF redirect validation), alongside our Flutter + FastAPI thesis platform Voice Voyage, PCMS v2, and IJWKMS Next.',
      links: [
        { label: 'Mealie PR #8984', href: 'https://github.com/mealie-recipes/mealie/pull/8984' },
        { label: 'Cal.com PR #30158', href: 'https://github.com/calcom/cal.diy/pull/30158' },
      ],
    },
    {
      id: 'sec',
      lead: 'On the infrastructure and security side',
      body: ', I led an external organization vulnerability assessment with Tenable Nessus and the Quiet Campus digital forensics case, and hold TESDA Computer Systems Servicing NC II plus four Cisco Networking Academy credentials (CCNA 1-2, Network Defense, Cybersecurity).',
      links: [],
    },
  ],

  stack: [
    {
      index: '01',
      label: 'Languages',
      items: [
        { name: 'TypeScript', tag: 'TS' },
        { name: 'Python', tag: 'PY' },
        { name: 'Java 25', tag: 'JV' },
        { name: 'Rust', tag: 'RS' },
        { name: 'Dart', tag: 'DT' },
        { name: 'SQL', tag: 'DB' },
        { name: 'JavaScript', tag: 'JS' },
      ],
    },
    {
      index: '02',
      label: 'Backend & Data',
      items: [
        { name: 'Node.js', tag: 'ND' },
        { name: 'FastAPI', tag: 'FA' },
        { name: 'Spring Boot 4', tag: 'SB' },
        { name: 'PostgreSQL', tag: 'PG' },
        { name: 'SQLAlchemy', tag: 'SA' },
        { name: 'Supabase RLS', tag: 'RL' },
        { name: 'Cloudflare D1', tag: 'CF' },
      ],
    },
    {
      index: '03',
      label: 'Frontend & Client',
      items: [
        { name: 'React 19', tag: 'RC' },
        { name: 'Next.js', tag: 'NX' },
        { name: 'Flutter', tag: 'FL' },
        { name: 'Tailwind CSS', tag: 'TW' },
        { name: 'Tauri 2.2', tag: 'TR' },
        { name: 'WebGL2', tag: 'GL' },
        { name: 'Vite', tag: 'VT' },
      ],
    },
    {
      index: '04',
      label: 'Security & Ops',
      items: [
        { name: 'Tenable Nessus', tag: 'NS' },
        { name: 'CCNA R&S', tag: 'CC' },
        { name: 'Digital Forensics', tag: 'DF' },
        { name: 'Linux CLI', tag: 'LX' },
        { name: 'Pytest & Jest', tag: 'QA' },
        { name: 'Docker', tag: 'DK' },
        { name: 'Git / GitHub CI', tag: 'GH' },
      ],
    },
  ] as StackCategory[],

  experiences: [
    {
      id: 'alex-dealership',
      mark: 'AX',
      markTone: 'blue',
      title: 'A.L.E.X. Car Dealership',
      role: 'Backend Assistant',
      badge: 'Contract Project',
      period: 'Sep 2026 - Present',
      location: 'Remote',
      metrics: ['Role-Scoped Auth', 'PostgreSQL Verification', 'Browser PR Tests'],
      summary:
        'Contract backend engineering covering authorization rules, typed API contracts, PostgreSQL database verification, and automated browser test suites.',
      bullets: [
        'Built role-scoped authorization guards and strict request/response validation across dealership inventory and transaction endpoints.',
        'Recorded PostgreSQL schema migration checks and relational query verification evidence for pull request reviews.',
        'Wrote end-to-end browser and API regression tests gated in Git pull requests.',
      ],
      tags: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Browser Testing', 'Git PRs'],
    },
    {
      id: 'mealie-oss',
      mark: 'ML',
      markTone: 'emerald',
      title: 'Mealie (mealie-recipes/mealie)',
      role: 'Open-Source Contributor',
      badge: 'Merged PR #8984',
      period: '2026',
      location: 'GitHub Upstream',
      metrics: ['Merged Upstream', 'SQLAlchemy Query Fix', 'Pytest Tenant Suite'],
      summary:
        'Fixed a multi-tenant household recipe filtering bug in Mealie (self-hosted recipe manager) and added regression coverage.',
      bullets: [
        'Traced a cross-household filtering bug in the Python and SQLAlchemy repository query builder when combining category and search filters.',
        'Scoped filter predicates to the caller household ID so recipes from other households in the same group do not leak into filtered results.',
        'Added combined-filter and household-isolation regression tests to the upstream pytest suite (PR #8984).',
      ],
      tags: ['Python', 'SQLAlchemy', 'FastAPI', 'Pytest', 'Multi-Tenant Auth'],
      linkUrl: 'https://github.com/mealie-recipes/mealie/pull/8984',
      linkLabel: 'View PR #8984',
    },
    {
      id: 'calcom-oss',
      mark: 'CL',
      markTone: 'violet',
      title: 'Cal.com (calcom/cal.diy)',
      role: 'Security Contributor',
      badge: 'AppSec PR #30158',
      period: '2026',
      location: 'GitHub Upstream',
      metrics: ['SSRF Mitigation', 'Redirect Hop Guard', 'Jest Private-IP Tests'],
      summary:
        'Implemented Server-Side Request Forgery (SSRF) protection for external ICS calendar feeds and AvatarAPI prefill fetches.',
      bullets: [
        'Added fetchWithSSRFProtection() in packages/lib/ssrfProtection.ts to block loopback, link-local, and RFC1918 private IP ranges.',
        'Re-validated target hostnames and resolved IPs on every HTTP redirect hop with an explicit redirect cap.',
        'Isolated multi-feed calendar sync errors with Promise.allSettled() and covered private IP bypass vectors in Jest.',
      ],
      tags: ['TypeScript', 'Node.js', 'SSRF Defense', 'Network Security', 'Jest'],
      linkUrl: 'https://github.com/calcom/cal.diy/pull/30158',
      linkLabel: 'View PR #30158',
    },
    {
      id: 'external-va',
      mark: 'VA',
      markTone: 'amber',
      title: 'External Partner Vulnerability Assessment',
      role: 'Assessment Team Lead',
      badge: 'Security Audit',
      period: '2026',
      location: 'Iloilo City',
      metrics: ['Tenable Nessus', 'CVSS v3 Triage', 'Redacted Evidence'],
      summary:
        'Led a student security team conducting a non-intrusive Nessus vulnerability assessment and remediation briefing for an external partner organization.',
      bullets: [
        'Scoped and executed Nessus scans across exposed services while respecting operational uptime windows.',
        'Verified CVE findings manually to filter false positives and ranked fixes by CVSS severity and practical exploitability.',
        'Delivered a redacted remediation report with configuration hardening steps and strict evidence handling.',
      ],
      tags: ['Tenable Nessus', 'CVE / CVSS', 'Vulnerability Triage', 'Remediation Reporting'],
    },
  ] as ExperienceEntry[],

  leadership: [
    {
      id: 'wvsu-cyberobotics',
      mark: 'CR',
      markTone: 'blue',
      title: 'WVSU Cyberobotics',
      role: 'Technical Member & Prospective Auditor',
      badge: 'Campus Organization',
      period: '2025 - Present',
      location: 'WVSU Main Campus',
      summary:
        'Contributes to student software engineering workshops, academic system modernization prototypes, and technical audit documentation.',
      bullets: [
        'Built multi-role authorization and revocable session modules for academic operations prototypes.',
        'Assisted with technical governance, code reviews, and equipment/project auditing.',
      ],
      tags: ['System Modernization', 'RBAC', 'Code Review', 'Technical Governance'],
    },
    {
      id: 'af-rotc',
      mark: 'AF',
      markTone: 'zinc',
      title: 'Air Force ROTC - WVSU Unit',
      role: 'Wing 7 Officer',
      badge: 'Cadet Officer',
      period: '2024 - Present',
      location: 'WVSU Main Campus',
      summary:
        'Handles technical editing, cadet roster database records, and administrative muster tracking for the unit.',
      bullets: [
        'Maintained structured cadet attendance and administrative records across training semesters.',
        'Supported unit operations and intelligence briefings with technical documentation and digital muster sheets.',
      ],
      tags: ['Database Administration', 'Technical Editing', 'Operations Support'],
    },
  ] as ExperienceEntry[],

  education: [
    {
      id: 'wvsu-bsit',
      mark: 'WV',
      markTone: 'blue',
      institution: 'West Visayas State University - Main Campus',
      program: 'BS Information Technology (Network & Information Security)',
      badge: '4th Year Undergraduate',
      period: 'Aug 2023 - Jun 2027',
      location: 'La Paz, Iloilo City',
      details: [
        'Fourth-year BSIT student completing a 486-hour On-the-Job Training placement (accepted slot at CDRRMO).',
        'Co-developer of Voice Voyage (undergraduate thesis) built with Flutter, Dart, Python/FastAPI, and Firebase.',
        'Team lead for the External Partner Nessus Vulnerability Assessment and the Quiet Campus digital forensics investigation.',
      ],
    },
  ] as EducationEntry[],

  certifications: [
    {
      id: 'tesda-css',
      mark: 'NC',
      markTone: 'emerald',
      institution: 'TESDA (Technical Education and Skills Development Authority)',
      program: 'Computer Systems Servicing NC II',
      badge: 'National Certificate',
      period: 'May 2026',
      location: 'Philippines',
      details: [
        'National qualification covering PC/server assembly, OS installation, structured cabling, Windows/Linux network configuration, and hardware diagnostics.',
      ],
      linkUrl: './Benedict_Neil_Bacud_CV.pdf',
    },
    {
      id: 'cisco-netdef',
      mark: 'ND',
      markTone: 'blue',
      institution: 'Cisco Networking Academy',
      program: 'Network Defense',
      badge: 'Cisco Verified',
      period: 'Apr 29, 2026',
      location: 'Cisco NetAcad',
      details: [
        'Covers perimeter defense, ACLs, firewall policies, AAA access control, intrusion prevention, and system hardening.',
      ],
      linkUrl: './Benedict_Neil_Bacud_CV.pdf',
    },
    {
      id: 'cisco-srwe',
      mark: 'C2',
      markTone: 'blue',
      institution: 'Cisco Networking Academy',
      program: 'CCNA: Switching, Routing, and Wireless Essentials',
      badge: 'Cisco Verified',
      period: 'Jan 14, 2026',
      location: 'Cisco NetAcad',
      details: [
        'Covers VLANs, inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, FHRP, switch port security, and WLAN configuration.',
      ],
      linkUrl: './Benedict_Neil_Bacud_CV.pdf',
    },
    {
      id: 'cisco-cyber',
      mark: 'CB',
      markTone: 'amber',
      institution: 'Cisco Networking Academy',
      program: 'Introduction to Cybersecurity',
      badge: 'Cisco Verified',
      period: '2026',
      location: 'Cisco NetAcad',
      details: [
        'Foundational threat modeling, attack surface identification, network defense principles, and incident response workflows.',
      ],
      linkUrl: './Benedict_Neil_Bacud_CV.pdf',
    },
    {
      id: 'cisco-itn',
      mark: 'C1',
      markTone: 'blue',
      institution: 'Cisco Networking Academy',
      program: 'CCNA: Introduction to Networks',
      badge: 'Cisco Verified',
      period: 'May 20, 2025',
      location: 'Cisco NetAcad',
      details: [
        'Covers OSI and TCP/IP models, IPv4 subnetting, IPv6 addressing, Ethernet switching, and Cisco IOS CLI configuration.',
      ],
      linkUrl: './Benedict_Neil_Bacud_CV.pdf',
    },
  ] as EducationEntry[],

  milestones: [
    {
      id: 'ms-cdrrmo',
      mark: 'CD',
      markTone: 'emerald',
      title: 'CDRRMO OJT Placement',
      subtitle: '486-Hour BSIT Internship Slot',
      category: 'Field Internship',
      timeframe: '2026 - 2027',
      status: 'ACTIVE',
      note: 'Secured internship placement at the City Disaster Risk Reduction and Management Office.',
    },
    {
      id: 'ms-alex',
      mark: 'AX',
      markTone: 'blue',
      title: 'A.L.E.X. Dealership Backend',
      subtitle: 'Auth Guards, API Contracts & Browser Tests',
      category: 'Contract Engineering',
      timeframe: 'Sep 2026 - Present',
      status: 'ACTIVE',
      note: 'Ongoing backend authorization, PostgreSQL integration evidence, and PR test verification.',
    },
    {
      id: 'ms-mealie',
      mark: 'ML',
      markTone: 'emerald',
      title: 'Mealie Upstream PR #8984',
      subtitle: 'SQLAlchemy Multi-Tenant Filter Fix',
      category: 'Open Source',
      timeframe: '2026',
      status: 'MERGED',
      note: 'Merged into mealie-recipes/mealie with combined-filter pytest regression tests.',
      href: 'https://github.com/mealie-recipes/mealie/pull/8984',
    },
    {
      id: 'ms-tesda',
      mark: 'NC',
      markTone: 'amber',
      title: 'TESDA CSS NC II & Cisco Track',
      subtitle: 'National Certificate + 4 Cisco Completions',
      category: 'Credentials',
      timeframe: '2025 - 2026',
      status: 'CERTIFIED',
      note: 'Completed Computer Systems Servicing NC II, CCNA 1, CCNA 2, Network Defense, and Intro to Cybersecurity.',
    },
  ] as MilestoneEntry[],

  projects: [
    {
      id: 'alex-dealership-proj',
      title: 'A.L.E.X. | Car Dealership Backend',
      statusLabel: 'Contract Backend Work',
      domain: 'Backend & Systems',
      summary:
        'Role-scoped backend authorization, typed API contracts, PostgreSQL verification evidence, and browser regression tests for a car dealership platform.',
      bullets: [
        'Enforced role guards and schema validation on inventory, inquiry, and transaction routes.',
        'Captured PostgreSQL integration query evidence and migration checks per pull request.',
        'Added automated browser and API regression tests to prevent contract drift.',
      ],
      stackIcons: ['TS', 'NX', 'ND', 'PG'],
      featureChips: ['Role-Scoped Auth', 'API Contracts', 'PostgreSQL', 'Browser PR Suite'],
      repoUrl: 'https://github.com/ben-bacs',
      preview: {
        header: 'src/server/auth/requireRole.ts',
        tag: 'CONTRACT · PR VERIFIED',
        lines: [
          { prefix: '01', text: 'export async function assertDealershipScope(ctx, role) {', tone: 'muted' },
          { prefix: '+', text: '  if (!ctx.session || ! hasRole(ctx.user, role)) throw 403;', tone: 'add' },
          { prefix: '+', text: '  await verifyTenantDealerRow(db, ctx.user.dealerId);', tone: 'add' },
          { prefix: '✓', text: 'postgres integration + playwright auth suite: 18 passed', tone: 'ok' },
        ],
      },
    },
    {
      id: 'mealie-pr8984',
      title: 'Mealie | Household Filter Isolation',
      statusLabel: 'Merged Upstream PR #8984',
      domain: 'Backend & Systems',
      summary:
        'Upstream bug fix in mealie-recipes/mealie preventing cross-household recipe leakage when filtering by categories or tags inside shared groups.',
      bullets: [
        'Fixed SQLAlchemy query predicates so household-scoped filters bind strictly to the active household.',
        'Added pytest integration cases covering multi-household groups and combined query filters.',
        'Reviewed and merged into the official Mealie repository under PR #8984.',
      ],
      stackIcons: ['PY', 'FA', 'SA', 'QA'],
      featureChips: ['Merged PR #8984', 'SQLAlchemy', 'Tenant Isolation', 'Pytest'],
      liveUrl: 'https://github.com/mealie-recipes/mealie/pull/8984',
      liveLabel: 'PR #8984',
      repoUrl: 'https://github.com/ben-bacs/mealie',
      preview: {
        header: 'mealie/repos/recipe_query.py · #8984',
        tag: 'MERGED UPSTREAM',
        lines: [
          { prefix: '-', text: 'stmt = stmt.where(RecipeModel.group_id == group_id)', tone: 'del' },
          { prefix: '+', text: 'stmt = stmt.where(RecipeModel.household_id == hh_id)', tone: 'add' },
          { prefix: '+', text: 'test_household_recipe_filter_isolation() -> PASSED', tone: 'ok' },
          { prefix: '#', text: 'mealie-recipes/mealie pull/8984 merged', tone: 'accent' },
        ],
      },
    },
    {
      id: 'voice-voyage',
      title: 'Voice Voyage | Thesis Platform',
      statusLabel: 'Undergraduate Thesis',
      domain: 'Apps & Tooling',
      summary:
        'Mobile learning and speech progression platform built with Flutter, Dart, Python/FastAPI, and Firebase, backed by client-state regression tests.',
      bullets: [
        'Implemented structured learner progression flows and FastAPI + Firebase service integration.',
        'Fixed asynchronous widget lifecycle and state synchronization bugs in Flutter.',
        'Added unit and widget regression tests around progression gating and API serialization.',
      ],
      stackIcons: ['FL', 'DT', 'PY', 'FA'],
      featureChips: ['Flutter & Dart', 'Python / FastAPI', 'Firebase', 'Regression Suite'],
      repoUrl: 'https://github.com/ben-bacs',
      preview: {
        header: 'voice_voyage/progression_service.dart',
        tag: 'THESIS · FLUTTER + FASTAPI',
        lines: [
          { prefix: '→', text: 'POST /api/v1/sessions/evaluate -> 200 OK (FastAPI)', tone: 'accent' },
          { prefix: '+', text: 'syncStageCheckpoint(uid, lessonId, scoreDelta);', tone: 'add' },
          { prefix: '✓', text: 'flutter test test/progression_cubit_test.dart: PASS', tone: 'ok' },
          { prefix: 'i', text: 'Firebase Auth + Firestore state synced', tone: 'muted' },
        ],
      },
    },
    {
      id: 'pcms-v2',
      title: 'PCMS v2 | Pediatric Clinic System',
      statusLabel: 'Healthcare Replatform',
      domain: 'Security & Edge',
      summary:
        'Clinic management replatform using Next.js, TypeScript, and Supabase PostgreSQL with database-level Row-Level Security (RLS) and MFA.',
      bullets: [
        'Wrote PostgreSQL RLS policies and MFA checks separating pediatrician, staff, and guardian views.',
        'Validated clinical scheduling and patient chart flows strictly against synthetic test datasets.',
        'Verified zero cross-role record access with automated integration tests.',
      ],
      stackIcons: ['NX', 'TS', 'PG', 'RL'],
      featureChips: ['PostgreSQL RLS', 'Multi-Factor Auth', 'Synthetic Data', 'Role Workflows'],
      liveUrl: 'https://github.com/ben-bacs/Pediatric-Clinic-Management-System-PCMS-',
      liveLabel: 'Repository',
      repoUrl: 'https://github.com/ben-bacs/Pediatric-Clinic-Management-System-PCMS-',
      preview: {
        header: 'supabase/migrations/004_clinical_rls.sql',
        tag: 'RLS + MFA ENFORCED',
        lines: [
          { prefix: 'SQL', text: 'ALTER TABLE patient_records ENABLE ROW LEVEL SECURITY;', tone: 'accent' },
          { prefix: '+', text: "USING (auth.jwt()->>'aal' = 'aal2' AND has_clinic_role())", tone: 'add' },
          { prefix: '✓', text: 'guardian cross-patient read attempt -> 0 rows', tone: 'ok' },
          { prefix: 'i', text: 'dataset: 100% synthetic clinical fixtures', tone: 'muted' },
        ],
      },
    },
    {
      id: 'ijwkms-next',
      title: 'IJWKMS Next | Academic Operations',
      statusLabel: 'Modular Monolith',
      domain: 'Backend & Systems',
      summary:
        'Academic enrollment and operations backend built as a Java 25 and Spring Boot 4 modular monolith with PostgreSQL 17, Flyway, and React 19.',
      bullets: [
        'Structured clear module boundaries with Flyway schema migrations and append-only audit logs.',
        'Implemented server-revocable HttpOnly cookie sessions, BCrypt hashing, and multi-role RBAC.',
        'Covered prerequisite checks and concurrent section capacity rules with automated enrollment tests.',
      ],
      stackIcons: ['JV', 'SB', 'PG', 'RC'],
      featureChips: ['Java 25 / Spring Boot 4', 'Revocable Sessions', 'Flyway SQL', 'Audit Log'],
      liveUrl: 'https://github.com/ben-bacs/IJWKMS---Admin-Student-Management-System',
      liveLabel: 'Repository',
      repoUrl: 'https://github.com/ben-bacs/IJWKMS---Admin-Student-Management-System',
      preview: {
        header: 'EnrollmentCommandService.java',
        tag: 'SPRING BOOT 4 · PG 17',
        lines: [
          { prefix: '@', text: '@Transactional(isolation = Isolation.READ_COMMITTED)', tone: 'accent' },
          { prefix: '+', text: 'prereqPolicy.assertSatisfied(studentId, subjectCode);', tone: 'add' },
          { prefix: '+', text: 'auditLedger.append("ENROLL_COMMIT", actorId, sectionId);', tone: 'add' },
          { prefix: '✓', text: './mvnw verify -> EnrollmentConcurrencyIT PASSED', tone: 'ok' },
        ],
      },
    },
    {
      id: 'calcom-ssrf',
      title: 'Cal.com | SSRF Redirect Defense',
      statusLabel: 'Open-Source Security PR #30158',
      domain: 'Security & Edge',
      summary:
        'Upstream security patch in Cal.com blocking Server-Side Request Forgery across HTTP redirect chains in ICS calendar imports and AvatarAPI flows.',
      bullets: [
        'Built fetchWithSSRFProtection() to inspect resolved IPs against private, loopback, and metadata CIDR blocks.',
        'Enforced per-hop validation on manual 3xx redirects and capped redirect depth.',
        'Added Jest unit tests for IPv4/IPv6 loopback, 169.254.169.254, and multi-feed Promise.allSettled isolation.',
      ],
      stackIcons: ['TS', 'ND', 'NX', 'QA'],
      featureChips: ['PR #30158', 'SSRF Guard', 'CIDR Validation', 'Jest Suite'],
      liveUrl: 'https://github.com/calcom/cal.diy/pull/30158',
      liveLabel: 'PR #30158',
      repoUrl: 'https://github.com/calcom/cal.diy/pull/30158',
      preview: {
        header: 'packages/lib/ssrfProtection.ts · #30158',
        tag: 'APPSEC · SSRF GUARD',
        lines: [
          { prefix: '+', text: 'const res = await fetch(url, { redirect: "manual" });', tone: 'add' },
          { prefix: '+', text: 'if (isPrivateOrLoopbackIP(resolvedIp)) throw SSRFError;', tone: 'add' },
          { prefix: '✓', text: 'blocks 127.0.0.1, ::1, 169.254.169.254 on hop 2', tone: 'ok' },
          { prefix: '#', text: 'calcom/cal.diy pull/30158', tone: 'accent' },
        ],
      },
    },
    {
      id: 'nessus-va',
      title: 'Nessus | External Vulnerability Audit',
      statusLabel: 'Assessment Team Lead',
      domain: 'Security & Edge',
      summary:
        'Team-led Tenable Nessus vulnerability assessment for an external partner organization, covering network scanning, CVSS triage, and remediation documentation.',
      bullets: [
        'Planned scan windows and host scope with partner stakeholders to avoid service disruption.',
        'Correlated Nessus plugin outputs with service banners to separate real exposures from backported patches.',
        'Produced an actionable remediation matrix while redacting internal IPs and hostnames.',
      ],
      stackIcons: ['NS', 'LX', 'CC', 'DF'],
      featureChips: ['Tenable Nessus', 'CVSS v3 Triage', 'False-Positive Filter', 'Hardening Guide'],
      preview: {
        header: 'va-report/cvss-triage-summary.log',
        tag: 'TEAM LEAD · REDACTED',
        lines: [
          { prefix: 'SCAN', text: 'nessus policy: non-intrusive service enumeration', tone: 'accent' },
          { prefix: '!', text: 'triaged critical/high findings -> verified patch state', tone: 'add' },
          { prefix: '✓', text: 'evidence hashes logged · partner identifiers redacted', tone: 'ok' },
          { prefix: 'i', text: 'delivered prioritized remediation runbook', tone: 'muted' },
        ],
      },
    },
    {
      id: 'quiet-campus',
      title: 'Quiet Campus | Digital Forensics',
      statusLabel: 'Forensics Case Lead',
      domain: 'Security & Edge',
      summary:
        'Academic digital forensics investigation leading team role assignment, artifact acquisition, hash verification, and incident timeline reconstruction.',
      bullets: [
        'Assigned acquisition, log analysis, and reporting duties across the forensics team.',
        'Extracted disk and system log artifacts on Linux while verifying SHA-256 chain-of-custody hashes.',
        'Compiled timestamped evidentiary findings into a structured incident timeline.',
      ],
      stackIcons: ['DF', 'LX', 'PY', 'QA'],
      featureChips: ['SHA-256 Integrity', 'Artifact Triage', 'Timeline Reconstruction', 'Linux CLI'],
      preview: {
        header: 'forensics/chain_of_custody.sha256',
        tag: 'CASE LEAD · FORENSICS',
        lines: [
          { prefix: '$', text: 'sha256sum -c evidence_manifest.sha256', tone: 'accent' },
          { prefix: '✓', text: 'disk_image.dd: OK (hash verified pre/post triage)', tone: 'ok' },
          { prefix: '+', text: 'correlated auth.log + filesystem MACB timestamps', tone: 'add' },
          { prefix: 'i', text: 'reconstructed full incident timeline report', tone: 'muted' },
        ],
      },
    },
    {
      id: 'resona-dsp',
      title: 'RESONA | Rust WASAPI Visualizer',
      statusLabel: 'Native Desktop App',
      domain: 'Backend & Systems',
      summary:
        'Windows 11 desktop audio visualizer written in Rust (Tauri 2.2) with WASAPI loopback capture, 64-band logarithmic FFT, and 8 WebGL2 shader scenes.',
      bullets: [
        'Captured desktop audio in Rust via Windows WASAPI loopback with Hann windowing and 64-band FFT.',
        'Built 8 GPU-accelerated WebGL2 shader presets decoupled from React state with 60/30 FPS throttling.',
        'Added atomic config writes (.tmp sync-replace, .bak rollback) and GitHub Actions MSI/NSIS builds.',
      ],
      stackIcons: ['RS', 'TR', 'GL', 'TS'],
      featureChips: ['Rust WASAPI', '64-Band FFT DSP', 'WebGL2 Shaders', 'MSI / NSIS CI'],
      liveUrl: 'https://github.com/ben-bacs/RESONA/releases',
      liveLabel: 'Releases',
      repoUrl: 'https://github.com/ben-bacs/RESONA',
      preview: {
        header: 'src-tauri/src/audio/fft_processor.rs',
        tag: 'RUST + TAURI 2.2 + WEBGL2',
        lines: [
          { prefix: 'fn', text: 'process_wasapi_frame(&mut self, pcm: &[f32]) -> [f32; 64]', tone: 'accent' },
          { prefix: '+', text: 'apply_hann_window(&mut self.buf); self.fft.process();', tone: 'add' },
          { prefix: '✓', text: 'atomic_config::write_sync_replace(".tmp" -> ".json")', tone: 'ok' },
          { prefix: '60fps', text: '8 decoupled WebGL2 fragment shader pipelines', tone: 'muted' },
        ],
      },
    },
    {
      id: 'bensoy-edge',
      title: 'BENSOY | Edge Spotify Analytics',
      statusLabel: 'Cloudflare Workers + D1',
      domain: 'Security & Edge',
      summary:
        'Self-hosted Spotify listening tracker on Cloudflare Workers and D1 SQLite using AES-256-GCM encrypted OAuth tokens and 30-minute cron ingestion.',
      bullets: [
        'Encrypted refresh tokens at rest with AES-256-GCM before writing to Cloudflare D1 edge SQLite.',
        'Scheduled idempotent */30 * * * * cron workers to deduplicate playback history.',
        'Rendered 24-hour listening distribution charts with Next.js and Drizzle ORM.',
      ],
      stackIcons: ['CF', 'NX', 'TS', 'DB'],
      featureChips: ['Cloudflare Workers', 'D1 Edge SQLite', 'AES-256-GCM', 'Cron Ingestion'],
      liveUrl: 'https://github.com/ben-bacs/BENSOY',
      liveLabel: 'Repository',
      repoUrl: 'https://github.com/ben-bacs/BENSOY',
      preview: {
        header: 'workers/cron-ingest.ts',
        tag: 'CLOUDFLARE D1 · AES-256-GCM',
        lines: [
          { prefix: 'CRON', text: 'schedule("*/30 * * * *") -> syncRecentlyPlayed()', tone: 'accent' },
          { prefix: '+', text: 'const token = await decryptAesGcm(env.KEY, row.cipher);', tone: 'add' },
          { prefix: '✓', text: 'ON CONFLICT (played_at, track_id) DO NOTHING', tone: 'ok' },
          { prefix: '0ms', text: 'zero third-party analytics or client telemetry', tone: 'muted' },
        ],
      },
    },
    {
      id: 'autorest-pwa',
      title: 'AutoRest | Offline Sleep PWA',
      statusLabel: 'Live on GitHub Pages',
      domain: 'Apps & Tooling',
      summary:
        'Client-only Progressive Web App for tracking sleep debt, stage hypnograms, and Web Audio API procedural noise without server storage.',
      bullets: [
        'Stored all sleep logs locally in the browser with offline service-worker caching.',
        'Synthesized real-time brown, pink, and rain noise directly via Web Audio API nodes.',
        'Built responsive hypnogram and recovery charts in React 19 and TypeScript.',
      ],
      stackIcons: ['RC', 'TS', 'TW', 'VT'],
      featureChips: ['100% Offline PWA', 'Web Audio DSP', 'Hypnogram Charts', 'Zero Telemetry'],
      liveUrl: 'https://ben-bacs.github.io/Sleep-Tracker/',
      liveLabel: 'Live App',
      repoUrl: 'https://github.com/ben-bacs/Sleep-Tracker',
      preview: {
        header: 'src/audio/noiseGenerator.ts',
        tag: 'LIVE PWA · WEB AUDIO',
        lines: [
          { prefix: 'DSP', text: 'AudioContext -> BiquadFilterNode (lowpass 420Hz)', tone: 'accent' },
          { prefix: '+', text: 'computeRollingSleepDebt(entries, 14) -> -1.4h', tone: 'add' },
          { prefix: '✓', text: 'serviceWorker: offline cache ready · 0 network calls', tone: 'ok' },
          { prefix: '↗', text: 'ben-bacs.github.io/Sleep-Tracker', tone: 'muted' },
        ],
      },
    },
    {
      id: 'bsit4b-hub',
      title: 'BSIT 4B | Cyberforensics Courseware',
      statusLabel: 'Live Lecture Portal',
      domain: 'Apps & Tooling',
      summary:
        'Interactive 479-slide study portal for CIT 245 (Cyberforensics) and CIT 220 (Information Assurance & Security 2) with keyboard deck controls.',
      bullets: [
        'Indexed 479 lecture slides across Cyberforensics and Information Assurance modules.',
        'Included terminal command breakdowns, topic search, and LocalStorage reading progress.',
        'Deployed static Vite bundle to GitHub Pages for fast mobile and laptop review.',
      ],
      stackIcons: ['RC', 'TS', 'VT', 'DF'],
      featureChips: ['479 Lecture Slides', 'CIT 245 & CIT 220', 'Keyboard Deck', 'LocalStorage'],
      liveUrl: 'https://ben-bacs.github.io/bsit4b-nis-st/',
      liveLabel: 'Live Portal',
      repoUrl: 'https://github.com/ben-bacs/bsit4b-nis-st',
      preview: {
        header: 'decks/cit245-cyberforensics.ts',
        tag: '479 SLIDES · LIVE',
        lines: [
          { prefix: 'DECK', text: 'CIT 245 Cyberforensics + CIT 220 Info Assurance 2', tone: 'accent' },
          { prefix: '+', text: '479 indexed slides · keyboard [<-] [->] navigation', tone: 'add' },
          { prefix: '✓', text: 'saved progress synced to window.localStorage', tone: 'ok' },
          { prefix: '↗', text: 'ben-bacs.github.io/bsit4b-nis-st', tone: 'muted' },
        ],
      },
    },
  ] as BlueprintProject[],

  colophon: {
    craftedBy: '@ben-bacs',
    build: 'v3.0.0',
    date: '2026-11-26',
    aesthetic: 'Technical Blueprint',
    deployedOn: 'GitHub Pages',
    sourceRepo: 'https://github.com/ben-bacs/Portfolio',
    license: 'MIT License',
    credentials: ['TESDA CSS NC II', 'Cisco CCNA 1-2', 'Cisco Network Defense'],
    stackList: [
      'react@18.3.1',
      'typescript@5.6.2',
      'vite@6.4.3',
      'framer-motion@11.15',
      'tailwindcss@3.4.17',
    ],
  },
};

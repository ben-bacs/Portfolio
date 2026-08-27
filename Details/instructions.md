You are an expert Senior Full-Stack Engineer and UI/UX Designer. Build a modern, pixel-perfect, responsive dark-mode portfolio website based on the provided UI design system and specifications below.

### 1. TECH STACK & LIBRARIES
- **Framework:** Next.js 14+ (App Router) or React with Vite (TypeScript)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React (`lucide-react`) & Simple Icons for tech/social logos
- **Animations:** Framer Motion (smooth scroll reveals, hover lifts, glow transitions)
- **Typography:** Sans-Serif (`Plus Jakarta Sans` or `Inter`) paired with an elegant Serif italic accent (`Instrument Serif` or `Playfair Display`)

---

### 2. DESIGN TOKENS & COLOR PALETTE
- **Background Main:** Deep luxury black `#0B0B0C` / `#0D0D0E`
- **Surface / Card Backgrounds:** `#161618` with subtle border `#27272A`
- **Primary Accent / Gold:** Warm sand/champagne `#E5C396` (Hover: `#D4A373`)
- **Text Main:** `#FFFFFF` (Heading), `#A1A1AA` (Subtext/Body), `#71717A` (Muted captions)
- **Accents:** Radial glow spotlight (`radial-gradient(circle, rgba(229,195,150,0.15) 0%, rgba(0,0,0,0) 70%)`)

---

### 3. COMPLETE PAGE ARCHITECTURE & SECTIONS

#### A. Sticky Navigation Bar
- **Left:** `[Your Name] •` with a glowing green online status badge and subtext `"Backend & Full-Stack Developer"`.
- **Center:** Pill menu with blurred backdrop (`backdrop-blur-md bg-zinc-900/60 border border-zinc-800 rounded-full px-6 py-2`). Links: `Home`, `About`, `Projects`, `Services`, `Certifications`, `Contact`.
- **Right:** Pill button in accent gold: `"Let's Work Together →"` (smooth scroll to contact).

#### B. Hero Section
- **Left Column:**
  - Status Tag: Pill badge `"👋 HELLO, I'M [YOUR NAME]"` (`bg-zinc-900/80 border border-zinc-700 text-xs px-3 py-1.5`).
  - Headline: Large display text: `"I build robust backend systems that scale & secure digital platforms."` (Use the serif italic font for words like *"backend systems"* and *"secure"*).
  - Subtitle: `"IT Major in Network & Information Security. Full-stack developer specializing in scalable REST APIs, PERN/MERN/Laravel architectures, and Linux environments."`
  - CTAs: Dual buttons:
    1. Primary Gold Button: `"View My Work →"`
    2. Secondary Outline Button: `"Download CV 📥"`
  - Floating Badge: Circular rotating badge with text `"AVAILABLE FOR WORK • FULL STACK & BACKEND •"` centered around a stylized monogram logo.
- **Right Column:**
  - Stylized portrait container featuring a warm ambient golden radial glow behind the developer image.
- **Far Right Floating Rail:**
  - Vertical text `"SCROLL DOWN —"` alongside stacked social icons (GitHub, LinkedIn, Email) with hover glow effects.

#### C. Selected Work (Projects Grid)
- **Header:** Subtitle `"SELECTED WORK"`, Main title `"Crafted with purpose."`, and a top-right link `"View All Projects →"`.
- **4-Card Grid (Responsive 2x2 or 4-column horizontal scroll):**
  1. **Alex Car Dealership** | Category: `Commercial Dynamic Platform` | Tech: `Laravel / MERN, MySQL, Tailwind` | Description: Dynamic vehicle catalog with real-time filtering, admin inventory engine, and responsive UI.
  2. **Pediatric Clinic Management** | Category: `Healthcare System & RBAC` | Tech: `PHP / Node.js, PostgreSQL` | Description: Secure medical records portal with role-based access control and conflict-free appointment scheduling.
  3. **Organization Attendance Tracker** | Category: `Full-Stack Web App` | Tech: `PERN Stack, TypeScript, Supabase` | Description: Automated session check-in platform with role authentication and exportable audit logs.
  4. **Network Subnet Scanner & Monitor** | Category: `Security & Infrastructure` | Tech: `Python, Linux Sockets, React` | Description: Live subnet discovery tool performing ping sweeps, open port detection, and health telemetry.
- **Card Design:** Rounded mockup image container with dark gradient overlays, title, tag, and an arrow button (`↗`) that scales on card hover.

#### D. What I Do / Services Grid
- **Header:** Subtitle `"WHAT I DO"`, Main title `"Architect. Develop. Secure."`
- **4 Feature Cards with Lucide icons in circular borders:**
  1. `[Code2 Icon]` **Backend Architecture & APIs:** Designing robust RESTful services, JWT auth, and database schemas (PostgreSQL, MongoDB).
  2. `[Layers Icon]` **Full-Stack Development:** Building reactive interfaces and end-to-end web apps using PERN, MERN, and Laravel stacks.
  3. `[ShieldCheck / Terminal Icon]` **Linux & Network Systems:** Linux server configuration, CCNA-grounded routing/switching logic, and network troubleshooting.
  4. `[Cpu / Bot Icon]` **AI Integration & Calibration:** Connecting LLM APIs, prompt engineering, and building automated data-parsing workflows.

#### E. About Me & Skills Matrix
- **Left Column:**
  - Tag `"ABOUT ME"`, Heading: `"I'm a security-minded developer who bridges code & infrastructure."`
  - Paragraph highlighting IT NIS background, dual certifications (CCNA 1-3 & CSS NC II), and passion for backend development.
  - Button: `"More About Me →"`.
- **Center Image:** Workspace / Developer photo with a glassmorphism floating badge: `"CCNA & CSS NC II Dual Certified"`.
- **Right Column (Animated Skill Meters):**
  - Backend & REST APIs — 95%
  - Full-Stack (PERN / MERN / Laravel) — 90%
  - Linux CLI & Server Management — 88%
  - Relational & NoSQL Databases — 85%
  - AI API Integration & Calibration — 80%

#### F. Testimonials / Client Work
- **Header:** `"TESTIMONIALS / What clients say about my work."`
- **3 Feedback Cards:**
  - Quote mark styling, testimonial excerpt, client avatar, client name, and project role (e.g., *"Freelance Client - Car Dealership Portal"*, *"Clinic System Stakeholder"*).
  - Navigation arrow buttons at the bottom right.

#### G. High-Conversion Footer
- **Left:** `"LET'S WORK TOGETHER / Have a project in mind?"` + `"Get in Touch →"` gold button.
- **Navigation Columns:**
  - *Navigation:* Home, About, Projects, Services, Contact
  - *Core Stack:* PERN Stack, Laravel, Linux, Supabase, CCNA
  - *Contact:* Email link, GitHub link, LinkedIn link, Philippines.
- **Right Newsletter / Quick Contact Box:** Dark input field with submit arrow: `"Enter your email"`.
- **Bottom Bar:** Dynamic copyright year + `"Designed & Developed with Next.js & Tailwind CSS"`.

---

### 4. CODE IMPLEMENTATION REQUIREMENTS
- Create modular components: `Navbar.tsx`, `Hero.tsx`, `Projects.tsx`, `Services.tsx`, `About.tsx`, `Testimonials.tsx`, `Footer.tsx`.
- Use a central `data/portfolio.ts` file containing all data (projects, skills, services, social links) so it is easily editable.
- Ensure 100% mobile responsiveness with a sliding mobile drawer menu.
- Ensure all interactive elements have hover animations (transitions, border glow, slight `y` translation).
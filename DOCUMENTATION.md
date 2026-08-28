# 📖 Full Technical & Architectural Documentation

**Project**: Modern Developer Portfolio Website  
**Developer**: Benedict Neil Dacula Bacud  
**Role**: Backend & Full-Stack Developer  
**Live Production URL**: [https://ben-bacs.github.io/Portfolio/](https://ben-bacs.github.io/Portfolio/)  
**Repository**: [https://github.com/ben-bacs/Portfolio](https://github.com/ben-bacs/Portfolio)  

---

## 1. Executive Summary

This project is a high-performance, pixel-perfect, responsive dark-mode portfolio web application engineered to showcase full-stack engineering expertise, scalable RESTful API architectures, and network & information security credentials.

Built using **React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion**, the application features fluid micro-interactions, luxury aesthetics, accessibility best practices, and zero-configuration CI/CD deployment to **GitHub Pages**.

---

## 2. Technology Stack & Tooling

| Category | Technology | Purpose / Role |
| :--- | :--- | :--- |
| **Core Framework** | React 18 (TypeScript) | Reactive component-driven UI architecture |
| **Build Tool & Bundler** | Vite 6 | Ultra-fast HMR and optimized production bundling |
| **Type Safety** | TypeScript 5.6 | Strict static type checking across components & data models |
| **Styling & Design System** | Tailwind CSS 3.4 | Utility-first responsive design tokens & glassmorphism |
| **PostCSS & Autoprefixer**| PostCSS 8 | Cross-browser CSS compatibility |
| **Animations & Motion** | Framer Motion 11 | Scroll-driven reveals, layout transitions, modal animations |
| **Iconography** | Lucide React | Clean, scalable vector UI icons |
| **Typography** | Google Fonts | `Plus Jakarta Sans` (UI Sans) & `Instrument Serif` (Display Italic) |
| **CI/CD & Hosting** | GitHub Actions & Pages | Automated build, artifact upload, and global CDN hosting |

---

## 3. Design System & Style Tokens

### 3.1 Color Palette
- **Main Background**: `#0B0B0C` (Deep Luxury Black)
- **Dark Surface / Footer**: `#0D0D0E` / `#161618` (Elevation Layer)
- **Card Background**: `#161618` with subtle border `#27272A`
- **Primary Accent / Gold**: `#E5C396` (Hover: `#D4A373`)
- **Secondary Accent**: Luminous Emerald `#10B981` (Live Status Indicators)
- **Text Main**: `#FFFFFF` (Headings & Primary Text)
- **Text Muted**: `#A1A1AA` (Body paragraphs & secondary details)
- **Text Dim**: `#71717A` (Captions, tags, and timestamps)

### 3.2 Typography Hierarchy
- **Sans-Serif (Body & Headers)**: `Plus Jakarta Sans`, `Inter`, `sans-serif`
- **Display Serif Accent (Italic)**: `Instrument Serif`, `Playfair Display`, `serif`
- Applied selectively on high-impact keywords (e.g. *"backend systems"*, *"secure"*, *"purpose"*, *"work"*).

### 3.3 Visual Effects & Glassmorphism
- **Radial Ambient Spotlight**: `gold-glow` (`radial-gradient(circle, rgba(229,195,150,0.18) 0%, rgba(0,0,0,0) 70%)`)
- **Glass Panel**: `backdrop-blur-md bg-zinc-900/75 border border-zinc-800/80`
- **Custom Scrollbar**: 6px dark track with gold hover thumb.

---

## 4. Codebase Directory Structure

```plaintext
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions deployment pipeline
├── Details/
│   ├── Logo, Name, and ContactDetails.jpg   # Brand reference card
│   └── Profile Picture.jpg                  # Original developer portrait
├── public/
│   ├── Chris Apin.jpg            # Testimonial avatar 1
│   ├── Jaspher Ebarle.jpg        # Testimonial avatar 2
│   ├── Richyll Gabinera.jpg      # Testimonial avatar 3
│   ├── favicon.ico               # Browser tab icon (ICO)
│   ├── favicon.png               # High-res browser tab icon (PNG)
│   ├── favicon.svg               # Vector brand tab icon
│   ├── logo-badge.png            # Circular gold-bordered monogram logo
│   ├── logo.png                  # Transparent BNB brand monogram
│   ├── profile-hero.jpg          # Cropped 4:5 hero portrait
│   └── profile.jpg               # Full about profile portrait
├── src/
│   ├── components/
│   │   ├── About.tsx             # NIS background, certifications & skill meters
│   │   ├── ContactModal.tsx      # Interactive contact modal with one-click copy
│   │   ├── Footer.tsx            # Multi-column footer, contact details & newsletter
│   │   ├── Hero.tsx              # Hero showcase, display typography & CTAs
│   │   ├── Navbar.tsx            # Sticky floating glass navbar & mobile drawer
│   │   ├── Projects.tsx          # 4-card project grid with dynamic detail modals
│   │   ├── Services.tsx          # 4 core competencies with icon badges
│   │   └── Testimonials.tsx      # Client review cards with carousel navigation
│   ├── data/
│   │   └── portfolio.ts          # Central data source for all site content
│   ├── App.tsx                   # Main root application layout
│   ├── index.css                 # Global Tailwind styles & utility classes
│   ├── main.tsx                  # React DOM root mounting entrypoint
│   └── vite-env.d.ts             # Vite client TypeScript type declarations
├── .gitignore                    # Git ignore configuration
├── DOCUMENTATION.md              # Full technical documentation (this file)
├── README.md                     # Repository quick-start guide
├── index.html                    # HTML entrypoint with metadata & fonts
├── package.json                  # NPM project dependencies and scripts
├── postcss.config.js             # PostCSS plugins configuration
├── tailwind.config.js            # Tailwind CSS theme & token extensions
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite build and base path configuration
```

---

## 5. Component Breakdown & Functional Architecture

### 5.1 `Navbar.tsx`
- **Sticky Glassmorphism**: Blurs background on scroll with subtle bottom border.
- **Brand & Live Status**: Displays monogram logo, developer name, and an animated green pulsing indicator (`Available for Work`).
- **Pill Menu**: Desktop pill bar with animated active pill indicator that tracks current scroll position (`#home`, `#about`, `#projects`, `#services`, `#contact`).
- **Mobile Drawer**: Slide-out drawer with backdrop blur, scroll locking, touch-optimized nav links, and quick phone/email actions.

### 5.2 `Hero.tsx`
- **Display Typography**: Serif italic contrast styling on high-impact keywords.
- **Dual Action CTAs**: Primary gold button (*"View My Work"*) and secondary outlined button (*"Download CV"*).
- **Stylized Portrait**: Framed portrait with golden ambient radial backlight and a floating glassmorphism *"Professional Identity"* badge.
- **Focus Area Badges**: Quick pills highlighting REST APIs, CCNA Security, Linux Admin, and dual locations (Iloilo & Koronadal City).
- **Floating Social Rail**: Desktop-only vertical rail on the far right with GitHub, LinkedIn, and Email quick links.

### 5.3 `Projects.tsx`
- **Responsive 4-Card Grid**:
  1. **Alex Car Dealership** (*Commercial Dynamic Platform* - Laravel / MERN)
  2. **Pediatric Clinic Management** (*Healthcare System & RBAC* - PHP / Node.js, PostgreSQL)
  3. **Organization Attendance Tracker** (*Full-Stack Web App* - PERN Stack, Supabase)
  4. **Network Subnet Scanner & Monitor** (*Security & Infrastructure* - Python, Linux Sockets, React)
- **Interactive Detail Modal**: Clicking any card opens a modal with a high-resolution banner, complete architecture breakdown, tech badges, live preview, and source code links.

### 5.4 `Services.tsx` ("What I Do")
- 4 feature cards with circular bordered Lucide icons:
  - **Backend Architecture & APIs**: RESTful services, JWT auth, PostgreSQL/MongoDB caching layers.
  - **Full-Stack Development**: End-to-end applications using PERN, MERN, and Laravel stacks.
  - **Linux & Network Systems**: Ubuntu/Debian server administration, Nginx reverse proxy, CCNA routing logic.
  - **AI Integration & Calibration**: LLM APIs, function calling, structured outputs, and automated pipelines.

### 5.5 `About.tsx` & Skills Matrix
- **Narrative Bio**: Details Network & Information Security major background and passion for scalable systems.
- **Certification Badges**: Cisco CCNA 1-3 & Computer Systems Servicing (CSS NC II).
- **Workspace Photo**: Portrait container with a floating *"Dual Certified"* glass badge.
- **Animated Skill Progress Meters**:
  - Backend & REST APIs — 95%
  - Full-Stack (PERN / MERN / Laravel) — 90%
  - Linux CLI & Server Management — 88%
  - Relational & NoSQL Databases — 85%
  - AI API Integration & Calibration — 80%

### 5.6 `Testimonials.tsx`
- 3 feedback cards showcasing real collaborators:
  - **Chris Apin** (Lead Project Manager, Apex Tech Logistics)
  - **Richyll Gabinera** (Operations Director, CarePulse Health)
  - **Jaspher Ebarle** (Founder & CTO, Veloce Auto Group)
- Highlighting transitions from grayscale to full color on card hover.

### 5.7 `Footer.tsx` & `ContactModal.tsx`
- **Multi-Column Layout**:
  - Direct Phone numbers: `0945 201 3603 / 0963 930 3496` (with `tel:` protocol).
  - Direct Email: `benedictneilbacud@gmail.com` (with `mailto:` protocol).
  - Offices: `Iloilo City, Iloilo` & `Koronadal City, South Cotabato`.
- **Newsletter Subscription**: Interactive email capture form with validation and animated success feedback.
- **Contact Modal**: Accessible popup containing one-click clipboard copy for email and phone numbers, plus a direct message form.

---

## 6. How to Edit & Customize Portfolio Data

All personal details, project entries, skills, services, and testimonials are centralized in [`src/data/portfolio.ts`](file:///c:/Users/ACER/OneDrive/Desktop/Portfolio/src/data/portfolio.ts).

### Editing Examples:
- **Change Name or Contact**: Edit `PORTFOLIO_DATA.personal.name`, `email`, `phones`, or `offices`.
- **Add/Modify a Project**: Add a new object to `PORTFOLIO_DATA.projects` with `title`, `category`, `description`, `techStack`, `image`, and repository links.
- **Update Skill Levels**: Adjust percentage integers in `PORTFOLIO_DATA.skills`.

---

## 7. Deployment & CI/CD Workflow

The website is configured with an automated GitHub Actions deployment pipeline located in [`.github/workflows/deploy.yml`](file:///c:/Users/ACER/OneDrive/Desktop/Portfolio/.github/workflows/deploy.yml).

### Workflow Process:
1. **Trigger**: Executes automatically on every `git push` to the `main` branch.
2. **Build**: Checks out the repository, installs dependencies with Node.js 20, and runs `npm run build`.
3. **Artifact**: Uploads the production `./dist` folder.
4. **Deploy**: Deploys the built SPA to GitHub Pages with relative asset resolution (`base: './'`).

---

## 8. Available Scripts

```bash
# Run local development server with Hot Module Replacement
npm run dev

# Compile TypeScript and build production bundle into ./dist
npm run build

# Preview production build locally
npm run preview
```

---

## 9. Verification & Quality Standards

- **TypeScript Strict Mode**: Zero compilation errors or unused variables (`tsc -b`).
- **Responsive Viewport Support**: Fully tested across mobile (320px–480px), tablet (768px), and desktop (1024px–1440px+).
- **Performance**: Optimized gzip assets, lazy-loaded offscreen images, and CSS hardware-accelerated animations.

# Benedict Neil D. Bacud — Portfolio (v3.0.0)

Personal engineering portfolio built in a **Technical Blueprint** layout (`Geist`, `Geist Mono`, `Doto`, `Caveat`), deployed via GitHub Actions to GitHub Pages.

- **Live Portfolio:** https://ben-bacs.github.io/Portfolio/
- **Curriculum Vitae (PDF):** https://ben-bacs.github.io/Portfolio/Benedict_Neil_Bacud_CV.pdf
- **Contact:** benedictneildaculabacud@gmail.com

## Architecture & Sections

- **Blueprint Grid Shell (`src/App.tsx`, `src/index.css`):** Centered `748px` column bounded by `1px` masked micro-dashed rails, full-bleed horizontal rules, crosshair corner ticks, `45deg` diagonal hatch dividers, and persistent Dark (`#000000`) / Light (`#FFFFFF`) mode.
- **Hero & Telemetry (`src/components/BlueprintHero.tsx`):** Procedural Canvas2D horizon banner with live Manila (`Asia/Manila`) `Doto` dot-matrix clock, utility bar (`Theme`, `Web Audio UI Ticks`, `⌘K` Command Menu, `CV.pdf`), 6-cell telemetry grid, and direct proof links (`Mealie PR #8984`, `Cal.com PR #30158`).
- **Contribution Matrix, Spotlight Bio & Stack (`src/components/BlueprintAboutAndStack.tsx`):** Interactive `#6495ED` contribution matrix (`BEN BACS` banner mode and commit mode), time-of-day greeting, and `01–04` indexed Stack rows.
- **Experience, Credentials & Milestones (`src/components/BlueprintExperienceAndEdu.tsx`):** Tabbed accordions for contract/open-source experience, campus leadership, BSIT (Network & Information Security) education at WVSU Main Campus, and 5 verified TESDA CSS NC II & Cisco Networking Academy completions.
- **Projects & Colophon (`src/components/BlueprintProjectsAndColophon.tsx`):** 2-column blueprint grid featuring syntax-highlighted code/diff/SQL/Rust stages (no stock photography), domain filters, technical detail modals, and a blueprint Colophon footer.

## Local Development

```bash
npm install
npm run dev
npm run build
```

## License

MIT

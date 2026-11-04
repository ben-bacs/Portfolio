import { PORTFOLIO_DATA } from './data/portfolio';

export default function App() {
  const { personal, projects } = PORTFOLIO_DATA;
  const [featured, ...work] = projects;

  return (
    <div className="portfolio" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top">Ben Bacud</a>
        <nav aria-label="Main navigation">
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="intro" aria-labelledby="intro-heading">
          <div>
            <p className="intro-name">{personal.name}</p>
            <h1 id="intro-heading">Curious about what makes things tick.</h1>
            <p className="lede">I study IT at WVSU and build across backend systems, desktop software, and application security.</p>
            <a className="button" href="#projects">Explore my work</a>
          </div>
          <img className="portrait" src={personal.profileImage} alt="Benedict Neil Bacud" />
        </section>

        <section id="projects" aria-labelledby="work-heading">
          <header className="section-heading">
            <h2 id="work-heading">Selected work</h2>
            <a href={personal.github}>GitHub profile</a>
          </header>

          <article className="featured">
            <div className="featured-copy">
              <p className="category">{featured.category}</p>
              <h3>{featured.title}</h3>
              <p className="project-summary">{featured.description}</p>
              <p>{featured.detail}</p>
              <p className="stack">{featured.stack}</p>
              <div className="project-links">
                <a href={featured.url}>Source code</a>
                <a href={featured.releaseUrl}>Windows downloads</a>
              </div>
            </div>
            <div className="signal" aria-hidden="true">
              <svg viewBox="0 0 400 240" fill="none">
                <path className="signal-grid" d="M0 60H400 M0 120H400 M0 180H400 M80 0V240 M160 0V240 M240 0V240 M320 0V240" />
                <path className="signal-line signal-echo" d="M0 120H61L81 105L96 132L117 85L137 157L158 57L180 184L203 35L226 202L246 74L267 155L287 96L307 130L328 113L347 120H400" />
                <path className="signal-line" d="M0 120H61L81 105L96 132L117 85L137 157L158 57L180 184L203 35L226 202L246 74L267 155L287 96L307 130L328 113L347 120H400" />
              </svg>
              <span>Audio loopback / visual output</span>
            </div>
          </article>

          <div className="work-grid">
            {work.map((project) => (
              <article className="project" key={project.title}>
                <p className="category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.description}</p>
                <p>{project.detail}</p>
                <p className="stack">{project.stack}</p>
                <a href={project.url}>{project.linkLabel ?? 'Source code'}<span className="sr-only"> for {project.title}</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About me</h2>
          <div>
            <p>I'm a BSIT student at West Visayas State University. My coursework spans Software Technology and Network &amp; Information Security.</p>
            <p>I'm drawn to the parts of software you rarely see: how data moves, how access is enforced, and what happens when a system fails.</p>
            <dl>
              <div><dt>Backend</dt><dd>Go, Java / Spring Boot, PostgreSQL</dd></div>
              <div><dt>Desktop</dt><dd>Rust, Tauri, WebGL</dd></div>
              <div><dt>Security</dt><dd>Network security, access control, SSRF mitigation</dd></div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="contact" id="contact">
        <div>
          <h2>Say hi</h2>
          <p>Reach me by email or find my code on GitHub.</p>
        </div>
        <div className="project-links">
          <a className="button" href={`mailto:${personal.email}`}>Email me</a>
          <a href={personal.github}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}

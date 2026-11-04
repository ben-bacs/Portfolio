import { PORTFOLIO_DATA } from './data/portfolio';

export default function App() {
  const { personal, projects } = PORTFOLIO_DATA;

  return (
    <main className="portfolio">
      <header className="intro">
        <img className="portrait" src={personal.profileImage} alt="" width="72" height="72" />
        <h1>{personal.name}</h1>
        <p className="tagline">curious about what makes things tick.</p>
        <p className="bio">
          I study IT at WVSU, focusing on software technology and network security.
          I build backend systems and work on application security.
        </p>
        <nav className="links" aria-label="Contact and social links">
          <a href={personal.github}>GitHub</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </nav>
      </header>

      <section id="projects" aria-labelledby="work-heading">
        <h2 id="work-heading">Selected work</h2>
        <ul className="work-list">
          {projects.map((project) => (
            <li key={project.title}>
              <a className="project" href={project.url}>
                <span className="project-title">{project.title}</span>
                <span className="project-description">{project.description}</span>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

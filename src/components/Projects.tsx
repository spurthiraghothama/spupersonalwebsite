import { profile } from '../data/github';
import { ScrollReveal } from './ScrollReveal';

export function Projects() {
  const featured = profile.repos;

  return (
    <section id="projects" className="projects section">
      <ScrollReveal>
        <h2 className="section__title">
          Projects <span className="section__title-accent">→</span>
        </h2>
        <p className="section__subtitle">
          Pinned repos from{' '}
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" data-cursor="pointer">
            @{profile.username}
          </a>
          {' '}— {profile.publicRepos} repos and counting
        </p>
      </ScrollReveal>

      <div className="projects__grid">
        {featured.map((repo, i) => (
          <ScrollReveal key={repo.name} delay={0.05 * (i % 3)}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              data-cursor="pointer"
            >
              <div className="project-card__header">
                <span className="project-card__folder">📁</span>
                <span className="project-card__stars">⭐ {repo.stars}</span>
              </div>
              <h3 className="project-card__name">{repo.name}</h3>
              <p className="project-card__desc">{repo.description}</p>
              {repo.language && (
                <span className="project-card__lang">
                  <span className="project-card__lang-dot" />
                  {repo.language}
                </span>
              )}
              <span className="project-card__link">View on GitHub →</span>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2}>
        <div className="projects__more">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            data-cursor="pointer"
          >
            View all repos on GitHub
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

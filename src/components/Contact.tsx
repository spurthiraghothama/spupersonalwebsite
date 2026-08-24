import { profile } from '../data/github';
import { ScrollReveal } from './ScrollReveal';

export function Contact() {
  return (
    <section id="contact" className="contact section">
      <ScrollReveal>
        <div className="contact__card">
          <span className="contact__emoji" aria-hidden>✉️</span>
          <h2 className="section__title">Let's Connect</h2>
          <p className="contact__text">
            I'm always excited to chat about opportunities, collaborations, or interesting projects.
            Drop me a line — I'd love to hear from you.
          </p>

          <div className="contact__links">
            <a
              href={`mailto:${profile.email}`}
              className="contact__link"
              data-cursor="pointer"
            >
              <span>✉️</span>
              <div>
                <strong>Email</strong>
                <p>{profile.email}</p>
              </div>
            </a>

            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
              data-cursor="pointer"
            >
              <span>🔗</span>
              <div>
                <strong>GitHub</strong>
                <p>@{profile.username}</p>
              </div>
            </a>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="btn btn--primary contact__cta"
            data-cursor="pointer"
          >
            Say hello via Email →
          </a>
        </div>
      </ScrollReveal>

      <footer className="footer">
        <p>
          Made with care by {profile.name} · {new Date().getFullYear()}
        </p>
        <p className="footer__small">Built with Vite + React + TypeScript</p>
      </footer>
    </section>
  );
}

import { experiences } from '../data/github';
import { ScrollReveal } from './ScrollReveal';

export function Experience() {
  return (
    <section id="experience" className="experience section">
      <ScrollReveal>
        <h2 className="section__title">
          Experience <span className="section__title-accent">→</span>
        </h2>
        <p className="section__subtitle">Timeline & internships</p>
      </ScrollReveal>

      <div className="experience__list">
        {experiences.map((exp, index) => (
          <ScrollReveal key={`${exp.company}-${index}`} delay={0.1 * index}>
            <div className="experience__row" data-cursor="pointer">
              <div className="experience__main">
                <h3 className="experience__company-name">{exp.company}</h3>
                <span className="experience__role-title">{exp.role}</span>
              </div>
              <div className="experience__date-badge">
                {exp.period}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

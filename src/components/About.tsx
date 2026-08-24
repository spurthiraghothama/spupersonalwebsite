import { ScrollReveal } from './ScrollReveal';

export function About() {
  return (
    <section id="about" className="about section">
      <ScrollReveal>
        <h2 className="section__title">
          About <span className="section__title-accent">✿</span>
        </h2>
      </ScrollReveal>

      <div className="about__layout">
        <ScrollReveal className="about__main-card" delay={0.1}>
          <div className="about__intro">
            <p className="about__highlight-text">
              I'm a <strong>Computer Science student</strong> at <strong>PES University</strong> who enjoys building things, asking questions, and constantly pushing myself to do better.
            </p>
            <p className="about__body-text">
              Whether I'm learning something new or working on an idea that excites me, I'm always looking for the next challenge and the next opportunity to grow.
            </p>
            <p className="about__body-text">
              Outside of tech, you'll probably find me making something creative, playing the guitar, or going down a random rabbit hole just because it seemed interesting. Always curious, always learning, and always excited for what's next.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="about__side-card" delay={0.2} direction="right">
          <div className="about__side-header">
            <span className="about__side-tag">Passions & Focus</span>
          </div>

          <div className="about__pillars">
            <div className="about__pillar">
              <div className="about__pillar-num">01</div>
              <div className="about__pillar-info">
                <h4>Building & Problem Solving</h4>
                <p>Translating complex concepts and ideas into elegant, reliable applications.</p>
              </div>
            </div>

            <div className="about__pillar">
              <div className="about__pillar-num">02</div>
              <div className="about__pillar-info">
                <h4>Creative Pursuits & Music</h4>
                <p>Playing guitar, visual design, and finding rhythm in everything I create.</p>
              </div>
            </div>

            <div className="about__pillar">
              <div className="about__pillar-num">03</div>
              <div className="about__pillar-info">
                <h4>Constant Curiosity</h4>
                <p>Exploring emerging technology, deep dives, and continuous self-improvement.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

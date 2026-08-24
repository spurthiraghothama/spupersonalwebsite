import { motion } from 'framer-motion';
import { profile } from '../data/github';

function SparkleAccent() {
  return (
    <motion.span
      className="hero__sparkle-accent"
      animate={{
        scale: [1, 1.25, 0.95, 1.15, 1],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: 'linear',
      }}
    >
      ✦
    </motion.span>
  );
}

export function Hero() {
  return (
    <section id="hero" className="hero section">
      {/* Top pill badge */}
      <motion.div
        className="hero__pill"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="hero__pill-dot" />
        Open to opportunities
      </motion.div>

      {/* Main hero content */}
      <div className="hero__content">
        {/* Big clean name with animated sparkle accent */}
        <motion.div
          className="hero__name-block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="hero__greeting">hi, i'm Spurthi Raghothama</span>
          <div className="hero__name-row">
            <h1 className="hero__name">
              Spurthi
              <SparkleAccent />
            </h1>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="hero__tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="hero__role">
            <span className="hero__role-label">Software Engineer</span>
            <span className="hero__role-divider">·</span>
            <span className="hero__role-label">Problem Solver</span>
            <span className="hero__role-divider">·</span>
            <span className="hero__role-label">Creative Thinker</span>
          </p>
          <p className="hero__desc">
            crafting thoughtful systems and{' '}
            <span className="hero__highlight">impactful software</span> ✨
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a href="#projects" className="btn btn--primary" data-cursor="pointer">
            See my work
            <span className="btn__arrow">→</span>
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            data-cursor="pointer"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn btn--outline"
            data-cursor="pointer"
          >
            Say hi ✉️
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}

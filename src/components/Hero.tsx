import { motion } from 'framer-motion';
import { profile } from '../data/github';

function BlinkingEye() {
  return (
    <motion.svg
      viewBox="0 0 120 60"
      className="hero__eye"
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <defs>
        <clipPath id="eyeClip">
          <path d="M10 30 Q60 -5 110 30 Q60 65 10 30Z" />
        </clipPath>
      </defs>

      {/* Sclera / eye background */}
      <path
        d="M10 30 Q60 -5 110 30 Q60 65 10 30Z"
        fill="var(--bg-secondary)"
      />

      {/* Outer eye outline */}
      <path
        d="M10 30 Q60 -5 110 30 Q60 65 10 30Z"
        fill="none"
        stroke="var(--eye-stroke)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Inner eye elements that blink continuously */}
      <motion.g
        clipPath="url(#eyeClip)"
        animate={{
          scaleY: [1, 1, 0.08, 1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.2,
          times: [0, 0.72, 0.78, 0.84, 1],
          ease: 'easeInOut',
        }}
        style={{ transformOrigin: '60px 30px' }}
      >
        {/* Iris */}
        <circle
          cx="60"
          cy="30"
          r="16"
          fill="var(--eye-iris)"
        />
        {/* Pupil */}
        <circle
          cx="60"
          cy="30"
          r="7.5"
          fill="var(--eye-pupil)"
        />
        {/* Eye highlight shine */}
        <circle
          cx="53"
          cy="24"
          r="3.5"
          fill="white"
          opacity="0.85"
        />
      </motion.g>

      {/* Animated Eyelid line that blinks seamlessly */}
      <motion.path
        fill="none"
        stroke="var(--eye-stroke)"
        strokeWidth="3.5"
        strokeLinecap="round"
        animate={{
          d: [
            "M10 30 Q60 -5 110 30",
            "M10 30 Q60 -5 110 30",
            "M10 30 Q60 30 110 30",
            "M10 30 Q60 -5 110 30",
            "M10 30 Q60 -5 110 30",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.2,
          times: [0, 0.72, 0.78, 0.84, 1],
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
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
        {/* Big name with eye */}
        <motion.div
          className="hero__name-block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="hero__greeting">hi, i'm Spurthi Raghothama</span>
          <div className="hero__name-row">
            <h1 className="hero__name">
              Sp
              <span className="hero__eye-wrapper">
                <BlinkingEye />
              </span>
              rthi
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

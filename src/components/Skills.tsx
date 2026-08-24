import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/github';
import { ScrollReveal } from './ScrollReveal';

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ name: s, category: cat.title }))
  );

  const displayedCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeTab);

  return (
    <section id="skills" className="skills section">
      <ScrollReveal>
        <div className="skills__header-row">
          <div>
            <h2 className="section__title">
              Skills <span className="section__title-accent">✦</span>
            </h2>
            <p className="section__subtitle">
              Interactive toolbox — hover or drag the pills around! ✨
            </p>
          </div>

          {/* Filter Pills */}
          <div className="skills__filters">
            <button
              type="button"
              className={`skills__filter-btn ${activeTab === 'all' ? 'skills__filter-btn--active' : ''}`}
              onClick={() => setActiveTab('all')}
              data-cursor="pointer"
            >
              All ({allSkills.length})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.title}
                type="button"
                className={`skills__filter-btn ${activeTab === cat.title ? 'skills__filter-btn--active' : ''}`}
                onClick={() => setActiveTab(cat.title)}
                data-cursor="pointer"
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Categorized Bento Cards */}
      <div className="skills__bento-grid">
        <AnimatePresence mode="popLayout">
          {displayedCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, delay: catIndex * 0.06 }}
              className="skills__category-card"
            >
              <div className="skills__category-header">
                <span className="skills__category-number">0{catIndex + 1}</span>
                <div>
                  <h3 className="skills__category-title">{cat.title}</h3>
                  <span className="skills__category-count">{cat.skills.length} technologies</span>
                </div>
              </div>

              <div className="skills__pills-wrap">
                {cat.skills.map((skillName, skillIndex) => (
                  <motion.div
                    key={skillName}
                    drag
                    dragConstraints={{ left: -15, right: 15, top: -15, bottom: 15 }}
                    dragElastic={0.2}
                    whileHover={{
                      scale: 1.06,
                      rotate: (skillIndex % 2 === 0 ? 2 : -2),
                      transition: { type: 'spring', stiffness: 400, damping: 15 },
                    }}
                    whileTap={{ scale: 0.94 }}
                    className="skills__fun-pill"
                    data-cursor="pointer"
                  >
                    <span className="skills__pill-dot" />
                    <span className="skills__pill-name">{skillName}</span>
                    <motion.span
                      className="skills__pill-sparkle"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      ✦
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Clean Animated Marquee Strip at bottom */}
      <ScrollReveal delay={0.2}>
        <div className="skills__marquee-container" aria-hidden>
          <div className="skills__marquee-track">
            {[...allSkills, ...allSkills].map((s, idx) => (
              <span key={`${s.name}-${idx}`} className="skills__marquee-item">
                <span className="skills__marquee-star">✦</span> {s.name} <span className="skills__marquee-dot">·</span>
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

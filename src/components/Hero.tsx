import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { EXPO } from '../utils/animations'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EXPO } },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start pt-8 md:pt-16 lg:pt-24">

          {/* Left — Text */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col">

            {/* Status badge */}
            <motion.div variants={fadeUp} className="mb-8 lg:mb-12">
              <span className="section-label">
                Kerala, India &nbsp;·&nbsp; Currently exploring
              </span>
            </motion.div>

            {/* Display name */}
            <motion.h1
              variants={fadeUp}
              className="text-display font-extrabold text-ink leading-[0.9] tracking-[-0.04em] mb-6"
            >
              MUHAMMED
              <br />
              IDREES
              <span className="text-accent">.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="text-subheading text-ink font-medium max-w-xl mb-4 ml-1 md:ml-2"
            >
              "I write my ideas in code."
            </motion.p>

            {/* Sub-tagline */}
            <motion.p
              variants={fadeUp}
              className="text-base text-muted max-w-lg mb-6 ml-1 md:ml-2 leading-relaxed"
            >
              Some ideas begin with a question. Others begin with a problem.{' '}
              <br className="hidden md:block" />
              I like finding out where they can lead.
            </motion.p>

            {/* Intro line */}
            <motion.p
              variants={fadeUp}
              className="text-sm text-muted max-w-md ml-1 md:ml-2 font-mono"
            >
              Exploring technology, understanding problems,{' '}
              <br className="hidden md:block" />
              and building things worth using.
            </motion.p>

            {/* Role */}
            <motion.div variants={fadeUp} className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3">
              <span className="section-label">Independent Engineer</span>
              <span className="hidden sm:inline text-muted/40 text-xs">|</span>
              <span className="section-label">Applied AI</span>
              <span className="hidden sm:inline text-muted/40 text-xs">|</span>
              <span className="section-label">Research & Technology</span>
            </motion.div>
          </motion.div>

          {/* Right — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: EXPO }}
            className="hidden lg:block"
          >
            <div className="relative w-72 xl:w-80">
              {/* Border decoration */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-ink/15" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-ink/8" />
              <img
                src="/hero_portrait.png"
                alt="Muhammed Idrees"
                className="w-full aspect-[3/4] object-cover object-top grayscale"
              />
              {/* Caption */}
              <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-widest text-muted">
                Muhammed Idrees — 2024
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom row — scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="max-w-7xl mx-auto w-full px-6 md:px-10 pb-8 flex items-center justify-between"
      >
        <div className="divider flex-1 mr-6" />
        <a
          href="#about"
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1 text-muted hover:text-ink transition-colors duration-200 group"
        >
          <span className="font-mono text-[0.6rem] uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}

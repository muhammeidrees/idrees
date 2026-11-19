import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

export function Thinking() {
  return (
    <section id="about" className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-section">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-start">

          {/* Left label */}
          <motion.div {...fadeUp(0)}>
            <span className="section-label">On thinking</span>
          </motion.div>

          {/* Right content */}
          <div className="flex flex-col gap-6">
            <motion.h2
              {...fadeUp(0.1)}
              className="text-heading text-ink"
            >
              Before I build,<br />I want to understand.
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-base text-muted leading-relaxed max-w-lg">
              I'm curious about why things work, where they fall short, and what might work better.
            </motion.p>

            <motion.p {...fadeUp(0.3)} className="text-base text-muted leading-relaxed max-w-lg">
              I read, question, study the mathematics, explore existing research, and experiment
              with my own ideas.
            </motion.p>

            <motion.p {...fadeUp(0.4)} className="text-base text-muted leading-relaxed max-w-lg">
              Sometimes the answer is already out there.
              Sometimes there's something worth solving.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

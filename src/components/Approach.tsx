import { motion } from 'framer-motion'
import { approachSteps } from '../data/tech'
import { fadeUp } from '../utils/animations'

export function Approach() {
  return (
    <section className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-section">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
          {/* Left */}
          <div>
            <motion.span {...fadeUp(0)} className="section-label block mb-4">
              Process
            </motion.span>
            <motion.h2 {...fadeUp(0.1)} className="text-heading text-ink">
              Every problem<br />deserves a<br />closer look.
            </motion.h2>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between gap-8">
            {/* Steps row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0 mt-2">
              {approachSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  {...fadeUp(0.07 * i + 0.15)}
                  className="flex flex-col gap-2 py-4 pr-4 group"
                >
                  <span className="font-mono text-xs text-accent/80 tracking-widest">
                    {step.num}
                  </span>
                  <span className="text-sm font-semibold text-ink group-hover:text-accent transition-colors duration-300">
                    {step.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Supporting sentence */}
            <motion.p {...fadeUp(0.5)} className="text-sm text-muted leading-relaxed max-w-md border-l-2 border-accent/40 pl-4">
              I don't believe in reinventing everything. I believe in understanding what exists
              and knowing when it needs to change.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

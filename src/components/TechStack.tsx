import { motion } from 'framer-motion'
import { techStack } from '../data/tech'
import { fadeUp } from '../utils/animations'

export function TechStack() {
  return (
    <section className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-section">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20">

          {/* Left */}
          <div>
            <motion.span {...fadeUp(0)} className="section-label block mb-4">
              Tools & Technologies
            </motion.span>
            <motion.h2 {...fadeUp(0.1)} className="text-heading text-ink">
              Things I<br />work with.
            </motion.h2>
          </div>

          {/* Right — compact category list */}
          <div className="flex flex-col gap-0">
            {techStack.map((group, i) => (
              <motion.div
                key={group.category}
                {...fadeUp(0.07 * i + 0.15)}
                className="border-t border-ink/10 py-5 grid grid-cols-[140px_1fr] gap-4 items-baseline last:border-b last:border-ink/10"
              >
                <span className="font-mono text-xs text-muted uppercase tracking-widest shrink-0">
                  {group.category}
                </span>
                <p className="text-sm text-ink leading-relaxed">
                  {group.items.join(', ')}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

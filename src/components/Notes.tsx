import { motion } from 'framer-motion'
import { noteTopics } from '../data/research'
import { fadeUp } from '../utils/animations'

export function Notes() {
  return (
    <section className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-section">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20">

          {/* Left */}
          <div>
            <motion.span {...fadeUp(0)} className="section-label block mb-4">
              Notes & ideas
            </motion.span>
            <motion.h2 {...fadeUp(0.1)} className="text-heading text-ink">
              Things on<br />my mind.
            </motion.h2>
            <motion.p {...fadeUp(0.2)} className="mt-4 font-mono text-xs text-muted/60 uppercase tracking-widest leading-relaxed">
              Future writing topics.<br />Not yet published.
            </motion.p>
          </div>

          {/* Right — editorial list */}
          <div className="flex flex-col gap-0">
            {noteTopics.map((topic, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.08 * i + 0.15)}
                className="border-t border-ink/10 py-5 flex items-start gap-5 group last:border-b last:border-ink/10"
              >
                <span className="font-mono text-xs text-muted/40 uppercase tracking-widest mt-0.5 shrink-0 w-5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-ink leading-relaxed group-hover:text-accent transition-colors duration-300 cursor-default">
                  {topic}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

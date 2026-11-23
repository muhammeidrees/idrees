import { motion } from 'framer-motion'
import { researchTopics } from '../data/research'
import { fadeUp } from '../utils/animations'

export function Research() {
  return (
    <section id="research" className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-section">

        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20 mb-10 md:mb-24">
          <div>
            <motion.span {...fadeUp(0)} className="section-label block mb-4">
              Research
            </motion.span>
            <motion.h2 {...fadeUp(0.1)} className="text-heading text-ink">
              Questions I'm<br />exploring.
            </motion.h2>
          </div>
          <div className="flex flex-col justify-end">
            <motion.p {...fadeUp(0.2)} className="text-base text-muted leading-relaxed max-w-md">
              I'm interested in understanding the machinery beneath the technology we use.
            </motion.p>
            <motion.p {...fadeUp(0.3)} className="mt-3 font-mono text-xs text-muted/60 uppercase tracking-widest">
              Personal research interests — not completed research contributions
            </motion.p>
          </div>
        </div>

        {/* Research visual */}
        <motion.div
          {...fadeUp(0.1)}
          className="mb-10 md:mb-24 overflow-hidden border border-ink/10 max-w-2xl"
        >
          <img
            src="/research_visual.png"
            alt="Research and mathematics illustration"
            className="w-full object-cover grayscale opacity-80"
          />
        </motion.div>

        {/* Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border-y border-ink/10 sm:border-0">
          {researchTopics.map((topic, i) => (
            <motion.div
              key={topic.id}
              {...fadeUp(0.1 * i + 0.2)}
              className="bg-bg py-7 px-0 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-5"
            >
              {/* Formula badge */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent border border-accent/30 px-2 py-1 tracking-wider">
                  {topic.formula}
                </span>
              </div>

              <h3 className="text-lg font-bold text-ink">{topic.title}</h3>

              <p className="text-sm text-muted leading-relaxed">
                {topic.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-x-2 mt-auto pt-2">
                {topic.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[0.6rem] text-muted/60 uppercase tracking-widest">
                    {tag} ·
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

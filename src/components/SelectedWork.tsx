import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { fadeUp } from '../utils/animations'

export function SelectedWork() {
  return (
    <section id="work" className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-section">

        {/* Section header */}
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div>
            <motion.span {...fadeUp(0)} className="section-label block mb-4">
              Selected work
            </motion.span>
            <motion.h2 {...fadeUp(0.1)} className="text-heading text-ink">
              Things I've been working on.
            </motion.h2>
          </div>
          <motion.span
            {...fadeUp(0.2)}
            className="hidden md:block font-mono text-xs text-muted uppercase tracking-widest"
          >
            All in progress
          </motion.span>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-0">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              {...fadeUp(0.1 * i)}
              className="group border-t border-ink/10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-6 md:gap-10 items-start last:border-b last:border-ink/10"
            >
              {/* Index */}
              <span className="font-mono text-xs text-muted uppercase tracking-widest pt-1">
                {project.id}
              </span>

              {/* Text block */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-bold text-ink group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="tag-accent">In Progress</span>
                </div>

                <p className="text-sm text-muted leading-relaxed max-w-sm">
                  {project.description}
                </p>

                {project.note && (
                  <p className="font-mono text-[0.65rem] text-muted/70 uppercase tracking-wider">
                    {project.note}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-2">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                      View project <ArrowUpRight size={12} />
                    </a>
                  ) : (
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted/50">
                      Not yet public
                    </span>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-ink/5 z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

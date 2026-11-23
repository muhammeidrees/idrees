import { motion } from 'framer-motion'
import { ArrowUpRight, CheckSquare, CreditCard, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { logisticsSystems, websites } from '../data/projects'
import { fadeUp } from '../utils/animations'

const iconMap: Record<string, LucideIcon> = {
  CheckSquare,
  CreditCard,
  MapPin,
}

export function BusinessWork() {
  return (
    <>
      {/* Logistics */}
      <section className="border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-section">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20">

            {/* Left label */}
            <div>
              <motion.span {...fadeUp(0)} className="section-label block mb-4">
                Business work
              </motion.span>
              <motion.h2 {...fadeUp(0.1)} className="text-heading text-ink">
                Software should<br />make work easier.
              </motion.h2>
            </div>

            {/* Right */}
            <div>
              <motion.p {...fadeUp(0.15)} className="text-base text-muted leading-relaxed mb-10 max-w-lg">
                I've worked with businesses to understand their everyday problems and build tools
                that make their work simpler.
              </motion.p>

              {/* Logistics label */}
              <motion.p {...fadeUp(0.2)} className="section-label mb-6">
                Logistics Operations
              </motion.p>

              <motion.p {...fadeUp(0.25)} className="text-sm text-muted mb-10 max-w-md leading-relaxed">
                I worked with a logistics company to reduce manual work and human errors through
                custom software.
              </motion.p>

              {/* Three systems */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink/10">
                {logisticsSystems.map((sys, i) => {
                  const Icon = iconMap[sys.icon]
                  return (
                    <motion.div
                      key={sys.title}
                      {...fadeUp(0.1 * i + 0.3)}
                      className="bg-bg p-6 md:p-8 flex flex-col gap-4 group hover:bg-ink transition-colors duration-300"
                    >
                      <Icon size={18} className="text-muted group-hover:text-bg transition-colors" />
                      <h3 className="text-sm font-bold text-ink group-hover:text-bg transition-colors">
                        {sys.title}
                      </h3>
                      <p className="text-xs text-muted group-hover:text-bg/70 transition-colors leading-relaxed">
                        {sys.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Logistics UI Image */}
              <motion.div {...fadeUp(0.5)} className="mt-8 overflow-hidden border border-ink/10">
                <img
                  src="/mockup_logistics.png"
                  alt="Logistics software interface"
                  className="w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Development */}
      <section className="border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-section">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20">

            {/* Left */}
            <div>
              <motion.span {...fadeUp(0)} className="section-label block mb-4">
                Web development
              </motion.span>
              <motion.h2 {...fadeUp(0.1)} className="text-heading text-ink">
                Giving businesses<br />a place online.
              </motion.h2>
            </div>

            {/* Right */}
            <div>
              <motion.p {...fadeUp(0.15)} className="text-sm text-muted leading-relaxed mb-10 max-w-md">
                Early work helping businesses establish their digital presence.
              </motion.p>

              <div className="flex flex-col gap-0">
                {websites.map((site, i) => (
                  <motion.div
                    key={site.title}
                    {...fadeUp(0.1 * i + 0.2)}
                    className="border-t border-ink/10 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 group last:border-b last:border-ink/10"
                  >
                    <div>
                      <p className="text-sm font-bold text-ink mb-1">{site.title}</p>
                      <p className="text-xs text-muted">{site.description}</p>
                    </div>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${site.title}`}
                      className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink transition-colors duration-200 sm:ml-6 shrink-0 self-start sm:self-auto"
                    >
                      {site.url.replace('https://', '')}
                      <ArrowUpRight size={12} className="group-hover:text-accent transition-colors" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

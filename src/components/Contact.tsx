import { motion } from 'framer-motion'
import { ExternalLink, Link, Mail, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { fadeUp, EXPO } from '../utils/animations'

interface ContactItem {
  id: string
  label: string
  value: string
  href: string
  icon: LucideIcon
}

const contacts: ContactItem[] = [
  {
    id: 'github',
    label: 'GitHub',
    value: 'muhammeidrees',
    href: 'https://github.com/muhammeidrees',
    icon: ExternalLink,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'muhammed-idreesvm',
    href: 'https://www.linkedin.com/in/muhammed-idreesvm/',
    icon: Link,
  },
  {
    id: 'email',
    label: 'Email',
    value: 'idreesmuhammed112@gmail.com',
    href: 'mailto:idreesmuhammed112@gmail.com',
    icon: Mail,
  },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-section">

        {/* Main statement */}
        <motion.h2
          {...fadeUp(0)}
          className="text-display-sm text-ink mb-6 max-w-3xl"
        >
          Have something interesting to figure out?
        </motion.h2>

        <motion.p {...fadeUp(0.15)} className="text-base text-muted leading-relaxed max-w-lg mb-14 md:mb-20">
          I'm always interested in good questions, difficult problems,
          and ideas worth exploring.
        </motion.p>

        {/* Contact links */}
        <div className="flex flex-col gap-0 max-w-xl mb-16 md:mb-24">
          {contacts.map((c, i) => (
            <motion.a
              key={c.id}
              id={`contact-${c.id}`}
              href={c.href}
              target={c.id !== 'email' ? '_blank' : undefined}
              rel={c.id !== 'email' ? 'noopener noreferrer' : undefined}
              {...fadeUp(0.1 * i + 0.2)}
              className="flex items-center gap-4 py-5 border-t border-ink/10 group last:border-b last:border-ink/10 hover:border-ink/30 transition-colors duration-300"
            >
              <c.icon size={14} className="text-muted group-hover:text-accent transition-colors shrink-0" />
              <span className="font-mono text-xs text-muted uppercase tracking-widest w-20 shrink-0">
                {c.label}
              </span>
              <span className="text-sm text-ink group-hover:text-accent transition-colors duration-300">
                {c.value}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div {...fadeUp(0.5)} className="flex items-center gap-2 mb-20 md:mb-28">
          <MapPin size={12} className="text-muted" />
          <span className="font-mono text-xs text-muted uppercase tracking-widest">Kerala, India</span>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EXPO }}
              className="text-display text-ink leading-[0.9]"
            >
              MUHAMMED
              <br />
              IDREES
              <span className="text-accent">.</span>
            </motion.h2>

            <div className="flex flex-col items-start md:items-end gap-2">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-mono text-sm text-muted italic"
              >
                "Ideas are only the beginning."
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-mono text-xs text-muted/40 uppercase tracking-widest"
              >
                © {new Date().getFullYear()} Muhammed Idrees
              </motion.p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useNavScroll } from '../hooks/useScrollAnimation'
import { EXPO } from '../utils/animations'
import { Phone } from 'lucide-react'

const PHONE_HREF = 'tel:+918129829294'
const PHONE_LABEL = '+91 81298 29294'

const navLinks = [
  { label: 'Selected Work', href: '#work' },
  { label: 'Research', href: '#research' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const scrolled = useNavScroll()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Stop the page behind the mobile menu from scrolling
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EXPO, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-ink/10 bg-bg/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-4 h-16">
          {/* Logo: name reloads the site, number starts a call */}
          <div className="flex items-center gap-6 min-w-0">
            <a
              href="/"
              className="font-mono text-xs uppercase tracking-[0.2em] text-ink font-semibold whitespace-nowrap hover:text-accent transition-colors duration-200"
            >
              Muhammed Idrees
            </a>
            <a
              href={PHONE_HREF}
              className="hidden md:inline font-mono text-xs tracking-[0.15em] text-muted whitespace-nowrap hover:text-accent transition-colors duration-200"
            >
              {PHONE_LABEL}
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile: call button + menu toggle */}
          <div className="md:hidden flex items-center gap-1 -mr-2">
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE_LABEL}`}
              className="w-11 h-11 flex items-center justify-center text-ink hover:text-accent transition-colors"
            >
              <Phone size={16} strokeWidth={1.75} />
            </a>
            <button
              id="mobile-menu-btn"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-11 h-11 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-bg pt-16 px-6 flex flex-col gap-8 md:hidden"
          >
            <div className="border-t border-ink/10 pt-10 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-2xl font-bold text-ink hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.a
              href={PHONE_HREF}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: navLinks.length * 0.08 }}
              className="border-t border-ink/10 pt-6 flex items-center gap-3 font-mono text-sm tracking-widest text-muted hover:text-ink transition-colors"
            >
              <Phone size={14} strokeWidth={1.75} />
              {PHONE_LABEL}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { profile } from '../data/data'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'coding', label: 'Coding Profiles' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`site-header fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'scrolled border-b border-line' : ''
      }`}
    >
      <nav className="container-px flex items-center justify-between h-16">
        <button
          onClick={() => handleNav('home')}
          className="font-display font-semibold text-lg tracking-tight text-ink focus-ring rounded"
        >
          <span className="text-accent-blue">&lt;</span>
          {profile.name}
          <span className="text-accent-blue">/&gt;</span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors focus-ring ${
                active === l.id
                  ? 'text-accent-blue'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-lg bg-accent-blue/10 border border-accent-blue/25"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{l.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-10 h-10 grid place-items-center rounded-xl border border-line hover:border-accent-blue/60 text-ink transition-colors focus-ring"
          >
            {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>

          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:inline-flex btn-primary !py-2.5"
          >
            <FiDownload size={15} /> Resume
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-xl border border-line text-ink focus-ring"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden container-px pb-6 flex flex-col gap-1 border-b border-line" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(var(--glass-blur))' }}>
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active === l.id ? 'text-accent-blue' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {l.label}
            </button>
          ))}
          <a href={profile.resumeUrl} download className="btn-primary justify-center mt-2">
            <FiDownload size={15} /> Download Resume
          </a>
        </div>
      )}
    </header>
  )
}

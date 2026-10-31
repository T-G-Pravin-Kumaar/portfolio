import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/data'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-px flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-mono text-xs text-ink-muted">
          © {new Date().getFullYear()} {profile.name} — Built with React &amp; Tailwind CSS
        </p>
        <div className="flex gap-4">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-muted hover:text-accent-blue transition-colors">
            <FiMail size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-muted hover:text-accent-blue transition-colors">
            <FiLinkedin size={17} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-muted hover:text-accent-blue transition-colors">
            <FiGithub size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}

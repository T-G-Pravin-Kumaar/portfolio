import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { profile } from '../data/data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire this up to EmailJS / Formspree / your backend of choice.
    // For now this just simulates a successful send.
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="container-px grid lg:grid-cols-[1fr_1.3fr] gap-14">
        <div>
          <SectionHeading index="08" label="Contact" title="Let's build something" />
          <p className="text-ink-muted text-sm sm:text-base leading-relaxed mt-5 max-w-sm">
            Have an internship or full-time opening, or just want to talk tech?
            My inbox is open — reach out through the form or connect directly below.
          </p>

          <div className="flex gap-3 mt-8">
            <motion.a
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${profile.email}`}
              aria-label="Email me"
              title="Email me"
              className="w-12 h-12 grid place-items-center rounded-xl border border-line hover:border-accent-blue/60 hover:text-accent-blue text-ink transition-colors"
            >
              <FiMail size={19} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-12 h-12 grid place-items-center rounded-xl border border-line hover:border-accent-blue/60 hover:text-accent-blue text-ink transition-colors"
            >
              <FiLinkedin size={19} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="w-12 h-12 grid place-items-center rounded-xl border border-line hover:border-accent-blue/60 hover:text-accent-blue text-ink transition-colors"
            >
              <FiGithub size={19} />
            </motion.a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="card p-8 space-y-5"
        >
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              Name
            </label>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full mt-2 bg-surface-alt border border-line rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus-ring"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full mt-2 bg-surface-alt border border-line rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus-ring"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              Message
            </label>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about the role or opportunity..."
              className="w-full mt-2 bg-surface-alt border border-line rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus-ring resize-none"
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            {sent ? (
              <>
                <FiCheck size={16} /> Message noted
              </>
            ) : (
              <>
                <FiSend size={15} /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMaximize2 } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import Modal from './Modal'
import { about } from '../data/data'

export default function About() {
  const [open, setOpen] = useState(false)

  return (
    <section id="about" className="py-16 lg:py-20">
      <div className="container-px">
        <SectionHeading index="01" label="About" title="Who I am" />

        <div className="mt-10 grid lg:grid-cols-[0.9fr_1.4fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto lg:mx-0 w-full max-w-sm"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-grad-brand opacity-20 blur-2xl" />
            {about.photo && (
              <img
                src={about.photo}
                alt="Pravin Kumaar"
                className="relative w-full aspect-[4/5] object-cover rounded-[1.75rem] border border-line shadow-card"
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="card p-8 sm:p-10"
          >
            <p className="font-display text-lg font-semibold text-ink">T G Pravin Kumaar</p>
            <p className="font-mono text-xs text-accent-blue mt-1">Full Stack Developer</p>

            <p className="text-ink text-base sm:text-lg leading-relaxed mt-5">
              {about.paragraph}
            </p>

            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-violet transition-colors mt-3 focus-ring rounded"
            >
              Soft skills &amp; more <FiMaximize2 size={13} />
            </button>

            <div className="mt-6 pt-6 border-t border-line">
              <p className="text-xs font-mono uppercase tracking-widest text-accent-blue mb-2">
                Technical Skills
              </p>
              <p className="font-mono text-sm text-ink-muted leading-7">{about.techLine}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-line">
              <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
                {about.openTo}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} eyebrow="About" title="T G Pravin Kumaar">
        <div className="flex items-start gap-4 mb-5">
          {about.photo && (
            <img
              src={about.photo}
              alt="Pravin Kumaar"
              className="w-16 h-16 rounded-xl object-cover border border-line shrink-0"
            />
          )}
          <p className="font-mono text-sm text-accent-blue">Full Stack Developer | Java Programmer | Problem Solver</p>
        </div>
        <p className="text-ink text-base leading-relaxed">{about.paragraph}</p>

        <div className="mt-6 pt-6 border-t border-line">
          <p className="text-xs font-mono uppercase tracking-widest text-accent-blue mb-2">
            Technical Skills
          </p>
          <p className="font-mono text-sm text-ink-muted leading-7">{about.techLine}</p>
        </div>

        {about.softSkills?.length > 0 && (
          <div className="mt-6 pt-6 border-t border-line">
            <p className="text-xs font-mono uppercase tracking-widest text-accent-blue mb-3">
              Soft Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {about.softSkills.map((s) => (
                <span key={s} className="tag normal-case">{s}</span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-line">
          <p className="text-ink-muted text-sm sm:text-base leading-relaxed">{about.openTo}</p>
        </div>
      </Modal>
    </section>
  )
}

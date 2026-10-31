import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiMaximize2 } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import Modal from './Modal'
import { projects } from '../data/data'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="py-16 lg:py-20">
      <div className="container-px">
        <SectionHeading index="03" label="Projects" title="Things I've built" />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 1, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card overflow-hidden flex flex-col"
            >
              <div className="aspect-video bg-surface-alt border-b border-line flex items-center justify-center relative overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center px-6">
                    <p className="font-mono text-xs text-ink-muted">// preview</p>
                    <p className="font-display text-xl text-ink mt-1">{p.title}</p>
                    <p className="text-xs text-ink-muted mt-1">Add a screenshot in src/assets</p>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                <p className="font-mono text-xs text-accent-blue mt-1">{p.subtitle}</p>
                <p className="text-ink-muted text-sm leading-relaxed mt-3 line-clamp-3">{p.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f} className="text-sm text-ink-muted flex items-start gap-2">
                      <span className="text-accent-blue mt-1">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setActiveProject(p)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-violet transition-colors mt-3 focus-ring rounded self-start"
                >
                  View full details <FiMaximize2 size={13} />
                </button>

                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="flex gap-3 mt-6 pt-6 border-t border-line">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary flex-1 justify-center !py-2.5">
                      <FiExternalLink size={15} /> Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn-secondary flex-1 justify-center !py-2.5">
                      <FiGithub size={15} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Modal
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
        eyebrow={activeProject?.subtitle}
        title={activeProject?.title || ''}
      >
        {activeProject && (
          <>
            <p className="text-ink text-base leading-relaxed">{activeProject.description}</p>

            <div className="mt-6">
              <p className="text-xs font-mono uppercase tracking-widest text-accent-blue mb-3">
                Features
              </p>
              <ul className="space-y-2">
                {activeProject.features.map((f) => (
                  <li key={f} className="text-sm text-ink-muted flex items-start gap-2">
                    <span className="text-accent-blue mt-1">▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-xs font-mono uppercase tracking-widest text-accent-blue mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-7 pt-6 border-t border-line">
              {activeProject.live && (
                <a href={activeProject.live} target="_blank" rel="noreferrer" className="btn-primary flex-1 justify-center !py-2.5">
                  <FiExternalLink size={15} /> Live Demo
                </a>
              )}
              {activeProject.github && (
                <a href={activeProject.github} target="_blank" rel="noreferrer" className="btn-secondary flex-1 justify-center !py-2.5">
                  <FiGithub size={15} /> Code
                </a>
              )}
            </div>
          </>
        )}
      </Modal>
    </section>
  )
}

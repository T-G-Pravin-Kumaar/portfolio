import { motion } from 'framer-motion'
import { FiAward, FiExternalLink, FiBookOpen } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { certifications, publications } from '../data/data'

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 lg:py-20">
      <div className="container-px">
        <SectionHeading index="06" label="Certifications" title="Credentials" />

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 1, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card p-7 flex items-start gap-4"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-accent-pink/10 border border-accent-pink/30 grid place-items-center text-accent-pink">
                <FiAward size={19} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-ink">{c.title}</h3>
                <p className="text-ink-muted text-sm mt-1">{c.issuer}</p>
                <p className="font-mono text-xs text-accent-blue mt-1">{c.date}</p>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent-blue mt-3 hover:underline"
                  >
                    View certificate <FiExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {publications?.length > 0 && (
          <div className="mt-14">
            <p className="font-mono text-xs uppercase tracking-widest text-accent-violet mb-5">
              Publication
            </p>
            <div className="space-y-4 max-w-3xl">
              {publications.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 1, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="card p-7 flex items-start gap-4"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-accent-blue/10 border border-accent-blue/30 grid place-items-center text-accent-blue">
                    <FiBookOpen size={19} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                    <p className="text-ink-muted text-sm mt-1 leading-relaxed">{p.venue}</p>
                    <p className="font-mono text-xs text-accent-pink mt-1">{p.date}</p>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent-blue mt-3 hover:underline"
                      >
                        Read publication <FiExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

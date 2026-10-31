import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { education } from '../data/data'

export default function Education() {
  return (
    <section id="education" className="py-16 lg:py-20">
      <div className="container-px">
        <SectionHeading index="05" label="Education" title="Academic background" />

        <div className="mt-12 max-w-3xl space-y-6">
          {education.map((e, i) => (
            <motion.div
              key={e.institute}
              initial={{ opacity: 1, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card p-7 flex flex-col sm:flex-row gap-5"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-accent-blue/10 border border-accent-blue/30 grid place-items-center text-accent-blue">
                <FiBookOpen size={19} />
              </div>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-accent-pink">{e.period}</p>
                  <h3 className="font-display text-lg font-semibold text-ink mt-1">
                    {e.degree}
                  </h3>
                  <p className="text-ink-muted text-sm mt-1">{e.institute}</p>
                  {e.detail && (
                    <p className="text-ink-muted text-sm leading-relaxed mt-2">{e.detail}</p>
                  )}
                </div>
                {e.stat && (
                  <div className="shrink-0 rounded-xl border border-line bg-surface-alt px-4 py-3 text-center sm:min-w-[9rem]">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                      {e.stat.label}
                    </p>
                    <p className="font-display text-lg font-semibold text-gradient mt-0.5">
                      {e.stat.value}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

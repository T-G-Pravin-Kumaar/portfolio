import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { experience } from '../data/data'

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-20">
      <div className="container-px">
        <SectionHeading index="04" label="Experience" title="Learning journey" />

        <div className="mt-12 relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-10">
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 1, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative pl-9"
              >
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-canvas border-2 border-accent-blue" />
                <p className="font-mono text-xs text-accent-pink">{item.period}</p>
                <h3 className="font-display text-lg font-semibold text-ink mt-1">
                  {item.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

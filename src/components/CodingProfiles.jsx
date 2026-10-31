import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import SectionHeading from './SectionHeading'
import { codingProfiles } from '../data/data'

const iconMap = { GitHub: FiGithub, LeetCode: SiLeetcode }

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-16 lg:py-20">
      <div className="container-px">
        <SectionHeading index="07" label="Coding Profiles" title="Where I practice & build" />

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl">
          {codingProfiles.map((p, i) => {
            const Icon = iconMap[p.name] || FiGithub
            return (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 1, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card p-7 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-accent-blue/10 border border-accent-blue/30 grid place-items-center text-accent-blue">
                    <Icon size={20} />
                  </div>
                  <FiArrowUpRight
                    size={18}
                    className="text-ink-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink mt-4">{p.name}</h3>
                <p className="font-mono text-xs text-accent-pink mt-1">@{p.handle}</p>
                <p className="text-ink-muted text-sm leading-relaxed mt-2">{p.description}</p>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

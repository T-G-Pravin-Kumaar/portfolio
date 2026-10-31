import {
  SiJavascript, SiHtml5, SiReact, SiBootstrap, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiGit, SiGithub, SiPostman,
} from 'react-icons/si'
import { FaJava, FaCode, FaCss3Alt } from 'react-icons/fa6'
import { TbApi, TbBrandVscode } from 'react-icons/tb'
import { BsDiagram3 } from 'react-icons/bs'
import SectionHeading from './SectionHeading'
import { skills } from '../data/data'

const iconMap = {
  Java: FaJava,
  JavaScript: SiJavascript,
  C: FaCode,
  HTML5: SiHtml5,
  CSS3: FaCss3Alt,
  'React.js': SiReact,
  Bootstrap: SiBootstrap,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': TbBrandVscode,
  Postman: SiPostman,
  OOP: BsDiagram3,
  'REST APIs': TbApi,
  'Data Structures & Algorithms': FaCode,
}

const colorByCategory = {
  'Programming Languages': 'text-accent-blue',
  Frontend: 'text-accent-violet',
  Backend: 'text-accent-pink',
  Database: 'text-accent-blue',
  Tools: 'text-accent-violet',
  Concepts: 'text-accent-pink',
  'Design & Testing': 'text-accent-blue',
}

const allSkills = skills.flatMap((group) =>
  group.items.map((item) => ({ item, category: group.category }))
)

function SkillCard({ item, category }) {
  const Icon = iconMap[item] || FaCode
  return (
    <div
      className={`card flex items-center gap-3 px-6 py-4 shrink-0 ${colorByCategory[category]}`}
    >
      <Icon size={26} className="shrink-0" />
      <div className="text-left">
        <p className="font-display text-sm font-semibold text-ink whitespace-nowrap">{item}</p>
        <p className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">{category}</p>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-20">
      <div className="container-px">
        <SectionHeading index="02" label="Skills" title="What I work with" />
      </div>

      <div className="mt-10 marquee-edge-fade">
        <div className="marquee-row overflow-hidden">
          <div className="marquee-track flex w-max gap-4 py-2">
            {[...allSkills, ...allSkills].map((s, i) => (
              <SkillCard key={`${s.item}-${i}`} item={s.item} category={s.category} />
            ))}
          </div>
        </div>
      </div>

      <div className="container-px">
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 justify-center font-mono text-xs text-ink-muted">
          {skills.map((g) => (
            <span key={g.category} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${colorByCategory[g.category].replace('text-', 'bg-')}`} />
              {g.category}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

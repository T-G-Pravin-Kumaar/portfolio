import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload, FiArrowUpRight } from 'react-icons/fi'
import { profile, about } from '../data/data'

export default function Hero() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="aurora-blob -top-32 right-0 w-[36rem] h-[36rem] bg-accent-blue/15" />
      <div className="aurora-blob bottom-0 left-0 w-[28rem] h-[28rem] bg-accent-violet/15" style={{ animationDelay: '3s' }} />
      <div className="aurora-blob top-1/3 left-1/2 w-[20rem] h-[20rem] bg-accent-pink/10" style={{ animationDelay: '6s' }} />

      <div className="container-px grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">// welcome</p>
          <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold mt-3 leading-[1.1] text-ink">
            Hi, I'm <span className="text-gradient">T G Pravin Kumaar</span>{' '}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 18, -8, 18, 0] }}
              transition={{ duration: 1.4, delay: 0.8, repeat: Infinity, repeatDelay: 3.5 }}
            >
              👋
            </motion.span>
          </h1>
          <p className="mt-4 font-mono text-accent-blue text-base sm:text-lg">
            {profile.role}
          </p>
          <p className="mt-6 text-ink-muted text-base sm:text-lg leading-relaxed max-w-xl">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={profile.resumeUrl} download className="btn-primary">
              <FiDownload size={16} /> Download Resume
            </a>
            <a href="#contact" onClick={(e)=>{e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="btn-secondary">
              Contact Me <FiArrowUpRight size={15} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <FiGithub size={16} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              <FiLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto"
          style={{ perspective: 800 }}
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="animate-float relative w-64 sm:w-80"
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-grad-brand opacity-30 blur-2xl" />
            {about.photo && (
              <img
                src={about.photo}
                alt="Pravin Kumaar"
                className="relative w-full aspect-[4/5] object-cover rounded-[1.75rem] border border-line shadow-card"
              />
            )}
            <div className="absolute -bottom-5 -right-5 card px-4 py-3">
              <p className="font-mono text-[11px] text-ink-muted">status</p>
              <p className="font-mono text-sm text-accent-blue mt-0.5">open_to_work</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

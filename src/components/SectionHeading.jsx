import { motion } from 'framer-motion'

export default function SectionHeading({ index, label, title, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'text-center' : ''}
    >
      <p className="section-eyebrow">{`// ${index}  ${label}`}</p>
      <h2 className="section-title">{title}</h2>
    </motion.div>
  )
}

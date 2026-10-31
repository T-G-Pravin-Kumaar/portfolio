import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

export default function Modal({ open, onClose, title, eyebrow, children }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-start justify-between gap-4 px-6 sm:px-8 pt-6 pb-4 border-b border-line bg-inherit z-10">
              <div>
                {eyebrow && (
                  <p className="font-mono text-xs tracking-widest uppercase text-accent-violet">
                    {eyebrow}
                  </p>
                )}
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mt-1">
                  {title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 w-9 h-9 grid place-items-center rounded-xl border border-line text-ink hover:border-accent-blue/60 hover:text-accent-blue transition-colors focus-ring"
              >
                <FiX size={18} />
              </button>
            </div>
            <div className="px-6 sm:px-8 py-6 text-ink">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

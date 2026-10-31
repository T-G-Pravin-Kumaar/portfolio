import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-canvas"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display text-xl sm:text-2xl font-semibold text-gradient"
            >
              &lt;T G Pravin Kumaar/&gt;
            </motion.p>
            <div className="w-40 h-[3px] rounded-full bg-surface-alt overflow-hidden">
              <motion.div
                className="h-full bg-grad-brand"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

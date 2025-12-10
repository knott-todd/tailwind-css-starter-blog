import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FlipWords({
  words = ['blog', 'portfolio', 'makerspace'],
  duration = 3000,
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, duration)
    return () => clearInterval(interval)
  }, [words.length, duration])

  return (
    <span className="relative inline-flex h-[1.2em] w-[10ch] items-center overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.span
          key={words[index]}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '100%', opacity: 0, position: 'absolute' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="inline-block font-semibold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

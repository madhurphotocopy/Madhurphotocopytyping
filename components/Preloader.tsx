'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LETTERS = ['M','A','D','H','U','R']
const LINE2 = 'PHOTOCOPY & TYPING'.split('')

export default function Preloader() {
  const [phase, setPhase] = useState<'drawing' | 'filling' | 'exiting' | 'done'>('drawing')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('filling'),  2200)
    const t2 = setTimeout(() => setPhase('exiting'),  3400)
    const t3 = setTimeout(() => setPhase('done'),     4200)

    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + 1.2
      })
    }, 40)

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      clearInterval(interval)
    }
  }, [])

  if (phase === 'done') return null

  const isFilling = phase === 'filling' || phase === 'exiting'

  // MADHUR: 6 letters, each ~110px wide = 660px total
  // Centre in 800 viewBox: start x = (800 - 660) / 2 + 55 = 125
  const L1_START_X = 125
  const L1_STEP    = 110

  // PHOTOCOPY & TYPING: 18 chars, each ~38px wide = 684px total
  // Centre: start x = (800 - 684) / 2 + 19 = 77
  const L2_START_X = 58
  const L2_STEP    = 38

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        animate={phase === 'exiting' ? { opacity: 0, scale: 1.05 } : { opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0906] overflow-hidden"
      >
        {/* Ambient glow */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '70vw', height: '40vh',
            background: 'radial-gradient(ellipse, rgba(200,67,10,0.15) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* SVG */}
        <div className="relative w-full px-6 md:px-16 max-w-4xl">
          <svg
            viewBox="0 0 800 210"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            style={{
              filter: isFilling
                ? 'drop-shadow(0 0 24px rgba(200,67,10,0.7)) drop-shadow(0 0 8px rgba(232,169,35,0.4))'
                : 'none',
              transition: 'filter 1s ease',
            }}
          >
            <defs>
              <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#f4a34b" />
                <stop offset="45%"  stopColor="#c8430a" />
                <stop offset="100%" stopColor="#e8a923" />
              </linearGradient>
              <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#ffffff" />
                <stop offset="100%" stopColor="#faf0e8" />
              </linearGradient>
            </defs>

            {/* ── LINE 1: M A D H U R — centred ── */}
            {LETTERS.map((letter, i) => {
              const cx = L1_START_X + i * L1_STEP
              return (
                <g key={letter + i}>
                  {/* fill layer */}
                  <motion.text
                    x={cx} y="110"
                    textAnchor="middle"
                    fontFamily="Georgia, 'Playfair Display', serif"
                    fontSize="115"
                    fontWeight="900"
                    fill="url(#fg)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isFilling ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                  >{letter}</motion.text>
                  {/* stroke layer */}
                  <motion.text
                    x={cx} y="110"
                    textAnchor="middle"
                    fontFamily="Georgia, 'Playfair Display', serif"
                    fontSize="115"
                    fontWeight="900"
                    fill="none"
                    stroke="url(#sg)"
                    strokeWidth="1.5"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >{letter}</motion.text>
                </g>
              )
            })}

            {/* ── LINE 2: PHOTOCOPY & TYPING — centred ── */}
            {LINE2.map((char, i) => {
              const cx = L2_START_X + i * L2_STEP
              return (
                <g key={i}>
                  {/* fill layer */}
                  <motion.text
                    x={cx} y="178"
                    fontFamily="Georgia, 'Playfair Display', serif"
                    fontSize="36"
                    fontWeight="700"
                    fill="url(#fg)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isFilling ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
                  >{char}</motion.text>
                  {/* stroke layer */}
                  <motion.text
                    x={cx} y="178"
                    fontFamily="Georgia, 'Playfair Display', serif"
                    fontSize="36"
                    fontWeight="700"
                    fill="none"
                    stroke="url(#sg)"
                    strokeWidth="0.8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.65 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                  >{char}</motion.text>
                </g>
              )
            })}
          </svg>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: isFilling ? 0.45 : 0, y: isFilling ? 0 : 6 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center mt-2 text-xs tracking-[0.45em] uppercase text-[#c8430a]"
          >
            Indore &nbsp;·&nbsp; Annapurna Road
          </motion.p>
        </div>

        {/* Progress bar — centred */}
        <div className="absolute bottom-10 w-40 h-[2px] bg-white/8 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #c8430a, #e8a923)',
            }}
          />
        </div>

        {/* Corner accent dots */}
        {['top-8 left-8','top-8 right-8','bottom-8 left-8','bottom-8 right-8'].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} w-1 h-1 rounded-full bg-[#c8430a]`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
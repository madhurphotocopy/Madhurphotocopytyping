'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin, Star } from 'lucide-react'
import gsap from 'gsap'

const services = ['Photocopy', 'Printing', 'Typing', 'Scanning', 'Lamination', 'Graphic Design', 'Photo Editing', 'Video Editing']

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // GSAP word-by-word reveal on mount
  useEffect(() => {
    if (!titleRef.current) return

    const words = titleRef.current.querySelectorAll('.word')
    gsap.fromTo(
      words,
      { y: 80, opacity: 0, rotateX: -40 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
        delay: 0.3,
      }
    )
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (!el) return
    const lenis = (window as any).lenis
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 })
    else el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white border border-[#e5e2d9] rounded-full px-4 py-2 mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
              <span className="text-xs font-semibold text-muted tracking-wide uppercase">Indore's Trusted Shop</span>
            </motion.div>

            {/* Title */}
            <div className="overflow-hidden mb-6" style={{ perspective: '800px' }}>
              <h1
                ref={titleRef}
                className="font-display font-black text-5xl md:text-6xl xl:text-7xl leading-[1.08] text-ink"
              >
                {['Your', 'Document', '&'].map((w, i) => (
                  <span key={i} className="word inline-block mr-[0.25em] opacity-0">{w}</span>
                ))}
                <br />
                {['Design'].map((w, i) => (
                  <span key={i} className="word inline-block mr-[0.25em] opacity-0 gradient-text">{w}</span>
                ))}
                <br />
                {['Partner.'].map((w, i) => (
                  <span key={i} className="word inline-block mr-[0.25em] opacity-0">{w}</span>
                ))}
              </h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg text-muted font-light leading-relaxed max-w-md mb-10"
            >
              From quick photocopies to professional video editing —{' '}
              <span className="font-medium text-ink">Madhur Photocopy&amp; Typing</span>{' '}
              delivers quality work, on time, every time.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <button
                onClick={() => scrollTo('#services')}
                className="group flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-accent/25"
              >
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollTo('#location')}
                className="flex items-center gap-2 border border-[#e5e2d9] text-ink2 px-7 py-3.5 rounded-full font-medium hover:border-accent/40 hover:bg-accent-light transition-all duration-300"
              >
                <MapPin size={16} />
                Find Us
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex gap-10 pt-8 border-t border-[#e5e2d9]"
            >
              {[
                { num: '5.0★', label: 'Google Rating' },
                { num: '14+', label: 'Happy Reviews' },
                { num: '8', label: 'Services' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-black text-ink">{s.num}</div>
                  <div className="text-xs text-muted mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – floating card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block relative"
          >
            {/* Main card */}
            <div className="bg-white/80 backdrop-blur-xl border border-[#e5e2d9] rounded-3xl p-8 shadow-2xl shadow-black/5 relative z-10">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-ink">5.0</span>
                <span className="text-sm text-muted">• 14 reviews</span>
              </div>

              <p className="font-display font-bold text-xl text-ink mb-1">Madhur Photocopy&amp; Typing</p>
              <p className="text-sm text-muted mb-6 flex items-center gap-1">
                <MapPin size={13} />
                LG-1, Annapurna Regency, Indore
              </p>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2">
                {services.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.07 }}
                    className="text-xs font-medium bg-surface border border-[#e5e2d9] rounded-full px-3 py-1.5 text-ink2"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Floating open badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-[#0f7d6e] text-white rounded-2xl px-4 py-2.5 text-sm font-semibold shadow-lg z-20 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
              Open 9:30 – 7:00 PM
            </motion.div>

            {/* Floating rating chip */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-gold text-white rounded-2xl px-4 py-2.5 shadow-lg z-20 flex items-center gap-2 text-sm font-bold"
            >
              <Star size={14} fill="white" />
              Perfect 5 Star
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-muted to-transparent"
        />
      </motion.div>
    </section>
  )
}

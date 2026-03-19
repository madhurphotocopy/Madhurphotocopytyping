'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Clock, Star, Layers, SmilePlus } from 'lucide-react'

const reasons = [
  { icon: Star, title: 'Perfect 5.0 Rating', desc: 'Every single customer has rated us 5 stars on Google — consistency is our superpower.' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'Simple jobs done while you wait. Larger projects delivered on schedule, every time.' },
  { icon: Layers, title: 'All Under One Roof', desc: 'Photocopy to video editing — no need to visit multiple shops. We handle everything.' },
  { icon: SmilePlus, title: 'Friendly & Professional', desc: 'Well-behaved, patient, and genuinely helpful. Customers keep coming back for a reason.' },
]

const hours = [
  { day: 'Monday',    time: '9:30 AM – 7:00 PM' },
  { day: 'Tuesday',   time: '9:30 AM – 7:00 PM' },
  { day: 'Wednesday', time: '9:30 AM – 7:00 PM' },
  { day: 'Thursday',  time: '9:30 AM – 7:00 PM' },
  { day: 'Friday',    time: '9:30 AM – 7:00 PM' },
  { day: 'Saturday',  time: '9:30 AM – 7:00 PM' },
  { day: 'Sunday',    time: 'Closed', closed: true },
]

const marqueeItems = ['Photocopy', 'Typing', 'Scanning', 'Lamination', 'Graphic Design', 'Photo Editing', 'Video Editing', 'Form Filling', 'Best in Indore', '5 Star Rated']

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section id="why" ref={sectionRef} className="relative bg-[#0f0e0c] text-white overflow-hidden">

      {/* Parallax BG blob */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-gold/6 blur-3xl" />
      </motion.div>

      {/* Marquee strip */}
      <div className="overflow-hidden border-b border-white/5 py-5 bg-accent/5">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-6 text-sm font-semibold text-white/60 whitespace-nowrap">
              {item}
              <span className="w-1 h-1 rounded-full bg-accent/60" />
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-28">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left – reasons */}
          <div>
            <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Why Choose Us</p>
            <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-12">
              Quality, Speed<br />&amp; Trust
            </h2>

            <div className="flex flex-col gap-10">
              {reasons.map((r, i) => {
                const Icon = r.icon
                return (
                  <motion.div
                    key={r.title}
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-white mb-1.5">{r.title}</h3>
                      <p className="text-sm text-white/45 leading-relaxed">{r.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right – hours */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4ec9b8] animate-pulse" />
                <span className="text-sm font-semibold text-[#4ec9b8]">Open 6 Days a Week</span>
              </div>

              <p className="text-xs font-bold tracking-widest text-white/30 uppercase mb-5">Business Hours</p>

              <div className="flex flex-col">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center py-3.5 ${i < hours.length - 1 ? 'border-b border-white/5' : ''}`}
                  >
                    <span className="text-sm text-white/50">{h.day}</span>
                    <span className={`text-sm font-medium ${h.closed ? 'text-accent/70' : 'text-white'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

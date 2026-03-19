'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Dr. Dheeraj Hasija',
    meta: 'Local Guide · 62 reviews',
    initials: 'DH',
    color: '#1a56a6',
    text: '"Best services, time saving, well behaved, pre-appointment. Best place!"',
    stars: 5,
  },
  {
    name: 'Sunil Hlrve',
    meta: 'Google Review',
    initials: 'SH',
    color: '#0f7d6e',
    text: '"Very good job. Professional and quick service. Highly recommended to everyone."',
    stars: 5,
  },
  {
    name: 'Rajendra Bharti',
    meta: 'Google Review',
    initials: 'RB',
    color: '#7c3aed',
    text: '"उत्कृष्ट सेवाएं और उत्तम व्यवहार। Excellent services and outstanding behaviour."',
    stars: 5,
  },
  {
    name: 'Google Customer',
    meta: 'Google Review',
    initials: 'GC',
    color: '#d97706',
    text: '"Printouts in good quality both colour and B&W. Very satisfied every time."',
    stars: 5,
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 px-6 md:px-12 bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Customer Reviews</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-ink leading-tight mb-6">
            What People Are Saying
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={22} className="fill-gold text-gold" />)}
          </div>
          <p className="text-muted text-sm">5.0 out of 5 — Based on 14 Google reviews</p>
        </div>

        {/* Overall rating bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-1 bg-gradient-to-r from-accent via-gold to-accent rounded-full mb-16 origin-left"
        />

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-[#e5e2d9] rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 transition-all duration-400 group"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(r.stars)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-ink2 leading-relaxed italic mb-6 flex-1">{r.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ background: r.color }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{r.name}</div>
                  <div className="text-xs text-muted">{r.meta}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.google.com/maps/place/Madhur+Photocopy+%26+Typing/@22.6954925,75.8362366,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fc4c54f7461f:0x3201d90d5c336f7!8m2!3d22.6954925!4d75.8388115!16s%2Fg%2F11xjbvbhq?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            View all reviews on Google Maps →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
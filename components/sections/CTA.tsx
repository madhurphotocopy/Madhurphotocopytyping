'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, MessageCircle } from 'lucide-react'

const MAPS_URL = "https://www.google.com/maps/place/Madhur+Photocopy+%26+Typing/@22.6954925,75.8362366,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fc4c54f7461f:0x3201d90d5c336f7!8m2!3d22.6954925!4d75.8388115!16s%2Fg%2F11xjbvbhq?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
const PHONE_HREF = 'tel:+919424512228'
const PHONE_LABEL = '+91 94245 12228'
const WHATSAPP_HREF = 'https://wa.me/9424512228'

export default function CTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      animId = requestAnimationFrame(draw)
      t += 0.008
      const w = canvas!.width
      const h = canvas!.height
      ctx!.clearRect(0, 0, w, h)
      const blobs = [
        { x: w * (0.3 + 0.2 * Math.sin(t * 0.7)), y: h * (0.4 + 0.2 * Math.cos(t * 0.5)), r: w * 0.45, color: 'rgba(200,67,10,0.18)' },
        { x: w * (0.7 + 0.15 * Math.cos(t * 0.6)), y: h * (0.5 + 0.15 * Math.sin(t * 0.8)), r: w * 0.35, color: 'rgba(232,169,35,0.14)' },
        { x: w * (0.5 + 0.2 * Math.sin(t * 0.4)), y: h * (0.3 + 0.25 * Math.cos(t * 0.9)), r: w * 0.3, color: 'rgba(244,163,75,0.12)' },
      ]
      blobs.forEach(blob => {
        const grad = ctx!.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r)
        grad.addColorStop(0, blob.color)
        grad.addColorStop(1, 'transparent')
        ctx!.fillStyle = grad
        ctx!.beginPath()
        ctx!.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2)
        ctx!.fill()
      })
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
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
      id="cta"
      className="relative py-36 px-6 md:px-12 bg-[#0f0e0c] text-white overflow-hidden"
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Giant bg letter */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span className="font-display font-black text-[30vw] leading-none text-white/[0.025]">M</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-bold tracking-widest text-accent uppercase mb-4">Ready?</p>
          <h2 className="font-display font-black text-4xl md:text-6xl leading-tight mb-6">
            Get Your Work Done<br />
            <span className="gradient-text">Today.</span>
          </h2>
          <p className="text-white/50 text-lg font-light mb-12 max-w-lg mx-auto">
            Visit us at Annapurna Road — quality service, friendly staff, and guaranteed satisfaction awaits you.
          </p>

          {/* Row 1: Directions + Services */}
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-bold text-base shadow-2xl hover:shadow-white/20 transition-shadow duration-300"
            >
              <MapPin size={18} />
              Get Directions
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>

            <motion.button
              onClick={() => scrollTo('#services')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-medium text-base hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              View All Services
            </motion.button>
          </div>

          {/* Row 2: Call + WhatsApp */}
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.a
              href={PHONE_HREF}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-white/20 transition-all duration-300"
            >
              <Phone size={15} />
              {PHONE_LABEL}
            </motion.a>

            <motion.a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] px-6 py-3 rounded-full font-medium text-sm hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <MessageCircle size={15} />
              WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
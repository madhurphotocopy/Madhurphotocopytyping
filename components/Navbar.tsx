'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText, Phone, MessageCircle } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Our Story', href: '#timeline' },
  { label: 'Why Us', href: '#why' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Find Us', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) {
      // Use lenis if available
      const lenis = (window as any).lenis
      if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 })
      else el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-[#e5e2d9]'
            : 'bg-transparent'
        }`}
      >
        {/* Brand */}
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <FileText size={16} className="text-white" />
          </div>
          <span className="font-display font-bold text-[1.05rem] text-ink">Madhur</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium text-muted hover:text-accent transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://www.google.com/maps/place/Madhur+Photocopy+%26+Typing/@22.6954925,75.8362366,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fc4c54f7461f:0x3201d90d5c336f7!8m2!3d22.6954925!4d75.8388115!16s%2Fg%2F11xjbvbhq?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
        >
          Get Directions
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-ink p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[#e5e2d9] px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left text-base font-medium text-ink2 hover:text-accent transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="https://www.google.com/maps/place/Madhur+Photocopy+%26+Typing/@22.6954925,75.8362366,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fc4c54f7461f:0x3201d90d5c336f7!8m2!3d22.6954925!4d75.8388115!16s%2Fg%2F11xjbvbhq?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-accent text-white px-5 py-3 rounded-full text-sm font-semibold"
            >
              Get Directions →
            </a>
            <div className="flex flex-col gap-2 pt-1">
              <a href="tel:" className="flex items-center gap-2 text-sm font-semibold text-accent"><Phone size={14} /></a>
              <a href="tel:+919424512228" className="flex items-center gap-2 text-sm font-semibold text-accent"><Phone size={14} />+91 94245 12228</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
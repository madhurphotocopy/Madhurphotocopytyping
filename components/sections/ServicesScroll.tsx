'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Copy, Type, Scan, Layers, Palette, Image, Video, FileCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Copy,
    name: 'Photocopy & Printing',
    desc: 'High-quality B&W and colour printing for all your document needs.',
    features: ['Colour & B&W', 'Bulk copying', 'A4, A3 & legal', 'Fast turnaround'],
    color: 'from-orange-50 to-red-50',
    accent: '#c8430a',
    num: '01',
  },
  {
    icon: Type,
    name: 'Typing & Document Work',
    desc: 'Professional Hindi & English typing for official and personal documents.',
    features: ['Hindi & English', 'Govt applications', 'Affidavits & letters', 'Accurate & fast'],
    color: 'from-blue-50 to-indigo-50',
    accent: '#1a56a6',
    num: '02',
  },
  {
    icon: Scan,
    name: 'Scanning',
    desc: 'High-resolution scanning for documents, certificates, and photos.',
    features: ['High resolution', 'PDF & image', 'Digitisation', 'Email delivery'],
    color: 'from-teal-50 to-emerald-50',
    accent: '#0f7d6e',
    num: '03',
  },
  {
    icon: Layers,
    name: 'Lamination',
    desc: 'Protect documents, ID cards, and certificates with professional lamination.',
    features: ['Gloss & matte', 'All sizes', 'ID cards & certs', 'Neat & durable'],
    color: 'from-violet-50 to-purple-50',
    accent: '#7c3aed',
    num: '04',
  },
  {
    icon: Palette,
    name: 'Graphic Design',
    desc: 'Creative design for cards, banners, pamphlets, logos, and marketing material.',
    features: ['Business cards', 'Banners & flyers', 'Logo design', 'Social media'],
    color: 'from-amber-50 to-yellow-50',
    accent: '#d97706',
    num: '05',
  },
  {
    icon: Image,
    name: 'Photo Editing',
    desc: 'Professional retouching, background removal and passport photo printing.',
    features: ['Retouching', 'BG removal', 'Colour correct', 'Passport photos'],
    color: 'from-pink-50 to-rose-50',
    accent: '#be185d',
    num: '06',
  },
  {
    icon: Video,
    name: 'Video Editing',
    desc: 'Professional editing for reels, events, weddings and personal projects.',
    features: ['Wedding videos', 'Reels & shorts', 'Transitions', 'Fast delivery'],
    color: 'from-sky-50 to-blue-50',
    accent: '#0369a1',
    num: '07',
  },
  {
    icon: FileCheck,
    name: 'Form Filling & Govt Docs',
    desc: 'Expert assistance with government forms and official documentation.',
    features: ['Online forms', 'Aadhaar & PAN', 'Applications', 'Quick & accurate'],
    color: 'from-green-50 to-teal-50',
    accent: '#15803d',
    num: '08',
  },
]

export default function ServicesScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      // Horizontal scroll pin
      const totalScroll = track.scrollWidth - window.innerWidth + 80

      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${totalScroll + window.innerHeight}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Cards entrance
      gsap.fromTo(
        '.service-card-item',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="pin-section bg-white">
      <div ref={trackRef} className="flex items-stretch h-screen pl-8 md:pl-16 gap-6 pr-16" style={{ width: 'max-content' }}>

        {/* Sticky label */}
        <div className="flex flex-col justify-center min-w-[280px] md:min-w-[360px] pr-8">
          <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">What We Offer</p>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight text-ink mb-4">
            All Services.<br />One Place.
          </h2>
          <p className="text-muted text-base font-light leading-relaxed">
            Scroll horizontally through everything we offer — your one-stop document and creative hub in Indore.
          </p>
          <div className="mt-8 flex items-center gap-2 text-muted text-sm">
            <span>Scroll right</span>
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="text-accent"
            >→</motion.span>
          </div>
        </div>

        {/* Cards */}
        {services.map((svc) => {
          const Icon = svc.icon
          return (
            <div
              key={svc.num}
              className="service-card-item flex-shrink-0 w-[300px] md:w-[340px] flex flex-col justify-between bg-surface border border-[#e5e2d9] rounded-3xl p-8 my-12 group hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 transition-all duration-500 cursor-default overflow-hidden relative"
            >
              {/* BG gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl`} />

              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: svc.accent }} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${svc.accent}15` }}>
                    <Icon size={26} style={{ color: svc.accent }} />
                  </div>
                  <span className="font-display font-black text-5xl text-black/5 select-none">{svc.num}</span>
                </div>

                <h3 className="font-semibold text-xl text-ink mb-3 leading-tight">{svc.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{svc.desc}</p>
              </div>

              <ul className="relative z-10 flex flex-col gap-2.5">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-ink2">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: svc.accent }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

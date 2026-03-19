'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  {
    year: 'Day 1',
    title: 'The Shop Opens',
    desc: 'Madhur Photocopy& Typing opens its doors on Annapurna Road, Indore  with a simple promise: quality service, every time.',
    side: 'left',
  },
  {
    year: 'Growing',
    title: 'More Services Added',
    desc: 'Customer demand leads to scanning, lamination, and form filling services becoming a complete document hub.',
    side: 'right',
  },
  {
  year: 'Creative',
  title: 'Advanced Photoshop Editing',
  desc: 'Expert-level Adobe Photoshop editing goes live background removal, photo restoration, colour grading and passport photos now done professionally in-house.',
  side: 'left',
},
  {
    year: 'Digital',
    title: 'Photo Editing',
    desc: 'The shop expands into digital services photo retouching, background removal.',
    side: 'right',
  },
  {
    year: 'Today',
    title: 'Rated 5 Stars on Google',
    desc: '14 reviews, all 5 stars. Customers call us "best services", "time saving", and "well behaved". We\'re just getting started.',
    side: 'left',
  },
]

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line draw animation
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline-line',
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          },
        }
      )

      // Cards
      gsap.utils.toArray<Element>('.timeline-card').forEach((card, i) => {
        const isLeft = i % 2 === 0
        gsap.fromTo(
          card,
          { x: isLeft ? -60 : 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
          }
        )
      })

      // Dots
      gsap.utils.toArray<Element>('.timeline-dot').forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 75%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="timeline" ref={sectionRef} className="py-28 px-6 md:px-12 bg-[#0f0e0c] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Our Story</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
            Built on Trust,<br />
            <span className="gradient-text">Grown by Service</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-white/5">
            <div className="timeline-line absolute inset-0 bg-gradient-to-b from-accent via-gold to-accent" />
          </div>

          <div className="flex flex-col gap-16">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`timeline-card flex items-center gap-8 ${m.side === 'right' ? 'flex-row-reverse' : ''}`}
              >
                {/* Card */}
                <div className="flex-1">
                  <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-accent/30 transition-all duration-300 ${m.side === 'right' ? 'text-right' : ''}`}>
                    <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">{m.year}</span>
                    <h3 className="font-semibold text-lg text-white mb-2">{m.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="timeline-dot relative z-10 w-4 h-4 rounded-full bg-accent border-4 border-[#0f0e0c] shadow-lg shadow-accent/40 flex-shrink-0" />

                {/* Spacer */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

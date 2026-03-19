import { FileText, MapPin, Star, Phone, MessageCircle } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Our Story', href: '#timeline' },
  { label: 'Why Us', href: '#why' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Find Us', href: '#location' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0906] text-white/30 px-6 md:px-12 py-14 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <FileText size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-base text-white">
                  Madhur Photocopy &amp;  Typing
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/35">
              Your trusted document and creative services partner in Indore since day one.
            </p>
            <div className="flex items-center gap-1.5 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-gold text-gold" />
              ))}
              <span className="text-xs text-white/40 ml-1">5.0 · 14 reviews</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-bold tracking-widest text-white/20 uppercase mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <p className="text-xs font-bold tracking-widest text-white/20 uppercase mb-5">Location</p>
            <a
              href="https://www.google.com/maps/place/Madhur+Photocopy+%26+Typing/@22.6954925,75.8362366,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fc4c54f7461f:0x3201d90d5c336f7!8m2!3d22.6954925!4d75.8388115!16s%2Fg%2F11xjbvbhq?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 text-sm text-white/40 hover:text-white/70 transition-colors duration-200 leading-relaxed group"
            >
              <MapPin size={15} className="flex-shrink-0 mt-0.5 text-accent group-hover:text-accent" />
              LG-1, Annapurna Regency, Annapurna Rd, near Unique Hospital, Indore, MP 452009
            </a>
            <p className="text-sm text-white/30 mt-4">Mon – Sat · 9:30 AM – 7:00 PM</p>
            <div className="flex flex-col gap-2 mt-4">
              <a href="tel:" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200">
                <Phone size={13} className="text-accent flex-shrink-0" />
              </a>
              <a href="tel:+919424512228" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200">
                <Phone size={13} className="text-accent flex-shrink-0" />+91 94245 12228
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/20">
          <p>© 2025 Madhur Photocopy &amp; Typing. All rights reserved.</p>
          <p>Made with ❤️ in Indore</p>
        </div>

      </div>
    </footer>
  )
}
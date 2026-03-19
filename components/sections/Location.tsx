'use client'
import { motion } from 'framer-motion'
import { MapPin, Clock, Star, ExternalLink, Phone, MessageCircle } from 'lucide-react'

const MAPS_URL = "https://www.google.com/maps/place/Madhur+Photocopy+%26+Typing/@22.6954925,75.8362366,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fc4c54f7461f:0x3201d90d5c336f7!8m2!3d22.6954925!4d75.8388115!16s%2Fg%2F11xjbvbhq?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
const EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.4!2d75.8362366!3d22.6954925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc4c54f7461f%3A0x3201d90d5c336f7!2sMadhur%20Photocopy%20%26%20Typing!5e0!3m2!1sen!2sin!4v1"
const PHONE_LABEL = '+91 94245 12228'
const PHONE_HREF = 'tel:+919424512228'
const WHATSAPP_HREF = 'https://wa.me/9424512228'

const infoCards = [
  { icon: MapPin, label: 'Address',        value: 'LG-1, Annapurna Regency, Annapurna Rd, near Unique Hospital, Indore, MP 452009', accent: '#c8430a' },
  { icon: Clock,  label: 'Business Hours', value: 'Mon – Sat: 9:30 AM – 7:00 PM\nSunday: Closed', accent: '#0f7d6e' },
  { icon: Star,   label: 'Google Rating',  value: '5.0 ★ — 14 Reviews\nTop-rated shop in Indore', accent: '#e8a923' },
]

export default function Location() {
  return (
    <section id="location" className="py-28 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Find Us</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-ink leading-tight mb-4">Visit Our Shop</h2>
          <p className="text-muted text-lg font-light max-w-md">Conveniently located near Unique Hospital on Annapurna Road, Indore.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-4">

            {/* Info cards */}
            {infoCards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.label}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-4 bg-surface border border-[#e5e2d9] rounded-2xl p-5 group hover:border-accent/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${card.accent}18` }}
                  >
                    <Icon size={20} style={{ color: card.accent }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-1">{card.label}</p>
                    <p className="text-sm text-ink font-medium leading-relaxed whitespace-pre-line">{card.value}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Phone card */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4 bg-surface border border-[#e5e2d9] rounded-2xl p-5 group hover:border-accent/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: '#c8430a18' }}
              >
                <Phone size={20} style={{ color: '#c8430a' }} />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-2">Call Us</p>
                <a
                  href={PHONE_HREF}
                  className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors flex items-center gap-1.5 w-fit"
                >
                  <Phone size={13} />
                  {PHONE_LABEL}
                </a>
              </div>
            </motion.div>

            {/* Call + WhatsApp buttons */}
            <div className="grid grid-cols-2 gap-3">
              <motion.a
                href={PHONE_HREF}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.38 }}
                className="group flex items-center justify-center gap-2 border-2 border-accent text-accent rounded-2xl py-3.5 font-semibold text-sm hover:bg-accent hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                <Phone size={15} />
                Call Now
              </motion.a>

              <motion.a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.46 }}
                className="group flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366] rounded-2xl py-3.5 font-semibold text-sm hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25 hover:-translate-y-0.5"
              >
                <MessageCircle size={15} />
                WhatsApp
              </motion.a>
            </div>

            {/* Directions button */}
            <motion.a
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.54 }}
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-accent text-white rounded-2xl py-4 font-semibold hover:bg-accent-dark transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              <MapPin size={18} />
              Get Directions on Google Maps
              <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>

          {/* Map */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden border border-[#e5e2d9] shadow-2xl"
          >
            <iframe
              src={EMBED_URL}
              width="100%"
              height="340"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Madhur Photocopy & Typing location"
            />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-ink text-white py-4 text-sm font-semibold hover:bg-ink2 transition-colors duration-200"
            >
              Open in Google Maps
              <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
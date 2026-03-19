'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, MessageCircle } from 'lucide-react'

const PHONE_NUMBER = '+91 94245 12228'
const PHONE_HREF = 'tel:+919424512228'
const WHATSAPP_HREF = 'https://wa.me/9424512228'

export default function FloatingCall() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2 bg-white border border-[#e5e2d9] rounded-2xl p-4 shadow-2xl shadow-black/10 min-w-[210px]"
          >
            <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">{PHONE_NUMBER}</p>

            {/* Call */}
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 bg-accent/8 hover:bg-accent text-accent hover:text-white rounded-xl px-4 py-3 font-semibold text-sm transition-all duration-200 group"
            >
              <Phone size={16} className="group-hover:animate-bounce" />
              Call Now
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-xl px-4 py-3 font-semibold text-sm transition-all duration-200 group"
            >
              <MessageCircle size={16} className="group-hover:animate-bounce" />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={open ? {} : { boxShadow: ['0 0 0 0 rgba(200,67,10,0.4)', '0 0 0 14px rgba(200,67,10,0)', '0 0 0 0 rgba(200,67,10,0)'] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-14 h-14 bg-accent text-white rounded-full shadow-2xl shadow-accent/40 flex items-center justify-center"
        aria-label="Contact us"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="phone" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Phone size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
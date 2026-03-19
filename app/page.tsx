import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import ServicesScroll from '@/components/sections/ServicesScroll'
import Timeline from '@/components/sections/Timeline'
import WhyUs from '@/components/sections/WhyUs'
import Reviews from '@/components/sections/Reviews'
import Location from '@/components/sections/Location'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import FloatingCall from '@/components/Floatingcall'
import Preloader from '@/components/Preloader'

export default function Home() {
  return (
    <>
      <Preloader />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <ServicesScroll />
        <Timeline />
        <WhyUs />
        <Reviews />
        <Location />
        <CTA />
      </main>
      <Footer />
      <FloatingCall />
    </>
  )
}
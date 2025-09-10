import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Services from '@/components/Services'

export default function Home() {
  return (
    <div>
      <img
        src='/bg.png'
        className='absolute -z-10 h-full w-full object-cover'
      />

      <Header />
      <Hero />
      <Services />
      <Partners />
      <Footer />
    </div>
  )
}

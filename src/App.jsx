import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import About from './components/sections/About'
import MDMessage from './components/sections/MDMessage'
import CoreValues from './components/sections/CoreValues'
import Process from './components/sections/Process'
import Certifications from './components/sections/Certifications'
import Products from './components/sections/Products'
import FAQ from './components/sections/FAQ'
import Gallery from './components/sections/Gallery'
import Reviews from './components/sections/Reviews'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import FloatingRice from './components/ui/FloatingRice'
import LoadingScreen from './components/ui/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const criticalImages = [
      '/assets/img/logos/logo.png',
      '/assets/img/pageimgs/hero-bg.jpg',
    ]

    let loadedCount = 0
    const totalImages = criticalImages.length

    criticalImages.forEach((src) => {
      const img = new Image()
      img.onload = () => {
        loadedCount++
        if (loadedCount >= totalImages) {
          setImagesLoaded(true)
        }
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount >= totalImages) {
          setImagesLoaded(true)
        }
      }
      img.src = src
    })

    const timeout = setTimeout(() => {
      setImagesLoaded(true)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [imagesLoaded])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <FloatingRice />
      <div className="min-h-screen bg-light-beige relative">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <About />
          <MDMessage />
          <CoreValues />
          <Products />
          <Process />
          <Certifications />
          <Gallery />
          <FAQ />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default App

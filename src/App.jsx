import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'  // <- Import About
import Skills from './components/Skills'
import Projects from './components/Projects'
import GitHub from './components/GitHub'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Toast from './components/Toast'
import ExperienceModal from './modals/ExperienceModal'
import ProjectsModal from './modals/ProjectsModal'
import CertificateDetailModal from './modals/CertificateModal'
import AllCertificatesModal from './modals/AllCertificatesModal'

import { useToast } from './hooks/useToast'

function App() {
  const [loading, setLoading] = useState(true)
  const [activeModal, setActiveModal] = useState(null)
  const [selectedCertIndex, setSelectedCertIndex] = useState(null)
  const { toast, showToast, removeToast } = useToast()

  useEffect(() => {
    AOS.init({ duration: 680, easing: 'ease-out-cubic', once: true, offset: 55 })
    
    const timer = setTimeout(() => setLoading(false), 1200)
    const welcomeTimer = setTimeout(() => showToast('Welcome', 'Thanks for visiting my portfolio.'), 1900)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(welcomeTimer)
    }
  }, [])

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [activeModal])

  const openModal = (modalName, certIndex = null) => {
    setActiveModal(modalName)
    if (certIndex !== null) setSelectedCertIndex(certIndex)
  }

  const closeModal = () => {
    setActiveModal(null)
    setSelectedCertIndex(null)
  }

  if (loading) return <Loader />

  return (
    <>
      <Navbar />
      <Hero showToast={showToast} />
      <div className="divider"></div>
      <About openModal={openModal} />  {/* <- ITO - Pass openModal to About */}
      <div className="divider"></div>
      <Skills />
      <div className="divider"></div>
      <Projects openModal={openModal} />
      <div className="divider"></div>
      <GitHub showToast={showToast} />
      <div className="divider"></div>
      <Certificates openModal={openModal} />
      <div className="divider"></div>
      <Contact showToast={showToast} />
      <Footer />

      <Toast toast={toast} onRemove={removeToast} />

      <ExperienceModal isOpen={activeModal === 'exp'} onClose={closeModal} />
      <ProjectsModal isOpen={activeModal === 'projects'} onClose={closeModal} />
      <CertificateDetailModal 
        isOpen={activeModal === 'cert-detail'} 
        onClose={closeModal} 
        certIndex={selectedCertIndex}
      />
      <AllCertificatesModal 
        isOpen={activeModal === 'all-certs'} 
        onClose={closeModal} 
        openCertDetail={(index) => openModal('cert-detail', index)}
      />
    </>
  )
}

export default App
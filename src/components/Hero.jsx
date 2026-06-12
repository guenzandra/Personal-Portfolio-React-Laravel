import React, { useEffect, useRef } from 'react'

const Hero = ({ showToast }) => {
  const statsRef = useRef(null)

  const animateCount = (el, target, suffix = '') => {
    if (!el) return
    let start = 0
    const duration = 1400
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = Math.floor(eased * target) + suffix
      if (progress < 1) requestAnimationFrame(step)
      else el.textContent = target + suffix
    }
    requestAnimationFrame(step)
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const statExp = document.getElementById('stat-exp')
        const statProjects = document.getElementById('stat-projects')
        const statCerts = document.getElementById('stat-certs')
        if (statExp) animateCount(statExp, 2, '+')
        if (statProjects) animateCount(statProjects, 20, '+')
        if (statCerts) animateCount(statCerts, 10, '+')
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <header id="hero">
      <div className="hero-bg-glow"></div>
      <div className="hero-rule"></div>
      
      {/* ===== ADJUSTMENT 1: Baguhin ang gridTemplateColumns para sa spacing ===== */}
      {/* Para lumipat sa right ang image, pwedeng baguhin ang: 
          - gridTemplateColumns: '1fr 0.8fr' (current) 
          - '1.2fr 0.8fr' - mas liliit ang space sa right
          - '1fr 0.9fr' - mas lalapit sa center ang image
          - '1.3fr 0.7fr' - mas lalaki ang text area, mas liliit ang image area
      */}
      <div className="hero-inner" style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr', // ← PWEDENG BAGUHIN ITO: 1st number = text space, 2nd number = image space
        gap: '2rem',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1320px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        padding: '0 2rem'
      }}>
        {/* TEXT SECTION - LEFT */}
        <div className="hero-text" style={{
          textAlign: 'left',
          paddingRight: '1rem' // ← PWEDENG BAGUHIN: dagdagan o bawasan ang space sa right ng text
        }}>
          <div className="hero-role-label" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: "'Syne', sans-serif",
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text3)',
            marginBottom: '1.5rem',
            justifyContent: 'flex-start'
          }}>
            Full Stack Developer
          </div>
          
          <h1 className="hero-name" style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            lineHeight: 0.92,
            letterSpacing: '-0.05em',
            color: 'var(--text)',
            marginBottom: '0.3em',
            textAlign: 'left'
          }}>
            Full Stack<br />
            <span className="hero-name-italic" style={{
              display: 'block',
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)',
              background: 'linear-gradient(110deg, var(--crimson) 0%, var(--pink) 50%, var(--gold) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.03em'
            }}>Guen Zandra.</span>
          </h1>
          
          <p className="hero-tagline" style={{
            fontSize: '0.95rem',
            lineHeight: 1.7,
            color: 'var(--text2)',
            maxWidth: '500px',
            margin: '1.5rem 0 2rem',
            textAlign: 'left'
          }}>
            A 23-year-old developer from <strong>Pagsanjan, Laguna</strong> who builds
            elegant, performant web experiences — from pixel-perfect UIs to robust back-end systems.
          </p>
          
          <div className="hero-btns" style={{
            display: 'flex',
            gap: '0.85rem',
            flexWrap: 'wrap',
            justifyContent: 'flex-start'
          }}>
            <a href="/assets/docs/CV-Guen.pdf" className="btn-primary" download>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          <div className="hero-stats" ref={statsRef} style={{
            display: 'flex',
            gap: '2.5rem',
            marginTop: '2.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            justifyContent: 'flex-start'
          }}>
            <div>
              <div className="stat-num" id="stat-exp" style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: '2.2rem',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: 'var(--text)'
              }}>0+</div>
              <div className="stat-label" style={{
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text3)',
                marginTop: '0.3rem'
              }}>Years Exp.</div>
            </div>
            <div>
              <div className="stat-num" id="stat-projects" style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: '2.2rem',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: 'var(--text)'
              }}>0+</div>
              <div className="stat-label" style={{
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text3)',
                marginTop: '0.3rem'
              }}>Projects</div>
            </div>
            <div>
              <div className="stat-num" id="stat-certs" style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: '2.2rem',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: 'var(--text)'
              }}>0+</div>
              <div className="stat-label" style={{
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text3)',
                marginTop: '0.3rem'
              }}>Certificates</div>
            </div>
          </div>
        </div>

        {/* ===== IMAGE SECTION - RIGHT ===== */}
        {/* ===== ADJUSTMENT 2: Baguhin ang marginLeft para igilid sa right ===== */}
        {/* Positive number = lilipat sa right, Negative number = lilipat sa left */}
        <div className="hero-img-col" style={{
          display: 'flex',
          justifyContent: 'flex-end', // ← PWEDENG BAGUHIN: 'flex-end' = nasa right, 'center' = nasa gitna, 'flex-start' = nasa left
          position: 'relative',
          marginTop: '-2rem', // ← PWEDENG BAGUHIN: para itaas o ibaba ang image (positive = pababa, negative = pataas)
          marginRight: '-1rem' // ← PWEDENG BAGUHIN: para igilid sa right (positive = papasok, negative = palabas sa right)
        }}>
          <div className="hero-img-wrap" style={{
            position: 'relative',
            width: '340px', // ← PWEDENG BAGUHIN: palakihin o paliitin ang image
            maxWidth: '100%'
          }}>
            <div className="hero-img-frame" style={{
              position: 'relative',
              borderRadius: '4px 4px 120px 4px',
              overflow: 'hidden',
              aspectRatio: '3/4'
            }}>
              <img 
                src="/assets/guen.jpg" 
                alt="Guen Zandra" 
                loading="eager"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  transition: 'transform 0.6s ease',
                  display: 'block'
                }}
                onError={(e) => {
                  console.log('Image failed to load');
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg,#7a1e2e,#e8829a)';
                }}
              />
            </div>
            <div className="hero-img-corner" style={{
              position: 'absolute',
              bottom: '-10px',
              left: '-10px',
              width: '50px',
              height: '50px',
              borderLeft: '2px solid var(--gold)',
              borderBottom: '2px solid var(--gold)',
              zIndex: 2,
              pointerEvents: 'none'
            }}></div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        zIndex: 2
      }}>
        <div className="scroll-text" style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '0.55rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--text3)'
        }}>Scroll</div>
        <div className="scroll-line" style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--pink), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite'
        }}></div>
      </div>
    </header>
  )
}

export default Hero
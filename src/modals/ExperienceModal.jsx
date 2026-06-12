import React from 'react'

const ExperienceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop show" onClick={(e) => e.target === e.currentTarget && onClose()} style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="modal-panel" style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border2)',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '660px',
        maxHeight: '88vh',
        overflowY: 'auto',
        padding: '2.5rem',
        position: 'relative'
      }}>
        <button className="modal-close" onClick={onClose} style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '6px',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'var(--text2)'
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="section-eyebrow">
          <span className="eyebrow-dash"></span>Career
        </div>
        <div className="modal-title" style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '1.6rem',
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '1.75rem'
        }}>All Work Experience</div>
        <div className="timeline">
          {[
            { role: 'Junior Full Stack Developer', company: 'YUKTA App', period: 'Jan 2026 – Apr 2026', link: 'https://www.yukta.app/' },
            { role: 'Web Developer', company: 'Provide Impact', period: '2025', link: 'https://www.provideimpact.com/' },
            { role: 'Content Manager & Video Editor', company: 'Burgt Media', period: '2024 – 2026', link: 'https://www.burgtmedia.com/' },
            { role: 'Video Editor', company: 'Noire Media', period: '2025 – 2026', link: 'https://www.noirmediallc.com/' },
            { role: 'Virtual Assistant', company: 'Provide Impact', period: 'Nov 2024 – Dec 2024', link: 'https://www.provideimpact.com/' }
          ].map((exp, idx) => (
            <div key={idx} className="timeline-item" style={{
              paddingLeft: '1.75rem',
              marginBottom: '1.5rem',
              position: 'relative'
            }}>
              <div className="tl-role" style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '0.92rem',
                color: 'var(--text)'
              }}>{exp.role}</div>
              <div className="tl-company" style={{
                fontSize: '0.78rem',
                color: 'var(--pink)',
                margin: '0.12rem 0'
              }}>{exp.company}</div>
              <div className="tl-period" style={{
                fontSize: '0.72rem',
                color: 'var(--text3)'
              }}>{exp.period}</div>
              <a href={exp.link} target="_blank" rel="noopener" className="tl-link" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.68rem',
                color: 'var(--text3)',
                textDecoration: 'none',
                marginTop: '0.25rem'
              }}>
                {exp.link.replace('https://', '')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceModal
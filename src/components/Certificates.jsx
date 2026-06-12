import React from 'react'
import { certificatesData } from '../data/certificatesData'

const Certificates = ({ openModal }) => {
  return (
    <section id="certificates" style={{
      background: 'var(--bg2)',
      padding: '7rem 4rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="section-number" aria-hidden="true" style={{
        position: 'absolute',
        right: '3.5rem',
        top: '3.5rem',
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: '9rem',
        letterSpacing: '-0.06em',
        color: 'rgba(255, 255, 255, 0.025)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0
      }}>05</div>

      <div data-aos="fade-up" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-eyebrow">
          <span className="eyebrow-dash"></span>
          Recognition
        </div>
        <h2 className="section-title">
          Certifi<span className="serif-accent">cates</span>
        </h2>
        <p className="section-sub">Proof of continuous learning and professional development.</p>
      </div>

      <div className="cert-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.1rem',
        position: 'relative',
        zIndex: 1
      }}>
        {certificatesData.map((cert, idx) => (
          <div 
            key={idx}
            className="cert-card"
            onClick={() => openModal('cert-detail', idx)}
            data-aos="fade-up"
            data-aos-delay={idx * 60}
            style={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'border-color 0.3s, transform 0.3s'
            }}
          >
            <div className="cert-img-wrap" style={{
              aspectRatio: '4/3',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src={cert.img} 
                alt={cert.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s'
                }}
                onError={(e) => {
                  e.target.parentElement.style.background = 'linear-gradient(135deg,#7a1e2e,#1a0a0d)'
                }}
              />
              <div className="cert-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(12, 11, 11, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s'
              }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
            <div className="cert-body" style={{ padding: '0.9rem 1rem' }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                color: 'var(--text)',
                marginBottom: '0.2rem'
              }}>{cert.title}</h4>
              <div className="cert-issuer" style={{
                fontSize: '0.68rem',
                color: 'var(--gold)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}>{cert.issuer}</div>
              <div className="cert-date" style={{
                fontSize: '0.66rem',
                color: 'var(--text3)',
                marginTop: '0.1rem'
              }}>{cert.date}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem', position: 'relative', zIndex: 1 }}>
        <button 
          className="btn-secondary"
          onClick={() => openModal('all-certs')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.85rem 2rem',
            background: 'transparent',
            color: 'var(--text)',
            border: '1px solid var(--border2)',
            borderRadius: '6px',
            fontFamily: "'Syne', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}
        >
          View All Certificates
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Certificates
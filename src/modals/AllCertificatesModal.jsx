import React from 'react'
import { certificatesData } from '../data/certificatesData'

const AllCertificatesModal = ({ isOpen, onClose, openCertDetail }) => {
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
      <div className="modal-panel modal-panel-lg" style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border2)',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '880px',
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
          <span className="eyebrow-dash"></span>All
        </div>
        <div className="modal-title" style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '1.6rem',
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '1.75rem'
        }}>All Certificates</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {certificatesData.map((cert, idx) => (
            <div 
              key={idx}
              className="cert-card"
              onClick={() => {
                openCertDetail(idx)
                onClose()
              }}
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
      </div>
    </div>
  )
}

export default AllCertificatesModal
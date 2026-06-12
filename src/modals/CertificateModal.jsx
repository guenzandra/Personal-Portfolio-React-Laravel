import React from 'react'
import { certificatesData } from '../data/certificatesData'

const CertificateModal = ({ isOpen, onClose, certIndex }) => {
  if (!isOpen || certIndex === null) return null
  
  const cert = certificatesData[certIndex]
  if (!cert) return null

  return (
    <div className="modal-backdrop show" onClick={(e) => e.target === e.currentTarget && onClose()}>
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
          cursor: 'pointer'
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <img 
          src={cert.img} 
          alt={cert.title}
          className="cert-modal-img"
          style={{
            width: '100%',
            borderRadius: '8px',
            marginBottom: '1.4rem',
            border: '1px solid var(--border)'
          }}
        />
        <div className="modal-title" style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '1.4rem',
          color: 'var(--text)',
          marginBottom: '0.3rem'
        }}>{cert.title}</div>
        <div style={{
          fontSize: '0.7rem',
          color: 'var(--gold)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '0.4rem'
        }}>{cert.issuer}</div>
        <div style={{
          fontSize: '0.78rem',
          color: 'var(--text3)',
          marginBottom: '0.75rem'
        }}>{cert.date}</div>
        <p style={{
          fontSize: '0.88rem',
          color: 'var(--text2)',
          lineHeight: 1.72
        }}>{cert.desc}</p>
      </div>
    </div>
  )
}

export default CertificateModal
import React from 'react'

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      padding: '1.4rem 4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '0.75rem',
      color: 'var(--text3)'
    }}>
      <span>© 2026 Guen Zandra. Crafted with care.</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <a href="https://github.com/guenzandra" target="_blank" rel="noopener" style={{
          color: 'var(--text3)',
          textDecoration: 'none',
          transition: 'color 0.2s'
        }}>github.com/guenzandra</a>
        <a href="#hero" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--pink)',
          textDecoration: 'none'
        }}>
          Back to top
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
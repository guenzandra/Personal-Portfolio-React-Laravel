import React from 'react'

const Loader = () => {
  return (
    <div id="page-loader" style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9000,
      background: 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1.75rem',
      transition: 'opacity 0.8s ease 0.2s, visibility 0.8s ease 0.2s',
      opacity: 1,
      visibility: 'visible'
    }}>
      <div style={{
        fontFamily: "'Instrument Serif', serif",
        fontStyle: 'italic',
        fontSize: '3.5rem',
        color: 'var(--pink)',
        letterSpacing: '-0.02em',
        lineHeight: 1
      }}>GZ</div>
      <div style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 700,
        fontSize: '0.7rem',
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: 'var(--text3)'
      }}>Guen Zandra</div>
      <div style={{
        width: '160px',
        height: '1px',
        background: 'var(--surface2)',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, var(--maroon), var(--pink), var(--gold))',
          animation: 'loaderFill 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
          width: 0
        }}></div>
      </div>
      <style>{`
        @keyframes loaderFill {
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}

export default Loader
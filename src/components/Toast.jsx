import React from 'react'

const Toast = ({ toast, onRemove }) => {
  if (!toast) return null

  return (
    <div id="toast-container" style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 9000,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.65rem',
      pointerEvents: 'none'
    }}>
      <div className="toast" style={{
        background: 'var(--surface2)',
        border: '1px solid var(--border2)',
        borderRadius: '8px',
        padding: '0.9rem 1.1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem',
        minWidth: '260px',
        maxWidth: '340px',
        position: 'relative',
        pointerEvents: 'all'
      }}>
        <div className="toast-icon-wrap" style={{
          width: '32px',
          height: '32px',
          borderRadius: '6px',
          background: 'rgba(232, 130, 154, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--pink)',
          flexShrink: 0
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <div className="toast-title" style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: '0.82rem',
            color: 'var(--text)'
          }}>{toast.title}</div>
          <div className="toast-msg" style={{
            fontSize: '0.74rem',
            color: 'var(--text2)',
            marginTop: '0.08rem'
          }}>{toast.message}</div>
        </div>
        <div className="toast-bar" style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          borderRadius: '0 0 8px 8px',
          background: 'linear-gradient(90deg, var(--maroon), var(--pink))',
          animation: 'toastBar 3.5s linear forwards'
        }}></div>
      </div>
    </div>
  )
}

export default Toast
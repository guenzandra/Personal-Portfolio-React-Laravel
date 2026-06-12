import React from 'react'

const ProjectsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop show" onClick={(e) => e.target === e.currentTarget && onClose()}>
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
          cursor: 'pointer'
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="section-eyebrow">
          <span className="eyebrow-dash"></span>Portfolio
        </div>
        <div className="modal-title" style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '1.6rem',
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '1.75rem'
        }}>All Projects</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.1rem' }}>
          {[
            { cat: 'Web Development', title: 'Project Title One', desc: 'Extended description — challenges faced, your role, outcomes achieved.', tags: ['Laravel', 'React', 'MySQL'] },
            { cat: 'Mobile App', title: 'Project Title Three', desc: 'Extended description — challenges faced, your role, outcomes achieved.', tags: ['React Native', 'Firebase'] }
          ].map((project, idx) => (
            <div key={idx} className="project-card" style={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <div className="project-body" style={{ padding: '1.5rem' }}>
                <div className="project-cat" style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--pink)',
                  marginBottom: '0.35rem'
                }}>{project.cat}</div>
                <div className="project-title" style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--text)',
                  marginBottom: '0.5rem'
                }}>{project.title}</div>
                <div className="project-desc" style={{
                  fontSize: '0.83rem',
                  color: 'var(--text2)',
                  lineHeight: 1.7,
                  marginBottom: '1rem'
                }}>{project.desc}</div>
                <div className="tech-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-tag" style={{
                      fontSize: '0.65rem',
                      padding: '0.18rem 0.55rem',
                      borderRadius: '4px',
                      background: 'rgba(232, 130, 154, 0.06)',
                      border: '1px solid rgba(232, 130, 154, 0.12)',
                      color: 'var(--pink)'
                    }}>{tag}</span>
                  ))}
                </div>
                <a href="#" className="btn-secondary btn-sm" target="_blank" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1.1rem',
                  background: 'transparent',
                  color: 'var(--text)',
                  border: '1px solid var(--border2)',
                  borderRadius: '6px',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none'
                }}>View Live</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsModal
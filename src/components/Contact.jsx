import React from 'react'

const Contact = ({ showToast }) => {
  const contactItems = [
    { icon: 'email', label: 'Email', value: 'zandraflores2003@gmail.com', link: 'mailto:zandraflores2003@gmail.com' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'guenzandra-dev', link: 'https://www.linkedin.com/in/guenzandra-dev/' },
    { icon: 'github', label: 'GitHub', value: 'guenzandra', link: 'https://github.com/guenzandra' },
    { icon: 'facebook', label: 'Facebook', value: 'Guen Zandrave', link: 'https://www.facebook.com/gwennzandra/' },
    { icon: 'instagram', label: 'Instagram', value: '@guenzandra', link: '#' },
    { icon: 'location', label: 'Location', value: 'Pagsanjan, Laguna, PH', link: null }
  ]

  const getIcon = (type) => {
    switch(type) {
      case 'email':
        return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
      case 'linkedin':
        return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
      case 'github':
        return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
      case 'facebook':
        return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
      case 'instagram':
        return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
      case 'location':
        return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
      default:
        return null
    }
  }

  return (
    <section id="contact" style={{
      background: 'var(--bg)',
      padding: '7rem 4rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="contact-inner" style={{
        maxWidth: '780px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div data-aos="fade-up">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dash"></span>Get In Touch<span className="eyebrow-dash"></span>
          </div>
          <div className="contact-cta" style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5vw, 5.2rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: 'var(--text)',
            marginBottom: '1.25rem'
          }}>
            Let's build something<br /><span className="cta-italic" style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontWeight: 400,
              background: 'linear-gradient(110deg, var(--crimson), var(--pink), var(--gold))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>great.</span>
          </div>
          <p style={{
            color: 'var(--text2)',
            maxWidth: '420px',
            margin: '0 auto',
            lineHeight: 1.75,
            fontSize: '0.92rem'
          }}>
            Open to interesting projects, collaborations, and conversations. Reach out through any channel below.
          </p>
        </div>

        <div className="contact-grid" data-aos="fade-up" data-aos-delay="100" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          marginTop: '2.5rem'
        }}>
          {contactItems.map((item, idx) => (
            <div key={idx} className="contact-item" style={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '1.4rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.6rem',
              textAlign: 'center',
              transition: 'border-color 0.25s, transform 0.25s'
            }}>
              <div className="ci-icon" style={{
                width: '40px',
                height: '40px',
                border: '1px solid var(--border2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--pink)'
              }}>
                {getIcon(item.icon)}
              </div>
              <div className="ci-label" style={{
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text3)'
              }}>{item.label}</div>
              <div className="ci-value" style={{
                fontSize: '0.85rem',
                color: 'var(--text)'
              }}>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener" style={{
                    color: 'var(--text)',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }} onClick={() => item.icon === 'email' && showToast('Email', 'Opening your email client...')}>
                    {item.value}
                  </a>
                ) : (
                  <span style={{ color: 'var(--text)' }}>{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
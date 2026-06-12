import React from 'react'

const About = () => {
  return (
    <section id="about" style={{
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
      }}>01</div>

      <div data-aos="fade-up" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-eyebrow">
          <span className="eyebrow-dash" style={{
            display: 'block',
            width: '24px',
            height: '1px',
            background: 'var(--pink)'
          }}></span>
          Who I Am
        </div>
        <h2 className="section-title" style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          color: 'var(--text)',
          marginBottom: '0.6rem'
        }}>
          About <span className="serif-accent" style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'var(--pink)'
          }}>Me</span>
        </h2>
        <p className="section-sub" style={{
          fontSize: '0.95rem',
          color: 'var(--text2)',
          maxWidth: '480px',
          lineHeight: 1.75,
          marginBottom: '3.5rem'
        }}>A full-stack developer who thrives at the intersection of design and technology.</p>
      </div>

      <div className="about-layout" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.25rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Personal Info Card */}
        <div className="about-card" data-aos="fade-up" data-aos-delay="0" style={{
          background: 'var(--bg3)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '2.25rem',
          transition: 'border-color 0.3s, transform 0.3s'
        }}>
          <div className="card-icon pink-icon" style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.25rem',
            background: 'rgba(232, 130, 154, 0.1)',
            color: 'var(--pink)'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="about-card-title" style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--text)',
            marginBottom: '1.25rem'
          }}>Personal Info</div>
          <div className="personal-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem 2rem'
          }}>
            <div>
              <div className="pi-label" style={{
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--text3)',
                marginBottom: '0.18rem'
              }}>Age</div>
              <div className="pi-value" style={{
                fontSize: '0.88rem',
                color: 'var(--text)',
                fontWeight: 400
              }}>23 years old</div>
            </div>
            <div>
              <div className="pi-label" style={{
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--text3)',
                marginBottom: '0.18rem'
              }}>Height</div>
              <div className="pi-value" style={{
                fontSize: '0.88rem',
                color: 'var(--text)',
                fontWeight: 400
              }}>5'2"</div>
            </div>
            <div>
              <div className="pi-label" style={{
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--text3)',
                marginBottom: '0.18rem'
              }}>Nationality</div>
              <div className="pi-value" style={{
                fontSize: '0.88rem',
                color: 'var(--text)',
                fontWeight: 400
              }}>Filipino</div>
            </div>
            <div>
              <div className="pi-label" style={{
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--text3)',
                marginBottom: '0.18rem'
              }}>Religion</div>
              <div className="pi-value" style={{
                fontSize: '0.88rem',
                color: 'var(--text)',
                fontWeight: 400
              }}>Catholic</div>
            </div>
            <div>
              <div className="pi-label" style={{
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--text3)',
                marginBottom: '0.18rem'
              }}>Location</div>
              <div className="pi-value" style={{
                fontSize: '0.88rem',
                color: 'var(--text)',
                fontWeight: 400
              }}>Pagsanjan, Laguna</div>
            </div>
            <div>
              <div className="pi-label" style={{
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--text3)',
                marginBottom: '0.18rem'
              }}>Schedule</div>
              <div className="pi-value" style={{
                fontSize: '0.88rem',
                color: 'var(--text)',
                fontWeight: 400
              }}>Night Owl</div>
            </div>
          </div>
          <div className="interests-wrap" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginTop: '1.5rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border)'
          }}>
            {['Gaming', 'Coding', 'Streaming', 'Plants', 'Cats'].map(interest => (
              <span key={interest} className="interest-tag" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.75rem',
                color: 'var(--text2)',
                background: 'var(--surface)',
                padding: '0.3rem 0.75rem',
                borderRadius: '5px',
                border: '1px solid var(--border)'
              }}>{interest}</span>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div className="about-card" data-aos="fade-up" data-aos-delay="100" style={{
          background: 'var(--bg3)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '2.25rem'
        }}>
          <div className="card-icon gold-icon" style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.25rem',
            background: 'rgba(201, 168, 76, 0.1)',
            color: 'var(--gold)'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="about-card-title">Education</div>
          <div className="edu-block" style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '1.25rem',
            marginBottom: '1.25rem'
          }}>
            <div className="edu-degree" style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: '0.95rem',
              color: 'var(--text)',
              marginBottom: '0.2rem'
            }}>BS Information Technology</div>
            <div className="edu-spec" style={{
              fontSize: '0.78rem',
              color: 'var(--pink)',
              marginBottom: '0.15rem'
            }}>Specialization: Business Analytics</div>
            <div className="edu-school" style={{
              fontSize: '0.78rem',
              color: 'var(--text2)'
            }}>Laguna University, Sta. Cruz, Laguna</div>
            <div className="edu-year" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.72rem',
              color: 'var(--text3)',
              marginTop: '0.35rem'
            }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              2021 — 2026
            </div>
          </div>
        </div>

        {/* Work Experience Card - Full Width */}
        <div className="about-card full-width" data-aos="fade-up" data-aos-delay="200" style={{
          background: 'var(--bg3)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '2.25rem',
          gridColumn: '1 / -1'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div>
              <div className="card-icon maroon-icon" style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem',
                background: 'rgba(122, 30, 46, 0.2)',
                color: 'var(--crimson)'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div className="about-card-title" style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--text)',
                marginBottom: '1.25rem'
              }}>Work Experience</div>
            </div>
            <button className="btn-secondary btn-sm" onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: 'exp' }))} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.1rem',
              background: 'transparent',
              color: 'var(--text)',
              border: '1px solid var(--border2)',
              borderRadius: '6px',
              fontFamily: "'Syne', sans-serif",
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}>
              View All
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="exp-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem'
          }}>
            {[
              { role: 'Junior Full Stack Developer', company: 'YUKTA App', period: 'Jan 2026 – Apr 2026', link: 'https://www.yukta.app/' },
              { role: 'Web Developer', company: 'Provide Impact', period: '2025', link: 'https://www.provideimpact.com/' },
              { role: 'Content Manager & Video Editor', company: 'Burgt Media', period: '2024 – 2026', link: 'https://www.burgtmedia.com/' }
            ].map(exp => (
              <div key={exp.company} className="timeline-item" style={{
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
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
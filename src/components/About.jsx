import React from 'react'

const About = ({ openModal }) => {  
  return (
    <section id="about">
      <div className="section-number" aria-hidden="true">01</div>

      <div data-aos="fade-up" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-eyebrow">
          <span className="eyebrow-dash"></span>
          Who I Am
        </div>
        <h2 className="section-title">
          About <span className="serif-accent">Me</span>
        </h2>
        <p className="section-sub">A full-stack developer who thrives at the intersection of design and technology.</p>
      </div>

      <div className="about-layout">
        <div className="about-card" data-aos="fade-up" data-aos-delay="0">
          <div className="card-icon pink-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="about-card-title">Personal Info</div>
          <div className="personal-grid">
            <div>
              <div className="pi-label">Age</div>
              <div className="pi-value">23 years old</div>
            </div>
            <div>
              <div className="pi-label">Height</div>
              <div className="pi-value">5'2"</div>
            </div>
            <div>
              <div className="pi-label">Nationality</div>
              <div className="pi-value">Filipino</div>
            </div>
            <div>
              <div className="pi-label">Religion</div>
              <div className="pi-value">Catholic</div>
            </div>
            <div>
              <div className="pi-label">Location</div>
              <div className="pi-value">Pagsanjan, Laguna</div>
            </div>
            <div>
              <div className="pi-label">Schedule</div>
              <div className="pi-value">Night Owl</div>
            </div>
          </div>
          <div className="interests-wrap">
            <span className="interest-tag">Gaming</span>
            <span className="interest-tag">Coding</span>
            <span className="interest-tag">Streaming</span>
            <span className="interest-tag">Plants</span>
            <span className="interest-tag">Cats</span>
          </div>
        </div>

        <div className="about-card" data-aos="fade-up" data-aos-delay="100">
          <div className="card-icon gold-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="about-card-title">Education</div>
          <div className="edu-block">
            <div className="edu-degree">BS Information Technology</div>
            <div className="edu-spec">Specialization: Business Analytics</div>
            <div className="edu-school">Laguna University, Sta. Cruz, Laguna</div>
            <div className="edu-year">
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

        <div className="about-card full-width" data-aos="fade-up" data-aos-delay="200">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div>
              <div className="card-icon maroon-icon" style={{ marginBottom: '0.75rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div className="about-card-title">Work Experience</div>
            </div>

            <button 
              className="btn-secondary btn-sm" 
              onClick={() => openModal('exp')} 
            >
              View All
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="exp-grid">
            <div className="timeline-item">
              <div className="tl-role">Junior Full Stack Developer</div>
              <div className="tl-company">YUKTA App</div>
              <div className="tl-period">Jan 2026 – Apr 2026</div>
              <a href="https://www.yukta.app/" target="_blank" rel="noopener" className="tl-link">
                yukta.app
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
            <div className="timeline-item">
              <div className="tl-role">Web Developer</div>
              <div className="tl-company">Provide Impact</div>
              <div className="tl-period">2025</div>
              <a href="https://www.provideimpact.com/" target="_blank" rel="noopener" className="tl-link">
                provideimpact.com
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
            <div className="timeline-item">
              <div className="tl-role">Content Manager & Video Editor</div>
              <div className="tl-company">Burgt Media</div>
              <div className="tl-period">2024 – 2026</div>
              <a href="https://www.burgtmedia.com/" target="_blank" rel="noopener" className="tl-link">
                burgtmedia.com
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
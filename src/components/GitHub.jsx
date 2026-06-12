import React from 'react'
import { useGitHub } from '../hooks/useGitHub'

const GitHub = ({ showToast }) => {
  const { userData, repos, totalStars, loading, langColors } = useGitHub('guenzandra')

  return (
    <section id="github" style={{
      background: 'var(--bg)',
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
      }}>04</div>

      <div data-aos="fade-up" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-eyebrow">
          <span className="eyebrow-dash"></span>
          Open Source
        </div>
        <h2 className="section-title">
          GitHub <span className="serif-accent">Activity</span>
        </h2>
        <p className="section-sub">Consistent commits. Real work. Every square tells a story.</p>
      </div>

      <div className="github-stats-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        marginBottom: '2.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="gh-stat-card" style={{
          background: 'var(--bg3)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '1.75rem',
          textAlign: 'center'
        }}>
          <div className="gh-stat-num" style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '2.4rem',
            letterSpacing: '-0.04em',
            background: 'linear-gradient(135deg, var(--pink), var(--gold))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>{loading ? '—' : userData?.public_repos || 0}</div>
          <div className="gh-stat-label" style={{
            fontSize: '0.68rem',
            color: 'var(--text3)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginTop: '0.3rem'
          }}>Repositories</div>
        </div>
        <div className="gh-stat-card">
          <div className="gh-stat-num">{loading ? '—' : totalStars}</div>
          <div className="gh-stat-label">Stars Earned</div>
        </div>
        <div className="gh-stat-card">
          <div className="gh-stat-num">{loading ? '—' : userData?.followers || 0}</div>
          <div className="gh-stat-label">Followers</div>
        </div>
        <div className="gh-stat-card">
          <div className="gh-stat-num">2+</div>
          <div className="gh-stat-label">Years Active</div>
        </div>
      </div>

      <div className="github-graph-wrap" style={{ marginBottom: '2rem' }}>
        <img 
          src="https://ghchart.rshah.org/guenzandra"
          alt="GitHub contribution graph"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          loading="lazy"
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }} data-aos="fade-up">
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: '1.1rem',
          color: 'var(--text)',
          margin: '2.5rem 0 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          Pinned Repositories
        </div>

        <div className="repos-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.1rem',
          position: 'relative',
          zIndex: 1
        }}>
          {loading ? (
            <div className="repo-card" style={{ opacity: 0.4, background: 'var(--bg3)', padding: '1.35rem', borderRadius: '8px' }}>
              <div className="repo-name">Loading repos...</div>
              <div className="repo-desc">Fetching from GitHub API...</div>
            </div>
          ) : (
            repos.map(repo => (
              <a 
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener"
                className="repo-card"
                style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.35rem',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'border-color 0.25s, transform 0.25s'
                }}
              >
                <div className="repo-name" style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  color: 'var(--pink)',
                  marginBottom: '0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  {repo.name}
                </div>
                <div className="repo-desc" style={{
                  fontSize: '0.8rem',
                  color: 'var(--text2)',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>{repo.description || 'No description provided.'}</div>
                <div className="repo-meta" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.1rem'
                }}>
                  {repo.language && (
                    <div className="repo-lang" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.7rem',
                      color: 'var(--text3)'
                    }}>
                      <span className="lang-dot" style={{
                        width: '9px',
                        height: '9px',
                        borderRadius: '50%',
                        background: langColors[repo.language] || langColors.default
                      }}></span>
                      {repo.language}
                    </div>
                  )}
                  <div className="repo-stars" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.7rem',
                    color: 'var(--text3)'
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {repo.stargazers_count}
                  </div>
                </div>
              </a>
            ))
          )}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem', position: 'relative', zIndex: 1 }}>
        <a href="https://github.com/guenzandra" target="_blank" rel="noopener" className="btn-secondary" style={{
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
          cursor: 'pointer',
          textDecoration: 'none'
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          Visit GitHub Profile
        </a>
      </div>
    </section>
  )
}

export default GitHub
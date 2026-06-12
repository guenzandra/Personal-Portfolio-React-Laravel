import React, { useState } from 'react'

const Projects = ({ openModal }) => {
  const [filter, setFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Dev' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'game', label: 'Game' },
    { id: 'other', label: 'Other' }
  ]

  const projects = [
    {
      category: 'web',
      title: 'Project Title One',
      desc: 'A brief description of this project, what it does and why it matters to the end user.',
      tags: ['Laravel', 'React', 'MySQL'],
      img: 'project1.png',
      link: '#'
    },
    {
      category: 'web',
      title: 'Project Title Two',
      desc: 'Highlight key features and the problem this project solves for its users.',
      tags: ['Node.js', 'Supabase', 'Tailwind'],
      img: 'project2.png',
      link: '#'
    },
    {
      category: 'mobile',
      title: 'Project Title Three',
      desc: 'A mobile application built with a focus on clean UX and snappy performance.',
      tags: ['React Native', 'Firebase'],
      img: 'project3.png',
      link: '#'
    },
    {
      category: 'game',
      title: 'Project Title Four',
      desc: 'An interactive game built with Python and creative logic — polished and fun.',
      tags: ['Python', 'Pygame'],
      img: 'project4.png',
      link: '#'
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects">
      <div className="section-number" aria-hidden="true">03</div>

      <div data-aos="fade-up" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-eyebrow">
          <span className="eyebrow-dash"></span>
          What I've Built
        </div>
        <h2 className="section-title">
          Featured <span className="serif-accent">Projects</span>
        </h2>
        <p className="section-sub">A selection of work I'm proud of — from concept to deployment.</p>
      </div>

      <div className="filter-bar">
        {filters.map(f => (
          <button
            key={f.id}
            className={`filter-btn ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <div 
            key={idx}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={idx * 80}
          >
            <div className="project-img-wrap">
              <img 
                src={`/assets/img/${project.img}`} 
                alt={project.title}
                onError={(e) => {
                  e.target.parentElement.style.background = 'linear-gradient(135deg,#7a1e2e,#1a0a0d)'
                }}
              />
              <div className="project-overlay">
                <a href={project.link} className="overlay-link" target="_blank" rel="noopener">
                  View Live
                </a>
              </div>
            </div>
            <div className="project-body">
              <div className="project-cat">
                {project.category === 'web' ? 'Web Development' : 
                 project.category === 'mobile' ? 'Mobile App' : 
                 project.category === 'game' ? 'Game Development' : 'Other'}
              </div>
              <div className="project-title">{project.title}</div>
              <div className="project-desc">{project.desc}</div>
              <div className="tech-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2.5rem', position: 'relative', zIndex: 1 }}>
        <button 
          className="btn-primary"
          onClick={() => openModal('projects')}
        >
          View All Projects
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Projects
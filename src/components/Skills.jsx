import React, { useState } from 'react'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages')

  const tabs = [
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools & DevOps' },
    { id: 'creative', label: 'Creative' }
  ]

  const skillsData = {
    languages: [
      { name: 'PHP', type: 'Server-side', bg: '#4F5D95', logo: 'php.webp' },
      { name: 'JavaScript', type: 'Client & Server', bg: '#F7DF1E', logo: 'js.png' },
      { name: 'Python', type: 'Scripting', bg: '#3776AB', logo: 'python.webp' },
      { name: 'HTML5', type: 'Markup', bg: '#E34F26', logo: 'html.png' },
      { name: 'CSS3', type: 'Styling', bg: '#1572B6', logo: 'css3.png' },
      { name: 'TypeScript', type: 'Typed JS', bg: '#3178C6', logo: 'typescript.png' }
    ],
    frameworks: [
      { name: 'Laravel', type: 'PHP Framework', bg: '#FF2D20', logo: 'laravel.webp' },
      { name: 'React', type: 'UI Library', bg: '#20232a', logo: 'react.png' },
      { name: 'Node.js', type: 'Runtime', bg: '#339933', logo: 'nodejs.jpg' },
      { name: 'Next.js', type: 'React Framework', bg: '#000', logo: 'next-js.svg' },
      { name: 'Tailwind', type: 'CSS Framework', bg: '#06B6D4', logo: 'tailwind.png' },
      { name: 'Bootstrap', type: 'UI Framework', bg: '#7952B3', logo: 'bootstrap.png' }
    ],
    databases: [
      { name: 'MySQL', type: 'Relational DB', bg: '#4479A1', logo: 'mysql.png' },
      { name: 'PostgreSQL', type: 'Relational DB', bg: '#336791', logo: 'postgreSQL.png' },
      { name: 'SQLite', type: 'Embedded DB', bg: '#003B57', logo: 'sqlit.png' },
      { name: 'Supabase', type: 'BaaS', bg: '#3ECF8E', logo: 'supabase.webp' },
      { name: 'Firebase', type: 'NoSQL / BaaS', bg: '#FFCA28', logo: 'firebase.webp' }
    ],
    tools: [
      { name: 'Git', type: 'Version Control', bg: '#F05032', logo: 'git.png' },
      { name: 'GitHub', type: 'Hosting', bg: '#181717', logo: 'github.png' },
      { name: 'Docker', type: 'Containers', bg: '#2496ED', logo: 'docker.png' },
      { name: 'Vercel', type: 'Deployment', bg: '#000', logo: 'vercel.png' },
      { name: 'VS Code', type: 'IDE', bg: '#007ACC', logo: 'vs.png' },
      { name: 'Troubleshoot', type: 'HW & SW', bg: '#4a4a4a', logo: null }
    ],
    creative: [
      { name: 'Premiere Pro', type: 'Video Editing', bg: '#9999FF', logo: 'premiere.png' },
      { name: 'Photoshop', type: 'Photo Edit', bg: '#001E36', logo: 'photoshop.png' },
      { name: 'Illustrator', type: 'Vector Design', bg: '#FF9A00', logo: 'illustrator.png' },
      { name: 'Canva', type: 'Design', bg: '#00C4CC', logo: 'canva.png' },
      { name: 'CapCut', type: 'Video Edit', bg: '#000', logo: 'capcut.png' },
      { name: 'PicsArt', type: 'Mobile Edit', bg: '#FF3C7D', logo: 'picsart.png' }
    ]
  }

  return (
    <section id="skills">
      <div className="section-number" aria-hidden="true">02</div>

      <div data-aos="fade-up" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-eyebrow">
          <span className="eyebrow-dash"></span>
          What I Know
        </div>
        <h2 className="section-title">
          Tech <span className="serif-accent">Stack</span>
        </h2>
        <p className="section-sub">A toolkit built over years of building real products.</p>
      </div>

      <div className="skills-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`skill-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="skills-panel active">
        <div className="tech-grid">
          {skillsData[activeTab].map((skill, idx) => (
            <div key={idx} className="tech-item">
              <div className="tech-logo" style={{ background: skill.bg }}>
                {skill.logo ? (
                  <img 
                    src={`/assets/img/tech-stack-logo/${skill.logo}`} 
                    alt={skill.name}
                    onError={(e) => {
                      e.target.parentElement.innerHTML = `<span style="color:white;font-size:11px;font-weight:bold;">${skill.name.slice(0,3)}</span>`
                    }}
                  />
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                )}
              </div>
              <div className="tech-name">{skill.name}</div>
              <div className="tech-type">{skill.type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
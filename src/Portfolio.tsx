import React, { useState } from 'react';
import './Portfolio.css'
import {projects, games, allItems, Project, ProjectLink} from './data/projects.ts'

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<'all' | 'projects' | 'games'>('all');


  const getFilteredItems = (): Project[] => {
    if (activeSection === 'projects') return projects;
    if (activeSection === 'games') return games;
    return allItems;
  };

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div 
      className="project-card"
      onClick={() => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
      }}
    >
      <div className="card-image-container">
        <img src={project.images[0]} alt={project.title} className="card-image" />
        <div className="card-overlay">
          <span className="view-details">View Details →</span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.shortDescription}</p>
        <div className="card-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  const DetailView: React.FC = () => {
    if (!selectedProject) return null;

    const nextImage = () => {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.images.length
      );
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    };

    return (
      <div className="detail-overlay" onClick={() => setSelectedProject(null)}>
        <div className="detail-container" onClick={(e) => e.stopPropagation()}>
          <button 
            className="close-button"
            onClick={() => setSelectedProject(null)}
          >
            ✕
          </button>

          <div className="detail-content">
            <div className="detail-gallery">
              {selectedProject.images.length > 1 && (
                <>
                  <button className="gallery-nav prev" onClick={prevImage}>‹</button>
                  <button className="gallery-nav next" onClick={nextImage}>›</button>
                </>
              )}
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className="detail-image"
              />
              {selectedProject.images.length > 1 && (
                <div className="gallery-dots">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(idx)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="detail-info">
              <h2 className="detail-title">{selectedProject.title}</h2>
              <div className="detail-tags">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <p className="detail-description">{selectedProject.description}</p>
              <div className="detail-links">
                {selectedProject.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="portfolio">
      <header>
        <div className="header-content">
          <h1>Christopher Eichert</h1>
          <div className="subtitle">Game Programmer • Software Developer • Graphics Enthusiast</div>
          <div className="bio">
            Hi! My name is Chris and I am a third-year Game Programming major at Champlain College and a 
            software developer at the Leahy Center. I love making games and working in frameworks like .NET 
            to make cool desktop applications! Working with graphics APIs and optimizing game and software 
            performance is a favorite programming pastime of mine.
          </div>
          <div className="header-links">
            <a href="https://github.com/Ceichert31" target="_blank" rel="noopener noreferrer">
              &lt;GitHub /&gt;
            </a>
            <a href="https://pineapple3114.itch.io/" target="_blank" rel="noopener noreferrer">
              &lt;itch.io /&gt;
            </a>
            <a href="https://www.linkedin.com/in/christophereichert/" target="_blank" rel="noopener noreferrer">
              &lt;LinkedIn /&gt;
            </a>
          </div>
        </div>
      </header>

      <nav className="filter-nav">
        <button 
          className={`filter-button ${activeSection === 'all' ? 'active' : ''}`}
          onClick={() => setActiveSection('all')}
        >
          All Work
        </button>
        <button 
          className={`filter-button ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveSection('projects')}
        >
          Software Projects
        </button>
        <button 
          className={`filter-button ${activeSection === 'games' ? 'active' : ''}`}
          onClick={() => setActiveSection('games')}
        >
          Games
        </button>
      </nav>

      <main>
        <div className="projects-grid">
          {getFilteredItems().map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </main>

      {selectedProject && <DetailView />}
    </div>
  );
};

export default Portfolio;
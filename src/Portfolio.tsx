import { useState, useEffect } from "react";
import "./App.css";
import { projects, games, type Project } from "././data/projectData.ts";
import demoReel from "././assets/DayNightVisual.mp4";

const NAV_LINKS = ["About", "Projects", "Resume", "Contact"];

function NavBar({ activePage, setActivePage }: { activePage: string; setActivePage: (p: string) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link: string) => {
    const lower = link.toLowerCase();
    if (lower === "projects" || lower === "about" || lower === "contact") {
      setActivePage("home");
      setTimeout(() => {
        document.getElementById(lower)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else if (lower === "resume") {
      setActivePage("resume");
    }
  };

  return (
    <nav className={`nav ${!scrolled ? "nav--transparent" : ""}`}>
      <span
        className="nav__name"
        onClick={() => { setActivePage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
      >
        Christopher Eichert
      </span>
      <ul className="nav__links">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <span
              className={`nav__link ${activePage === link.toLowerCase() ? "nav__link--active" : ""}`}
              onClick={() => handleNavClick(link)}
            >
              {link}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__video">
        <span>Demo Reel</span>
        <video src={demoReel} autoPlay loop muted />
      </div>
      <div className="hero__overlay" />
      <div className="hero__scroll-label">
        <span>Scroll</span>
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-card__thumb">
        {project.images[0] ? (
          <img src={project.images[0]} alt={project.title} className="project-card__img" />
        ) : (
          <span className="project-card__thumb-label">Image</span>
        )}
        <div className="project-card__overlay">
          <span></span>
        </div>
      </div>
      <div className="project-card__info">
        <p className="project-card__title">{project.title}</p>
        <p className="project-card__desc">{project.shortDescription}</p>
        <div className="project-card__tags">
          {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__header">
        <span>Projects</span>
        <div className="section__line" />
      </div>
      <div className="projects-grid">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>

      <div className="section__header" style={{ marginTop: "64px" }}>
        <span>Games</span>
        <div className="section__line" />
      </div>
      <div className="projects-grid">
        {games.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section--bordered">
      <div className="section__header">
        <span>About</span>
        <div className="section__line" />
      </div>
      <div className="about-content">
        <p>
          I am a Software and Game developer based out of Burlington, VT. 
          I work on all sorts of projects from graphics to software and am always down to learn something new!
        </p>
        <p>
          I have a background in creating .NET desktop applications and creating games in Unity.
          I enjoy all facets of game development, but my favorite thing to work with is graphics.
        </p>
        <p>Currently available for contracting and part-time opportunities.</p>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { label: "Email",  href: "mailto:ceichert3114@gmail.com", value: "ceichert3114@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/christophereichert/", value: "Christopher Eichert" },
    { label: "GitHub", href: "https://github.com/Ceichert31/", value: "Ceichert31" },
    { label: "itch.io", href: "https://pineapple3114.itch.io/", value: "Pineapple3114" },
  ];

  return (
    <section id="contact" className="section section--bordered">
      <div className="section__header">
        <span>Contact</span>
        <div className="section__line" />
      </div>
      <div className="contact-list">
        {links.map((l) => (
          <a key={l.label} href={l.href}>
            <span className="contact-list__label">{l.label}</span>
            <span>{l.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Resume() {
  const experience = [
    { role: "IoT Extraction Software Developer", company: "The Leahy Center for Digital Forensics & Cybersecurity", years: "2024 – Present" },
  ];

  const skills = ["Graphics Programming", ".NET", "C#", "C++", "Version Control", "Unity", "Vulkan"];

  return (
    <div className="section" style={{ paddingTop: "100px" }}>
      <div className="section__header">
        <span>Resume</span>
        <div className="section__line" />
      </div>
      <div className="resume-content">
        <div style={{ marginBottom: "48px" }}>
          <p className="resume-section-title">Experience</p>
          {experience.map((e) => (
            <div key={e.role} className="resume-entry">
              <div>
                <p className="resume-entry__role">{e.role}</p>
                <p className="resume-entry__company">{e.company}</p>
              </div>
              <span className="resume-entry__years">{e.years}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="resume-section-title">Skills</p>
          <div className="resume-skills">
            {skills.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="portfolio-root">
      <NavBar activePage={activePage} setActivePage={setActivePage} />
      {activePage === "home" ? (
        <>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </>
      ) : (
        <Resume />
      )}
      <footer className="footer">
        <span>Christopher Eichert</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
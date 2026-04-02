import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import { professional, personal, type Project } from "./data/projectData";
import demoReel from "./assets/DayNightVisual.mp4";
import resumePDF from "./assets/Christopher_Eichert_Resume.pdf";

const NAV_LINKS = ["Projects", "About", "Contact", "Resume"];

/*Navigation Bar*/
function NavBar({
  activePage,
  setActivePage,
}: {
  activePage: string;
  setActivePage: (p: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (link: string) => {
    const lower = link.toLowerCase();
    if (lower === "projects" || lower === "about" || lower === "contact") {
      setActivePage("home");
      navigate("/");
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
        onClick={() => {
          setActivePage("home");
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
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

/*Demo Reel/Hero*/
function Hero() {
  return (
    <section id="hero" className="hero">
      <video className="hero__video" src={demoReel} autoPlay loop muted playsInline />
      <div className="hero__overlay" />
      <div className="hero__scroll-label">
        <span>Scroll</span>
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  );
}

/*Project Cards*/
function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/project/${project.slug}`} className="project-card">
      <div className="project-card__thumb">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} className="project-card__img" />
        ) : (
          <span className="project-card__thumb-label">Image</span>
        )}
        <div className="project-card__overlay">
          <span className="project-card__overlay-label">View Project</span>
        </div>
      </div>
      <div className="project-card__info">
        <p className="project-card__title">{project.title}</p>
        <p className="project-card__desc">{project.shortDescription}</p>
        <div className="project-card__tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

/*Projects*/
function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__header">
        <span>Professional Projects</span>
        <div className="section__line" />
      </div>
      <div className="projects-grid">
        {professional.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>

      <div className="section__header" style={{ marginTop: "64px" }}>
        <span>Personal Projects</span>
        <div className="section__line" />
      </div>
      <div className="projects-grid">
        {personal.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}

/*About me*/
function About() {
  return (
    <section id="about" className="section section--bordered">
      <div className="section__header">
        <span>About</span>
        <div className="section__line" />
      </div>
      <div className="about-content">
        <p>
          Hi I'm Chris and I work in both Software and Game development.
          I have been making games since I was 15, and it has always been a passion of mine.        
        </p>
        <p>Once I got to College, I started working at The Leahy Center for Digital Forensics and Cybersecurity, and there I discovered my love for Software Development. 
          I enjoy learning new things and I love to explore different programming disciplines like Graphics, Physics, and VR. </p>
        <p>I am currently available for contracting and part-time opportunities. Feel free to reach out!</p>
      </div>
    </section>
  );
}

/*Contact*/
function Contact() {
  const links = [
    { label: "Email",    href: "mailto:ceichert3114@gmail.com",              value: "ceichert3114@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/christophereichert/", value: "Christopher Eichert" },
    { label: "GitHub",   href: "https://github.com/Ceichert31/",             value: "Ceichert31" },
    { label: "itch.io",  href: "https://pineapple3114.itch.io/",             value: "Pineapple3114" },
  ];

  return (
    <section id="contact" className="section section--bordered">
      <div className="section__header">
        <span>Contact</span>
        <div className="section__line" />
      </div>
      <div className="contact-list">
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
            <span className="contact-list__label">{l.label}</span>
            <span>{l.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

/*Resume*/
function Resume() {
  const experience = [
    {
      role: "IoT Extraction Software Developer",
      company: "The Leahy Center for Digital Forensics & Cybersecurity",
      years: "2024 – Present",
    },
  ];
  const skills = ["WPF", ".NET", "C#", "Version Control"];

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
        <div style={{ marginBottom: "48px" }}>
          <p className="resume-section-title">Skills</p>
          <div className="resume-skills">
            {skills.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>
        <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-download">
          View Full Resume →
        </a>
      </div>
    </div>
  );
}

/*Portfolio home*/
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
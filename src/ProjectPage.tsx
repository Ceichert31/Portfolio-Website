import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allItems, getStatusInfo, type Project } from "./data/projectData";
import "./App.css";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project: Project | undefined = allItems.find((p) => p.slug === slug);

  const [activeImg, setActiveImg] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  //Update active thumbnail
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = imageRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveImg(idx);
          }
        });
      },
      { root: gallery, threshold: 0.5 }
    );

    imageRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [project]);

  //Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setActiveImg(0);
  }, [slug]);

  if (!project) {
    return (
      <div className="ppage__not-found">
        <p>Project not found.</p>
        <button onClick={() => navigate("/")} className="ppage__back">
          ← Back to Portfolio
        </button>
      </div>
    );
  }

  const scrollToImage = (idx: number) => {
    imageRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const projectStatusInfo = getStatusInfo(project.status);

  return (
    <div className="ppage">
      {/*Blurred image bg*/}
      <div className="ppage__bg">
        <img src={project.images[0]} alt="" className="ppage__bg-img" />
        <div className="ppage__bg-fade" />
      </div>

      {/*Top of page*/}
      <nav className="nav">
        <button className="ppage__back" onClick={() => navigate(-1)}>
          <span style={{lineHeight: 1}}>←</span>
          <span>Back</span>
        </button>
      </nav>

      {/*Info panel and image gallery*/}
      <div className="ppage__body">

        {/*Info panel*/}
        <aside className="ppage__panel">
          <h1 className="ppage__title">{project.title}</h1>
          <h3 className="ppage__status" style={{color: projectStatusInfo.color}} >{projectStatusInfo.text}</h3>

          <div className="ppage__tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <h2 className="ppage__status">Description</h2>
          <p className="ppage__description">{project.description}</p>
          
          <h2 className="ppage__status">Role</h2>
          <p className="ppage__description">{project.role}</p>

          {project.links.length > 0 && (
            <div className="ppage__links">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ppage__link"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          )}

          {/*Thumbnail scrollview*/}
          <div className="ppage__thumbs">
            {project.images.map((src, i) => (
              <button
                key={i}
                className={`ppage__thumb ${i === activeImg ? "ppage__thumb" : ""}`}
                onClick={() => scrollToImage(i)}
                aria-label={`View image ${i + 1}`}
              >
                <img src={src} alt={`${project.title} ${i + 1}`} />
              </button>
            ))}
          </div>
        </aside>

        {/*Main image gallery*/}
        <div className="ppage__gallery" ref={galleryRef}>
          {project.images.map((src, i) => (
            <div
              key={i}
              className="ppage__img-block"
              ref={(el) => { imageRefs.current[i] = el; }}
            >
              <img
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="ppage__img"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import { FiMail, FiArrowRight } from "react-icons/fi";
import { personal, stats } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-inner">
          {/* Content */}
          <div className="hero-content">
            <h1>
              Alexander
              <span className="hero-name-muted">Fonseca</span>
            </h1>

            <p className="hero-subtitle">{personal.title}</p>

            <p className="hero-bio">{personal.bio}</p>

            <div className="hero-actions">
              <a className="btn-primary" href="#proyectos">
                Ver proyectos <FiArrowRight />
              </a>
              <a className="btn-secondary" href={`mailto:${personal.email}`}>
                <FiMail /> Escribir mensaje
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="hero-stat-number">{s.number}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="hero-photo-col">
            <div className="hero-photo-wrap">
              <div className="hero-photo-frame" />
              <img
                src={personal.photo}
                alt="Alexander Fonseca"
                className="hero-photo-img"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="hero-photo-placeholder" style={{ display: "none" }}>
                AF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

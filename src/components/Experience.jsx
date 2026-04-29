import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experiencia">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Trayectoria</p>
          <h2 className="section-title">Experiencia profesional</h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <div className="exp-item" key={item.company}>
              <div className="exp-meta">
                <p className="exp-period">{item.period}</p>
                <p className="exp-company">{item.company}</p>
              </div>
              <div>
                <p className="exp-role">{item.role}</p>
                <p className="exp-desc">{item.description}</p>
                <div className="exp-tags">
                  {item.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

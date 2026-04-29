import { education } from "../data/content";

export default function Education() {
  return (
    <section id="educacion">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Formación</p>
          <h2 className="section-title">Educación</h2>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <div className="edu-item" key={item.degree}>
              <p className="edu-period">{item.period}</p>
              <div>
                <p className="edu-degree">{item.degree}</p>
                <p className="edu-institution">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from "react-icons/tb";
import { designProject } from "../data/content";

const toolIconMap = {
  SiAdobeillustrator: <TbBrandAdobeIllustrator />,
  SiAdobephotoshop: <TbBrandAdobePhotoshop />,
};

export default function DesignGallery() {
  const d = designProject;

  return (
    <section id="diseno">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Proyectos</p>
          <h2 className="section-title">Diseño gráfico</h2>
        </div>

        <div className="design-project-card">
          {/* Client header */}
          <div className="design-client-header">
            <div className="design-client-info">
              <p className="design-client-sub">Cliente</p>
              <h3 className="design-client-name">{d.client}</h3>
              <p className="design-client-desc">{d.description}</p>
            </div>
            <div>
              <p className="skills-group-title" style={{ marginBottom: 12 }}>
                Herramientas
              </p>
              <div className="design-tools">
                {d.tools.map((t) => (
                  <span className="design-tool-pill" key={t.name}>
                    {toolIconMap[t.icon]} {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Categorized gallery */}
          <div className="design-categories-wrap">
            {d.categories.map((cat) => (
              <div className="design-category" key={cat.label}>
                <p className="design-cat-title">{cat.label}</p>
                <div className={`design-gallery-grid design-gallery-${cat.variant}`}>
                  {cat.images.map((item) => (
                    <div className="design-gallery-item" key={item.src}>
                      <img
                        src={item.src}
                        alt={item.label}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling.style.display = "flex";
                        }}
                      />
                      <div className="design-img-placeholder" style={{ display: "none" }}>
                        {item.label}
                      </div>
                      <div className="design-gallery-label">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

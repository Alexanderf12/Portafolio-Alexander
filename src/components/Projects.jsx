import { FiExternalLink } from "react-icons/fi";
import {
  SiReact, SiJavascript, SiNodedotjs, SiExpress,
  SiHtml5, SiFigma, SiMysql, SiSupabase, SiVite,
  SiGooglesheets,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { webProjects } from "../data/content";

/* Claude AI — custom minimal SVG icon */
function ClaudeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.304 1.01C14.99.343 12.553.01 12 .01c-.553 0-2.99.333-5.304 1C4.03 1.747 2 3.98 2 7.17c0 2.49 1.023 4.623 2.88 6.022L4.75 16.5l2.43-1.38c1.24.45 2.59.7 4.82.7 5.52 0 10-3.58 10-8 0-3.19-2.03-5.423-4.696-6.81zM12 14.82c-2.02 0-3.19-.26-4.27-.65l-.3-.11-1.82 1.03.5-2.22-.21-.17C4.27 11.52 3.5 9.79 3.5 7.17c0-2.55 1.6-4.26 3.81-4.97C9.08 1.69 11.08 1.51 12 1.51c.92 0 2.92.18 4.69.69 2.21.71 3.81 2.42 3.81 4.97 0 3.56-3.58 7.65-8.5 7.65z"/>
    </svg>
  );
}

const iconMap = {
  SiReact: <SiReact />,
  SiJavascript: <SiJavascript />,
  SiNodedotjs: <SiNodedotjs />,
  SiExpress: <SiExpress />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <FaCss3Alt />,
  SiFigma: <SiFigma />,
  SiMysql: <SiMysql />,
  SiSupabase: <SiSupabase />,
  SiVite: <SiVite />,
  SiGooglesheets: <SiGooglesheets />,
  claude: <ClaudeIcon />,
};

function ChromeBar() {
  return (
    <div className="pcard-chrome">
      <div className="chrome-dot" />
      <div className="chrome-dot" />
      <div className="chrome-dot" />
      <div className="chrome-bar" />
    </div>
  );
}

function ProjectImg({ src, title }) {
  return (
    <div className="pcard-img-wrap">
      <img
        src={src}
        alt={title}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextElementSibling.style.display = "flex";
        }}
      />
      <div className="pcard-img-placeholder" style={{ display: "none" }}>
        {title.charAt(0)}
      </div>
    </div>
  );
}

/* Strip of extra screenshots for the featured ERP project */
function ScreenshotStrip({ images }) {
  if (!images || images.length <= 1) return null;
  return (
    <div className="erp-strip">
      {images.slice(1).map((src, i) => (
        <div className="erp-thumb" key={i}>
          <img src={src} alt={`Vista ${i + 2}`}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = webProjects;

  return (
    <section id="proyectos">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Proyectos</p>
          <h2 className="section-title">Desarrollo web</h2>
        </div>

        {/* Featured project — horizontal */}
        <div className="projects-featured">
          <div className="pcard pcard-featured">
            <div className="pcard-featured-img-col">
              <ProjectImg src={featured.image} title={featured.title} />
              <ScreenshotStrip images={featured.images} />
            </div>
            <div className="pcard-body">
              <p className="pcard-type">{featured.type}</p>
              <h3 className="pcard-title">{featured.title}</h3>
              <p className="pcard-desc">{featured.description}</p>
              <div className="pcard-tech">
                {featured.tags.map((t) => (
                  <span className="tech-pill" key={t.name}>
                    {iconMap[t.icon]} {t.name}
                  </span>
                ))}
              </div>
              {featured.link && (
                <a
                  className="pcard-link"
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {featured.linkLabel} <FiExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Rest 2-column grid */}
        <div className="projects-grid-2">
          {rest.map((p) => (
            <div className="pcard" key={p.title}>
              <ChromeBar />
              <ProjectImg src={p.image} title={p.title} />
              <div className="pcard-body">
                <p className="pcard-type">{p.type}</p>
                <h3 className="pcard-title">{p.title}</h3>
                <p className="pcard-desc">{p.description}</p>
                <div className="pcard-tech">
                  {p.tags.map((t) => (
                    <span className="tech-pill" key={t.name}>
                      {iconMap[t.icon]} {t.name}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    className="pcard-link"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.linkLabel} <FiExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

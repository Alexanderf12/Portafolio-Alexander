import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { personal } from "../data/content";

export default function Contact() {
  return (
    <section id="contacto">
      <div className="container">
        <div className="contact-wrap">
          <h2 className="contact-title">Trabajemos juntos</h2>
          <p className="contact-sub">
            Disponible para proyectos freelance, colaboraciones y oportunidades
            laborales en desarrollo web o diseño gráfico.
          </p>
          <div className="contact-links">
            <a className="btn-white" href={`mailto:${personal.email}`}>
              <FiMail /> Enviar correo
            </a>
            <a
              className="btn-outline-white"
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              className="btn-outline-white"
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

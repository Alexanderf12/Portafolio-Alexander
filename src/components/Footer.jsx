import { personal } from "../data/content";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">© 2026 Alexander Fonseca Aguilar</p>
          <div className="footer-links">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

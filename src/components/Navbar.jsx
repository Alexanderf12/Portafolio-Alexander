import { useState } from "react";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Diseño", href: "#diseno" },
  { label: "Experiencia", href: "#experiencia" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a className="nav-logo" href="#inicio">Alexander Fonseca</a>
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a className="nav-cta" href="#contacto">Contacto</a>
          <button
            className="nav-menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
      </div>
    </>
  );
}

import {
  SiReact, SiJavascript, SiNodedotjs, SiExpress, SiAngular,
  SiPhp, SiHtml5, SiFigma, SiInvision, SiCanva, SiAffinity,
  SiMysql, SiMariadb, SiSupabase,
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from "react-icons/tb";
import { skills } from "../data/content";

const iconMap = {
  SiReact: <SiReact />,
  SiJavascript: <SiJavascript />,
  SiNodedotjs: <SiNodedotjs />,
  SiExpress: <SiExpress />,
  SiAngular: <SiAngular />,
  SiPhp: <SiPhp />,
  SiJava: <FaJava />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <FaCss3Alt />,
  SiAdobeillustrator: <TbBrandAdobeIllustrator />,
  SiAdobephotoshop: <TbBrandAdobePhotoshop />,
  SiFigma: <SiFigma />,
  SiInvision: <SiInvision />,
  SiCanva: <SiCanva />,
  SiAffinitypublisher: <SiAffinity />,
  SiMysql: <SiMysql />,
  SiMariadb: <SiMariadb />,
  SiSupabase: <SiSupabase />,
  SiOracle: <FaDatabase />,
};

const groups = [
  { key: "development", label: "Desarrollo", items: skills.development },
  { key: "design", label: "Diseño", items: skills.design },
  { key: "databases", label: "Bases de datos", items: skills.databases },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Habilidades</p>
          <h2 className="section-title">Stack técnico</h2>
        </div>
        <div className="skills-grid">
          {groups.map((group) => (
            <div className="skills-group" key={group.key}>
              <p className="skills-group-title">{group.label}</p>
              <div className="skills-list">
                {group.items.map((s) => (
                  <div className="skill-item" key={s.name}>
                    {iconMap[s.icon]}
                    {s.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

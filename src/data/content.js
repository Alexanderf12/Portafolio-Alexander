export const personal = {
  name: "Alexander Fonseca",
  title: "Desarrollador Web & Diseñador Gráfico",
  email: "afonseaguilar343@gmail.com",
  phone: "+507 6857-3987",
  location: "Panamá",
  github: "https://github.com/Alexanderf12",
  linkedin: "https://linkedin.com/in/alexander-fonseca",
  bio: "Desarrollador web y diseñador gráfico con más de 6 años de experiencia en diseño visual y producción digital. Combino desarrollo de aplicaciones modernas con identidad de marca y producción gráfica.",
  photo: "/ALEXANDER FONSECA.jpeg",
};

export const stats = [
  { number: "6+", label: "Años de experiencia" },
  { number: "10+", label: "Proyectos entregados" },
  { number: "2", label: "Especialidades" },
];

export const skills = {
  development: [
    { name: "React", icon: "SiReact" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "AngularJS", icon: "SiAngular" },
    { name: "PHP", icon: "SiPhp" },
    { name: "Java", icon: "SiJava" },
    { name: "HTML", icon: "SiHtml5" },
    { name: "CSS", icon: "SiCss3" },
  ],
  design: [
    { name: "Illustrator", icon: "SiAdobeillustrator" },
    { name: "Photoshop", icon: "SiAdobephotoshop" },
    { name: "Figma", icon: "SiFigma" },
    { name: "InVision", icon: "SiInvision" },
    { name: "Canva", icon: "SiCanva" },
    { name: "Affinity", icon: "SiAffinitypublisher" },
  ],
  databases: [
    { name: "MySQL", icon: "SiMysql" },
    { name: "MariaDB", icon: "SiMariadb" },
    { name: "Supabase", icon: "SiSupabase" },
    { name: "Oracle", icon: "SiOracle" },
  ],
};

export const webProjects = [
  {
    type: "Sistema ERP",
    title: "Taller Gráfico — Gestión de Producción",
    description:
      "ERP ligero para taller de impresión de gran formato. Módulos de producción (órdenes, inventario de tinta), Plan Visibilidad (branding en puntos de venta: medición, mockups, instalación fotográfica) y dashboard con métricas en tiempo real por marca y mes.",
    tags: [
      { name: "Google Sheets", icon: "SiGooglesheets" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Claude AI", icon: "claude" },
    ],
    images: [
      "/projects/Sistema control integral de produccion.jpg",
      "/projects/Sistema control integral de produccion2.jpg",
      "/projects/Sistema control integral de produccion3.jpg",
      "/projects/Sistema control integral de produccion4.jpg",
    ],
    image: "/projects/Sistema control integral de produccion.jpg",
    link: null,
    featured: true,
  },
  {
    type: "Sitio Corporativo",
    title: "Blandon Bonilla & Asociados",
    description:
      "Sitio web corporativo para firma jurídica panameña. Identidad visual, arquitectura de contenidos en dos idiomas y experiencia de usuario orientada a la captación de clientes.",
    tags: [
      { name: "React", icon: "SiReact" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
      { name: "Supabase", icon: "SiSupabase" },
      { name: "Node.js", icon: "SiNodedotjs" },
    ],
    image: "/projects/bba-web.jpg",
    link: "https://blandonlegal.com",
    linkLabel: "blandonlegal.com →",
  },
  {
    type: "Portafolio Web",
    title: "Augusto Salas Arquitectura",
    description:
      "Sitio portafolio para estudio de arquitectura independiente. Diseño oscuro y elegante con énfasis en la presentación visual de proyectos, catálogo de productos y cotizador en línea.",
    tags: [
      { name: "React", icon: "SiReact" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
      { name: "Supabase", icon: "SiSupabase" },
      { name: "Node.js", icon: "SiNodedotjs" },
    ],
    image: "/projects/augusto-salas.jpg",
    link: null,
  },
  {
    type: "Portafolio Personal",
    title: "Portafolio Digital — Alexander Fonseca",
    description:
      "Hoja de vida digital que integra desarrollo web y diseño gráfico en una sola experiencia coherente. Desplegada en Vercel, construida con React y Vite.",
    tags: [
      { name: "React", icon: "SiReact" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "CSS", icon: "SiCss3" },
      { name: "Vite", icon: "SiVite" },
    ],
    image: "/projects/portafolio.jpg",
    link: "https://github.com/Alexanderf12",
    linkLabel: "github.com/Alexanderf12 →",
  },
];

export const designProject = {
  client: "Blandon Bonilla & Asociados",
  subtitle: "Identidad de Marca & Producción Digital",
  description:
    "Desarrollo completo del sistema visual para firma jurídica panameña: logotipo, manual de marca, piezas para redes sociales, tarjetas de presentación y aplicaciones en mockups de papelería y señalética.",
  tools: [
    { name: "Illustrator", icon: "SiAdobeillustrator" },
    { name: "Photoshop", icon: "SiAdobephotoshop" },
  ],
  categories: [
    {
      label: "Identidad de marca",
      variant: "brand",
      images: [
        { src: "/design/Presentación de Logo.jpg",  label: "Presentación de Logo" },
        { src: "/design/Presentación de Logo2.jpg", label: "Presentación de Logo 2" },
        { src: "/design/Presentación de Logo3.jpg", label: "Presentación de Logo 3" },
      ],
    },
    {
      label: "Redes sociales",
      variant: "social",
      images: [
        { src: "/design/BB DISEÑO IG.jpg",           label: "BB Diseño IG" },
        { src: "/design/DISEÑO IG.jpg",               label: "Diseño IG" },
        { src: "/design/DISEÑO IG2.jpg",              label: "Diseño IG 2" },
        { src: "/design/DISEÑO IG MUJER.jpg",         label: "Día Internacional de la Mujer" },
        { src: "/design/DISEÑO IG MIGRACION.jpg",     label: "Legaliza tu residencia" },
        { src: "/design/DISEÑO SOCIAL MEDIA.jpg",     label: "Servicios especializados" },
        { src: "/design/CARRUSEL IG 1.jpg",           label: "Carrusel IG 1" },
        { src: "/design/CARRUSEL IG 2.jpg",           label: "Carrusel IG 2" },
        { src: "/design/IG DIA DEL TRABAJADOR.jpg",   label: "Día del Trabajador" },
        { src: "/design/judicial-02.jpg",             label: "Comprometidos con la justicia" },
        { src: "/design/Post de Instagram Agente de Bienes Raices Verde.jpg", label: "Bienes Raíces" },
      ],
    },
    {
      label: "Mockups",
      variant: "mockup",
      images: [
        { src: "/design/MOCKUPS TARJETAS DE PRESENTACION1.jpg", label: "Tarjetas de presentación" },
        { src: "/design/MOCKUPS TARJETAS DE PRESENTACION2.jpg", label: "Tarjetas de presentación" },
        { src: "/design/MOCKUPS TARJETAS DE PRESENTACION3.jpg", label: "Tarjetas de presentación" },
      ],
    },
  ],
};

export const experience = [
  {
    company: "AJE Group",
    role: "Auxiliar de Plotter de Impresión",
    period: "2025 — Actualidad",
    description:
      "Operación de plotter de gran formato para producción de materiales POP y publicitarios. Adaptación de artes gráficos bajo estándares técnicos de impresión y gestión de insumos para garantizar tiempos de entrega.",
    tags: ["Illustrator", "Photoshop", "Producción gráfica"],
  },
  {
    company: "Copy Arte",
    role: "Diseñador Gráfico",
    period: "2022 — 2025",
    description:
      "Creación de materiales gráficos para clientes de distintos sectores. Gestión directa de solicitudes, asegurando coherencia visual y cumplimiento de plazos en cada entrega.",
    tags: ["Diseño gráfico", "Identidad visual"],
  },
  {
    company: "Bs Graphics",
    role: "Diseñador Gráfico & Soporte al Cliente",
    period: "2018 — 2021",
    description:
      "Diseño de piezas visuales según especificaciones de clientes, control de calidad en impresiones y asesoría directa en servicios y productos gráficos.",
    tags: ["Diseño gráfico", "Control de calidad"],
  },
];

export const education = [
  {
    degree: "Licenciatura en Desarrollo de Software",
    institution: "Universidad Tecnológica de Panamá",
    period: "En curso",
  },
  {
    degree: "Formación en Diseño Gráfico & Producción Visual",
    institution: "Bs Graphics / Copy Arte",
    period: "2018 — 2021",
  },
];

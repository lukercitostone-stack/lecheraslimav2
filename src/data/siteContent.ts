export const siteConfig = {
  name: "Enfermeras 24 Horas",
  legalName: "Enfermeras 24 Horas en Lima",
  siteUrl: "https://enfermeras24horas.com",
  alternateNames: [
    "Enfermeras a Toda Hora",
    "Enfermeras a domicilio en Lima",
    "Enfermeras 24 horas Lima",
  ],
  phoneRaw: "51926155440",
  phoneDisplay: "926 155 440",
  phoneInternational: "+51 926 155 440",
  schedule: "Atención 24 horas, lunes a domingo",
  location: "Lima Metropolitana, Perú",
  city: "Lima",
  region: "Lima Metropolitana",
  countryCode: "PE",
  whatsappMessage:
    "Hola, Enfermeras 24 Horas. He visto su página web y me gustaría recibir información personalizada sobre sus servicios de enfermería a domicilio. ¿Podrían ayudarme?",
  socialLinks: {
    facebook: "https://www.facebook.com/EnfermerasATODAHORAOficial/",
    instagram: "https://www.instagram.com/enfermerasatodahora/",
    linkedin: "https://www.linkedin.com/company/enfermeras-a-toda-ho",
  },
} as const;

export function buildWhatsAppUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const navigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const quickHighlights = [
  "Enfermeras a domicilio en Lima con atención 24 horas para casos programados y urgentes",
  "Respuesta rápida por WhatsApp, llamadas y orientación online antes de la visita",
  "Cobertura en Lima Metropolitana para adultos mayores, pacientes postoperatorios y procedimientos clínicos",
] as const;

export const trustPoints = [
  "Curaciones, inyectables, vía endovenosa y procedimientos de enfermería en casa",
  "Cuidados postoperatorios, control de signos vitales y seguimiento del tratamiento indicado",
  "Acompañamiento seguro para adultos mayores, pacientes delicados y familias que requieren respaldo profesional",
] as const;

export type Service = {
  title: string;
  description: string;
  image: string;
  imageContain?: boolean;
};

export const services: Service[] = [
  {
    title: "Procedimientos de enfermería",
    description:
      "Atención técnica en domicilio para procedimientos frecuentes con seguridad, orden y acompañamiento.",
    image: "/medical/service-01.jpg",
  },
  {
    title: "Cuidadoras de adulto mayor",
    description:
      "Apoyo responsable y cálido para el cuidado diario, movilidad, higiene y bienestar del paciente.",
    image: "/medical/service-02.jpg",
  },
  {
    title: "Colocación de vía endovenosa",
    description:
      "Canalización y supervisión del procedimiento por personal con experiencia en atención domiciliaria.",
    image: "/medical/service-03.jpg",
  },
  {
    title: "Aplicación de inyectables intradérmica",
    description:
      "Aplicación cuidadosa con técnica profesional y orientación posterior para el paciente y la familia.",
    image: "/medical/service-04.jpg",
  },
  {
    title: "Cuidados post operatorios",
    description:
      "Soporte después de cirugía para una recuperación más cómoda, controlada y cercana.",
    image: "/medical/service-05.jpg",
  },
  {
    title: "Aplicación de inyectables intramuscular",
    description:
      "Atención rápida y segura para tratamientos indicados por el profesional de salud.",
    image: "/medical/service-06.jpg",
  },
  {
    title: "Curación de heridas en general",
    description:
      "Limpieza, control y seguimiento de heridas con materiales y protocolos adecuados.",
    image: "/medical/service-07.jpg",
  },
  {
    title: "Medición de signos vitales",
    description:
      "Monitoreo claro y confiable para mantener control sobre la evolución del paciente.",
    image: "/medical/service-08.jpg",
  },
  {
    title: "Retiro de puntos",
    description:
      "Retiro de suturas en casa con evaluación previa del área tratada y recomendaciones de cuidado.",
    image: "/medical/service-09.jpg",
  },
  {
    title: "Colocación de enema",
    description:
      "Asistencia profesional en domicilio para procedimientos que requieren privacidad y técnica correcta.",
    image: "/medical/service-10.jpg",
    imageContain: true,
  },
  {
    title: "Colocación de sondas",
    description:
      "Atención especializada para manejo y seguimiento de sondas con acompañamiento responsable.",
    image: "/medical/service-11.jpg",
  },
  {
    title: "Curación de escaras",
    description:
      "Manejo cuidadoso de lesiones por presión con control continuo y enfoque preventivo.",
    image: "/medical/service-12.jpg",
  },
];

export const serviceOptions = [
  ...services.map((service) => service.title),
  "Vitamina C endovenosa a domicilio",
  "Análisis de laboratorio a domicilio",
  "Oxígeno medicinal a domicilio",
  "Otro servicio",
] as const;

export type BenefitIconKey =
  | "personalized"
  | "followUp"
  | "supervision"
  | "certified"
  | "tailored"
  | "portfolio"
  | "specialists"
  | "education";

export const benefits: Array<{
  title: string;
  description: string;
  icon: BenefitIconKey;
}> = [
  {
    title: "Atención personalizada",
    description:
      "Cada visita se adapta al diagnóstico, horarios, indicaciones médicas y necesidades reales del paciente.",
    icon: "personalized",
  },
  {
    title: "Seguimiento y acompañamiento",
    description:
      "No solo realizamos el procedimiento: acompañamos la evolución y orientamos a la familia durante la atención.",
    icon: "followUp",
  },
  {
    title: "Supervisión integral",
    description:
      "Control responsable de cada intervención para dar tranquilidad a pacientes, familiares y cuidadores.",
    icon: "supervision",
  },
  {
    title: "Proveedores certificados",
    description:
      "Trabajamos con personal capacitado y experiencia en atención domiciliaria en Lima.",
    icon: "certified",
  },
  {
    title: "Planes a la medida del paciente",
    description:
      "Organizamos la atención según diagnóstico, frecuencia requerida, distrito y dinámica del hogar.",
    icon: "tailored",
  },
  {
    title: "Diversidad de portafolio",
    description:
      "Servicios de enfermería, acompañamiento, curaciones, sondas, inyectables y procedimientos especializados.",
    icon: "portfolio",
  },
  {
    title: "Profesionales con especialidad",
    description:
      "Equipo con experiencia en pacientes postoperatorios, adultos mayores, tratamientos endovenosos y cuidados complejos.",
    icon: "specialists",
  },
  {
    title: "Educación de atención al paciente",
    description:
      "Orientamos a la familia para reforzar cuidados, detectar alertas y mejorar la continuidad en casa.",
    icon: "education",
  },
];

export const testimonials = [
  {
    name: "Karyn Melissa Córdova Palacios",
    time: "Hace 2 años",
    quote: "Me atendieron un fin de semana y fueron puntuales.",
  },
  {
    name: "Paola Henao",
    time: "Hace 2 años",
    quote:
      "Súper recomendadas, muy amables, puntuales y de gran ayuda para un momento de emergencia.",
  },
  {
    name: "Rebeca Ortiz Santos",
    time: "Hace 2 años",
    quote: "Muy serviciales y atentas, gracias por la atención.",
  },
  {
    name: "Clayde Saucedo",
    time: "Hace 2 años",
    quote:
      "Excelente atención y puntualidad. La profesional a cargo fue clara, empática y precisa.",
  },
  {
    name: "Keysy Northcote",
    time: "Hace 2 años",
    quote: "Excelente servicio, ya vengo usándolo un par de veces y nunca fallan.",
  },
] as const;

export const galleryImages = [
  {
    src: "/medical/gallery-01.jpg",
    alt: "Enfermera a domicilio brindando atención profesional en Lima",
  },
  {
    src: "/medical/gallery-02.jpg",
    alt: "Cuidados de enfermería a domicilio para paciente adulto mayor",
  },
  {
    src: "/medical/gallery-03.jpg",
    alt: "Servicio de enfermeras 24 horas con acompañamiento en casa",
  },
  {
    src: "/medical/gallery-04.jpg",
    alt: "Procedimiento de enfermería a domicilio realizado por personal profesional",
  },
  {
    src: "/medical/gallery-05.jpg",
    alt: "Seguimiento de paciente con enfermera a domicilio en Lima Metropolitana",
  },
  {
    src: "/medical/gallery-06.jpg",
    alt: "Atención domiciliaria de enfermería para recuperación y monitoreo",
  },
] as const;

export const metrics = [
  {
    value: "3000+",
    label: "Pacientes y familias atendidas",
    supporting: "Servicios coordinados en Lima con seguimiento cercano, respuesta rápida y atención humana.",
  },
  {
    value: "5+",
    label: "Años de experiencia",
    supporting: "Trayectoria brindando enfermería a domicilio para recuperación, adultos mayores y controles clínicos.",
  },
  {
    value: "30+",
    label: "Profesionales disponibles",
    supporting: "Red de enfermeras y técnicas preparadas para distintos tipos de atención domiciliaria.",
  },
] as const;

export const faqItems = [
  {
    question: "¿Atienden enfermeras a domicilio las 24 horas en Lima?",
    answer:
      "Sí. Brindamos coordinación y atención de enfermeras a domicilio las 24 horas, todos los días de la semana, según disponibilidad y tipo de procedimiento requerido.",
  },
  {
    question: "¿Puedo solicitar una enfermera por horas o por turnos?",
    answer:
      "Sí. Podemos coordinar enfermeras por horas, turnos prolongados o atención puntual, según el estado del paciente, el distrito y la indicación del servicio.",
  },
  {
    question: "¿Qué procedimientos realizan a domicilio?",
    answer:
      "Realizamos curaciones, inyectables, colocación de vía endovenosa, control de signos vitales, retiro de puntos, cuidados postoperatorios, colocación de sondas y otros procedimientos de enfermería a domicilio.",
  },
  {
    question: "¿Atienden adultos mayores y pacientes postoperatorios?",
    answer:
      "Sí. Atendemos adultos mayores, pacientes en recuperación postoperatoria y personas que requieren monitoreo, administración de medicamentos o acompañamiento profesional en casa.",
  },
  {
    question: "¿En qué distritos de Lima trabajan?",
    answer:
      "Trabajamos en distintos distritos de Lima Metropolitana. Al escribirnos por WhatsApp validamos cobertura, tiempo estimado de llegada y disponibilidad para su zona.",
  },
  {
    question: "¿Puedo recibir orientación con una enfermera online por WhatsApp?",
    answer:
      "Sí. Podemos orientarlo por WhatsApp para entender la necesidad, revisar el tipo de atención y ayudarle a coordinar la visita domiciliaria más adecuada.",
  },
  {
    question: "¿Cuál es el precio de una enfermera a domicilio?",
    answer:
      "El costo depende del procedimiento, la duración del servicio, el distrito, el horario y el perfil del paciente. Por eso brindamos cotizaciones personalizadas según cada caso.",
  },
  {
    question: "¿Cómo solicito una enfermera a toda hora?",
    answer:
      "Puede llamarnos o escribirnos por WhatsApp. Con algunos datos del paciente le indicamos el servicio recomendado, el tiempo estimado de atención y el costo aproximado.",
  },
] as const;

export const articles = [
  {
    category: "Enfermería a domicilio",
    title: "¿Cuándo conviene contratar una enfermera a domicilio 24 horas?",
    excerpt:
      "Señales de alerta, tipos de pacientes y situaciones en las que una atención continua en casa puede marcar la diferencia.",
    image: "/medical/article-01.jpg",
  },
  {
    category: "Cuidados postoperatorios",
    title: "Cuidados postoperatorios a domicilio en Lima: qué debe vigilar la familia",
    excerpt:
      "Recomendaciones básicas sobre dolor, heridas, medicación y seguimiento profesional después de una cirugía.",
    image: "/medical/article-02.jpg",
  },
  {
    category: "Orientación online",
    title: "Enfermeras online por WhatsApp: qué se puede resolver antes de la visita",
    excerpt:
      "Cómo una orientación rápida ayuda a coordinar mejor la atención, preparar materiales y definir el tipo de servicio requerido.",
    image: "/medical/article-03.jpg",
  },
] as const;

export const footerServices = [
  "Enfermeras a domicilio 24 horas",
  "Enfermeras por horas en Lima",
  "Inyectables y vía endovenosa",
  "Cuidados postoperatorios en casa",
] as const;

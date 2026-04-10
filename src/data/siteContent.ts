export const siteConfig = {
  name: "Enfermeras 24 Horas",
  legalName: "Enfermeras a domicilio en Lima",
  phoneRaw: "51926155440",
  phoneDisplay: "926 155 440",
  phoneInternational: "+51 926 155 440",
  schedule: "Atención 24 horas, lunes a domingo",
  location: "Guillermo Prescott 239, San Isidro",
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
  "Atención en casa con enfoque humano y profesional",
  "Respuesta rápida por WhatsApp para casos programados y urgentes",
  "Cobertura en Lima con disponibilidad 24/7",
] as const;

export const trustPoints = [
  "Cuidados postoperatorios y administración de medicamentos",
  "Seguimiento de signos vitales y procedimientos específicos",
  "Acompañamiento seguro para adultos mayores y pacientes complejos",
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
      "Cada servicio se ajusta al estado de salud, horarios y requerimientos del paciente.",
    icon: "personalized",
  },
  {
    title: "Seguimiento y acompañamiento",
    description:
      "No solo ejecutamos el procedimiento: acompañamos la evolución y resolvemos dudas clave.",
    icon: "followUp",
  },
  {
    title: "Supervisión integral",
    description:
      "Control responsable de cada intervención para brindar tranquilidad a la familia.",
    icon: "supervision",
  },
  {
    title: "Proveedores certificados",
    description:
      "Trabajamos con personal capacitado y enfoque profesional en atención domiciliaria.",
    icon: "certified",
  },
  {
    title: "Planes a la medida del paciente",
    description:
      "Diseñamos la atención según diagnóstico, frecuencia requerida y dinámica del hogar.",
    icon: "tailored",
  },
  {
    title: "Diversidad de portafolio",
    description:
      "Servicios de enfermería, acompañamiento, curaciones y procedimientos especializados.",
    icon: "portfolio",
  },
  {
    title: "Profesionales con especialidad",
    description:
      "Equipo con experiencia en pacientes postoperatorios, adultos mayores y tratamientos específicos.",
    icon: "specialists",
  },
  {
    title: "Educación de atención al paciente",
    description:
      "Orientamos a la familia para reforzar cuidados y mejorar la continuidad en casa.",
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
  "/medical/gallery-01.jpg",
  "/medical/gallery-02.jpg",
  "/medical/gallery-03.jpg",
  "/medical/gallery-04.jpg",
  "/medical/gallery-05.jpg",
  "/medical/gallery-06.jpg",
] as const;

export const metrics = [
  {
    value: "3000+",
    label: "Clientes satisfechos",
    supporting: "Familias atendidas con seguimiento cercano y respuesta rápida.",
  },
  {
    value: "5+",
    label: "Años de experiencia",
    supporting: "Trayectoria cuidando pacientes en casa con criterio profesional.",
  },
  {
    value: "30+",
    label: "Profesionales en enfermería",
    supporting: "Red de personal preparado para distintos tipos de atención domiciliaria.",
  },
] as const;

export const faqItems = [
  {
    question: "¿Realizan el servicio de enfermeras a domicilio las 24 horas?",
    answer:
      "Sí. Nuestro servicio está pensado para responder tanto a necesidades programadas como a situaciones que requieren atención en horarios extendidos, todos los días de la semana.",
  },
  {
    question: "¿Cuál es el precio de una enfermera a domicilio?",
    answer:
      "El costo depende del procedimiento, la duración del servicio, el distrito y el perfil del paciente. Lo ideal es escribirnos por WhatsApp para brindarle una cotización personalizada.",
  },
  {
    question: "¿Cuentan con técnicas de enfermería a domicilio?",
    answer:
      "Sí. Contamos con personal capacitado para procedimientos frecuentes y cuidados especializados en el entorno domiciliario.",
  },
  {
    question: "¿Son una agencia de enfermería a domicilio?",
    answer:
      "Brindamos coordinación y atención enfocada en enfermería domiciliaria, buscando rapidez, confianza y continuidad para cada familia.",
  },
  {
    question: "¿Cuándo contratar una enfermera a domicilio por horas?",
    answer:
      "Es una buena opción cuando el paciente necesita apoyo durante recuperaciones, administración de medicamentos, monitoreo o acompañamiento puntual sin requerir internamiento.",
  },
  {
    question: "¿Necesita una enfermera a domicilio?",
    answer:
      "Si su familiar requiere cuidados especializados, soporte postoperatorio, control de signos vitales o ayuda profesional en casa, podemos orientarlo y proponer el servicio adecuado.",
  },
] as const;

export const articles = [
  {
    category: "Cuidados en casa",
    title: "¿Qué son los cuidados de enfermería a domicilio?",
    excerpt:
      "Una introducción clara a los servicios profesionales que se brindan directamente en el hogar del paciente.",
    image: "/medical/article-01.jpg",
  },
  {
    category: "Curación de heridas",
    title: "Somos líderes en prevención y curación de heridas",
    excerpt:
      "Buenas prácticas, control de evolución y atención técnica para proteger la recuperación del paciente.",
    image: "/medical/article-02.jpg",
  },
  {
    category: "Tratamientos complementarios",
    title: "Conozca sobre la vitamina C y el cocktail de vida Pascoe",
    excerpt:
      "Información breve sobre alternativas terapéuticas y acompañamiento profesional en domicilio.",
    image: "/medical/article-03.jpg",
  },
] as const;

export const footerServices = [
  "Enfermeras a domicilio",
  "Inyectables a domicilio",
  "Vía endovenosa",
  "Cuidados postoperatorios",
] as const;

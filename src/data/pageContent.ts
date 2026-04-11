export type PageFaqItem = {
  question: string;
  answer: string;
};

export type PageArticle = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

export type PageFooterLink = {
  label: string;
  href: string;
};

export type PageContent = {
  path: string;
  canonicalPath?: string;
  metaTitle: string;
  metaDescription: string;
  topic: string;
  seoKeywords: string[];
  logoTagline: string;
  mobileTagline: string;
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroImageAlt: string;
  quickHighlights: string[];
  aboutTitle: string;
  aboutDescription: string;
  trustPoints: string[];
  servicesTitle: string;
  servicesDescription: string;
  benefitsTitle: string;
  benefitsDescription: string;
  testimonialsTitle: string;
  testimonialsDescription: string;
  galleryTitle: string;
  galleryDescription: string;
  resultsTitle: string;
  resultsDescription: string;
  resultsCtaTitle: string;
  ctaTitle: string;
  ctaDescription: string;
  faqTitle: string;
  faqDescription: string;
  faqItems: PageFaqItem[];
  contactDescription: string;
  contactImageAlt: string;
  articlesTitle: string;
  articlesDescription: string;
  articles: PageArticle[];
  footerDescription: string;
  footerServices: PageFooterLink[];
};

const sharedFooterLinks: PageFooterLink[] = [
  {
    label: "Enfermeras a domicilio 24 horas",
    href: "/enfermeras-24-horas-lima/",
  },
  {
    label: "Enfermeras a domicilio en Lima",
    href: "/enfermeras-a-domicilio-lima/",
  },
  {
    label: "Enfermeras por horas en Lima",
    href: "/enfermeras-por-horas-lima/",
  },
  {
    label: "Enfermeras online por WhatsApp",
    href: "/enfermeras-online-lima/",
  },
  {
    label: "Vía endovenosa a domicilio",
    href: "/via-endovenosa/",
  },
  {
    label: "Inyectables a domicilio",
    href: "/inyectables-a-domicilio/",
  },
  {
    label: "Cuidados postoperatorios",
    href: "/cuidados-postoperatorios-a-domicilio/",
  },
];

const homeArticles: PageArticle[] = [
  {
    category: "Enfermería a domicilio",
    title: "Enfermeras a domicilio en Lima: qué casos pueden atender en casa",
    excerpt:
      "Conozca cuándo conviene coordinar una visita profesional para adultos mayores, recuperaciones y procedimientos frecuentes.",
    image: "/medical/article-01.jpg",
    href: "/enfermeras-a-domicilio-lima/",
  },
  {
    category: "Atención 24 horas",
    title: "Enfermeras 24 horas en Lima: cuándo pedir apoyo inmediato",
    excerpt:
      "Una guía breve para familias que necesitan atención durante la noche, fines de semana o cambios repentinos del paciente.",
    image: "/medical/article-02.jpg",
    href: "/enfermeras-24-horas-lima/",
  },
  {
    category: "Orientación online",
    title: "Enfermeras online por WhatsApp: cómo agilizar la coordinación",
    excerpt:
      "Qué datos conviene enviar antes de la visita y cómo una orientación inicial ayuda a resolver más rápido la necesidad.",
    image: "/medical/article-03.jpg",
    href: "/enfermeras-online-lima/",
  },
];

export const pageContents: PageContent[] = [
  {
    path: "/",
    metaTitle:
      "Enfermeras a domicilio en Lima | Atención 24 horas",
    metaDescription:
      "Servicio de enfermeras a domicilio en Lima 24 horas para curaciones, inyectables, cuidados postoperatorios, signos vitales y orientación por WhatsApp.",
    topic: "Enfermeras a domicilio en Lima",
    seoKeywords: [
      "enfermeras a domicilio",
      "enfermeras 24 horas",
      "enfermeras a toda hora",
      "enfermeras online",
    ],
    logoTagline: "Enfermería a domicilio en Lima 24 horas",
    mobileTagline: "Enfermeras a domicilio 24 horas",
    heroBadge: "Enfermeras a domicilio 24/7 en Lima",
    heroTitle:
      "Enfermeras a domicilio en Lima con atención 24 horas, respuesta rápida y trato humano.",
    heroDescription:
      "Solicite enfermeras 24 horas para curaciones, inyectables, control de signos vitales, cuidados postoperatorios y acompañamiento en casa. También brindamos orientación online por WhatsApp para coordinar la atención más adecuada.",
    heroImageAlt:
      "Enfermera profesional a domicilio atendiendo paciente en Lima",
    quickHighlights: [
      "Enfermeras a domicilio en Lima con atención 24 horas para casos programados y urgentes",
      "Respuesta rápida por WhatsApp, llamadas y orientación online antes de la visita",
      "Cobertura en Lima Metropolitana para adultos mayores, pacientes postoperatorios y procedimientos clínicos",
    ],
    aboutTitle:
      "Enfermeras a domicilio con experiencia, cercanía y criterios claros de atención en casa.",
    aboutDescription:
      "En Enfermeras 24 Horas brindamos apoyo profesional para pacientes que necesitan cuidados de enfermería a domicilio en Lima. Nuestro enfoque combina rapidez de respuesta, trato humano y procedimientos realizados con orden y seguridad.",
    trustPoints: [
      "Curaciones, inyectables, vía endovenosa y procedimientos de enfermería en casa",
      "Cuidados postoperatorios, control de signos vitales y seguimiento del tratamiento indicado",
      "Acompañamiento seguro para adultos mayores, pacientes delicados y familias que requieren respaldo profesional",
    ],
    servicesTitle:
      "Servicios de enfermería a domicilio para adultos mayores, recuperación y procedimientos clínicos.",
    servicesDescription:
      "Atendemos necesidades frecuentes y especializadas en casa: curaciones, inyectables, control de signos vitales, sondas, retiro de puntos y cuidados postoperatorios con disponibilidad en Lima Metropolitana.",
    benefitsTitle:
      "Razones para elegir un servicio de enfermeras a domicilio con respaldo profesional.",
    benefitsDescription:
      "Cada beneficio responde a lo que más busca una familia al contratar enfermería a domicilio: seguridad, rapidez, trato humano, seguimiento y experiencia real en pacientes de distintas complejidades.",
    testimonialsTitle:
      "Testimonios de familias que ya solicitaron enfermeras a domicilio en Lima.",
    testimonialsDescription:
      "Las reseñas ayudan a validar puntualidad, trato humano y calidad de la atención. Son una señal importante para quienes buscan enfermeras 24 horas con referencias confiables.",
    galleryTitle:
      "Experiencia real en enfermería a domicilio en Lima Metropolitana.",
    galleryDescription:
      "Nuestro trabajo incluye acompañamiento a pacientes, controles, procedimientos y cuidados continuos en casa. Esta experiencia permite responder mejor ante necesidades programadas y atención de enfermeras a toda hora.",
    resultsTitle:
      "Cifras que respaldan la experiencia del servicio de enfermería a domicilio.",
    resultsDescription:
      "Estos datos ayudan a transmitir continuidad, volumen de atención y capacidad operativa para responder a familias que buscan enfermeras por horas, turnos o atención 24 horas.",
    resultsCtaTitle:
      "Servicio de enfermeras 24 horas con contacto inmediato por llamada y WhatsApp.",
    ctaTitle: "¿Necesita coordinar una enfermera hoy mismo o durante la noche?",
    ctaDescription:
      "Escríbanos y le ayudamos a identificar el servicio de enfermería a domicilio más adecuado, el tiempo estimado de llegada y la modalidad de atención que mejor se ajuste a su familiar.",
    faqTitle:
      "Respuestas claras sobre enfermeras a domicilio, horarios, cobertura y costos.",
    faqDescription:
      "Aquí resolvemos las dudas más comunes de quienes buscan enfermeras a domicilio en Lima, enfermeras 24 horas, apoyo por turnos y orientación online antes de coordinar la visita.",
    faqItems: [
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
        question: "¿Puedo recibir orientación con una enfermera online por WhatsApp?",
        answer:
          "Sí. Podemos orientarlo por WhatsApp para entender la necesidad, revisar el tipo de atención y ayudarle a coordinar la visita domiciliaria más adecuada.",
      },
      {
        question: "¿Cuál es el precio de una enfermera a domicilio?",
        answer:
          "El costo depende del procedimiento, la duración del servicio, el distrito, el horario y el perfil del paciente. Por eso brindamos cotizaciones personalizadas según cada caso.",
      },
    ],
    contactDescription:
      "Cuéntenos qué necesita el paciente y preparamos su consulta en WhatsApp para acelerar la coordinación de la enfermera a domicilio, el horario y la cobertura en Lima.",
    contactImageAlt:
      "Atención profesional de enfermería a domicilio en Lima",
    articlesTitle:
      "Contenido útil para pacientes y familias que buscan enfermeras a domicilio.",
    articlesDescription:
      "Estas publicaciones ayudan a resolver dudas frecuentes sobre cuidados en casa, recuperación, enfermeras 24 horas y orientación previa antes de solicitar el servicio.",
    articles: homeArticles,
    footerDescription:
      "Servicio de enfermeras a domicilio en Lima con atención 24 horas, procedimientos de enfermería, orientación por WhatsApp y acompañamiento profesional para cada familia.",
    footerServices: sharedFooterLinks,
  },
  {
    path: "/enfermeras-a-domicilio-lima/",
    metaTitle:
      "Enfermeras a domicilio en Lima | Atención profesional en casa",
    metaDescription:
      "Solicite enfermeras a domicilio en Lima para adultos mayores, pacientes postoperatorios, curaciones, control de signos vitales y apoyo profesional en casa.",
    topic: "Enfermeras a domicilio en Lima",
    seoKeywords: [
      "enfermeras a domicilio lima",
      "enfermera a domicilio",
      "cuidados de enfermería a domicilio",
    ],
    logoTagline: "Servicio de enfermeras a domicilio en Lima",
    mobileTagline: "Enfermeras a domicilio en Lima",
    heroBadge: "Atención profesional en casa",
    heroTitle:
      "Enfermeras a domicilio en Lima para pacientes, adultos mayores y recuperaciones en casa.",
    heroDescription:
      "Coordinamos enfermeras a domicilio para procedimientos, monitoreo, curaciones, medicación y acompañamiento profesional. Atendemos en Lima Metropolitana con respuesta rápida y trato humano.",
    heroImageAlt:
      "Servicio de enfermeras a domicilio en Lima para atención en casa",
    quickHighlights: [
      "Apoyo profesional en casa para pacientes que no pueden desplazarse con facilidad",
      "Atención a domicilio para adultos mayores, recuperaciones y procedimientos indicados",
      "Coordinación rápida por WhatsApp para validar distrito, horario y necesidad del paciente",
    ],
    aboutTitle:
      "Un servicio de enfermería a domicilio pensado para familias que necesitan ayuda profesional sin salir de casa.",
    aboutDescription:
      "Nuestro equipo acompaña a pacientes que requieren asistencia técnica, monitoreo o continuidad de tratamiento en el hogar. La meta es dar seguridad, comodidad y mejor seguimiento en el día a día.",
    trustPoints: [
      "Atención programada o de respuesta rápida según el estado del paciente",
      "Apoyo en curaciones, medicamentos, signos vitales y recuperación en casa",
      "Mayor comodidad para la familia al evitar traslados innecesarios",
    ],
    servicesTitle:
      "Procedimientos y cuidados que puede solicitar con una enfermera a domicilio.",
    servicesDescription:
      "Cada servicio se adapta al caso del paciente y a la indicación médica. Atendemos desde necesidades puntuales hasta acompañamiento recurrente en casa.",
    benefitsTitle:
      "Beneficios de contar con enfermeras a domicilio en Lima.",
    benefitsDescription:
      "La atención en casa permite más comodidad, menos traslados, mayor seguimiento y una respuesta más personalizada para cada familia.",
    testimonialsTitle:
      "Opiniones que respaldan nuestro servicio de enfermeras a domicilio.",
    testimonialsDescription:
      "La experiencia de otras familias ayuda a tomar una mejor decisión cuando se necesita apoyo de enfermería en casa.",
    galleryTitle:
      "Atención domiciliaria con experiencia en diferentes tipos de pacientes.",
    galleryDescription:
      "Trabajamos con adultos mayores, pacientes en recuperación, curaciones frecuentes y monitoreo clínico en el hogar.",
    resultsTitle:
      "Experiencia operativa para responder a solicitudes en distintos distritos de Lima.",
    resultsDescription:
      "Nuestro volumen de atención y trayectoria ayudan a sostener una respuesta ordenada y profesional frente a necesidades comunes y complejas.",
    resultsCtaTitle:
      "Coordinamos enfermeras a domicilio con atención clara y directa por WhatsApp.",
    ctaTitle:
      "¿Busca una enfermera a domicilio para hoy o para una atención programada?",
    ctaDescription:
      "Escríbanos y le orientamos según el tipo de paciente, el distrito y el procedimiento que necesita coordinar en casa.",
    faqTitle:
      "Preguntas frecuentes sobre enfermeras a domicilio en Lima.",
    faqDescription:
      "Resolvemos las consultas más comunes sobre cobertura, duración del servicio, pacientes atendidos y procedimientos disponibles.",
    faqItems: [
      {
        question: "¿Qué hace una enfermera a domicilio?",
        answer:
          "Puede apoyar en curaciones, administración de medicamentos, control de signos vitales, cuidados postoperatorios, sondas, retiro de puntos y acompañamiento profesional en casa.",
      },
      {
        question: "¿Atienden adultos mayores en domicilio?",
        answer:
          "Sí. Atendemos adultos mayores que necesitan monitoreo, apoyo en procedimientos, control clínico o acompañamiento durante su recuperación.",
      },
      {
        question: "¿La atención es solo para emergencias?",
        answer:
          "No. También coordinamos atenciones programadas para procedimientos recurrentes, controles, recuperación postoperatoria y apoyo por horas.",
      },
      {
        question: "¿Cómo sé si mi distrito tiene cobertura?",
        answer:
          "Al escribirnos por WhatsApp validamos su distrito, el tiempo estimado de llegada y la disponibilidad de acuerdo con el servicio solicitado.",
      },
      {
        question: "¿Puedo cotizar antes de confirmar?",
        answer:
          "Sí. Brindamos una orientación inicial y una cotización según el tipo de procedimiento, la duración y la ubicación del paciente.",
      },
    ],
    contactDescription:
      "Escríbanos con el distrito, la edad del paciente y el procedimiento que requiere. Así podremos orientarlo y cotizar el servicio de enfermería a domicilio más adecuado.",
    contactImageAlt:
      "Enfermera a domicilio atendiendo a un paciente en Lima",
    articlesTitle:
      "Más páginas útiles relacionadas con enfermeras a domicilio en Lima.",
    articlesDescription:
      "Estas rutas internas ayudan a profundizar en horarios, modalidades y servicios específicos de atención domiciliaria.",
    articles: [
      homeArticles[1],
      {
        category: "Atención por turnos",
        title: "Enfermeras por horas en Lima para apoyo puntual o continuo",
        excerpt:
          "Conozca cuándo conviene pedir atención por turnos y cómo se adapta a la rutina del paciente.",
        image: "/medical/article-03.jpg",
        href: "/enfermeras-por-horas-lima/",
      },
      {
        category: "Cuidados postoperatorios",
        title: "Cuidados postoperatorios a domicilio con seguimiento profesional",
        excerpt:
          "Información útil para pacientes en recuperación que necesitan control clínico y curaciones en casa.",
        image: "/medical/article-02.jpg",
        href: "/cuidados-postoperatorios-a-domicilio/",
      },
    ],
    footerDescription:
      "Enfermeras a domicilio en Lima para atención programada, recuperación, monitoreo y procedimientos clínicos realizados con responsabilidad y trato cercano.",
    footerServices: sharedFooterLinks,
  },
  {
    path: "/enfermeras-24-horas-lima/",
    metaTitle:
      "Enfermeras 24 horas en Lima | Atención a domicilio día y noche",
    metaDescription:
      "Servicio de enfermeras 24 horas en Lima para atención a domicilio, noches, fines de semana, cuidados postoperatorios y monitoreo de pacientes.",
    topic: "Enfermeras 24 horas en Lima",
    seoKeywords: [
      "enfermeras 24 horas lima",
      "enfermeras a toda hora",
      "enfermera de noche domicilio",
    ],
    logoTagline: "Enfermeras 24 horas en Lima",
    mobileTagline: "Enfermeras 24 horas en Lima",
    heroBadge: "Atención de día, noche y fines de semana",
    heroTitle:
      "Enfermeras 24 horas en Lima para pacientes que necesitan atención continua o respuesta inmediata.",
    heroDescription:
      "Coordinamos enfermeras a toda hora para necesidades programadas, cambios repentinos del paciente, recuperación postoperatoria y apoyo domiciliario durante noches, madrugadas o fines de semana.",
    heroImageAlt:
      "Enfermeras 24 horas en Lima con atención a domicilio",
    quickHighlights: [
      "Disponibilidad extendida para atención domiciliaria en horarios complejos",
      "Soporte para pacientes delicados, adultos mayores y recuperaciones posquirúrgicas",
      "Coordinación rápida por llamada o WhatsApp para validar urgencia, distrito y procedimiento",
    ],
    aboutTitle:
      "Atención de enfermería 24 horas para familias que no pueden esperar hasta el día siguiente.",
    aboutDescription:
      "Sabemos que muchos casos requieren ayuda durante la noche o en horarios poco habituales. Por eso orientamos con rapidez y coordinamos el servicio de acuerdo con la necesidad clínica y la ubicación del paciente.",
    trustPoints: [
      "Atención 24/7 según disponibilidad y tipo de procedimiento requerido",
      "Apoyo profesional para momentos críticos, cambios del paciente o monitoreo continuo",
      "Mayor tranquilidad para la familia cuando se necesita una respuesta fuera del horario común",
    ],
    servicesTitle:
      "Servicios de enfermería 24 horas para atención inmediata o turnos extendidos.",
    servicesDescription:
      "Desde procedimientos puntuales hasta acompañamiento por varias horas, organizamos el servicio para responder cuando el paciente más lo necesita.",
    benefitsTitle:
      "Ventajas de solicitar enfermeras 24 horas en Lima.",
    benefitsDescription:
      "Cuando la necesidad aparece en la noche o durante un fin de semana, contar con una atención extendida puede evitar demoras innecesarias y dar más seguridad.",
    testimonialsTitle:
      "Reseñas que destacan puntualidad y capacidad de respuesta.",
    testimonialsDescription:
      "La rapidez y la claridad en la atención son factores clave cuando una familia busca enfermeras a toda hora.",
    galleryTitle:
      "Experiencia de atención en situaciones programadas y en horarios extendidos.",
    galleryDescription:
      "Nuestro equipo está preparado para responder a cambios del paciente, recuperación en casa y procedimientos que no pueden esperar.",
    resultsTitle:
      "Cifras que respaldan una operación pensada para responder con mayor continuidad.",
    resultsDescription:
      "La experiencia acumulada y la cantidad de familias atendidas ayudan a sostener un servicio con respuesta más ordenada y confiable.",
    resultsCtaTitle:
      "Solicite enfermeras 24 horas por WhatsApp y reciba orientación rápida.",
    ctaTitle:
      "¿Necesita una enfermera de noche, madrugada o fin de semana?",
    ctaDescription:
      "Compártanos el estado del paciente, el distrito y el tipo de apoyo requerido para orientarlo sobre la atención disponible en ese horario.",
    faqTitle:
      "Preguntas frecuentes sobre enfermeras 24 horas en Lima.",
    faqDescription:
      "Aquí resolvemos dudas sobre horarios nocturnos, fines de semana, turnos extendidos y tiempos de coordinación.",
    faqItems: [
      {
        question: "¿Atienden durante la noche y madrugada?",
        answer:
          "Sí. Coordinamos atención en horarios extendidos según disponibilidad y el tipo de procedimiento que requiere el paciente.",
      },
      {
        question: "¿Puedo pedir una enfermera para fin de semana o feriado?",
        answer:
          "Sí. También evaluamos solicitudes para fines de semana y feriados, validando primero el distrito, la urgencia y la modalidad de servicio.",
      },
      {
        question: "¿Qué casos suelen pedir enfermeras 24 horas?",
        answer:
          "Pacientes postoperatorios, adultos mayores, controles de signos vitales, administración de medicamentos, procedimientos puntuales y acompañamiento en casa.",
      },
      {
        question: "¿Cuánto demora la coordinación?",
        answer:
          "Depende del distrito, la hora y la disponibilidad del personal. Por WhatsApp le indicamos el tiempo estimado de respuesta.",
      },
      {
        question: "¿Se puede contratar por varias horas seguidas?",
        answer:
          "Sí. Podemos evaluar turnos prolongados o atención continua según la necesidad del paciente y el tipo de cobertura disponible.",
      },
    ],
    contactDescription:
      "Si necesita enfermeras 24 horas, escríbanos con el horario aproximado, la dirección y una breve descripción del caso para orientarlo más rápido.",
    contactImageAlt:
      "Atención de enfermería 24 horas a domicilio en Lima",
    articlesTitle:
      "Otras rutas útiles relacionadas con enfermeras 24 horas en Lima.",
    articlesDescription:
      "Explore páginas específicas para atención domiciliaria, turnos por horas y coordinación online previa a la visita.",
    articles: [
      homeArticles[0],
      {
        category: "Turnos por horas",
        title: "Enfermeras por horas en Lima para apoyo diurno o nocturno",
        excerpt:
          "Conozca cómo se coordina la atención por turnos cortos o prolongados según la necesidad del paciente.",
        image: "/medical/article-03.jpg",
        href: "/enfermeras-por-horas-lima/",
      },
      homeArticles[2],
    ],
    footerDescription:
      "Enfermeras 24 horas en Lima con atención domiciliaria, orientación rápida y apoyo profesional en horarios extendidos.",
    footerServices: sharedFooterLinks,
  },
  {
    path: "/enfermeras-por-horas-lima/",
    metaTitle:
      "Enfermeras por horas en Lima | Atención domiciliaria por turnos",
    metaDescription:
      "Contrate enfermeras por horas en Lima para apoyo puntual, monitoreo, cuidados postoperatorios, inyectables y atención domiciliaria flexible.",
    topic: "Enfermeras por horas en Lima",
    seoKeywords: [
      "enfermeras por horas lima",
      "enfermera por turnos domicilio",
      "enfermera por horas a domicilio",
    ],
    logoTagline: "Enfermeras por horas en Lima",
    mobileTagline: "Enfermeras por horas",
    heroBadge: "Turnos flexibles según cada caso",
    heroTitle:
      "Enfermeras por horas en Lima para apoyo puntual, monitoreo y procedimientos en casa.",
    heroDescription:
      "Cuando no necesita una atención continua, puede solicitar enfermeras por horas para curaciones, medicamentos, control de signos vitales, recuperación o acompañamiento profesional en el hogar.",
    heroImageAlt:
      "Enfermeras por horas en Lima para atención domiciliaria",
    quickHighlights: [
      "Ideal para procedimientos puntuales o acompañamiento en franjas específicas del día",
      "Turnos adaptados al estado del paciente, la rutina del hogar y el distrito",
      "Orientación rápida para definir cuántas horas convienen según la necesidad clínica",
    ],
    aboutTitle:
      "Una modalidad flexible para familias que necesitan apoyo profesional sin contratar un turno completo.",
    aboutDescription:
      "La atención por horas permite coordinar visitas según el tratamiento, los controles o la dinámica del paciente. Es útil para recuperaciones, adultos mayores y seguimiento puntual en casa.",
    trustPoints: [
      "Modalidad flexible para mañanas, tardes, noches o franjas específicas",
      "Útil para medicación, controles, curaciones y acompañamiento profesional",
      "Permite optimizar costos cuando el paciente no requiere atención continua",
    ],
    servicesTitle:
      "Servicios frecuentes para quienes buscan enfermeras por horas en Lima.",
    servicesDescription:
      "Coordinamos procedimientos y cuidados que pueden resolverse con visitas organizadas según la frecuencia indicada para el paciente.",
    benefitsTitle:
      "Por qué muchas familias prefieren contratar enfermeras por horas.",
    benefitsDescription:
      "Es una modalidad práctica cuando se necesita apoyo recurrente pero no una atención permanente durante todo el día.",
    testimonialsTitle:
      "Experiencias de usuarios que valoran la puntualidad y claridad del servicio.",
    testimonialsDescription:
      "La modalidad por horas suele elegirse por comodidad, flexibilidad y rapidez en la coordinación.",
    galleryTitle:
      "Atención por horas adaptada a distintos tipos de procedimientos y pacientes.",
    galleryDescription:
      "Desde controles breves hasta apoyo en recuperaciones, la organización por turnos permite una atención más precisa.",
    resultsTitle:
      "Trayectoria suficiente para organizar turnos con mayor orden y seguimiento.",
    resultsDescription:
      "La experiencia operativa ayuda a coordinar mejor visitas por horas en distintos distritos de Lima Metropolitana.",
    resultsCtaTitle:
      "Solicite una cotización para enfermeras por horas y reciba orientación rápida.",
    ctaTitle:
      "¿Desea contratar una enfermera por horas para hoy o para varios días?",
    ctaDescription:
      "Escríbanos con el horario tentativo, la rutina del paciente y el procedimiento requerido para sugerir la modalidad más conveniente.",
    faqTitle:
      "Preguntas frecuentes sobre enfermeras por horas en Lima.",
    faqDescription:
      "Le ayudamos a resolver dudas sobre duración, modalidades de turno, costos y situaciones en las que conviene esta opción.",
    faqItems: [
      {
        question: "¿Cuántas horas puedo contratar a una enfermera?",
        answer:
          "La cantidad de horas depende del tipo de procedimiento, la condición del paciente y la necesidad de monitoreo o acompañamiento.",
      },
      {
        question: "¿Es recomendable para adultos mayores?",
        answer:
          "Sí. Es una buena alternativa cuando el adulto mayor necesita apoyo puntual, controles, medicamentos o acompañamiento profesional en ciertas franjas del día.",
      },
      {
        question: "¿Sirve para pacientes postoperatorios?",
        answer:
          "Sí. Muchos pacientes en recuperación requieren controles, curaciones o administración de medicación solo en horarios específicos, por lo que la modalidad por horas puede funcionar bien.",
      },
      {
        question: "¿Cómo se calcula el precio?",
        answer:
          "La cotización depende del número de horas, el distrito, el procedimiento y el perfil del paciente. Por WhatsApp podemos darle una orientación inicial.",
      },
      {
        question: "¿Puedo ampliar el turno si el paciente lo necesita?",
        answer:
          "Según disponibilidad, podemos evaluar una ampliación del turno o coordinar una modalidad distinta si el caso lo requiere.",
      },
    ],
    contactDescription:
      "Compártanos cuántas horas necesita, qué servicio requiere y en qué distrito se encuentra el paciente para orientarlo mejor.",
    contactImageAlt:
      "Enfermera por horas brindando atención domiciliaria en Lima",
    articlesTitle:
      "Más páginas relacionadas con enfermeras por horas y atención domiciliaria.",
    articlesDescription:
      "Estas rutas internas ayudan a comparar modalidades y servicios cercanos a la necesidad del paciente.",
    articles: [
      homeArticles[0],
      homeArticles[1],
      {
        category: "Atención online",
        title: "Enfermeras online en Lima para orientación previa a la visita",
        excerpt:
          "Una alternativa útil para explicar el caso y coordinar mejor la atención domiciliaria.",
        image: "/medical/article-03.jpg",
        href: "/enfermeras-online-lima/",
      },
    ],
    footerDescription:
      "Enfermeras por horas en Lima para apoyo puntual, turnos flexibles y procedimientos de enfermería coordinados según cada caso.",
    footerServices: sharedFooterLinks,
  },
  {
    path: "/enfermeras-online-lima/",
    metaTitle:
      "Enfermeras online en Lima | Orientación rápida por WhatsApp",
    metaDescription:
      "Reciba orientación online por WhatsApp con enfermeras en Lima para explicar el caso, revisar necesidades y coordinar la atención domiciliaria adecuada.",
    topic: "Enfermeras online en Lima",
    seoKeywords: [
      "enfermeras online",
      "enfermera online whatsapp",
      "orientación de enfermería online",
    ],
    logoTagline: "Orientación online por WhatsApp",
    mobileTagline: "Enfermeras online",
    heroBadge: "Orientación previa antes de la visita",
    heroTitle:
      "Enfermeras online en Lima para orientarlo por WhatsApp y coordinar mejor la atención en casa.",
    heroDescription:
      "Explíquenos el caso del paciente y lo ayudamos a identificar si necesita una visita domiciliaria, qué tipo de procedimiento corresponde y cómo preparar mejor la atención.",
    heroImageAlt:
      "Orientación online con enfermeras por WhatsApp en Lima",
    quickHighlights: [
      "Ideal para aclarar dudas iniciales antes de coordinar una visita domiciliaria",
      "Permite revisar el tipo de apoyo que requiere el paciente y los datos necesarios",
      "Ayuda a acelerar la coordinación cuando el caso necesita atención presencial",
    ],
    aboutTitle:
      "Una primera orientación útil para familias que necesitan decidir rápido qué servicio coordinar.",
    aboutDescription:
      "La orientación online no reemplaza la atención domiciliaria cuando esta es necesaria, pero sí ayuda a comprender mejor el caso, ordenar la información y agilizar la respuesta por WhatsApp.",
    trustPoints: [
      "Canal rápido para explicar el estado del paciente y resolver dudas iniciales",
      "Ayuda a definir si se requiere una enfermera a domicilio, por horas o atención 24 horas",
      "Permite anticipar materiales, horarios y cobertura antes de la visita",
    ],
    servicesTitle:
      "Cómo ayuda una orientación online antes de solicitar el servicio a domicilio.",
    servicesDescription:
      "Muchos pacientes y familiares necesitan aclarar el tipo de atención ideal antes de coordinar. Por eso ofrecemos una vía rápida de contacto para ordenar el caso.",
    benefitsTitle:
      "Ventajas de consultar primero con una enfermera online por WhatsApp.",
    benefitsDescription:
      "Una orientación inicial bien hecha puede reducir demoras, mejorar la coordinación y ayudar a que la visita domiciliaria sea más eficiente.",
    testimonialsTitle:
      "Valoraciones que resaltan claridad, amabilidad y buena orientación.",
    testimonialsDescription:
      "Cuando una familia está bajo presión, una respuesta clara y humana marca una diferencia real.",
    galleryTitle:
      "Apoyo profesional que comienza desde el primer contacto online.",
    galleryDescription:
      "La coordinación rápida permite entender mejor el caso del paciente y preparar con mayor precisión la atención en casa.",
    resultsTitle:
      "Experiencia suficiente para orientar casos frecuentes y canalizarlos mejor.",
    resultsDescription:
      "La atención online previa ayuda a filtrar necesidades, ordenar información y coordinar servicios con más rapidez.",
    resultsCtaTitle:
      "Escríbanos por WhatsApp y reciba orientación para coordinar mejor su servicio.",
    ctaTitle:
      "¿Quiere hablar primero con una enfermera online antes de pedir la visita?",
    ctaDescription:
      "Cuéntenos qué necesita el paciente y lo ayudamos a identificar la modalidad de atención más adecuada para su caso.",
    faqTitle:
      "Preguntas frecuentes sobre enfermeras online en Lima.",
    faqDescription:
      "Aquí explicamos qué se puede resolver por WhatsApp, cuándo conviene la orientación online y cuándo es mejor pasar a una visita domiciliaria.",
    faqItems: [
      {
        question: "¿Qué pueden resolver por WhatsApp antes de la visita?",
        answer:
          "Podemos orientarlo sobre el tipo de servicio que conviene, los datos que necesitamos para cotizar y la mejor forma de coordinar la atención domiciliaria.",
      },
      {
        question: "¿La enfermera online reemplaza la visita a domicilio?",
        answer:
          "No. La orientación online sirve para ordenar el caso y responder dudas iniciales. Si el paciente necesita procedimiento o evaluación presencial, se coordina la visita correspondiente.",
      },
      {
        question: "¿Sirve para adultos mayores y pacientes postoperatorios?",
        answer:
          "Sí. Muchas familias usan este canal para explicar el estado del paciente, saber qué información deben enviar y definir la modalidad de apoyo más adecuada.",
      },
      {
        question: "¿Necesito enviar fotos o indicaciones médicas?",
        answer:
          "Según el caso, puede ser útil enviar la receta, el nombre del procedimiento o una explicación breve para orientarlo con más precisión.",
      },
      {
        question: "¿Después de la orientación se puede coordinar una visita el mismo día?",
        answer:
          "Sí. Si se requiere atención domiciliaria, por WhatsApp podemos avanzar con la coordinación, validar cobertura y estimar tiempos de respuesta.",
      },
    ],
    contactDescription:
      "Escríbanos por WhatsApp con una breve descripción del caso y lo orientamos sobre el servicio más adecuado para su paciente.",
    contactImageAlt:
      "Enfermera online orientando por WhatsApp a una familia en Lima",
    articlesTitle:
      "Páginas relacionadas con orientación online y atención a domicilio.",
    articlesDescription:
      "Estas rutas ayudan a pasar de la orientación inicial a la coordinación de la visita o del procedimiento específico que necesita el paciente.",
    articles: [
      homeArticles[0],
      homeArticles[1],
      {
        category: "Procedimientos",
        title: "Vía endovenosa a domicilio en Lima",
        excerpt:
          "Conozca cómo se coordina este procedimiento y qué datos conviene tener listos antes de la visita.",
        image: "/medical/article-02.jpg",
        href: "/via-endovenosa/",
      },
    ],
    footerDescription:
      "Enfermeras online en Lima para orientación inicial por WhatsApp y coordinación más rápida de la atención domiciliaria.",
    footerServices: sharedFooterLinks,
  },
  {
    path: "/via-endovenosa/",
    metaTitle:
      "Vía endovenosa a domicilio en Lima | Colocación y supervisión",
    metaDescription:
      "Solicite colocación de vía endovenosa a domicilio en Lima con atención profesional, supervisión del procedimiento y coordinación rápida por WhatsApp.",
    topic: "Vía endovenosa a domicilio en Lima",
    seoKeywords: [
      "via endovenosa a domicilio",
      "colocación de via endovenosa lima",
      "suero a domicilio lima",
    ],
    logoTagline: "Vía endovenosa a domicilio en Lima",
    mobileTagline: "Vía endovenosa",
    heroBadge: "Procedimiento domiciliario especializado",
    heroTitle:
      "Colocación de vía endovenosa a domicilio en Lima con atención profesional y seguimiento.",
    heroDescription:
      "Coordinamos la canalización y supervisión de vía endovenosa en casa para pacientes que requieren administración indicada por el profesional de salud, evitando traslados innecesarios.",
    heroImageAlt:
      "Colocación de vía endovenosa a domicilio en Lima",
    quickHighlights: [
      "Procedimiento realizado por personal con experiencia en atención domiciliaria",
      "Mayor comodidad para pacientes que requieren hidratación o medicación indicada",
      "Orientación previa por WhatsApp para confirmar receta, materiales y cobertura",
    ],
    aboutTitle:
      "Una opción práctica para pacientes que necesitan vía endovenosa sin salir de casa.",
    aboutDescription:
      "La colocación de vía endovenosa a domicilio permite administrar tratamientos indicados con más comodidad y bajo seguimiento profesional, especialmente en pacientes con movilidad reducida o recuperación en casa.",
    trustPoints: [
      "Canalización y supervisión según indicación del procedimiento",
      "Coordinación rápida para validar receta, ubicación y disponibilidad",
      "Atención ordenada para reducir molestias y evitar traslados innecesarios",
    ],
    servicesTitle:
      "Atención domiciliaria para vía endovenosa y procedimientos relacionados.",
    servicesDescription:
      "Además de la colocación, podemos orientar sobre la coordinación del servicio, el tipo de atención requerida y otros cuidados de enfermería complementarios.",
    benefitsTitle:
      "Beneficios de coordinar vía endovenosa a domicilio en Lima.",
    benefitsDescription:
      "Es una alternativa cómoda para pacientes que requieren continuidad de tratamiento y prefieren recibir el procedimiento en casa.",
    testimonialsTitle:
      "Familias que valoran la puntualidad, la claridad y el trato profesional.",
    testimonialsDescription:
      "La confianza en procedimientos domiciliarios depende mucho de la experiencia y la orientación previa al servicio.",
    galleryTitle:
      "Experiencia en procedimientos técnicos realizados con cuidado en domicilio.",
    galleryDescription:
      "Atendemos distintos tipos de necesidades clínicas en casa, con énfasis en orden, seguimiento y trato humano.",
    resultsTitle:
      "Trayectoria que respalda la coordinación de procedimientos especializados.",
    resultsDescription:
      "La experiencia en enfermería domiciliaria ayuda a organizar mejor casos que requieren una atención técnica y segura en el hogar.",
    resultsCtaTitle:
      "Coordine vía endovenosa a domicilio y reciba orientación rápida por WhatsApp.",
    ctaTitle:
      "¿Necesita colocar vía endovenosa a domicilio en Lima?",
    ctaDescription:
      "Escríbanos con la receta, el distrito y el horario estimado para ayudarle a validar el servicio y la coordinación más adecuada.",
    faqTitle:
      "Preguntas frecuentes sobre vía endovenosa a domicilio.",
    faqDescription:
      "Respondemos las dudas más comunes sobre este procedimiento, cuándo conviene coordinarlo y qué información se necesita antes de la visita.",
    faqItems: [
      {
        question: "¿Qué necesito para solicitar una vía endovenosa a domicilio?",
        answer:
          "Lo ideal es contar con la indicación del profesional de salud, el nombre del medicamento o solución, el distrito y el horario estimado de atención.",
      },
      {
        question: "¿La vía endovenosa se puede colocar en casa?",
        answer:
          "Sí. Es un procedimiento que puede coordinarse a domicilio cuando el caso lo permite y se cuenta con personal capacitado para realizarlo.",
      },
      {
        question: "¿Atienden adultos mayores o pacientes en recuperación?",
        answer:
          "Sí. Es una de las situaciones más frecuentes para este tipo de procedimiento, especialmente cuando el paciente tiene dificultades para trasladarse.",
      },
      {
        question: "¿También hacen seguimiento del procedimiento?",
        answer:
          "Sí. Además de la colocación, orientamos sobre el cuidado posterior y la modalidad de seguimiento según el caso.",
      },
      {
        question: "¿Cómo se cotiza este servicio?",
        answer:
          "El costo depende del distrito, el horario, la complejidad del caso y el tipo de procedimiento requerido. Por WhatsApp podemos darle una orientación inicial.",
      },
    ],
    contactDescription:
      "Envíenos la indicación médica, el distrito y una breve explicación del caso para ayudarle a coordinar la vía endovenosa a domicilio.",
    contactImageAlt:
      "Procedimiento de vía endovenosa realizado por enfermera a domicilio",
    articlesTitle:
      "Más páginas útiles sobre procedimientos domiciliarios y atención de enfermería.",
    articlesDescription:
      "Explore rutas relacionadas con inyectables, cuidados postoperatorios y atención domiciliaria general.",
    articles: [
      {
        category: "Inyectables",
        title: "Inyectables a domicilio en Lima",
        excerpt:
          "Información útil para coordinar aplicaciones intramusculares o intradérmicas en casa.",
        image: "/medical/article-01.jpg",
        href: "/inyectables-a-domicilio/",
      },
      {
        category: "Recuperación",
        title: "Cuidados postoperatorios a domicilio",
        excerpt:
          "Descubra cómo una atención profesional en casa ayuda a mejorar la recuperación del paciente.",
        image: "/medical/article-02.jpg",
        href: "/cuidados-postoperatorios-a-domicilio/",
      },
      homeArticles[0],
    ],
    footerDescription:
      "Vía endovenosa a domicilio en Lima con coordinación rápida, atención profesional y seguimiento claro del procedimiento.",
    footerServices: sharedFooterLinks,
  },
  {
    path: "/inyectables-a-domicilio/",
    metaTitle:
      "Inyectables a domicilio en Lima | Aplicación profesional en casa",
    metaDescription:
      "Servicio de inyectables a domicilio en Lima para aplicación intramuscular e intradérmica con atención profesional y coordinación rápida por WhatsApp.",
    topic: "Inyectables a domicilio en Lima",
    seoKeywords: [
      "inyectables a domicilio lima",
      "inyección a domicilio",
      "aplicación de inyectables en casa",
    ],
    logoTagline: "Inyectables a domicilio en Lima",
    mobileTagline: "Inyectables en casa",
    heroBadge: "Aplicación profesional en domicilio",
    heroTitle:
      "Inyectables a domicilio en Lima con técnica profesional y atención rápida en casa.",
    heroDescription:
      "Coordinamos la aplicación de inyectables intramusculares e intradérmicos para pacientes que necesitan comodidad, puntualidad y una atención segura sin salir del hogar.",
    heroImageAlt:
      "Aplicación de inyectables a domicilio en Lima",
    quickHighlights: [
      "Ideal para tratamientos indicados que requieren aplicación en horarios específicos",
      "Atención profesional en casa para evitar esperas y desplazamientos innecesarios",
      "Coordinación simple por WhatsApp para validar receta, distrito y tiempo estimado",
    ],
    aboutTitle:
      "Una forma más cómoda de cumplir tratamientos indicados sin moverse de casa.",
    aboutDescription:
      "La aplicación de inyectables a domicilio facilita el seguimiento del tratamiento, especialmente en pacientes con dolor, movilidad reducida o dificultad para trasladarse a un centro de salud.",
    trustPoints: [
      "Aplicación intramuscular o intradérmica según indicación médica",
      "Puntualidad y atención clara para pacientes y familiares",
      "Orientación previa para confirmar datos y coordinar mejor la visita",
    ],
    servicesTitle:
      "Aplicación de inyectables y otros cuidados de enfermería en domicilio.",
    servicesDescription:
      "Además de los inyectables, puede coordinar otros procedimientos complementarios si el paciente necesita una atención más completa en casa.",
    benefitsTitle:
      "Ventajas de solicitar inyectables a domicilio en Lima.",
    benefitsDescription:
      "La atención en casa da más comodidad, ayuda a cumplir mejor el tratamiento y reduce el esfuerzo del paciente cuando se siente débil o con dolor.",
    testimonialsTitle:
      "Reseñas de familias que valoran puntualidad y buen trato.",
    testimonialsDescription:
      "Cuando el procedimiento es frecuente, la confianza en quien lo realiza se vuelve especialmente importante.",
    galleryTitle:
      "Atención domiciliaria para procedimientos frecuentes realizados con criterio profesional.",
    galleryDescription:
      "La experiencia en inyectables y cuidados de enfermería ayuda a ofrecer una atención más ordenada y confiable en el hogar.",
    resultsTitle:
      "Capacidad operativa para coordinar procedimientos recurrentes en distintos distritos.",
    resultsDescription:
      "La trayectoria del servicio facilita la organización de visitas puntuales y tratamientos que requieren continuidad.",
    resultsCtaTitle:
      "Solicite inyectables a domicilio y reciba atención rápida por WhatsApp.",
    ctaTitle:
      "¿Necesita aplicación de inyectables en casa para hoy o en horario específico?",
    ctaDescription:
      "Compártanos el nombre del medicamento, la receta, el distrito y el horario para orientarlo y coordinar la visita de forma más precisa.",
    faqTitle:
      "Preguntas frecuentes sobre inyectables a domicilio en Lima.",
    faqDescription:
      "Aquí resolvemos dudas sobre horarios, indicaciones previas, tipos de aplicación y coordinación del servicio.",
    faqItems: [
      {
        question: "¿Qué tipos de inyectables aplican a domicilio?",
        answer:
          "Aplicamos inyectables intramusculares e intradérmicos, siempre según la indicación correspondiente y el caso del paciente.",
      },
      {
        question: "¿Necesito una receta para coordinar el servicio?",
        answer:
          "Sí. Es importante contar con la indicación médica o los datos necesarios del tratamiento para confirmar correctamente el procedimiento.",
      },
      {
        question: "¿Pueden ir a la casa en horarios específicos?",
        answer:
          "Sí. Coordinamos visitas según el horario del tratamiento, el distrito y la disponibilidad del servicio.",
      },
      {
        question: "¿Es útil para adultos mayores o pacientes con movilidad reducida?",
        answer:
          "Sí. Es una alternativa muy práctica cuando trasladarse resulta incómodo o poco recomendable para el paciente.",
      },
      {
        question: "¿También realizan seguimiento o más de una aplicación?",
        answer:
          "Sí. Podemos evaluar la continuidad del tratamiento y la mejor forma de coordinar aplicaciones recurrentes en casa.",
      },
    ],
    contactDescription:
      "Escríbanos con la receta, el medicamento, el distrito y el horario estimado para coordinar su aplicación de inyectables a domicilio.",
    contactImageAlt:
      "Aplicación profesional de inyectables a domicilio",
    articlesTitle:
      "Rutas relacionadas con inyectables y otros servicios de enfermería a domicilio.",
    articlesDescription:
      "Estas páginas internas le ayudan a encontrar procedimientos complementarios o modalidades de atención cercanas a su necesidad.",
    articles: [
      {
        category: "Vía endovenosa",
        title: "Colocación de vía endovenosa a domicilio",
        excerpt:
          "Una página específica para pacientes que necesitan un procedimiento endovenoso en casa.",
        image: "/medical/article-02.jpg",
        href: "/via-endovenosa/",
      },
      homeArticles[0],
      {
        category: "Atención 24 horas",
        title: "Enfermeras 24 horas en Lima",
        excerpt:
          "Si el paciente necesita atención fuera del horario habitual, aquí puede conocer esa modalidad.",
        image: "/medical/article-03.jpg",
        href: "/enfermeras-24-horas-lima/",
      },
    ],
    footerDescription:
      "Inyectables a domicilio en Lima con coordinación rápida, aplicación profesional y atención clara para pacientes y familias.",
    footerServices: sharedFooterLinks,
  },
  {
    path: "/cuidados-postoperatorios-a-domicilio/",
    metaTitle:
      "Cuidados postoperatorios a domicilio en Lima | Enfermería en casa",
    metaDescription:
      "Solicite cuidados postoperatorios a domicilio en Lima con curaciones, control de signos vitales, seguimiento profesional y apoyo en la recuperación del paciente.",
    topic: "Cuidados postoperatorios a domicilio en Lima",
    seoKeywords: [
      "cuidados postoperatorios a domicilio",
      "enfermera postoperatorio casa",
      "recuperación postoperatoria en casa",
    ],
    logoTagline: "Cuidados postoperatorios en Lima",
    mobileTagline: "Cuidados postoperatorios",
    heroBadge: "Recuperación segura en casa",
    heroTitle:
      "Cuidados postoperatorios a domicilio en Lima para acompañar la recuperación del paciente en casa.",
    heroDescription:
      "Coordinamos apoyo profesional para curaciones, control de signos vitales, administración de medicamentos y seguimiento de pacientes que necesitan una recuperación más segura y cómoda después de la cirugía.",
    heroImageAlt:
      "Cuidados postoperatorios a domicilio en Lima",
    quickHighlights: [
      "Apoyo profesional en la etapa de recuperación después de una cirugía",
      "Curaciones, control clínico y seguimiento en la comodidad del hogar",
      "Orientación rápida por WhatsApp para coordinar horarios, frecuencia y tipo de atención",
    ],
    aboutTitle:
      "Una recuperación postoperatoria mejor acompañada reduce estrés y mejora la continuidad del cuidado.",
    aboutDescription:
      "Después de una cirugía, muchas familias necesitan ayuda para manejar curaciones, monitoreo, medicación y señales de alerta. Nuestro servicio busca aportar orden, seguridad y tranquilidad durante esa etapa.",
    trustPoints: [
      "Curaciones y controles según evolución del paciente y necesidad del caso",
      "Acompañamiento profesional para una recuperación más cómoda en casa",
      "Orientación a la familia para reforzar cuidados y detectar cambios importantes",
    ],
    servicesTitle:
      "Servicios que ayudan a sostener una recuperación postoperatoria en casa.",
    servicesDescription:
      "Atendemos necesidades comunes después de una cirugía, desde curaciones y monitoreo hasta procedimientos complementarios de enfermería a domicilio.",
    benefitsTitle:
      "Beneficios de contratar cuidados postoperatorios a domicilio.",
    benefitsDescription:
      "La atención en casa facilita el descanso del paciente, mejora el seguimiento y ayuda a reducir complicaciones derivadas de una mala continuidad del cuidado.",
    testimonialsTitle:
      "Reseñas que transmiten confianza para etapas sensibles de recuperación.",
    testimonialsDescription:
      "En un postoperatorio, la puntualidad y la claridad profesional se vuelven especialmente valiosas para la familia.",
    galleryTitle:
      "Experiencia acompañando recuperaciones y controles postoperatorios en casa.",
    galleryDescription:
      "Trabajamos con pacientes que necesitan curaciones, seguimiento clínico y apoyo profesional durante los primeros días o semanas de recuperación.",
    resultsTitle:
      "Cifras que respaldan nuestro trabajo con pacientes en etapa de recuperación.",
    resultsDescription:
      "La experiencia acumulada ayuda a coordinar mejor atenciones que requieren orden, continuidad y comunicación clara con la familia.",
    resultsCtaTitle:
      "Solicite cuidados postoperatorios a domicilio y reciba orientación por WhatsApp.",
    ctaTitle:
      "¿Busca apoyo postoperatorio para un paciente que se recupera en casa?",
    ctaDescription:
      "Compártanos el tipo de cirugía, el estado actual del paciente y el distrito para orientarlo sobre la modalidad de atención más conveniente.",
    faqTitle:
      "Preguntas frecuentes sobre cuidados postoperatorios a domicilio.",
    faqDescription:
      "Aquí resolvemos dudas sobre curaciones, frecuencia de las visitas, monitoreo y apoyo en pacientes recién operados.",
    faqItems: [
      {
        question: "¿Qué incluyen los cuidados postoperatorios a domicilio?",
        answer:
          "Pueden incluir curaciones, control de signos vitales, monitoreo de la evolución, apoyo en medicación y orientación a la familia según la recuperación del paciente.",
      },
      {
        question: "¿Atienden pacientes recién operados?",
        answer:
          "Sí. Coordinamos apoyo domiciliario para pacientes que necesitan seguimiento cercano durante sus primeros días o semanas de recuperación.",
      },
      {
        question: "¿También realizan curaciones de heridas quirúrgicas?",
        answer:
          "Sí. Podemos coordinar curaciones y seguimiento del área tratada según el caso y la indicación correspondiente.",
      },
      {
        question: "¿Cuándo conviene pedir una enfermera postoperatoria en casa?",
        answer:
          "Cuando el paciente necesita apoyo profesional para su recuperación, control de molestias, seguimiento clínico o cuando la familia requiere ayuda para continuar los cuidados correctamente.",
      },
      {
        question: "¿La atención puede ser por horas o varias visitas?",
        answer:
          "Sí. Según la condición del paciente, evaluamos si conviene una visita puntual, atención por horas o un plan de seguimiento más continuo.",
      },
    ],
    contactDescription:
      "Escríbanos con el tipo de cirugía, la fecha del alta, el distrito y una breve descripción del caso para orientarlo sobre sus cuidados postoperatorios a domicilio.",
    contactImageAlt:
      "Recuperación postoperatoria con apoyo de enfermería a domicilio",
    articlesTitle:
      "Más páginas útiles sobre recuperación y atención de enfermería a domicilio.",
    articlesDescription:
      "Estas rutas internas le ayudarán a conocer otros servicios complementarios para pacientes en recuperación o con necesidades frecuentes de cuidado.",
    articles: [
      {
        category: "Atención general",
        title: "Enfermeras a domicilio en Lima",
        excerpt:
          "Conozca la página principal del servicio de atención domiciliaria y sus modalidades más frecuentes.",
        image: "/medical/article-01.jpg",
        href: "/enfermeras-a-domicilio-lima/",
      },
      {
        category: "Procedimientos",
        title: "Vía endovenosa a domicilio",
        excerpt:
          "Una ruta útil cuando el paciente en recuperación también necesita procedimientos endovenosos en casa.",
        image: "/medical/article-02.jpg",
        href: "/via-endovenosa/",
      },
      {
        category: "Atención 24 horas",
        title: "Enfermeras 24 horas en Lima",
        excerpt:
          "Cuando la recuperación exige mayor continuidad o apoyo durante la noche, esta modalidad puede ser la más adecuada.",
        image: "/medical/article-03.jpg",
        href: "/enfermeras-24-horas-lima/",
      },
    ],
    footerDescription:
      "Cuidados postoperatorios a domicilio en Lima con curaciones, monitoreo, orientación familiar y apoyo profesional durante la recuperación.",
    footerServices: sharedFooterLinks,
  },
  {
    path: "/contacto/",
    canonicalPath: "/",
    metaTitle:
      "Contacto | Enfermeras a domicilio en Lima 24 horas",
    metaDescription:
      "Contáctenos por WhatsApp para coordinar enfermeras a domicilio en Lima, atención 24 horas, curaciones, inyectables y cuidados postoperatorios.",
    topic: "Contacto para enfermeras a domicilio en Lima",
    seoKeywords: [
      "contacto enfermeras a domicilio",
      "cotizar enfermera a domicilio lima",
      "whatsapp enfermeras lima",
    ],
    logoTagline: "Contacto para enfermeras a domicilio",
    mobileTagline: "Contacto inmediato",
    heroBadge: "Cotización rápida por WhatsApp",
    heroTitle:
      "Contacte a nuestro equipo para coordinar enfermeras a domicilio en Lima.",
    heroDescription:
      "Escríbanos por WhatsApp o llámenos para validar distrito, horario, tipo de paciente y procedimiento. Le orientamos rápido para coordinar la atención más adecuada.",
    heroImageAlt:
      "Contacto con enfermeras a domicilio en Lima por WhatsApp",
    quickHighlights: [
      "Canal directo para cotizar enfermeras a domicilio en Lima",
      "Respuesta rápida para consultas de atención 24 horas, por horas y procedimientos",
      "Orientación inicial para definir mejor el servicio que necesita el paciente",
    ],
    aboutTitle:
      "Un contacto rápido puede hacer más fácil la coordinación del servicio adecuado.",
    aboutDescription:
      "Nuestro equipo orienta a pacientes y familias antes de la visita para acelerar la respuesta y recomendar la modalidad de atención que mejor se ajusta al caso.",
    trustPoints: [
      "Atención por WhatsApp y llamada para coordinar más rápido",
      "Orientación inicial según procedimiento, horario y distrito",
      "Proceso simple para cotizar y programar la visita domiciliaria",
    ],
    servicesTitle:
      "Desde este contacto puede coordinar enfermeras, procedimientos y seguimiento domiciliario.",
    servicesDescription:
      "Atendemos consultas sobre atención general, turnos, recuperación postoperatoria, inyectables, vía endovenosa y orientación online.",
    benefitsTitle:
      "Ventajas de escribir antes de coordinar el servicio.",
    benefitsDescription:
      "Una buena coordinación inicial reduce tiempos, ayuda a ordenar el caso y mejora la experiencia del paciente y su familia.",
    testimonialsTitle:
      "Familias que valoran la rapidez, la amabilidad y la claridad del primer contacto.",
    testimonialsDescription:
      "La experiencia de atención empieza desde la primera conversación. Por eso priorizamos una respuesta clara y humana.",
    galleryTitle:
      "Nuestro trabajo comienza con una coordinación rápida y termina con atención profesional en casa.",
    galleryDescription:
      "El primer contacto permite entender mejor el caso del paciente y preparar una atención domiciliaria más precisa y ordenada.",
    resultsTitle:
      "Una operación organizada ayuda a responder mejor a pacientes y familias.",
    resultsDescription:
      "La combinación de experiencia, volumen de atención y respuesta rápida fortalece la coordinación del servicio domiciliario.",
    resultsCtaTitle:
      "Escríbanos y reciba orientación para coordinar su atención en casa.",
    ctaTitle:
      "¿Quiere cotizar una enfermera a domicilio por WhatsApp ahora mismo?",
    ctaDescription:
      "Compártanos el distrito, la edad del paciente y el procedimiento que necesita para orientarlo con mayor precisión.",
    faqTitle:
      "Preguntas frecuentes sobre contacto, cotización y coordinación.",
    faqDescription:
      "Le ayudamos a resolver dudas sobre tiempos de respuesta, datos necesarios y modalidades de atención disponibles.",
    faqItems: [
      {
        question: "¿Qué datos debo enviar para cotizar?",
        answer:
          "Lo ideal es enviar el distrito, la edad del paciente, el procedimiento requerido, el horario aproximado y cualquier indicación médica relevante.",
      },
      {
        question: "¿Puedo coordinar por WhatsApp?",
        answer:
          "Sí. Es el canal más rápido para explicar el caso y recibir orientación inicial antes de confirmar la visita.",
      },
      {
        question: "¿También atienden llamadas?",
        answer:
          "Sí. Puede llamarnos para consultas rápidas o si necesita validar un servicio con mayor urgencia.",
      },
      {
        question: "¿Cuánto demora responder una consulta?",
        answer:
          "El tiempo puede variar según la hora y la demanda, pero buscamos responder con la mayor rapidez posible.",
      },
      {
        question: "¿Desde el contacto ya pueden decirme si hay cobertura?",
        answer:
          "Sí. Con el distrito y la referencia de la dirección podemos indicarle si hay cobertura y el tiempo estimado de coordinación.",
      },
    ],
    contactDescription:
      "Déjenos los datos del paciente y del servicio requerido. Así podremos responder más rápido y proponerle la modalidad de atención adecuada.",
    contactImageAlt:
      "Contacto por WhatsApp para coordinar enfermeras a domicilio en Lima",
    articlesTitle:
      "Páginas útiles para continuar después de su consulta.",
    articlesDescription:
      "Desde aquí puede ir a las páginas de mayor interés según la necesidad del paciente y el tipo de atención requerida.",
    articles: [homeArticles[0], homeArticles[1], homeArticles[2]],
    footerDescription:
      "Canal de contacto rápido para coordinar enfermeras a domicilio en Lima, atención 24 horas, procedimientos y orientación por WhatsApp.",
    footerServices: sharedFooterLinks,
  },
  {
    path: "/nosotros/",
    canonicalPath: "/",
    metaTitle:
      "Nosotros | Enfermeras a domicilio en Lima",
    metaDescription:
      "Conozca más sobre nuestro servicio de enfermeras a domicilio en Lima, experiencia, enfoque humano y atención profesional para pacientes y familias.",
    topic: "Nosotros y nuestra experiencia en enfermería a domicilio",
    seoKeywords: [
      "nosotros enfermeras a domicilio",
      "empresa de enfermeras a domicilio lima",
      "enfermeras a toda hora nosotros",
    ],
    logoTagline: "Conozca nuestro equipo",
    mobileTagline: "Sobre nosotros",
    heroBadge: "Experiencia y confianza",
    heroTitle:
      "Conozca más sobre nuestro servicio de enfermeras a domicilio y el enfoque con el que atendemos a cada familia.",
    heroDescription:
      "Trabajamos para brindar una atención profesional, humana y ordenada en la comodidad del hogar, acompañando a pacientes que requieren seguimiento, procedimientos o recuperación en casa.",
    heroImageAlt:
      "Equipo de enfermeras a domicilio en Lima",
    quickHighlights: [
      "Experiencia en atención domiciliaria para pacientes de distintas complejidades",
      "Trato humano y comunicación clara con familiares y cuidadores",
      "Compromiso con una atención responsable, rápida y profesional",
    ],
    aboutTitle:
      "Una propuesta de valor enfocada en confianza, orden y continuidad del cuidado.",
    aboutDescription:
      "Nuestro trabajo combina atención profesional, acompañamiento cercano y coordinación clara para ayudar a pacientes y familias en momentos que requieren respaldo real.",
    trustPoints: [
      "Trayectoria atendiendo adultos mayores, recuperaciones y procedimientos clínicos",
      "Equipo con enfoque humano, técnico y orientado a la familia",
      "Compromiso con la seguridad, la puntualidad y la calidad del servicio",
    ],
    servicesTitle:
      "La experiencia del equipo se refleja en la forma en que coordinamos cada servicio.",
    servicesDescription:
      "No se trata solo de hacer un procedimiento, sino de entender al paciente, ordenar la atención y acompañar a la familia en todo el proceso.",
    benefitsTitle:
      "Qué valoran nuestros pacientes y familias de nuestra forma de trabajo.",
    benefitsDescription:
      "La confianza nace de la combinación entre capacidad técnica, respuesta rápida y un trato humano sostenido desde el primer contacto.",
    testimonialsTitle:
      "Las reseñas ayudan a mostrar cómo viven otras familias nuestro servicio.",
    testimonialsDescription:
      "La experiencia real de los pacientes es una de las señales más fuertes de confianza para nuevos usuarios.",
    galleryTitle:
      "A lo largo del tiempo hemos acompañado numerosos casos de atención en casa.",
    galleryDescription:
      "La experiencia acumulada permite responder mejor y adaptar el servicio a contextos clínicos y familiares muy distintos.",
    resultsTitle:
      "Experiencia, continuidad y volumen de atención como respaldo del servicio.",
    resultsDescription:
      "Estos datos ayudan a transmitir la consistencia del trabajo realizado y el alcance de la atención domiciliaria.",
    resultsCtaTitle:
      "Conozca nuestro enfoque y contáctenos para coordinar el servicio que necesita.",
    ctaTitle:
      "¿Quiere saber si nuestro servicio es adecuado para su paciente?",
    ctaDescription:
      "Escríbanos y le orientamos sobre el tipo de atención domiciliaria más conveniente según el caso y el contexto familiar.",
    faqTitle:
      "Preguntas frecuentes sobre nuestra experiencia y forma de trabajo.",
    faqDescription:
      "Aquí explicamos cómo trabajamos, qué tipo de pacientes atendemos y qué puede esperar del servicio.",
    faqItems: [
      {
        question: "¿Qué tipo de pacientes atienden?",
        answer:
          "Atendemos adultos mayores, pacientes postoperatorios, personas que requieren procedimientos clínicos y familias que necesitan seguimiento profesional en casa.",
      },
      {
        question: "¿Cuál es el enfoque del servicio?",
        answer:
          "Buscamos combinar atención técnica con trato humano, comunicación clara y una coordinación rápida para que la familia se sienta respaldada.",
      },
      {
        question: "¿El servicio se adapta a cada paciente?",
        answer:
          "Sí. Cada caso se organiza según el diagnóstico, el procedimiento, el horario, la frecuencia y el contexto del hogar.",
      },
      {
        question: "¿Atienden solo en Lima?",
        answer:
          "Nuestra cobertura principal está enfocada en Lima Metropolitana y se valida por WhatsApp según el distrito del paciente.",
      },
      {
        question: "¿Cómo puedo coordinar una primera atención?",
        answer:
          "Puede escribirnos por WhatsApp o llamarnos para explicarnos el caso y orientarlo sobre el servicio más adecuado.",
      },
    ],
    contactDescription:
      "Si quiere conocernos mejor o coordinar una primera atención, escríbanos por WhatsApp y le responderemos según la necesidad del paciente.",
    contactImageAlt:
      "Equipo profesional de enfermería a domicilio en Lima",
    articlesTitle:
      "Páginas que complementan nuestra propuesta de atención domiciliaria.",
    articlesDescription:
      "Estas rutas le permiten revisar servicios específicos y modalidades de atención relacionadas con lo que hacemos.",
    articles: [homeArticles[0], homeArticles[1], homeArticles[2]],
    footerDescription:
      "Conozca más sobre nuestra experiencia en enfermería a domicilio y el enfoque con el que atendemos a pacientes y familias en Lima.",
    footerServices: sharedFooterLinks,
  },
  {
    path: "/cuidado-al-adulto-mayor/",
    canonicalPath: "/enfermeras-a-domicilio-lima/",
    metaTitle:
      "Cuidado del adulto mayor a domicilio en Lima | Apoyo profesional",
    metaDescription:
      "Servicio de cuidado del adulto mayor a domicilio en Lima con apoyo profesional, acompañamiento, monitoreo y atención adaptada a cada paciente.",
    topic: "Cuidado del adulto mayor a domicilio en Lima",
    seoKeywords: [
      "cuidado del adulto mayor a domicilio",
      "cuidadoras por horas lima",
      "adulto mayor domicilio lima",
    ],
    logoTagline: "Cuidado del adulto mayor en casa",
    mobileTagline: "Adulto mayor",
    heroBadge: "Atención cercana y responsable",
    heroTitle:
      "Cuidado del adulto mayor a domicilio en Lima con apoyo profesional y trato humano.",
    heroDescription:
      "Coordinamos atención para adultos mayores que necesitan acompañamiento, apoyo por horas, monitoreo y procedimientos de enfermería en casa, adaptando el servicio a la rutina y estado del paciente.",
    heroImageAlt:
      "Cuidado del adulto mayor a domicilio en Lima",
    quickHighlights: [
      "Apoyo para adultos mayores con necesidades de monitoreo o acompañamiento",
      "Atención por horas, turnos o según requerimientos específicos del caso",
      "Orientación a la familia para definir la modalidad más adecuada",
    ],
    aboutTitle:
      "Una atención pensada para adultos mayores que necesitan cuidado, supervisión y más comodidad en casa.",
    aboutDescription:
      "El acompañamiento domiciliario ayuda a reducir estrés, evitar traslados y mantener una rutina más segura para personas mayores o dependientes.",
    trustPoints: [
      "Apoyo en controles, acompañamiento y procedimientos indicados",
      "Servicio adaptado al estado funcional y clínico del adulto mayor",
      "Coordinación con la familia para organizar mejor horarios y necesidades",
    ],
    servicesTitle:
      "Modalidades de atención para el cuidado del adulto mayor a domicilio.",
    servicesDescription:
      "Podemos orientar sobre apoyo por horas, procedimientos, monitoreo y otras modalidades según la necesidad real del paciente.",
    benefitsTitle:
      "Beneficios de solicitar apoyo domiciliario para el adulto mayor.",
    benefitsDescription:
      "Una buena atención en casa mejora la comodidad del paciente y la tranquilidad de la familia, especialmente cuando hay movilidad reducida o dependencia.",
    testimonialsTitle:
      "La confianza es especialmente importante en la atención del adulto mayor.",
    testimonialsDescription:
      "Las familias valoran mucho la puntualidad, la paciencia, el trato humano y la claridad en la coordinación.",
    galleryTitle:
      "Experiencia acompañando adultos mayores con necesidades de apoyo en casa.",
    galleryDescription:
      "Hemos trabajado con distintos niveles de dependencia, necesidades de monitoreo y casos que requieren atención profesional y cercanía.",
    resultsTitle:
      "Trayectoria suficiente para organizar mejor el cuidado del adulto mayor a domicilio.",
    resultsDescription:
      "La experiencia operativa ayuda a adaptar turnos, procedimientos y acompañamiento según las necesidades reales del paciente.",
    resultsCtaTitle:
      "Consulte por el cuidado del adulto mayor y reciba orientación rápida.",
    ctaTitle:
      "¿Busca apoyo para un adulto mayor en casa?",
    ctaDescription:
      "Escríbanos con la edad del paciente, el nivel de apoyo que necesita y el distrito para orientarlo mejor.",
    faqTitle:
      "Preguntas frecuentes sobre cuidado del adulto mayor a domicilio.",
    faqDescription:
      "Respondemos dudas sobre acompañamiento, turnos, monitoreo y tipos de apoyo para personas mayores.",
    faqItems: [
      {
        question: "¿Pueden cuidar adultos mayores por horas?",
        answer:
          "Sí. Podemos coordinar apoyo por horas o por turnos según la rutina del paciente y la necesidad de la familia.",
      },
      {
        question: "¿El servicio incluye monitoreo y procedimientos?",
        answer:
          "Sí. Dependiendo del caso, se puede coordinar acompañamiento, control de signos vitales, medicación y otros procedimientos de enfermería.",
      },
      {
        question: "¿Atienden adultos mayores con movilidad reducida?",
        answer:
          "Sí. Es uno de los casos más frecuentes en atención domiciliaria y se organiza según las necesidades específicas del paciente.",
      },
      {
        question: "¿Cómo se define la modalidad de atención?",
        answer:
          "La recomendamos según la condición del adulto mayor, el tiempo de apoyo requerido, el distrito y la dinámica del hogar.",
      },
      {
        question: "¿Puedo recibir orientación antes de contratar?",
        answer:
          "Sí. Por WhatsApp podemos revisar el caso y orientarlo sobre la modalidad más conveniente.",
      },
    ],
    contactDescription:
      "Compártanos la edad del paciente, el distrito y el tipo de apoyo que necesita para sugerirle la mejor modalidad de atención.",
    contactImageAlt:
      "Atención domiciliaria para adulto mayor en Lima",
    articlesTitle:
      "Páginas relacionadas con cuidado del adulto mayor y atención domiciliaria.",
    articlesDescription:
      "Estas rutas internas le permiten revisar modalidades de cuidado, horarios y procedimientos relacionados.",
    articles: [homeArticles[0], homeArticles[1], homeArticles[2]],
    footerDescription:
      "Cuidado del adulto mayor a domicilio en Lima con apoyo profesional, acompañamiento y atención adaptada a cada familia.",
    footerServices: sharedFooterLinks,
  },
  {
    path: "/servicios-2/",
    canonicalPath: "/enfermeras-a-domicilio-lima/",
    metaTitle:
      "Servicios de enfermería a domicilio en Lima | Enfermeras 24 Horas",
    metaDescription:
      "Revise nuestros servicios de enfermería a domicilio en Lima: enfermeras 24 horas, por horas, inyectables, vía endovenosa y cuidados postoperatorios.",
    topic: "Servicios de enfermería a domicilio en Lima",
    seoKeywords: [
      "servicios de enfermería a domicilio",
      "servicios enfermeras lima",
      "procedimientos de enfermería en casa",
    ],
    logoTagline: "Servicios de enfermería a domicilio",
    mobileTagline: "Servicios",
    heroBadge: "Procedimientos y cuidados en casa",
    heroTitle:
      "Servicios de enfermería a domicilio en Lima para distintos tipos de pacientes y procedimientos.",
    heroDescription:
      "Conozca las principales modalidades de atención que puede coordinar: enfermeras 24 horas, enfermeras por horas, vía endovenosa, inyectables, curaciones y apoyo postoperatorio.",
    heroImageAlt:
      "Servicios de enfermería a domicilio en Lima",
    quickHighlights: [
      "Distintas modalidades de atención según el caso del paciente",
      "Procedimientos frecuentes y apoyo profesional en casa",
      "Coordinación rápida para orientar la opción más adecuada",
    ],
    aboutTitle:
      "Una oferta de servicios pensada para cubrir necesidades frecuentes y especializadas en domicilio.",
    aboutDescription:
      "Nuestro portafolio reúne procedimientos clínicos, turnos de enfermería, apoyo a adultos mayores y atención para pacientes en recuperación o con controles recurrentes.",
    trustPoints: [
      "Servicios organizados según la necesidad clínica y el contexto del hogar",
      "Atención domiciliaria con enfoque técnico y trato humano",
      "Orientación previa para recomendar el servicio más conveniente",
    ],
    servicesTitle:
      "Modalidades y procedimientos que puede solicitar a domicilio.",
    servicesDescription:
      "Desde servicios generales de enfermería hasta procedimientos específicos, organizamos la atención según el paciente, el horario y el distrito.",
    benefitsTitle:
      "Por qué conviene revisar primero el servicio correcto.",
    benefitsDescription:
      "Elegir la modalidad adecuada ayuda a optimizar tiempos, costos y resultados en la atención domiciliaria.",
    testimonialsTitle:
      "Las reseñas ayudan a validar la calidad del servicio antes de elegir la modalidad.",
    testimonialsDescription:
      "Muchos usuarios toman su decisión comparando rapidez, trato y experiencia en distintos procedimientos.",
    galleryTitle:
      "Servicios realizados con enfoque domiciliario y atención profesional.",
    galleryDescription:
      "Acompañamos a pacientes en diferentes contextos clínicos, desde apoyo puntual hasta recuperación y monitoreo continuo.",
    resultsTitle:
      "Experiencia suficiente para coordinar una variedad de servicios en Lima.",
    resultsDescription:
      "La trayectoria operativa fortalece la coordinación de procedimientos frecuentes y atenciones más complejas en el hogar.",
    resultsCtaTitle:
      "Revise los servicios disponibles y contáctenos para coordinar el más adecuado.",
    ctaTitle:
      "¿No sabe qué servicio necesita el paciente?",
    ctaDescription:
      "Escríbanos por WhatsApp y le ayudamos a identificar la modalidad de atención y el procedimiento más conveniente para su caso.",
    faqTitle:
      "Preguntas frecuentes sobre nuestros servicios de enfermería a domicilio.",
    faqDescription:
      "Le ayudamos a entender qué puede coordinar, cómo se define el servicio y qué información necesitamos para orientarlo.",
    faqItems: [
      {
        question: "¿Qué servicios brindan a domicilio?",
        answer:
          "Brindamos enfermeras a domicilio, atención 24 horas, atención por horas, vía endovenosa, inyectables, cuidados postoperatorios, curaciones, monitoreo y otros procedimientos de enfermería.",
      },
      {
        question: "¿Cómo sé cuál servicio necesita el paciente?",
        answer:
          "Por WhatsApp podemos revisar su caso y orientarlo sobre la modalidad más adecuada según el procedimiento, el estado del paciente y el horario requerido.",
      },
      {
        question: "¿Atienden procedimientos puntuales y también seguimiento?",
        answer:
          "Sí. Coordinamos tanto procedimientos únicos como visitas recurrentes o modalidades de acompañamiento más continuo.",
      },
      {
        question: "¿Hay servicios para adultos mayores?",
        answer:
          "Sí. Atendemos adultos mayores con necesidades de monitoreo, recuperación, procedimientos o apoyo por horas en casa.",
      },
      {
        question: "¿También ofrecen orientación online?",
        answer:
          "Sí. Antes de la visita podemos orientar al paciente o a la familia por WhatsApp para acelerar la coordinación.",
      },
    ],
    contactDescription:
      "Compártanos el caso del paciente y lo ayudaremos a identificar qué servicio o modalidad de atención es la más conveniente.",
    contactImageAlt:
      "Servicios de enfermería a domicilio coordinados en Lima",
    articlesTitle:
      "Páginas específicas de nuestros servicios más consultados.",
    articlesDescription:
      "Estas rutas internas le permiten profundizar en cada modalidad de atención y en procedimientos concretos.",
    articles: [homeArticles[0], homeArticles[1], homeArticles[2]],
    footerDescription:
      "Servicios de enfermería a domicilio en Lima con distintas modalidades para pacientes, familias y procedimientos clínicos en casa.",
    footerServices: sharedFooterLinks,
  },
  {
    path: "/blog/cuidados-de-enfermeria-a-domicilio/",
    metaTitle:
      "¿Qué son los cuidados de enfermería a domicilio? | Guía en Lima",
    metaDescription:
      "Conozca qué son los cuidados de enfermería a domicilio, qué procedimientos incluyen y cuándo conviene solicitarlos en Lima para pacientes y adultos mayores.",
    topic: "Cuidados de enfermería a domicilio en Lima",
    seoKeywords: [
      "cuidados de enfermería a domicilio",
      "qué hace una enfermera a domicilio",
      "enfermería en casa lima",
    ],
    logoTagline: "Guía sobre cuidados en casa",
    mobileTagline: "Cuidados en casa",
    heroBadge: "Información útil para pacientes y familias",
    heroTitle:
      "¿Qué son los cuidados de enfermería a domicilio y cuándo conviene solicitarlos?",
    heroDescription:
      "Los cuidados de enfermería a domicilio incluyen procedimientos, monitoreo, administración de medicamentos, curaciones, seguimiento y apoyo profesional para pacientes que necesitan atención en casa.",
    heroImageAlt:
      "Cuidados de enfermería a domicilio en Lima",
    quickHighlights: [
      "Ayudan a continuar tratamientos y procedimientos sin salir de casa",
      "Son útiles para adultos mayores, recuperaciones y pacientes con movilidad reducida",
      "Permiten un cuidado más cómodo, ordenado y adaptado al entorno familiar",
    ],
    aboutTitle:
      "La enfermería a domicilio responde a una necesidad cada vez más común: recibir apoyo profesional en casa.",
    aboutDescription:
      "Muchos pacientes necesitan monitoreo, procedimientos o continuidad de tratamiento, pero no siempre es práctico trasladarse. La atención domiciliaria aparece como una solución más cómoda y personalizada.",
    trustPoints: [
      "Incluye procedimientos clínicos frecuentes y cuidados especializados",
      "Se adapta al estado del paciente y a la rutina del hogar",
      "Ayuda a la familia a manejar mejor el proceso de cuidado diario",
    ],
    servicesTitle:
      "Qué tipo de cuidados de enfermería pueden coordinarse a domicilio.",
    servicesDescription:
      "Entre los servicios más frecuentes están las curaciones, inyectables, vía endovenosa, monitoreo de signos vitales, cuidados postoperatorios y apoyo a adultos mayores.",
    benefitsTitle:
      "Por qué muchas familias prefieren la atención de enfermería en casa.",
    benefitsDescription:
      "La atención domiciliaria evita traslados, mejora la comodidad del paciente y permite un seguimiento más cercano de la evolución clínica.",
    testimonialsTitle:
      "La confianza en la atención a domicilio crece cuando hay experiencia y buen trato.",
    testimonialsDescription:
      "Las reseñas de otros pacientes ayudan a entender mejor cómo se vive el servicio y qué beneficios aporta a la familia.",
    galleryTitle:
      "La experiencia en cuidados domiciliarios ayuda a responder a casos muy distintos.",
    galleryDescription:
      "Desde pacientes que necesitan apoyo puntual hasta personas que requieren seguimiento más continuo, la enfermería a domicilio puede adaptarse a distintas etapas y necesidades.",
    resultsTitle:
      "La continuidad del servicio y el volumen de atención fortalecen la confianza del paciente.",
    resultsDescription:
      "La experiencia acumulada permite entender mejor qué necesita cada familia y cómo organizar la atención en casa de forma más eficiente.",
    resultsCtaTitle:
      "Si necesita cuidados de enfermería a domicilio, podemos orientarlo por WhatsApp.",
    ctaTitle:
      "¿Quiere saber qué cuidado domiciliario necesita el paciente?",
    ctaDescription:
      "Escríbanos con una breve descripción del caso y le ayudaremos a identificar el servicio más adecuado en Lima.",
    faqTitle:
      "Preguntas frecuentes sobre cuidados de enfermería a domicilio.",
    faqDescription:
      "Respondemos las dudas más comunes sobre qué incluyen estos cuidados, para quiénes son útiles y cómo coordinarlos.",
    faqItems: [
      {
        question: "¿Qué incluyen los cuidados de enfermería a domicilio?",
        answer:
          "Pueden incluir curaciones, administración de medicamentos, control de signos vitales, cuidados postoperatorios, vía endovenosa, inyectables y acompañamiento profesional según el paciente.",
      },
      {
        question: "¿Para qué pacientes conviene este tipo de servicio?",
        answer:
          "Es útil para adultos mayores, pacientes en recuperación, personas con movilidad reducida y casos que requieren monitoreo o procedimientos frecuentes en casa.",
      },
      {
        question: "¿La enfermería a domicilio reemplaza una clínica u hospital?",
        answer:
          "No. Es un apoyo profesional para casos que pueden manejarse en el hogar o que requieren continuidad del tratamiento fuera del centro de salud.",
      },
      {
        question: "¿Se puede coordinar por horas o por turnos?",
        answer:
          "Sí. La atención puede organizarse por procedimiento puntual, por horas, por turnos o con una modalidad más continua según la necesidad del paciente.",
      },
      {
        question: "¿Cómo se coordina el servicio en Lima?",
        answer:
          "Puede escribirnos por WhatsApp con el distrito, el estado del paciente y el procedimiento requerido para orientarlo y cotizar la atención.",
      },
    ],
    contactDescription:
      "Si desea coordinar cuidados de enfermería a domicilio, envíenos el caso del paciente y le ayudaremos a definir el servicio más conveniente.",
    contactImageAlt:
      "Información sobre cuidados de enfermería a domicilio en Lima",
    articlesTitle:
      "Páginas relacionadas con cuidados en casa y atención domiciliaria.",
    articlesDescription:
      "Estas rutas amplían la información sobre modalidades de atención y procedimientos concretos que pueden coordinarse en domicilio.",
    articles: [homeArticles[0], homeArticles[1], homeArticles[2]],
    footerDescription:
      "Guía sobre cuidados de enfermería a domicilio en Lima para pacientes, adultos mayores y familias que buscan atención profesional en casa.",
    footerServices: sharedFooterLinks,
  },
];

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function getPageContent(pathname: string) {
  const normalized = normalizePath(pathname);
  return (
    pageContents.find((page) => page.path === normalized) ??
    pageContents[0]
  );
}

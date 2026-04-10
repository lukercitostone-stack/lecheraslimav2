import {
  Activity,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseMedical,
  ClipboardList,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import {
  benefits,
  galleryImages,
  metrics,
  type BenefitIconKey,
} from "../data/siteContent";
import { buildWhatsAppUrl, testimonials } from "../data/siteContent";
import { SectionHeading, primaryButtonClass } from "./ui";

const benefitIcons: Record<BenefitIconKey, typeof Users> = {
  personalized: Users,
  followUp: Activity,
  supervision: ShieldCheck,
  certified: BadgeCheck,
  tailored: ClipboardList,
  portfolio: BriefcaseMedical,
  specialists: Stethoscope,
  education: BookOpenCheck,
};

export function BenefitsTestimonialsSection() {
  return (
    <>
      <section id="beneficios" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Por qué elegirnos"
            title="Una propuesta de valor clara para transmitir seguridad desde la primera impresión."
            description="Esta sección refuerza confianza, profesionalismo y cercanía con beneficios concretos. No son solo promesas: son razones visibles para que el usuario tome acción."
            centered
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefitIcons[benefit.icon];
              return (
                <article
                  key={benefit.title}
                  className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--soft-brand)] text-[var(--brand)]">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-extrabold text-[var(--ink)]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="testimonios"
        className="border-y border-slate-100 bg-[linear-gradient(180deg,_#ffffff_0%,_#f6fbff_100%)] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Prueba social"
            title="Testimonios que refuerzan confianza y ayudan a convertir visitas en consultas."
            description="Tomamos la lógica de reseñas del sitio de referencia, pero en un formato más limpio, legible y útil para sostener la decisión del cliente."
            centered
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3 xl:grid-cols-5">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[2rem] border border-white bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-extrabold text-[var(--ink)]">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {testimonial.time}
                    </p>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--soft-brand)] text-lg font-extrabold text-[var(--brand)]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">“{testimonial.quote}”</p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm font-semibold text-slate-500">
            Valoración general de 5.0/5 basada en reseñas visibles del negocio.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="slanted-surface overflow-hidden rounded-[2.5rem] px-6 py-14 text-white sm:px-10 lg:px-12">
            <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-sky-200">
                  Servicios realizados
                </p>
                <h2 className="font-display mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  Experiencia visible en enfermería a domicilio en Lima.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-sky-50/88">
                  Mostramos una composición visual más institucional para dar respaldo
                  comercial al servicio: atención real, cercanía con el paciente y una imagen
                  más sólida de la empresa.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {galleryImages.map((image, index) => (
                  <div
                    key={image}
                    className={`overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/10 shadow-lg ${
                      index % 3 === 1 ? "md:translate-y-6" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Servicio realizado ${index + 1}`}
                      className="h-48 w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Resultados"
            title="Cifras destacadas para reforzar autoridad y experiencia."
            description="Los números grandes cumplen una función comercial importante: validan la trayectoria, transmiten respaldo y ayudan a que la marca se perciba más consolidada."
            centered
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
              >
                <p className="font-display text-5xl font-extrabold text-[var(--brand)] sm:text-6xl">
                  {metric.value}
                </p>
                <h3 className="mt-4 text-xl font-extrabold text-[var(--ink)]">
                  {metric.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{metric.supporting}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-sky-100 bg-[linear-gradient(120deg,_rgba(239,250,255,0.95),_rgba(227,244,255,0.95))] p-8 shadow-[0_20px_50px_rgba(18,58,150,0.08)] sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--brand)]">
                Continuidad comercial
              </p>
              <h2 className="font-display mt-4 text-3xl font-extrabold text-[var(--ink)]">
                Empresa de cuidados de enfermería a domicilio con varios puntos de contacto.
              </h2>
            </div>
            <a href={buildWhatsAppUrl()} className={`${primaryButtonClass} mt-6 lg:mt-0`}>
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

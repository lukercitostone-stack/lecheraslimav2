import { ArrowRight, BadgeCheck, MessageCircle, PhoneCall } from "lucide-react";
import {
  buildWhatsAppUrl,
  services,
  siteConfig,
} from "../data/siteContent";
import type { PageContent } from "../data/pageContent";
import {
  SectionHeading,
  secondaryButtonClass,
} from "./ui";

export function AboutServicesSection({ page }: { page: PageContent }) {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative">
            <div className="absolute inset-x-10 bottom-[-1.25rem] h-10 rounded-full bg-[rgba(18,58,150,0.10)] blur-xl" />
            <img
              src="/medical/about.jpg"
              alt="Equipo de enfermeras a domicilio atendiendo pacientes en Lima"
              loading="lazy"
              decoding="async"
              className="relative h-full min-h-[420px] w-full rounded-[2rem] object-cover shadow-[0_22px_60px_rgba(15,23,42,0.12)]"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Presentación"
              title={page.aboutTitle}
              description={page.aboutDescription}
            />

            <div className="mt-8 grid gap-4">
              {page.trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 rounded-3xl border border-sky-100 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                >
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[var(--soft-brand)] text-[var(--brand)]">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold leading-7 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className="border-y border-slate-100 bg-[linear-gradient(180deg,_rgba(239,250,255,0.9),_#ffffff_35%)] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Servicios destacados"
            title={page.servicesTitle}
            description={page.servicesDescription}
            centered
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} a domicilio en Lima`}
                    loading="lazy"
                    decoding="async"
                    className={`h-56 w-full transition duration-500 group-hover:scale-105 ${
                      service.imageContain
                        ? "bg-slate-50 p-6 object-contain"
                        : "object-cover"
                    }`}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-extrabold tracking-[0.18em] text-[var(--brand)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-extrabold leading-tight text-[var(--ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <a
                    href={buildWhatsAppUrl(
                      `${siteConfig.whatsappMessage}\n\nServicio de interés: ${service.title}`,
                    )}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--brand)]"
                  >
                    Solicitar este servicio
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,_#123a96_0%,_#0d2e78_55%,_#12a8c9_100%)] px-8 py-10 text-white shadow-[0_28px_80px_rgba(18,58,150,0.22)] sm:px-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-sky-100">
                Atención rápida
              </p>
              <h2 className="font-display mt-4 text-3xl font-extrabold sm:text-4xl">
                {page.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-sky-50/90">
                {page.ctaDescription}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
              <a
                href={buildWhatsAppUrl()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[var(--brand)] transition duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className={`${secondaryButtonClass} border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white`}
              >
                <PhoneCall className="h-4 w-4" />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Cross, Menu, MessageCircle, PhoneCall, Sparkles, X } from "lucide-react";
import { useState } from "react";
import {
  buildWhatsAppUrl,
  navigationItems,
  quickHighlights,
  siteConfig,
} from "../data/siteContent";
import { primaryButtonClass, secondaryButtonClass } from "./ui";

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="inicio"
      className="relative overflow-hidden border-b border-sky-100 bg-[radial-gradient(circle_at_top_left,_rgba(123,227,255,0.34),_transparent_30%),linear-gradient(180deg,_#f3fbff_0%,_#ffffff_100%)]"
    >
      <div className="hero-mesh absolute inset-0 opacity-60" />
      <div className="absolute left-[-7rem] top-[-5rem] h-52 w-52 rounded-full bg-[rgba(30,191,220,0.16)] blur-3xl" />
      <div className="absolute right-[-5rem] top-24 h-60 w-60 rounded-full bg-[rgba(18,58,150,0.10)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-5">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--brand)] text-white shadow-[0_12px_30px_rgba(18,58,150,0.22)]">
              <Cross className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-xl font-extrabold text-[var(--ink)]">
                {siteConfig.name}
              </p>
              <p className="text-sm font-semibold text-slate-500">
                Enfermería a domicilio en Lima
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-slate-600 transition hover:text-[var(--brand)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[var(--ink)]"
            >
              <PhoneCall className="h-4 w-4 text-[var(--accent)]" />
              {siteConfig.phoneDisplay}
            </a>
            <a href={buildWhatsAppUrl()} className={primaryButtonClass}>
              Solicitar cotización
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-label="Abrir menú"
            className="grid h-12 w-12 place-items-center rounded-2xl border border-sky-100 bg-white text-[var(--ink)] shadow-sm lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <div className="mb-5 lg:hidden">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-extrabold text-[var(--ink)] shadow-sm"
          >
            <PhoneCall className="h-4 w-4 text-[var(--accent)]" />
            {siteConfig.phoneDisplay}
          </a>
        </div>

        {mobileMenuOpen ? (
          <div className="mb-6 rounded-3xl border border-sky-100 bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-extrabold text-slate-700"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[var(--ink)]"
              >
                <PhoneCall className="h-4 w-4 text-[var(--accent)]" />
                {siteConfig.phoneDisplay}
              </a>
              <a href={buildWhatsAppUrl()} className={`${primaryButtonClass} w-full`}>
                Solicitar cotización
              </a>
            </div>
          </div>
        ) : null}

        <div className="mb-4 lg:hidden">
          <p className="text-center text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--brand)]">
            Especialistas en adultos mayores
          </p>
        </div>

        <div className="grid gap-14 pb-20 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-10">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/10 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--brand)] shadow-sm">
              <Sparkles className="h-4 w-4 text-[var(--accent)]" />
              Atención profesional 24/7 en Lima
            </div>

            <h1 className="font-display max-w-3xl text-4xl font-extrabold leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
              Enfermeras a domicilio con respuesta rápida, trato humano y respaldo profesional.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Descubra nuestros servicios de enfermería a domicilio en Lima y elija la opción
              que mejor se adapte a su necesidad: medicamentos, curaciones, control de signos
              vitales, cuidados postoperatorios y más.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={buildWhatsAppUrl()} className={primaryButtonClass}>
                <MessageCircle className="h-4 w-4" />
                Contactar por WhatsApp
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`} className={secondaryButtonClass}>
                <PhoneCall className="h-4 w-4" />
                Llamar ahora
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {quickHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_15px_35px_rgba(15,23,42,0.06)] backdrop-blur"
                >
                  <p className="text-sm font-bold leading-6 text-slate-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 top-10 hidden h-40 w-40 rounded-full bg-[rgba(37,99,235,0.12)] blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-[0_30px_80px_rgba(18,58,150,0.16)] backdrop-blur">
              <img
                src="/medical/hero.jpg"
                alt="Enfermera profesional a domicilio"
                className="h-[500px] w-full rounded-[1.5rem] object-cover object-center"
              />

              <div className="absolute left-7 top-7 max-w-[15rem] rounded-[1.5rem] border border-white/60 bg-white/86 p-4 shadow-lg backdrop-blur">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--brand)]">
                  Atención inmediata
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">
                  Coordinamos procedimientos, seguimiento y orientación desde el primer contacto.
                </p>
              </div>

              <div className="absolute bottom-7 right-7 rounded-[1.5rem] bg-[var(--brand)] px-5 py-4 text-white shadow-[0_18px_50px_rgba(18,58,150,0.32)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-100">
                  Línea directa
                </p>
                <p className="mt-2 text-2xl font-extrabold">{siteConfig.phoneDisplay}</p>
                <p className="mt-1 text-sm text-sky-100">{siteConfig.schedule}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

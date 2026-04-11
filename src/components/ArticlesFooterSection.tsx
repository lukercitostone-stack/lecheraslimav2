import { Cross, Facebook, Instagram, Linkedin, MapPin, PhoneCall, Stethoscope } from "lucide-react";
import type { PageContent } from "../data/pageContent";
import { siteConfig } from "../data/siteContent";
import { SectionHeading, SocialPill } from "./ui";

export function ArticlesFooterSection({ page }: { page: PageContent }) {
  return (
    <>
      <section
        id="articulos"
        className="border-t border-slate-100 bg-[linear-gradient(180deg,_#ffffff_0%,_#f6fbff_100%)] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Últimos artículos"
            title={page.articlesTitle}
            description={page.articlesDescription}
            centered
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {page.articles.map((article) => (
              <article
                key={article.title}
                className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  decoding="async"
                  className="h-60 w-full object-cover"
                />
                <div className="p-7">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">
                    {article.category}
                  </p>
                  <h3 className="font-display mt-4 text-2xl font-extrabold leading-tight text-[var(--ink)]">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                  <a
                    href={article.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--brand)]"
                  >
                    Leer más
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[var(--ink)] pb-10 pt-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.95fr_0.95fr_0.9fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-sky-200">
                <Cross className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-2xl font-extrabold">{siteConfig.name}</p>
                <p className="text-sm font-semibold text-white/60">
                  Enfermería a domicilio en Lima
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
              {page.footerDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <SocialPill
                href={siteConfig.socialLinks.facebook}
                label="Facebook"
                icon={Facebook}
              />
              <SocialPill
                href={siteConfig.socialLinks.instagram}
                label="Instagram"
                icon={Instagram}
              />
              <SocialPill
                href={siteConfig.socialLinks.linkedin}
                label="LinkedIn"
                icon={Linkedin}
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-sky-200">
              Contacto
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/70">
              <p className="flex gap-3">
                <PhoneCall className="mt-1 h-4 w-4 shrink-0 text-sky-200" />
                <span>{siteConfig.phoneInternational}</span>
              </p>
              <p className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-sky-200" />
                <span>{siteConfig.location}</span>
              </p>
              <p>{siteConfig.schedule}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-sky-200">
              Servicios
            </p>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/70">
              {page.footerServices.map((service) => (
                <li key={service.href} className="flex gap-3">
                  <Stethoscope className="mt-1 h-4 w-4 shrink-0 text-sky-200" />
                  <a href={service.href} className="transition hover:text-white">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-sky-200">
              Información legal
            </p>
            <div className="mt-5 space-y-3 text-sm font-semibold text-white/70">
              <p>Términos y condiciones</p>
              <p>Política de privacidad de datos</p>
              <p>Libro de reclamaciones</p>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/55">
              Si necesita estos documentos en formato digital, podemos enviárselos por WhatsApp
              al momento de la consulta.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs font-bold uppercase tracking-[0.18em] text-white/45 sm:px-6 lg:px-8">
          {siteConfig.legalName} | Copyright {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
}

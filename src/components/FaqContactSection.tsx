import { ArrowRight, Building2, ChevronDown, ChevronUp, Clock3, PhoneCall } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { buildWhatsAppUrl, serviceOptions, siteConfig } from "../data/siteContent";
import type { PageContent } from "../data/pageContent";
import { SectionHeading, primaryButtonClass } from "./ui";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  district: string;
  service: string;
  notes: string;
  accepted: boolean;
};

const initialFormState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  district: "",
  service: serviceOptions[0],
  notes: "",
  accepted: false,
};

export function FaqContactSection({ page }: { page: PageContent }) {
  const [activeFaq, setActiveFaq] = useState(0);
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [formNotice, setFormNotice] = useState("");

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    const checked =
      "checked" in event.target ? Boolean(event.target.checked) : false;

    setFormState((current) => ({
      ...current,
      [name]:
        event.target instanceof HTMLInputElement &&
        event.target.type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      siteConfig.whatsappMessage,
      "",
      "Datos del formulario:",
      `Nombre: ${formState.fullName}`,
      `Celular: ${formState.phone}`,
      `Correo: ${formState.email || "No consignado"}`,
      `Distrito: ${formState.district}`,
      `Servicio de interés: ${formState.service}`,
      formState.notes ? `Detalle adicional: ${formState.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setFormNotice(
      "Abrimos WhatsApp con su consulta lista para enviar. Si no se abrió automáticamente, revise los permisos del navegador.",
    );
    setFormState(initialFormState);
  };

  return (
    <>
      <section
        id="preguntas"
        className="border-y border-slate-100 bg-[linear-gradient(180deg,_#ffffff_0%,_#f4fbff_100%)] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Preguntas frecuentes"
                title={page.faqTitle}
                description={page.faqDescription}
              />

              <div className="mt-10 space-y-4">
                {page.faqItems.map((item, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <article
                      key={item.question}
                      className="overflow-hidden rounded-[1.6rem] border border-white bg-white shadow-[0_16px_35px_rgba(15,23,42,0.05)]"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setActiveFaq((current) => (current === index ? -1 : index))
                        }
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="text-base font-extrabold text-[var(--ink)]">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 shrink-0 text-[var(--brand)]" />
                        ) : (
                          <ChevronDown className="h-5 w-5 shrink-0 text-[var(--brand)]" />
                        )}
                      </button>

                      {isOpen ? (
                        <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                          <p className="text-sm leading-7 text-slate-600">{item.answer}</p>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <img
                src="/medical/hero.jpg"
                alt={page.contactImageAlt}
                loading="lazy"
                decoding="async"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Contacto"
                title="Envíanos tu consulta sin compromiso."
                description={page.contactDescription}
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[
                  {
                    label: "Teléfono",
                    value: siteConfig.phoneInternational,
                    icon: PhoneCall,
                  },
                  {
                    label: "Horario",
                    value: "Las 24 horas",
                    icon: Clock3,
                  },
                ].map((card) => (
                  <article
                    key={card.label}
                    className="rounded-[1.6rem] border border-slate-100 bg-white p-6 shadow-[0_16px_35px_rgba(15,23,42,0.05)]"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--soft-brand)] text-[var(--brand)]">
                      <card.icon className="h-6 w-6" />
                    </span>
                    <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-slate-400">
                      {card.label}
                    </p>
                    <p className="mt-2 text-base font-bold leading-7 text-[var(--ink)]">
                      {card.value}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_30px_70px_rgba(18,58,150,0.10)] sm:p-10">
              <div className="mb-8 flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--brand)] text-white">
                  <Building2 className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-400">
                    Formulario principal
                  </p>
                  <h3 className="font-display text-2xl font-extrabold text-[var(--ink)]">
                    Necesito enfermera a domicilio
                  </h3>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Nombres y apellidos"
                  className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(18,58,150,0.08)]"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Número de celular"
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(18,58,150,0.08)]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Correo electrónico"
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(18,58,150,0.08)]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="district"
                    value={formState.district}
                    onChange={handleInputChange}
                    required
                    placeholder="Distrito"
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(18,58,150,0.08)]"
                  />
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(18,58,150,0.08)]"
                  >
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="notes"
                  value={formState.notes}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Cuéntanos brevemente qué necesita el paciente"
                  className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(18,58,150,0.08)]"
                />
                <label className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-600">
                  <input
                    type="checkbox"
                    name="accepted"
                    checked={formState.accepted}
                    onChange={handleInputChange}
                    required
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[var(--brand)] focus:ring-[var(--brand)]"
                  />
                  Acepto los términos y condiciones para que mi consulta sea atendida por WhatsApp.
                </label>
                <button type="submit" className={`${primaryButtonClass} w-full`}>
                  Enviar consulta
                  <ArrowRight className="h-4 w-4" />
                </button>
                {formNotice ? (
                  <p className="rounded-2xl bg-[var(--soft-brand)] px-4 py-3 text-sm font-semibold leading-7 text-[var(--brand)]">
                    {formNotice}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

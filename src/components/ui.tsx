import { Facebook } from "lucide-react";

export const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(18,58,150,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-dark)]";

export const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand)]/15 bg-white px-6 py-3 text-sm font-bold text-[var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)]/30 hover:text-[var(--brand)]";

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.24em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-extrabold leading-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function SocialPill({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Facebook;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white/90 transition duration-300 hover:border-white/25 hover:bg-white/15"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

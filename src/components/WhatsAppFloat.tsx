import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, siteConfig } from "../data/siteContent";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversación de WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(37,211,102,0.45)] sm:bottom-6 sm:right-6"
    >
      <span className="grid h-11 w-11 place-items-center rounded-full bg-white/16">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="hidden pr-1 sm:block">
        WhatsApp
        <span className="block text-[11px] font-semibold text-white/85">
          {siteConfig.phoneDisplay}
        </span>
      </span>
    </a>
  );
}

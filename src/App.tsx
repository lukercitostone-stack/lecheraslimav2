import { AboutServicesSection } from "./components/AboutServicesSection";
import { ArticlesFooterSection } from "./components/ArticlesFooterSection";
import { BenefitsTestimonialsSection } from "./components/BenefitsTestimonialsSection";
import { FaqContactSection } from "./components/FaqContactSection";
import { HeroSection } from "./components/HeroSection";
import { Seo } from "./components/Seo";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import type { PageContent } from "./data/pageContent";

export function App({ page }: { page: PageContent }) {
  return (
    <div className="min-h-screen bg-[var(--page)] text-[var(--ink)]">
      <Seo page={page} />
      <HeroSection page={page} />
      <main>
        <AboutServicesSection page={page} />
        <BenefitsTestimonialsSection page={page} />
        <FaqContactSection page={page} />
        <ArticlesFooterSection page={page} />
      </main>
      <WhatsAppFloat />
    </div>
  );
}

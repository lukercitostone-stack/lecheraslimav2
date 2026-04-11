import { AboutServicesSection } from "./components/AboutServicesSection";
import { ArticlesFooterSection } from "./components/ArticlesFooterSection";
import { BenefitsTestimonialsSection } from "./components/BenefitsTestimonialsSection";
import { FaqContactSection } from "./components/FaqContactSection";
import { HeroSection } from "./components/HeroSection";
import { Seo } from "./components/Seo";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export function App() {
  return (
    <div className="min-h-screen bg-[var(--page)] text-[var(--ink)]">
      <Seo />
      <HeroSection />
      <main>
        <AboutServicesSection />
        <BenefitsTestimonialsSection />
        <FaqContactSection />
        <ArticlesFooterSection />
      </main>
      <WhatsAppFloat />
    </div>
  );
}

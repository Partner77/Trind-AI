import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ArchitectureSection } from "@/components/architecture-section";
import { QuickStartSection } from "@/components/quickstart-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-mesh">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ArchitectureSection />
      <QuickStartSection />
      <Footer />
    </main>
  );
}

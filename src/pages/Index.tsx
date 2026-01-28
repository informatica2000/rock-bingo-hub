import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DownloadsSection from "@/components/DownloadsSection";
import CartonesSection from "@/components/CartonesSection";
import ManualSection from "@/components/ManualSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DownloadsSection />
        <CartonesSection />
        <ManualSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

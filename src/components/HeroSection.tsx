import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import rockBingoLogo from "@/assets/rock-bingo-logo.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rock-dark via-background to-background" />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={rockBingoLogo}
            alt="Rock Bingo Pro Logo"
            className="w-32 h-32 md:w-40 md:h-40 animate-float drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 tracking-tight">
          <span className="text-gradient-rock">ROCK BINGO</span>
          <span className="block text-foreground">PRO</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Aplicación portable de bingo de 90 bolas con estilo rockero.
          <br className="hidden md:block" />
          Compatible con Windows, Linux y macOS.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button asChild variant="rock" size="xl">
            <a href="#descargas">
              <Download className="w-5 h-5" />
              Descargar Rock Bingo Pro
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#descargas" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import { FileText, Info } from "lucide-react";

const CartonesSection = () => {
  return (
    <section id="cartones" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-primary">CARTONES</span> DE BINGO
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Descarga los cartones oficiales en formato PDF listos para imprimir.
          </p>
        </div>

        {/* Cards section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8">
            {/* Visual representation */}
            <div className="grid grid-cols-5 gap-1 mb-6 max-w-xs mx-auto">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-accent rounded flex items-center justify-center text-xs font-bold text-muted-foreground"
                >
                  {Math.floor(Math.random() * 90) + 1}
                </div>
              ))}
            </div>

            {/* Download button */}
            <div className="text-center mb-6">
              <Button asChild variant="rockOutline" size="lg">
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Enlace de cartones pendiente de configurar'); }}>
                  <FileText className="w-5 h-5" />
                  Descargar Cartones (PDF)
                </a>
              </Button>
            </div>

            {/* Info note */}
            <div className="flex items-start gap-3 bg-accent/30 rounded-lg p-4">
              <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Los cartones ya están diseñados y no son personalizables. 
                Simplemente descarga el PDF e imprímelos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartonesSection;

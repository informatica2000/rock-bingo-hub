import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle } from "lucide-react";

const ManualSection = () => {
  return (
    <section id="manual" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-primary">MANUAL</span> DE USUARIO
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Guía completa para descargar, descomprimir y ejecutar correctamente la aplicación.
          </p>
        </div>

        {/* Manual card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8">
            {/* Steps preview */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Cómo descargar el archivo ZIP</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Cómo descomprimir correctamente</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Cómo ejecutar en tu sistema operativo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Solución de problemas comunes</span>
              </div>
            </div>

            {/* Download button */}
            <div className="text-center">
              <Button asChild variant="rockOutline" size="lg">
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Enlace del manual pendiente de configurar'); }}>
                  <BookOpen className="w-5 h-5" />
                  Descargar Manual (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualSection;

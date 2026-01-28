import { Button } from "@/components/ui/button";
import { Download, AlertTriangle, Monitor, Apple } from "lucide-react";

const DownloadsSection = () => {
  return (
    <section id="descargas" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-primary">DESCARGAR</span> LA APLICACIÓN
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Descarga el archivo ZIP y ejecuta la aplicación directamente desde la carpeta.
          </p>
        </div>

        {/* Download card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 border-glow">
            {/* Platform icons */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Monitor className="w-5 h-5" />
                <span className="text-sm">Windows</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.117.779.425 1.485.882 2.053.53.659 1.21 1.149 1.913 1.526a9.44 9.44 0 002.158.848c.07.02.14.035.209.05.18.04.36.075.54.102.12.018.24.03.36.04.18.012.36.018.54.018.24 0 .48-.012.72-.036.24-.024.48-.06.72-.108.24-.048.48-.108.72-.18.24-.072.48-.156.72-.252.18-.072.36-.156.54-.252.12-.06.24-.132.36-.204.12-.072.24-.156.36-.24.12-.084.24-.18.36-.276.12-.096.24-.204.36-.324.06-.06.12-.12.18-.192.12-.132.24-.276.36-.432.06-.084.12-.168.18-.264.12-.18.24-.372.36-.576.06-.108.12-.216.18-.336.12-.24.24-.492.36-.768.06-.144.12-.288.18-.444.06-.156.12-.312.18-.48.06-.168.12-.348.18-.54.06-.18.12-.372.18-.576l.09-.324c.03-.12.06-.24.09-.372.03-.12.06-.252.09-.384.03-.144.06-.288.09-.444.03-.144.06-.3.09-.456.024-.156.048-.312.072-.48.024-.156.048-.324.072-.492.024-.18.048-.36.072-.552.024-.18.048-.372.072-.564.024-.204.048-.408.072-.624.024-.204.048-.42.072-.648.024-.228.048-.468.072-.708.024-.24.048-.492.072-.756.024-.252.048-.516.072-.792.024-.276.048-.564.072-.864.024-.288.048-.588.072-.9.024-.3.048-.612.072-.936.024-.312.048-.636.072-.972.024-.324.048-.66.072-1.008.024-.336.048-.684.072-1.044.024-.36.048-.732.072-1.116.024-.384.048-.78.072-1.188.024-.408.048-.828.072-1.26.024-.432.048-.876.072-1.332z"/>
                </svg>
                <span className="text-sm">Linux</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Apple className="w-5 h-5" />
                <span className="text-sm">macOS</span>
              </div>
            </div>

            {/* Download button */}
            <div className="text-center mb-8">
              <Button asChild variant="rock" size="xl" className="w-full sm:w-auto">
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Enlace de descarga pendiente de configurar'); }}>
                  <Download className="w-5 h-5" />
                  Descargar Rock Bingo Pro (ZIP)
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Archivo ZIP multiplataforma (Windows, Linux y macOS)
              </p>
            </div>

            {/* Warning */}
            <div className="bg-accent/50 border border-primary/30 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  Importante
                </p>
                <p className="text-sm text-muted-foreground">
                  No separes los archivos. Ejecuta la aplicación desde su carpeta original 
                  para que funcione correctamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;

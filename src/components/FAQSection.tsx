import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "¿Rock Bingo Pro es una aplicación portable?",
    answer: "Sí. No requiere instalación y se ejecuta directamente desde su carpeta.",
  },
  {
    question: "¿Funciona en Windows, Linux y macOS?",
    answer: "Sí. Es una aplicación multiplataforma.",
  },
  {
    question: "¿Puedo mover solo el archivo de la aplicación?",
    answer: "No. La aplicación necesita todos los archivos incluidos en la carpeta original.",
  },
  {
    question: "¿Se pueden personalizar los cartones de bingo?",
    answer: "No. Los cartones ya están diseñados y se proporcionan en un PDF.",
  },
  {
    question: "¿La aplicación instala algo o recopila datos?",
    answer: "No. No instala nada ni recopila datos personales.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            PREGUNTAS <span className="text-primary">FRECUENTES</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Resolvemos tus dudas sobre Rock Bingo Pro.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-heading text-base md:text-lg hover:text-primary hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

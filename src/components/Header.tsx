import { Download, FileText, HelpCircle, Home, BookOpen } from "lucide-react";

const navItems = [
  { href: "#inicio", label: "Inicio", icon: Home },
  { href: "#descargas", label: "Descargas", icon: Download },
  { href: "#cartones", label: "Cartones", icon: FileText },
  { href: "#manual", label: "Manual", icon: BookOpen },
  { href: "#faq", label: "FAQ", icon: HelpCircle },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold text-primary">
              ROCK BINGO PRO
            </span>
          </a>
          
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <a
              href="#descargas"
              className="px-4 py-2 text-sm font-heading font-semibold text-primary border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-all"
            >
              DESCARGAR
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

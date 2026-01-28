const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-lg font-bold text-primary">
              ROCK BINGO PRO
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Rock Bingo Pro. Aplicación portable de bingo de 90 bolas.
          </p>

          <nav className="flex items-center gap-4">
            <a
              href="#inicio"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Inicio
            </a>
            <a
              href="#descargas"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Descargas
            </a>
            <a
              href="#faq"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

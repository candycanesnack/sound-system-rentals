const Footer = () => {
  return (
    <footer className="py-8 bg-card text-card-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold">
            Izposoja ozvočenja
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="tel:+38640123456" className="hover:text-card-foreground transition-colors">
              +386 40 123 456
            </a>
            <a href="mailto:info@izposoja-ozvocenja.si" className="hover:text-card-foreground transition-colors">
              info@izposoja-ozvocenja.si
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2026 Izposoja ozvočenja. Vse pravice pridržane.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

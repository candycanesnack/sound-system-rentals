import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-12">
          <button
            onClick={scrollToTop}
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            IZPOSOJA OZVOČENJA
          </button>
          <button
            onClick={() => scrollToSection("kontakt")}
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            KONTAKT
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

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
        <div className="flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-start"
          >
            <span className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
              IZPOSOJA OZVOČENJA
            </span>
            <div className="h-px w-full bg-muted-foreground/40 mt-1 group-hover:bg-foreground/60 transition-colors" />
            <span className="text-xs text-muted-foreground/70 mt-0.5 tracking-wide">
              za zabave, piknike in dogodke
            </span>
          </button>
          <button
            onClick={() => scrollToSection("kontakt")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
          >
            Kontakt
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

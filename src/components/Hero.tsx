import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToPackages = () => {
    const element = document.getElementById("paketi");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
      
      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="max-w-3xl mx-auto fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Izposoja ozvočenja za zabave, piknike in dogodke
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Profesionalna zvočna in svetlobna oprema za brezskrbne dogodke
          </p>
          <Button
            onClick={scrollToPackages}
            size="lg"
            className="bg-card text-card-foreground hover:bg-card/90 px-8 py-6 text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Oglej si ponudbo
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

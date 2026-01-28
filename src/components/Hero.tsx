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
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/10 to-background" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-card/10 rounded-full blur-2xl" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="max-w-3xl mx-auto fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight uppercase tracking-wide">
            IZPOSOJA OZVOČENJA
          </h1>
          
          {/* Elegant horizontal line */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-32 md:w-48 bg-muted-foreground/40" />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            za zabave, piknike in dogodke
          </p>
          
          {/* Animated scroll indicator */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={scrollToPackages}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
            >
              <span className="text-sm tracking-wide">
                Pomakni se navzdol
              </span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
            
            <Button
              onClick={scrollToPackages}
              size="lg"
              className="bg-card text-card-foreground hover:bg-card/90 px-8 py-6 text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all group mt-4"
            >
              Oglej si ponudbo
              <ChevronDown className="w-4 h-4 ml-1 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

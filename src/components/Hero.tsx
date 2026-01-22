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
          {/* Decorative line above title */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-muted-foreground/30" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
            <div className="h-px w-16 bg-muted-foreground/30" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Izposoja ozvočenja za zabave, piknike in dogodke
          </h1>
          
          {/* Decorative line below title */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-muted-foreground/40 to-muted-foreground/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-muted-foreground/40 to-muted-foreground/40" />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Profesionalna zvočna in svetlobna oprema za brezskrbne dogodke
          </p>
          <Button
            onClick={scrollToPackages}
            size="lg"
            className="bg-card text-card-foreground hover:bg-card/90 px-8 py-6 text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all group"
          >
            Oglej si ponudbo
            <ChevronDown className="w-4 h-4 ml-1 group-hover:translate-y-0.5 transition-transform" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5 text-muted-foreground/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

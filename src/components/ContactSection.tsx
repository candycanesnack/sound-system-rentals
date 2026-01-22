import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 bg-secondary/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-muted-foreground/10 rounded-full" />
      <div className="absolute top-16 right-16 w-20 h-20 border border-muted-foreground/10 rounded-full" />
      <div className="absolute bottom-10 left-10 w-40 h-40 border border-muted-foreground/10 rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-muted-foreground/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
            <div className="h-px w-12 bg-muted-foreground/30" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-muted-foreground mb-10">
            Imate vprašanja? Kontaktirajte nas za več informacij ali individualno ponudbo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+38640123456"
              className="flex items-center gap-3 px-6 py-4 bg-card text-card-foreground rounded-xl hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">+386 40 123 456</span>
            </a>

            <a
              href="mailto:info@izposoja-ozvocenja.si"
              className="flex items-center gap-3 px-6 py-4 bg-card text-card-foreground rounded-xl hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">info@izposoja-ozvocenja.si</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

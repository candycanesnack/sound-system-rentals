import { useState } from "react";
import { packages, Package } from "@/data/packages";
import PackageCard from "./PackageCard";
import InquiryForm from "./InquiryForm";

const PackagesSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsFormOpen(true);
  };

  return (
    <section id="paketi" className="py-20 bg-background relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-muted-foreground/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
            <div className="h-px w-12 bg-muted-foreground/30" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Paketi izposoje
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Izberite paket, ki ustreza vašim potrebam. Vsa oprema je profesionalna in redno vzdrževana.
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={handleSelectPackage}
              index={index}
            />
          ))}
        </div>
      </div>

      <InquiryForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        selectedPackage={selectedPackage}
      />
    </section>
  );
};

export default PackagesSection;

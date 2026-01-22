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
    <section id="paketi" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Paketi izposoje
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Izberite paket, ki ustreza vašim potrebam. Vsa oprema je profesionalna in redno vzdrževana.
          </p>
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

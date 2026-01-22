import { Button } from "@/components/ui/button";
import { Package } from "@/data/packages";
import { Volume2, Lightbulb, Users } from "lucide-react";

interface PackageCardProps {
  pkg: Package;
  onSelect: (pkg: Package) => void;
  index: number;
}

const PackageCard = ({ pkg, onSelect, index }: PackageCardProps) => {
  return (
    <div
      className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-card to-muted-foreground/20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        <div className="relative z-10 flex gap-4">
          {pkg.hasSound && (
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Volume2 className="w-6 h-6 text-primary" />
            </div>
          )}
          {pkg.hasLighting && (
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-card-foreground mb-1">
              {pkg.name}
            </h3>
            <p className="text-sm text-muted-foreground">{pkg.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Users className="w-4 h-4" />
          <span>{pkg.capacity}</span>
        </div>

        {/* Equipment list */}
        <ul className="space-y-2 mb-6">
          {pkg.equipment.map((item, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-muted-foreground/20">
          <div className="text-2xl font-bold text-card-foreground">
            {pkg.price}€
            <span className="text-sm font-normal text-muted-foreground ml-1">/dan</span>
          </div>
          <Button
            onClick={() => onSelect(pkg)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6"
          >
            IZBERI
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;

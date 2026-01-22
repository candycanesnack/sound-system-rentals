import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Package } from "@/data/packages";
import { useToast } from "@/hooks/use-toast";

interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: Package | null;
}

const InquiryForm = ({ isOpen, onClose, selectedPackage }: InquiryFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    pickupTime: "",
    deliveryType: "",
    deliveryAddress: "",
    needsMontage: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", { ...formData, package: selectedPackage?.name });
    
    toast({
      title: "Povpraševanje poslano!",
      description: "Kmalu vas bomo kontaktirali.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventDate: "",
      pickupTime: "",
      deliveryType: "",
      deliveryAddress: "",
      needsMontage: "",
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Povpraševanje</DialogTitle>
          <DialogDescription>
            {selectedPackage && (
              <span className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium">
                Paket: {selectedPackage.name} - {selectedPackage.price}€/dan
              </span>
            )}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Ime *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                placeholder="Vaše ime"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Priimek *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                placeholder="Vaš priimek"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="vas@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefon *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+386 XX XXX XXX"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="eventDate">Datum dogodka *</Label>
              <Input
                id="eventDate"
                type="date"
                required
                value={formData.eventDate}
                onChange={(e) => handleChange("eventDate", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pickupTime">Čas prevzema/dostave *</Label>
              <Input
                id="pickupTime"
                type="time"
                required
                value={formData.pickupTime}
                onChange={(e) => handleChange("pickupTime", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="deliveryType">Prevzem ali dostava? *</Label>
            <Select
              value={formData.deliveryType}
              onValueChange={(value) => handleChange("deliveryType", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Izberite možnost" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="prevzem">Osebni prevzem</SelectItem>
                <SelectItem value="dostava">Dostava</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {formData.deliveryType === "dostava" && (
            <div className="space-y-2 fade-in">
              <Label htmlFor="deliveryAddress">Kam dostavljamo opremo? *</Label>
              <Input
                id="deliveryAddress"
                required={formData.deliveryType === "dostava"}
                value={formData.deliveryAddress}
                onChange={(e) => handleChange("deliveryAddress", e.target.value)}
                placeholder="Naslov dostave"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="needsMontage">Želite tudi montažo opreme? *</Label>
            <Select
              value={formData.needsMontage}
              onValueChange={(value) => handleChange("needsMontage", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Izberite možnost" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="da">Da, želim montažo</SelectItem>
                <SelectItem value="ne">Ne, sam bom postavil</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-card text-card-foreground hover:bg-card/90 py-6 text-base font-semibold"
          >
            Pošlji povpraševanje
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryForm;

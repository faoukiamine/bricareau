import { useState } from "react";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ContactEntreprises = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
    acceptMarketing: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé!",
      description: "Nous vous contacterons bientôt."
    });
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
      acceptMarketing: false
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative lg:h-[700px] bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden flex flex-col lg:items-center">
          <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
            <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
              <GlobalBreadcrumbs variant="light" />
            </div>
          </div>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl mx-auto text-center py-12 lg:py-0 w-full">
              <h1
                className="leading-[1.1] md:leading-[1.2] mb-8 tracking-tighter text-foreground max-w-xl mx-auto"
              >
                Contactez-nous pour des solutions de l'eau de bureau
              </h1>
              <p className="text-muted-foreground font-light text-justify max-w-xl mx-auto">
                Vous souhaitez une eau plus fraîche et plus savoureuse sur votre lieu de travail ? Remplissez le formulaire pour être contacté par notre expert et obtenir des solutions pratiques de fontaines à eau adaptées aux besoins de votre entreprise.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 md:p-8 rounded-lg border border-border shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Courriel *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Raison de la consultation *</Label>
                  <Select value={formData.reason} onValueChange={(value) => setFormData({ ...formData, reason: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="analyse">Analyse d'eau</SelectItem>
                      <SelectItem value="nouvelle-station">Nouvelle installation d'une station d'eau potable</SelectItem>
                      <SelectItem value="nouvelle-fontaine">Nouvelle installation d'une fontaine d'eau</SelectItem>
                      <SelectItem value="entretien">Entretien</SelectItem>
                      <SelectItem value="reparation">Réparation</SelectItem>
                      <SelectItem value="autres">Autres</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Informations complémentaires/commentaires</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="marketing"
                    checked={formData.acceptMarketing}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, acceptMarketing: checked as boolean })
                    }
                  />
                  <Label htmlFor="marketing" className="text-sm font-normal cursor-pointer">
                    J'accepte de recevoir des propositions commerciales et des informations sur les produits et services par mail et par téléphone.
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Envoyez
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactEntreprises;

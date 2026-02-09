import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ConsultationFormSection = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3 text-left">
                        <h2
                            className="text-slate-900 tracking-tighter mb-8 italic text-left"
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                        >
                            <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Planifiez une consultation</span>
                            <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">gratuite sur l'eau</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Remplissez le formulaire ci-dessous pour organiser une visite d'un de nos experts de l'eau.
                        </p>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-2xl">
                            {/* Progress */}
                            <div className="flex items-center gap-8 mb-12 overflow-x-auto pb-4 border-b border-gray-100">
                                <div className="flex items-center gap-2 text-blue-600 font-bold whitespace-nowrap">
                                    <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">1</span>
                                    VOS INFOS
                                </div>
                                <div className="flex items-center gap-2 text-gray-300 font-bold whitespace-nowrap">
                                    <span className="w-10 h-10 rounded-full bg-gray-200 text-white flex items-center justify-center">2</span>
                                    VOTRE DISPONIBILITÉ
                                </div>
                                <div className="flex items-center gap-2 text-gray-300 font-bold whitespace-nowrap">
                                    <span className="w-10 h-10 rounded-full bg-gray-200 text-white flex items-center justify-center">3</span>
                                    CONFIRMATION
                                </div>
                            </div>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3 text-left">
                                    <Label htmlFor="fname" className="font-bold flex gap-1">Prénom*</Label>
                                    <Input id="fname" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Jean" />
                                </div>
                                <div className="space-y-3 text-left">
                                    <Label htmlFor="lname" className="font-bold flex gap-1">Nom*</Label>
                                    <Input id="lname" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Dupont" />
                                </div>
                                <div className="space-y-3 text-left">
                                    <Label htmlFor="email" className="font-bold flex gap-1">Courriel*</Label>
                                    <Input id="email" type="email" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="jean@exemple.com" />
                                </div>
                                <div className="space-y-3 text-left">
                                    <Label htmlFor="phone" className="font-bold flex gap-1">Téléphone*</Label>
                                    <Input id="phone" type="tel" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="(514) 000-0000" />
                                </div>
                                <div className="md:col-span-2 space-y-3 text-left">
                                    <Label htmlFor="address" className="font-bold flex gap-1">Adresse*</Label>
                                    <Input id="address" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="123 rue de l'Eau" />
                                </div>
                                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="space-y-3 text-left">
                                        <Label htmlFor="city" className="font-bold flex gap-1">Ville*</Label>
                                        <Input id="city" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Montréal" />
                                    </div>
                                    <div className="space-y-3 text-left">
                                        <Label htmlFor="province" className="font-bold flex gap-1">Province*</Label>
                                        <Input id="province" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Québec" />
                                    </div>
                                    <div className="space-y-3 text-left">
                                        <Label htmlFor="zip" className="font-bold flex gap-1">Code Postal*</Label>
                                        <Input id="zip" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="H1A 1A1" />
                                    </div>
                                </div>
                                <div className="md:col-span-2 text-left">
                                    <Button
                                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-16 h-14 w-full md:w-auto"
                                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    >
                                        Continuer
                                    </Button>
                                    <p className="mt-4 text-[10px] text-gray-400">
                                        En soumettant ce formulaire, vous acceptez nos conditions d'utilisation et notre politique de confidentialité. Un spécialiste Bricareau vous contactera sous peu.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationFormSection;

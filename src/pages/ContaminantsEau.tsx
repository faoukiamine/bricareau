import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import heroImageImg from "@/assets/hero-image.jpg";
import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { microBiologiques, chimiques, radiologiques } from "@/data/contaminants";
import { ShieldCheck, HeartPulse, Droplets } from "lucide-react";

const ContaminantsEau = () => {
    useEffect(() => {
        document.title = "Les contaminants de l'eau | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFDFD]">
            <Header />
            <main>
                {/* Hero Section */}
                <Hero 
                    badge="Qualité de l'eau"
                    highlightedTitle="Comprendre les"
                    mainTitle="contaminants de l'eau"
                    subtitle="Découvrez les polluants les plus fréquents dans l'eau potable au Québec et comment nos systèmes peuvent vous en protéger."
                    image={heroImageImg}
                    showBreadcrumbs={true}
                    breadcrumbVariant="on-light"
                    homeVariant={true}
                />

                {/* Transition Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#18448F] mb-6">
                                Pourquoi analyser et filtrer l'eau de votre résidence ?
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                L'eau qui coule de vos robinets, qu'elle provienne d'un puits privé ou d'un réseau municipal, parcourt un long trajet avant d'arriver chez vous. Tout au long de ce cheminement, elle peut se charger en divers éléments indésirables. Comprendre ce qui compose votre eau est la première étape vers une hydratation véritablement saine et sécuritaire pour votre famille.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-[#18448F]">
                                    <Droplets size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Invisibles à l'œil nu</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Une eau parfaitement claire peut cacher des minéraux dissous, des produits chimiques ou des micro-organismes imperceptibles.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-[#8CC63F]">
                                    <HeartPulse size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Impact sur la santé</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Certains polluants comme le plomb ou les bactéries s'accumulent ou agissent rapidement, affectant le bien-être de votre famille.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-700">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Normes rigoureuses</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Santé Canada établit des limites strictes (CMA) pour garantir que l'eau distribuée reste sécuritaire à la consommation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sante Canada Data Section */}
                <section className="py-16 bg-slate-50 relative border-t border-slate-200">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#18448F] mb-4">Recommandations de Santé Canada</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Consultez la liste complète des recommandations pour la qualité de l'eau potable au Canada, incluant les paramètres microbiologiques, chimiques et radiologiques.
                            </p>
                        </div>

                        <Tabs defaultValue="micro" className="w-full">
                            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
                                <TabsTrigger value="micro">Microbiologiques</TabsTrigger>
                                <TabsTrigger value="chimique">Chimiques</TabsTrigger>
                                <TabsTrigger value="radio">Radiologiques</TabsTrigger>
                            </TabsList>

                            {/* Microbiologiques */}
                            <TabsContent value="micro" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[200px]">Contaminant</TableHead>
                                                <TableHead>Recommandation</TableHead>
                                                <TableHead>Sources Courantes</TableHead>
                                                <TableHead>Considérations Santé</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {microBiologiques.map((item: any, idx: number) => (
                                                <TableRow key={idx}>
                                                    <TableCell className="font-semibold">{item.contaminant}</TableCell>
                                                    <TableCell className="text-sm">{item.recommandation}</TableCell>
                                                    <TableCell className="text-sm text-slate-600">{item.sources}</TableCell>
                                                    <TableCell className="text-sm text-slate-600">{item.sante}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </TabsContent>

                            {/* Chimiques */}
                            <TabsContent value="chimique" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="mb-4 p-4 bg-blue-50 text-blue-800 text-sm rounded-lg border border-blue-100">
                                    <strong>Note :</strong> Les paramètres chimiques incluent les Concentrations Maximales Acceptables (CMA) et les Objectifs d'Ordre Esthétique (OE) en mg/L.
                                </div>
                                <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                                    <Table>
                                        <TableHeader className="sticky top-0 bg-white shadow-sm z-10">
                                            <TableRow>
                                                <TableHead className="w-[50px]">Type</TableHead>
                                                <TableHead className="w-[300px]">Contaminant</TableHead>
                                                <TableHead>CMA (mg/L)</TableHead>
                                                <TableHead>OE (mg/L)</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {chimiques.map((item: any, idx: number) => (
                                                <TableRow key={idx}>
                                                    <TableCell className="font-mono text-xs text-slate-500">{item.type}</TableCell>
                                                    <TableCell className="font-semibold">{item.contaminant}</TableCell>
                                                    <TableCell className="text-sm">{item.cma}</TableCell>
                                                    <TableCell className="text-sm text-slate-600">{item.oe}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </TabsContent>

                            {/* Radiologiques */}
                            <TabsContent value="radio" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[200px]">Contaminant</TableHead>
                                                <TableHead>Recommandation</TableHead>
                                                <TableHead>Sources Courantes</TableHead>
                                                <TableHead>Considérations Santé</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {radiologiques.map((item: any, idx: number) => (
                                                <TableRow key={idx}>
                                                    <TableCell className="font-semibold">{item.contaminant}</TableCell>
                                                    <TableCell className="text-sm">{item.recommandation}</TableCell>
                                                    <TableCell className="text-sm text-slate-600">{item.sources}</TableCell>
                                                    <TableCell className="text-sm text-slate-600">{item.sante}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ContaminantsEau;

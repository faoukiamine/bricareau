import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import heroImageImg from "@/assets/Turbide-Water.webp";
import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { microBiologiques, chimiques, radiologiques } from "@/data/contaminants";
import { ShieldCheck, HeartPulse, Droplets, Beaker, Bug, Factory, Leaf, Radiation, ShieldAlert, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const glossaryData = [
  {
    category: "Métaux et Métaux Lourds",
    icon: Beaker,
    items: [
      { name: "Plomb", desc: "S'infiltre souvent par les vieilles tuyauteries et soudures. Toxique même à faible dose, particulièrement dangereux pour le développement neurologique des enfants." },
      { name: "Arsenic", desc: "Présent naturellement dans certaines roches, il peut contaminer l'eau de puits. C'est un cancérigène connu avec des effets graves sur la santé à long terme." },
      { name: "Mercure", desc: "Métal lourd hautement toxique, souvent issu de rejets industriels ou de processus naturels. Peut causer de graves dommages au système nerveux et aux reins." },
      { name: "Fer et Manganèse", desc: "Très fréquents dans les puits. Bien que peu dangereux pour la santé, ils causent des taches tenaces (rouille, noir), une eau trouble et un goût métallique désagréable." },
      { name: "Cuivre", desc: "Provient généralement de la corrosion des tuyaux en cuivre. Peut causer des troubles gastro-intestinaux et endommager le foie à forte dose." },
      { name: "Baryum", desc: "Élément naturel parfois présent dans l'eau souterraine. Une exposition prolongée peut entraîner des problèmes cardiovasculaires et une augmentation de la pression artérielle." },
      { name: "Aluminium", desc: "Parfois présent suite au traitement municipal. Bien qu'essentiellement éliminé, des traces peuvent subsister." },
      { name: "Zinc", desc: "Provient souvent de la corrosion des tuyaux galvanisés. Il affecte principalement l'apparence et le goût de l'eau." },
      { name: "Cadmium", desc: "S'infiltre via la corrosion de tuyaux galvanisés ou les rejets industriels. S'accumule dans l'organisme et est très toxique pour les reins." },
      { name: "Chrome (Total et Chrome VI)", desc: "Provient des rejets industriels (métallurgie, tanneries). Le chrome hexavalent (VI) est hautement cancérigène." },
      { name: "Sélénium", desc: "Élément naturel ou issu de rejets miniers/agricoles. Utile en traces, mais toxique pour le système nerveux et la circulation à forte dose." },
      { name: "Strontium", desc: "Minéral naturel. À de fortes concentrations, il peut s'accumuler dans les os et interférer avec le développement osseux, surtout chez les enfants." },
      { name: "Antimoine", desc: "Utilisé dans les alliages et retardateurs de flamme. Une exposition prolongée peut affecter le cœur et le tractus gastro-intestinal." }
    ]
  },
  {
    category: "Micro-organismes et Pathogènes",
    icon: Bug,
    items: [
      { name: "E. Coli et Coliformes fécaux", desc: "Indiquent une contamination récente par des matières fécales. Provoquent des maladies gastro-intestinales sévères et nécessitent une intervention immédiate (ébullition, traitement UV)." },
      { name: "Coliformes totaux", desc: "Bactéries naturellement présentes dans l'environnement. Leur présence indique une vulnérabilité du système aux agents pathogènes." },
      { name: "Giardia et Cryptosporidium", desc: "Des parasites microscopiques résistants au chlore, souvent présents dans les eaux de surface. Causent des troubles intestinaux graves." },
      { name: "Bactéries ferreuses et sulfureuses", desc: "Bactéries non pathogènes mais qui créent des boues visqueuses dans la plomberie et peuvent générer des odeurs nauséabondes." },
      { name: "Cyanobactéries (Algues bleues)", desc: "Prolifèrent dans les lacs et rivières en été. Produisent des toxines dangereuses pour le foie et le système nerveux." },
      { name: "Virus entériques", desc: "Inclus des virus comme l'hépatite A ou le norovirus. Extrêmement petits, ils requièrent une désinfection ou filtration ultra-fine." }
    ]
  },
  {
    category: "Désinfectants et Sous-produits",
    icon: ShieldAlert,
    items: [
      { name: "Chlore et Chloramines", desc: "Utilisés par les municipalités pour désinfecter l'eau. Peuvent donner un goût et une odeur désagréables à l'eau, et assécher la peau et les cheveux." },
      { name: "Trihalométhanes (THM)", desc: "Sous-produits cancérigènes se formant lorsque le chlore réagit avec la matière organique." },
      { name: "Acides Haloacétiques (AHA)", desc: "Autre classe de sous-produits de chloration. Toxiques pour le foie, les reins et potentiellement cancérigènes." },
      { name: "Chlorite et Chlorate", desc: "Sous-produits formés lors de l'utilisation du dioxyde de chlore comme désinfectant." },
      { name: "Bromate", desc: "Sous-produit cancérigène généré lors de la désinfection de l'eau à l'ozone." },
      { name: "N-Nitrosodiméthylamine (NDMA)", desc: "Se forme lors du traitement de l'eau (souvent avec les chloramines). Très cancérigène." }
    ]
  },
  {
    category: "Produits Chimiques Industriels et COV",
    icon: Factory,
    items: [
      { name: "PFAS (Produits chimiques éternels)", desc: "Substances perfluoroalkylées utilisées dans de nombreux produits industriels. S'accumulent dans l'environnement et l'organisme, causant divers cancers." },
      { name: "Benzène, Toluène, Éthylbenzène, Xylènes (BTEX)", desc: "Solvants industriels et composants pétroliers. Souvent liés à des fuites de réservoirs souterrains. Neurotoxiques et cancérigènes." },
      { name: "Tétrachloroéthylène et Trichloroéthylène", desc: "Solvants de nettoyage à sec et de dégraissage. Contaminants fréquents des nappes phréatiques, cancérigènes probables." },
      { name: "1,4-Dioxane", desc: "Solvant industriel stabilisateur, extrêmement mobile dans l'eau souterraine. Cancérigène potentiel." },
      { name: "Chlorure de vinyle", desc: "Composant des plastiques PVC, peut lixivier des tuyauteries anciennes. Fortement cancérigène." },
      { name: "Formaldéhyde", desc: "Produit industriel ou sous-produit d'oxydation. Fortement irritant et cancérigène." },
      { name: "Cyanure", desc: "Issu principalement de rejets industriels (mines, métallurgie). Extrêmement toxique à court terme." },
      { name: "Amiante (Asbestos)", desc: "Lixivié par l'érosion de vieilles conduites d'eau en ciment-amiante. L'ingestion est liée à des polypes et cancers digestifs." }
    ]
  },
  {
    category: "Pesticides et Herbicides",
    icon: Leaf,
    items: [
      { name: "Atrazine et Glyphosate", desc: "Herbicides agricoles massivement utilisés, entraînés par le ruissellement. Potentiels perturbateurs endocriniens." },
      { name: "2,4-D, MCPA, Dicamba", desc: "Herbicides sélectifs courants. Une exposition à long terme peut endommager le foie et les reins." },
      { name: "Chlorpyrifos, Malathion, Diméthoate", desc: "Insecticides organophosphorés neurotoxiques qui peuvent contaminer les puits en zones agricoles." },
      { name: "Pentachlorophénol", desc: "Fongicide historique utilisé pour traiter le bois (poteaux électriques). Hautement toxique et cancérigène." },
      { name: "Diquat", desc: "Herbicide aquatique utilisé pour contrôler les algues. Peut causer des dommages oculaires et rénaux." }
    ]
  },
  {
    category: "Minéraux Naturels et Radiologiques",
    icon: Radiation,
    items: [
      { name: "Calcaire (Dureté de l'eau)", desc: "Constitué de calcium et de magnésium. Ne pose pas de risque pour la santé, mais entartre les chauffe-eau, détruit l'électroménager et obstrue la tuyauterie." },
      { name: "Nitrates et Nitrites", desc: "Proviennent souvent des engrais agricoles ou des fosses septiques défectueuses. Très dangereux pour les nourrissons (syndrome du bébé bleu)." },
      { name: "Sulfure d'hydrogène (H2S)", desc: "Gaz dissous qui donne une forte odeur d'œufs pourris à l'eau. Corrosif pour la plomberie." },
      { name: "Sodium", desc: "Souvent ajouté par les adoucisseurs d'eau au sel traditionnels ou présent naturellement. À surveiller pour les personnes suivant un régime pauvre en sel." },
      { name: "Sulfates", desc: "Donnent un goût amer à l'eau et peuvent avoir un effet laxatif temporaire chez les personnes non habituées." },
      { name: "Uranium et Radon", desc: "Éléments radioactifs naturellement présents dans le roc canadien (Bouclier canadien). Présentent des risques de cancer ou dommages rénaux à long terme." },
      { name: "Radium-226 et Radium-228", desc: "Isotopes radioactifs issus de la désintégration de l'uranium/thorium. Augmentent le risque de cancer des os." },
      { name: "Plomb-210", desc: "Élément de la chaîne de désintégration radioactive, toxique par ses émissions radiologiques." }
    ]
  }
];

const ContaminantsEau = () => {
    const [activeGlossaryIdx, setActiveGlossaryIdx] = useState(0);
    const [showAllCards, setShowAllCards] = useState(false);

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
                    ctaText="Explorez les contaminants"
                    ctaLink="#explorez"
                    showPhone={false}
                    showBreadcrumbs={true}
                    breadcrumbVariant="on-light"
                    homeVariant={true}
                />

                {/* Transition Section */}
                <section id="explorez" className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="heading-pro-max mb-6">
                                <span className="font-bold not-italic text-[#18448F] block">Pourquoi analyser et filtrer</span>
                                <span className="font-bold text-[#8CC63F] block">l'eau de votre résidence ?</span>
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

                {/* Glossary Section */}
                <section className="py-20 bg-slate-50 border-t border-slate-200">
                    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                        <div className="text-center mb-12 max-w-3xl mx-auto">
                            <h2 className="heading-pro-max mb-4">
                                <span className="font-bold not-italic text-[#18448F] block">Guide des principaux</span>
                                <span className="font-bold text-[#8CC63F] block">contaminants de l'eau</span>
                            </h2>
                            <p className="text-lg text-slate-600">
                                Explorez les polluants les plus fréquents, classés par catégorie, pour comprendre leur origine et leur impact.
                            </p>
                        </div>

                        <div className="relative bg-slate-900 rounded-[2rem] lg:rounded-[3rem] p-6 md:p-8 lg:p-12 overflow-hidden shadow-2xl mt-12 w-full">
                            {/* Abstract background blobs */}
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                                <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-[#18448F]/40 blur-[100px] rounded-full mix-blend-screen"></div>
                                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-[#8CC63F]/20 blur-[120px] rounded-full mix-blend-screen"></div>
                            </div>

                            <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                                {/* Navigation Sidebar */}
                                <div className="flex lg:flex-col gap-3 overflow-x-auto w-full lg:w-1/3 pb-4 lg:pb-0 scrollbar-hide snap-x">
                                    {glossaryData.map((cat, idx) => {
                                        const isActive = activeGlossaryIdx === idx;
                                        const Icon = cat.icon;
                                        return (
                                            <button 
                                                key={idx}
                                                onClick={() => {
                                                    setActiveGlossaryIdx(idx);
                                                    setShowAllCards(false);
                                                }}
                                                className={cn(
                                                    "flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 min-w-[240px] lg:min-w-0 text-left border snap-start",
                                                    isActive 
                                                        ? "bg-white/10 border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md text-white" 
                                                        : "bg-transparent border-transparent hover:bg-white/5 text-slate-400 hover:text-slate-200"
                                                )}
                                            >
                                                <div className={cn("p-3 rounded-xl transition-all duration-300 shrink-0", isActive ? "bg-[#8CC63F] text-slate-900 shadow-lg shadow-[#8CC63F]/20 scale-110" : "bg-white/5 text-slate-400")}>
                                                    <Icon size={20} />
                                                </div>
                                                <span className="font-bold text-sm leading-tight flex-1">
                                                    {cat.category}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </div>

                                {/* Content Area */}
                                <div className="flex-1 w-full bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 relative overflow-hidden min-h-[500px]">
                                     <div className="absolute -top-10 -right-10 text-white/[0.03] transform rotate-12 pointer-events-none transition-all duration-1000">
                                         {React.createElement(glossaryData[activeGlossaryIdx].icon, { size: 240 })}
                                     </div>
                                     
                                     <div className="flex flex-wrap items-center gap-4 mb-8 relative z-10 animate-in fade-in slide-in-from-left-4 duration-500" key={`header-${activeGlossaryIdx}`}>
                                         <h3 className="text-2xl md:text-3xl font-black text-white">{glossaryData[activeGlossaryIdx].category}</h3>
                                         <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-bold border border-white/10">
                                             {glossaryData[activeGlossaryIdx].items.length} éléments
                                         </span>
                                     </div>
                                     
                                     <div className="grid sm:grid-cols-2 gap-4 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700" key={`content-${activeGlossaryIdx}`}>
                                         {(showAllCards ? glossaryData[activeGlossaryIdx].items : glossaryData[activeGlossaryIdx].items.slice(0, 6)).map((item, i) => (
                                             <div key={i} className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 p-5 rounded-2xl transition-all duration-300 group">
                                                 <h4 className="text-lg font-bold text-[#8CC63F] mb-2 group-hover:text-white transition-colors">{item.name}</h4>
                                                 <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">{item.desc}</p>
                                             </div>
                                         ))}
                                     </div>

                                     {!showAllCards && glossaryData[activeGlossaryIdx].items.length > 6 && (
                                         <div className="mt-8 text-center relative z-10 animate-in fade-in duration-500">
                                             <button 
                                                 onClick={() => setShowAllCards(true)}
                                                 className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#8CC63F] hover:text-slate-900 transition-all font-bold text-sm shadow-sm"
                                             >
                                                 Voir les {glossaryData[activeGlossaryIdx].items.length - 6} autres polluants
                                             </button>
                                         </div>
                                     )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sante Canada Data Section */}
                <section className="py-24 bg-white relative border-t border-slate-200">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-12">
                            <h2 className="heading-pro-max mb-4">
                                <span className="font-bold not-italic text-[#18448F] block">Recommandations de</span>
                                <span className="font-bold text-[#8CC63F] block">Santé Canada</span>
                            </h2>
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
                                                    <TableCell className="text-base font-semibold">{item.contaminant}</TableCell>
                                                    <TableCell className="text-base">{item.recommandation}</TableCell>
                                                    <TableCell className="text-base text-slate-600">{item.sources}</TableCell>
                                                    <TableCell className="text-base text-slate-600">{item.sante}</TableCell>
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
                                                    <TableCell className="font-mono text-sm text-slate-500">{item.type}</TableCell>
                                                    <TableCell className="text-base font-semibold">{item.contaminant}</TableCell>
                                                    <TableCell className="text-base">{item.cma}</TableCell>
                                                    <TableCell className="text-base text-slate-600">{item.oe}</TableCell>
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
                                                    <TableCell className="text-base font-semibold">{item.contaminant}</TableCell>
                                                    <TableCell className="text-base">{item.recommandation}</TableCell>
                                                    <TableCell className="text-base text-slate-600">{item.sources}</TableCell>
                                                    <TableCell className="text-base text-slate-600">{item.sante}</TableCell>
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

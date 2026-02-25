import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    ShieldCheck,
    Droplets,
    AlertTriangle,
    CheckCircle2,
    ArrowRight,
    Shield,
    Zap,
    Info,
    Check,
    Microscope,
    Stethoscope,
    Building2,
    FileText,
    Activity
} from "lucide-react";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import heroUV from "@/assets/Systèmes de désinfection UV.webp";
import scientistImg from "@/assets/Scientist istesting water.webp";

const LampeUVBlog = () => {
    useEffect(() => {
        document.title = "La Désinfection UV : Impératif Sanitaire pour l'Eau de Puits | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Expertise technique sur la nécessité des systèmes UV pour puits artésiens. Analyse scientifique de l'innocuité bactériologique par Bricareau Water Specialist.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed">
            <Header />

            <main>
                {/* Authoritative Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden bg-[#0A1628]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroUV}
                            alt="Technologie de désinfection ultraviolette industrielle"
                            className="w-full h-full object-cover opacity-30 scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628] to-[#0A1628]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl">
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-10 backdrop-blur-md">
                                <Microscope className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">Dossier Scientifique & Technique</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight mb-12">
                                La Stérilisation UV : <br />
                                <span className="font-bold text-[#3B82F6]">L'Impératif Incontournable</span> <br />
                                pour l'Eau de Puits
                            </h1>

                            <p className="text-2xl text-slate-300 font-light max-w-3xl mb-16 leading-relaxed">
                                Analyse approfondie de la barrière microbiologique ultraviolette : enjeux sanitaires, principes de biophysique et protocoles d'ingénierie résidentielle.
                            </p>

                            <div className="flex flex-wrap gap-8 text-slate-400 text-sm border-t border-white/10 pt-10">
                                <div className="flex items-center gap-3">
                                    <FileText className="w-5 h-5 text-blue-500" />
                                    <span>Temps de lecture : 18 min</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Building2 className="w-5 h-5 text-blue-500" />
                                    <span>Expertise : Bricareau Water Specialist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Executive Summary / Introduction */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-20">
                                <h2 className="text-4xl font-bold tracking-tight mb-10 text-slate-900 border-l-8 border-blue-600 pl-8">
                                    Avant-propos : Le paradigme de l'autonomie et de la responsabilité sanitaire
                                </h2>
                                <div className="prose prose-slate prose-xl max-w-none text-slate-700 italic font-light leading-relaxed mb-12">
                                    "L'accès à une source d'eau privée, qu'elle soit artésienne ou de surface, offre une indépendance précieuse vis-à-vis des infrastructures collectives. Toutefois, cette autonomie transfère l'intégralité de la responsabilité de la santé publique au propriétaire. En l'absence des contrôles rigoureux des usines de traitement municipales, la mise en place d'une barrière de sécurité microbiologique devient non seulement recommandée, mais structurellement obligatoire pour garantir l'innocuité de la ressource."
                                </div>
                                <p className="text-lg text-slate-600 mb-6">
                                    Chez <strong>Bricareau Water Specialist</strong>, notre mission transcende la simple fourniture d'équipements. Nous œuvrons pour l'excellence technique en matière de filtration, en appliquant des standards industriels au secteur résidentiel. Ce guide technique explore les fondements scientifiques qui font de la lampe UV le pilier central de toute installation de traitement d'eau de puits moderne.
                                </p>
                            </div>

                            {/* Chapter 1: Hydrogeology */}
                            <div className="mb-24">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-blue-600/5 flex items-center justify-center text-blue-600">
                                        <Droplets className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-1 block">Chapitre I</span>
                                        <h2 className="text-3xl font-bold tracking-tight">Le déterminisme hydrogéologique et la vulnérabilité des nappes</h2>
                                    </div>
                                </div>

                                <p className="text-lg text-slate-700 mb-8">
                                    La croyance populaire érige souvent les couches terrestres en filtre infaillible. Si la percolation à travers le sol élimine effectivement une part importante des impuretés macroscopiques, l'hydrogéologie moderne démontre que les nappes phréatiques sont des systèmes dynamiques et ouverts.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                                    <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            Infiltrations épisodiques
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            Les variations météorologiques extrêmes — fontes des neiges massives, précipitations torrentielles — provoquent des surpressions hydrauliques capables de transporter des micro-organismes pathogènes (issus des lixiviats agricoles ou de la faune sauvage) à travers des micro-fractures géologiques jusque-là inactives.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            Intégrité structurelle des forages
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            Même un puits artésien profond n'est pas à l'abri. Un scellement de collerette défectueux, un tubage corrodé ou un couvercle non étanche constituent des points d'entrée critiques pour les contaminants de surface, les insectes et les rongeurs, vecteurs de contamination bactériologique immédiate.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Chapter 2: The Microbiological Matrix */}
                            <div className="mb-24">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-emerald-600/5 flex items-center justify-center text-emerald-600">
                                        <Activity className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-1 block">Chapitre II</span>
                                        <h2 className="text-3xl font-bold tracking-tight">La matrice microbiologique : Au-delà des coliformes</h2>
                                    </div>
                                </div>

                                <p className="text-lg text-slate-700 mb-8">
                                    Le risque ne se limite pas aux indicateurs classiques comme <em>E. coli</em>. Le spectre des pathogènes opportunistes dans l'eau de puits est vaste et souvent invisible aux analyses de routine superficielles.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-8 group">
                                        <div className="flex-shrink-0 w-1 bg-emerald-600 transition-all duration-300 group-hover:w-4" />
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">Protozoaires Kystiques (Giardia et Cryptosporidium)</h4>
                                            <p className="text-slate-600 italic">
                                                Ces micro-organismes développent une paroi protectrice (oocyste) les rendant quasiment invulnérables aux procédures de chloration domestiques standard. La barrière UV est la seule technologie capable de neutraliser leur capacité de réplication de manière instantanée.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-8 group">
                                        <div className="flex-shrink-0 w-1 bg-emerald-600 transition-all duration-300 group-hover:w-4" />
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">Virus Entériques</h4>
                                            <p className="text-slate-600 italic">
                                                D'une dimension largement inférieure au micron, les virus échappent à toute forme de filtration mécanique conventionnelle. Seule une altération biophysique de leur matériel génétique permet d'assurer l'innocuité de l'eau.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Chapter 3: Physics of Inactivation */}
                            <div className="mb-24 py-20 bg-[#F8FAFC] rounded-[4rem] px-12 -mx-12 border border-slate-100 relative overflow-hidden">
                                <div className="relative z-10 max-w-3xl">
                                    <Zap className="w-12 h-12 text-blue-600 mb-8" />
                                    <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-1 block">Chapitre III</span>
                                    <h2 className="text-4xl font-bold tracking-tight mb-8">Biophysique de l'inactivation par rayonnement 254nm</h2>
                                    <p className="text-lg text-slate-700 mb-10">
                                        La supériorité de la technologie UV réside dans sa nature non chimique. Là où le chlore agit par oxydation (altérant souvent la chimie et les propriétés organoleptiques de l'eau), le rayonnement UV-C cible spécifiquement la viabilité biologique.
                                    </p>

                                    <div className="prose prose-slate prose-lg">
                                        <h4 className="text-blue-900 font-bold">Le mécanisme d'action :</h4>
                                        <p className="text-slate-600">
                                            À une longueur d'onde de 254 nanomètres, l'énergie lumineuse est absorbée de manière optimale par les acides nucléiques des micro-organismes. Cette absorption provoque la formation de dimères de thymine dans l'ADN. Ce "blocage" moléculaire empêche le pathogène d'activer son processus de réplication.
                                        </p>
                                        <p className="font-bold text-slate-900 border-l-4 border-blue-600 pl-6 my-8">
                                            Un micro-organisme incapable de se multiplier au sein de l'hôte est biologiquement inerte et donc inoffensif.
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -mr-32 -mt-32" />
                            </div>

                            {/* Chapter 4: Engineering & Pre-treatment */}
                            <div className="mb-24">
                                <div className="flex items-center gap-5 mb-12">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-600/5 flex items-center justify-center text-indigo-600">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-1 block">Chapitre IV</span>
                                        <h2 className="text-3xl font-bold tracking-tight">Ingénierie Système : Le rôle critique du prétraitement</h2>
                                    </div>
                                </div>

                                <p className="text-lg text-slate-700 mb-12">
                                    L'efficacité d'un système UV est corrélée à la qualité physico-chimique de l'eau au moment où elle traverse la chambre de traitement. L'erreur principale consiste à installer une lampe UV comme un module autonome sans considération pour l'effet "d'ombrage".
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100 relative group overflow-hidden">
                                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
                                        <h4 className="text-xl font-bold mb-6 italic">Clarification par sédimentation</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            Toute particule supérieure à 5 microns peut servir de bouclier physique à une bactérie. Pour assurer l'innocuité, l'installation d'un filtre à sédiments haute performance en amont est une condition <em>sine qua non</em>.
                                        </p>
                                        <CheckCircle2 className="w-12 h-12 text-slate-100 absolute bottom-6 right-6 transition-colors group-hover:text-blue-50" />
                                    </div>
                                    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100 relative group overflow-hidden">
                                        <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600" />
                                        <h4 className="text-xl font-bold mb-6 italic">Interférence minérale</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            Le fer (seuil &lt; 0.3 ppm) et la dureté (calcaire) tachent et entartrent la gaine de quartz protectrice. Un voile opaque sur le quartz est analogue à un phare occulté : la lampe brille, mais le rayonnement ne pénètre pas l'eau.
                                        </p>
                                        <Shield className="w-12 h-12 text-slate-100 absolute bottom-6 right-6 transition-colors group-hover:text-indigo-50" />
                                    </div>
                                </div>
                            </div>

                            {/* Maintenance & Protocol */}
                            <div className="mb-24">
                                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-slate-900 italic">
                                    Protocole de maintenance : Au-delà du témoin lumineux
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-8 border-2 border-slate-50 border-dashed rounded-3xl text-center">
                                        <div className="text-blue-600 font-black text-4xl mb-6">9000h</div>
                                        <h5 className="font-bold mb-2">Cycle de vie germicide</h5>
                                        <p className="text-xs text-slate-500 italic">Le remplacement annuel de la lampe est impératif, même si la luminescence semble intacte.</p>
                                    </div>
                                    <div className="p-8 border-2 border-slate-50 border-dashed rounded-3xl text-center">
                                        <div className="text-blue-600 font-black text-4xl mb-6">NSF 55</div>
                                        <h5 className="font-bold mb-2">Conformité Normative</h5>
                                        <p className="text-xs text-slate-500 italic">Bricareau sélectionne exclusivement des systèmes certifiés répondant aux standards de dosage (mJ/cm²).</p>
                                    </div>
                                    <div className="p-8 border-2 border-slate-50 border-dashed rounded-3xl text-center">
                                        <div className="text-blue-600 font-black text-4xl mb-6">Quartz</div>
                                        <h5 className="font-bold mb-2">Maintenance Optique</h5>
                                        <p className="text-xs text-slate-500 italic">Lavage chimique annuel du fourreau de quartz pour garantir une transmittance UV maximale.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Conclusion & Direct CTA */}
                            <div className="mt-32 p-16 bg-[#0A1628] rounded-[3.5rem] text-white relative overflow-hidden">
                                <div className="relative z-10 text-center max-w-3xl mx-auto">
                                    <h2 className="text-4xl font-bold mb-8">Établir votre barrière de sécurité microbiologique</h2>
                                    <p className="text-xl font-light text-slate-300 mb-12">
                                        Ne déléguez pas la santé de votre foyer à l'incertitude environnementale. Faites appel à l'expertise de <strong>Bricareau Water Specialist</strong> pour auditer, concevoir et installer une solution de désinfection UV de grade industriel.
                                    </p>
                                    <Button size="lg" className="bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full px-12 h-16 shadow-2xl shadow-blue-500/20 text-lg font-bold tracking-tight transition-all hover:scale-105" asChild>
                                        <a href="#consultation">Mandater un Spécialiste Bricareau</a>
                                    </Button>
                                </div>
                                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]" />
                                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]" />
                            </div>

                            {/* Scientific references / Footer of the article */}
                            <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs gap-6">
                                <div>© 2025 Bricareau Water Specialist - Division Expertise & Santé</div>
                                <div className="flex gap-6 uppercase tracking-widest font-bold">
                                    <span>Puits Artésiens</span>
                                    <span>Santé Publique</span>
                                    <span>Hydrogéologie</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <ConsultationFormSection id="consultation" />
            </main>

            <Footer />
        </div>
    );
};

export default LampeUVBlog;
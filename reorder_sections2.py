import re
with open('src/pages/FontainesDeauModernes.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

target_flex = '                    <div className="w-full flex flex-col lg:flex-row items-center gap-12 select-none overflow-hidden pl-0">'
rep_flex = '                    <div className="w-full flex flex-col items-start gap-12 select-none overflow-hidden pl-0">'
content = content.replace(target_flex, rep_flex)

target_cta_block = """                        {/* Right Column: Stationary CTA Column - Aligned to standard container's right edge */}
                        <div className="w-full lg:w-[27%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left pr-6 lg:pr-[calc((100vw-1232px)/2)] pl-6 lg:pl-12 space-y-6">
                            <h3 className="text-xl md:text-2xl font-medium text-slate-800 leading-snug">
                                Besoin d'aide pour trouver le système qui vous convient ?
                            </h3>
                            <div>
                                <Button 
                                    variant="outline" 
                                    className="rounded-full border-slate-300 hover:border-slate-800 text-slate-800 hover:bg-slate-50 px-8 h-12 text-xs font-black uppercase tracking-widest transition-all"
                                    asChild
                                >
                                    <NavLink to="/contact-entreprises">
                                        Demander une consultation
                                    </NavLink>
                                </Button>
                            </div>
                        </div>"""

new_cta_block = """                        {/* Bottom Block: CTA */}
                        <div className="w-full flex flex-col justify-center items-center text-center px-6 space-y-6">
                            <h3 className="text-xl md:text-2xl font-medium text-slate-800 leading-snug">
                                Besoin d'aide pour trouver le système qui vous convient ?
                            </h3>
                            <div>
                                <Button 
                                    variant="outline" 
                                    className="rounded-full border-slate-300 hover:border-slate-800 text-slate-800 hover:bg-slate-50 px-8 h-12 text-xs font-black uppercase tracking-widest transition-all"
                                    asChild
                                >
                                    <NavLink to="/contact-entreprises">
                                        Demander une consultation
                                    </NavLink>
                                </Button>
                            </div>
                        </div>"""
content = content.replace(target_cta_block, new_cta_block)

old_section = """                {/* ========================================================================= */}
                {/* NOTRE SAVOIR-FAIRE - SENSORIEL & PRESTIGE GRID */}
                {/* ========================================================================= */}
                <section className="py-32 bg-[#FAF9F6] relative overflow-hidden border-y border-slate-100">
                    <div className="container mx-auto px-6 max-w-6xl">
                        
                        <div className="text-center space-y-4 mb-20">
                            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                NOTRE SAVOIR-FAIRE
                            </span>
                             <h2 className="mb-8 heading-pro-max text-center">
                                <span className="font-light italic text-[#18448F] block text-center">L'art de raffiner </span>
                                <span className="font-bold text-[#18448F] block text-center">l'eau au bureau.</span>
                            </h2> 
                            
                            
                            <p className="text-slate-500 font-light max-w-2xl mx-auto text-base">
                                Parce que chaque collaborateur mérite une eau d'une légèreté et d'une fraîcheur incomparables. Découvrez l'expérience gustative ultime.
                            </p>
                        </div>

                        {/* Prestige grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {faqItems.map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="bg-white rounded-[2rem] p-8 border border-amber-100/50 shadow-sm relative group hover:border-[#18448F]/20 transition-all duration-300"
                                >
                                    <div className="absolute top-0 left-8 right-8 h-1 bg-[#18448F] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    
                                    <div className="text-5xl font-black text-[#18448F]/5 mb-6">
                                        0{idx + 1}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-slate-500 font-light leading-relaxed text-sm">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>"""

new_section = """                {/* ========================================================================= */}
                {/* NOUVELLE SECTION - LES 3 NIVEAUX DE PURETE ABSOLUE */}
                {/* ========================================================================= */}
                <section className="py-32 bg-white relative overflow-hidden border-y border-slate-100">
                    {/* Abstract tech background elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[100px]" />
                        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-50/50 blur-[100px]" />
                    </div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="text-center space-y-4 mb-24">
                            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                TECHNOLOGIE DE FILTRATION
                            </span>
                            <h2 className="heading-pro-max text-center">
                                <span className="font-light italic text-[#18448F] block text-center">Les 3 Niveaux </span>
                                <span className="font-bold text-[#18448F] block text-center">de Pureté Absolue.</span>
                            </h2> 
                            <p className="text-slate-500 font-light max-w-2xl mx-auto text-base mt-6">
                                Notre système de purification ne se contente pas de filtrer. Il sublime chaque goutte à travers un processus technologique en trois étapes distinctes pour une sécurité et un goût inégalés.
                            </p>
                        </div>

                        {/* Interactive Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                            {[
                                {
                                    icon: <Droplets className="w-8 h-8 text-blue-500" />,
                                    title: "Charbon Actif Densifié",
                                    subtitle: "ÉTAPE 01",
                                    content: "Notre filtre à charbon actif de haute densité absorbe le chlore, retient les sédiments, neutralise les odeurs et améliore considérablement le goût de l'eau pour une expérience gustative d'exception à chaque tasse.",
                                    color: "from-blue-400/20 to-blue-100/5"
                                },
                                {
                                    icon: <Zap className="w-8 h-8 text-amber-500" />,
                                    title: "Stérilisation UV-C",
                                    subtitle: "ÉTAPE 02",
                                    content: "Un rayonnement ultraviolet de type C puissant détruit l'ADN des micro-organismes, bactéries et virus directement au point de distribution, garantissant une eau stérile et d'une sécurité hygiénique absolue.",
                                    color: "from-amber-400/20 to-amber-100/5"
                                },
                                {
                                    icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />,
                                    title: "Osmose Inverse",
                                    subtitle: "ÉTAPE 03",
                                    content: "Pour une pureté moléculaire absolue, la membrane d'osmose inverse élimine les métaux lourds, le calcaire, les nitrates, les résidus chimiques de pesticides et toutes les impuretés microscopiques en suspension.",
                                    color: "from-indigo-400/20 to-indigo-100/5"
                                }
                            ].map((step, idx) => (
                                <div 
                                    key={idx}
                                    className="group relative rounded-[2.5rem] bg-white border border-slate-100 p-10 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full"
                                >
                                    {/* Hover gradient background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                                    
                                    {/* Content */}
                                    <div className="relative z-10 flex-grow flex flex-col">
                                        <div className="flex justify-between items-start mb-12">
                                            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 group-hover:bg-white">
                                                {step.icon}
                                            </div>
                                            <span className="text-[10px] font-black tracking-[0.2em] text-slate-300 group-hover:text-slate-800 transition-colors duration-500">
                                                {step.subtitle}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-[#18448F] transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        
                                        <p className="text-slate-500 font-light leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                                            {step.content}
                                        </p>
                                    </div>

                                    {/* Progress line effect at bottom */}
                                    <div className="absolute bottom-0 left-0 h-1 bg-[#18448F] w-0 group-hover:w-full transition-all duration-700 ease-out" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>"""
content = content.replace(old_section, new_section)

section_6_start = content.find('{/* SECTION 6: MODERN SLIDER SHOWCASE')
new_section_start = content.find('{/* ========================================================================= */}\n                {/* NOUVELLE SECTION - LES 3 NIVEAUX DE PURETE ABSOLUE */}')
premium_cta_start = content.find('{/* 11. PREMIUM CTA SECTION */}')
testimonials_start = content.find('{/* SECTION 10: TESTIMONIALS SECTION */}')
footer_start = content.find('            </main>')

if -1 in (section_6_start, new_section_start, premium_cta_start, testimonials_start, footer_start):
    print("Error finding sections")
    print("section_6:", section_6_start)
    print("new_section:", new_section_start)
    print("cta:", premium_cta_start)
    print("testimonials:", testimonials_start)
    print("footer:", footer_start)
    exit(1)

before_6 = content[:section_6_start]
sec_6 = content[section_6_start:new_section_start]
new_sec = content[new_section_start:premium_cta_start]
cta = content[premium_cta_start:testimonials_start]
testimonials = content[testimonials_start:footer_start]
after_testimonials = content[footer_start:]

new_content = before_6 + new_sec + sec_6 + testimonials + cta + after_testimonials

with open('src/pages/FontainesDeauModernes.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("success")

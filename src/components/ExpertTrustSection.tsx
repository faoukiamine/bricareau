
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { ArrowRight } from "lucide-react";
import expertImg from "@/assets/water testing.jpeg";
interface ExpertTrustSectionProps {
    title?: string;
    highlight?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    image?: string;
    imageRight?: boolean;
}

const ExpertTrustSection = ({ 
    title = "Votre eau a besoin d'un expert d'eau, ", 
    highlight = "pas un doute. ",
    description = "Ne laissez pas l'incertitude couler de votre robinet. Chez Bricareau, nous transformons chaque analyse en une certitude scientifique pour la santé de votre foyer.",
    buttonText = "Réservez votre analyse d'eau",
    buttonLink = "/tests-eau#water-test",
    image = expertImg,
    imageRight = false
}: ExpertTrustSectionProps) => {
    return (
        <section className="bg-white relative overflow-hidden border-y border-slate-100">
            <div className={`flex flex-col items-stretch min-h-[500px] lg:min-h-[750px] ${imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                {/* Image Side - 50% width on Desktop */}
                <div className="w-full lg:w-1/2 relative group overflow-hidden h-[400px] md:h-[550px] lg:h-auto">
                    <img
                        src={image}
                        alt="Expert Bricareau lors d'une analyse d'eau rigoureuse"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Floating Stats Overlay */}
                    <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 max-w-[200px] z-20 animate-float">
                        <div className="text-3xl font-bold text-blue-600 mb-1">+25 ans</div>
                        <div className="text-sm font-semibold text-slate-900 leading-tight">d'expertise cumulée à votre service</div>
                    </div>
                    {/* Decorative floating dots */}
                    <div className="absolute top-10 left-10 grid grid-cols-3 gap-2 opacity-20 z-10">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-blue-600" />
                        ))}
                    </div>
                </div>

                {/* Content Side - Aligned with grid */}
                <div className="w-full lg:w-1/2 flex items-center bg-slate-50/10 justify-start">
                    <div className="w-full max-w-[700px] px-6 sm:px-12 lg:px-10 xl:px-12 py-20 lg:py-32">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 
                                    className="text-4xl md:text-5xl font-bold tracking-tight text-left mb-6"
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        fontSize: '48px',
                                        lineHeight: '52px'
                                    }}
                                >
                                    <span className="text-blue-600">{title}</span>
                                    <span className="text-[#8CC63F]">{highlight}</span>
                                </h2>
                                <p
                                    className="max-w-xl text-left lg:text-justify font-light text-slate-500 text-xl leading-relaxed"
                                >
                                    {description}
                                </p>
                            </div>

                            <div className="pt-6">
                                <ProMaxButton
                                    asChild
                                >
                                    <a href={buttonLink} className="flex items-center justify-center gap-3">
                                        {buttonText}
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                </ProMaxButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertTrustSection;

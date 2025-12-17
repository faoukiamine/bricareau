import { ArrowRight } from "lucide-react";

const GrabYourLook = () => {
    return (
        <section className="bg-[#2563EB] py-6">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-3 text-white">
                    <p className="text-lg md:text-xl font-semibold">
                        Découvrez une expérience d'eau qui vous ressemble
                    </p>
                    <a
                        href="#solutions"
                        className="flex items-center gap-2 font-medium hover:underline underline-offset-4 transition-all group"
                    >
                        <span>En savoir plus</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GrabYourLook;

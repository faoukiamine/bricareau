const ConsultationFormSection = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto flex flex-col">
                    <div className="w-full text-left">
                        <h2
                            className="text-slate-900 tracking-tighter mb-8 italic text-left"
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                        >
                            <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Planifiez une consultation</span>
                            <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">gratuite sur l'eau</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Sélectionnez un créneau horaire ci-dessous pour organiser une visite d'un de nos experts de l'eau.
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="bg-white rounded-3xl p-1 md:p-10 border border-gray-100 shadow-2xl h-[800px] md:h-[700px] overflow-hidden">
                            <div className="w-full h-full">
                                <iframe
                                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1naojusGS6U336xoGT8aor7WUvGcS2dEXEmgVqfSkoFAETmcNSAY34mLLEdh-L59EE0ZX7I8vb?gv=true"
                                    style={{ border: 0 }}
                                    width="100%"
                                    height="100%"
                                    title="Google Calendar Scheduling"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationFormSection;

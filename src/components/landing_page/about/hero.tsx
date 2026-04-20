export default function AboutHero() {
    return (
        <section className="bg-background py-5 lg:py-10">
            <div className="max-w-8xl mx-auto px-6 lg:px-12">

                {/* Top label */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-8">
                    About Kibalo
                </span>

                {/* Two-column layout: big heading left, text right */}
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">

                    {/* Heading */}
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-dark leading-tight tracking-tight">
                            Built for the{" "}
                            <span className="text-primary">entrepreneur</span>{" "}
                            in everyone.
                        </h1>
                    </div>

                    {/* Body text */}
                    <div className="flex flex-col gap-6 lg:pb-3">
                        <p className="text-dark/60 text-base lg:text-xm leading-relaxed">
                            Kibalo is a mobile application designed to give entrepreneurs
                            — at every stage — real financial clarity about their business.
                            Whether you have an idea you haven't acted on yet, or a business
                            you've been running for years, Kibalo helps you answer the one
                            question that matters most:
                        </p>
                        <p className="text-dark font-semibold text-xm lg:text-40 leading-snug tracking-tight border-l-4 border-primary pl-5">
                            "Is my business actually profitable?"
                        </p>
                        <p className="text-dark/60 text-base leading-relaxed">
                            By entering your costs and revenues, Kibalo runs the numbers for
                            you — instantly — and presents a clear, honest picture of where
                            your business stands. No spreadsheets. No accountants. No
                            guessing.
                        </p>

                        {/* Stat pills */}
                        <div className="flex flex-wrap gap-3 mt-2">
                            {[
                                { value: "2,400+", label: "Active Users" },
                                { value: "3 min", label: "Avg. Setup Time" },
                                { value: "15+", label: "Business Types" },
                            ].map((s) => (
                                <div
                                    key={s.label}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-dark/8 shadow-3xl"
                                >
                                    <span className="font-bold text-primary text-sm">{s.value}</span>
                                    <span className="text-dark/50 text-xs">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Full-width divider line */}
                <div className="mt-20 w-full h-px bg-dark/8" />
            </div>
        </section>
    );
}
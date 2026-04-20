"use client";

import Image from "next/image";

const subsections = [
    {
        label: "For Every Entrepreneur",
        heading: "Built for Any Business, Any Size",
        description:
            "Whether you run a small roadside kiosk, a growing retail shop, or a multi-product enterprise — Kibalo is designed to work for you. Simply enter what you spend and what you earn, and Kibalo tells you exactly where you stand financially.",
        bullets: [
            "Works for retail, services, agriculture & more",
            "No accounting knowledge required",
            "Supports both new and existing businesses",
        ],
        image: "/images/landingpage/kibalo2.jpg",
        imageAlt: "Built for any business",
        imageLeft: false,
        badgeClass: "bg-primary/10 text-primary",
        dotClass: "bg-primary",
        blobClass: "bg-secondary",
    },
    {
        label: "Before You Invest",
        heading: "Validate Your Idea Before You Start",
        description:
            "Don't risk your savings on guesswork. Kibalo lets you simulate your business idea — enter your expected costs and projected sales, and instantly see whether the venture is worth pursuing before you spend a single shilling.",
        bullets: [
            "Run profit simulations before launching",
            "Compare multiple business scenarios",
            "Make informed decisions with confidence",
        ],
        image: "/images/landingpage/kibalo3.png",
        imageAlt: "Validate your business idea",
        imageLeft: true,
        badgeClass: "bg-secondary text-dark",
        dotClass: "bg-dark",
        blobClass: "bg-primary/10",
    },
    {
        label: "AI-Powered Insights",
        heading: "Your AI Co-Pilot for Business Clarity",
        description:
            "Kibalo's built-in AI analyzes your numbers and gives you plain-language advice — helping you understand what's eating your profits, what's driving growth, and what to do next. It's like having a business advisor in your pocket.",
        bullets: [
            "Instant AI analysis of your profit & loss",
            "Actionable suggestions in simple language",
            "Tracks trends over time automatically",
        ],
        image: "/images/landingpage/kibalo4.jpg",
        imageAlt: "AI business insights",
        imageLeft: false,
        badgeClass: "bg-primary/10 text-primary",
        dotClass: "bg-primary",
        blobClass: "bg-secondary",
    },
];

const stats = [
    { value: "2,400+", label: "Entrepreneurs Using Kibalo" },
    { value: "15+", label: "Business Categories Supported" },
    { value: "98%", label: "Accuracy on Profit Calculations" },
    { value: "3 min", label: "Average Setup Time" },
];

export default function WhatWeOffer() {
    return (
        <section className="bg-white py-24 lg:py-32" id="features">
            <div className="max-w-8xl mx-auto px-6 lg:px-12">

                {/* ── Section Header ── */}
                <div className="text-center max-w-2xl mx-auto mb-20 lg:mb-28">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-4">
                        What Kibalo Does
                    </span>
                    <h2 className="text-40 lg:text-52 font-bold text-dark leading-tight tracking-tight">
                        Built for the problems{" "}
                        <br className="hidden sm:block" />
                        <span className="text-primary">real businesses</span> face
                    </h2>
                    <p className="mt-4 text-dark/55 text-base leading-relaxed">
                        From idea to execution, Kibalo gives entrepreneurs the financial
                        clarity they need at every stage of their journey.
                    </p>
                </div>

                {/* ── Alternating Subsections ── */}
                <div className="flex flex-col gap-24 lg:gap-32">
                    {subsections.map((item, index) => (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                        >
                            {/* Text — reorder on mobile always shows text first */}
                            <div className={`flex flex-col gap-5 ${item.imageLeft ? "lg:order-2" : ""}`}>
                                <h3 className="text-40 font-bold text-dark leading-tight tracking-tight">
                                    {item.heading}
                                </h3>

                                <p className="text-dark/60 text-lg leading-relaxed max-w-lg">
                                    {item.description}
                                </p>
                            </div>

                            {/* Image */}
                            <div className={`relative ${item.imageLeft ? "lg:order-1" : ""}`}>
                                <div className={`absolute inset-4 rounded-3xl opacity-70 -z-0 ${item.blobClass}`} />
                                <div className="relative z-10 rounded-3xl overflow-hidden shadow-3xl aspect-[4/3] bg-secondary">
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Stats Row ── */}
                <div className="mt-18 lg:mt-18 flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x-0">
                    {stats.map((stat, i) => (
                        <div key={i} className="relative flex flex-col items-center text-center gap-1.5 px-10 py-8">
                            {/* Dotted vertical divider (not after last item) */}
                            {i < stats.length - 1 && (
                                <span
                                    className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px"
                                    style={{
                                        backgroundImage: "repeating-linear-gradient(to bottom, var(--color-primary) 0px, var(--color-primary) 4px, transparent 4px, transparent 10px)",
                                    }}
                                />
                            )}
                            <span className="text-40 font-bold text-primary leading-none" style={{ fontFamily: "var(--font-sora)" }}>
                                {stat.value}
                            </span>
                            <span className="text-dark/50 text-sm leading-snug max-w-[120px]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
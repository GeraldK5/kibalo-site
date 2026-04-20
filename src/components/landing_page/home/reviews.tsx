"use client";

import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const reviews = [
    {
        quote:
            "Before Kibalo I was just guessing. I'd buy stock, sell it, and never really know if I was making money or just staying busy. Now I know exactly where every shilling goes.",
        name: "Aisha Nakato",
        role: "Retail Shop Owner, Kampala",
    },
    {
        quote:
            "I was about to invest my savings into a chicken farming business. Kibalo showed me the numbers didn't add up at that scale. It literally saved me from a bad decision.",
        name: "Brian Otieno",
        role: "Aspiring Entrepreneur, Nairobi",
    },
    {
        quote:
            "The AI suggestions are what got me. It doesn't just show you the numbers — it tells you what they mean and what to do about them. That's what I needed.",
        name: "Grace Tumusiime",
        role: "Salon Business Owner, Entebbe",
    },
    {
        quote:
            "Simple, clean, and actually useful. I've tried spreadsheets and other apps but they were too complicated. Kibalo just works.",
        name: "David Ssemakula",
        role: "Food Vendor, Jinja",
    },
    {
        quote:
            "I run three small businesses and Kibalo lets me track all of them separately. Finally I can see which one is actually making me money.",
        name: "Patience Achieng",
        role: "Multi-Business Owner, Gulu",
    },
    {
        quote:
            "My accountant told me I was profitable. Kibalo told me I wasn't when you factor in my time and transport. That conversation changed everything.",
        name: "Moses Kiggundu",
        role: "Hardware Store Owner, Kampala",
    },
];

export default function Reviews() {
    const plugin = React.useRef(
        Autoplay({ delay: 3500, stopOnInteraction: true })
    );

    return (
        <section className="bg-white py-12 lg:py-16" id="reviews">
            <div className="max-w-8xl mx-auto px-6 lg:px-12">

                {/* ── Header ── */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-4">
                            Testimonials
                        </span>
                        <h2 className="text-40 lg:text-52 font-bold text-dark leading-tight tracking-tight">
                            What everyone <br className="hidden sm:block" />
                            is saying.
                        </h2>
                    </div>
                    <p className="text-dark/50 text-sm leading-relaxed max-w-sm lg:pb-2">
                        Real entrepreneurs. Real businesses. Real results with Kibalo.
                    </p>
                </div>

                {/* ── Carousel ── */}
                <Carousel
                    plugins={[plugin.current]}
                    opts={{ align: "start", loop: true }}
                    className="w-full py-6 lg:py-10"
                >
                    <CarouselContent className="-ml-4">
                        {reviews.map((review, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                            >
                                {/* Custom card — no shadcn Card */}
                                <div className="h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-dark/8 shadow-3xl">

                                    {/* Quote area with left accent bar */}
                                    <div className="flex flex-1">
                                        {/* Left accent bar */}
                                        <div className="w-1 flex-shrink-0 bg-primary" />

                                        {/* Quote content */}
                                        <div className="flex flex-col gap-3 px-6 py-7 flex-1">
                                            <span className="text-40 font-bold text-primary leading-none select-none">
                                                &quot;
                                            </span>
                                            <p className="text-dark/65 text-sm leading-relaxed -mt-2">
                                                {review.quote}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Name strip */}
                                    <div className="px-7 py-4 border-t border-dark/6 bg-secondary/40 flex items-center gap-3">
                                        {/* Avatar circle with initials */}
                                        <div
                                            className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                                            style={{ backgroundColor: "var(--color-primary)" }}
                                        >
                                            {review.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-dark text-sm">
                                                {review.name}
                                            </p>
                                            <p className="text-dark/45 text-xs mt-0.5">
                                                {review.role}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex items-center gap-3 mt-10">
                        <CarouselPrevious className="static translate-y-0 w-10 h-10 rounded-full border border-dark/15 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-200" />
                        <CarouselNext className="static translate-y-0 w-10 h-10 rounded-full border border-dark/15 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-200" />
                    </div>
                </Carousel>

            </div>
        </section>
    );
}
"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const steps = [
  {
    number: "01",
    heading: "Create an Account",
    description:
      "Sign up in under a minute. All you need is your name and a phone number or email, no financial background required to get started.",
  },
  {
    number: "02",
    heading: "Add Your Business",
    description:
      "Create an enterprise profile for any business you want to evaluate. Planning a new one? Add it before you launch. Already running one? Add it and start tracking right away.",
  },
  {
    number: "03",
    heading: "Fill In Your Numbers & See Results",
    description:
      "Enter your input costs and expected or actual revenue. Kibalo instantly calculates your profitability and shows you a clear, easy-to-read analysis of your business health.",
  },
];

// Replace these YouTube video IDs with your actual ones
const videos = [
  { id: "dQw4w9WgXcQ", title: "How to Create Your Account" },
  { id: "dQw4w9WgXcQ", title: "Adding Your First Business" },
  { id: "dQw4w9WgXcQ", title: "Reading Your Profit Report" },
];

export default function HowItWorks() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("init", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("init", onSelect);
    };

  }, [api]);

  return (
    <section className="bg-background py-10 lg:py-24" id="how-it-works">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">

        {/* ── Top row: heading left, tutorials right ── */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-16 mb-5 lg:mb-5">

          {/* Left — header text */}
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/15 text-primary mb-4">
              How It Works
            </span>
            <h2 className="text-40 lg:text-52 font-bold text-dark leading-tight tracking-tight">
              Up and running <br />
              in three steps.
            </h2>
            <p className="mt-4 text-dark/50 text-base leading-relaxed">
              No complicated setup. The Kibalo app is built to be simple
              from the very first tap to your first profitability check and beyond.
            </p>
          </div>

          {/* Right — video carousel */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-semibold text-dark tracking-tight">
                Tutorials
              </h3>
              <p className="text-sm text-dark/50 mt-1">
                Watch short guides and get up to speed in minutes.
              </p>
            </div>

            <Carousel setApi={setApi} className="w-full max-w-sm">
              <CarouselContent>
                {videos.map((video, i) => (
                  <CarouselItem key={i}>
                    <div className="flex flex-col gap-2">
                      <div className="rounded-xl overflow-hidden aspect-video w-full shadow-md">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-xs font-medium text-dark/60 text-center">
                        {video.title}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-1">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className="transition-all duration-200"
                  style={{
                    width: i === current ? "1.5rem" : "0.5rem",
                    height: "0.5rem",
                    borderRadius: "9999px",
                    backgroundColor: i === current
                      ? "var(--color-primary)"
                      : "color-mix(in srgb, var(--color-primary) 25%, transparent)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Steps ── */}
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-[3rem_1fr] lg:grid-cols-[7rem_1fr] gap-6 lg:gap-0 py-10 lg:py-14 last:border-b-0"
              style={index < steps.length - 1 ? {
                borderBottom: "1px dashed color-mix(in srgb, var(--color-primary) 40%, transparent)",
              } : undefined}
            >
              {/* Number */}
              <div className="flex flex-col items-start pt-1 lg:pt-0">
                <span className="text-40 lg:text-9xl font-bold text-primary tabular-nums leading-none">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div
                className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-10 lg:pl-10 flex flex-col gap-3"
                style={{ borderLeft: "1px dashed var(--color-primary)" }}
              >
                <h3 className="text-xm lg:text-40 font-bold text-dark leading-snug tracking-tight self-start">
                  {step.heading}
                </h3>
                <p className="text-dark/55 text-sm lg:text-base leading-relaxed max-w-lg lg:self-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10"
          style={{ borderTop: "1px dashed var(--color-primary)" }}
        >
          <p className="text-dark/40 text-sm max-w-sm leading-relaxed">
            Most users complete their first profitability check within
            3 minutes of downloading the app.
          </p>
          <a
            href="#download"
            className="flex-shrink-0 px-7 py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5"
          >
            Get Started Free →
          </a>
        </div>

      </div>
    </section>
  );
}

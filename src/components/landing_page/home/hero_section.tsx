"use client";

import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="min-h-[calc(100vh-4rem)] bg-background flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">

                    {/* ── LEFT CONTENT ── */}
                    <div className="flex flex-col gap-6 animate-fade-in-up">

                        {/* Headline */}
                        <h1
                            className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-bold text-dark leading-[1.1] tracking-tight"
                            style={{ fontFamily: "var(--font-sora)" }}
                        >
                            Know If Your{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-primary">Business</span>
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/15 rounded-sm -z-0" />
                            </span>
                            <br />
                            Is Profitable.
                        </h1>

                        {/* Subtitle */}
                        <p
                            className="text-dark/60 text-base sm:text-lg leading-relaxed max-w-[480px]"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            Kibalo helps you discover if your business idea can make profits
                            before you invest and tracks real profitability as your business
                            grows, based on your actual inputs and outputs.
                        </p>

                        {/* Download buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2">
                            {/* Play Store */}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.kibalo.app"
                                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-dark hover:bg-primary transition-all duration-300 group shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.18 23.76c.37.21.8.22 1.18.04l12.2-6.86-2.61-2.61-10.77 9.43zM.5 1.4A1.5 1.5 0 0 0 0 2.5v19c0 .42.16.81.5 1.1l.1.08 10.64-10.64v-.25L.6 1.32.5 1.4zm16.55 11.65L13.74 9.7l2.61-2.61 3.8 2.14c1.08.61 1.08 1.6 0 2.21l-3.1 1.61zm-3.47 1.95L2.2 24l-.04-.04 11.28-11.28 2.64 2.64-.5.28z" />
                                </svg>
                                <div>
                                    <p className="text-white/60 text-[10px] leading-none" style={{ fontFamily: "var(--font-dm-sans)" }}>Download on</p>
                                    <p className="text-white font-semibold text-sm leading-tight" style={{ fontFamily: "var(--font-sora)" }}>Google Play</p>
                                </div>
                            </a>

                            {/* App Store */}
                            <a
                                href="#"
                                className="flex items-center gap-3 px-5 py-3 rounded-2xl border-2 border-dark/15 hover:border-primary bg-white hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            >
                                <svg className="w-6 h-6 text-dark" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04l-.07.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div>
                                    <p className="text-dark/50 text-[10px] leading-none" style={{ fontFamily: "var(--font-dm-sans)" }}>Download on</p>
                                    <p className="text-dark font-semibold text-sm leading-tight" style={{ fontFamily: "var(--font-sora)" }}>App Store</p>
                                </div>
                            </a>
                        </div>

                        {/* Social proof */}
                        <div className="flex items-center gap-3 mt-1">
                            <div className="flex -space-x-2">
                                {["var(--color-primary)", "var(--color-secondary)", "var(--color-sidebar)", "var(--color-brown)"].map((color, i) => (
                                    <div
                                        key={i}
                                        className="w-7 h-7 rounded-full border-2 border-background"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                            <p
                                className="text-dark/50 text-sm"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                                <span className="font-semibold text-dark">2,400+</span> entrepreneurs trust Kibalo
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT — PHONE MOCKUP ── */}
                    <div className="relative flex items-center justify-center lg:justify-end">

                        {/* Background circle */}
                        <div className="absolute right-0 lg:right-[-6rem] w-[500px] h-[500px] sm:w-[620px] sm:h-[620px] rounded-full bg-primary/10 -z-0" />
                        <div className="absolute right-4 lg:right-[-4rem] w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full bg-primary/15 -z-0" />

                        {/* Floating stat card — top left */}
                        <div className="absolute left-0 sm:left-4 top-6 sm:top-8 bg-white rounded-2xl shadow-lg px-4 py-3 z-20 animate-float">
                            <p className="text-[10px] text-dark/40 font-medium uppercase tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>Analyse your business idea</p>
                            <p className="text-primary font-bold text-lg" style={{ fontFamily: "var(--font-sora)" }}>Profit margin: +34.5%</p>
                        </div>

                        {/* Floating stat card — bottom left */}
                        <div className="absolute left-0 sm:left-2 bottom-10 bg-white rounded-2xl shadow-lg px-4 py-3 z-20 animate-float-delayed">
                            <p className="text-[10px] text-dark/40 font-medium uppercase tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>Profit per million</p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-dark font-bold text-lg" style={{ fontFamily: "var(--font-sora)" }}>10M</span>
                                <span className="text-xs text-green-500 font-medium bg-green-50 px-1.5 py-0.5 rounded-full">Profitable</span>
                            </div>
                        </div>

                        {/* Dotted swirly connector lines */}
                        <svg
                            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                            viewBox="0 0 600 560"
                            preserveAspectRatio="xMidYMid meet"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Line from phone to top-left stat card */}
                            <path
                                d="M290,200 C260,160 200,120 110,75"
                                stroke="var(--color-primary)"
                                strokeWidth="2"
                                strokeDasharray="4 7"
                                strokeLinecap="round"
                                opacity="0.45"
                                style={{ animation: "dash-flow 3s linear infinite" }}
                            />
                            {/* Dot at stat card end */}
                            <circle cx="110" cy="75" r="3" fill="var(--color-primary)" opacity="0.5" />

                            {/* Line from phone to bottom-left stat card */}
                            <path
                                d="M280,330 C240,390 170,430 100,480"
                                stroke="var(--color-primary)"
                                strokeWidth="2"
                                strokeDasharray="4 7"
                                strokeLinecap="round"
                                opacity="0.45"
                                style={{ animation: "dash-flow 3s linear infinite 1.5s" }}
                            />
                            {/* Dot at stat card end */}
                            <circle cx="100" cy="480" r="3" fill="var(--color-primary)" opacity="0.5" />
                        </svg>

                        {/* Phone image */}
                        <div className="relative z-10 drop-shadow-2xl animate-float">
                            <Image
                                src="/images/landingpage/kibalo.png"
                                alt="Kibalo App Screenshot"
                                width={250}
                                height={500}
                                className="rounded-[2.5rem] object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dash-flow {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -44; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite 1.5s;
        }
      `}</style>
        </section>
    );
}
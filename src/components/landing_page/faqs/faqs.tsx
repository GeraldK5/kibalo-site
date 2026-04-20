"use client";

import { useState } from "react";

const faqs = [
    {
        question: "What does the Kibalo app do?",
        answer:
            "Kibalo is a mobile application that helps entrepreneurs — both aspiring and existing — determine whether their business is profitable. You enter your business costs and revenue, and Kibalo instantly calculates your profitability, giving you a clear and honest picture of your business health. It also includes an AI assistant that explains your numbers in plain language and suggests what you can do to improve your margins.",
    },
    {
        question: "Is Kibalo free to use?",
        answer:
            "Yes, Kibalo is completely free to use. You can create an account, add your businesses, enter your costs and revenues, and view your full profitability analysis at no cost. We believe every entrepreneur deserves access to financial clarity regardless of their budget.",
    },
    {
        question: "How do I use Kibalo to determine profitability?",
        answer:
            "It's a straightforward process:\n1. Log in to your Kibalo account.\n2. Create a new enterprise — this is the business you want to analyse.\n3. Enter your basis of costing (for example, per unit, per batch, or per month).\n4. Input your costs, broken down by the categorised cost types Kibalo provides.\n5. Enter your expected or actual revenue.\n6. Kibalo instantly generates your profitability results — showing whether you're making a profit, breaking even, or running at a loss.",
    },
    {
        question: "Can I invite someone to cost a business with me?",
        answer:
            "Yes, you can. Kibalo allows you to invite collaborators to work on a business enterprise alongside you. This is useful if you're co-founding a business, working with a partner, or want a trusted advisor to review your numbers. Invited collaborators can view and contribute to the costing process together with you.",
    },
    {
        question: "Is the Kibalo AI free to use?",
        answer:
            "First-time users get 20 free AI messages to explore the assistant and see how it can help analyse their business. After your 20 free messages are used, you'll need to purchase additional AI credits to continue using the feature. The rest of the Kibalo app — profitability calculations, enterprise management, and all core features — remains free.",
    },
];

function FAQItem({
    faq,
    index,
    isOpen,
    onToggle,
}: {
    faq: (typeof faqs)[0];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border-b border-dark/8 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full flex items-start justify-between gap-6 py-7 text-left group"
            >
                {/* Number + Question */}
                <div className="flex items-start gap-5">
                    <span className="flex-shrink-0 text-xs font-bold tabular-nums text-primary/60 mt-1 w-5">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-dark font-semibold text-base lg:text-xm leading-snug group-hover:text-primary transition-colors duration-200">
                        {faq.question}
                    </span>
                </div>

                {/* Plus / Minus toggle */}
                <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full border border-dark/15 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-200">
                    <svg
                        className={`w-3.5 h-3.5 text-dark/50 group-hover:text-primary transition-all duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            d="M7 1v12M1 7h12"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
            </button>

            {/* Answer — animated expand */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="pl-10 pb-7">
                    {faq.answer.includes("\n") ? (
                        <div className="flex flex-col gap-2">
                            {faq.answer.split("\n").map((line, i) =>
                                line.trim() ? (
                                    <p
                                        key={i}
                                        className="text-dark/55 text-sm leading-relaxed"
                                    >
                                        {line}
                                    </p>
                                ) : null
                            )}
                        </div>
                    ) : (
                        <p className="text-dark/55 text-sm leading-relaxed max-w-2xl">
                            {faq.answer}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="bg-background min-h-[calc(100vh-4rem)] py-5 lg:py-10">
            <div className="max-w-8xl mx-auto px-6 lg:px-12">

                {/* ── Header ── */}
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-16 lg:mb-20">
                    <div className="flex flex-col gap-4">
                        <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary">
                            FAQ
                        </span>
                        <h1 className="text-40 lg:text-52 font-bold text-dark leading-tight tracking-tight">
                            Frequently <br />asked <br />questions.
                        </h1>
                        <p className="text-dark/50 text-sm leading-relaxed max-w-xs mt-1">
                            Can't find what you're looking for?{" "}
                            <a
                                href="/contact"
                                className="text-primary font-medium hover:underline"
                            >
                                Contact us
                            </a>{" "}
                            and we'll get back to you.
                        </p>
                    </div>

                    {/* ── Accordion ── */}
                    <div className="bg-white rounded-3xl shadow-3xl border border-dark/6 px-6 lg:px-10 divide-y-0">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                index={index}
                                isOpen={openIndex === index}
                                onToggle={() => toggle(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* ── Bottom CTA ── */}
                <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-dark/8">
                    <p className="text-dark/45 text-sm leading-relaxed max-w-sm">
                        Still have questions about Kibalo or need help getting started?
                    </p>
                    <a
                        href="/contact"
                        className="flex-shrink-0 px-7 py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 shadow-auth"
                    >
                        Get in Touch →
                    </a>
                </div>

            </div>
        </section>
    );
}
"use client";

import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // TODO: wire up to your backend / email service
        setSubmitted(true);
    };

    return (
        <section className="bg-background min-h-[calc(100vh-4rem)] flex items-center py-10 lg:py-18">
            <div className="max-w-8xl mx-auto px-6 lg:px-12 w-full">
                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">

                    {/* ── Left: copy ── */}
                    <div className="flex flex-col gap-6 lg:pt-4">
                        <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary">
                            Contact Us
                        </span>

                        <h1 className="text-40 lg:text-52 font-bold text-dark leading-tight tracking-tight">
                            We'd love to <br />
                            <span className="text-primary">hear from you.</span>
                        </h1>

                        <p className="text-dark/55 text-base leading-relaxed max-w-sm">
                            Have a question about Kibalo? Want to report an issue, share
                            feedback, or just say hello? Fill in the form and we'll get
                            back to you as soon as we can.
                        </p>

                        {/* Contact details */}
                        <div className="flex flex-col gap-4 mt-4 pt-8 border-t border-dark/8">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-xs uppercase tracking-widest text-dark/35 font-semibold">
                                    Email
                                </span>
                                <a
                                    href="mailto:hello@kibalo.app"
                                    className="text-dark font-medium text-sm hover:text-primary transition-colors duration-200"
                                >
                                    odokonyerogerald@gmail.com
                                </a>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-xs uppercase tracking-widest text-dark/35 font-semibold">
                                    Based in
                                </span>
                                <span className="text-dark font-medium text-sm">
                                    Kampala, Uganda
                                </span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-xs uppercase tracking-widest text-dark/35 font-semibold">
                                    Response time
                                </span>
                                <span className="text-dark font-medium text-sm">
                                    Within 24 hours on business days
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ── Right: form ── */}
                    <div className="bg-white rounded-3xl shadow-auth p-8 lg:p-12 border border-dark/6">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg
                                        className="w-7 h-7 text-primary"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M5 13l4 4L19 7"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-40 font-bold text-dark tracking-tight">
                                    Message sent!
                                </h2>
                                <p className="text-dark/50 text-sm leading-relaxed max-w-xs">
                                    Thanks for reaching out. We'll be in touch within 24 hours.
                                </p>
                                <button
                                    onClick={() => {
                                        setForm({ fullName: "", email: "", subject: "", message: "" });
                                        setSubmitted(false);
                                    }}
                                    className="mt-4 px-6 py-2.5 rounded-full border border-dark/15 text-dark text-sm font-medium hover:border-primary hover:text-primary transition-all duration-200"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-xm font-bold text-dark tracking-tight">
                                        Send us a message
                                    </h2>
                                    <p className="text-dark/45 text-sm">
                                        All fields are required.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-5">

                                    {/* Full Name */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-widest text-dark/50">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={form.fullName}
                                            onChange={handleChange}
                                            placeholder="e.g. Aisha Nakato"
                                            className="w-full px-4 py-3.5 rounded-xl border border-dark/12 bg-background text-dark text-sm placeholder:text-dark/25 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-widest text-dark/50">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="e.g. aisha@email.com"
                                            className="w-full px-4 py-3.5 rounded-xl border border-dark/12 bg-background text-dark text-sm placeholder:text-dark/25 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-widest text-dark/50">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            placeholder="What's this about?"
                                            className="w-full px-4 py-3.5 rounded-xl border border-dark/12 bg-background text-dark text-sm placeholder:text-dark/25 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-widest text-dark/50">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={5}
                                            placeholder="Tell us what's on your mind..."
                                            className="w-full px-4 py-3.5 rounded-xl border border-dark/12 bg-background text-dark text-sm placeholder:text-dark/25 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 resize-none"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        onClick={handleSubmit}
                                        disabled={
                                            !form.fullName ||
                                            !form.email ||
                                            !form.subject ||
                                            !form.message
                                        }
                                        className="w-full py-4 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 shadow-auth hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
                                    >
                                        Send Message →
                                    </button>

                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-dark text-secondary" style={{ fontFamily: "var(--font-dm-sans)" }}>

            {/* ── Main content ── */}
            <div className="max-w-8xl mx-auto px-6 lg:px-12 pt-16 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand column */}
                    <div className="lg:col-span-1 flex flex-col gap-5">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <Image src="/logos/logo.svg" alt="Kibalo logo" width={32} height={32} className="rounded-lg" />
                            <span className="text-secondary font-semibold text-xl tracking-tight" style={{ fontFamily: "var(--font-sora)" }}>
                                Kibalo App
                            </span>
                        </Link>

                        <p className="text-secondary/45 text-sm leading-relaxed max-w-[220px]">
                            Know if your business is profitable — before you invest and as you grow.
                        </p>

                        {/* Download buttons */}
                        <div className="flex flex-col gap-3 mt-1">
                            {/* Google Play */}
                            <a
                                href="#"
                                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/8 hover:bg-primary transition-all duration-300 w-fit border border-white/10 hover:border-primary"
                            >
                                <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.18 23.76c.37.21.8.22 1.18.04l12.2-6.86-2.61-2.61-10.77 9.43zM.5 1.4A1.5 1.5 0 0 0 0 2.5v19c0 .42.16.81.5 1.1l.1.08 10.64-10.64v-.25L.6 1.32.5 1.4zm16.55 11.65L13.74 9.7l2.61-2.61 3.8 2.14c1.08.61 1.08 1.6 0 2.21l-3.1 1.61zm-3.47 1.95L2.2 24l-.04-.04 11.28-11.28 2.64 2.64-.5.28z" />
                                </svg>
                                <div>
                                    <p className="text-secondary/50 text-[10px] leading-none">Download on</p>
                                    <p className="text-secondary font-semibold text-xs leading-tight" style={{ fontFamily: "var(--font-sora)" }}>Google Play</p>
                                </div>
                            </a>

                            {/* App Store */}
                            <a
                                href="#"
                                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/8 hover:bg-primary transition-all duration-300 w-fit border border-white/10 hover:border-primary"
                            >
                                <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04l-.07.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div>
                                    <p className="text-secondary/50 text-[10px] leading-none">Download on</p>
                                    <p className="text-secondary font-semibold text-xs leading-tight" style={{ fontFamily: "var(--font-sora)" }}>App Store</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Product links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-secondary/40 text-xs font-semibold uppercase tracking-widest">Product</h4>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: "Features", href: "/#features" },
                                { label: "How It Works", href: "/#how-it-works" },
                                { label: "Testimonials", href: "/#reviews" },
                                // { label: "Pricing", href: "/#pricing" },
                                // { label: "Changelog", href: "/#changelog" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-secondary/55 hover:text-primary text-sm transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-secondary/40 text-xs font-semibold uppercase tracking-widest">Company</h4>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: "About Us", href: "/about" },
                                // { label: "Blog", href: "#" },
                                { label: "Faq", href: "/faqs" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-secondary/55 hover:text-primary text-sm transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal + Social */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-secondary/40 text-xs font-semibold uppercase tracking-widest">Legal</h4>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: "Privacy Policy", href: "/privacy_policy" },
                                { label: "Terms of Service", href: "/tors" },
                                { label: "Cookie Policy", href: "/cookie-policy" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-secondary/55 hover:text-primary text-sm transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Social icons */}
                        <h4 className="text-secondary/40 text-xs font-semibold uppercase tracking-widest mt-4">Follow Us</h4>
                        <div className="flex items-center gap-3">
                            {/* X / Twitter */}
                            <a href="#" className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-secondary/50 hover:text-white hover:bg-primary hover:border-primary transition-all duration-200">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-secondary/50 hover:text-white hover:bg-primary hover:border-primary transition-all duration-200">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-secondary/50 hover:text-white hover:bg-primary hover:border-primary transition-all duration-200">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-secondary/50 hover:text-white hover:bg-primary hover:border-primary transition-all duration-200">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div className="border-t border-white/8">
                <div className="max-w-8xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-secondary/30 text-xs">
                        © {new Date().getFullYear()} Kibalo. All rights reserved.
                    </p>
                    <p className="text-secondary/30 text-xs">
                        A product of Science, Technology and Innovation - Secretariat
                    </p>
                </div>
            </div>

        </footer>
    );
}

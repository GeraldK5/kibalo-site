const sections = [
  {
    number: "1",
    title: "Introduction",
    content:
      "Kibalo is a mobile application designed to help individuals and entrepreneurs assess and track the profitability of their businesses. Our platform enables users to enter business costs and revenues, simulate profitability scenarios, and receive AI-powered insights to make better financial decisions.\n\nBy accessing or using Kibalo — whether through our mobile application or any other means — you acknowledge that you have read, understood, and agree to comply with these Terms in full. If you do not agree with any part of these Terms, you must not use our Services.",
  },
  {
    number: "2",
    title: "Eligibility",
    content:
      "To use Kibalo, you must be at least 18 years old and have the legal capacity to enter into binding agreements. By creating an account, you represent and warrant that you meet these eligibility requirements.\n\nYou are responsible for ensuring that all information provided during registration and throughout your use of the Services remains accurate and up-to-date. Failure to provide accurate information may result in suspension or termination of your account.",
  },
  {
    number: "3",
    title: "Account Registration and Security",
    content:
      "During registration, you must provide accurate, current, and complete information including your name, email address, and any other required details. You agree to update this information promptly if any changes occur.\n\nYou are solely responsible for securing your account credentials. You must not share your login details with any third party, and you must immediately notify us if you suspect any unauthorised access to your account.\n\nYou are responsible for all activities that occur under your account, whether authorised by you or not. If you become aware of any unauthorised use, contact us immediately at hello@kibalo.app.",
  },
  {
    number: "4",
    title: "Use of Services",
    content:
      "Kibalo is intended exclusively for legitimate business profitability assessment and financial tracking purposes. You agree to use the platform in a manner consistent with its intended purpose and in compliance with all applicable laws and regulations.\n\nYou expressly agree not to:\n• Use the platform for any fraudulent, illegal, or unauthorised activities\n• Enter false or misleading financial information\n• Attempt to gain unauthorised access to other users' accounts or data\n• Reverse engineer, decompile, or attempt to extract the source code of our software\n• Use our Services to develop competing products\n\nWe reserve the right to monitor use of the Services to ensure compliance with these Terms and may investigate suspected violations, including suspension or termination of accounts.",
  },
  {
    number: "5",
    title: "Free Use and AI Credits",
    content:
      "Kibalo's core features — including account creation, enterprise management, cost entry, and profitability analysis — are free to use.\n\nThe Kibalo AI assistant is available to all users with 20 complimentary messages upon first use. After your 20 free messages are exhausted, continued use of the AI feature requires the purchase of additional AI credits. Pricing for AI credits will be displayed clearly within the application.\n\nWe reserve the right to modify the structure of free and paid features at any time, with reasonable notice provided to existing users.",
  },
  {
    number: "6",
    title: "Data and Privacy",
    content:
      "Your financial data is stored securely using industry-standard encryption and security protocols. Your data is handled in accordance with our Privacy Policy, which outlines how we collect, use, store, and protect your information.\n\nWe will never share your data with third parties without your explicit consent, except where required by law, to protect our rights or safety, or with service providers operating under strict confidentiality agreements.\n\nYou retain full ownership of all data you input into Kibalo. You may request an export of your data at any time by contacting us at hello@kibalo.app.",
  },
  {
    number: "7",
    title: "Termination and Suspension",
    content:
      "We reserve the right to suspend or terminate your account immediately, without prior notice, if you violate these Terms, engage in fraudulent or suspicious activity, or otherwise misuse the platform.\n\nYou may terminate your account at any time by contacting us at hello@kibalo.app. Upon termination, your right to use the Services will immediately cease. We recommend exporting any data you wish to retain before terminating your account, as we are not obligated to retain your data after termination.",
  },
  {
    number: "8",
    title: "Limitation of Liability",
    content:
      "We provide our Services on an \"as is\" and \"as available\" basis, without warranties of any kind. While we strive to provide accurate and reliable profitability calculations, we do not guarantee that results are free from error or that they constitute professional financial advice.\n\nKibalo is a tool to assist with business decision-making and should not be your sole source of financial information. You are solely responsible for verifying the accuracy of your inputs and for all business decisions made based on information provided by the platform.\n\nTo the maximum extent permitted by applicable law, Kibalo, its developers, employees, and affiliates shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Services.",
  },
  {
    number: "9",
    title: "Changes to Terms",
    content:
      "We may update these Terms from time to time to reflect changes in our Services, legal requirements, or business practices. When we make significant changes, we will notify you through in-app messages or email notifications sent to your registered address.\n\nYour continued use of the Services after changes are posted constitutes your acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using the Services.",
  },
  {
    number: "10",
    title: "Contact Us",
    content:
      "If you have any questions, concerns, or require support regarding these Terms or our Services, please contact us:\n\nEmail: hello@kibalo.app\nBased in: Kampala, Uganda\n\nWe typically respond to inquiries within 24 hours on business days.",
  },
];

export default function TermsContent() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">

        {/* ── Page Header ── */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-5">
            Legal
          </span>
          <h1 className="text-40 lg:text-52 font-bold text-dark leading-tight tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-dark/50 text-sm leading-relaxed">
            Please read these Terms carefully before using Kibalo. By using our
            app, you agree to be bound by the terms described below.
          </p>
          <p className="mt-3 text-dark/35 text-xs uppercase tracking-widest font-semibold">
            Last updated: April 2025
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-20 items-start">

          {/* Sticky nav sidebar — desktop only */}
          <nav className="hidden lg:flex flex-col gap-1 sticky top-24">
            {sections.map((s) => (
              <a
                key={s.number}
                href={`#section-${s.number}`}
                className="group flex items-center gap-3 py-2 text-sm text-dark/40 hover:text-primary transition-colors duration-200"
              >
                <span className="w-5 text-xs tabular-nums font-bold text-primary/40 group-hover:text-primary transition-colors duration-200">
                  {s.number.padStart(2, "0")}
                </span>
                <span className="truncate">{s.title}</span>
              </a>
            ))}
          </nav>

          {/* Main content */}
          <div className="flex flex-col gap-0">
            {sections.map((section, index) => (
              <div
                key={section.number}
                id={`section-${section.number}`}
                className="py-10 lg:py-12 border-b border-dark/8 last:border-b-0 scroll-mt-24"
              >
                <div className="flex items-start gap-5 mb-4">
                  <span className="flex-shrink-0 text-xs font-bold tabular-nums text-primary/50 mt-1.5">
                    {section.number.padStart(2, "0")}
                  </span>
                  <h2 className="text-xm lg:text-40 font-bold text-dark leading-snug tracking-tight">
                    {section.title}
                  </h2>
                </div>

                <div className="pl-10 flex flex-col gap-3">
                  {section.content.split("\n").map((line, i) =>
                    line.trim() ? (
                      <p
                        key={i}
                        className={`text-sm leading-relaxed ${
                          line.startsWith("•")
                            ? "text-dark/60 pl-4 border-l-2 border-primary/20"
                            : "text-dark/55"
                        }`}
                      >
                        {line}
                      </p>
                    ) : null
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom strip ── */}
        <div className="mt-16 pt-10 border-t border-dark/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-dark/40 text-xs leading-relaxed max-w-sm">
            Questions about these terms? We're happy to clarify anything.
          </p>
          <a
            href="/contact"
            className="flex-shrink-0 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Us →
          </a>
        </div>

      </div>
    </section>
  );
}
const definitions = [
  {
    term: "Personal Data",
    meaning:
      "Information that identifies you as an individual, such as your name, email address, phone number, and any other information that can be used to identify or contact you directly or indirectly.",
  },
  {
    term: "Usage Data",
    meaning:
      "Data collected automatically when you access our Services, including your device information, operating system, app version, page visits, and other usage statistics that help us understand how you interact with Kibalo.",
  },
  {
    term: "Cookies",
    meaning:
      "Small data files stored on your device by your browser or mobile application to enhance your experience, remember your preferences, and improve the functionality of our Services.",
  },
];

const sections = [
  {
    number: "1",
    title: "Information We Collect",
    subsections: [
      {
        heading: "Information You Provide Directly",
        body: "When you create an account and use Kibalo, we may collect the following:\n• Your full name and contact information\n• Email address and phone number\n• Business names and enterprise details you create\n• Cost and revenue data you enter into the platform\n• Messages sent to our support team\n\nSome information is required to use core features of Kibalo. We will clearly indicate which fields are mandatory.",
      },
      {
        heading: "Usage Data",
        body: "When you access Kibalo on a mobile device, we automatically collect certain technical information to ensure optimal performance and security:\n• Device ID and unique device identifiers\n• Device model and operating system version\n• App version and installation information\n• Crash reports and error logs\n• Usage patterns and feature interaction data\n\nThis information helps us diagnose technical issues, improve performance, and enhance your overall experience.",
      },
      {
        heading: "Cookies",
        body: "We use cookies and similar tracking technologies to improve your experience, track performance metrics, and maintain your session. You can disable cookies via your device settings, though doing so may affect some functionality of the app.",
      },
    ],
  },
  {
    number: "2",
    title: "How We Use Your Data",
    subsections: [
      {
        heading: null,
        body: "We use the information we collect to:\n• Operate and maintain your account and the Services\n• Calculate and display your profitability results accurately\n• Improve app performance and develop new features\n• Send service notifications, security alerts, and important updates\n• Respond to support inquiries and resolve technical issues\n• Provide AI-powered business insights based on your inputs\n• Comply with applicable legal and regulatory obligations\n\nWe will only send you promotional communications with your explicit permission and in accordance with your preferences.",
      },
    ],
  },
  {
    number: "3",
    title: "Data Retention",
    subsections: [
      {
        heading: null,
        body: "We retain your personal data and financial information for as long as your account is active or as needed to provide our Services. After you stop using Kibalo, we may retain certain data for legitimate purposes including:\n• Compliance with legal and regulatory requirements\n• Dispute resolution and fraud prevention\n• Backup and disaster recovery\n\nWhen we no longer need your data for these purposes, it will be securely deleted or anonymised. You may request deletion of your data at any time by contacting us at hello@kibalo.app.",
      },
    ],
  },
  {
    number: "4",
    title: "Data Transfers",
    subsections: [
      {
        heading: null,
        body: "Your data may be processed and stored in countries where we or our third-party service providers operate, which may be outside your country of residence. These countries may have different data protection laws.\n\nWe ensure appropriate safeguards are in place to protect your data, including encryption and technical security measures. By using Kibalo, you consent to the transfer of your data under these protections.",
      },
    ],
  },
  {
    number: "5",
    title: "Security",
    subsections: [
      {
        heading: null,
        body: "We use industry-standard security protocols to protect your data from unauthorised access, disclosure, or destruction. Our measures include:\n• Encryption of data in transit using SSL/TLS protocols\n• Encryption of data at rest\n• Secure authentication and access controls\n• Regular security audits and vulnerability assessments\n\nHowever, no method of transmission over the internet is 100% secure. You are responsible for maintaining good security hygiene, including using strong passwords, keeping your device software updated, and not sharing your account credentials.",
      },
    ],
  },
  {
    number: "6",
    title: "Third-Party Services",
    subsections: [
      {
        heading: null,
        body: "We work with trusted third-party providers to operate and improve Kibalo, including cloud hosting, analytics, and customer support platforms. These providers may access your data only to perform services on our behalf and are bound by strict confidentiality agreements.\n\nThey are prohibited from using your data for any purpose other than providing services to us. We are not responsible for the privacy practices of external third-party services you may access through links within the app.",
      },
    ],
  },
  {
    number: "7",
    title: "Analytics",
    subsections: [
      {
        heading: null,
        body: "We use analytics tools to understand how users interact with Kibalo, track usage patterns, and identify areas for improvement. The data collected by these tools is typically aggregated and anonymised and cannot be used to identify individual users.\n\nYou can opt out of analytics tracking by adjusting your device or browser settings.",
      },
    ],
  },
  {
    number: "8",
    title: "Children's Privacy",
    subsections: [
      {
        heading: null,
        body: "Kibalo is not intended for users under 18 years old. We do not knowingly collect personal information from anyone under 18. If you believe a child has provided us with personal information without parental consent, please contact us immediately at hello@kibalo.app and we will take steps to delete that information promptly.",
      },
    ],
  },
  {
    number: "9",
    title: "Your Rights",
    subsections: [
      {
        heading: null,
        body: "Depending on your location, you may have the following rights regarding your personal data:\n• Right to Access — request a copy of the data we hold about you\n• Right to Rectification — request correction of inaccurate data\n• Right to Erasure — request deletion of your personal data\n• Right to Restrict Processing — limit how we use your data\n• Right to Data Portability — receive your data in a standard format\n• Right to Object — object to certain types of data processing\n\nTo exercise any of these rights, contact us at hello@kibalo.app. We will respond within 30 days and may need to verify your identity before processing your request.",
      },
    ],
  },
  {
    number: "10",
    title: "Policy Updates",
    subsections: [
      {
        heading: null,
        body: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When significant changes are made, we will notify you via email, in-app notification, or a prominent notice within the app.\n\nYour continued use of Kibalo after changes are posted constitutes your acceptance of the updated policy. We encourage you to review this page periodically.",
      },
    ],
  },
];

export default function PrivacyContent() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">

        {/* ── Page Header ── */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-5">
            Legal
          </span>
          <h1 className="text-40 lg:text-52 font-bold text-dark leading-tight tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-dark/50 text-sm leading-relaxed max-w-lg">
            This Privacy Policy explains how Kibalo collects, uses, and protects
            your information when you use our application and services. By using
            Kibalo, you agree to the practices described below.
          </p>
          <p className="mt-3 text-dark/35 text-xs uppercase tracking-widest font-semibold">
            Effective Date: April 2025
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-20 items-start">

          {/* Sticky sidebar nav */}
          <nav className="hidden lg:flex flex-col gap-1 sticky top-24">
            <p className="text-xs uppercase tracking-widest font-semibold text-dark/30 mb-2 pl-8">
              Contents
            </p>
            {sections.map((s) => (
              <a
                key={s.number}
                href={`#privacy-${s.number}`}
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

            {/* Definitions block */}
            <div className="mb-10 p-6 lg:p-8 rounded-2xl bg-secondary/40 border border-dark/6">
              <h2 className="text-xm font-bold text-dark tracking-tight mb-5">
                Definitions
              </h2>
              <div className="flex flex-col gap-5">
                {definitions.map((d) => (
                  <div key={d.term} className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-dark">
                      {d.term}
                    </span>
                    <p className="text-sm text-dark/55 leading-relaxed">
                      {d.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <div
                key={section.number}
                id={`privacy-${section.number}`}
                className="py-10 lg:py-12 border-b border-dark/8 last:border-b-0 scroll-mt-24"
              >
                {/* Section heading */}
                <div className="flex items-start gap-5 mb-5">
                  <span className="flex-shrink-0 text-xs font-bold tabular-nums text-primary/50 mt-1.5">
                    {section.number.padStart(2, "0")}
                  </span>
                  <h2 className="text-xm lg:text-40 font-bold text-dark leading-snug tracking-tight">
                    {section.title}
                  </h2>
                </div>

                {/* Subsections */}
                <div className="pl-10 flex flex-col gap-6">
                  {section.subsections.map((sub, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      {sub.heading && (
                        <h3 className="text-sm font-bold text-dark">
                          {sub.heading}
                        </h3>
                      )}
                      <div className="flex flex-col gap-2">
                        {sub.body.split("\n").map((line, j) =>
                          line.trim() ? (
                            <p
                              key={j}
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
            ))}
          </div>
        </div>

        {/* ── Bottom strip ── */}
        <div className="mt-16 pt-10 border-t border-dark/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-dark/40 text-xs leading-relaxed max-w-sm">
            Questions about how we handle your data? We&apos;re happy to help.
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
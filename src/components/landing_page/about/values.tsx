const values = [
  {
    title: "Clarity Over Complexity",
    description:
      "Finance doesn't have to be complicated. We strip away jargon and present your numbers in a way any entrepreneur can understand — regardless of education or background.",
    accent: "bg-primary text-white",
    textColor: "text-white/80",
    titleColor: "text-white",
    numberColor: "text-white/20",
  },
  {
    title: "Honesty in Every Number",
    description:
      "We don't round up or soften results. Kibalo gives you the truth about your business — because an uncomfortable truth today is better than a costly mistake tomorrow.",
    accent: "bg-secondary",
    textColor: "text-dark/60",
    titleColor: "text-dark",
    numberColor: "text-dark/10",
  },
  {
    title: "Built for the African Entrepreneur",
    description:
      "Our roots are here. Kibalo is designed for the realities of doing business in Uganda, Kenya, and across Africa — from mobile-first usage to local business categories that actually make sense.",
    accent: "bg-dark",
    textColor: "text-secondary/60",
    titleColor: "text-secondary",
    numberColor: "text-secondary/10",
  },
  {
    title: "Accessibility First",
    description:
      "Whether you have a degree or left school at 16, Kibalo works for you. We believe financial tools should be a right, not a privilege reserved for those who can afford a consultant.",
    accent: "bg-white border border-dark/8",
    textColor: "text-dark/60",
    titleColor: "text-dark",
    numberColor: "text-dark/8",
  },
  {
    title: "Continuous Improvement",
    description:
      "We listen to our users constantly. Every feature we ship is born from the real challenges faced by entrepreneurs using Kibalo daily. Your feedback shapes the product.",
    accent: "bg-secondary",
    textColor: "text-dark/60",
    titleColor: "text-dark",
    numberColor: "text-dark/10",
  },
  {
    title: "Trust Through Transparency",
    description:
      "Your data is yours. We're clear about what we collect, why we collect it, and how it's used. Building trust with our users isn't a policy — it's a principle.",
    accent: "bg-primary text-white",
    textColor: "text-white/80",
    titleColor: "text-white",
    numberColor: "text-white/20",
  },
];

export default function OurValues() {
  return (
    <section className="bg-background py-24 lg:py-32" id="values">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-xl mb-14 lg:mb-20">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-4">
            Our Values
          </span>
          <h2 className="text-40 lg:text-52 font-bold text-dark leading-tight tracking-tight">
            What we believe in.
          </h2>
          <p className="mt-4 text-dark/55 text-base leading-relaxed">
            These aren't poster quotes. They're the decisions we make every
            day when we build Kibalo.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-2xl overflow-hidden p-8 shadow-3xl min-h-[260px] ${value.accent}`}
            >
              {/* Large background number */}
              <span
                className={`absolute top-4 right-6 text-9xl font-bold leading-none select-none pointer-events-none ${value.numberColor}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="relative flex flex-col gap-4 z-10">
                <h3 className={`text-xm font-bold leading-snug tracking-tight ${value.titleColor}`}>
                  {value.title}
                </h3>
                <p className={`text-sm leading-relaxed ${value.textColor}`}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
const helps = [
  {
    number: "01",
    heading: "Know Before You Invest",
    body: "Kibalo lets you simulate any business idea before you spend a single coin. Enter your expected costs, projected sales volume, and pricing — and Kibalo shows you whether the venture can generate a profit at that scale. It's due diligence made simple.",
  },
  {
    number: "02",
    heading: "Track Real Profitability as You Grow",
    body: "Already running a business? Feed Kibalo your actual inputs — what you buy, what you sell, and what your overheads are — and get an honest profitability score. No more estimating. No more month-end surprises.",
  },
  {
    number: "03",
    heading: "Understand Your Numbers, in Plain Language",
    body: "Kibalo's built-in AI doesn't just crunch numbers — it explains them. It highlights what's hurting your margins, what's performing well, and what small changes could push you into profitability. Think of it as a financial advisor that never sleeps.",
  },
  {
    number: "04",
    heading: "Manage Multiple Businesses in One Place",
    body: "Running more than one hustle? Kibalo lets you create separate enterprise profiles for each business and track them independently. Compare performance, spot your strongest venture, and allocate your time and money where it counts.",
  },
];

export default function HowKibaloHelps() {
  return (
    <section className="bg-white py-24 lg:py-32" id="how-kibalo-helps">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 mb-16 lg:mb-20">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-4">
              What We Do
            </span>
            <h2 className="text-40 lg:text-52 font-bold text-dark leading-tight tracking-tight">
              How Kibalo <br />helps you.
            </h2>
          </div>
          <p className="text-dark/55 text-base leading-relaxed self-end max-w-xl">
            Kibalo was built around one belief — that every entrepreneur
            deserves access to the same financial clarity that big businesses
            take for granted. Here's how we deliver that.
          </p>
        </div>

        {/* Help items */}
        <div className="flex flex-col">
          {helps.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[3rem_1fr] lg:grid-cols-[6rem_1fr] gap-6 lg:gap-0 py-10 lg:py-12 border-b border-dark/8 last:border-b-0"
            >
              {/* Number */}
              <span className="text-40 lg:text-52 font-bold text-primary tabular-nums leading-none pt-1">
                {item.number}
              </span>

              {/* Content */}
              <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-10 lg:pl-10 lg:border-l lg:border-dark/8 flex flex-col gap-3">
                <h3 className="text-xm lg:text-40 font-bold text-dark leading-snug tracking-tight self-start">
                  {item.heading}
                </h3>
                <p className="text-dark/55 text-sm lg:text-base leading-relaxed lg:self-center max-w-xl">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
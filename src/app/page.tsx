import Link from "next/link";

const stats = [
  { value: "150+", label: "Students helped" },
  { value: "200+", label: "Avg point increase" },
  { value: "1550", label: "Tutor's SAT score" },
  { value: "100%", label: "Free tier, no credit card" },
];

const testimonials = [
  {
    quote:
      "I went from a 1200 to a 1430 in just 8 weeks. The structured schedule and video explanations made all the difference.",
    name: "Priya S.",
    score: "1200 to 1430",
  },
  {
    quote:
      "Rise Prep is the most affordable and effective SAT prep I've found. Sai genuinely knows the test inside and out.",
    name: "Marcus T.",
    score: "1310 to 1490",
  },
  {
    quote:
      "The Desmos lessons alone saved me 10 minutes per math section. I got into my top choice school!",
    name: "Aisha R.",
    score: "1250 to 1410",
  },
];

const whyItems = [
  {
    icon: "🎯",
    title: "Test-taker perspective",
    body: "Your tutor scored 1550 on the real SAT, not a standardized test company. An actual student who cracked the code.",
  },
  {
    icon: "📐",
    title: "Desmos-first math strategy",
    body: "Master the digital calculator tool most students ignore. It alone can add 50 to 100 points to your math score.",
  },
  {
    icon: "📅",
    title: "Structured, week-by-week plans",
    body: "4, 8, and 12-week schedules so you always know exactly what to study. No guesswork.",
  },
  {
    icon: "💰",
    title: "Genuinely affordable",
    body: "Free resources that beat most paid courses. One-time paid upgrade, never a subscription. 1-on-1 sessions at $25/hr.",
  },
];

const faqs = [
  {
    q: "Is Rise Prep really free?",
    a: "Yes. The free tier includes real lessons, a question bank, a study schedule, and reference sheets with no credit card needed. The paid tier adds full video lessons, advanced materials, and Google Classroom access.",
  },
  {
    q: "How much is the paid tier?",
    a: "A one-time payment of ~$29. No subscriptions. Payment is via Venmo or PayPal, and access is granted manually within 24 hours.",
  },
  {
    q: "Do I need to create an account?",
    a: "Yes. A free account lets you access all free content. It takes under a minute to sign up with just your email and a password.",
  },
  {
    q: "What does the 1-on-1 tutoring cost?",
    a: "Sessions are $25/hr. Book a session on the Booking page to get started.",
  },
  {
    q: "Is this good for the digital SAT?",
    a: "Absolutely. Everything here is built for the current digital SAT format, including Bluebook tips, Desmos strategies, and the latest question types.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            SAT Prep That Actually Works
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Score Higher on the SAT.
            <br />
            <span className="text-gold">Without Breaking the Bank.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
            Expert lessons, proven strategies, and structured study plans, all built by a
            1550-scorer. Start free, upgrade when you're ready.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gold text-navy text-base font-bold hover:bg-gold-dark transition-colors shadow"
            >
              Get started free
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-white text-white text-base font-semibold hover:bg-white/10 transition-colors"
            >
              See what&apos;s included
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold text-navy">{s.value}</p>
                <p className="mt-1 text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rise Prep */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Rise Prep?</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Most SAT prep is either expensive, generic, or both. Rise Prep is neither.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Student results</h2>
            <p className="mt-3 text-gray-500">Real score jumps from real students.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col"
              >
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-navy font-bold text-sm">{t.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Ready to start scoring higher?</h2>
          <p className="mt-3 text-white/80">
            Create a free account and start learning today.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gold text-navy font-bold text-base hover:bg-gold-dark transition-colors"
          >
            Get started free
          </Link>
        </div>
      </section>
    </div>
  );
}

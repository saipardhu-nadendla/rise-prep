import Link from "next/link";

const credentials = [
  { label: "SAT Score", value: "1550" },
  { label: "Math Section", value: "790 / 800" },
  { label: "English Section", value: "760 / 800" },
  { label: "Students Helped", value: "150+" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Rise Prep</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            Built by a student who cracked the SAT, not a test-prep corporation.
          </p>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {credentials.map((c) => (
              <div key={c.label}>
                <p className="text-3xl font-extrabold text-navy">{c.value}</p>
                <p className="text-sm text-gray-500 mt-1">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">My story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              My name is <strong>Sai Nadendla</strong>. When I was preparing for the SAT, I noticed something
              frustrating: most prep resources were either absurdly expensive, full of generic advice,
              or written by people who hadn&apos;t actually taken the test recently. I wanted something
              different. Practical, honest, and affordable.
            </p>
            <p>
              I studied strategically, scored a <strong>1550</strong> (790 Math, 760 English), and realized
              most of the strategies that worked for me weren&apos;t being taught anywhere. Especially
              the Desmos calculator. Most students ignore it entirely. I used it to solve problems in
              seconds that would have taken minutes by hand.
            </p>
            <p>
              Rise Prep is my attempt to share everything I learned: the study systems, the
              question patterns, the digital tools, and the mental approach. No fluff, no filler.
              Just what actually works on test day.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">The mission</h2>
          <div className="bg-navy-light border border-navy/20 rounded-2xl p-6 mb-6">
            <p className="text-navy font-semibold text-lg leading-relaxed">
              &ldquo;Every student deserves access to high-quality SAT prep, not just the ones
              who can afford $200/hr tutors.&rdquo;
            </p>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Rise Prep exists to lower the barrier. Free resources that actually help. A paid tier
              priced at a fraction of traditional tutoring. And 1-on-1 sessions at $25/hr so cost is
              never the reason someone can&apos;t improve their score.
            </p>
            <p>
              The SAT is a learnable test. With the right approach, anyone can improve significantly.
              Rise Prep gives you that approach.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14 text-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold">Start learning today</h2>
          <p className="mt-2 text-white/80">Free account. No credit card. Real results.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gold text-navy font-bold hover:bg-gold-dark transition-colors"
            >
              Create free account
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Book a session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

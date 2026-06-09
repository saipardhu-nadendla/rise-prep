import Link from "next/link";

const freeFeatures = [
  "Desmos intro lessons (3 lessons)",
  "Standard English Conventions lessons (4 lessons)",
  "Practice question bank (free edition)",
  "4-week SAT study schedule",
  "Bluebook app tips & tricks",
  "SAT roadmap (format, scoring, structure)",
  "SAT cheat sheet (formulas & grammar rules)",
];

const paidFeatures = [
  "Everything in the Free tier",
  "Full math lessons — all 5 modules",
  "Full English lessons — all 3 modules",
  "Video explanations for every lesson",
  "Complete question bank (all topics)",
  "8-week and 12-week study schedules",
  "Test day tips & checklist",
  "T25 college stats guide",
  "Error log template",
  "Score tracker spreadsheet",
  "Practice test review guide",
  "Google Classroom access",
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-3">
          <CheckIcon />
          <span className="text-sm text-gray-700">{f}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MembershipPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold">Simple, honest pricing</h1>
          <p className="mt-4 text-blue-100 text-lg">
            Start free. Upgrade once. Everything you need to hit your target score.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

            {/* Free tier */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="p-8 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Free</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-gray-900">$0</span>
                  <span className="text-gray-500 text-sm">forever</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">No credit card required.</p>
                <Link
                  href="/signup"
                  className="mt-6 block w-full text-center py-3 px-4 rounded-full border-2 border-blue-700 text-blue-700 font-bold text-sm hover:bg-blue-50 transition-colors"
                >
                  Get started free
                </Link>
              </div>
              <div className="p-8 flex-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  What&apos;s included
                </p>
                <FeatureList features={freeFeatures} />
              </div>
            </div>

            {/* Paid tier */}
            <div className="bg-white rounded-2xl border-2 border-blue-700 shadow-lg overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <span className="inline-block bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most popular
                </span>
              </div>
              <div className="p-8 border-b border-blue-100 bg-blue-700 text-white">
                <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider">Paid</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold">~$29</span>
                  <span className="text-blue-200 text-sm">one-time</span>
                </div>
                <p className="mt-2 text-sm text-blue-200">Pay via Venmo or PayPal. No subscriptions, ever.</p>
                <Link
                  href="/account"
                  className="mt-6 block w-full text-center py-3 px-4 rounded-full bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-colors shadow"
                >
                  Upgrade now
                </Link>
              </div>
              <div className="p-8 flex-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Everything in Free, plus
                </p>
                <FeatureList features={paidFeatures.slice(1)} />
              </div>
            </div>

          </div>

          {/* How to upgrade */}
          <div className="mt-10 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">How to upgrade</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Send ~$29 via{" "}
              <strong>Venmo (@riseprep)</strong> or{" "}
              <strong>PayPal (advait.aadhya@gmail.com)</strong>, then email{" "}
              <a href="mailto:advait.aadhya@gmail.com" className="text-blue-700 underline">
                advait.aadhya@gmail.com
              </a>{" "}
              with your Rise Prep account email. Access is granted within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            Questions?{" "}
            <a href="mailto:advait.aadhya@gmail.com" className="text-blue-700 font-medium hover:underline">
              Email us
            </a>{" "}
            or{" "}
            <Link href="/booking" className="text-blue-700 font-medium hover:underline">
              book a free intro session.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

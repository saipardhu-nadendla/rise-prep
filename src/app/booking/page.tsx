export default function BookingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold">Book a 1-on-1 Session</h1>
          <p className="mt-4 text-blue-100 text-lg max-w-xl mx-auto">
            Personalized SAT coaching tailored to exactly where you need help most.
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 text-center">
              <p className="text-3xl font-extrabold text-blue-700">$0–$25</p>
              <p className="text-sm text-gray-500 mt-1">per hour, sliding scale</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 text-center">
              <p className="text-3xl font-extrabold text-blue-700">60 min</p>
              <p className="text-sm text-gray-500 mt-1">standard session length</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 text-center">
              <p className="text-3xl font-extrabold text-blue-700">Online</p>
              <p className="text-sm text-gray-500 mt-1">via Zoom or Google Meet</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="font-extrabold text-gray-900 text-lg mb-3">What we cover</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Deep dive on your weakest sections and question types",
                "Desmos calculator strategies for the math section",
                "English passage approach and process of elimination",
                "Practice test review — breaking down every mistake",
                "Study plan creation and pacing strategy",
                "Score-specific game plans (targeting 1200, 1400, or 1500+)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="font-extrabold text-gray-900 text-lg mb-2">Sliding scale pricing</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sessions are priced at whatever you can afford between $0–$25/hr. No one is turned
              away for cost. If you can pay more, it helps support free access for students who
              can&apos;t. Pay after the session via Venmo or PayPal.
            </p>
          </div>

          {/* Calendly placeholder */}
          <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-2xl p-10 text-center">
            <p className="text-blue-700 font-bold text-lg mb-2">Booking widget coming soon</p>
            <p className="text-sm text-blue-600 mb-4">
              A Calendly embed will go here. In the meantime, email to schedule.
            </p>
            <a
              href="mailto:advait.aadhya@gmail.com?subject=Rise Prep - Book a Session"
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-700 text-white font-bold text-sm hover:bg-blue-800 transition-colors"
            >
              Email to book a session
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

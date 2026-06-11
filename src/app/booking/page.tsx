export default function BookingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold">Book a 1-on-1 Session</h1>
          <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
            Personalized SAT coaching tailored to exactly where you need help most.
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 text-center">
              <p className="text-3xl font-extrabold text-navy">$25</p>
              <p className="text-sm text-gray-500 mt-1">per hour</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 text-center">
              <p className="text-3xl font-extrabold text-navy">60 min</p>
              <p className="text-sm text-gray-500 mt-1">standard session length</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 text-center">
              <p className="text-3xl font-extrabold text-navy">Online</p>
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
                "Practice test review and breaking down every mistake",
                "Study plan creation and pacing strategy",
                "Score-specific game plans (targeting 1200, 1400, or 1500+)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-navy mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="font-extrabold text-gray-900 text-lg mb-2">Session rate</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sessions are $25/hr. Pay after the session via Venmo or PayPal.
            </p>
          </div>

          {/* Calendly placeholder */}
          <div className="bg-navy-light border-2 border-dashed border-navy/30 rounded-2xl p-10 text-center">
            <p className="text-navy font-bold text-lg mb-2">Booking widget coming soon</p>
            <p className="text-sm text-navy/70 mb-4">
              A Calendly embed will go here. In the meantime, email to schedule.
            </p>
            <a
              href="mailto:saipardhu.nadendla@gmail.com?subject=Rise Prep - Book a Session"
              className="inline-flex items-center px-6 py-3 rounded-full bg-navy text-white font-bold text-sm hover:bg-navy-dark transition-colors"
            >
              Email to book a session
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

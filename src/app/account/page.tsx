import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AccountPage() {
  const session = await auth();
  if (!session) redirect("/login?callbackUrl=/account");

  const { name, email, tier } = session.user;
  const isPaid = tier === "paid";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Your account</h1>

        {/* Profile card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Profile
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-500">Name</span>
              <span className="text-sm font-semibold text-gray-900">{name ?? "N/A"}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-500">Email</span>
              <span className="text-sm font-semibold text-gray-900">{email}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-500">Plan</span>
              <span
                className={`text-sm font-bold px-3 py-1 rounded-full ${
                  isPaid
                    ? "bg-navy-light text-navy"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {isPaid ? "Paid - Full Access" : "Free"}
              </span>
            </div>
          </div>
        </div>

        {/* Upgrade section */}
        {!isPaid && (
          <div className="bg-white rounded-2xl border border-navy/30 shadow-sm p-6 mb-6">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Upgrade to paid
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Unlock all lessons, video explanations, the complete question bank, advanced study
              schedules, and Google Classroom access for a one-time payment of <strong>~$29</strong>.
            </p>
            <div className="bg-navy-light rounded-xl p-4 text-sm text-gray-700 space-y-2">
              <p>
                <strong>Step 1:</strong> Send ~$29 via{" "}
                <strong>Venmo (@riseprep)</strong> or{" "}
                <strong>PayPal (saipardhu.nadendla@gmail.com)</strong>.
              </p>
              <p>
                <strong>Step 2:</strong> Email{" "}
                <a
                  href="mailto:saipardhu.nadendla@gmail.com"
                  className="text-navy underline"
                >
                  saipardhu.nadendla@gmail.com
                </a>{" "}
                with the subject line &ldquo;Rise Prep Upgrade&rdquo; and include the email address
                on this account (<strong>{email}</strong>).
              </p>
              <p>
                <strong>Step 3:</strong> Access is granted within 24 hours.
              </p>
            </div>
            <Link
              href="/membership"
              className="mt-4 inline-flex items-center text-sm text-navy font-semibold hover:underline"
            >
              See everything that&apos;s included
            </Link>
          </div>
        )}

        {/* Quick links */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Quick links
          </h2>
          <div className="space-y-2">
            <Link
              href="/lessons"
              className="flex items-center justify-between py-2 text-sm text-gray-700 hover:text-navy transition-colors"
            >
              <span>Go to Lessons</span>
              <span className="text-gray-400">→</span>
            </Link>
            <Link
              href="/resources"
              className="flex items-center justify-between py-2 text-sm text-gray-700 hover:text-navy transition-colors border-t border-gray-100"
            >
              <span>Go to Resources</span>
              <span className="text-gray-400">→</span>
            </Link>
            <Link
              href="/booking"
              className="flex items-center justify-between py-2 text-sm text-gray-700 hover:text-navy transition-colors border-t border-gray-100"
            >
              <span>Book a 1-on-1 session</span>
              <span className="text-gray-400">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

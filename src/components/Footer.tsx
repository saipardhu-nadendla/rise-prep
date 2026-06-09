import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-extrabold text-white tracking-tight">Rise Prep</span>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Expert SAT tutoring to help you reach your target score and get into your dream school.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/membership", label: "Membership" },
                { href: "/lessons", label: "Lessons" },
                { href: "/resources", label: "Resources" },
                { href: "/booking", label: "Book a Session" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">TikTok</a>
              </li>
              <li>
                <a href="mailto:advait.aadhya@gmail.com" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Rise Prep. All rights reserved.</p>
          <p>Built to help students score higher.</p>
        </div>
      </div>
    </footer>
  );
}

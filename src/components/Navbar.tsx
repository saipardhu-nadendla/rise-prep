"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  const publicLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/membership", label: "Membership" },
  ];

  const authLinks = [
    { href: "/lessons", label: "Lessons" },
    { href: "/resources", label: "Resources" },
  ];

  const visibleLinks = session ? [...publicLinks, ...authLinks] : publicLinks;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Rise Prep logo"
              width={40}
              height={40}
              className="rounded-sm"
              priority
            />
            <span className="text-lg font-extrabold tracking-tight text-navy hidden sm:inline">
              Rise Prep
            </span>
          </Link>

          {/* Center nav links — desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {visibleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side — desktop */}
          <div className="hidden md:flex items-center gap-3">
            {session ? (
              <>
                <Link
                  href="/account"
                  className="text-sm font-medium text-gray-700 hover:text-navy transition-colors"
                >
                  Account
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="text-sm font-medium text-gray-700 hover:text-navy transition-colors"
              >
                Login
              </Link>
            )}
            <Link
              href="/booking"
              className="ml-2 inline-flex items-center px-4 py-2 rounded-full bg-gold text-navy text-sm font-bold hover:bg-gold-dark transition-colors shadow-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 pb-4 space-y-1">
            {visibleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-2 py-2 text-sm font-medium text-gray-700 hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 space-y-2">
              {session ? (
                <>
                  <Link
                    href="/account"
                    onClick={() => setMobileOpen(false)}
                    className="block px-2 py-2 text-sm font-medium text-gray-700"
                  >
                    Account
                  </Link>
                  <button
                    onClick={() => { setMobileOpen(false); signOut({ callbackUrl: "/" }); }}
                    className="block px-2 py-2 text-sm text-gray-500"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 text-sm font-medium text-gray-700"
                >
                  Login
                </Link>
              )}
              <Link
                href="/booking"
                onClick={() => setMobileOpen(false)}
                className="block mx-2 px-4 py-2 rounded-full bg-gold text-navy text-sm font-bold text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

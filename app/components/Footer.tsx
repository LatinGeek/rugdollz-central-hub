'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[rgb(var(--bg-darker))] border-t border-[rgb(var(--border-dark))]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-sm font-semibold text-[rgb(var(--text-primary))] tracking-wider uppercase">
              About Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-base text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))]"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-base text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))]"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-base text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))]"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-[rgb(var(--text-primary))] tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/terms"
                  className="text-base text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))]"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-base text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="text-base text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))]"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[rgb(var(--text-primary))] tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="mailto:contact@rugdollz.com"
                  className="text-base text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))]"
                >
                  contact@rugdollz.com
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/rugdollz"
                  className="text-base text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-[rgb(var(--border-dark))] pt-8">
          <p className="text-base text-[rgb(var(--text-secondary))] text-center">
            &copy; {new Date().getFullYear()} RugDollz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 
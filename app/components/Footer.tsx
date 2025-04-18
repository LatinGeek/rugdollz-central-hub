'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[rgb(var(--bg-darker))] border-t border-[rgb(var(--border-dark))]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-[rgb(var(--text-primary))] tracking-wider uppercase">
              Connect With Us
            </h3>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://twitter.com/rugdollz"
                className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://discord.gg/rugdollz"
                className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0a12.64 12.64 0 00-.617-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057a19.9 19.9 0 005.993 3.03a.078.078 0 00.084-.028a14.09 14.09 0 001.226-1.994a.076.076 0 00-.041-.106a13.107 13.107 0 01-1.872-.892a.077.077 0 01-.008-.128a10.2 10.2 0 00.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127a12.299 12.299 0 01-1.873.892a.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028a19.839 19.839 0 006.002-3.03a.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="https://opensea.io/collection/rugdollz"
                className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">OpenSea</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L1.608 6v12L12 24l10.392-6V6zm-1.073 1.445h.001a1.8 1.8 0 002.138 0l7.534 4.35a1.794 1.794 0 000 .403l-7.535 4.35a1.8 1.8 0 00-2.137 0l-7.536-4.35a1.795 1.795 0 000-.402zM21.324 7.4c.109.08.226.147.349.201v8.7a1.8 1.8 0 00-1.069 1.852l-7.535 4.35a1.8 1.8 0 00-.349-.2l-.009-8.653a1.8 1.8 0 001.07-1.851zm-18.648.048l7.535 4.35a1.8 1.8 0 001.069 1.852v8.7c-.124.054-.24.122-.349.202l-7.535-4.35a1.8 1.8 0 00-1.069-1.852v-8.7c.124-.054.24-.122.35-.202z" />
                </svg>
              </a>
            </div>
          </div>

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
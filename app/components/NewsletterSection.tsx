'use client'

import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription logic
    setIsSubscribed(true)
    setEmail('')
  }

  return (
    <div className="bg-[rgb(var(--bg-dark))]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[rgb(var(--text-primary))] sm:text-4xl">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-6">
            Stay updated with the latest news, events, and exclusive offers from RugDollz&#39; Central Hub.
          </p>
          {isSubscribed ? (
            <div className="mt-8 text-green-500">
              Thanks for subscribing! We&apos;ll keep you updated.
            </div>
          ) : (
            <form className="mt-8 sm:flex justify-center" onSubmit={handleSubmit}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 border border-transparent text-base rounded-md text-[rgb(var(--text-primary))] bg-[rgb(var(--bg-light))] placeholder-[rgb(var(--text-tertiary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] focus:border-transparent sm:max-w-xs"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent-dark))] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(var(--accent))]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
} 
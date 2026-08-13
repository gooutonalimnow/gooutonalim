"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoPlayer } from "@/components/video-player"
import { useState } from "react"
import { Send } from "lucide-react"

const involvementOptions = [
  "Just a quick question",
  "Help with a specific decision",
  "Full trip planning",
  "Ongoing support",
]

const budgetOptions = [
  "Flexible — comfort matters most",
  "Moderate — smart splurges",
  "High — premium everything",
  "Prefer not to say",
]

export default function WorkWithMePage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    
    // Get selected priorities from the matters textarea
    const priorities = formData.get("matters")?.toString().split(",").map(s => s.trim()) || []
    
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      destination: formData.get("destination"),
      priorities,
      involvement: formData.get("involvement"),
      timeline: formData.get("timeline"),
      budget: formData.get("budget"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or email directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Work With Me
              </p>
              <h1 className="mt-3 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Start the conversation.
              </h1>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Tell me about your trip. I&apos;ll follow up personally to see if
                we&apos;re a good fit.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
              <VideoPlayer src="/videos/work-with-me-video.mp4" />
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="border-t border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-2xl px-6 py-16 md:py-20">
            {submitted ? (
              <div className="flex flex-col items-center gap-6 py-12 text-center">
                <div className="relative h-64 w-64">
                  <Image
                    src="/og-image.png"
                    alt="Go Out On A LIM"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Message received.
                </h2>
                <p className="max-w-sm text-muted-foreground">
                  Thank you for reaching out. I&apos;ll review your details and
                  get back to you within a few days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-foreground"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="First name"
                      className="border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-foreground"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Last name"
                      className="border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
                    />
                  </div>
                </div>

                {/* Destination */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="destination"
                    className="text-sm font-medium text-foreground"
                  >
                    Where are you going?
                  </label>
                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    required
                    placeholder="e.g., Japan, Italy, Southeast Asia"
                    className="border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>

                {/* What matters */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="matters"
                    className="text-sm font-medium text-foreground"
                  >
                    What matters most on this trip?
                  </label>
                  <textarea
                    id="matters"
                    name="matters"
                    required
                    rows={4}
                    placeholder="Food, comfort, a special celebration, seeing as much as possible..."
                    className="border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>

                {/* Involvement level */}
                <fieldset className="flex flex-col gap-3">
                  <legend className="text-sm font-medium text-foreground">
                    How involved do you want me to be?
                  </legend>
                  <div className="mt-1 flex flex-col gap-2">
                    {involvementOptions.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-3"
                      >
                        <input
                          type="radio"
                          name="involvement"
                          value={option}
                          required
                          className="h-4 w-4 accent-accent"
                        />
                        <span className="text-sm text-foreground">{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Timeline */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="timeline"
                    className="text-sm font-medium text-foreground"
                  >
                    Timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    placeholder="e.g., March 2026, Flexible, Within 6 months"
                    className="border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>

                {/* Budget */}
                <fieldset className="flex flex-col gap-3">
                  <legend className="text-sm font-medium text-foreground">
                    Budget comfort
                  </legend>
                  <div className="mt-1 flex flex-col gap-2">
                    {budgetOptions.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-3"
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={option}
                          required
                          className="h-4 w-4 accent-accent"
                        />
                        <span className="text-sm text-foreground">{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>

                {/* Phone (optional) */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Phone number{" "}
                    <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Start the conversation"}
                  <Send className="h-4 w-4" />
                </button>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 transition-colors hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 transition-colors hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </section>

        {/* How payment works */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-2xl px-6 py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              How payment works
            </p>
            <h2 className="mt-3 text-balance text-2xl font-medium leading-tight tracking-tight md:text-3xl">
              Simple, secure, and only after we&apos;re a fit.
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Reaching out is always free. After our first conversation, the
                right pricing depends on the kind of help you need:
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <span className="font-medium text-foreground">
                    Travel advisory
                  </span>{" "}
                  — billed hourly at{" "}
                  <span className="font-medium text-foreground">
                    $150 USD per hour
                  </span>
                  , ideal for a single decision or a focused second opinion.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Concierge planning &amp; ongoing concierge
                  </span>{" "}
                  — scoped as a flat project fee or a custom retainer, since
                  these involve deeper, continuous work. We&apos;ll agree on the
                  pricing together before anything begins.
                </li>
              </ul>
              <p>
                Once we agree on the work, you&apos;ll receive a secure invoice
                by email with the hours itemized. Just click the link to pay by
                card — payment is processed by{" "}
                <span className="font-medium text-foreground">Stripe</span>, so
                your card details are handled entirely on their secure page and
                never touch this site.
              </p>
              <p className="text-sm">
                For larger engagements, I may ask for a prepaid block of hours
                or a deposit before starting. See our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  Terms of Service
                </Link>{" "}
                for details.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

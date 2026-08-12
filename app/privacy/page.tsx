import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Go Out On A LIM",
  description:
    "How Go Out On A LIM collects, uses, and protects the personal information you share through our travel inquiry form and services.",
}

const lastUpdated = "February 12, 2026"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Legal
          </p>
          <h1 className="mt-3 font-serif text-4xl text-foreground text-balance md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="flex flex-col gap-10 leading-relaxed text-foreground/80">
          <section className="flex flex-col gap-3">
            <p>
              Go Out On A LIM (&quot;we,&quot; &quot;us,&quot; or &quot;I&quot;)
              respects your privacy. This policy explains what information we
              collect when you visit our website or submit a travel inquiry, how
              we use it, and the choices you have. By using this website you
              agree to the practices described below.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              Information we collect
            </h2>
            <p>
              We only collect the information you choose to give us. When you
              complete the inquiry form, this includes your first and last name,
              email address, and, if you provide it, your phone number, along
              with the trip details you share such as destination, priorities,
              desired level of involvement, timeline, and budget comfort.
            </p>
            <p>
              As you work with us, we may also retain notes and correspondence
              related to your travel planning so we can provide better, more
              personalized recommendations.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              How we use your information
            </h2>
            <p>We use the information you provide to:</p>
            <ul className="flex flex-col gap-2 pl-5">
              <li className="list-disc">
                Respond to your inquiry and communicate with you about your
                trip.
              </li>
              <li className="list-disc">
                Provide travel consultation, research, recommendations, and
                planning services.
              </li>
              <li className="list-disc">
                Prepare quotes and invoices for hourly or project-based work.
              </li>
              <li className="list-disc">
                Improve our services and the content we share.
              </li>
            </ul>
            <p>
              We do not sell your personal information, and we do not use it for
              advertising.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              How your information is shared
            </h2>
            <p>
              We keep your information confidential and share it only when
              necessary to operate. For example, inquiry submissions are
              delivered to us by email through our email provider (Resend), and
              we may use trusted service providers to host the website and
              manage communications. These providers may only use your
              information to perform services on our behalf.
            </p>
            <p>
              Because we do not act as a travel agency and do not make bookings
              or collect payment for hotels or airfare on your behalf, we do not
              pass your payment details to airlines, hotels, or booking
              platforms.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              Data retention
            </h2>
            <p>
              We keep your information only as long as needed to respond to your
              inquiry, provide our services, and meet legal or record-keeping
              obligations. You may ask us to delete your information at any time
              and we will do so where we are not required to keep it.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Your choices</h2>
            <p>
              You can request a copy of the personal information we hold about
              you, ask us to correct it, or ask us to delete it. To make a
              request, email us using the address below and we will respond
              within a reasonable time.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              Cookies and analytics
            </h2>
            <p>
              This website may use basic cookies or analytics to understand how
              visitors use the site so we can improve it. You can control
              cookies through your browser settings. Disabling them will not
              prevent you from submitting an inquiry.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              Changes to this policy
            </h2>
            <p>
              We may update this policy from time to time. When we do, we will
              revise the &quot;Last updated&quot; date above. Significant changes
              will be reflected on this page.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Contact</h2>
            <p>
              If you have questions about this policy or your information, reach
              out any time at{" "}
              <a
                href="mailto:gooutonalimnow@gmail.com"
                className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
              >
                gooutonalimnow@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="rounded-lg border border-border/60 bg-secondary/40 p-6">
            <p className="text-sm text-muted-foreground">
              This policy is provided for general informational purposes and is
              not legal advice. As the business grows, we recommend having it
              reviewed by a qualified attorney.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}

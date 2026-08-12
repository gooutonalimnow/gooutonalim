import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Go Out On A LIM",
  description:
    "The terms that govern the travel advisory, planning, and concierge services provided by Go Out On A LIM.",
}

const lastUpdated = "February 12, 2026"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Legal
          </p>
          <h1 className="mt-3 font-serif text-4xl text-foreground text-balance md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="flex flex-col gap-10 leading-relaxed text-foreground/80">
          <section className="flex flex-col gap-3">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the
              Go Out On A LIM website and the travel services we provide. By
              using this website or engaging our services, you agree to these
              Terms.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              What we do
            </h2>
            <p>
              Go Out On A LIM provides travel advisory and concierge services,
              which may include travel consultation; destination, hotel, and
              villa research and recommendations; itinerary planning; flight and
              cabin recommendations; and ongoing travel concierge support. Our
              role is to advise, research, and plan.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              What we do not do
            </h2>
            <p>
              We are not a travel agency. We do not sell travel, act as a seller
              of travel, or serve as your agent with airlines, hotels, or other
              suppliers. We do not collect or hold client funds for hotels,
              airfare, or other travel costs, and we do not make bookings or
              reservations on your behalf.
            </p>
            <p>
              You are responsible for making and paying for your own bookings
              directly with the airline, hotel, villa, or other provider, and
              for reviewing and accepting their terms, prices, and cancellation
              policies before you book.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Fees</h2>
            <p>
              We charge for our services on an hourly or per-project basis,
              agreed with you in advance. Fees cover our time and expertise
              only; they do not include the cost of any travel, accommodation,
              or other third-party services you choose to book. Payment terms
              will be confirmed in writing before work begins.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              Recommendations and third parties
            </h2>
            <p>
              Our recommendations are based on research, experience, and the
              information you share with us. Prices, availability, and details
              for flights, hotels, villas, and other services are set by third
              parties and can change at any time. We do not control and are not
              responsible for the products, services, acts, or omissions of any
              airline, hotel, villa owner, or other provider you choose to book.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              Travel documents and insurance
            </h2>
            <p>
              You are responsible for ensuring you have valid passports, visas,
              vaccinations, and any other documents required for your trip. We
              strongly recommend purchasing appropriate travel insurance. We are
              not responsible for losses arising from missing documentation or
              lack of insurance.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              Limitation of liability
            </h2>
            <p>
              Our services are provided on an advisory basis. To the fullest
              extent permitted by law, Go Out On A LIM is not liable for any
              indirect, incidental, or consequential losses, or for any losses
              arising from third-party providers, travel disruptions, or your
              decisions to book. Our total liability for any claim relating to
              our services will not exceed the fees you paid us for the specific
              work giving rise to the claim.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              Intellectual property
            </h2>
            <p>
              The content on this website, including essays, photography, and
              itineraries we prepare, belongs to Go Out On A LIM unless
              otherwise noted. Please do not reproduce or redistribute it
              without permission.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">
              Changes to these Terms
            </h2>
            <p>
              We may update these Terms from time to time. When we do, we will
              revise the &quot;Last updated&quot; date above. Continued use of
              the website or our services means you accept the updated Terms.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Contact</h2>
            <p>
              Questions about these Terms? Email us any time at{" "}
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
              These Terms are provided for general informational purposes and
              are not legal advice. As the business grows, we recommend having
              them reviewed by a qualified attorney.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}

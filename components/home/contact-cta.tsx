import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ContactCta() {
  return (
    <section className="border-t border-border/60 bg-primary/[0.02]">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Let&apos;s Connect
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Ready to plan your next journey?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Whether you&apos;re chasing a bucket-list destination, optimizing your
          points strategy, or simply want a second opinion on your itinerary —
          I&apos;d love to hear from you.
        </p>
        <Link
          href="/work-with-me"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          Get in Touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

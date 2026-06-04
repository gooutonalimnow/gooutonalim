import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        {/* Left — Copy */}
        <div className="flex flex-col gap-6">
          <h1 className="text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Travel, Beyond The Algorithm.
          </h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            130 countries. 2.8 million miles. Thoughtful journeys built on
            experience — not algorithms.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/work-with-me"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              Work with me
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-foreground/40"
            >
              How I travel
            </Link>
          </div>
        </div>

        {/* Right — Video */}
        <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
          <video
            src="/videos/edge-of-world.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

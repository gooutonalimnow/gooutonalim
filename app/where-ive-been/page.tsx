import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WorldMap } from "@/components/world-map"
import {
  countriesVisited,
  getTotalCountries,
} from "@/data/countries-visited"

export const metadata: Metadata = {
  title: "Where I've Been | Go Out On A LIM",
  description:
    "Explore the 126+ countries I've visited across every continent. Real experience, real perspective.",
}

export default function WhereIveBeenPage() {
  const totalCountries = getTotalCountries()
  const regions = Object.entries(countriesVisited)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Where I&apos;ve Been
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            {totalCountries} countries and counting.
          </h1>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
            Every destination on this map represents real experience — not
            research, not hearsay. This is the foundation of the advice I give.
          </p>
        </section>

        {/* World Map */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <WorldMap />
        </section>

        {/* Country List by Region */}
        <section className="border-t border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              By Region
            </h2>
            <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {regions.map(([region, countries]) => (
                <div key={region}>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-accent">
                    {region}{" "}
                    <span className="text-muted-foreground">
                      ({countries.length})
                    </span>
                  </h3>
                  <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                    {countries.map((country) => (
                      <li key={country}>{country}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

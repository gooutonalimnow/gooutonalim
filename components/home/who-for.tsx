import { Check } from "lucide-react"

const audiences = [
  "Premium leisure travelers",
  "Frequent flyers",
  "Food-driven travelers",
  'Milestone trips & "once in a lifetime" journeys',
]

export function WhoFor() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Who this is for
          </p>
          <h2 className="mt-3 text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            Comfort, food, efficiency, and perspective.
          </h2>
        </div>
        <div>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            This is for travelers who value comfort, food, efficiency, and
            perspective — and don&apos;t want to waste time optimizing the wrong
            things.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {audiences.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

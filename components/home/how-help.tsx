import Link from "next/link"
import { ArrowRight, Brain, Compass, RefreshCw, CreditCard } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Advisory",
    description: "A second brain before you book.",
  },
  {
    icon: Compass,
    title: "Concierge Planning",
    description: "End-to-end planning for trips that matter.",
  },
  {
    icon: CreditCard,
    title: "Points & Miles Strategy",
    description: "Fly premium for less with strategic redemptions.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Travel Support",
    description: "For people who travel often and want decisions simplified.",
  },
]

export function HowHelp() {
  return (
    <section className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          How I help
        </p>
        <h2 className="mt-3 text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          Four ways to work together.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 border border-border/60 bg-background p-8 transition-shadow hover:shadow-md"
            >
              <service.icon className="h-6 w-6 text-accent" />
              <h3 className="font-serif text-xl font-medium text-foreground">
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-accent transition-opacity hover:opacity-80"
          >
            See services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

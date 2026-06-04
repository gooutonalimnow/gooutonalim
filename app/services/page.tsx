import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  ArrowRight,
  MessageSquare,
  Map,
  CalendarClock,
  Plane,
  Building2,
  UtensilsCrossed,
  Heart,
  BarChart3,
  Route,
  CreditCard,
  Sparkles,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Go Out On A LIM",
  description:
    "Travel advisory, concierge planning, and ongoing support. I help people make better travel decisions.",
}

const advisoryItems = [
  { icon: Route, label: "Route & airline strategy" },
  { icon: Plane, label: "Cabin tradeoffs" },
  { icon: Building2, label: "Hotel neighborhood guidance" },
  { icon: BarChart3, label: '"Is this worth it?" checks' },
]

const conciergeItems = [
  { icon: Map, label: "End-to-end itineraries" },
  { icon: Plane, label: "Premium cabin optimization" },
  { icon: UtensilsCrossed, label: "Food-first travel design" },
  { icon: Heart, label: "Special occasions" },
]

const ongoingItems = [
  { icon: CalendarClock, label: "Annual retainers" },
  { icon: Plane, label: "Frequent traveler support" },
  { icon: MessageSquare, label: "Quiet, high-touch service" },
]

const pointsItems = [
  { icon: CreditCard, label: "Credit card strategy" },
  { icon: Sparkles, label: "Sweet-spot redemptions" },
  { icon: Plane, label: "Award availability navigation" },
  { icon: TrendingUp, label: "Maximize point value" },
]

const serviceBlocks = [
  {
    tag: "Light",
    title: "Travel Advisory",
    subtitle: "Async & Light",
    description:
      "A second brain before you book. Get strategic guidance on routes, cabins, hotels, and whether that upgrade is worth it.",
    items: advisoryItems,
  },
  {
    tag: "Full",
    title: "Concierge Planning",
    subtitle: "End-to-End",
    description:
      "Comprehensive trip design for the journeys that matter most. From premium cabins to food-first itineraries, I plan every detail.",
    items: conciergeItems,
  },
  {
    tag: "Ongoing",
    title: "Ongoing Concierge",
    subtitle: "Future",
    description:
      "For those who travel often and want a trusted advisor on call. Annual retainers with quiet, high-touch support.",
    items: ongoingItems,
  },
  {
    tag: "Strategy",
    title: "Points & Miles Strategy",
    subtitle: "Maximize Value",
    description:
      "Fly business or first class for a fraction of the cost. I help you maximize your credit card points and airline miles with sweet-spot redemptions and strategic award bookings.",
    items: pointsItems,
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero with Video */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Services
              </p>
              <h1 className="mt-3 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl">
                I don&apos;t sell packages. I help people make better travel
                decisions.
              </h1>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-sm bg-primary/5">
                <iframe
                  src="https://www.youtube.com/embed/t3y1DYcIWkg"
                  title="Services introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Blocks */}
        <section className="border-t border-border/60">
          {serviceBlocks.map((block, i) => (
            <div
              key={block.title}
              className={`border-b border-border/60 ${
                i % 2 === 1 ? "bg-secondary/40" : ""
              }`}
            >
              <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:items-start md:py-20">
                <div>
                  <span className="inline-block border border-accent/30 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                    {block.tag}
                  </span>
                  <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                    {block.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {block.subtitle}
                  </p>
                  <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                    {block.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-4">
                  {block.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <h2 className="text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Ready to travel smarter?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            No pricing pages. No packages. Just a conversation about what
            matters to you.
          </p>
          <Link
            href="/work-with-me"
            className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start the conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

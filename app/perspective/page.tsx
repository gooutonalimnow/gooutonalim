import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { YouTubeShowcase } from "@/components/youtube-showcase"

export const metadata: Metadata = {
  title: "Perspective | Go Out On A LIM",
  description:
    "Not a blog. A curated lens on travel, food, and the art of moving through the world with intention.",
}

const journeys = [
  {
    title: "Quick Journey Highlight",
    youtubeId: "z722ivwvNMA",
  },
  {
    title: "Travel Moment",
    youtubeId: "KhVjTXMyHiU",
  },
  {
    title: "On the Road",
    youtubeId: "r9gphcGPoOo",
  },
  {
    title: "A Taste of Adventure",
    youtubeId: "-gfluEmj14U",
  },
  {
    title: "Exploring New Places",
    youtubeId: "eYwBSXHFIG8",
  },
  {
    title: "Local Discovery",
    youtubeId: "LGHFwkIuY68",
  },
  {
    title: "Hidden Gem",
    youtubeId: "GTn7ruHH674",
  },
  {
    title: "Food Find",
    youtubeId: "nBUvCOsQ8_w",
  },
  {
    title: "Quick Escape",
    youtubeId: "pGz8yzj94A0",
  },
  {
    title: "Journey Snapshot",
    youtubeId: "Te5KPog5kkk",
  },
  {
    title: "Travel Short",
    youtubeId: "BdK-JcOwwOY",
  },
  {
    title: "Travel Short",
    youtubeId: "nOHIrx0z2nQ",
  },
  {
    title: "Travel Short",
    youtubeId: "v3ncbhrpxdc",
  },
  {
    title: "Travel Short",
    youtubeId: "iwxqkRndB-k",
  },
]

const essays = [
  {
    title: "Kuwait City After Dark: Discovering the Vibrant Heart of the Gulf",
    excerpt:
      "While Dubai and Doha steal the spotlight, Kuwait City comes alive after dark. From the Kuwait Towers to Souq Al-Mubarakiya, discover the true energy center of the Gulf.",
    href: "/essays/kuwait-city",
  },
  {
    title: "Riyadh: A City Between Two Worlds",
    excerpt:
      "Experience Riyadh's striking contrasts - from futuristic metro stations to Al Masmak Palace, from Kingdom Centre to the Edge of the World.",
    href: "/essays/riyadh",
  },
  {
    title: "Medina: Walking Through Faith, History, and Time",
    excerpt:
      "Trace the footsteps of Prophet Muhammad in Islam's second holiest city. From Quba Mosque to Al-Masjid an-Nabawi, discover Medina's living history.",
    href: "/essays/medina",
  },
  {
    title: "Namibia: Where the Desert Meets the Sea",
    excerpt:
      "From dramatic deserts to colonial coastal towns, from wildlife encounters to surreal natural contrasts, discover Namibia's raw beauty and sense of scale.",
    href: "/essays/namibia",
  },
  {
    title: "Jeddah: Where Saudi Arabia Opens Its Doors",
    excerpt:
      "From the UNESCO heritage streets of Al Balad to the vibrant Corniche, discover Jeddah as a gateway to the Kingdom and a destination in its own right.",
    href: "/essays/jeddah",
  },
  {
    title: "How to Fly the United Island Hopper",
    excerpt:
      "Four islands, two countries, and one legendary aviation adventure across the Pacific. A complete guide to UA132 from Honolulu to Guam.",
    href: "/essays/island-hopper",
  },
  {
    title: "A Weekend in St. Barts",
    excerpt:
      "Caribbean luxury with a French twist. From the dramatic 15-minute flight to secluded beaches and wine-soaked dinners, a guide to one of the most coveted escapes in the Caribbean.",
    href: "/essays/st-barts",
  },
  {
    title: "In Search of the Perfect Khao Soi",
    excerpt:
      "A Chiang Mai ritual: hunting for the perfect bowl of northern Thailand's iconic coconut curry noodle soup, from Netflix-famous spots to hole-in-the-walls that close by 10 AM.",
    href: "/essays/chiang-mai",
  },
]

export default function PerspectivePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Perspective
          </p>
          <h1 className="mt-3 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Not a blog. A curated lens.
          </h1>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
            Selected journeys, reflections, and essays on travel, food, and the
            art of moving through the world with intention.
          </p>
        </section>

        {/* Selected Journeys */}
        <section className="border-t border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
                  Selected Journeys
                </h2>
                <p className="mt-3 max-w-lg text-pretty text-muted-foreground">
                  Quick glimpses from around the world — short-form stories captured on location.
                </p>
              </div>
              <a
                href="https://www.youtube.com/@go-outonalim"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
              >
                View Full Channel
              </a>
            </div>
            <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {journeys.map((journey) => (
                <div key={journey.youtubeId} className="group flex flex-col">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-md bg-primary/5">
                    <iframe
                      src={`https://www.youtube.com/embed/${journey.youtubeId}`}
                      title={journey.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Showcase */}
        <YouTubeShowcase />

        {/* Essays */}
        <section className="border-t border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
              Essays
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Occasional writing on travel philosophy, food culture, and the art
              of moving through the world with intention.
            </p>
            <div className="mt-10 flex flex-col divide-y divide-border/60">
              {essays.map((essay) => {
                const content = (
                  <>
                    <h3 className="font-serif text-2xl font-medium text-foreground transition-colors group-hover:text-accent md:text-3xl">
                      {essay.title}
                    </h3>
                    <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      {essay.excerpt}
                    </p>
                  </>
                )
                return essay.href ? (
                  <Link
                    key={essay.title}
                    href={essay.href}
                    className="group flex flex-col gap-2 py-8 first:pt-0 last:pb-0"
                  >
                    {content}
                  </Link>
                ) : (
                  <article
                    key={essay.title}
                    className="group flex flex-col gap-2 py-8 first:pt-0 last:pb-0"
                  >
                    {content}
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

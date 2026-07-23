import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { EssaySignoff } from "@/components/essay-signoff"

export const metadata: Metadata = {
  title: "Riyadh: A City Between Two Worlds | Go Out On A LIM",
  description:
    "Experience Riyadh's striking contrasts - from futuristic metro stations to Al Masmak Palace, from Kingdom Centre to the Edge of the World.",
  keywords: [
    "Riyadh travel",
    "Saudi Arabia",
    "Kingdom Centre",
    "Edge of the World",
    "Al Masmak Palace",
    "Riyadh metro",
    "Saudi tourism",
  ],
  openGraph: {
    title: "Riyadh: A City Between Two Worlds",
    description:
      "Experience Riyadh's striking contrasts - from futuristic metro stations to Al Masmak Palace, from Kingdom Centre to the Edge of the World.",
    url: "https://www.gooutonalim.com/essays/riyadh",
    siteName: "Go Out On A LIM",
    images: [
      {
        url: "/images/essays/riyadh/riyadh01.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Riyadh skyline with metro tracks and skyscrapers",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riyadh: A City Between Two Worlds",
    description:
      "Experience Riyadh's striking contrasts - from futuristic metro to the Edge of the World.",
    images: ["/images/essays/riyadh/riyadh01.jpg"],
  },
  alternates: {
    canonical: "https://www.gooutonalim.com/essays/riyadh",
  },
}

export default function RiyadhEssayPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="mx-auto max-w-3xl px-6 pt-8">
        <Link
          href="/perspective"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Perspective
        </Link>
      </div>

      {/* Hero Section */}
      <header className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Essay
        </p>
        <h1 className="mt-3 text-balance font-serif text-4xl leading-tight md:text-5xl">
          Riyadh: A City Between Two Worlds
        </h1>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 pb-24">
        {/* Opening Images */}
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh01.jpg"
              alt="Modern Riyadh skyline with metro tracks and skyscrapers"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh09.jpg"
              alt="Posing at Edge of the World with vast desert below"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="prose prose-lg prose-stone mx-auto dark:prose-invert">
          <p className="lead text-xl leading-relaxed text-muted-foreground">
            Riyadh is not a city you ease into—it reveals itself quickly, almost insistently. Glass towers rise out of the desert with a kind of quiet confidence, reshaping the skyline year by year. What was once a low-rise capital is now a vertical statement of ambition, where cranes still dot the horizon and entire districts feel newly imagined. It&apos;s a city in motion, one that seems determined to redefine itself as a global hub while still anchored in its own cultural rhythm.
          </p>
        </div>

        {/* Metro Station Images */}
        <div className="my-10 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh02.jpg"
              alt="Futuristic bowl-shaped metro station exterior"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh03.jpg"
              alt="Modern metro station interior with geometric patterns"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh04.jpg"
              alt="Inside metro car with passengers"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg prose-stone mx-auto dark:prose-invert">
          <p>
            Nowhere is that contrast more visible than in Riyadh&apos;s metro system. Some of the stations look like they&apos;ve landed from the future—sleek, aerodynamic structures that resemble spaceships more than transit hubs. Step inside, and the design continues: expansive, minimalist, almost cinematic in its execution. And yet, within this ultra-modern setting, tradition quietly persists. In the metro cars, you&apos;ll notice women choosing to board the &quot;family&quot; sections rather than the designated &quot;single&quot; cars, which are largely occupied by men. It&apos;s a subtle but telling moment—where cutting-edge infrastructure meets deeply ingrained social norms.
          </p>
        </div>

        {/* Kingdom Centre Images */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh05.jpg"
              alt="Kingdom Centre tower with palm trees during the day"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh06.jpg"
              alt="Kingdom Centre at night with LED display"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg prose-stone mx-auto dark:prose-invert">
          <p>
            Then there&apos;s the Kingdom Centre, perhaps Riyadh&apos;s most recognizable landmark. Its distinctive silhouette—an elegant arc cut through its upper frame—has become synonymous with the city itself. For visitors, it&apos;s both a symbol and a vantage point. Head up to the Sky Bridge, and Riyadh stretches out in every direction, a vast urban grid punctuated by light and movement. It&apos;s here that the scale of the city becomes fully apparent—endless, ordered, and still expanding.
          </p>
        </div>

        {/* Al Masmak Palace Images */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh07.jpg"
              alt="Al Masmak Palace exterior with mudbrick towers"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh08.jpg"
              alt="Interior courtyard of Al Masmak Palace"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg prose-stone mx-auto dark:prose-invert">
          <p>
            But Riyadh isn&apos;t entirely defined by its modernity. Tucked within the city is Al Masmak Palace, one of the few remaining windows into its past. Built from mudbrick and steeped in history, it stands in quiet contrast to the surrounding cityscape. This was the site of a pivotal moment in Saudi Arabia&apos;s formation, and walking through its thick walls feels like stepping into a different era. In a city racing toward the future, places like Al Masmak serve as rare and important anchors to its origins.
          </p>
        </div>

        {/* Edge of the World Introduction */}
        <div className="my-10 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh14.jpg"
              alt="Selfie at Edge of the World with sun behind"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh10.jpg"
              alt="Wide shot of Edge of the World cliffs at sunset"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh12.jpg"
              alt="Edge of the World cliff formation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg prose-stone mx-auto dark:prose-invert">
          <p>
            And then, just when Riyadh begins to feel overwhelmingly urban, the landscape opens up in a way that resets everything. A short drive out of the city brings you to the Edge of the World—one of the most dramatic natural sights in the region. Here, the earth seems to fall away into an endless desert plain, cliffs stretching into the distance with no visible boundary. The silence is striking. There are no skyscrapers, no traffic—just wind, rock, and horizon.
          </p>
        </div>

        {/* Edge of the World Contemplation */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh11.jpg"
              alt="Sitting under rock overhang at Edge of the World"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh13.jpg"
              alt="Visitors watching sunset at Edge of the World"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg prose-stone mx-auto dark:prose-invert">
          <p>
            Standing at the edge, you begin to understand the scale of Saudi Arabia in a different way. The city, with all its ambition and energy, feels like just one layer of a much larger story. The vastness beyond it is humbling, almost disorienting in its simplicity. It&apos;s the kind of place that doesn&apos;t demand anything from you—just that you pause and take it in.
          </p>
        </div>

        {/* Final Images */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh15.jpg"
              alt="People praying at Edge of the World during sunset"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/essays/riyadh/riyadh16.jpg"
              alt="Sunset at Edge of the World with moon visible"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg prose-stone mx-auto dark:prose-invert">
          <p>
            That&apos;s what makes Riyadh worth stopping for. It&apos;s not just a capital city—it&apos;s a study in contrast. Between modernity and tradition, ambition and heritage, urban life and open desert, Riyadh doesn&apos;t ask you to choose between worlds. It shows you how they coexist, often in the same moment, and invites you to experience both.
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/perspective"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Perspective
          </Link>
        </div>
      </article>
      <EssaySignoff />
    </main>
  )
}

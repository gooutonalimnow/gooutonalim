import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { EssaySignoff } from "@/components/essay-signoff"

export const metadata: Metadata = {
  title: "Manama Unhurried: A Quieter Corner of the Gulf | Go Out On A LIM",
  description:
    "Bahrain may not overwhelm you with sights, but Manama offers a fascinating, less conservative counterpoint to its Gulf neighbors, from Bahrain Fort to a souk, Haji's Cafe, and the World Trade Center.",
  keywords: [
    "Bahrain travel",
    "Manama travel",
    "Bahrain Fort",
    "Manama Souk",
    "Haji's Cafe",
    "Bahrain World Trade Center",
    "Gulf travel",
    "Bahrain tourism",
  ],
  openGraph: {
    title: "Manama Unhurried: A Quieter Corner of the Gulf",
    description:
      "Bahrain may not overwhelm you with sights, but Manama offers a fascinating, less conservative counterpoint to its Gulf neighbors.",
    url: "https://www.gooutonalim.com/essays/bahrain",
    siteName: "Go Out On A LIM",
    images: [
      {
        url: "/images/essays/bahrain/bahrain01.jpg",
        width: 1200,
        height: 630,
        alt: "Looking toward the Bahrain World Trade Center twin towers at dusk",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manama Unhurried: A Quieter Corner of the Gulf",
    description:
      "Bahrain may not overwhelm you with sights, but Manama offers a fascinating, less conservative counterpoint to its Gulf neighbors.",
    images: ["/images/essays/bahrain/bahrain01.jpg"],
  },
  alternates: {
    canonical: "https://www.gooutonalim.com/essays/bahrain",
  },
}

export default function BahrainEssay() {
  return (
    <article className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-4">
          <Link
            href="/perspective"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Perspective
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <header className="mx-auto max-w-3xl px-6 pb-10 pt-16">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Bahrain
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
          Manama Unhurried: A Quieter Corner of the Gulf
        </h1>
      </header>

      {/* Hero Image */}
      <div className="mx-auto max-w-4xl px-6">
        <figure>
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted md:aspect-[16/10]">
            <Image
              src="/images/essays/bahrain/bahrain01.jpg"
              alt="Looking toward the Bahrain World Trade Center twin towers at dusk"
              fill
              className="object-cover"
              priority
            />
          </div>
        </figure>
      </div>

      {/* Essay Content */}
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Bahrain is not a place you visit for a long checklist of sights.
          </p>

          <p>
            Its capital, Manama, is compact and easygoing, and you can see much
            of what it offers in a day or two. But what makes Bahrain
            interesting is not how much there is to do&mdash;it is how different
            it feels from its Gulf neighbors. Thanks in part to its British
            colonial history, Bahrain comes across as noticeably more relaxed
            and less conservative than the countries around it. That easy,
            open-minded character quietly shapes almost everything you
            experience here, and it makes even a short visit worthwhile.
          </p>
        </div>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Bahrain Fort
          </h2>

          <p>
            The best place to feel the weight of that history is Bahrain Fort,
            or Qal&apos;at al-Bahrain. Perched on an ancient tell that has been
            occupied for thousands of years, the honey-colored stone walls rise
            straight out of the earth and look back toward the modern skyline in
            the distance. Wandering the ramparts and empty courtyards, with
            barely another visitor in sight, you get a real sense of the layers
            of civilization that have passed through this small island&mdash;a
            reminder that Bahrain&apos;s story stretches far deeper than its oil
            era.
          </p>
        </div>

        {/* Images: Bahrain Fort */}
        <figure className="my-12">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain02.jpg"
                alt="Ancient stone walls of Bahrain Fort with the city skyline in the distance"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain03.jpg"
                alt="The wide stone ramparts and courtyard of Bahrain Fort under a clear sky"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Manama Souk
          </h2>

          <p>
            From the fort I headed into the Manama Souk, entering beneath its
            handsome arched gateway dated 1949. The souk is smaller and more
            modest than the sprawling market I wandered in Kuwait City&mdash;you
            can cover it comfortably in an afternoon&mdash;but that does not make
            it any less alive. Beneath its covered walkways, locals still come to
            shop for gold, spices, textiles, and everyday goods, and the lanes
            hum with the ordinary rhythm of people going about their day. It is
            a working market rather than a tourist showpiece, and that is
            exactly its charm.
          </p>
        </div>

        {/* Images: Manama Souk */}
        <figure className="my-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain04.jpg"
                alt="Standing beneath the arched 1949 gateway into Manama Souk"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain05.jpg"
                alt="The white arched entrance gate to Manama Souk, dated 1949"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain06.jpg"
                alt="Shoppers walking through the covered walkway of Manama Souk"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Lunch at Haji&apos;s Cafe
          </h2>

          <p>
            Tucked into one of the souk&apos;s narrow lanes is Haji&apos;s Cafe,
            a local institution serving since 1950. The menu is refreshingly
            simple&mdash;a short list of rice, curries, and grilled dishes done
            well&mdash;and my tray of fragrant biryani with a bowl of curry and
            a plate of salad was both cheap and genuinely good. What I found most
            interesting, though, was the layout: the cafe has separate seating
            for families and for single men, with signs marking one section
            &quot;Family Only.&quot; It is a small window into how social life is
            organized here, and sitting under the old wood-beamed ceiling among
            the regulars felt like the most authentic meal of the trip.
          </p>
        </div>

        {/* Images: Haji's Cafe */}
        <figure className="my-12">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain07.jpg"
                alt="The Haji's Cafe sign hanging over a narrow souk alley lined with turquoise benches"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain08.jpg"
                alt="The entrance to Haji's Cafe with a Family Only sign"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain09.jpg"
                alt="Seated inside Haji's Cafe beneath its traditional wood-beamed ceiling"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain10.jpg"
                alt="A tray of biryani rice, curry, and salad at Haji's Cafe"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            The Bahrain World Trade Center
          </h2>

          <p>
            If Bahrain Fort anchors the city in the past, the Bahrain World
            Trade Center is its face to the future. The twin sail-shaped towers
            are the emblem of Manama, instantly recognizable on the skyline. What
            makes them remarkable is not just their sculpted, wind-catching form
            but what sits between them: three large wind turbines bridging the
            towers, the first time turbines were integrated directly into a
            skyscraper&apos;s design. Rising around 240 meters over fifty floors,
            the towers were built to draw the Gulf breeze through those turbines
            to help power the building&mdash;a genuinely pioneering piece of
            architecture that has since inspired designs around the world.
          </p>
        </div>

        {/* Images: Bahrain World Trade Center */}
        <figure className="my-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain11.jpg"
                alt="The Bahrain World Trade Center twin towers seen from the street"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain12.jpg"
                alt="Standing before the World Trade Center towers with the wind turbines visible between them"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain13.jpg"
                alt="Gazing toward the twin World Trade Center towers over the Manama skyline"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Sunset Over Manama
          </h2>

          <p>
            As the day winds down, Manama comes alive in the softest way. The
            sunset here is genuinely beautiful&mdash;the sky over the waterfront
            melts into shades of peach and rose, silhouetting the palms and
            towers along the corniche. It is the kind of quiet, golden moment
            that makes you slow down and appreciate a city that never tries too
            hard to impress you.
          </p>
        </div>

        {/* Image: Sunset */}
        <figure className="my-12">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted md:aspect-[3/2]">
            <Image
              src="/images/essays/bahrain/bahrain14.jpg"
              alt="A pink and orange sunset over the Manama waterfront, palms and skyline in silhouette"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            After Dark
          </h2>

          <p>
            After sunset, the streets fill up again. Jewelry shops glow behind
            their windows, families stroll the lanes, and the souk keeps buzzing
            well into the evening. It is also here that Bahrain&apos;s more
            easygoing side becomes obvious: among the shops are massage parlors
            openly labeled as spas &quot;for ladies,&quot; the kind of nightlife
            you simply would not see advertised so plainly in some of the more
            conservative countries nearby. It is a small, slightly amusing detail,
            but a telling one&mdash;more proof of just how much more relaxed
            Bahrain is than its neighbors.
          </p>
        </div>

        {/* Images: After dark */}
        <figure className="my-12">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain15.jpg"
                alt="A lit night street in the souk with a jewelry store glowing and people walking"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/bahrain/bahrain16.jpg"
                alt="A brightly lit spa storefront advertising massage for ladies at night"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Why Manama Is Worth the Visit
          </h2>

          <p>
            Manama will never compete with Dubai or Doha on spectacle, and it
            does not try to. What it offers instead is something quieter and, in
            its own way, more rewarding: an ancient fort, a working souk, a
            beloved old cafe, a genuinely inventive skyline, and a way of life
            that feels notably more open and relaxed than much of the Gulf. You
            do not come to Bahrain for a long list of attractions&mdash;you come
            for the atmosphere. And on that count, this small, unhurried island
            quietly punches well above its weight.
          </p>
        </div>
      </div>

      <EssaySignoff />

      {/* Footer Navigation */}
      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <Link
            href="/perspective"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all essays
          </Link>
        </div>
      </footer>
    </article>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Kuwait City After Dark: Discovering the Vibrant Heart of the Gulf | Go Out On A LIM",
  description:
    "While Dubai and Doha steal the spotlight, Kuwait City comes alive after dark. From the Kuwait Towers to Souq Al-Mubarakiya, discover the true energy center of the Gulf.",
  keywords: [
    "Kuwait City travel",
    "Kuwait Towers",
    "Souq Al-Mubarakiya",
    "Grand Mosque Kuwait",
    "Al Shaheed Park",
    "Gulf travel",
    "Kuwait nightlife",
    "Kuwait tourism",
  ],
  openGraph: {
    title: "Kuwait City After Dark: Discovering the Vibrant Heart of the Gulf",
    description:
      "While Dubai and Doha steal the spotlight, Kuwait City comes alive after dark. From the Kuwait Towers to Souq Al-Mubarakiya, discover the true energy center of the Gulf.",
    url: "https://www.gooutonalim.com/essays/kuwait-city",
    siteName: "Go Out On A LIM",
    images: [
      {
        url: "/images/essays/kuwait-city/kc01.jpg",
        width: 1200,
        height: 630,
        alt: "Kuwait Towers illuminated in green and red at night",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuwait City After Dark: Discovering the Vibrant Heart of the Gulf",
    description:
      "While Dubai and Doha steal the spotlight, Kuwait City comes alive after dark.",
    images: ["/images/essays/kuwait-city/kc01.jpg"],
  },
  alternates: {
    canonical: "https://www.gooutonalim.com/essays/kuwait-city",
  },
}

export default function KuwaitCityEssay() {
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
          Kuwait
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
          Kuwait City After Dark: Discovering the Vibrant Heart of the Gulf
        </h1>
      </header>

      {/* Hero Images */}
      <div className="mx-auto max-w-4xl px-6">
        <figure>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/kuwait-city/kc01.jpg"
                alt="Looking up at the Kuwait Towers illuminated in green and red at night"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/kuwait-city/kc02.jpg"
                alt="The three Kuwait Towers rising above the city at dusk"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </figure>
      </div>

      {/* Essay Content */}
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-muted-foreground">
            When people think of the Gulf, cities like Dubai, Doha, and Abu
            Dhabi often steal the spotlight.
          </p>

          <p>
            Yet after spending time in Kuwait City, I came away with a different
            impression. While it may not boast the tallest skyscrapers or the
            flashiest attractions, Kuwait City possesses something many of its
            neighbors lack&mdash;an unmistakable sense of energy. Once the sun
            sets, the city transforms into one of the liveliest destinations in
            the Gulf.
          </p>
        </div>

        {/* Image: Skyline from the park */}
        <figure className="my-12">
          <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/kuwait-city/kc03.jpg"
              alt="Gazing at the glowing Kuwait City skyline from Al Shaheed Park at night"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <p>
            Unlike some neighboring Gulf capitals where activity seems centered
            around malls and luxury hotels, Kuwait City&apos;s streets remain
            busy well into the evening. Families stroll along the waterfront,
            caf&eacute;s buzz with conversation, and locals gather outdoors to
            enjoy the cooler desert air. There is an authenticity here that
            makes the city feel genuinely lived in rather than carefully curated
            for visitors.
          </p>
        </div>

        {/* Image: Pointing at the skyline */}
        <figure className="my-12">
          <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/kuwait-city/kc12.jpg"
              alt="Pointing toward the neon-lit Kuwait City waterfront skyline at night"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            The Kuwait Towers at Dusk
          </h2>

          <p>
            No landmark captures this atmosphere better than the Kuwait Towers.
            Rising gracefully above the Arabian Gulf, the towers are beautiful
            at any hour, but it is during dusk that they become truly magical.
            As the sky shifts from golden orange to deep blue, the illuminated
            spheres reflect against the water while the city skyline slowly
            comes alive behind them. Watching the sunset here is easily one of
            Kuwait City&apos;s most memorable experiences.
          </p>
        </div>

        {/* Images: Kuwait Towers observation dome */}
        <figure className="my-12">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/kuwait-city/kc04.jpg"
                alt="Selfie inside the Kuwait Towers glass observation dome at dusk"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/kuwait-city/kc05.jpg"
                alt="City view through the triangular glass panels of the Kuwait Towers dome"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/kuwait-city/kc06.jpg"
                alt="Standing inside the Kuwait Towers dome with the sunset skyline behind"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/kuwait-city/kc07.jpg"
                alt="Golden dusk skyline seen through the Kuwait Towers windows"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            The Grand Mosque
          </h2>

          <p>
            Another highlight is the magnificent Grand Mosque, the largest
            mosque in Kuwait and one of the most beautiful I have visited
            anywhere in the world. Its elegant Islamic architecture, soaring
            prayer hall, intricate calligraphy, and peaceful atmosphere create
            an unforgettable experience. Whether you&apos;re religious or simply
            appreciate remarkable architecture, the mosque offers a glimpse into
            Kuwait&apos;s cultural and spiritual heart.
          </p>
        </div>

        {/* Image: Grand Mosque */}
        <figure className="my-12">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/kuwait-city/kc08.jpg"
              alt="Inside the Grand Mosque of Kuwait with its ornate gold ceiling and chandeliers"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Driving Beneath the Skyline
          </h2>

          <p>
            One of my favorite ways to experience the city was simply driving
            around after sunset. Wide boulevards weave between clusters of
            modern skyscrapers, luxury hotels, and gleaming office towers that
            showcase Kuwait&apos;s wealth and ambition. The skyline may not
            rival Dubai in height, but it possesses a distinctive character that
            feels both modern and understated.
          </p>
        </div>

        {/* Image: Skyline at night */}
        <figure className="my-12">
          <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/kuwait-city/kc09.jpg"
              alt="Kuwait City skyline lit up at night, seen from a park path"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Al Shaheed Park
          </h2>

          <p>
            Every great city also needs green space, and Kuwait City&apos;s
            answer is Al Shaheed Park, the largest urban park in the country.
            Often described as the city&apos;s &quot;green lung,&quot; it
            provides a refreshing oasis amid the desert landscape. Beautifully
            landscaped gardens, walking paths, fountains, and public art make it
            a popular retreat for families, joggers, and couples escaping the
            evening heat.
          </p>
        </div>

        {/* Images: Al Shaheed Park */}
        <figure className="my-12">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/kuwait-city/kc10.jpg"
                alt="Boardwalk lined with palm trees and a lit tower at Al Shaheed Park"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/kuwait-city/kc11.jpg"
                alt="Illuminated textured stone monument walls at Al Shaheed Park at night"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Souq Al-Mubarakiya
          </h2>

          <p>
            As night deepens, the city&apos;s traditional side comes alive at
            Souq Al-Mubarakiya, Kuwait&apos;s oldest and most famous market.
            Here, the atmosphere is electric. Locals browse spice stalls, shop
            for traditional goods, enjoy grilled meats and fresh seafood, or
            simply gather over tea and conversation. Men dressed in flowing
            white dishdashas fill the caf&eacute;s and courtyards, catching up
            with friends in a tradition that has endured for generations. It is
            here that you truly feel the pulse of Kuwaiti society.
          </p>
        </div>

        {/* Images: Souq Al-Mubarakiya */}
        <figure className="my-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/kuwait-city/kc13.jpg"
                alt="Crowded Souq Al-Mubarakiya market street at night beneath Crystal Tower"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/kuwait-city/kc14.jpg"
                alt="Dates and spices stall with a vendor at Souq Al-Mubarakiya"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/kuwait-city/kc15.jpg"
                alt="Traditional souq cafe with men in white dishdashas gathered over tea"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            The True Energy Center of the Gulf
          </h2>

          <p>
            Kuwait City may not receive the same international attention as some
            of its Gulf neighbors, but perhaps that is precisely what makes it
            so rewarding. It offers a refreshing blend of modern skylines, rich
            traditions, welcoming public spaces, and a vibrant nightlife driven
            not by spectacle but by everyday life.
          </p>
        </div>

        {/* Final Image */}
        <figure className="my-12">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/kuwait-city/kc16.jpg"
              alt="Watching the Kuwait Towers glow green, red, and white at night"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <p>
            If Dubai is the Gulf&apos;s global showcase, Kuwait City is its
            living room&mdash;a place where people gather, connect, and
            celebrate life after the sun goes down. For me, Kuwait City is the
            true energy center of the Gulf, and one of the region&apos;s most
            underrated urban destinations.
          </p>
        </div>
      </div>

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

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { EssaySignoff } from "@/components/essay-signoff"

export const metadata: Metadata = {
  title: "Medina: Walking Through Faith, History, and Time | Go Out On A LIM",
  description:
    "Trace the footsteps of Prophet Muhammad in Islam's second holiest city. From Quba Mosque to Al-Masjid an-Nabawi, discover Medina's living history.",
  keywords: [
    "Medina travel",
    "Saudi Arabia",
    "Islamic history",
    "Prophet's Mosque",
    "Quba Mosque",
    "Mount Uhud",
    "non-Muslim Medina",
    "Saudi tourism",
  ],
  openGraph: {
    title: "Medina: Walking Through Faith, History, and Time",
    description:
      "Trace the footsteps of Prophet Muhammad in Islam's second holiest city. From Quba Mosque to Al-Masjid an-Nabawi, discover Medina's living history.",
    url: "https://www.gooutonalim.com/essays/medina",
    siteName: "Go Out On A LIM",
    images: [
      {
        url: "/images/essays/medina/medina01.jpg",
        width: 1200,
        height: 630,
        alt: "Crowds walking near Al-Masjid an-Nabawi in Medina",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medina: Walking Through Faith, History, and Time",
    description:
      "Trace the footsteps of Prophet Muhammad in Islam's second holiest city.",
    images: ["/images/essays/medina/medina01.jpg"],
  },
  alternates: {
    canonical: "https://www.gooutonalim.com/essays/medina",
  },
}

export default function MedinaEssay() {
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
          Saudi Arabia
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
          Medina: Walking Through Faith, History, and Time
        </h1>
      </header>

      {/* Hero Image */}
      <div className="mx-auto max-w-4xl px-6">
        <figure>
          <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/medina/medina01.jpg"
              alt="Crowds walking near Al-Masjid an-Nabawi with the iconic umbrella structures"
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
            There are cities you visit—and then there are cities you feel.
          </p>

          <p>Medina is the latter.</p>

          <p>
            Unlike Mecca, the holiest city in Islam which remains restricted to
            Muslims, Medina opens its doors to non-Muslim visitors. And yet,
            stepping into it, you immediately sense that this is no ordinary
            destination. It is the second holiest city in Islam—a place where
            history isn&apos;t preserved behind glass, but lived, breathed, and
            walked.
          </p>

          <p>
            I came here not just to see Medina, but to trace the footsteps of
            Prophet Muhammad (peace be upon him)—to move through the spaces
            where moments of faith, resilience, and transformation unfolded over
            1,400 years ago.
          </p>
        </div>

        {/* Image: Ghars Well */}
        <figure className="my-12">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/medina/medina02.jpg"
              alt="Ghars Well with visitors gathered around"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Where It All Feels Personal
          </h2>

          <p>At Ghars Well, history feels intimate.</p>

          <p>
            This modest well is believed to be where the Prophet drank water and
            performed wudu (ablution). Some narrations even say he wished for
            water from here to be used after his passing. Standing beside it,
            there&apos;s a quiet stillness—no grand architecture, no
            spectacle—just a sense of closeness to a life once lived with
            simplicity and intention.
          </p>
        </div>

        {/* Image: Date Palm Garden */}
        <figure className="my-12">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/medina/medina03.jpg"
              alt="Standing in the date palm garden near the Well of Salman al-Farsi"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <p>
            Not far away lies the Well of Salman al-Farsi, tied to one of the
            most remarkable companions of Islam, Salman al-Farsi. A Persian by
            origin, his journey to Islam was one of sacrifice, persistence, and
            unwavering belief. His suggestion to dig a trench during a time of
            crisis would later shape the outcome of a defining battle. The well
            and surrounding garden stand as quiet reminders of loyalty—not just
            to faith, but to the Prophet himself.
          </p>
        </div>

        {/* Images: Quba Mosque */}
        <figure className="my-12">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/medina/medina04.jpg"
                alt="Quba Mosque exterior with white minarets at sunset"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/medina/medina05.jpg"
                alt="Inside Quba Mosque showing ornate chandeliers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Where a Community Was Built
          </h2>

          <p>At Quba Mosque, the story of Medina truly begins.</p>

          <p>
            This is the first mosque ever built in Islam, established by the
            Prophet upon his arrival in the city. Today, it stands serene and
            luminous, yet its significance runs deep—praying here, even two
            simple units of prayer, is said to carry the reward of an Umrah.
            Whether one comes with faith or curiosity, there&apos;s an
            undeniable sense that this is where something foundational began.
          </p>
        </div>

        {/* Image: Seven Mosques */}
        <figure className="my-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/medina/medina06.jpg"
              alt="Ancient stone structure in the Seven Mosques area at sunset"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Where Faith Was Tested
          </h2>

          <p>
            History intensifies around the area known as the Seven Mosques, tied
            to the events of the Battle of the Trench.
          </p>

          <p>
            Among them, Masjid Fatah holds particular weight. It is believed
            that the Prophet prayed here during one of the most precarious
            moments in early Islamic history, seeking victory against
            overwhelming odds. That victory came—not just through strategy, but
            through faith and perseverance.
          </p>
        </div>

        {/* Image: Masjid al-Qiblatayn */}
        <figure className="my-12">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/medina/medina07.jpg"
              alt="Masjid al-Qiblatayn illuminated at night"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <p>
            A short distance away stands Masjid al-Qiblatayn, the &quot;Mosque
            of Two Qiblas.&quot; It marks a moment of profound shift, when the
            direction of prayer changed mid-congregation—from Jerusalem to
            Mecca. It&apos;s a reminder that even within faith, there are
            turning points that redefine identity and direction.
          </p>
        </div>

        {/* Image: Mount Uhud */}
        <figure className="my-12">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/medina/medina08.jpg"
              alt="Mount Uhud area at night with illuminated mosque"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Where Sacrifice Is Remembered
          </h2>

          <p>At the base of Mount Uhud, the tone becomes solemn.</p>

          <p>
            This was the site of the Battle of Uhud, one of the most significant
            and difficult moments in early Islamic history. Here lie the graves
            of 70 martyrs, including Hamza ibn Abdul-Muttalib, the
            Prophet&apos;s beloved uncle, and Mus&apos;ab ibn Umair.
          </p>

          <p>
            Above, on Mount Rumah, 50 archers were once stationed with a single
            instruction—to hold their position. Their decision to leave that
            post altered the course of the battle, turning near victory into
            loss. Standing there, overlooking the valley, it&apos;s impossible
            not to reflect on discipline, consequence, and the weight of
            decisions.
          </p>
        </div>

        {/* Images: Prophet's Mosque night */}
        <figure className="my-12">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/medina/medina09.jpg"
                alt="Prophet's Mosque at night with the green dome"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/essays/medina/medina10.jpg"
                alt="Prophet's Mosque minarets at night"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Where It All Comes Together
          </h2>

          <p>And then, finally, there is Al-Masjid an-Nabawi.</p>

          <p>The Prophet&apos;s Mosque.</p>

          <p>
            From above, you would see a sea of humanity—thousands moving in
            rhythm, gathering in prayer, then dispersing, only for the cycle to
            begin again. It is here that the Prophet is laid to rest. The energy
            is unlike anywhere else: deeply spiritual, yet profoundly human.
          </p>
        </div>

        {/* Image: Personal at Prophet's Mosque */}
        <figure className="my-12">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/medina/medina11.jpg"
              alt="Standing before the Prophet's Mosque at night with the green dome"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <p>
            No matter where your journey in Medina begins, it inevitably leads
            here.
          </p>
        </div>

        {/* Final Image */}
        <figure className="my-12">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/images/essays/medina/medina12.jpg"
              alt="Crowds at Prophet's Mosque during daytime"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            A City That Stays With You
          </h2>

          <p>Medina is not about ticking off landmarks.</p>

          <p>
            It&apos;s about moving through a living narrative—of faith,
            struggle, community, and devotion. Each site adds a layer, but
            together they form something far greater: a city that invites
            reflection, regardless of where you come from or what you believe.
          </p>

          <p>You don&apos;t just visit Medina.</p>

          <p>You walk through it—and somehow, it stays with you.</p>
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

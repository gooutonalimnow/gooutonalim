import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EssaySignoff } from "@/components/essay-signoff"

export const metadata: Metadata = {
  title: "Jeddah: Where Saudi Arabia Opens Its Doors | Go Out On A LIM",
  description:
    "From the UNESCO heritage streets of Al Balad to the vibrant Corniche, discover Jeddah as a gateway to the Kingdom and a destination in its own right.",
}

export default function JeddahEssayPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 pb-10 pt-20 md:pt-28">
          <Link
            href="/perspective"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Perspective
          </Link>
          <p className="mt-8 text-sm font-medium uppercase tracking-widest text-accent">
            Essay
          </p>
          <h1 className="mt-3 text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Jeddah: Where Saudi Arabia Opens Its Doors
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            There are cities you visit—and then there are cities that introduce you to a country.
          </p>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-3xl px-6 pb-20">
          <div className="prose prose-lg prose-neutral max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-2">
            
            {/* Hero image: Jeddah 1 */}
            <div className="my-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/jeddah/jeddah1.jpg"
                  alt="In front of a traditional Al Balad building with green wooden balconies"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              The Gateway to a Kingdom
            </h2>

            <p>
              Jeddah is unmistakably the latter.
            </p>

            <p>
              Set along the Red Sea, Jeddah has long been Saudi Arabia&apos;s front door—welcoming traders, pilgrims, and travelers for centuries. Today, it remains the country&apos;s most cosmopolitan entry point, where tradition and modernity meet with an ease that feels both deliberate and natural. It&apos;s where first impressions of Saudi Arabia are formed—and often, where expectations are quietly rewritten.
            </p>

            {/* Images: Jeddah 2, 3, 5 */}
            <div className="my-10 grid gap-4 md:grid-cols-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/jeddah/jeddah2.jpg"
                  alt="Al-Balad district street signs in Arabic and English"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/jeddah/jeddah3.jpg"
                  alt="Magnificent green building with intricate wooden balconies in Al Balad"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/jeddah/jeddah5.jpg"
                  alt="Traditional building with green and brown wooden balconies and string lights"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              Walking Through Time in Al Balad
            </h2>

            <p>
              Step into Al Balad, and the city shifts.
            </p>

            <p>
              A UNESCO World Heritage Site, Al Balad is a living archive of Jeddah&apos;s past—its coral-stone buildings rising in warm, weathered tones, adorned with intricate wooden balconies known as rawasheen. These latticework facades once allowed families to observe the streets below while remaining unseen, a quiet reflection of cultural rhythms that still echo today.
            </p>

            <p>
              Wandering through its narrow alleyways feels less like sightseeing and more like time travel. Doors half-open to reveal courtyards, the call to prayer weaves through the air, and history doesn&apos;t sit behind glass—it breathes through the streets.
            </p>

            {/* Images: Jeddah 6, 4 */}
            <div className="my-10 grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/jeddah/jeddah6.jpg"
                  alt="Inside the covered souq with people in traditional white robes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/jeddah/jeddah4.jpg"
                  alt="In front of a traditional brown wooden building in Al Balad"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              A Stroll Through the Souq
            </h2>

            <p>
              Before retreating from the heat, a walk through the souqs of Al Balad offers a different kind of immersion. Tucked within its winding lanes are small shops and open stalls selling everything from handwoven textiles and traditional garments to oud perfumes, spices, and gold jewelry. The experience is less about polished retail and more about discovery—conversations with shopkeepers, the scent of incense drifting through the air, and the quiet art of browsing without urgency. It&apos;s here that Jeddah&apos;s trading heritage feels most alive, echoing its past as a bustling port where goods—and stories—once flowed in from across the region.
            </p>

            {/* Image: Jeddah 7 */}
            <div className="my-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/jeddah/jeddah7.jpg"
                  alt="Butterfly pea lemonade and luqaimat at Irth Boutique and Cafe"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              A Pause at Irth Boutique and Cafe
            </h2>

            <p>
              Just when the desert heat begins to settle in, you find refuge at Irth Boutique and Cafe—a space where heritage meets contemporary design.
            </p>

            <p>
              Here, a glass of butterfly pea lemonade arrives in a vivid shade of blue, as refreshing visually as it is on the palate. Paired with luqaimat—golden, crisp bites of fried dough drizzled with date syrup and sprinkled with sesame—it becomes more than a snack. It&apos;s a moment of pause, a reminder that in Jeddah, even the simplest indulgences carry a sense of place.
            </p>

            {/* Image: Jeddah 8 */}
            <div className="my-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/jeddah/jeddah8.jpg"
                  alt="Baker preparing flatbread at Furn Al Sheikh bakery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              A Taste of History at Furn Al Shaikh
            </h2>

            <p>
              A short walk away, the scent of freshly baked bread leads you to Furn Al Shaikh, a bakery that has been serving the community since 1920.
            </p>

            <p>
              Inside, time slows. Dough is still shaped by hand, ovens glow with the same purpose they have for over a century, and each bite carries the quiet weight of tradition. There&apos;s something grounding about standing in a place that has fed generations—where history isn&apos;t curated, but simply continues.
            </p>

            <p>
              And yes, this is where you allow yourself the carbs.
            </p>

            {/* Images: Jeddah 9, 10, 11 */}
            <div className="my-10 grid gap-4 md:grid-cols-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/jeddah/jeddah9.jpg"
                  alt="The colorful Jeddah Corniche promenade at night with palm trees"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/jeddah/jeddah10.jpg"
                  alt="Women in abayas sitting by the sea at the Corniche"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/jeddah/jeddah11.jpg"
                  alt="A white mosque with minaret illuminated at night on the Corniche"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              Evenings Along the Corniche
            </h2>

            <p>
              As the sun dips below the Red Sea, the city exhales—and Jeddah Corniche comes alive.
            </p>

            <p>
              Locals fill the promenade: joggers tracing the coastline, families gathering in clusters, friends laughing under the night sky. Women in flowing abayas and hijabs walk side by side, sharing stories, while the sea breeze softens the heat of the day.
            </p>

            <p>
              There&apos;s an ease here—an energy that feels both vibrant and grounded. It&apos;s not performative. It&apos;s lived-in, authentic, and quietly captivating.
            </p>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              Why Jeddah Stays With You
            </h2>

            <p>
              Jeddah doesn&apos;t overwhelm—it unfolds.
            </p>

            <p>
              It invites you in gently, revealing its layers through history, flavor, and everyday life. From the storied streets of Al Balad to the modern rhythm of the Corniche, it offers a perspective of Saudi Arabia that is both deeply rooted and forward-looking.
            </p>

            <p>
              For many, it&apos;s the gateway to the Kingdom.
            </p>

            <p>
              But for those who take the time to explore it, Jeddah becomes something more—a destination in its own right, and a story that lingers long after you leave.
            </p>
          </div>
        </article>
      </main>
      <EssaySignoff />
      <Footer />
    </>
  )
}

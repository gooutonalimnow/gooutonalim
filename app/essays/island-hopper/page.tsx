import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Fly the United Island Hopper | Go Out On A LIM",
  description:
    "Complete guide to UA132 from Honolulu to Guam. Four islands, two countries, and one legendary aviation adventure across the Pacific.",
}

export default function IslandHopperEssayPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <Link
            href="/perspective"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Perspective
          </Link>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Essay
          </p>
          <h1 className="mt-3 text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            How to Fly the United Island Hopper
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Complete Guide to UA132 from Honolulu to Guam
          </p>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-3xl px-6 pb-20">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl leading-relaxed text-foreground">
              Forget a direct flight. I&apos;m here to tell you about a
              once-in-a-lifetime aviation adventure across the Pacific that
              feels like stepping back in time.
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              For aviation geeks and travelers like us who crave the road (or
              sky) less traveled, the United Island Hopper isn&apos;t just a
              flight—it&apos;s a legend. Operating as United flight UA132 from
              Honolulu (HNL) to Guam (GUM), it&apos;s a marathon journey that
              hops, skips, and jumps across the most remote specks of land in
              the vast Pacific Ocean. It&apos;s an aviation pilgrimage, and I
              was lucky enough to take it.
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Imagine hopping across coral atolls, touching down on remote
              islands, and visiting two different countries, all in a single day
              of flying. It&apos;s one of the most unique commercial routes on
              earth, and here&apos;s exactly how you can do it, too.
            </p>

            <figure className="my-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm md:aspect-[3/4]">
                <Image
                  src="/images/essays/island-hopper/unitedislandhopperflight.jpg"
                  alt="Andrew at Honolulu airport at night before the Island Hopper flight"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </figure>

            <h2 className="mb-6 mt-12 font-serif text-2xl font-medium text-foreground md:text-3xl">
              The Route: Four Islands, Two Countries
            </h2>

            <p className="leading-relaxed text-muted-foreground">
              The flight itself is the destination. On the Wednesday version I
              took, our itinerary looked like this:
            </p>

            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Honolulu (HNL) to Majuro, Marshall Islands</li>
              <li>Majuro to Kwajalein, Marshall Islands</li>
              <li>Kwajalein to Pohnpei, Federated States of Micronesia</li>
              <li>Pohnpei to Chuuk, Federated States of Micronesia</li>
              <li>Chuuk to Guam (GUM)</li>
            </ul>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              That means in one journey, I officially visited two fascinating
              countries: the Marshall Islands and the Federated States of
              Micronesia. (A quick note: the Wednesday flight skips Kosrae,
              covering four islands instead of the full five). For anyone who
              loves the feeling of going where few tourists go, this route is
              pure gold.
            </p>

            <figure className="my-10">
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/island-hopper/unitedflightroute.jpg"
                  alt="Map showing the United Island Hopper route from Honolulu through Marshall Islands and Micronesia to Guam"
                  fill
                  className="object-contain bg-secondary/50"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                The Island Hopper route across the Pacific
              </figcaption>
            </figure>

            <h2 className="mb-6 mt-12 font-serif text-2xl font-medium text-foreground md:text-3xl">
              How I Flew It Without Breaking the Bank
            </h2>

            <p className="leading-relaxed text-muted-foreground">
              Let&apos;s be real: the cash price for this adventure can be a
              shocker. A one-way economy ticket from Honolulu to Guam can easily
              soar past $2,000. But there&apos;s a secret weapon.
            </p>

            <h3 className="mt-8 font-serif text-xl font-medium text-foreground">
              The Points Play
            </h3>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              This is hands-down the best way to do it. I booked my entire
              journey using United MileagePlus miles. A one-way saver award in
              economy costs just 45,000 miles. That&apos;s how I made this dream
              a reality without emptying my savings account.
            </p>

            <h3 className="mt-8 font-serif text-xl font-medium text-foreground">
              The Upgrade Score
            </h3>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you have some United status or a co-branded credit card, you
              might have PlusPoints. I did, and I used 30 PlusPoints to score an
              upgrade to the United Business cabin. Let me tell you,
              experiencing this epic journey in a little extra comfort, without
              the sky-high business class fare, was one of the best travel
              decisions I&apos;ve ever made.
            </p>

            <h2 className="mb-6 mt-12 font-serif text-2xl font-medium text-foreground md:text-3xl">
              My Top Tip for the Best Views: Pick the Right Seat
            </h2>

            <p className="leading-relaxed text-muted-foreground">
              The plane on this route is typically a Boeing 737-800. To get the
              most out of it, you need to be strategic about where you sit.
              Think of it as your personal window to the Pacific.
            </p>

            <ul className="mt-4 space-y-4 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  From Honolulu to Chuuk:
                </strong>{" "}
                Sit on the Left Side (Window Seat A). This is your prime viewing
                spot for the breathtaking coral atolls and turquoise lagoons.
                Try to get a seat a few rows ahead of or behind the wings for an
                unobstructed view.
              </li>
              <li>
                <strong className="text-foreground">From Chuuk to Guam:</strong>{" "}
                If you can, switch sides! For the final leg into Guam, grab a
                seat on the Right Side (Window Seat F). The approach offers
                stunning views that make the perfect end to the journey.
              </li>
            </ul>

            <figure className="my-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm md:aspect-[3/4]">
                <Image
                  src="/images/essays/island-hopper/seat3a.jpg"
                  alt="Andrew in seat 3A in United Business Class"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                Seat 3A in United Business Class
              </figcaption>
            </figure>

            <h2 className="mb-6 mt-12 font-serif text-2xl font-medium text-foreground md:text-3xl">
              Stepping Back in Time: The Airport Stops
            </h2>

            <p className="leading-relaxed text-muted-foreground">
              For me, the 30-45 minute stops at each island were some of the
              most fascinating parts of the trip. These aren&apos;t your typical
              airports. They are wonderfully simple, with maybe one concession
              stand, basic restrooms, and a gate or two. Stepping off the plane
              (or just looking out the window) gives you a rare glimpse into
              life on these remote Pacific islands. It feels like stepping back
              to a simpler era of air travel.
            </p>

            <h3 className="mt-8 font-serif text-xl font-medium text-foreground">
              Majuro, Marshall Islands
            </h3>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              The capital city, sprawled across a razor-thin coral atoll. The
              view as you descend over that brilliant turquoise water is simply
              unforgettable.
            </p>

            <div className="my-8 grid gap-4 md:grid-cols-2">
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src="/images/essays/island-hopper/majuro1.jpg"
                    alt="Andrew with United plane on tarmac at Majuro"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              </figure>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src="/images/essays/island-hopper/majuro2.jpg"
                    alt="Andrew at the Welcome to Marshall Islands sign"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              </figure>
            </div>

            <h3 className="mt-8 font-serif text-xl font-medium text-foreground">
              Kwajalein, Marshall Islands
            </h3>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              This stop is unique. It&apos;s a U.S. military installation, which
              means passengers cannot get off the plane. In fact, photography
              and videography are strictly prohibited. We just had a quick stop
              on the tarmac before continuing our journey.
            </p>

            <h3 className="mt-8 font-serif text-xl font-medium text-foreground">
              Pohnpei, Federated States of Micronesia
            </h3>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              This island is a shock to the system after the flat atolls.
              It&apos;s lush, mountainous, and covered in dense tropical
              rainforest. I could see waterfalls from the air, and it&apos;s
              home to the mysterious ancient city of Nan Madol.
            </p>

            <div className="my-8 grid gap-4 md:grid-cols-2">
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src="/images/essays/island-hopper/pohnpeistopover1.jpg"
                    alt="Andrew on the tarmac at Pohnpei"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              </figure>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src="/images/essays/island-hopper/pohnpeistopover2.jpg"
                    alt="Andrew at Pohnpei International Airport sign"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              </figure>
            </div>

            <h3 className="mt-8 font-serif text-xl font-medium text-foreground">
              Chuuk, Federated States of Micronesia
            </h3>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Famous among divers for the Chuuk Lagoon shipwrecks, this stop
              allowed us to briefly enter the small terminal. It&apos;s a place
              that feels steeped in history.
            </p>

            <div className="my-8 grid gap-4 md:grid-cols-3">
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/essays/island-hopper/chuuk1.jpg"
                    alt="United plane on tarmac at Chuuk"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>
              </figure>
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/essays/island-hopper/chuuk2.jpg"
                    alt="Andrew at Welcome to State of Chuuk sign"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>
              </figure>
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/essays/island-hopper/chuuk3.jpg"
                    alt="Inside Chuuk airport terminal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>
              </figure>
            </div>

            <h2 className="mb-6 mt-12 font-serif text-2xl font-medium text-foreground md:text-3xl">
              The View from 30,000 Feet (and Lower!)
            </h2>

            <p className="leading-relaxed text-muted-foreground">
              The absolute highlight? The scenery. As the plane descends toward
              each tiny strip of land, you&apos;re treated to views that no
              postcard can capture. Seeing those razor-thin coral atolls, ringed
              by electric-blue lagoons and surrounded by nothing but the vast,
              endless ocean, is one of the most spectacular sights I&apos;ve
              ever seen from a commercial airplane.
            </p>

            <div className="my-8 grid gap-4 md:grid-cols-2">
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/essays/island-hopper/majurolanding1.jpg"
                    alt="Aerial view approaching Majuro atoll"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              </figure>
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/essays/island-hopper/majurolanding2.jpg"
                    alt="View from plane window of Majuro atoll with United wing visible"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              </figure>
            </div>

            <figure className="my-8">
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/island-hopper/majurolanding3.jpg"
                  alt="Stunning aerial view of Majuro coral atoll with turquoise lagoon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                The stunning approach into Majuro
              </figcaption>
            </figure>

            <div className="my-8 grid gap-4 md:grid-cols-3">
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/essays/island-hopper/pohnpeilanding1.jpg"
                    alt="View through plane window of Pohnpei reef"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>
              </figure>
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/essays/island-hopper/pohnpeilanding2.jpg"
                    alt="Aerial view of lush green Pohnpei islands"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>
              </figure>
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/essays/island-hopper/kwajaleinbound.jpg"
                    alt="Aerial view of Kwajalein atoll"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>
              </figure>
            </div>

            <h2 className="mb-6 mt-12 font-serif text-2xl font-medium text-foreground md:text-3xl">
              The Final Word: Is It Worth It?
            </h2>

            <p className="leading-relaxed text-muted-foreground">
              Let&apos;s be honest: it&apos;s a long day. It&apos;s not the most
              convenient flight. The airports are basic, and you get on and off
              the plane multiple times. But that&apos;s precisely the point.
              That&apos;s exactly what makes it unforgettable.
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Flying the Island Hopper feels like stepping into a different era
              of aviation. It&apos;s an experience for those of us who are moved
              by a map, fascinated by history, and thrilled by the chance to
              visit places that are normally so hard to reach. For me, it was a
              dream come true.
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              If you love aviation history, remote destinations, and travel
              experiences that are truly unique, put the United Island Hopper on
              your bucket list. I promise you, when you look out that window at
              those turquoise atolls scattered across the infinite Pacific,
              you&apos;ll instantly understand why this route has become
              legendary.
            </p>

            <figure className="my-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/island-hopper/guam.jpg"
                  alt="Aerial view of Guam at sunset - the final destination"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                Final approach into Guam at sunset
              </figcaption>
            </figure>

            {/* Watch the Journey */}
            <div className="mt-16 border-t border-border/60 pt-12">
              <h2 className="mb-6 font-serif text-2xl font-medium text-foreground md:text-3xl">
                Watch the Journey
              </h2>
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <iframe
                  src="https://www.youtube.com/embed/UVs_-7C7SPA"
                  title="United Island Hopper Flight"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

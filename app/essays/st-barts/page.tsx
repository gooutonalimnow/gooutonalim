import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "A Weekend in St. Barts | Go Out On A LIM",
  description:
    "Caribbean luxury with a French twist. A guide to one of the most coveted escapes in the Caribbean.",
}

export default function StBartsEssayPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 pb-8 pt-20 md:pt-28">
          <Link
            href="/perspective"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Perspective
          </Link>

          <p className="mt-8 text-sm font-medium uppercase tracking-widest text-accent">
            St. Barts, Caribbean
          </p>
          <h1 className="mt-3 text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            A Weekend in St. Barts: Caribbean Luxury With a French Twist
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Some destinations feel like an escape. Others feel like a fantasy.
            St. Barts—or Saint Barthélemy—has the rare gift of being both.
          </p>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-3xl px-6 pb-20">
          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-2">
            <p>
              This tiny French-Caribbean island is where effortless
              sophistication meets raw tropical beauty. It&apos;s a place where
              elegant beach bars hug the shore, where a lunch menu reads like it
              was airlifted from Provence, and where the pace of life slows just
              enough to make a long weekend feel like a true reset.
            </p>
            <p>
              I only had a few days there, but it was more than enough to
              understand why St. Barts has become one of the most coveted
              escapes in the Caribbean.
            </p>
          </div>

          {/* Aerial view */}
          <figure className="my-12">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh1.jpg"
                alt="Aerial view of St. Barts coastline with turquoise waters and boats"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </figure>

          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-2">
            <h2 className="!mb-6 !text-2xl md:!text-3xl">Arrival: The 15-Minute Flight That Feels Like a Scene from a Movie</h2>
            <p>Your introduction to St. Barts is unforgettable.</p>
            <p>
              Most visitors, myself included, arrive via a short hop on St
              Barths Commuter from nearby St. Maarten. The flight itself lasts
              barely 15 minutes, but it&apos;s one of the most spectacular
              short-haul journeys you&apos;ll ever take.
            </p>
            <p>
              As the small aircraft skims over the deep blue Caribbean, the
              island rises from the sea—rugged green hills giving way to
              crescents of white sand. The descent into Gustaf III Airport is
              famously dramatic. The pilot dips low over a hilltop, aiming for
              one of the shortest commercial runways in the world. For aviation
              enthusiasts, it&apos;s pure adrenaline. For everyone else,
              it&apos;s simply breathtaking.
            </p>
            <p>And then, just like that, you&apos;re on the ground in St. Barts.</p>
          </div>

          {/* Arrival images */}
          <figure className="my-12">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh14.jpg"
                alt="St. Barth Commuter plane on the tarmac"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </figure>

          <div className="my-12 grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh16.jpg"
                alt="Aerial view from plane window of St. Barts harbor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh15.jpg"
                alt="Cockpit view of the dramatic landing approach"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-2">
            <h2 className="!mb-6 !text-2xl md:!text-3xl">Beaches: From Jet-Set Energy to Secluded Serenity</h2>
            <p>
              Despite its size, the island is home to some of the most exquisite
              beaches in the Caribbean.
            </p>
            <p>
              On the famous Saint Jean Beach, you&apos;ll find Nikki Beach, the
              epicenter of the island&apos;s lively, sun-drenched social scene.
              With its pulsing music, chic sunbeds, and endless flow of rosé,
              it&apos;s the kind of place where lunch naturally drifts into the
              late afternoon. Right next door, the legendary Eden Rock hotel
              juts out onto a rocky promontory, its timeless glamour a symbol of
              the island&apos;s spirit.
            </p>
          </div>

          {/* Beach images */}
          <div className="my-12 grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh6.jpg"
                alt="Saint Jean Beach with palm fronds and beachgoers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh5.jpg"
                alt="Rocky coastline with waterfront hotel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-2">
            <p>
              For a complete change of pace, I wandered over the sand dunes to
              Saline Beach on the island&apos;s southern coast. Wild, unspoiled,
              and blissfully quiet, it felt a world away from the buzz of Saint
              Jean—a perfect slice of Caribbean solitude.
            </p>
          </div>

          {/* Saline Beach */}
          <figure className="my-12">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh13.jpg"
                alt="Saline Beach - wild and unspoiled with turquoise water"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </figure>

          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-2">
            <h2 className="!mb-6 !text-2xl md:!text-3xl">Food: A French Culinary Playground</h2>
            <p>
              St. Barts is, above all, French, and that heritage shines
              brightest at the table.
            </p>
            <p>
              The culinary scene here is remarkable. You&apos;ll find elegant
              beachfront bistros where tables are set just steps from the tide,
              the sound of waves accompanying every course. Menus brim with
              fresh seafood, delicate pastries, and perfectly prepared fish, all
              paired with carefully selected French wines.
            </p>
            <p>
              Dinner is an event. It begins with a glass of chilled rosé as the
              sun melts into the sea and unfolds slowly, unhurriedly, long into
              the warm Caribbean evening.
            </p>
          </div>

          {/* Food images */}
          <div className="my-12 grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh11.jpg"
                alt="Gourmet dish at a St. Barts restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh7.jpg"
                alt="Beach restaurant with palm trees and menu board"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-2">
            <h2 className="!mb-6 !text-2xl md:!text-3xl">Atmosphere: Casual Elegance, Effortlessly Chic</h2>
            <p>
              What truly sets St. Barts apart is its vibe. It&apos;s a place of
              immense wealth, yet it never feels flashy. Designer boutiques line
              the charming streets of Gustavia, the capital, but the mood
              remains relaxed and unpretentious.
            </p>
            <p>
              Days are spent in a gentle rhythm: a morning on the beach, a long
              lunch at a café, an afternoon drive to a scenic lookout. Evenings
              bring a quiet sophistication—yachts resting in the harbor,
              candlelit terraces, the murmur of conversations carried on a warm
              breeze. It&apos;s a distinctly French kind of cool: stylish,
              understated, and completely effortless.
            </p>
          </div>

          {/* Atmosphere images */}
          <figure className="my-12">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh3.jpg"
                alt="Louis Vuitton Saint Barth store"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </figure>

          <div className="my-12 grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh2.jpg"
                alt="Evening view of the harbor at sunset"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh4.jpg"
                alt="Beach scene with plane flying overhead"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-2">
            <h2 className="!mb-6 !text-2xl md:!text-3xl">Where I Stayed: A Private Hillside Sanctuary</h2>
            <p>
              For this trip, I stayed at{" "}
              <a
                href="https://www.wimco.com/villa-rentals/caribbean/st-barthelemy/aurore-vina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 transition-colors hover:text-accent/80"
              >
                Villa Aurore-Vina
              </a>
              , a spacious five-bedroom property tucked into the quiet hills of
              Vitet, overlooking the sea.
            </p>
            <p>
              The villa is spread across four separate bungalows, connected by
              lush tropical garden paths. It felt like having my own private
              resort. The main pavilion houses a breezy living room and a modern
              kitchen that opens onto a wide terrace with sweeping ocean views.
              Each bedroom is its own private retreat, with a king bed, ensuite
              bathroom, and air conditioning.
            </p>
            <p>
              The centerpiece is the large swimming pool, surrounded by a teak
              terrace and sun loungers—the perfect spot to do absolutely nothing
              under the Caribbean sun. And yet, the bustle of Lorient Beach and
              Marigot Bay is just a five-minute drive away. It was the best of
              both worlds: total privacy with easy access to the island&apos;s
              life.
            </p>
          </div>

          {/* Villa images */}
          <figure className="my-12">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh9.jpg"
                alt="Villa pool deck at sunset with pink sky"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </figure>

          <div className="my-12 grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh10.jpg"
                alt="Villa interior with white decor and open floor plan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh12.jpg"
                alt="Villa terrace with hammock and ocean view"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-2">
            <h2 className="!mb-6 !text-2xl md:!text-3xl">The Cost: An Investment in an Experience</h2>
            <p>
              St. Barts is not a budget destination, and that&apos;s part of its
              reality. A comfortable stay—with a beautiful villa, memorable
              meals, beach clubs, and a rental car to explore—will likely run
              around $500 per day per person, not including flights.
            </p>
            <p>
              But for many of us, the appeal lies in that very combination of
              quality, elegance, and a sense of exclusivity. It&apos;s a place
              where you&apos;re paying for an experience, not just a
              transaction.
            </p>
          </div>

          {/* Cost image */}
          <figure className="my-12">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/essays/st-barts/sbh4.jpg"
                alt="Beach scene capturing the essence of St. Barts"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </figure>

          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-2">
            <h2 className="!mb-6 !text-2xl md:!text-3xl">Final Thoughts</h2>
            <p>A weekend in St. Barts is short, but its magic lingers.</p>
            <p>
              From the heart-stopping arrival to the quiet afternoons on
              secluded sands, from the long, wine-soaked dinners to the simple
              pleasure of a dip in a private pool overlooking the sea, the
              island offers a rare blend of Caribbean warmth and French
              sophistication.
            </p>
            <p>
              It&apos;s not a place for a whirlwind tour. It&apos;s a place to
              slow down, indulge a little, and savor one of the most stylish
              corners of the world. And once you&apos;ve experienced it,
              you&apos;ll understand immediately why so many people find their
              way back, again and again.
            </p>
          </div>

          {/* Watch the Journey */}
          <div className="mt-16 border-t border-border/60 pt-12">
            <h2 className="mb-6 font-serif text-2xl font-medium text-foreground md:text-3xl">
              Watch the Journey
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
                <iframe
                  src="https://www.youtube.com/embed/0cVavUr0y6A"
                  title="St. Barts Travel Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
                <iframe
                  src="https://www.youtube.com/embed/7NMgIWCP8t0"
                  title="St. Barts Travel Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-16 border-t border-border/60 pt-8">
            <Link
              href="/perspective"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Perspective
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

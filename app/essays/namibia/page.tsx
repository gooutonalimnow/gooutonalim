import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Namibia: Where the Desert Meets the Sea | Go Out On A LIM",
  description:
    "From dramatic deserts to colonial coastal towns, from wildlife encounters to surreal natural contrasts, discover Namibia's raw beauty and sense of scale.",
  keywords: [
    "Namibia travel",
    "Sossusvlei",
    "Sandwich Harbour",
    "Namib Desert",
    "Swakopmund",
    "Dead Vlei",
    "African travel",
    "desert safari",
    "Windhoek",
  ],
  openGraph: {
    title: "Namibia: Where the Desert Meets the Sea",
    description:
      "From dramatic deserts to colonial coastal towns, from wildlife encounters to surreal natural contrasts, discover Namibia's raw beauty and sense of scale.",
    url: "https://www.gooutonalim.com/essays/namibia",
    siteName: "Go Out On A LIM",
    images: [
      {
        url: "/images/essays/namibia/namibia01.jpg",
        width: 1200,
        height: 630,
        alt: "Sand dunes meeting the Atlantic Ocean at Sandwich Harbour, Namibia",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Namibia: Where the Desert Meets the Sea",
    description:
      "From dramatic deserts to colonial coastal towns, discover Namibia's raw beauty and sense of scale.",
    images: ["/images/essays/namibia/namibia01.jpg"],
  },
  alternates: {
    canonical: "https://www.gooutonalim.com/essays/namibia",
  },
}

export default function NamibiaEssayPage() {
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
            Namibia: Where the Desert Meets the Sea
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A country where silence speaks louder than noise, and landscapes stretch so far that time itself seems to slow down.
          </p>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-3xl px-6 pb-20">
          <div className="prose prose-lg prose-neutral max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-2">
            
            {/* Namibia01, 02, 03, 04 */}
            <div className="my-10 grid gap-4 grid-cols-2 md:grid-cols-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia01.jpg"
                  alt="Dramatic sand dunes meeting the Atlantic Ocean at Sandwich Harbour"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia02.jpg"
                  alt="Running down a dune at Sandwich Harbour with ocean in background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia03.jpg"
                  alt="Doing a backbend against a dead tree in Dead Vlei"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia04.jpg"
                  alt="Golden sunset silhouette of desert landscape"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              Namibia is one of those rare places that feels both vast and intimate at the same time—a country where silence speaks louder than noise, and landscapes stretch so far that time itself seems to slow down. It is, without exaggeration, one of the most visually arresting destinations in the world.
            </p>

            <p>
              From dramatic deserts to colonial coastal towns, from wildlife encounters to surreal natural contrasts, Namibia offers something that few places can: a sense of scale, solitude, and raw beauty that is almost impossible to replicate. And that&apos;s precisely why it deserves a place on any serious traveler&apos;s list.
            </p>

            {/* Namibia05, 06, 07 */}
            <div className="my-10 grid gap-4 md:grid-cols-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia05.jpg"
                  alt="Independence Memorial Museum with statue of Sam Nujoma in Windhoek"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia06.jpg"
                  alt="Fidel Castro Street sign in Windhoek with palm trees"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia07.jpg"
                  alt="Colonial building with Namibian flags - Alte Feste"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              Windhoek: A Capital That Surprises
            </h2>

            <p>
              The journey begins in Windhoek, Namibia&apos;s capital—a city that quietly defies expectations.
            </p>

            <p>
              Often described as one of the cleanest cities in Africa, Windhoek blends African identity with European influence in a way that feels both orderly and welcoming. Walking through the city, I passed by the Parliament buildings, the historic Alte Feste, and even Fidel Castro Street—a reminder of Cuba&apos;s role in supporting Namibia&apos;s independence.
            </p>

            {/* Namibia08 */}
            <div className="my-10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia08.jpg"
                  alt="Modern buildings in Windhoek with geometric architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              What struck me most, however, was the contrast. Parts of Windhoek felt so polished and modern that, at times, it reminded me of Beverly Hills—wide streets, manicured spaces, and a calm, almost understated elegance. It&apos;s not chaotic or overwhelming. Instead, it&apos;s a city that eases you into Namibia gently, before the landscapes begin to take over.
            </p>

            {/* Namibia09, 10 */}
            <div className="my-10 grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia09.jpg"
                  alt="Swakopmund lighthouse through palm trees"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia10.jpg"
                  alt="German colonial building in Swakopmund with green facade"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              Swakopmund: A Slice of Germany on the Atlantic
            </h2>

            <p>
              From Windhoek, I headed west toward the coast, eventually arriving in Swakopmund—a town that feels like a European enclave tucked between desert and ocean.
            </p>

            {/* Namibia12, 13 */}
            <div className="my-10 grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia12.jpg"
                  alt="Hansa Hotel with palm trees in Swakopmund"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia13.jpg"
                  alt="Bonus Marktplatz German colonial building in Swakopmund"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              Founded during German colonial rule, Swakopmund still carries strong German influences today. The architecture is unmistakably European, with pastel-colored buildings and colonial facades lining the streets. Even more telling is the food—where bakeries serve up perfectly crafted apple strudel and rich Black Forest cake that would feel right at home in Bavaria.
            </p>

            {/* Namibia11 */}
            <div className="my-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia11.jpg"
                  alt="German pastries - apple strudel and Black Forest cake with coffee in Swakopmund"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              But what truly defines Swakopmund is its setting.
            </p>

            <p>
              Bounded by the Atlantic Ocean on one side and the vast Namib Desert on the other, it is both a destination and a gateway—especially for those looking to explore one of Namibia&apos;s most extraordinary landscapes.
            </p>

            {/* Namibia14, 16 */}
            <div className="my-10 grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia14.jpg"
                  alt="Dunes meeting the ocean with tiny figures walking on the ridge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia16.jpg"
                  alt="Arms spread wide on the beach between dunes and ocean"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              Sandwich Harbour: Where Earth&apos;s Extremes Collide
            </h2>

            <p>
              Swakopmund serves as the perfect base for a day trip to Sandwich Harbour—one of the most surreal places I&apos;ve ever experienced.
            </p>

            {/* Namibia15 */}
            <div className="my-10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia15.jpg"
                  alt="Standing by the pink lake caused by algae and salt concentrations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              On the way, we stopped by a striking pink lake, its unusual color caused by algae and salt concentrations. It felt almost otherworldly—a quiet preview of the surreal beauty that Namibia delivers effortlessly.
            </p>

            {/* Namibia17, 18 */}
            <div className="my-10 grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia17.jpg"
                  alt="Standing on dune ridge with hat overlooking ocean"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia18.jpg"
                  alt="Selfie at Sandwich Harbour with dunes and ocean behind"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              Then came Sandwich Harbour.
            </p>

            <p>
              This is one of the few places on Earth where towering sand dunes meet the Atlantic Ocean in dramatic fashion. The experience of getting there is just as unforgettable as the destination itself.
            </p>

            {/* Namibia20 */}
            <div className="my-10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia20.jpg"
                  alt="4x4 vehicle driving between dunes and ocean at Sandwich Harbour"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              We drove along the dunes in a 4x4, navigating steep inclines and soft sand, at times hugging the narrow stretch of land between desert and sea. On one side, waves crashed against the shoreline. On the other, massive dunes rose like golden walls, sculpted by wind over millions of years.
            </p>

            {/* Namibia19 */}
            <div className="my-10">
              <div className="relative aspect-[9/16] max-w-sm mx-auto overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia19.jpg"
                  alt="Silhouette sitting on dune overlooking the ocean at sunset"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              It&apos;s hard to describe the feeling of being there. You are literally sandwiched—hence the name—between two extremes: the relentless Atlantic and the ancient desert.
            </p>

            <p>
              Moments like that remind you how small you are in the grand scheme of things.
            </p>

            {/* Namibia21 */}
            <div className="my-10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia21.jpg"
                  alt="Standing under the Tropic of Capricorn sign in the Namib Desert"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              Into the Namib Desert: Crossing the Tropic of Capricorn
            </h2>

            <p>
              Leaving Swakopmund behind, I ventured deeper into Namibia—into the heart of the Namib Desert.
            </p>

            <p>
              The journey itself was part of the experience. We passed through vast gravel plains, winding mountain passes, and remote landscapes that seemed untouched by time.
            </p>

            {/* Namibia25 */}
            <div className="my-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia25.jpg"
                  alt="Tall dune with people climbing to the top"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              Along the way, we crossed the Tropic of Capricorn, marked by a simple signpost in the middle of nowhere—a quiet but meaningful milestone in the journey southward.
            </p>

            {/* Namibia22, 23, 24 */}
            <div className="my-10 grid gap-4 md:grid-cols-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia22.jpg"
                  alt="Desert landscape at dusk with tree and mountains"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia23.jpg"
                  alt="Cheetah walking toward camera on a dirt road"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia24.jpg"
                  alt="Cheetah standing alert in tall grass"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              We also stopped at a cheetah sanctuary, a reminder that Namibia is not just about landscapes, but also about conservation and coexistence with wildlife.
            </p>

            <p>
              The desert here is not empty—it is alive in subtle, powerful ways.
            </p>

            {/* Namibia26, 27, 31 */}
            <div className="my-10 grid gap-4 md:grid-cols-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia26.jpg"
                  alt="Dune ridge from above showing footprints and desert floor below"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia27.jpg"
                  alt="Dramatic dune with footprints leading up, wind blowing sand"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia31.jpg"
                  alt="Cheetah walking away on a path with tree and mountains in background"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              Sossusvlei: The Soul of Namibia
            </h2>

            <p>
              Deep within the Namib Desert lies Sossusvlei, one of Namibia&apos;s most iconic destinations.
            </p>

            <p>
              Arriving at sunrise, the dunes revealed themselves in shifting shades of orange, red, and gold—each one casting long shadows that changed with every passing minute. Some of these dunes rise over 300 meters high, among the tallest in the world.
            </p>

            {/* Namibia28, 29, 30 */}
            <div className="my-10 grid gap-4 md:grid-cols-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia28.jpg"
                  alt="Doing a backbend against a dead tree in Dead Vlei"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia29.jpg"
                  alt="Ancient dead tree in Dead Vlei with red dunes behind"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia30.jpg"
                  alt="Selfie in front of red dunes at Sossusvlei"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              Walking through Dead Vlei, surrounded by ancient, skeletal trees that have stood for over a thousand years, felt like stepping into another dimension. The contrast between the white clay pan, blackened tree trunks, and towering red dunes creates a landscape that is almost surreal in its beauty.
            </p>

            {/* Namibia32 */}
            <div className="my-10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia32.jpg"
                  alt="Sesriem Canyon with sandy floor between rock walls"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              Nearby, Sesriem Canyon tells another story—carved over millions of years by the Tsauchab River, a reminder that even in the driest places, water once shaped everything.
            </p>

            <p>
              Namibia&apos;s desert is not just scenery—it&apos;s history, geology, and time made visible.
            </p>

            {/* Namibia33, 34 */}
            <div className="my-10 grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia33.jpg"
                  alt="Selfie in front of Sesriem Canyon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia34.jpg"
                  alt="Golden sunset silhouette of Namibian desert landscape"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              Why Namibia Is Unmissable
            </h2>

            <p>
              Namibia is not a place you visit—it&apos;s a place you experience.
            </p>

            <p>It offers:</p>

            <ul>
              <li>Landscapes you won&apos;t find anywhere else</li>
              <li>A sense of space and solitude that&apos;s increasingly rare</li>
              <li>A blend of cultures, histories, and influences</li>
              <li>Moments that feel both grounding and humbling</li>
            </ul>

            {/* Namibia35, 36 */}
            <div className="my-10 grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia35.jpg"
                  alt="Sunset with sun visible over desert landscape"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/namibia/namibia36.jpg"
                  alt="Desert landscape at dusk with tree and distant mountains"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              From the modern calm of Windhoek, to the European charm of Swakopmund, to the surreal collision of desert and ocean at Sandwich Harbour, and finally into the timeless expanse of the Namib Desert—this is a journey that stays with you.
            </p>

            <p>
              Namibia doesn&apos;t shout for attention.
            </p>

            <p>
              It doesn&apos;t overwhelm.
            </p>

            <p>
              Instead, it reveals itself slowly, quietly—and in doing so, leaves a deeper impression than almost anywhere else on Earth.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

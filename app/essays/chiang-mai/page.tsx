import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "In Search of the Perfect Khao Soi | Go Out On A LIM",
  description:
    "A Chiang Mai ritual: hunting for the perfect bowl of northern Thailand's iconic coconut curry noodle soup.",
}

export default function ChiangMaiEssayPage() {
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
            In Search of the Perfect Khao Soi: A Chiang Mai Ritual
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            If one dish defines Chiang Mai, it&apos;s Khao Soi.
          </p>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-3xl px-6 pb-20">
          <div className="prose prose-lg prose-neutral max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-2">
            <p>
              Creamy, fragrant, with just a whisper of heat, this northern Thai
              noodle soup is the very definition of comfort. At first glance, it
              looks simple: a tangle of soft egg noodles swimming in a rich,
              golden coconut curry broth, topped with tender chicken and a nest
              of crispy fried noodles. But one spoonful reveals its soul—layers
              of turmeric and curry spices, the mellow sweetness of coconut
              milk, and a perfect balance of savory, tangy, and deep, comforting
              flavors.
            </p>

            <p className="!mt-6">
              For many travelers, tasting Khao Soi in Chiang Mai becomes a
              mission. For me, it&apos;s a ritual.
            </p>

            <p>
              I find myself drawn back to this city almost every winter, lured
              by its relaxed rhythm, the cool mountain air, and what I firmly
              believe is the best food scene in Thailand. And every single time
              I return, the first thing I do is pick up the hunt for the perfect
              bowl.
            </p>

            {/* Images: CM9 and CM8 */}
            <div className="my-10 grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/chiang-mai/cm9.jpg"
                  alt="Enjoying Khao Soi noodles at a street stall in Chiang Mai"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/chiang-mai/cm8.jpg"
                  alt="A bowl of Khao Soi with crispy noodles and rich coconut curry broth"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              What Makes Khao Soi So Special
            </h2>

            <p>
              Khao Soi stands apart in the world of Thai cuisine. It&apos;s not
              the bright, fiery curry of the south. Instead, it tells a story of
              northern Thailand&apos;s history, a delicious fusion born from
              ancient trade routes. The dish likely evolved from the culinary
              traditions of Burmese and Chinese Muslim traders who traveled
              through the region centuries ago.
            </p>

            <p>
              The result is a beautiful collision of cultures in a single bowl:
            </p>

            <ul>
              <li>A luscious coconut curry broth, spiced and fragrant</li>
              <li>Soft, silky egg noodles</li>
              <li>A crown of crispy fried noodles for texture</li>
              <li>
                A side plate of pickled mustard greens, shallots, lime, and
                chili oil, so each person can customize every single bite
              </li>
            </ul>

            <p>
              It&apos;s messy, it&apos;s rich, it&apos;s deeply
              satisfying—and it is unmistakably, gloriously northern Thai.
            </p>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              Khao Soi Lung Prakit Kad Kom: The One That Got Famous
            </h2>

            <p>
              No search is complete without a pilgrimage to Khao Soi Lung Prakit
              Kad Kom. This humble spot gained international fame after a
              feature on a Netflix food documentary, and today, it&apos;s
              arguably the city&apos;s most famous Khao Soi destination.
            </p>

            <p>
              Despite the fame, the setting remains wonderfully unpretentious.
              You&apos;ll find plastic stools, basic tables, and a constant
              stream of people—locals and travelers alike—all here for what many
              believe is the city&apos;s definitive bowl.
            </p>

            <p>
              The broth is deep and complex, a perfect symphony of coconut milk
              and spices. The chicken is fall-apart tender, the crispy noodles
              add that essential crunch, and the array of condiments lets you
              dial in the flavor to your exact preference. One taste, and you
              instantly understand why this place became a legend.
            </p>

            {/* Images: CM1 and CM2 */}
            <div className="my-10 grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/chiang-mai/cm1.jpg"
                  alt="Khao Soi at Lung Prakit Kad Kom with condiments"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/chiang-mai/cm2.jpg"
                  alt="The famous Khao Soi Lung Prakit Kad Kom storefront with customers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              The Hole-in-the-Wall That&apos;s Gone by 10 AM
            </h2>

            <p>
              But Chiang Mai&apos;s real magic isn&apos;t always found in the
              famous spots. It&apos;s in the tiny, unassuming stalls that locals
              have quietly cherished for years.
            </p>

            <p>
              One such place sits right next to Wat Pan Whaen, a temple tucked
              away from the main thoroughfares. It doesn&apos;t have a proper
              name—just a small kitchen, a few plastic stools, and one woman
              calmly cooking bowl after bowl.
            </p>

            <p>
              She opens at 8 AM sharp. And by 10 AM, it&apos;s all over.
            </p>

            <p>
              The locals know this, so a line forms before she even starts
              serving. When the last noodle is gone, she puts up a small,
              hand-written sign. It reads: &quot;I am finish.&quot;
            </p>

            <p>It&apos;s equal parts charming and heartbreaking.</p>

            <p>
              But here&apos;s a tip I&apos;ve learned: even if the sign is up,
              it&apos;s worth politely asking—in Thai, if you can—if there might
              possibly be one bowl left. Sometimes, just sometimes, there is.
            </p>

            <p>
              And on those lucky mornings, you might just have one of the most
              memorable bowls of your life.
            </p>

            {/* Images: CM4 and CM3 */}
            <div className="my-10 grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/chiang-mai/cm4.jpg"
                  alt="The 'Sorry! I'm finish' sign at the hole-in-the-wall Khao Soi spot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/chiang-mai/cm3.jpg"
                  alt="An elevated Khao Soi presentation in a turquoise bowl"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">
              Why Chiang Mai Is the Perfect Food City
            </h2>

            <p>
              Part of what makes the Khao Soi quest so special is the setting
              itself. Chiang Mai is one of Southeast Asia&apos;s most enchanting
              cities. The pace is slower than Bangkok&apos;s, the winter air is
              crisp and cool, and the food culture feels profoundly local and
              authentic.
            </p>

            <p>
              Morning markets buzz with vendors preparing fresh noodles and
              fragrant curries. As evening falls, street stalls fill the air
              with the smoky scent of grilled meats and spices. And tucked away
              between ancient temples and quiet lanes are tiny restaurants
              serving recipes that have remained unchanged for decades.
            </p>

            <p>
              Khao Soi sits right at the heart of this landscape. It&apos;s a
              dish that reflects the city itself—steeped in history, shaped by
              many cultures, and quietly, deeply unforgettable.
            </p>

            {/* Images: CM5 and CM6 */}
            <div className="my-10 grid gap-4 md:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/chiang-mai/cm5.jpg"
                  alt="Chiang Mai night market with glowing lanterns overhead"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/chiang-mai/cm6.jpg"
                  alt="Ornate Thai temple with golden decorations and guardian statues"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="!mb-6 !mt-12 !text-2xl md:!text-3xl">The Joy of the Hunt</h2>

            <p>
              Every great city has its signature dish. In Chiang Mai, it&apos;s
              Khao Soi.
            </p>

            <p>
              And while there are countless places to try it, the real joy lies
              in the search. It&apos;s in wandering through morning markets,
              following a tip from a local, and discovering a tiny kitchen where
              the broth has been simmering since dawn.
            </p>

            <p>Some bowls are world-famous. Others are hidden secrets.</p>

            <p>
              But each one tells a small story about this city. And in Chiang
              Mai, those stories are always, always worth tasting.
            </p>

            {/* Final image: CM7 */}
            <div className="my-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/essays/chiang-mai/cm7.jpg"
                  alt="A white Buddhist stupa with golden spire in Chiang Mai"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Watch the Journey */}
            <div className="mt-16 border-t border-border/60 pt-12">
              <h2 className="!mb-6 !mt-0 !text-2xl md:!text-3xl">
                Watch the Journey
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
                  <iframe
                    src="https://www.youtube.com/embed/j_gJ--52gyU"
                    title="Chiang Mai Khao Soi Video 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
                  <iframe
                    src="https://www.youtube.com/embed/iXiL6gk03lQ"
                    title="Chiang Mai Khao Soi Video 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
                  <iframe
                    src="https://www.youtube.com/embed/PrmyJo47ixE"
                    title="Chiang Mai Khao Soi Video 3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

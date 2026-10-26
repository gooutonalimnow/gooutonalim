import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function PressFeature() {
  return (
    <section className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Spotted in the Press
        </p>
        <div className="mt-10 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <article className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:block">
            <div>
              <h2 className="max-w-xl text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Featured in The Wall Street Journal
              </h2>
              <p className="mt-5 max-w-lg text-pretty leading-relaxed text-primary-foreground/75">
                Andrew Lim&apos;s collection of airline amenity kits is featured in the October 13, 2026 edition of The Wall Street Journal.
              </p>
              <p className="mt-4 text-sm text-primary-foreground/60">
                The Wall Street Journal · October 13, 2026
              </p>
              <a href="https://www.wsj.com/lifestyle/travel/first-class-amenity-kits-have-become-holy-grail-collectibles-adfbb1a0?st=jcTGLt&reflink=desktopwebshare_permalink" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-medium transition-colors hover:text-accent">
                Read the article <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 lg:mt-10">
              <Image src="/images/press/wsj-front-page.jpg" alt="The Wall Street Journal front page featuring the amenity kit collection story" width={1200} height={1600} className="col-span-2 h-auto max-h-[24rem] w-full rounded-sm object-cover object-top" />
              <Image src="/images/press/wsj-feature-spread.jpg" alt="Inside the Wall Street Journal feature showing the amenity kit collection" width={1200} height={1600} className="h-64 w-full rounded-sm object-cover" />
              <Image src="/images/press/wsj-portrait.jpg" alt="Andrew Lim holding the Wall Street Journal feature" width={1200} height={1600} className="h-64 w-full rounded-sm object-cover" />
            </div>
          </article>

          <article className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:block">
            <div>
              <h2 className="max-w-xl text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Featured in Wine Enthusiast
              </h2>
              <p className="mt-5 max-w-lg text-pretty leading-relaxed text-primary-foreground/75">
                Andrew Lim shares his perspective on the extraordinary scale of Mileștii Mici, Moldova&apos;s legendary underground wine cellar.
              </p>
              <p className="mt-4 text-sm text-primary-foreground/60">
                Wine Enthusiast · Travel
              </p>
              <a href="https://www.wineenthusiast.com/culture/travel/milestii-mici-cellar/?srsltid=AYCX9vIw_01egUZCkA-MJ1NwoDBAhL-MP8SrdN8hZwZch1krTZmmd4K9" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-medium transition-colors hover:text-accent">
                Read the article <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <figure className="mt-8 overflow-hidden rounded-sm bg-primary-foreground/10 lg:mt-10">
              <Image src="/images/press/wine-enthusiast-excerpt.jpg" alt="Wine Enthusiast article excerpt featuring Andrew Lim discussing Mileștii Mici" width={1200} height={1600} className="h-auto max-h-[38rem] w-full object-cover object-top" />
            </figure>
          </article>

          <article className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:block">
            <div>
              <h2 className="max-w-xl text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Featured in Exame
              </h2>
              <p className="mt-5 max-w-lg text-pretty leading-relaxed text-primary-foreground/75">
                Exame highlights Andrew Lim&apos;s collection of nearly 200 airline amenity kits gathered across more than 3 million miles of flying.
              </p>
              <p className="mt-4 text-sm text-primary-foreground/60">
                Exame · Brasil · Português
              </p>
              <a href="https://exame.com/casual/os-kits-de-aviao-que-viraram-objeto-de-colecao" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-medium transition-colors hover:text-accent">
                Ler a matéria <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <figure className="mt-8 overflow-hidden rounded-sm bg-primary-foreground/10 lg:mt-10">
              <Image src="/images/press/exame-excerpt.jpg" alt="Exame article excerpt about Andrew Lim&apos;s airline amenity kit collection" width={1200} height={1600} className="h-auto max-h-[38rem] w-full object-cover object-top" />
            </figure>
          </article>
        </div>
      </div>
    </section>
  )
}

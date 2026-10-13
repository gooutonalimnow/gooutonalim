import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function PressFeature() {
  return (
    <section className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16 md:py-28">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Spotted in the Press
          </p>
          <h2 className="mt-4 max-w-xl text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Featured in The Wall Street Journal
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-primary-foreground/75">
            Andrew Lim&apos;s collection of airline amenity kits is featured in the October 13, 2026 edition of The Wall Street Journal.
          </p>
          <p className="mt-4 text-sm text-primary-foreground/60">
            The Wall Street Journal · October 13, 2026
          </p>
          <a
            href="https://www.wsj.com/lifestyle/travel/first-class-amenity-kits-have-become-holy-grail-collectibles-adfbb1a0?st=jcTGLt&reflink=desktopwebshare_permalink"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-medium text-primary-foreground transition-colors hover:text-accent"
          >
            Read the article
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <figure className="col-span-2 overflow-hidden rounded-sm bg-primary-foreground/10">
            <Image
              src="/images/press/wsj-front-page.jpg"
              alt="The Wall Street Journal front page featuring the amenity kit collection story"
              width={1200}
              height={1600}
              className="h-auto max-h-[32rem] w-full object-cover object-top"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm bg-primary-foreground/10">
            <Image
              src="/images/press/wsj-feature-spread.jpg"
              alt="Inside the Wall Street Journal feature showing the amenity kit collection"
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm bg-primary-foreground/10">
            <Image
              src="/images/press/wsj-portrait.jpg"
              alt="Andrew Lim holding the Wall Street Journal feature"
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

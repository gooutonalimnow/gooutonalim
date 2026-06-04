import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"

export function Introduction() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-5 md:items-center">
        {/* Video */}
        <div className="relative aspect-[3/4] overflow-hidden md:col-span-2">
          <VideoPlayer src="/videos/about-video.mp4" />
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-6 md:col-span-3">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            Travel guided by experience, not algorithms.
          </h2>
          <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Hi! I&apos;m Andrew Lim.
            </p>
            <p>
              I&apos;ve visited{" "}
              <Link
                href="/where-ive-been"
                className="font-medium text-accent underline underline-offset-2 transition-colors hover:text-accent/80"
              >
                128 countries
              </Link>
              , flown over 2.8 million miles, and spent decades learning how
              travel actually feels — not just how it looks on paper.
            </p>
            <p>
              I&apos;m not a travel agent, and I&apos;m not an influencer
              chasing destinations. I approach travel the same way I approach
              strategy: understanding tradeoffs, knowing when to optimize, and
              knowing when to stop.
            </p>
            <p>
              Over the years, I&apos;ve learned that the best trips aren&apos;t
              about doing more — they&apos;re about doing the right things.
              Choosing the right flight. The right neighborhood. The right pace.
              And leaving room for what can&apos;t be planned.
            </p>
            <p>
              Through Go Out On A LIM, I help travelers make smarter decisions —
              whether that&apos;s a single flight choice or a fully curated
              journey. My focus is on comfort, food, efficiency, and perspective
              — travel that enhances life rather than exhausting it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

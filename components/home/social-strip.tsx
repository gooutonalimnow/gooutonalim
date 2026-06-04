import { Youtube, Instagram } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

const channels = [
  {
    label: "YouTube",
    handle: "@go-outonalim",
    href: "https://www.youtube.com/@go-outonalim",
    description: "Full travel guides, food tours, and honest destination reviews.",
    icon: Youtube,
  },
  {
    label: "Instagram",
    handle: "@go.out.on.a.lim",
    href: "https://www.instagram.com/go.out.on.a.lim/",
    description: "Behind-the-scenes moments, food finds, and travel snapshots.",
    icon: Instagram,
  },
  {
    label: "TikTok",
    handle: "@go.out.on.a.lim",
    href: "https://www.tiktok.com/@go.out.on.a.lim",
    description: "Quick takes, food clips, and travel tips in 60 seconds.",
    icon: TikTokIcon,
  },
]

export function SocialStrip() {
  return (
    <section className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Follow the journey
        </p>
        <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight md:text-4xl">
          More ways to travel along
        </h2>
        <p className="mt-3 max-w-lg text-pretty text-muted-foreground">
          New content every week across platforms — from in-depth YouTube guides
          to quick bites on TikTok.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-md border border-border/60 bg-background p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <channel.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {channel.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {channel.handle}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {channel.description}
              </p>
              <span className="mt-auto text-sm font-medium text-accent transition-colors group-hover:text-foreground">
                Follow &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

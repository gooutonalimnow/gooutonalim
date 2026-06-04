import { Youtube } from "lucide-react"

const featuredVideos = [
  {
    title: "Come Take The United's Legendary Island Hopper Flight Across Micronesia with Me",
    videoId: "nDmKvv8VG4I",
  },
  {
    title: "Come Taste The Amazing French Dishes at The Legendary Paul Bocuse Restaurant in Lyon with Me",
    videoId: "7sjZDRcHzow",
  },
  {
    title: "Come Fly The Roomiest First Suite on Singapore Airlines with Me",
    videoId: "gSXj8VfCZrY",
  },
  {
    title: "Exploring Hidden Gems Around the World",
    videoId: "VnU1H1zgKvw",
  },
  {
    title: "A Culinary Journey Through Local Markets",
    videoId: "lLjG3MnH90Q",
  },
  {
    title: "Adventures Off the Beaten Path",
    videoId: "QNj9nO22OlQ",
  },
  {
    title: "A Journey Worth Remembering",
    videoId: "YmijYwxeenA",
  },
  {
    title: "Unforgettable Moments on the Road",
    videoId: "jQI39SCpVvI",
  },
  {
    title: "Discovering New Horizons",
    videoId: "8Fc8TP05Wfs",
  },
]

export function YouTubeShowcase() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              From the Channel
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight md:text-4xl">
              Watch the journeys unfold
            </h2>
            <p className="mt-3 max-w-lg text-pretty text-muted-foreground">
              Short-form stories, food guides, and honest travel takes — filmed
              on location across the world.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@go-outonalim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            <Youtube className="h-4 w-4" />
            View full channel
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVideos.map((video) => (
            <div key={video.title} className="flex flex-col gap-3">
              <div className="relative aspect-video overflow-hidden rounded-md bg-primary/5">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

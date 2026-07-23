import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function EssaySignoff() {
  return (
    <section className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-16 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Go Out On A LIM
        </p>
        <p className="font-serif text-2xl font-medium leading-tight text-foreground md:text-3xl text-balance">
          Travel, Beyond The Algorithm
        </p>
        <Link
          href="/perspective"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          Watch the journeys unfold
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

import { Globe, Plane, Award, Armchair } from "lucide-react"

const stats = [
  { icon: Globe, label: "Countries visited", value: "130" },
  { icon: Plane, label: "Miles flown", value: "2.8M" },
  { icon: Award, label: "United Airlines & Marriott Bonvoy Hotel", value: "Lifetime Platinum Members" },
  { icon: Armchair, label: "Travel focus", value: "Business & Premium" },
]

export function ProofStrip() {
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <stat.icon className="h-8 w-8 text-accent" />
            <p className="font-serif text-xl font-medium text-foreground md:text-2xl">
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

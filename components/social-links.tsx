import { Youtube, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

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

const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@go-outonalim",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/go.out.on.a.lim/",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@go.out.on.a.lim",
    icon: TikTokIcon,
  },
]

export function SocialLinks({
  size = "default",
  className,
}: {
  size?: "default" | "lg"
  className?: string
}) {
  const iconSize = size === "lg" ? "h-5 w-5" : "h-4 w-4"

  return (
    <ul className={cn("flex items-center gap-4", className)} aria-label="Social media links">
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-muted-foreground transition-colors hover:text-accent"
            aria-label={`Follow on ${social.label}`}
          >
            <social.icon className={iconSize} />
          </a>
        </li>
      ))}
    </ul>
  )
}

import Link from "next/link"
import { SocialLinks } from "@/components/social-links"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-foreground">Go Out On A LIM</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Travel, Beyond The Algorithm.
            </p>
            <a 
              href="mailto:gooutonalimnow@gmail.com" 
              className="mt-2 block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              gooutonalimnow@gmail.com
            </a>
          </div>

          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="transition-colors hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/perspective" className="transition-colors hover:text-foreground">
                  Perspective
                </Link>
              </li>
              <li>
                <Link href="/work-with-me" className="transition-colors hover:text-foreground">
                  Work With Me
                </Link>
              </li>
            </ul>
          </nav>

          <SocialLinks size="lg" />
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Go Out On A LIM. All rights reserved.
      </div>
    </footer>
  )
}

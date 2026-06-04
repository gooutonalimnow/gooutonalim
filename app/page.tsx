import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { ProofStrip } from "@/components/home/proof-strip"
import { WhoFor } from "@/components/home/who-for"
import { HowHelp } from "@/components/home/how-help"
import { Introduction } from "@/components/home/introduction"
import { SocialStrip } from "@/components/home/social-strip"
import { ContactCta } from "@/components/home/contact-cta"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProofStrip />
        <WhoFor />
        <Introduction />
        <HowHelp />
        <SocialStrip />
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}

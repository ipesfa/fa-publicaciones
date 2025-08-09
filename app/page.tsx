import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ChoiceCards } from "@/components/choice-cards"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-sage-primary">
      <SiteHeader />
      <main>
        <Hero />
        <ChoiceCards />
      </main>
      <Footer />
    </div>
  )
}

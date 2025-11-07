import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ScheduleSection } from "@/components/schedule-section"
import { SpeakersSection } from "@/components/speakers-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SpeakersSection />
        <ScheduleSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

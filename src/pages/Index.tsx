import { BirthdayHero } from "@/components/BirthdayHero";
import { MessageSection } from "@/components/MessageSection";
import { FloatingHearts } from "@/components/FloatingHearts";
import { WishesSection } from "@/components/WishesSection";
import { Footer } from "@/components/Footer";
import { Confetti } from "@/components/Confetti";
import { BackgroundMusic } from "@/components/BackgroundMusic";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundMusic />
      <Confetti />
      <FloatingHearts />
      <BirthdayHero />
      <MessageSection />
      <WishesSection />
      <Footer />
    </div>
  )
}

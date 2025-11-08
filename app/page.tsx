import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Showcase } from "@/components/showcase";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden z-10">
      {/* Background gradient effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-secondary/15 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/3 w-[28rem] h-[28rem] bg-accent/15 rounded-full blur-[128px] animate-pulse-glow" />
      </div>

      <Hero />
      <Showcase />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

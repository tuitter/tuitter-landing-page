"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { SignupDialog } from "@/components/signup-dialog";
import { useState, useEffect } from "react";

export function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // hide indicator when user scrolls away from top
      setHasScrolled(window.scrollY > 0);
    };

    // check initial position (in case page is loaded scrolled)
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLearnMore = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 animate-slide-up">
        {/* Floating terminal icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card border border-primary/30 mb-8 mt-4 animate-float">
          <Terminal className="w-10 h-10 text-primary" />
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-balance">
          tuitter
        </h1>

        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          social, simplified.
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
          a social platform that lives purely inside your terminal. powerful,
          minimal, and beautifully different.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 mb-20">
          <Button
            size="lg"
            onClick={() => setDialogOpen(true)}
            className="cursor-pointer text-lg px-8 py-6 bg-linear-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
          >
            be a tester
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleLearnMore}
            className="cursor-pointer text-lg px-8 py-6 border-muted-foreground/30 hover:border-primary/50 hover:bg-card/50 bg-transparent hover:text-white"
          >
            learn more
          </Button>
        </div>
      </div>

      {/* Scroll indicator: fades and stops animating once the user starts scrolling */}
      <div
        aria-hidden
        className={
          `absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none bottom-8 sm:bottom-4 transition-all duration-500 ` +
          (hasScrolled
            ? "opacity-0 translate-y-4 animate-none"
            : "opacity-100 animate-bounce")
        }
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2 bg-transparent">
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>

      <SignupDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
}

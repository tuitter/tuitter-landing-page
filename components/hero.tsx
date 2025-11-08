"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { SignupDialog } from "@/components/signup-dialog";
import { useState } from "react";

export function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);

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
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card border border-primary/30 mb-8 animate-float">
          <Terminal className="w-10 h-10 text-primary" />
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-balance">
          Tuitter —{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Social, Simplified.
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
          A creative social platform that lives inside your terminal — powerful,
          minimal, and beautifully different.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button
            size="lg"
            onClick={() => setDialogOpen(true)}
            className="cursor-pointer text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
          >
            Sign Up Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleLearnMore}
            className="cursor-pointer text-lg px-8 py-6 border-muted-foreground/30 hover:border-primary/50 hover:bg-card/50 bg-transparent hover:text-white"
          >
            Learn More
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          No ads. No noise. Just clean, mindful connection.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>

      <SignupDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
}

"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SignupDialog } from "@/components/signup-dialog"
import { useState } from "react"

export function CTA() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-balance">
          Join the New Era of{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Digital Expression
          </span>
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Minimal. Secure. Beautiful. All from your terminal.
        </p>

        <div className="pt-8">
          <Button
            size="lg"
            onClick={() => setDialogOpen(true)}
            className="cursor-pointer text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-all duration-300 shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
          >
            Sign Up Free
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground pt-8">Free forever. No credit card required.</p>
      </div>

      <SignupDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}

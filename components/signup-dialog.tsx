"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addToWaitlist } from "@/app/actions"

interface SignupDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SignupDialog({ open, onOpenChange }: SignupDialogProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    const result = await addToWaitlist(email)

    setIsLoading(false)
    setMessage({
      type: result.success ? "success" : "error",
      text: result.message,
    })

    if (result.success) {
      setEmail("")
      setTimeout(() => {
        onOpenChange(false)
        setMessage(null)
      }, 2000)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background border-purple/20">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-foreground">Join the Waitlist</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Be the first to experience the terminal-based social network.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background/50 border-purple/20 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          {message && (
            <p className={`text-sm ${message.type === "success" ? "text-green" : "text-red"}`}>{message.text}</p>
          )}
          <Button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer w-full bg-[#ff79c6] hover:bg-[#ff92d0] text-[#282a36] font-semibold py-6 text-base rounded-lg transition-colors"
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

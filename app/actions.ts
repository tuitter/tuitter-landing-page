"use server"

import { createClient } from "@/lib/supabase/server"

export async function addToWaitlist(email: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("waitlist").insert({ email })

  if (error) {
    // Handle duplicate email error
    if (error.code === "23505") {
      return { success: false, message: "This email is already on the waitlist!" }
    }
    return { success: false, message: "Something went wrong. Please try again." }
  }

  return { success: true, message: "You're on the waitlist! We'll be in touch soon." }
}

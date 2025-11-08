import { Card, CardContent } from "@/components/ui/card"
import { Zap, Focus, Sparkles, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Posting",
    description: "Share your thoughts, images, and ASCII art directly — no distractions, just expression.",
  },
  {
    icon: Focus,
    title: "Simple by Design",
    description: "No ads. No noise. Just clean, mindful connection that keeps you in control.",
  },
  {
    icon: Sparkles,
    title: "Creativity in Every Line",
    description: "Turn visuals into living text art that speaks louder than pixels.",
  },
  {
    icon: Shield,
    title: "Powered by Modern Tech",
    description: "Built on Python, FastAPI, and AWS for security, speed, and reliability.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            What Makes Tuitter Unique
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience social media without the complexity
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

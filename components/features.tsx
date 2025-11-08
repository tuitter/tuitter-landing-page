import { Card, CardContent } from "@/components/ui/card";
import { Zap, Focus, Sparkles, Shield, Terminal } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "terminal-first tui",
    description:
      "built around a keyboard-first terminal user interface (tui), with minimal chrome, powerful shortcuts, and accessible from your terminal.",
  },
  {
    icon: Zap,
    title: "instant posting",
    description:
      "share your thoughts, images, and ascii art directly; no distractions, just expression.",
  },
  {
    icon: Focus,
    title: "simple by design",
    description:
      "no ads. no noise. just clean, mindful connection that keeps you in control.",
  },
  {
    icon: Sparkles,
    title: "creativity in every line",
    description:
      "turn visuals into living text art that speaks louder than pixels.",
  },
  {
    icon: Shield,
    title: "powered by modern tech",
    description:
      "built on python, fastapi, and aws for security, speed, and reliability.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            what makes tuitter unique
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            experience social media without the complexity
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr items-stretch">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

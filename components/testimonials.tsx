import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "beautifully simple. a breath of fresh air in social media.",
    author: "creative technologist",
  },
  {
    text: "it feels calm, private, and genuinely expressive.",
    author: "designer & writer",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance">
              built for everyone,{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                loved by developers
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              tuitter helps merge human connection with developer-grade
              performance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/30 backdrop-blur-sm border-muted hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-10 space-y-6">
                <Quote className="w-10 h-10 text-primary/40" />
                <p className="text-xl leading-relaxed text-foreground">
                  {testimonial.text}
                </p>
                <p className="text-sm text-muted-foreground">
                  — {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

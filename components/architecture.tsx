import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Lock, Zap } from "lucide-react";

const techStack = [
  { icon: Code2, label: "frontend", value: "python textual" },
  { icon: Zap, label: "backend", value: "fastapi on aws lambda" },
  { icon: Database, label: "database", value: "postgres (rds)" },
  { icon: Lock, label: "auth", value: "aws cognito" },
];

export function Architecture() {
  return (
    <section className="py-32 px-4 relative">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <Card
              key={index}
              className="bg-card/40 backdrop-blur-sm border-muted hover:border-accent/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <tech.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {tech.label}
                  </div>
                  <div className="font-semibold mt-1">{tech.value}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card"
import { Brain, Shield, Zap, Target, Clock, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Task Prioritization",
    description:
      "Smart algorithms analyze your workload and automatically prioritize tasks based on urgency, importance, and your work patterns.",
  },
  {
    icon: Clock,
    title: "Intelligent Time Blocking",
    description:
      "AI-powered scheduling that adapts to your energy levels and creates optimal focus blocks throughout your day.",
  },
  {
    icon: Shield,
    title: "Distraction Blocking",
    description:
      "Advanced focus mode that blocks distracting websites and notifications, keeping you in your flow state.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description:
      "Set meaningful goals and track your progress with detailed analytics and insights into your productivity patterns.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Comprehensive reports showing your most productive hours, focus trends, and areas for improvement.",
  },
  {
    icon: Zap,
    title: "Quick Capture",
    description:
      "Instantly capture ideas and tasks with keyboard shortcuts and voice input, then let AI organize them for you.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to focus
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Powerful features designed to help you achieve deep work and maximize productivity.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="
    group border border-border bg-card p-6 
    transition-all duration-300
    hover:bg-accent/10 
    hover:border-accent 
    hover:shadow-lg 
    hover:scale-[1.03]
  "
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
            </Card>

          ))}
        </div>
      </div>
    </section>
  )
}

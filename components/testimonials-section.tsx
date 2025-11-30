import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    company: "TechCorp",
    image: "/professional-woman-diverse.png",
    content:
      "FlowState completely transformed how I work. I've never been more focused and productive. The AI time blocking is a game-changer.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Software Engineer",
    company: "StartupXYZ",
    image: "/professional-man.jpg",
    content:
      "As a developer, staying focused is crucial. FlowState helps me maintain deep focus for hours. My output has increased by 40%.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Content Creator",
    company: "Independent",
    image: "/creative-woman.png",
    content:
      "The distraction blocking feature is incredible. I can finally finish projects without getting sidetracked. Highly recommended!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by focused professionals
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Join thousands of people who have transformed their productivity with FlowState.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border bg-card p-6">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="mb-6 leading-relaxed text-card-foreground">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

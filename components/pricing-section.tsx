"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for trying out FlowState",
    features: [
      "Basic task management",
      "Manual time blocking",
      "Simple analytics",
      "Mobile app access",
      "Email support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "12",
    description: "For professionals who want more",
    features: [
      "Everything in Starter",
      "AI task prioritization",
      "Intelligent time blocking",
      "Advanced analytics",
      "Distraction blocking",
      "Priority support",
      "Calendar integrations",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "29",
    description: "For teams that need collaboration",
    features: [
      "Everything in Pro",
      "Team workspace",
      "Shared goals & projects",
      "Team analytics dashboard",
      "Admin controls",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  // 👉 Default selected = "Pro"
  const [selectedPlan, setSelectedPlan] = useState("Pro")

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName)
    toast({
      title: "Plan Selected",
      description: `${planName} plan has been selected!`,
    })
  }

  return (
    <section id="pricing" className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that works best for you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              onClick={() => handleSelectPlan(plan.name)}
              className={`
                relative cursor-pointer border p-8 transition-all 
                hover:shadow-lg

                ${
                  selectedPlan === plan.name
                    ? "border-accent ring-2 ring-accent shadow-xl"
                    : "border-border"
                }
              `}
            >
              {/* Show MOST POPULAR ONLY when this plan is selected */}
               {plan.popular && selectedPlan === plan.name && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <Button className="mb-6 w-full rounded-full">
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

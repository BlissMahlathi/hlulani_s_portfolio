import React from "react";
import { Calendar, FileText, Layout, Code, Rocket } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description:
      "We start with a short call to learn about your goals, timeline, and constraints.",
    icon: Calendar,
  },
  {
    title: "Discovery & Proposal",
    description:
      "I propose a scoped plan with priorities, timelines and pricing that align with your goals.",
    icon: FileText,
  },
  {
    title: "Design & Architecture",
    description:
      "User-first design and resilient system architecture to support growth and security.",
    icon: Layout,
  },
  {
    title: "Build & QA",
    description:
      "Iterative development with tests, reviews and continuous deployment to keep things predictable.",
    icon: Code,
  },
  {
    title: "Launch & Support",
    description:
      "A supported launch and transfer to your team, plus optional ongoing maintenance.",
    icon: Rocket,
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            My <span className="text-space-accent">Process</span>
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto mt-2">
            A simple, predictable process that reduces risk and delivers value
            fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon as React.ElementType;
            return (
              <div key={step.title} className="glass p-6 rounded-lg glass-card">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="rounded-full bg-white/5 p-2 text-space-accent">
                    <Icon size={18} />
                  </div>
                  <h4 className="font-semibold">
                    {i + 1}. {step.title}
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;

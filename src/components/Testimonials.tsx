import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Hlulani helped us rebuild our web platform — the result was a noticeably faster app and improved conversion rates. Professional and detail-oriented.",
    name: "Client Name",
    position: "Founder, Example Co.",
  },
  {
    quote:
      "He designed and implemented a secure backend that reduced our downtime and simplified maintenance. Great communication and delivered on schedule.",
    name: "Client Name",
    position: "Product Lead, Startup Inc.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Trusted by <span className="text-space-accent">clients</span>
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto mt-2">
            Real results, delivered — replace the placeholders with real
            testimonials and company logos for maximum effect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass p-6 rounded-lg glass-card">
              <div className="flex items-center mb-3">
                <div className="flex items-center space-x-1 text-yellow-400 mr-3">
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                </div>
                <div className="text-sm text-gray-400">{t.position}</div>
              </div>
              <p className="text-gray-300 mb-4">"{t.quote}"</p>
              <div className="font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

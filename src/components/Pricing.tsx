import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingCard = ({ 
  title, 
  priceRange,
  description, 
  features, 
  popular = false,
  ctaText = "Get Started",
  completionTime
}: { 
  title: string; 
  priceRange: string;
  description: string; 
  features: string[];
  popular?: boolean;
  ctaText?: string;
  completionTime: string;
}) => {
  return (
    <Card className={`appear-animation cosmic-border h-full flex flex-col ${popular ? 'relative shadow-lg shadow-space-accent/20 border-space-accent/50' : 'glass'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-space-accent text-white px-3 py-1 text-xs font-semibold">Most Popular</Badge>
        </div>
      )}
      <CardHeader className={`text-center ${popular ? 'pt-6' : ''}`}>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-400 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-center mb-6">
          <span className="text-4xl font-bold">{priceRange}</span>
          {!priceRange.includes("Starting") && <span className="text-gray-400 ml-1">ZAR</span>}
        </div>
        <ul className="space-y-3 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-space-accent mr-2 mt-1"><Check size={16} /></span>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="text-sm text-gray-400 mt-4">
          <span className="font-medium">Estimated completion:</span> {completionTime}
        </div>
      </CardContent>
      <CardFooter>
        <a href="#contact" className="w-full">
          <Button className={`w-full ${popular ? 'bg-space-accent hover:bg-space-accent/90' : 'glass hover:bg-white/10'}`}>
            {ctaText}
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 appear-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            Transparent <span className="text-space-accent">Pricing</span>
            <span className="block h-1 w-1/3 bg-space-accent mt-2 mx-auto"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Affordable web solutions with clear pricing. No hidden costs - just professional websites at fair prices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <PricingCard 
            title="Starter" 
            priceRange="R2000 – R3500"
            description="Ideal for individuals or small businesses needing an online presence"
            features={[
              "1–3 Pages (Home, About, Contact)",
              "Mobile-friendly design",
              "Contact form",
              "Social media links",
              "Basic SEO setup"
            ]}
            completionTime="3–5 days"
          />
          
          <PricingCard 
            title="Standard" 
            priceRange="R3600 – R5000"
            description="Perfect for growing businesses needing more functionality"
            popular={true}
            features={[
              "4–6 Pages",
              "Custom design",
              "Blog/News section",
              "Booking/contact forms",
              "Google Maps integration",
              "Enhanced SEO"
            ]}
            completionTime="5–7 days"
          />
          
          <PricingCard 
            title="Advanced" 
            priceRange="R5000 – R7500"
            description="Designed for businesses needing dynamic features"
            features={[
              "7–10 Pages",
              "User registration/login",
              "Image galleries",
              "WhatsApp/Live chat",
              "Newsletter setup",
              "Basic CMS for self-editing"
            ]}
            completionTime="7–10 days"
          />
          
          <PricingCard 
            title="Premium" 
            priceRange="R8000 – R12000"
            description="For businesses ready to scale"
            features={[
              "10+ Pages",
              "E-commerce functionality",
              "Product management",
              "Secure online payments",
              "Admin dashboard (optional)",
              "Advanced analytics"
            ]}
            completionTime="10–15 days"
          />
          
          <PricingCard 
            title="Custom Solutions" 
            priceRange="Starting from R12,000+"
            description="Tailored systems built to your exact requirements"
            ctaText="Get a Quote"
            features={[
              "Web apps / Booking systems",
              "Multi-vendor e-commerce",
              "Membership platforms",
              "CRM integrations",
              "API development",
              "Custom dashboards"
            ]}
            completionTime="Consultation required"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;


import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false,
  ctaText = "Get Started"
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[];
  popular?: boolean;
  ctaText?: string;
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
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-gray-400 ml-1">/project</span>}
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-space-accent mr-2 mt-1"><Check size={16} /></span>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
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
            Pricing <span className="text-space-accent">Plans</span>
            <span className="block h-1 w-1/3 bg-space-accent mt-2 mx-auto"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Competitive pricing with rates 40% below market average. Choose the package that fits your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PricingCard 
            title="Basic" 
            price="R3,000"
            description="Simple websites with essential features"
            features={[
              "Up to 5 pages",
              "Responsive design",
              "Contact form",
              "Basic SEO setup",
              "1 month support",
              "Domain setup"
            ]}
          />
          
          <PricingCard 
            title="Pro" 
            price="R6,000"
            description="Advanced websites for small businesses"
            popular={true}
            features={[
              "Up to 10 pages",
              "Responsive design",
              "Custom forms",
              "Enhanced SEO package",
              "3 months support",
              "CMS integration",
              "Analytics integration"
            ]}
          />
          
          <PricingCard 
            title="Premium" 
            price="R30,000"
            description="Full-featured e-commerce solutions"
            features={[
              "Unlimited pages",
              "E-commerce functionality",
              "Payment gateway integration",
              "Product management system",
              "Advanced SEO package",
              "6 months support",
              "Custom admin dashboard",
              "Security features"
            ]}
          />
          
          <PricingCard 
            title="Custom" 
            price="Custom"
            description="Tailor-made solutions for unique needs"
            ctaText="Contact Me"
            features={[
              "Custom design & development",
              "Specialized functionality",
              "Bespoke integrations",
              "Priority support",
              "Personalized consulting",
              "Dedicated project manager",
              "Custom maintenance plan"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

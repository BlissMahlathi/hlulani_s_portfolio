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
    <Card className={`relative h-full flex flex-col justify-between overflow-hidden ${popular ? 'border-space-accent/50 shadow-lg shadow-space-accent/20' : 'border-white/10'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-space-accent to-purple-600 text-white px-3 py-1 text-xs font-semibold">
            Most Popular
          </Badge>
        </div>
      )}
      
      <div>
        <CardHeader className="text-center pb-3">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-gray-300 text-sm">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="py-0 px-6">
          <div className="text-center mb-3">
            <span className="text-2xl font-bold">{priceRange}</span>
            {!priceRange.includes("Starting") && <span className="text-gray-400 ml-1 text-xs">ZAR</span>}
          </div>
        </CardContent>
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <CardContent className="px-6 pt-0 pb-3">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-space-accent mr-2 mt-0.5 flex-shrink-0"><Check size={14} /></span>
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <div className="px-6 pb-4">
          <div className="text-xs text-gray-400 mb-2">
            <span className="font-medium">Delivery:</span> {completionTime}
          </div>
          <CardFooter className="p-0">
            <a href="#contact" className="w-full">
              <Button className={`w-full text-sm h-9 ${popular ? 'bg-space-accent hover:bg-space-accent/90' : 'bg-white hover:bg-white/10'}`}>
                {ctaText}
              </Button>
            </a>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Transparent <span className="text-space-accent">Pricing</span>
          </h2>
          <p className="text-gray-300 max-w-lg mx-auto text-sm">
            Competitive pricing with rates 40% below market average
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <PricingCard 
            title="Starter" 
            priceRange="R2000–3500"
            description="Simple websites"
            features={[
              "1–3 pages",
              "Mobile design",
              "Contact form",
              "Basic SEO",
              "1 month support"
            ]}
            completionTime="3–5 days"
          />
          
          <PricingCard 
            title="Standard" 
            priceRange="R3600–5000"
            description="Growing businesses"
            popular={true}
            features={[
              "4–6 pages",
              "Custom design",
              "Blog section",
              "Booking forms",
              "3 months support"
            ]}
            completionTime="5–7 days"
          />
          
          <PricingCard 
            title="Advanced" 
            priceRange="R5000–7500"
            description="Dynamic features"
            features={[
              "7–10 pages",
              "User accounts",
              "Image galleries",
              "Live chat",
              "Basic CMS"
            ]}
            completionTime="7–10 days"
          />
          
          <PricingCard 
            title="Premium" 
            priceRange="R8000–12000"
            description="E-commerce ready"
            features={[
              "10+ pages",
              "Online payments",
              "Product management",
              "Admin dashboard",
              "6 months support"
            ]}
            completionTime="10–15 days"
          />
          
          <PricingCard 
            title="Custom" 
            priceRange="R12,000+"
            description="Tailored solutions"
            ctaText="Get Quote"
            features={[
              "Web applications",
              "Multi-vendor stores",
              "Membership systems",
              "API integrations",
              "Custom dashboards"
            ]}
            completionTime="Consultation"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

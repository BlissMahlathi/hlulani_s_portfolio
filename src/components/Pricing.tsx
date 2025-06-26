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
    <Card className={`relative h-full flex flex-col justify-between overflow-hidden ${popular ? 'border-space-accent/50' : 'border-white/10'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-space-accent to-purple-600 text-white px-3 py-1 text-xs font-semibold shadow-lg">
            Most Popular
          </Badge>
        </div>
      )}
      
      <div>
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-gray-300 text-sm mt-1">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="py-0 px-6">
          <div className="text-center mb-4">
            <span className="text-3xl font-bold">{priceRange}</span>
            {!priceRange.includes("Starting") && <span className="text-gray-400 ml-1 text-sm">ZAR</span>}
          </div>
        </CardContent>
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <CardContent className="px-6 pt-0 pb-4">
          <ul className="space-y-2">
            {features.slice(0, 5).map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-space-accent mr-2 mt-0.5 flex-shrink-0"><Check size={14} /></span>
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
            {features.length > 5 && (
              <li className="text-gray-400 text-sm">+ {features.length - 5} more features</li>
            )}
          </ul>
        </CardContent>

        <div className="px-6 pb-4">
          <div className="text-xs text-gray-400 mb-3">
            <span className="font-medium">Delivery:</span> {completionTime}
          </div>
          <CardFooter className="p-0">
            <a href="#contact" className="w-full">
              <Button className={`w-full text-sm ${popular ? 'bg-space-accent hover:bg-space-accent/90' : 'bg-white/5 hover:bg-white/10'}`}>
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
            Simple, Transparent <span className="text-space-accent">Pricing</span>
          </h2>
          <p className="text-gray-300 max-w-lg mx-auto text-sm">
            Professional websites at fair prices with no hidden costs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PricingCard 
            title="Starter" 
            priceRange="R2000"
            description="Essential online presence"
            features={[
              "1-3 pages",
              "Mobile responsive",
              "Contact form",
              "Basic SEO",
              "1 month support"
            ]}
            completionTime="3-5 days"
          />
          
          <PricingCard 
            title="Standard" 
            priceRange="R3600"
            description="Growing businesses"
            popular={true}
            features={[
              "4-6 pages",
              "Custom design",
              "Blog section",
              "Booking forms",
              "Google Maps",
              "Enhanced SEO",
              "3 months support"
            ]}
            completionTime="5-7 days"
          />
          
          <PricingCard 
            title="Advanced" 
            priceRange="R5000"
            description="Dynamic features"
            features={[
              "7-10 pages",
              "User accounts",
              "Image galleries",
              "Live chat",
              "Newsletter",
              "Basic CMS"
            ]}
            completionTime="7-10 days"
          />
          
          <PricingCard 
            title="Premium" 
            priceRange="R8000"
            description="E-commerce ready"
            features={[
              "10+ pages",
              "Online payments",
              "Product management",
              "Admin dashboard",
              "Advanced analytics",
              "6 months support"
            ]}
            completionTime="10-15 days"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

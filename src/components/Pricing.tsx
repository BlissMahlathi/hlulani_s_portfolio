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
  completionTime,
  className = ""
}: { 
  title: string; 
  priceRange: string;
  description: string; 
  features: string[];
  popular?: boolean;
  ctaText?: string;
  completionTime: string;
  className?: string;
}) => {
  return (
    <Card className={`appear-animation h-full flex flex-col relative overflow-hidden group ${popular ? 'border-space-accent/50' : 'border-white/10'} ${className}`}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-space-accent/10 via-transparent to-transparent"></div>
      </div>
      
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-space-accent to-purple-600 text-white px-3 py-1 text-xs font-semibold shadow-lg">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className={`relative z-10 text-center ${popular ? 'pt-6' : ''}`}>
        <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-300 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow relative z-10">
        <div className="text-center mb-6">
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-space-accent to-purple-500">
            {priceRange}
          </span>
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
      
      <CardFooter className="relative z-10">
        <a href="#contact" className="w-full">
          <Button className={`w-full transition-all duration-300 ${
            popular 
              ? 'bg-gradient-to-r from-space-accent to-purple-600 hover:from-space-accent/90 hover:to-purple-600/90' 
              : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
          }`}>
            {ctaText}
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-space-accent/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 appear-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Transparent{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-space-accent to-purple-500">
                Pricing
              </span>
            </span>
            <span className="block h-1 w-1/3 bg-gradient-to-r from-space-accent to-purple-500 mt-2 mx-auto"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Affordable web solutions with clear pricing. No hidden costs - just professional websites at fair prices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="space-y-8">
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
          </div>
          
          {/* Column 2 - Featured */}
          <div className="flex items-center">
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
              className="scale-105 lg:scale-110 z-20"
            />
          </div>
          
          {/* Column 3 */}
          <div className="space-y-8">
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
      </div>
    </section>
  );
};

export default Pricing;

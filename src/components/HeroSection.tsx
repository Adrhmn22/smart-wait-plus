import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-patients.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-soft/20 via-background to-secondary-soft/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float-animation" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl float-animation" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-soft rounded-full text-sm font-medium text-primary border border-primary/20">
              🏥 Revolutionizing Malaysian Healthcare
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">AI-Powered</span>
                <br />
                Queue Management
                <br />
                for Hospitals
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                End the 6-hour hospital waits. SmartQueue+ uses AI to predict waiting times, 
                optimize patient flow, and bring transparency to Malaysia's healthcare system.
              </p>
            </div>

            {/* Statistics Row */}
            <div className="flex flex-wrap gap-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30-40%</div>
                <div className="text-sm text-muted-foreground">Shorter Wait Times</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">11,000+</div>
                <div className="text-sm text-muted-foreground">Specialist Shortage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">4-6 hrs</div>
                <div className="text-sm text-muted-foreground">Current Wait Times</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary border-0 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105"
              >
                See Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Pitch Video
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>Sarawak Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>PDPA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Scalable Solution</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:block">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Malaysian patients using SmartQueue+ in modern hospital"
                className="rounded-2xl shadow-strong w-full h-auto pulse-glow"
              />
              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-medium float-animation">
                <div className="text-sm font-semibold text-secondary">Wait Time Reduced</div>
                <div className="text-2xl font-bold text-primary">-2.5 hrs</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-medium float-animation" style={{ animationDelay: '1s' }}>
                <div className="text-sm font-semibold text-primary">Queue Position</div>
                <div className="text-2xl font-bold text-secondary">#24</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
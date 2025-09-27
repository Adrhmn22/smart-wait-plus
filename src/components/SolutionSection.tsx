import { Brain, Smartphone, Monitor, Zap, Shield, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import mobileAppImage from '@/assets/mobile-app-mockup.jpg';
import dashboardImage from '@/assets/dashboard-mockup.jpg';

const SolutionSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Predictive Engine",
      description: "Like Waze for hospitals - predicts exact waiting times using doctor speed, patient history, and emergencies",
      badge: "Core AI",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Smartphone,
      title: "Patient Mobile App",
      description: "Real-time queue position, estimated wait time, and instant notifications when your turn approaches",
      badge: "Mobile First",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Monitor,
      title: "Hospital Dashboard",
      description: "Staff can manage patient flow, handle emergencies, and optimize doctor schedules efficiently",
      badge: "Admin Panel",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Zap,
      title: "Emergency Mode",
      description: "Automatically reshuffles queue for urgent cases while keeping all patients informed",
      badge: "Auto-Adapt",
      color: "bg-destructive/10 text-destructive"
    },
    {
      icon: Shield,
      title: "PDPA Compliant",
      description: "Secure, encrypted patient data handling that meets Malaysia's privacy regulations",
      badge: "Secure",
      color: "bg-muted/50 text-muted-foreground"
    },
    {
      icon: Globe,
      title: "Rural Access",
      description: "Remote queue checking for Sarawak's rural patients before traveling long distances",
      badge: "Rural Impact",
      color: "bg-secondary/10 text-secondary"
    }
  ];

  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary border border-secondary/20">
            💡 Revolutionary Solution
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gradient-text">SmartQueue+</span>
            <br />
            Changes Everything
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-powered queue management that makes hospital waiting times predictable, 
            shorter, and transparent. Like having Waze for your hospital visit.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-3 rounded-lg ${feature.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Patient App */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-secondary text-secondary-foreground">For Patients</Badge>
              <h3 className="text-2xl md:text-3xl font-bold">
                Know Exactly When It's
                <span className="gradient-text"> Your Turn</span>
              </h3>
              <p className="text-muted-foreground text-lg">
                No more sitting in dark waiting rooms wondering when you'll be called. 
                Get real-time updates, accurate predictions, and peace of mind.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">Queue #54</div>
                <div className="text-sm text-muted-foreground">Your position</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-secondary">1hr 20min</div>
                <div className="text-sm text-muted-foreground">Est. wait time</div>
              </div>
            </div>

            <img 
              src={mobileAppImage} 
              alt="SmartQueue+ mobile app interface"
              className="rounded-2xl shadow-medium w-full max-w-md mx-auto lg:mx-0 float-animation"
            />
          </div>

          {/* Hospital Dashboard */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-accent text-accent-foreground">For Hospitals</Badge>
              <h3 className="text-2xl md:text-3xl font-bold">
                Manage Patient Flow
                <span className="gradient-text"> Intelligently</span>
              </h3>
              <p className="text-muted-foreground text-lg">
                Doctors and staff get a powerful dashboard to manage queues, 
                handle emergencies, and optimize patient throughput.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-primary">45</div>
                <div className="text-xs text-muted-foreground">Active Patients</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-secondary">12min</div>
                <div className="text-xs text-muted-foreground">Avg. per Patient</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-accent">3</div>
                <div className="text-xs text-muted-foreground">Emergencies</div>
              </div>
            </div>

            <img 
              src={dashboardImage} 
              alt="SmartQueue+ hospital dashboard"
              className="rounded-2xl shadow-medium w-full float-animation" 
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 text-center text-primary-foreground">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Healthcare in Malaysia?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join the digital healthcare revolution. Let's make waiting times a thing of the past.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
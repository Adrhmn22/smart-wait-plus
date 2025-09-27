import { QrCode, Brain, Bell, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: QrCode,
      title: "Patient Check-in",
      description: "Patients register via mobile app or scan QR code at hospital kiosk upon arrival",
      details: "IoT integration for instant arrival tracking"
    },
    {
      step: "02", 
      icon: Brain,
      title: "AI Prediction",
      description: "AI analyzes doctor speed, patient history, emergencies, and current queue to predict wait time",
      details: "Machine learning algorithms with 95%+ accuracy"
    },
    {
      step: "03",
      icon: Bell,
      title: "Real-time Updates",
      description: "Patients receive live notifications about queue position and estimated waiting time",
      details: "Push notifications and SMS alerts available"
    },
    {
      step: "04",
      icon: BarChart3,
      title: "Continuous Optimization",
      description: "System learns from patterns and continuously improves predictions and queue management",
      details: "Data-driven insights for hospital efficiency"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent border border-accent/20">
            ⚙️ How It Works
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Simple Process,
            <span className="gradient-text"> Powerful Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SmartQueue+ works seamlessly in the background to optimize your hospital experience. 
            Here's how we're transforming healthcare waiting.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-gradient-primary" />
                )}
                
                <Card className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-muted/20 leading-none">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`mx-auto w-fit p-4 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                      isEven ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                    }`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold group-hover:gradient-text transition-all duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                      <p className="text-xs text-muted-foreground/70 italic">
                        {step.details}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Technical Architecture */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Technical Architecture</h3>
            <p className="text-muted-foreground">
              Built on proven technologies with scalability and reliability in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Engine */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">AI/ML Engine</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Predictive algorithms</li>
                <li>• Pattern recognition</li>
                <li>• Real-time optimization</li>
                <li>• Historical data analysis</li>
              </ul>
            </div>

            {/* Mobile Platform */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <QrCode className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold">Mobile Platform</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Cross-platform app</li>
                <li>• QR code integration</li>
                <li>• Push notifications</li>
                <li>• Offline functionality</li>
              </ul>
            </div>

            {/* Backend System */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold">Cloud Backend</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Scalable infrastructure</li>
                <li>• Real-time synchronization</li>
                <li>• Analytics dashboard</li>
                <li>• PDPA compliance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Scenario */}
        <div className="mt-16 bg-gradient-to-r from-destructive/10 to-primary/10 rounded-2xl p-8 border border-destructive/20">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-destructive">
              🚨 Emergency Mode in Action
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When a heart attack patient arrives, SmartQueue+ instantly:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-background/80 rounded-lg p-4">
                <div className="font-semibold text-destructive">1. Prioritizes</div>
                <div className="text-sm text-muted-foreground">Moves emergency to front</div>
              </div>
              <div className="bg-background/80 rounded-lg p-4">
                <div className="font-semibold text-primary">2. Notifies</div>
                <div className="text-sm text-muted-foreground">Alerts all waiting patients</div>
              </div>
              <div className="bg-background/80 rounded-lg p-4">
                <div className="font-semibold text-secondary">3. Adjusts</div>
                <div className="text-sm text-muted-foreground">Recalculates wait times</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
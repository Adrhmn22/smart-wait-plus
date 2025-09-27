import { TrendingUp, Users, Clock, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const ImpactSection = () => {
  const impacts = [
    {
      icon: Clock,
      title: "Reduced Wait Times",
      current: "6 hours",
      improved: "3.6 hours", 
      improvement: "40%",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Patient Satisfaction",
      current: "45%",
      improved: "85%",
      improvement: "89%",
      color: "text-secondary", 
      bgColor: "bg-secondary/10"
    },
    {
      icon: TrendingUp,
      title: "Doctor Efficiency",
      current: "65%",
      improved: "88%",
      improvement: "35%",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Heart,
      title: "Rural Access",
      current: "20%",
      improved: "75%",
      improvement: "275%",
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    }
  ];

  const malaysiaMadaniGoals = [
    {
      goal: "Sustainability",
      description: "Reduces wasted travel and hospital resource inefficiency",
      alignment: "95%"
    },
    {
      goal: "Well-being",
      description: "Improves patient mental health and reduces stress",
      alignment: "90%"
    },
    {
      goal: "Innovation",
      description: "AI-powered healthcare transformation for Malaysia",
      alignment: "98%"
    }
  ];

  return (
    <section id="impact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
            📊 Measurable Impact
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Transforming Healthcare
            <span className="gradient-text"> Outcomes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SmartQueue+ delivers quantifiable improvements to patient experience, 
            hospital efficiency, and healthcare outcomes across Malaysia.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon;
            return (
              <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-4">
                  <div className={`w-fit p-3 rounded-lg ${impact.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${impact.color}`} />
                  </div>
                  <CardTitle className="text-lg">{impact.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Before/After Comparison */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Before</span>
                      <span className="font-semibold text-destructive">{impact.current}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">After</span>
                      <span className={`font-semibold ${impact.color}`}>{impact.improved}</span>
                    </div>
                  </div>
                  
                  {/* Improvement Badge */}
                  <Badge className={`w-full justify-center ${impact.bgColor} ${impact.color} border-0`}>
                    +{impact.improvement} improvement
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Malaysia MADANI Alignment */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-soft mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Aligned with Malaysia MADANI 2023-2030
            </h3>
            <p className="text-muted-foreground">
              SmartQueue+ directly supports Malaysia's national development framework
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {malaysiaMadaniGoals.map((item, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">{item.goal}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Alignment Score</span>
                    <span className="font-semibold">{item.alignment}</span>
                  </div>
                  <Progress value={parseInt(item.alignment)} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-world Scenarios */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Rural Patient Story */}
          <div className="bg-secondary/5 rounded-2xl p-8 border border-secondary/20">
            <h3 className="text-xl font-bold text-secondary mb-4">
              🏔️ Rural Patient Success Story
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <strong>Before:</strong> Aminah travels 4 hours from Kapit to Sibu General Hospital. 
                Arrives at 7 AM, waits until 3 PM, sometimes sent home without consultation.
              </p>
              <p className="text-muted-foreground">
                <strong>After:</strong> Checks queue remotely, sees 2-hour wait, leaves home at optimal time. 
                Gets notification 15 minutes before her turn. Saves 6 hours of travel and waiting.
              </p>
              <div className="bg-secondary/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-secondary">6 hours saved</div>
                <div className="text-sm text-muted-foreground">Per visit for rural patients</div>
              </div>
            </div>
          </div>

          {/* Hospital Efficiency Story */}
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-bold text-primary mb-4">
              🏥 Hospital Efficiency Boost
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <strong>Before:</strong> Sarawak General Hospital manages 200+ daily patients manually. 
                No-shows disrupt schedules, emergencies create chaos, staff overwhelmed.
              </p>
              <p className="text-muted-foreground">
                <strong>After:</strong> AI predicts no-shows, automatically fills gaps, emergency mode 
                maintains order. Staff focus on care, not queue management.
              </p>
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">+23 patients</div>
                <div className="text-sm text-muted-foreground">Served per day with same staff</div>
              </div>
            </div>
          </div>
        </div>

        {/* Economic Impact */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Economic Impact for Malaysia</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background/80 rounded-lg p-6">
                <div className="text-2xl font-bold text-primary">RM 2.4M</div>
                <div className="text-sm text-muted-foreground">Annual savings in productivity</div>
                <div className="text-xs text-muted-foreground mt-1">Per 1000 patients served</div>
              </div>
              
              <div className="bg-background/80 rounded-lg p-6">
                <div className="text-2xl font-bold text-secondary">75%</div>
                <div className="text-sm text-muted-foreground">Reduction in wasted travel</div>
                <div className="text-xs text-muted-foreground mt-1">For rural communities</div>
              </div>
              
              <div className="bg-background/80 rounded-lg p-6">
                <div className="text-2xl font-bold text-accent">2.3M</div>
                <div className="text-sm text-muted-foreground">Hours saved annually</div>
                <div className="text-xs text-muted-foreground mt-1">Across pilot hospitals</div>
              </div>
            </div>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              SmartQueue+ isn't just healthcare technology — it's an economic catalyst that returns 
              valuable time to Malaysian families and improves national productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
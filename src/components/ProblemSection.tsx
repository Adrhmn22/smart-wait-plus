import { Clock, Users, AlertTriangle, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "6-Hour Wait Times",
      description: "Patients in Sarawak wait 4-6 hours on average just to see a specialist",
      statistic: "4-6 hrs",
      color: "text-destructive"
    },
    {
      icon: Users,
      title: "Specialist Shortage",
      description: "Malaysia's public sector is short of nearly 11,000 specialist doctors",
      statistic: "11,000+",
      color: "text-primary"
    },
    {
      icon: AlertTriangle,
      title: "No Real-time Updates", 
      description: "Patients sit blindly without knowing when they'll be called",
      statistic: "0%",
      color: "text-accent"
    },
    {
      icon: TrendingDown,
      title: "Wasted Travel Time",
      description: "Rural patients travel 3+ hours only to be turned away",
      statistic: "3+ hrs",
      color: "text-secondary"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-destructive/10 rounded-full text-sm font-medium text-destructive border border-destructive/20">
            🚨 Critical Healthcare Crisis
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            The Healthcare 
            <span className="gradient-text"> Waiting Crisis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Malaysian patients, especially in Sarawak, face unprecedented waiting times. 
            The current system is broken, and patients deserve better.
          </p>
        </div>

        {/* Problem Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`${problem.color} mx-auto w-fit p-3 bg-muted rounded-lg`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className={`text-3xl font-bold ${problem.color}`}>
                    {problem.statistic}
                  </div>
                  <h3 className="text-lg font-semibold">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Impact Quote */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
          <div className="text-center space-y-4">
            <div className="text-6xl text-muted-foreground/20">"</div>
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
              Imagine traveling three hours from a small town in Sarawak just to see a specialist. 
              You arrive at 8 a.m., but only see the doctor at 2 p.m. — after waiting more than six hours.
            </blockquote>
            <footer className="text-muted-foreground">
              — The Borneo Post, September 2025
            </footer>
          </div>
        </div>

        {/* Root Causes */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Inefficient Scheduling</h3>
            <p className="text-muted-foreground">No AI-driven optimization or predictive scheduling systems in place</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold">Overcrowding</h3>
            <p className="text-muted-foreground">Doctors see 80-100 patients daily in understaffed facilities</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Poor Communication</h3>
            <p className="text-muted-foreground">No real-time updates or transparency about wait times</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
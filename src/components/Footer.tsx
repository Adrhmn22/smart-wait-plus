import { Activity, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary rounded-lg p-2">
                <Activity className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">SmartQueue+</span>
            </div>
            <p className="text-muted-foreground">
              AI-powered digital queue management transforming healthcare waiting 
              experiences across Malaysia.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sarawak, Malaysia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@smartqueueplus.my</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+60 82-XXX-XXXX</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Patient Mobile App</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hospital Dashboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Prediction Engine</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Emergency Mode</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Analytics Platform</a></li>
            </ul>
          </div>

          {/* Use Cases */}
          <div className="space-y-4">
            <h3 className="font-semibold">Use Cases</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">Public Hospitals</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Private Clinics</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Specialist Centers</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Rural Healthcare</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Emergency Departments</a></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get Started</h3>
            <p className="text-sm text-muted-foreground">
              Ready to eliminate waiting times at your healthcare facility?
            </p>
            <div className="space-y-3">
              <Button className="w-full bg-gradient-primary border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                Request Demo
              </Button>
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Download Pitch Deck
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2025 SmartQueue+. All rights reserved. | PDPA Compliant | Made in Malaysia 🇲🇾
            </div>

            {/* Policy Links */}
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">PDPA Compliance</a>
            </div>
          </div>

          {/* Malaysia Vision Alignment */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-sm text-primary border border-primary/20">
              🇲🇾 Proudly supporting Malaysia MADANI 2023-2030 & 12th Malaysia Plan
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
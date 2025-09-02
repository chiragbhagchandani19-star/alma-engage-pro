import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4">
              AlumniConnect
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              The comprehensive digital platform that transforms how educational institutions 
              connect with their alumni community.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-secondary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-secondary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Features</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Integrations</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Webinars</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-background/80 hover:text-secondary transition-colors">Best Practices</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-secondary mr-3" />
                <span className="text-background/80">hello@alumniconnect.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-3" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                <span className="text-background/80">
                  123 Innovation Drive<br />
                  San Francisco, CA 94107
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 AlumniConnect. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                GDPR Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
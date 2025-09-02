import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your 
            <br className="hidden sm:block" />
            Alumni Engagement?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of institutions already using AlumniConnect to build stronger 
            relationships, increase donations, and create lasting impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button 
              variant="secondary" 
              size="lg" 
              className="min-w-[220px] bg-white text-primary hover:bg-white/90"
            >
              Start Free 30-Day Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[200px] border-white/30 text-white hover:bg-white/10"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>

          {/* Additional CTA Options */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MessageSquare className="h-8 w-8 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Talk to Sales</h3>
              <p className="text-white/80 text-sm mb-4">
                Get a personalized consultation and custom pricing
              </p>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Calendar className="h-8 w-8 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Live Demo</h3>
              <p className="text-white/80 text-sm mb-4">
                See the platform in action with a guided demo
              </p>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                Book Demo
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <ArrowRight className="h-8 w-8 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-white/80 text-sm mb-4">
                Set up your alumni platform in under 24 hours
              </p>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                Get Started
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Trusted by leading institutions worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <span className="text-white font-semibold">Harvard University</span>
              <span className="text-white font-semibold">Stanford</span>
              <span className="text-white font-semibold">MIT</span>
              <span className="text-white font-semibold">Oxford</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
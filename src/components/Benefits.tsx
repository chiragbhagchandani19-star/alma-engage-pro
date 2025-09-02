import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const Benefits = () => {
  const alumniBenefits = [
    "Stay connected with classmates and faculty",
    "Access exclusive networking opportunities",
    "Discover career advancement resources",
    "Participate in mentorship programs",
    "Attend alumni events and reunions",
    "Support your alma mater through giving"
  ];

  const adminBenefits = [
    "Streamlined data management and reporting",
    "Automated communication workflows",
    "Real-time fundraising analytics",
    "Enhanced donor relationship management",
    "Improved event planning and execution",
    "Mobile-first user experience"
  ];

  return (
    <section id="benefits" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Benefits for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform creates value for both alumni and administrators, 
            fostering stronger connections and driving institutional success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Alumni Benefits */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">For Alumni</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Reconnect with your university community and unlock lifelong opportunities 
              for growth, networking, and giving back.
            </p>

            <ul className="space-y-4 mb-8">
              {alumniBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="w-full">
              Join Alumni Network
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Administrator Benefits */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">For Administrators</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Powerful tools and insights to efficiently manage alumni relations, 
              drive engagement, and achieve fundraising goals.
            </p>

            <ul className="space-y-4 mb-8">
              {adminBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="cta" className="w-full">
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-8">Proven Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">3x</div>
              <div className="text-sm opacity-90">Higher Engagement</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">65%</div>
              <div className="text-sm opacity-90">More Donations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-sm opacity-90">Time Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
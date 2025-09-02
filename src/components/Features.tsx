import { 
  Users, 
  Database, 
  Calendar, 
  MessageSquare, 
  Briefcase, 
  Heart, 
  DollarSign, 
  BarChart3,
  Shield,
  Smartphone,
  UserCheck,
  Target
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Database,
      title: "Centralized Alumni Database",
      description: "Secure, scalable database to collect, store, and update alumni information with advanced search and filtering capabilities."
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Comprehensive event planning, registration, and management system with automated reminders and attendance tracking."
    },
    {
      icon: MessageSquare,
      title: "Networking Forums",
      description: "Private discussion forums, interest groups, and networking spaces to foster meaningful alumni connections."
    },
    {
      icon: Briefcase,
      title: "Job Board & Career Services",
      description: "Dedicated job posting platform with career resources, resume database, and employer-alumni matching."
    },
    {
      icon: UserCheck,
      title: "Mentorship Matching",
      description: "AI-powered mentorship program that connects alumni based on experience, industry, and career goals."
    },
    {
      icon: Heart,
      title: "Fundraising Campaigns",
      description: "Complete donation management with pledge tracking, recurring giving, and donor recognition features."
    },
    {
      icon: DollarSign,
      title: "Payment Gateway Integration",
      description: "Secure payment processing with support for multiple currencies and payment methods."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive dashboards tracking engagement metrics, fundraising performance, and communication effectiveness."
    },
    {
      icon: Shield,
      title: "Data Privacy & Security",
      description: "Enterprise-grade security with GDPR compliance, data encryption, and granular privacy controls."
    },
    {
      icon: Smartphone,
      title: "Mobile Accessibility",
      description: "Fully responsive design with native mobile apps for iOS and Android platforms."
    },
    {
      icon: Target,
      title: "Targeted Communications",
      description: "Personalized email campaigns, newsletters, and notifications with advanced segmentation."
    },
    {
      icon: Users,
      title: "Admin & User Management",
      description: "Role-based access control with customizable permissions for different user types and administrators."
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Manage Alumni
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive suite of tools designed to streamline alumni relations, 
            boost engagement, and drive successful fundraising initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
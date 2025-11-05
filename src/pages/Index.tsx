import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Scale, TrendingUp, Eye, GraduationCap, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Index = () => {
  const features = [
    {
      icon: Scale,
      title: "Newcomer Boost System",
      description: "AI-driven fairness algorithm that gives equal visibility to talented newcomers, breaking the rating bias cycle.",
    },
    {
      icon: Sparkles,
      title: "AI Portfolio Critique",
      description: "Get instant feedback and professional rewrites of your profile, gigs, and proposals using advanced LLMs.",
    },
    {
      icon: TrendingUp,
      title: "Smart Pricing Advisor",
      description: "Market-data driven pricing recommendations that ensure you're competitive yet fairly compensated.",
    },
    {
      icon: Eye,
      title: "Transparency Insights",
      description: "Understand exactly why you weren't matched with clear, actionable feedback instead of opaque algorithms.",
    },
    {
      icon: GraduationCap,
      title: "Mentor Mode",
      description: "Weekly progress reports and personalized guidance to continuously improve your freelance success.",
    },
    {
      icon: Shield,
      title: "Fairness-First Ranking",
      description: "Our unique algorithm promotes emerging talent without lowering quality—a first in South Asia.",
    },
  ];

  const stats = [
    { value: "800K+", label: "Freelancers in Bangladesh" },
    { value: "$500M+", label: "Annual Contribution" },
    { value: "Top 10", label: "Global Freelancing Country" },
    { value: "100%", label: "Fairness Focused" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Powered by AI Fairness Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Giving Every Freelancer
              <br />a Fair Start
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              FairFound uses AI to level the playing field for new freelancers. Get discovered, guided, 
              and matched more effectively with our fairness-first platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/fairness-demo">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  See Fairness Demo
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Powerful Features for Fairness</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to compete fairly in the freelance marketplace
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-border">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 w-fit mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Your Fair Start?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of freelancers who are getting discovered with AI-powered fairness
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/fairness-demo">
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Scale, TrendingUp, Eye, GraduationCap, Shield, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10 transition-colors duration-200">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 px-4 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, primary 0%, transparent 50%), radial-gradient(circle at 80% 80%, secondary 0%, transparent 50%)",
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          style={{ y, opacity }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6"
            >
                <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Powered by AI Fairness Technology
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <motion.span
                  className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Giving Every Freelancer
                </motion.span>
                <br />
                <motion.span
                  className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  a Fair Start
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              FairFound uses AI to level the playing field for new freelancers.
              Get discovered, guided, and matched more effectively with our
              fairness-first platform.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/dashboard">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
                  >
                    Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/fairness-demo">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    See Fairness Demo
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group cursor-default"
              >
                <motion.div
                  className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="text-sm text-muted-foreground mt-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-lg transition-all border-border">
                  <CardContent className="p-6">
                    <motion.div
                      className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 w-fit mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon className="w-6 h-6 text-primary" />
                    </motion.div>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-secondary p-12 text-center text-white relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    x: [0, 20, 0],
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Get Your Fair Start?
                  </h2>
                  <p className="text-lg mb-8 opacity-90">
                    Join thousands of freelancers who are getting discovered with
                    AI-powered fairness
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/dashboard">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          variant="secondary"
                          className="text-lg px-8"
                        >
                          Get Started Free
                        </Button>
                      </motion.div>
                    </Link>
                    <Link to="/fairness-demo">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          Watch Demo
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;

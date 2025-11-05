import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { DollarSign, TrendingUp, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { motion } from "framer-motion";

const PricingAdvisor = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(false);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResult(true);
    }, 1500);
  };

  const comparisonData = [
    { label: "Market Low", value: 18 },
    { label: "Market Avg", value: 25 },
    { label: "Your Current", value: 15 },
    { label: "FairFound Rec.", value: 27 },
    { label: "Market High", value: 35 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="lg:pl-64 pt-16">
        <div className="p-6 md:p-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">💰 AI Pricing Advisor</h1>
            <p className="text-muted-foreground">
              Get data-driven, regionally-balanced pricing recommendations for your services
            </p>
          </div>

          {/* Input Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Enter Your Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Skill / Category</Label>
                  <Select defaultValue="webdev">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="webdev">Web Development</SelectItem>
                      <SelectItem value="design">Graphic Design</SelectItem>
                      <SelectItem value="writing">Content Writing</SelectItem>
                      <SelectItem value="seo">SEO Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Experience Level</Label>
                  <Select defaultValue="intermediate">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Region</Label>
                  <Select defaultValue="bangladesh">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bangladesh">Bangladesh</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">USA</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Current Rate ($/hr)</Label>
                  <Input type="number" placeholder="15" defaultValue="15" />
                </div>
              </div>

              <Button 
                onClick={handleAnalyze}
                disabled={analyzing}
                className="mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full md:w-auto"
              >
                {analyzing ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing 2000+ market gigs...
                  </>
                ) : (
                  <>
                    <DollarSign className="w-4 h-4 mr-2" />
                    Get AI Recommendation
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Main Recommendation */}
              <Card className="border-2 border-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Sparkles className="w-6 h-6 text-accent" />
                    Recommended Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-6xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-4">
                    $27/hr
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-1">📊 Market Average</div>
                      <div className="text-2xl font-bold text-primary">$25/hr</div>
                    </div>
                    <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <div className="text-sm text-muted-foreground mb-1">🌏 Regional Adjustment</div>
                      <div className="text-2xl font-bold text-accent">+12%</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">High Demand Category</div>
                        <div className="text-sm text-muted-foreground">
                          Frontend React developers are in top 15% demand
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">Confidence Level: 91%</div>
                        <div className="text-sm text-muted-foreground">
                          Based on 2,847 similar gigs analyzed
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comparison Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Rate Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="label" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)",
                        }}
                      />
                      <ReferenceLine y={27} stroke="hsl(142, 76%, 36%)" strokeDasharray="3 3" label="Recommended" />
                      <Bar
                        dataKey="value"
                        fill="hsl(217, 91%, 60%)"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Fairness Insight */}
              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Fairness Insight
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">
                    We noticed freelancers from Bangladesh with your skills often charge lower than global averages. 
                    <strong className="text-accent"> FairFound adjusts your fair rate upward (+12%) to ensure regional equality</strong> and 
                    help you compete on skill, not location.
                  </p>
                </CardContent>
              </Card>

              {/* Action Items */}
              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Update your hourly rate to $27/hr on your profile",
                      "Highlight your React.js and modern framework skills",
                      "Add 1-2 recent portfolio samples to justify premium pricing",
                      "Emphasize fast turnaround time in your gig description",
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
                        <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="text-sm text-foreground">{step}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PricingAdvisor;

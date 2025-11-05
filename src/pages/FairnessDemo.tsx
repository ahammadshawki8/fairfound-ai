import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const FairnessDemo = () => {
  const [viewMode, setViewMode] = useState<"before" | "after">("before");

  const beforeRanking = [
    { rank: 1, name: "Senior Dev Pro", rating: 4.9, jobs: 200, fairScore: 0.75, isNew: false },
    { rank: 2, name: "UI Designer Elite", rating: 4.8, jobs: 150, fairScore: 0.70, isNew: false },
    { rank: 3, name: "Full Stack Master", rating: 4.9, jobs: 180, fairScore: 0.73, isNew: false },
    { rank: 4, name: "React Specialist", rating: 4.7, jobs: 120, fairScore: 0.68, isNew: false },
    { rank: 5, name: "Creative Designer", rating: 4.6, jobs: 90, fairScore: 0.65, isNew: false },
    { rank: 6, name: "Backend Expert", rating: 4.8, jobs: 140, fairScore: 0.69, isNew: false },
    { rank: 7, name: "Mobile Dev Pro", rating: 4.5, jobs: 80, fairScore: 0.62, isNew: false },
    { rank: 8, name: "Data Analyst", rating: 4.4, jobs: 60, fairScore: 0.58, isNew: false },
    { rank: 9, name: "Content Writer", rating: 4.3, jobs: 50, fairScore: 0.55, isNew: false },
    { rank: 10, name: "SEO Expert", rating: 4.2, jobs: 40, fairScore: 0.52, isNew: false },
  ];

  const afterRanking = [
    { rank: 1, name: "Mid-Level Developer", rating: 4.6, jobs: 15, fairScore: 0.91, isNew: true },
    { rank: 2, name: "Senior Dev Pro", rating: 4.9, jobs: 200, fairScore: 0.88, isNew: false },
    { rank: 3, name: "Junior UI Designer", rating: 4.5, jobs: 10, fairScore: 0.85, isNew: true },
    { rank: 4, name: "UI Designer Elite", rating: 4.8, jobs: 150, fairScore: 0.84, isNew: false },
    { rank: 5, name: "New React Dev", rating: 4.4, jobs: 8, fairScore: 0.82, isNew: true },
    { rank: 6, name: "Full Stack Master", rating: 4.9, jobs: 180, fairScore: 0.81, isNew: false },
    { rank: 7, name: "Fresh Designer", rating: 4.3, jobs: 12, fairScore: 0.78, isNew: true },
    { rank: 8, name: "React Specialist", rating: 4.7, jobs: 120, fairScore: 0.77, isNew: false },
    { rank: 9, name: "Backend Expert", rating: 4.8, jobs: 140, fairScore: 0.75, isNew: false },
    { rank: 10, name: "Creative Designer", rating: 4.6, jobs: 90, fairScore: 0.74, isNew: false },
  ];

  const visibilityData = [
    {
      category: "Top-rated",
      before: 90,
      after: 60,
    },
    {
      category: "Newcomers",
      before: 10,
      after: 40,
    },
  ];

  const currentData = viewMode === "before" ? beforeRanking : afterRanking;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="lg:pl-64 pt-16">
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Fairness Ranking Demo</h1>
            <p className="text-muted-foreground">
              See how FairFound's AI rebalances visibility to give newcomers a fair chance
            </p>
          </div>

          {/* Toggle View */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant={viewMode === "before" ? "default" : "outline"}
              onClick={() => setViewMode("before")}
              className="px-8"
            >
              Current Marketplace
            </Button>
            <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <Button
              variant={viewMode === "after" ? "default" : "outline"}
              onClick={() => setViewMode("after")}
              className="px-8 bg-gradient-to-r from-primary to-secondary"
            >
              FairFound Ranking
            </Button>
          </div>

          {/* Fairness Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Marketplace Fairness Index</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2">
                  {viewMode === "before" ? "42" : "81"}
                </div>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <TrendingUp className="w-4 h-4" />
                  {viewMode === "after" && "+39 points with FairFound"}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Newcomer Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2">
                  {viewMode === "before" ? "10%" : "40%"}
                </div>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <Award className="w-4 h-4" />
                  {viewMode === "after" && "+30% increase"}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Equal Opportunity Index</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2">
                  {viewMode === "before" ? "51" : "90"}
                </div>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <Sparkles className="w-4 h-4" />
                  {viewMode === "after" && "+39 points improvement"}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Visibility Distribution Chart */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Visibility Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={visibilityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="before" fill="hsl(215, 16%, 47%)" name="Before FairFound" />
                  <Bar dataKey="after" fill="hsl(217, 91%, 60%)" name="After FairFound" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Rankings Table */}
          <Card>
            <CardHeader>
              <CardTitle>
                {viewMode === "before" ? "Current Marketplace Ranking" : "FairFound Fair Ranking"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentData.map((freelancer, index) => (
                  <motion.div
                    key={freelancer.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-4 rounded-lg border transition-all ${
                      freelancer.isNew 
                        ? "border-accent bg-accent/5 shadow-lg" 
                        : "border-border hover:bg-accent/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-muted-foreground w-8">
                          #{freelancer.rank}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">{freelancer.name}</span>
                            {freelancer.isNew && (
                              <Badge className="bg-gradient-to-r from-accent to-secondary text-white">
                                New Talent
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span>⭐ {freelancer.rating}</span>
                            <span>📦 {freelancer.jobs} jobs</span>
                            <span>📊 Fair Score: {(freelancer.fairScore * 100).toFixed(0)}%</span>
                          </div>
                        </div>
                      </div>
                      {freelancer.isNew && viewMode === "after" && (
                        <div className="text-sm text-accent font-medium flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          Promoted by AI
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FairnessDemo;

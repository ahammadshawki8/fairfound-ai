import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import InsightCard from "@/components/InsightCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Eye, Award, Target } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Dashboard = () => {
  const weeklyData = [
    { week: "Week 1", score: 65, visibility: 40 },
    { week: "Week 2", score: 70, visibility: 45 },
    { week: "Week 3", score: 75, visibility: 52 },
    { week: "Week 4", score: 82, visibility: 63 },
  ];

  const categoryData = [
    { name: "Web Dev", value: 35 },
    { name: "Design", value: 25 },
    { name: "Writing", value: 20 },
    { name: "Marketing", value: 20 },
  ];

  const COLORS = ["hsl(217, 91%, 60%)", "hsl(174, 62%, 47%)", "hsl(142, 76%, 36%)", "hsl(38, 92%, 50%)"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="lg:pl-64 pt-16">
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's your fairness and performance overview.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <InsightCard
              title="Fairness Score"
              value="82"
              description="Based on profile quality & market fit"
              icon={Award}
              trend={{ value: 12, isPositive: true }}
              gradient
            />
            <InsightCard
              title="Visibility Score"
              value="63%"
              description="Your ranking visibility"
              icon={Eye}
              trend={{ value: 8, isPositive: true }}
              gradient
            />
            <InsightCard
              title="Market Rate"
              value="$27/hr"
              description="Recommended pricing"
              icon={DollarSign}
              trend={{ value: 15, isPositive: true }}
              gradient
            />
            <InsightCard
              title="Profile Quality"
              value="85%"
              description="Portfolio & bio analysis"
              icon={Target}
              gradient
            />
            <InsightCard
              title="Active Gigs"
              value="12"
              description="Currently listed services"
              icon={TrendingUp}
              gradient
            />
            <InsightCard
              title="Total Views"
              value="2,847"
              description="This month"
              icon={Users}
              trend={{ value: 23, isPositive: true }}
              gradient
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Weekly Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Line type="monotone" dataKey="score" stroke="hsl(217, 91%, 60%)" strokeWidth={2} name="Fairness Score" />
                    <Line type="monotone" dataKey="visibility" stroke="hsl(174, 62%, 47%)" strokeWidth={2} name="Visibility" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Skills Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "Update portfolio", impact: "High", description: "Add 2 new web development samples" },
                  { action: "Adjust pricing", impact: "Medium", description: "Consider lowering rate by $2/hr for competitive edge" },
                  { action: "Improve bio", impact: "High", description: "Make your description more client-focused" },
                  { action: "Add skills", impact: "Medium", description: "React.js and TailwindCSS are trending" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                    <div>
                      <div className="font-medium text-foreground">{item.action}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.impact === "High" 
                        ? "bg-accent/20 text-accent" 
                        : "bg-primary/20 text-primary"
                    }`}>
                      {item.impact} Impact
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

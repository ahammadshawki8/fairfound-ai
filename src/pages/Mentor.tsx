import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, BookOpen, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const Mentor = () => {
  const weeklyProgress = [
    { week: "Week 1", profileScore: 65, visibilityScore: 40, notes: "Initial profile uploaded; portfolio weak" },
    { week: "Week 2", profileScore: 70, visibilityScore: 45, notes: "Added 2 new portfolio items" },
    { week: "Week 3", profileScore: 75, visibilityScore: 52, notes: "Updated proposal tone; improved skill tags" },
    { week: "Week 4", profileScore: 82, visibilityScore: 63, notes: "Pricing adjusted, engagement improved" },
  ];

  const skillRecommendations = [
    { skill: "React.js", trend: "+20%", reason: "High demand in frontend development" },
    { skill: "TailwindCSS", trend: "+18%", reason: "Trending design framework" },
    { skill: "TypeScript", trend: "+15%", reason: "Essential for modern web development" },
    { skill: "Next.js", trend: "+12%", reason: "Growing full-stack framework" },
  ];

  const courses = [
    {
      title: "Figma Fundamentals",
      category: "UI/UX Design",
      impact: "Improve portfolio quality by 25%",
      link: "#",
    },
    {
      title: "AI-Powered Proposal Writing",
      category: "Communication",
      impact: "Boost match rate by 30%",
      link: "#",
    },
    {
      title: "Advanced React Patterns",
      category: "Web Development",
      impact: "Justify premium pricing",
      link: "#",
    },
  ];

  const actionPlan = [
    { task: "Update portfolio with 1 new sample", priority: "High", completed: false },
    { task: "Rewrite proposals with warmer tone", priority: "High", completed: false },
    { task: "Adjust pricing for competitive advantage", priority: "Medium", completed: true },
    { task: "Add React.js and TailwindCSS skills", priority: "Medium", completed: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="lg:pl-64 pt-16">
        <div className="p-6 md:p-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">🎓 Mentor Mode</h1>
            <p className="text-muted-foreground">
              Your personalized AI coach for continuous freelance success
            </p>
          </div>

          {/* Progress Summary */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-accent">
              <CardHeader>
                <CardTitle className="text-lg">This Week's Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">+12%</div>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <TrendingUp className="w-4 h-4" />
                  Visibility improvement
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Rank</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-foreground mb-2">#23</div>
                <div className="text-sm text-muted-foreground">Top 15% in your category</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-foreground mb-2">4</div>
                <div className="text-sm text-muted-foreground">New skills recommended</div>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Timeline */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>4-Week Progress Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {weeklyProgress.map((week, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0">
                      <Badge variant={index === weeklyProgress.length - 1 ? "default" : "secondary"}>
                        {week.week}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <div className="flex gap-4 mb-1">
                        <span className="text-sm font-medium text-primary">
                          Profile: {week.profileScore}%
                        </span>
                        <span className="text-sm font-medium text-secondary">
                          Visibility: {week.visibilityScore}%
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{week.notes}</p>
                    </div>
                    {index === weeklyProgress.length - 1 && (
                      <Badge className="bg-accent">Current</Badge>
                    )}
                  </div>
                ))}
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyProgress}>
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
                  <Legend />
                  <Line type="monotone" dataKey="profileScore" stroke="hsl(217, 91%, 60%)" strokeWidth={2} name="Profile Score" />
                  <Line type="monotone" dataKey="visibilityScore" stroke="hsl(174, 62%, 47%)" strokeWidth={2} name="Visibility Score" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Skill Recommendations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Skill Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {skillRecommendations.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border hover:border-primary transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{item.skill}</h4>
                      <Badge className="bg-accent">{item.trend}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.reason}</p>
                    <Button variant="outline" size="sm" className="mt-3">
                      Add to Profile
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Course Suggestions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Recommended Learning Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{course.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Badge variant="secondary">{course.category}</Badge>
                        <span className="text-accent">💡 {course.impact}</span>
                      </div>
                    </div>
                    <Button size="sm">View Course</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Plan */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle>This Week's Action Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {actionPlan.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      item.completed ? "border-accent bg-accent/5" : "border-border"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      item.completed ? "bg-accent border-accent" : "border-muted-foreground"
                    }`}>
                      {item.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium ${item.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
                        {item.task}
                      </div>
                    </div>
                    <Badge variant={item.priority === "High" ? "destructive" : "secondary"}>
                      {item.priority}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-foreground">
                  🎉 <strong>You've improved your visibility by 12% this week!</strong> Keep adding relevant portfolio items 
                  and refining your proposals to maintain momentum.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Mentor;

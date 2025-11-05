import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";

const Transparency = () => {
  const matchEvaluation = [
    { category: "Skill Match", score: 83, status: "good", explanation: "Matches 5 of 6 required skills" },
    { category: "Portfolio Relevance", score: 62, status: "medium", explanation: "Missing recent work samples" },
    { category: "Pricing Fit", score: 45, status: "weak", explanation: "Higher than client's budget range" },
    { category: "Proposal Tone", score: 70, status: "medium", explanation: "Slightly formal, could be more engaging" },
  ];

  const feedback = [
    {
      issue: "Pricing too high",
      description: "You priced $25/hr, while similar gigs averaged $18/hr in this category",
      fix: "Try $20-22/hr for better visibility and competitiveness",
      impact: "high",
    },
    {
      issue: "Weak portfolio match",
      description: "No logo samples for tech startups (client's specific niche)",
      fix: "Add 1-2 relevant tech startup logo samples to your portfolio",
      impact: "high",
    },
    {
      issue: "Tone mismatch",
      description: "Proposal too formal; lacks creative enthusiasm",
      fix: "Rewrite intro with a friendly, energetic tone. Show passion for the project",
      impact: "medium",
    },
  ];

  const comparison = {
    you: {
      title: "Logo Design Expert",
      rate: "$25/hr",
      portfolio: "6/10",
      engagement: "7/10",
    },
    top: {
      title: "Crafting Iconic Logos That Tell Your Story",
      rate: "$27/hr",
      portfolio: "9/10",
      engagement: "9/10",
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-accent";
      case "medium":
        return "bg-primary";
      case "weak":
        return "bg-destructive";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="lg:pl-64 pt-16">
        <div className="p-6 md:p-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">🔍 Transparency Insights</h1>
            <p className="text-muted-foreground">
              Understand exactly why you weren't matched, with clear actionable feedback
            </p>
          </div>

          {/* Profile Snapshot */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Your Proposal Snapshot</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                  SA
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Shorna Akter – Graphic Designer</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">Logo Design</Badge>
                    <Badge variant="secondary">Brand Identity</Badge>
                    <Badge variant="secondary">Minimalist</Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Gig Title</div>
                      <div className="font-medium text-foreground">Minimalist Logo Design for Startups</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Bid Rate</div>
                      <div className="font-medium text-foreground">$25/hr</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Region</div>
                      <div className="font-medium text-foreground">Bangladesh</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Experience</div>
                      <div className="font-medium text-foreground">2 years</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Match Evaluation */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Match Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {matchEvaluation.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{item.category}</span>
                      <span className={`text-sm font-medium ${
                        item.status === "good" ? "text-accent" : 
                        item.status === "medium" ? "text-primary" : 
                        "text-destructive"
                      }`}>
                        {item.score}%
                      </span>
                    </div>
                    <Progress value={item.score} className="h-2 mb-1" />
                    <p className="text-sm text-muted-foreground">{item.explanation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Feedback Table */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Detailed AI Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {feedback.map((item, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    item.impact === "high" 
                      ? "border-destructive bg-destructive/5" 
                      : "border-primary bg-primary/5"
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-start gap-3">
                        {item.impact === "high" ? (
                          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <h4 className="font-semibold text-foreground">{item.issue}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      </div>
                      <Badge variant={item.impact === "high" ? "destructive" : "default"}>
                        {item.impact} impact
                      </Badge>
                    </div>
                    <div className="flex items-start gap-3 mt-3 pl-8">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-accent">Suggested Fix:</div>
                        <div className="text-sm text-foreground">{item.fix}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Comparison vs Top Freelancer */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Comparison with Top Freelancers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Your Profile</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Title</div>
                      <div className="text-sm text-foreground">{comparison.you.title}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Rate</div>
                      <div className="text-sm text-foreground font-medium">{comparison.you.rate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Portfolio Strength</div>
                      <div className="text-sm text-foreground font-medium">{comparison.you.portfolio}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Engagement Score</div>
                      <div className="text-sm text-foreground font-medium">{comparison.you.engagement}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border-2 border-accent bg-accent/5">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    Top Freelancer (Anonymous)
                    <Badge className="bg-accent">Reference</Badge>
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Title</div>
                      <div className="text-sm text-foreground font-medium">{comparison.top.title}</div>
                      <div className="text-xs text-accent mt-1">✨ More descriptive and emotional</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Rate</div>
                      <div className="text-sm text-foreground font-medium">{comparison.top.rate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Portfolio Strength</div>
                      <div className="text-sm text-foreground font-medium">{comparison.top.portfolio}</div>
                      <div className="text-xs text-accent mt-1">✨ Strong tech startup samples</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Engagement Score</div>
                      <div className="text-sm text-foreground font-medium">{comparison.top.engagement}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Insight Summary */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                AI Insight Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                💡 <strong>To improve your visibility and match rate:</strong> Lower your rate slightly to $20-22/hr to be competitive, 
                add 2 tech startup-related logo samples to your portfolio, and rewrite your proposal with a warmer, 
                storytelling tone. These changes could increase your match probability by approximately 40%.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Transparency;

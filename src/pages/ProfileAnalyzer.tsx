import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Sparkles, Upload, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const ProfileAnalyzer = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 2000);
  };

  const originalProfile = "Expert logo designer with experience in minimalist designs. I have worked for 2 years. Contact me for great logos.";
  
  const enhancedProfile = "🎨 Award-Winning Logo Designer | Crafting Iconic Brand Identities\n\nI transform your vision into memorable visual stories. With 2+ years of specialization in minimalist and modern logo design, I've helped 50+ startups and established brands stand out in competitive markets.\n\n✨ What I Offer:\n• Custom logo design with unlimited revisions\n• Brand identity packages\n• Source files in all formats (AI, EPS, PNG, SVG)\n• 48-hour turnaround time\n• 100% satisfaction guarantee\n\nLet's create something extraordinary together. Your brand deserves to shine!";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="lg:pl-64 pt-16">
        <div className="p-6 md:p-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">AI Profile Analyzer</h1>
            <p className="text-muted-foreground">
              Get instant AI-powered feedback and professional rewrites of your profile and gigs
            </p>
          </div>

          {/* Upload Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Your Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Paste your profile description, gig title, or proposal here..."
                className="min-h-[120px] mb-4"
                defaultValue={originalProfile}
              />
              <Button 
                onClick={handleAnalyze}
                disabled={analyzing}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                {analyzing ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing with AI...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Analyze with AI
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {analyzed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Analysis Results */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Analysis Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/10 border border-accent">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">Strong Points</div>
                        <div className="text-sm text-muted-foreground">Clear expertise mentioned, years of experience stated</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">Weak Points</div>
                        <div className="text-sm text-muted-foreground">
                          Too generic, lacks emotional appeal, no specific value proposition, missing portfolio highlights
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary">
                      <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">Recommendations</div>
                        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                          <li>Add specific client results or testimonials</li>
                          <li>Use more engaging, storytelling language</li>
                          <li>Highlight unique selling points</li>
                          <li>Include clear deliverables and timeline</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Before/After Comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Original Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-muted rounded-lg text-sm text-muted-foreground whitespace-pre-wrap">
                      {originalProfile}
                    </div>
                    <div className="mt-4 p-3 bg-destructive/10 rounded-lg">
                      <div className="text-sm font-medium text-destructive mb-1">Quality Score: 45/100</div>
                      <div className="text-xs text-muted-foreground">Needs significant improvement</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-accent" />
                      AI Enhanced Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-accent/5 rounded-lg text-sm text-foreground whitespace-pre-wrap border border-accent/20">
                      {enhancedProfile}
                    </div>
                    <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                      <div className="text-sm font-medium text-accent mb-1">Quality Score: 92/100</div>
                      <div className="text-xs text-muted-foreground">Excellent! Ready to attract clients</div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-accent to-secondary">
                      Copy Enhanced Version
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Metrics Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { metric: "Professionalism", before: 60, after: 95 },
                      { metric: "Clarity", before: 50, after: 90 },
                      { metric: "Engagement", before: 30, after: 88 },
                      { metric: "SEO Keywords", before: 40, after: 85 },
                      { metric: "Call-to-Action", before: 20, after: 92 },
                    ].map((item) => (
                      <div key={item.metric}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-foreground font-medium">{item.metric}</span>
                          <span className="text-muted-foreground">
                            {item.before}% → <span className="text-accent font-semibold">{item.after}%</span>
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full flex">
                            <div
                              className="bg-muted-foreground/30"
                              style={{ width: `${item.before}%` }}
                            />
                            <div
                              className="bg-gradient-to-r from-accent to-secondary"
                              style={{ width: `${item.after - item.before}%` }}
                            />
                          </div>
                        </div>
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

export default ProfileAnalyzer;

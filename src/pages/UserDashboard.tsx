import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  ClipboardCheck, 
  BookOpen, 
  Heart, 
  TrendingUp, 
  Calendar,
  MessageCircle,
  Star,
  Activity
} from "lucide-react";
import Layout from "@/components/Layout";

const UserDashboard = () => {
  return (
    <Layout userType="user">
      <div className="p-6 space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-calm p-6 rounded-xl shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">
                Welcome back! 👋
              </h1>
              <p className="text-muted-foreground text-lg">
                How are you feeling today? Let's continue your wellness journey.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-float">
                <Heart className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card hover:shadow-floating transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Wellness Score
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-healing-blue" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">78%</div>
              <Progress value={78} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">+5% from last week</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-floating transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Days Active
                </CardTitle>
                <Calendar className="h-4 w-4 text-calm-green" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
              <p className="text-xs text-muted-foreground mt-2">This month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-floating transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Support Connections
                </CardTitle>
                <Users className="h-4 w-4 text-soft-purple" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">24</div>
              <p className="text-xs text-muted-foreground mt-2">Active peers</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-floating transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Completed Tests
                </CardTitle>
                <ClipboardCheck className="h-4 w-4 text-warm-coral" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <p className="text-xs text-muted-foreground mt-2">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Quick Actions</h2>
            
            <Card className="shadow-card hover:shadow-floating transition-smooth group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="group-hover:text-primary transition-smooth">
                      Connect with Peer Support
                    </CardTitle>
                    <CardDescription>
                      Join conversations and share experiences with others
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                  Join Community
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-smooth group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-calm rounded-lg flex items-center justify-center">
                    <ClipboardCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="group-hover:text-primary transition-smooth">
                      Take Screening Test
                    </CardTitle>
                    <CardDescription>
                      Quick mental health assessment tools
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full hover:bg-primary hover:text-white">
                  Start Assessment
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-smooth group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-healing-blue/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-healing-blue" />
                  </div>
                  <div>
                    <CardTitle className="group-hover:text-primary transition-smooth">
                      Explore Resources
                    </CardTitle>
                    <CardDescription>
                      Helpful articles, videos, and coping strategies
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full hover:bg-healing-blue hover:text-white">
                  Browse Library
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Recent Activity</h2>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Your Journey This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Completed PHQ-9 Assessment</p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                  <Star className="h-4 w-4 text-healing-blue" />
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-healing-blue/5 rounded-lg">
                  <div className="w-2 h-2 bg-healing-blue rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Joined Anxiety Support Group</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                  <MessageCircle className="h-4 w-4 text-calm-green" />
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-calm-green/5 rounded-lg">
                  <div className="w-2 h-2 bg-calm-green rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Read "Managing Stress" article</p>
                    <p className="text-xs text-muted-foreground">5 days ago</p>
                  </div>
                  <BookOpen className="h-4 w-4 text-soft-purple" />
                </div>

                <Button variant="ghost" className="w-full mt-4 text-primary hover:bg-primary/10">
                  View Full History
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
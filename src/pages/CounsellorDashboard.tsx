import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Users, 
  ClipboardCheck, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Download,
  Filter
} from "lucide-react";
import Layout from "@/components/Layout";

const CounsellorDashboard = () => {
  return (
    <Layout userType="counsellor">
      <div className="p-6 space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-primary p-6 rounded-xl shadow-soft text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Counsellor Dashboard 👩‍⚕️
              </h1>
              <p className="text-white/90 text-lg">
                Monitor student wellness and track intervention outcomes
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center animate-float">
                <BarChart3 className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-card hover:shadow-floating transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Students
                </CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">247</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-floating transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Pending Reviews
                </CardTitle>
                <Clock className="h-4 w-4 text-warm-coral" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">18</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-floating transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  High Risk Alerts
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-destructive" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive mb-2">5</div>
              <p className="text-xs text-muted-foreground">Immediate follow-up needed</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-floating transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Completion Rate
                </CardTitle>
                <CheckCircle className="h-4 w-4 text-calm-green" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">89%</div>
              <Progress value={89} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">Assessment completion</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Quick Actions</h2>
            
            <Card className="shadow-card hover:shadow-floating transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  View Analytics
                </CardTitle>
                <CardDescription>
                  Comprehensive student wellness metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                  Open Analytics
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="h-5 w-5 text-healing-blue" />
                  Generate Report
                </CardTitle>
                <CardDescription>
                  Create detailed wellness reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full hover:bg-healing-blue hover:text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Generate PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Filter className="h-5 w-5 text-soft-purple" />
                  Filter Results
                </CardTitle>
                <CardDescription>
                  Advanced filtering and sorting options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full hover:bg-soft-purple hover:text-white">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Screening Results */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-foreground">Recent Screening Results</h2>
              <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                View All
              </Button>
            </div>
            
            <Card className="shadow-card">
              <CardContent className="p-0">
                <div className="space-y-0">
                  {/* High Risk Result */}
                  <div className="flex items-center justify-between p-4 border-b border-border/50 hover:bg-muted/30 transition-smooth">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      <div>
                        <p className="font-medium text-foreground">Sarah M. - PHQ-9 Assessment</p>
                        <p className="text-sm text-muted-foreground">Score: 18 (Severe Depression)</p>
                        <p className="text-xs text-muted-foreground">Completed 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-destructive/10 text-destructive text-xs rounded-md font-medium">
                        High Risk
                      </span>
                      <Button size="sm" variant="outline" className="text-xs">
                        Review
                      </Button>
                    </div>
                  </div>

                  {/* Medium Risk Result */}
                  <div className="flex items-center justify-between p-4 border-b border-border/50 hover:bg-muted/30 transition-smooth">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-warm-coral rounded-full"></div>
                      <div>
                        <p className="font-medium text-foreground">James L. - GAD-7 Assessment</p>
                        <p className="text-sm text-muted-foreground">Score: 12 (Moderate Anxiety)</p>
                        <p className="text-xs text-muted-foreground">Completed 5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-warm-coral/10 text-warm-coral text-xs rounded-md font-medium">
                        Medium Risk
                      </span>
                      <Button size="sm" variant="outline" className="text-xs">
                        Review
                      </Button>
                    </div>
                  </div>

                  {/* Low Risk Result */}
                  <div className="flex items-center justify-between p-4 border-b border-border/50 hover:bg-muted/30 transition-smooth">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-calm-green rounded-full"></div>
                      <div>
                        <p className="font-medium text-foreground">Emma R. - Stress Assessment</p>
                        <p className="text-sm text-muted-foreground">Score: 8 (Mild Stress)</p>
                        <p className="text-xs text-muted-foreground">Completed 1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-calm-green/10 text-calm-green text-xs rounded-md font-medium">
                        Low Risk
                      </span>
                      <Button size="sm" variant="outline" className="text-xs">
                        Review
                      </Button>
                    </div>
                  </div>

                  {/* Normal Result */}
                  <div className="flex items-center justify-between p-4 hover:bg-muted/30 transition-smooth">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <div>
                        <p className="font-medium text-foreground">Michael T. - Wellness Check</p>
                        <p className="text-sm text-muted-foreground">Score: 5 (Normal Range)</p>
                        <p className="text-xs text-muted-foreground">Completed 2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                        Normal
                      </span>
                      <Button size="sm" variant="outline" className="text-xs">
                        Review
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Weekly Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">New Assessments</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">+24</span>
                    <TrendingUp className="h-3 w-3 text-calm-green" />
                  </div>
                </div>
                <Progress value={78} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">High Risk Cases</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">-3</span>
                    <TrendingUp className="h-3 w-3 text-calm-green rotate-180" />
                  </div>
                </div>
                <Progress value={45} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Follow-up Rate</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">92%</span>
                    <TrendingUp className="h-3 w-3 text-calm-green" />
                  </div>
                </div>
                <Progress value={92} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-healing-blue" />
                Assessment Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">PHQ-9 (Depression)</span>
                  </div>
                  <span className="text-sm font-medium">156</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-healing-blue rounded-full"></div>
                    <span className="text-sm text-muted-foreground">GAD-7 (Anxiety)</span>
                  </div>
                  <span className="text-sm font-medium">134</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-warm-coral rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Stress Assessment</span>
                  </div>
                  <span className="text-sm font-medium">98</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-soft-purple rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Wellness Check</span>
                  </div>
                  <span className="text-sm font-medium">87</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CounsellorDashboard;
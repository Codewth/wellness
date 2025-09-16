import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Brain, Heart, LogOut, Sparkles, Leaf, Sun, Moon, Star, Cloud, Rainbow, Flower2, Shield, Zap, TreePine, Waves } from "lucide-react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const RoleSelection = () => {
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();

  // Redirect authenticated users to their appropriate dashboard
  if (user && profile) {
    const dashboardPath = profile.role === 'counsellor' ? '/counsellor-dashboard' : '/user-dashboard';
    return <Navigate to={dashboardPath} replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Mental Wellness Floating Elements */}
        <div className="absolute top-16 left-16 animate-bounce">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl animate-pulse shadow-xl">
            <TreePine className="h-8 w-8 text-emerald-300" />
          </div>
        </div>
        
        <div className="absolute top-32 right-20 animate-bounce" style={{animationDelay: '1s'}}>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl animate-pulse shadow-xl">
            <Waves className="h-8 w-8 text-cyan-300" />
          </div>
        </div>
        
        <div className="absolute bottom-32 left-24 animate-bounce" style={{animationDelay: '2s'}}>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl animate-pulse shadow-xl">
            <Sun className="h-8 w-8 text-yellow-300" />
          </div>
        </div>
        
        <div className="absolute bottom-20 right-16 animate-bounce" style={{animationDelay: '0.5s'}}>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl animate-pulse shadow-xl">
            <Rainbow className="h-8 w-8 text-purple-300" />
          </div>
        </div>
        
        <div className="absolute top-1/2 left-8 animate-bounce" style={{animationDelay: '1.5s'}}>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl animate-pulse shadow-xl">
            <Flower2 className="h-8 w-8 text-pink-300" />
          </div>
        </div>
        
        <div className="absolute top-1/3 right-8 animate-bounce" style={{animationDelay: '2.5s'}}>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl animate-pulse shadow-xl">
            <Star className="h-8 w-8 text-blue-300" />
          </div>
        </div>
        
        {/* Larger Gradient Orbs */}
        <div className="absolute top-1/4 left-1/5 w-48 h-48 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-56 h-56 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          {/* Animated Logo */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            <div className="relative inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-md rounded-full shadow-2xl">
              <Brain className="h-14 w-14 text-white animate-pulse" />
            </div>
            
            {/* Surrounding Icons */}
            <div className="absolute -top-4 -right-4">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-full animate-spin-slow">
                <Heart className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full animate-spin-slow" style={{animationDelay: '1s'}}>
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
              MindCare
            </h1>
            <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              🌱 Empowering your mental wellness journey with compassionate support, innovative tools, and a caring community
            </p>
            
            {/* Interactive Mental Health Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="text-3xl font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="text-3xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">100%</div>
                <div className="text-white/80">Confidential</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="text-3xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors">∞</div>
                <div className="text-white/80">Possibilities</div>
              </div>
            </div>
          </div>
          {user && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <p className="text-white/80">Welcome back, {profile?.full_name || 'User'}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={signOut}
                className="text-white border-white/30 hover:bg-white/10"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          )}
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Heart className="h-5 w-5" />
            <span className="text-lg">Supporting mental wellness together</span>
          </div>
        </div>

        {/* Enhanced Role Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enhanced User Card */}
          <Card className="group relative bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] animate-slide-up overflow-hidden">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="relative text-center pb-6">
              {/* Animated Icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <Users className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-yellow-400 p-1.5 rounded-full animate-spin-slow">
                    <Heart className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>
              
              <CardTitle className="text-3xl font-bold text-white mb-4 group-hover:text-pink-200 transition-colors duration-300">
                I'm seeking support
              </CardTitle>
              <CardDescription className="text-lg text-white/80 max-w-md mx-auto">
                Join our supportive community to access peer support, wellness tools, and resources for your mental health journey
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/90 group-hover:text-white transition-colors duration-300">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full">
                    <Heart className="h-4 w-4 text-pink-300" />
                  </div>
                  <span className="font-medium">Connect with peer support community</span>
                </div>
                <div className="flex items-center gap-4 text-white/90 group-hover:text-white transition-colors duration-300">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full">
                    <Brain className="h-4 w-4 text-blue-300" />
                  </div>
                  <span className="font-medium">Take mental health screening tests</span>
                </div>
                <div className="flex items-center gap-4 text-white/90 group-hover:text-white transition-colors duration-300">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full">
                    <TreePine className="h-4 w-4 text-emerald-300" />
                  </div>
                  <span className="font-medium">Access curated resource library</span>
                </div>
                <div className="flex items-center gap-4 text-white/90 group-hover:text-white transition-colors duration-300">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                    <Star className="h-4 w-4 text-purple-300" />
                  </div>
                  <span className="font-medium">Track your wellness journey</span>
                </div>
              </div>
              
              <Button 
                onClick={() => user ? navigate('/user-dashboard') : navigate('/auth')}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] group-hover:shadow-pink-500/25"
                size="lg"
              >
                <div className="flex items-center justify-center gap-3">
                  <Users className="h-5 w-5" />
                  <span>{user ? "Enter as User" : "Join Our Community"}</span>
                  <Sparkles className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* Enhanced Counsellor Card */}
          <Card className="group relative bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] animate-slide-up overflow-hidden" style={{ animationDelay: '0.2s' }}>
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="relative text-center pb-6">
              {/* Animated Icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <UserCheck className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-blue-400 p-1.5 rounded-full animate-spin-slow">
                    <Shield className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>
              
              <CardTitle className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-200 transition-colors duration-300">
                I'm a counsellor
              </CardTitle>
              <CardDescription className="text-lg text-white/80 max-w-md mx-auto">
                Empower others through professional guidance, comprehensive analytics, and evidence-based support tools
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/90 group-hover:text-white transition-colors duration-300">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full">
                    <Zap className="h-4 w-4 text-emerald-300" />
                  </div>
                  <span className="font-medium">View comprehensive student analytics</span>
                </div>
                <div className="flex items-center gap-4 text-white/90 group-hover:text-white transition-colors duration-300">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full">
                    <Brain className="h-4 w-4 text-blue-300" />
                  </div>
                  <span className="font-medium">Access all screening test results</span>
                </div>
                <div className="flex items-center gap-4 text-white/90 group-hover:text-white transition-colors duration-300">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                    <Waves className="h-4 w-4 text-cyan-300" />
                  </div>
                  <span className="font-medium">Monitor progress & wellness trends</span>
                </div>
                <div className="flex items-center gap-4 text-white/90 group-hover:text-white transition-colors duration-300">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full">
                    <Star className="h-4 w-4 text-teal-300" />
                  </div>
                  <span className="font-medium">Generate detailed insight reports</span>
                </div>
              </div>
              
              <Button 
                onClick={() => user ? navigate('/counsellor-dashboard') : navigate('/auth')}
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] group-hover:shadow-emerald-500/25"
                size="lg"
              >
                <div className="flex items-center justify-center gap-3">
                  <UserCheck className="h-5 w-5" />
                  <span>{user ? "Enter as Counsellor" : "Join as Professional"}</span>
                  <Shield className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-white/60 text-sm">
            Secure, confidential, and designed with your privacy in mind
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
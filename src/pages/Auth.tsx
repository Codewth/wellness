import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/hooks/useAuth';
import { Brain, Heart, Shield, AlertCircle, Sparkles, Leaf, Sun, Moon, Star, Cloud, Rainbow, Flower2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const { signIn, signUp, user, loading } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');

  // Validation functions
  const validateEmail = (email: string): string | null => {
    if (!email) {
      return 'Email is required';
    }
    if (!email.endsWith('@gmail.com')) {
      return 'Email must end with @gmail.com';
    }
    return null;
  };

  const validatePassword = (password: string): string | null => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    if (!hasLetter || !hasNumber) {
      return 'Password must contain both letters and numbers';
    }
    return null;
  };

  const validateForm = (email: string, password: string): boolean => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    
    setValidationErrors({
      email: emailError || undefined,
      password: passwordError || undefined,
    });

    if (emailError) {
      toast({
        title: "Invalid Email",
        description: emailError,
        variant: "destructive"
      });
    }

    if (passwordError) {
      toast({
        title: "Invalid Password",
        description: passwordError,
        variant: "destructive"
      });
    }

    return !emailError && !passwordError;
  };

  // Redirect if already authenticated
  if (user) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Validate form inputs
    if (!validateForm(email, password)) {
      return;
    }

    setIsLoading(true);
    const { error } = await signIn(email, password);
    
    if (!error) {
      // Clear validation errors
      setValidationErrors({});
      
      // Show success message
      toast({
        title: "Sign In Successful!",
        description: "Welcome back! Redirecting to your dashboard...",
        variant: "default"
      });
      
      // Clear the form
      (e.target as HTMLFormElement).reset();
      
      // Redirect will happen automatically via auth state change
    }
    
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;
    const role = formData.get('role') as 'user' | 'counsellor';

    // Validate form inputs
    if (!validateForm(email, password)) {
      return;
    }

    if (!fullName?.trim()) {
      toast({
        title: "Invalid Name",
        description: "Full name is required",
        variant: "destructive"
      });
      return;
    }

    if (!role) {
      toast({
        title: "Role Required",
        description: "Please select your role",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    const { error } = await signUp(email, password, fullName, role);
    
    if (!error) {
      // Clear validation errors
      setValidationErrors({});
      
      // Show success message and redirect to sign-in tab
      toast({
        title: "Registration Successful!",
        description: "Please check your email for confirmation, then sign in below.",
        variant: "default"
      });
      
      // Switch to sign-in tab
      setActiveTab('signin');
      
      // Clear the form
      (e.target as HTMLFormElement).reset();
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Mental Health Elements */}
        <div className="absolute top-10 left-10 animate-bounce">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full animate-pulse">
            <Heart className="h-6 w-6 text-pink-300" />
          </div>
        </div>
        
        <div className="absolute top-20 right-20 animate-bounce" style={{animationDelay: '1s'}}>
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full animate-pulse">
            <Leaf className="h-6 w-6 text-green-300" />
          </div>
        </div>
        
        <div className="absolute bottom-20 left-20 animate-bounce" style={{animationDelay: '2s'}}>
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full animate-pulse">
            <Sun className="h-6 w-6 text-yellow-300" />
          </div>
        </div>
        
        <div className="absolute bottom-10 right-10 animate-bounce" style={{animationDelay: '0.5s'}}>
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full animate-pulse">
            <Star className="h-6 w-6 text-blue-300" />
          </div>
        </div>
        
        <div className="absolute top-1/2 left-5 animate-bounce" style={{animationDelay: '1.5s'}}>
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full animate-pulse">
            <Cloud className="h-6 w-6 text-cyan-300" />
          </div>
        </div>
        
        <div className="absolute top-1/3 right-5 animate-bounce" style={{animationDelay: '2.5s'}}>
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full animate-pulse">
            <Flower2 className="h-6 w-6 text-purple-300" />
          </div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen">
        {/* Left Side - Decorative */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Main Logo with Animation */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative bg-white/20 backdrop-blur-sm p-8 rounded-full shadow-2xl">
                <Brain className="h-20 w-20 text-white animate-pulse" />
              </div>
            </div>
            
            {/* Title with Gradient */}
            <div className="space-y-4">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-pink-200 to-violet-200 bg-clip-text text-transparent">
                MindCare
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
                Empowering your mental wellness journey with compassionate support and innovative tools
              </p>
              
              {/* Interactive Feature Icons */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center group cursor-pointer">
                  <div className="bg-white/10 p-4 rounded-xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Heart className="h-8 w-8 text-pink-300 mx-auto" />
                  </div>
                  <p className="text-white/80 text-sm mt-2">Emotional Support</p>
                </div>
                
                <div className="text-center group cursor-pointer">
                  <div className="bg-white/10 p-4 rounded-xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Brain className="h-8 w-8 text-blue-300 mx-auto" />
                  </div>
                  <p className="text-white/80 text-sm mt-2">Mental Wellness</p>
                </div>
                
                <div className="text-center group cursor-pointer">
                  <div className="bg-white/10 p-4 rounded-xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Shield className="h-8 w-8 text-green-300 mx-auto" />
                  </div>
                  <p className="text-white/80 text-sm mt-2">Safe Space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Auth Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-6">
            {/* Mobile Header */}
            <div className="lg:hidden text-center space-y-4 animate-fade-in mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white/20 backdrop-blur-sm p-6 rounded-full">
                  <Brain className="h-12 w-12 text-white mx-auto" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-pink-200 to-violet-200 bg-clip-text text-transparent">
                  MindCare
                </h1>
                <p className="text-white/90 mt-2">Your wellness journey starts here</p>
              </div>
            </div>

            {/* Enhanced Auth Form */}
            <Card className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl animate-slide-up hover:shadow-3xl transition-all duration-500">
              {/* Sparkle Effect */}
              <div className="absolute -top-2 -right-2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-full animate-spin-slow">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Get Started</CardTitle>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                </div>
                <CardDescription className="text-white/80 text-base">
                  Join our supportive community for your mental wellness journey
                </CardDescription>
              </CardHeader>
          <CardContent>
              <Tabs value={activeTab} onValueChange={(value) => {
                setActiveTab(value as 'signin' | 'signup');
                setValidationErrors({}); // Clear validation errors when switching tabs
              }} className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10 p-1">
                  <TabsTrigger 
                    value="signin" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-violet-500 data-[state=active]:text-white text-white/80 font-medium"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger 
                    value="signup"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-teal-500 data-[state=active]:text-white text-white/80 font-medium"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Sign Up
                  </TabsTrigger>
                </TabsList>

              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-white font-medium">Email</Label>
                    <Input
                      id="signin-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email (must end with @gmail.com)"
                      required
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-pink-400 focus:ring-pink-400/20 transition-all duration-300 ${
                        validationErrors.email ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                    />
                    {validationErrors.email && (
                      <div className="flex items-center gap-1 text-sm text-destructive">
                        <AlertCircle className="h-3 w-3" />
                        <span>{validationErrors.email}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="text-white font-medium">Password</Label>
                    <Input
                      id="signin-password"
                      name="password"
                      type="password"
                      placeholder="Enter your password (min 6 chars, letters + numbers)"
                      required
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-pink-400 focus:ring-pink-400/20 transition-all duration-300 ${
                        validationErrors.password ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                    />
                    {validationErrors.password && (
                      <div className="flex items-center gap-1 text-sm text-destructive">
                        <AlertCircle className="h-3 w-3" />
                        <span>{validationErrors.password}</span>
                      </div>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-semibold py-3 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Signing in...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Heart className="h-4 w-4" />
                        Sign In
                      </div>
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="text-white font-medium">Full Name</Label>
                    <Input
                      id="signup-name"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-white font-medium">Email</Label>
                    <Input
                      id="signup-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email (must end with @gmail.com)"
                      required
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-300 ${
                        validationErrors.email ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                    />
                    {validationErrors.email && (
                      <div className="flex items-center gap-1 text-sm text-destructive">
                        <AlertCircle className="h-3 w-3" />
                        <span>{validationErrors.email}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-white font-medium">Password</Label>
                    <Input
                      id="signup-password"
                      name="password"
                      type="password"
                      placeholder="Create a password (min 6 chars, letters + numbers)"
                      required
                      minLength={6}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-300 ${
                        validationErrors.password ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                    />
                    {validationErrors.password && (
                      <div className="flex items-center gap-1 text-sm text-destructive">
                        <AlertCircle className="h-3 w-3" />
                        <span>{validationErrors.password}</span>
                      </div>
                    )}
                    <div className="text-xs text-white/60">
                      Password must be at least 6 characters and contain both letters and numbers
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-role" className="text-white font-medium">I am a...</Label>
                    <Select name="role" required>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-300">
                        <SelectValue placeholder="Select your role" className="text-white/60" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">
                          <div className="flex items-center gap-2">
                            <Heart className="h-4 w-4 text-warm-coral" />
                            <span>User seeking support</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="counsellor">
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-healing-blue" />
                            <span>Counsellor providing support</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-3 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Creating account...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Create Account
                      </div>
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

            {/* Enhanced Security Note */}
            <div className="text-center text-white/70 text-sm animate-fade-in mt-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <Shield className="h-4 w-4 text-green-300" />
                </div>
                <span className="font-medium">Your privacy and security are our priority</span>
              </div>
              <p className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                All data is encrypted and handled with the highest security standards.
              </p>
              
              {/* Mental Health Resources */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Rainbow className="h-4 w-4 text-purple-300" />
                  <span className="text-white/90 font-medium">Mental Health Support Available 24/7</span>
                </div>
                <p className="text-white/70 text-xs">
                  Crisis support: National Suicide Prevention Lifeline - 988
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, ClipboardList, BookOpen, Info, Heart, Wind, Lightbulb, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import Quiz from "@/components/Quiz";
import Resources from "@/components/Resources";
import MoodTracker from "@/components/MoodTracker";
import BreathingExercise from "@/components/BreathingExercise";
import CopingStrategies from "@/components/CopingStrategies";
import DailyAffirmations from "@/components/DailyAffirmations";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8 bg-card/50 backdrop-blur-sm border border-border p-1 h-auto gap-1">
              <TabsTrigger 
                value="home" 
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground py-3"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </TabsTrigger>
              <TabsTrigger 
                value="quiz"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground py-3"
              >
                <ClipboardList className="w-4 h-4" />
                <span className="hidden sm:inline">Assessment</span>
              </TabsTrigger>
              <TabsTrigger 
                value="mood"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground py-3"
              >
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Mood</span>
              </TabsTrigger>
              <TabsTrigger 
                value="breathing"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground py-3"
              >
                <Wind className="w-4 h-4" />
                <span className="hidden sm:inline">Breathing</span>
              </TabsTrigger>
              <TabsTrigger 
                value="coping"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground py-3"
              >
                <Lightbulb className="w-4 h-4" />
                <span className="hidden sm:inline">Coping</span>
              </TabsTrigger>
              <TabsTrigger 
                value="affirmations"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground py-3"
              >
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline">Affirmations</span>
              </TabsTrigger>
              <TabsTrigger 
                value="resources"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground py-3"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Resources</span>
              </TabsTrigger>
              <TabsTrigger 
                value="about"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground py-3"
              >
                <Info className="w-4 h-4" />
                <span className="hidden sm:inline">About</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="home" className="animate-in fade-in-50 duration-300">
              <div className="space-y-8">
                <Hero />
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-border bg-gradient-to-br from-card to-primary/5"
                    onClick={() => setActiveTab("quiz")}
                  >
                    <div className="p-3 bg-primary/20 rounded-xl w-fit mb-4">
                      <ClipboardList className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                    <p className="text-muted-foreground text-sm">
                      Take our 10-question quiz to understand your mental health status.
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-border bg-gradient-to-br from-card to-accent/5"
                    onClick={() => setActiveTab("mood")}
                  >
                    <div className="p-3 bg-accent/20 rounded-xl w-fit mb-4">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Mood Tracker</h3>
                    <p className="text-muted-foreground text-sm">
                      Log your daily moods and identify patterns over time.
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-border bg-gradient-to-br from-card to-primary/5"
                    onClick={() => setActiveTab("breathing")}
                  >
                    <div className="p-3 bg-primary/20 rounded-xl w-fit mb-4">
                      <Wind className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Breathing</h3>
                    <p className="text-muted-foreground text-sm">
                      Practice guided breathing exercises to reduce stress instantly.
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-border bg-gradient-to-br from-card to-accent/5"
                    onClick={() => setActiveTab("coping")}
                  >
                    <div className="p-3 bg-accent/20 rounded-xl w-fit mb-4">
                      <Lightbulb className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Coping Strategies</h3>
                    <p className="text-muted-foreground text-sm">
                      Discover evidence-based techniques to manage stress.
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-border bg-gradient-to-br from-card to-primary/5"
                    onClick={() => setActiveTab("affirmations")}
                  >
                    <div className="p-3 bg-primary/20 rounded-xl w-fit mb-4">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Affirmations</h3>
                    <p className="text-muted-foreground text-sm">
                      Start your day with positive affirmations and build resilience.
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-border bg-gradient-to-br from-card to-accent/5"
                    onClick={() => setActiveTab("resources")}
                  >
                    <div className="p-3 bg-accent/20 rounded-xl w-fit mb-4">
                      <BookOpen className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Resources</h3>
                    <p className="text-muted-foreground text-sm">
                      Access crisis contacts and professional support services.
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-gradient-to-br from-card to-primary/5"
                    onClick={() => setActiveTab("about")}
                  >
                    <div className="p-3 bg-primary/20 rounded-xl w-fit mb-4">
                      <Info className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">About MindCare</h3>
                    <p className="text-muted-foreground text-sm">
                      Learn more about our mission and features.
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-gradient-to-br from-card to-accent/5">
                    <div className="p-3 bg-accent/20 rounded-xl w-fit mb-4">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Anonymous & Secure</h3>
                    <p className="text-muted-foreground text-sm">
                      Your privacy is our priority. Everything is confidential.
                    </p>
                  </Card>
                </div>

                <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                  <h3 className="text-2xl font-bold mb-4">Why Mental Health Matters</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As a student in higher education, you face unique challenges: academic pressure, social adjustments, financial stress, and planning for the future. These stressors can significantly impact your mental well-being and academic performance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    MindCare is designed to help you identify stress levels early, access appropriate resources, and develop healthy coping strategies. Remember, seeking help is a sign of strength, not weakness.
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="quiz" className="animate-in fade-in-50 duration-300">
              <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Mental Health Assessment</h2>
                  <p className="text-muted-foreground">
                    Answer these 10 questions honestly to receive personalized recommendations and support resources.
                  </p>
                </div>
                <Quiz />
              </div>
            </TabsContent>

            <TabsContent value="mood" className="animate-in fade-in-50 duration-300">
              <MoodTracker />
            </TabsContent>

            <TabsContent value="breathing" className="animate-in fade-in-50 duration-300">
              <BreathingExercise />
            </TabsContent>

            <TabsContent value="coping" className="animate-in fade-in-50 duration-300">
              <CopingStrategies />
            </TabsContent>

            <TabsContent value="affirmations" className="animate-in fade-in-50 duration-300">
              <DailyAffirmations />
            </TabsContent>

            <TabsContent value="resources" className="animate-in fade-in-50 duration-300">
              <Resources />
            </TabsContent>

            <TabsContent value="about" className="animate-in fade-in-50 duration-300">
              <div className="max-w-3xl mx-auto space-y-6">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">About MindCare</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      MindCare is a comprehensive digital mental health and psychological support system specifically designed for students in higher education. Our platform provides a safe, anonymous, and accessible way to assess your mental well-being and access support resources.
                    </p>
                    <p>
                      Our mission is to break down barriers to mental health support and make it easier for students to prioritize their psychological well-being alongside their academic success.
                    </p>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Comprehensive Assessment:</strong> Evidence-based questionnaire to evaluate stress and mental health
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Personalized Recommendations:</strong> Tailored music therapy and coping strategies based on your results
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Resource Directory:</strong> Curated list of professional support services and emergency contacts
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Privacy First:</strong> Anonymous assessments with no data collection or tracking
                      </span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Important Notice</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MindCare is designed to be a supportive tool and resource directory. It is not a substitute for professional mental health care or crisis intervention services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If you are experiencing a mental health crisis or emergency, please contact emergency services (911) or reach out to the crisis helplines available in the Resources section immediately.
                  </p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;

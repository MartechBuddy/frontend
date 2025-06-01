
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Eye, Camera, Zap, ArrowRight, CheckCircle, Monitor, Smartphone, Tablet } from "lucide-react";

const VisualSeoAuditPage = () => {
  const features = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Playwright Screenshots",
      description: "Capture pixel-perfect screenshots of your pages across different devices and browsers."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Gemini Vision AI",
      description: "Advanced AI analyzes visual elements, layout issues, and user experience problems."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Multi-Device Testing",
      description: "Test how your pages look on desktop, tablet, and mobile devices simultaneously."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Insights",
      description: "Get immediate feedback on visual SEO issues and actionable improvement suggestions."
    }
  ];

  const deviceTypes = [
    { icon: <Monitor className="h-8 w-8" />, name: "Desktop", description: "1920x1080 viewport analysis" },
    { icon: <Tablet className="h-8 w-8" />, name: "Tablet", description: "1024x768 viewport analysis" },
    { icon: <Smartphone className="h-8 w-8" />, name: "Mobile", description: "375x667 viewport analysis" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Eye className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Visual SEO Audit
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            See your website through the eyes of search engines and users. Our AI-powered visual audit 
            identifies layout issues, mobile responsiveness problems, and visual SEO opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Visual Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="lg">
                See Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Advanced Visual Analysis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="text-primary mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Device Testing */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Multi-Device Visual Testing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {deviceTypes.map((device, index) => (
              <Card key={index} className="glass-card border-white/10 text-center">
                <CardHeader>
                  <div className="text-primary mb-4 flex justify-center">{device.icon}</div>
                  <CardTitle className="text-xl">{device.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{device.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Analyze */}
      <section className="py-20 px-6 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Visual Audit Analyzes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Layout shifts and CLS issues</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Mobile responsiveness problems</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Button and CTA visibility</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Font readability and contrast</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Image optimization opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Navigation usability issues</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Above-the-fold content analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Cross-browser compatibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            See Your Website Like Never Before
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get instant visual insights and AI-powered recommendations to improve your site's SEO performance.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Visual Audit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VisualSeoAuditPage;

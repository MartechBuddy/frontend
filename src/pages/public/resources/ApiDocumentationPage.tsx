
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Code, Book, Key, ArrowRight, Zap, Shield, Globe, Terminal } from "lucide-react";

const ApiDocumentationPage = () => {
  const endpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/projects",
      description: "Retrieve all projects for the authenticated user",
      status: "Available"
    },
    {
      method: "POST",
      endpoint: "/api/v1/projects/{id}/audit",
      description: "Trigger a new SEO audit for a specific project",
      status: "Available"
    },
    {
      method: "GET",
      endpoint: "/api/v1/keywords/{id}/metrics",
      description: "Get keyword performance metrics and rankings",
      status: "Available"
    },
    {
      method: "POST",
      endpoint: "/api/v1/content/generate",
      description: "Generate AI-powered content using our content engine",
      status: "Beta"
    },
    {
      method: "GET",
      endpoint: "/api/v1/workflows/{id}/results",
      description: "Retrieve results from executed workflows",
      status: "Coming Soon"
    }
  ];

  const sdks = [
    {
      language: "JavaScript",
      description: "Official JavaScript SDK for Node.js and browser environments",
      icon: "🟨"
    },
    {
      language: "Python",
      description: "Python SDK with asyncio support for data science workflows",
      icon: "🐍"
    },
    {
      language: "PHP",
      description: "PHP SDK for WordPress and Laravel integrations",
      icon: "🐘"
    },
    {
      language: "cURL",
      description: "Direct HTTP API access for any programming language",
      icon: "🔧"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Code className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            API Documentation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Integrate MartechEngine's powerful SEO automation directly into your applications. 
            Access our complete suite of SEO tools through our RESTful API.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get API Key <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              <Book className="mr-2 h-4 w-4" />
              Quick Start Guide
            </Button>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 px-6 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            API Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Fast & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  99.9% uptime with response times under 200ms for most endpoints.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/10">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  OAuth 2.0 authentication with rate limiting and request validation.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/10">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>RESTful</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Standard HTTP methods with JSON responses and comprehensive error handling.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/10">
              <CardHeader>
                <Terminal className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Well Documented</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Interactive documentation with code examples and live testing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Available Endpoints
          </h2>
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="glass-card border-white/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Badge variant={endpoint.method === "GET" ? "secondary" : "default"}>
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono">{endpoint.endpoint}</code>
                    </div>
                    <Badge variant={
                      endpoint.status === "Available" ? "default" : 
                      endpoint.status === "Beta" ? "secondary" : "outline"
                    }>
                      {endpoint.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{endpoint.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 px-6 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Official SDKs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk, index) => (
              <Card key={index} className="glass-card border-white/10 text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">{sdk.icon}</div>
                  <CardTitle>{sdk.language}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{sdk.description}</CardDescription>
                  <Button variant="outline" size="sm" className="mt-4">
                    Download SDK
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Getting Started
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Get Your API Key</h3>
                <p className="text-muted-foreground">
                  Sign up for a MartechEngine account and generate your API key from the integrations settings.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Make Your First Request</h3>
                <p className="text-muted-foreground">
                  Use your API key in the Authorization header to authenticate your requests.
                </p>
                <div className="mt-3 p-4 bg-muted rounded-lg">
                  <code className="text-sm">
                    curl -H "Authorization: Bearer YOUR_API_KEY" \<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;https://api.martechengine.ai/v1/projects
                  </code>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Explore & Build</h3>
                <p className="text-muted-foreground">
                  Use our interactive documentation to test endpoints and integrate SEO automation into your apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Integrate?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get started with our API and bring powerful SEO automation to your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Key className="mr-2 h-4 w-4" />
                Get API Access
              </Button>
            </Link>
            <Link to="/company/contact">
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocumentationPage;

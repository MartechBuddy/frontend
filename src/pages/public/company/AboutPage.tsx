
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Bot, Users, Lightbulb, Award, ArrowRight } from "lucide-react";

const AboutPage: React.FC = () => {
  const team = [
    {
      name: "Jane Smith",
      title: "CEO & Founder",
      bio: "AI and marketing technology expert with 15 years of experience in digital transformation.",
      imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400"
    },
    {
      name: "Michael Johnson",
      title: "CTO",
      bio: "Machine learning specialist with a background in natural language processing and search technologies.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Sara Chen",
      title: "Head of Product",
      bio: "Product strategist focused on creating intuitive AI-powered tools for marketers and content creators.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
    },
    {
      name: "David Wilson",
      title: "Head of AI Research",
      bio: "AI researcher specializing in content optimization and semantic analysis for search engines.",
      imageUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400"
    }
  ];
  
  const values = [
    {
      title: "Innovation",
      description: "We're committed to staying at the forefront of AI and marketing technology.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />
    },
    {
      title: "Accessibility",
      description: "We make advanced AI tools accessible to businesses of all sizes.",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product development to customer support.",
      icon: <Award className="h-8 w-8 text-primary" />
    },
    {
      title: "Future-Focus",
      description: "We help businesses prepare for the future of digital marketing and AI search.",
      icon: <Bot className="h-8 w-8 text-primary" />
    }
  ];
  
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">About MartechEngine</h1>
          <p className="text-xl text-muted-foreground mb-6">
            We're on a mission to help businesses thrive in the AI-driven digital landscape.
          </p>
          <p className="text-muted-foreground mb-6">
            Founded in 2023, MartechEngine was created to address the growing need for businesses to adapt to AI-powered search and digital marketing. Our team of AI specialists, SEO experts, and marketing technologists developed a comprehensive platform to help websites become AI-ready and optimize their digital presence.
          </p>
          <p className="text-muted-foreground mb-6">
            Today, MartechEngine serves thousands of businesses worldwide, providing cutting-edge tools for AI readiness, content creation, SEO optimization, and social media management.
          </p>
        </div>
        <div className="md:w-1/2 animate-scale-in">
          <div className="glass-card border-white/10 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800" 
              alt="MartechEngine Team" 
              className="w-full h-auto rounded-xl" 
            />
          </div>
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-xl border border-white/5 transition hover:border-primary/20 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-xl border border-white/5 text-center animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.title}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="glass-card border-white/10 rounded-2xl p-8 mb-20 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Story</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-4">
            MartechEngine began with a simple observation: as AI-powered search engines became more prevalent, businesses needed new strategies to maintain and improve their digital visibility.
          </p>
          <p className="text-muted-foreground mb-4">
            Our founder, Jane Smith, a veteran in digital marketing, recognized that traditional SEO approaches weren't sufficient for the emerging AI landscape. Websites needed to be optimized not just for keywords and backlinks, but for AI comprehension and citation.
          </p>
          <p className="text-muted-foreground mb-4">
            In 2023, Jane assembled a team of AI experts, SEO specialists, and software engineers to create MartechEngine—a comprehensive platform designed to help businesses thrive in the age of AI search.
          </p>
          <p className="text-muted-foreground">
            Today, MartechEngine is at the forefront of AI-powered marketing technology, continuously innovating to help businesses stay ahead in the rapidly evolving digital landscape.
          </p>
        </div>
      </div>
      
      <div className="text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Join the AI-Ready Revolution</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Ready to transform your digital strategy with AI-powered tools?
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup">
            <Button size="lg">Start Free Trial</Button>
          </Link>
          <Link to="/company/contact">
            <Button variant="outline" size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

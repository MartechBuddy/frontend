
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Sarah has over 15 years of experience in AI and marketing tech, previously leading product at Google AI.",
    image: "/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Michael is an AI researcher with multiple publications in natural language processing and content optimization.",
    image: "/lovable-uploads/7cde59e6-81c6-467f-8b5a-fd5f2be3df08.png"
  },
  {
    name: "Alex Rodriguez",
    role: "VP of Product",
    bio: "Alex has worked with leading marketing agencies to implement AI solutions for Fortune 500 companies.",
    image: "/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png"
  }
];

const milestones = [
  {
    year: "2023",
    title: "MartechEngine Founded",
    description: "Company founded with a mission to make AI accessible for all marketers."
  },
  {
    year: "2024",
    title: "Platform Launch",
    description: "Initial platform launch with AI Readiness and Content Automation tools."
  },
  {
    year: "2024",
    title: "Series A Funding",
    description: "$12M in funding to expand features and grow the team."
  }
];

const About = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At MartechEngine.ai, we're on a mission to democratize AI for marketers and website owners. 
            We believe that every business, regardless of size, should have access to powerful AI tools 
            that improve their online presence and drive growth.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="glass-card border-white/10 rounded-xl p-6 flex flex-col items-center text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="relative mb-12 flex items-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-1/2 pr-8 ${index % 2 === 1 ? 'opacity-0' : 'text-right'}`}>
                  {index % 2 === 0 && (
                    <>
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-1">{milestone.description}</p>
                    </>
                  )}
                </div>

                <div className="z-10 rounded-full w-10 h-10 bg-primary/20 flex items-center justify-center border border-white/10">
                  <span className="text-sm font-semibold">{milestone.year}</span>
                </div>

                <div className={`w-1/2 pl-8 ${index % 2 === 0 ? 'opacity-0' : ''}`}>
                  {index % 2 === 1 && (
                    <>
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-1">{milestone.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're growing rapidly and always looking for talented individuals to join our team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/careers">
              <Button>View Career Opportunities</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="glass-button">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MapPin, Globe } from "lucide-react";

type JobPosting = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  description: string;
  requirements: string[];
  posted: string;
};

const jobPostings: JobPosting[] = [
  {
    id: "1",
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "We're looking for a Senior AI Engineer to help build our next-generation AI marketing tools. You'll work on developing and improving our machine learning models for content analysis, optimization, and generation.",
    requirements: [
      "5+ years of experience in machine learning or AI development",
      "Strong experience with Python, TensorFlow, or PyTorch",
      "Background in NLP and content analysis",
      "Experience with deploying ML models in production",
      "Excellent communication skills"
    ],
    posted: "2 days ago"
  },
  {
    id: "2",
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Join our marketing team to help bring our AI marketing tools to a wider audience. You'll develop go-to-market strategies, create compelling marketing materials, and work closely with sales and product teams.",
    requirements: [
      "3+ years of experience in product marketing, preferably in SaaS",
      "Strong understanding of digital marketing and SEO",
      "Exceptional writing and communication skills",
      "Experience in marketing analytics and campaign measurement",
      "Ability to translate technical features into benefits"
    ],
    posted: "1 week ago"
  },
  {
    id: "3",
    title: "Frontend Developer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    description: "We're seeking a Frontend Developer to create beautiful, intuitive interfaces for our marketing platform. You'll work closely with designers and backend engineers to implement responsive, accessible UIs.",
    requirements: [
      "3+ years of experience with React and modern JavaScript",
      "Strong knowledge of HTML, CSS, and responsive design",
      "Experience with component libraries and design systems",
      "Understanding of performance optimization techniques",
      "Eye for detail and commitment to quality"
    ],
    posted: "3 days ago"
  },
  {
    id: "4",
    title: "Customer Success Specialist",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description: "Help our customers get the most out of MartechEngine.ai. You'll onboard new customers, provide training and support, and work to ensure customer satisfaction and retention.",
    requirements: [
      "2+ years of customer success or account management experience",
      "Strong understanding of SaaS platforms and digital marketing",
      "Excellent communication and presentation skills",
      "Problem-solving mindset and ability to prioritize effectively",
      "Customer-centric approach to problem-solving"
    ],
    posted: "5 days ago"
  },
  {
    id: "5",
    title: "Content Strategist",
    department: "Marketing",
    location: "Remote",
    type: "Contract",
    description: "We're looking for a Content Strategist to help develop our thought leadership and educational content. You'll create engaging content that demonstrates our expertise and provides value to our target audience.",
    requirements: [
      "3+ years of experience in content creation",
      "Strong understanding of SEO and content marketing",
      "Excellent writing and editing skills",
      "Familiarity with AI, marketing technology, or SaaS",
      "Ability to communicate complex topics in an accessible way"
    ],
    posted: "2 weeks ago"
  },
  {
    id: "6",
    title: "DevOps Engineer",
    department: "Operations",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join our operations team to help build and maintain our cloud infrastructure. You'll work on automating deployments, ensuring scalability, and maintaining security and reliability.",
    requirements: [
      "3+ years of DevOps experience",
      "Strong knowledge of AWS or similar cloud platforms",
      "Experience with containerization (Docker, Kubernetes)",
      "Understanding of CI/CD pipelines",
      "Security-first mindset"
    ],
    posted: "1 week ago"
  }
];

const filters = {
  departments: ["All", "Engineering", "Marketing", "Customer Success", "Operations"],
  locations: ["All", "San Francisco, CA", "New York, NY", "Remote"],
  types: ["All", "Full-time", "Part-time", "Contract"]
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [filters, setFilters] = useState({
    department: "All",
    location: "All",
    type: "All"
  });
  const { toast } = useToast();

  const filteredJobs = jobPostings.filter(job => {
    return (
      (filters.department === "All" || job.department === filters.department) &&
      (filters.location === "All" || job.location === filters.location) &&
      (filters.type === "All" || job.type === filters.type)
    );
  });

  const applyForJob = () => {
    toast({
      title: "Application Received",
      description: "Thank you for your interest! We'll review your application and contact you soon.",
    });
    setSelectedJob(null);
  };

  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're on a mission to make AI accessible for marketers. Join us in building the future of marketing technology.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Culture</h2>
              <p className="text-muted-foreground mb-4">
                At MartechEngine.ai, we believe in collaboration, innovation, and continuous learning. Our team consists of passionate individuals from diverse backgrounds, united by our mission to democratize AI for marketers.
              </p>
              <p className="text-muted-foreground mb-4">
                We value creativity, ownership, and impact. Every team member has the opportunity to contribute meaningful ideas and see them through to execution. We celebrate successes together and learn from challenges as a team.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-lg">🌱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Growth Mindset</h3>
                    <p className="text-sm text-muted-foreground">We embrace challenges and see effort as a path to mastery</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-lg">🔄</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Iterative Improvement</h3>
                    <p className="text-sm text-muted-foreground">We believe in starting small, learning fast, and improving continuously</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-lg">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Collaborative Spirit</h3>
                    <p className="text-sm text-muted-foreground">We achieve more by working together and supporting each other</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png" 
                alt="Team collaboration" 
                className="rounded-xl max-w-full h-auto glass-card p-2 border-white/10"
              />
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <select 
              className="glass-button border-white/10 rounded-md py-2 px-4 bg-transparent"
              value={filters.department}
              onChange={(e) => setFilters({...filters, department: e.target.value})}
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Customer Success">Customer Success</option>
              <option value="Operations">Operations</option>
            </select>

            <select 
              className="glass-button border-white/10 rounded-md py-2 px-4 bg-transparent"
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
            >
              <option value="All">All Locations</option>
              <option value="San Francisco, CA">San Francisco, CA</option>
              <option value="New York, NY">New York, NY</option>
              <option value="Remote">Remote</option>
            </select>

            <select 
              className="glass-button border-white/10 rounded-md py-2 px-4 bg-transparent"
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="All">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job, idx) => (
              <Card 
                key={job.id} 
                className="glass-card border-white/10 hover:border-primary/30 transition-all cursor-pointer animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => setSelectedJob(job)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <p className="text-primary mt-1">{job.department}</p>
                    </div>
                    <span className="bg-primary/10 text-primary text-xs py-1 px-2 rounded">{job.type}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin size={14} className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {job.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Posted {job.posted}</span>
                    <ArrowRight size={16} className="text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 glass-card border-white/10 rounded-xl">
              <h3 className="text-xl mb-2">No open positions match your filters</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search criteria or check back later.</p>
              <Button 
                variant="outline" 
                className="glass-button"
                onClick={() => setFilters({department: "All", location: "All", type: "All"})}
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Job Detail Modal */}
          {selectedJob && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="glass-card border-white/10 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
                      <p className="text-primary">{selectedJob.department}</p>
                    </div>
                    <button 
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => setSelectedJob(null)}
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <MapPin size={14} className="mr-1" />
                    <span className="mr-4">{selectedJob.location}</span>
                    <Globe size={14} className="mr-1" />
                    <span>{selectedJob.type}</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">About the Role</h3>
                      <p className="text-muted-foreground">{selectedJob.description}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {selectedJob.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Competitive salary and equity</li>
                        <li>Comprehensive health, dental, and vision coverage</li>
                        <li>Flexible work arrangements</li>
                        <li>Professional development budget</li>
                        <li>Generous paid time off</li>
                        <li>Team events and retreats</li>
                      </ul>
                    </div>
                    <div className="pt-4 flex justify-between">
                      <Button variant="outline" className="glass-button" onClick={() => setSelectedJob(null)}>
                        Cancel
                      </Button>
                      <Button onClick={applyForJob}>
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card border-white/10 p-8 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute.
          </p>
          <Button onClick={() => {
            toast({
              title: "General Application Received",
              description: "Thank you for your interest! We'll review your application and contact you if we have a suitable position."
            });
          }}>
            Send General Application
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;


import React from 'react';
import { Zap, Target, TrendingUp, Cpu } from 'lucide-react';

const ValuePropositionSection: React.FC = () => {
  const problems = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Manual SEO Tasks",
      description: "Stop wasting time on repetitive SEO work that AI can handle automatically"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Missed Opportunities", 
      description: "Discover high-impact keywords and content gaps your competitors are missing"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Slow Growth",
      description: "Accelerate your SEO results with AI-powered optimization and automation"
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Outdated Tools",
      description: "Traditional SEO tools can't match AI-driven insights and real-time optimization"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Core SEO Pain Points <span className="text-gradient">Solved</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Traditional SEO approaches are holding back your growth potential
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="glass-card p-6 rounded-xl text-center animate-fade-in">
              <div className="mb-4 flex justify-center">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;


import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card border-primary/20 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your 
              <span className="text-gradient block">Digital Strategy?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of businesses gaining the AI search advantage. 
              Start optimizing your SEO with intelligent automation today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link to="/signup">
                <Button size="lg" className="text-lg px-8 py-4 group">
                  Start Your Free Trial Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/demo">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 glass-button group">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Personalized Demo
                </Button>
              </Link>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>✓ No credit card required</p>
              <p>✓ 14-day free trial</p>
              <p>✓ Setup in under 5 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

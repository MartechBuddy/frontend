
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Building, Star } from 'lucide-react';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const LocalSeoPage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Local SEO</h1>
            <p className="text-muted-foreground mt-2">
              Optimize your business for local search results
            </p>
          </div>
          <Button onClick={() => setShowComingSoon(true)}>
            <MapPin className="h-4 w-4 mr-2" />
            Start Local Audit
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                NAP Consistency
              </CardTitle>
              <CardDescription>Name, Address, Phone number verification</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" onClick={() => setShowComingSoon(true)}>
                Check NAP
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Local Citations
              </CardTitle>
              <CardDescription>Directory listings and citations</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" onClick={() => setShowComingSoon(true)}>
                Find Citations
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Local Schema
              </CardTitle>
              <CardDescription>Generate local business schema</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" onClick={() => setShowComingSoon(true)}>
                Generate Schema
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="Local SEO Tools"
        description="Our local SEO optimization tools are currently under development and will be available soon."
      />
    </>
  );
};

export default LocalSeoPage;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, FileText, Globe, Calendar, Download, Plus } from 'lucide-react';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const ReportsPage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  
  const reports = [
    {
      title: 'Monthly SEO Performance',
      date: 'Generated on Apr 30, 2024',
      description: 'Overview of keyword rankings, traffic, and organic conversions',
      image: '/lovable-uploads/7cde59e6-81c6-467f-8b5a-fd5f2be3df08.png',
      type: 'Performance'
    },
    {
      title: 'Technical SEO Audit Report',
      date: 'Generated on Apr 28, 2024',
      description: 'Comprehensive analysis of site health and technical SEO issues',
      image: '/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png',
      type: 'Audit'
    },
    {
      title: 'Content Performance Analysis',
      date: 'Generated on Apr 25, 2024',
      description: 'Engagement metrics and optimization opportunities for top content',
      image: '/lovable-uploads/7cde59e6-81c6-467f-8b5a-fd5f2be3df08.png',
      type: 'Content'
    },
    {
      title: 'Competitor Gap Analysis',
      date: 'Generated on Apr 20, 2024',
      description: 'Comparison of your SEO performance against top competitors',
      image: '/lovable-uploads/5ec3f8f5-d5fa-43a6-bc6d-2e84759d406a.png',
      type: 'Competitive'
    }
  ];

  const handleGenerateReport = () => {
    setShowComingSoon(true);
  };

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Reports & Analytics</h1>
            <p className="text-muted-foreground mt-2">
              Generate, view, and share comprehensive SEO reports
            </p>
          </div>
          <Button onClick={handleGenerateReport}>
            <Plus className="h-4 w-4 mr-2" />
            Generate New Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <Card key={index} className="glass-card border-white/10 overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-primary/30 to-primary/5 flex items-center justify-center">
                <BarChart className="h-16 w-16 text-primary/50" />
              </div>
              
              <CardHeader className="pt-5 pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    report.type === 'Performance' ? 'bg-blue-500/10 text-blue-500' :
                    report.type === 'Audit' ? 'bg-red-500/10 text-red-500' :
                    report.type === 'Content' ? 'bg-green-500/10 text-green-500' :
                    'bg-purple-500/10 text-purple-500'
                  }`}>
                    {report.type}
                  </span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {report.date}
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="mb-4">
                  {report.description}
                </CardDescription>
                
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1 glass-button">
                    <Globe className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="Report Generator"
        description="Our AI-powered report generator is currently under development and will be available soon. You'll be able to create custom reports for any aspect of your SEO performance."
      />
    </>
  );
};

export default ReportsPage;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LegalBasePageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalBasePage: React.FC<LegalBasePageProps> = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>
          
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl">Legal Notice</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none dark:prose-invert">
              {children}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LegalBasePage;

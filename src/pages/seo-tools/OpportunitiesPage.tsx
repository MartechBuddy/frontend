
import React, { useState } from 'react';
import { TrendingUp, AlertTriangle, CheckCircle, Clock, Zap, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Opportunity {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  category: 'technical' | 'content' | 'performance' | 'links';
  affectedPages: number;
  tokenCost: number;
  estimatedImprovement: string;
}

const OpportunitiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const opportunities: Opportunity[] = [
    {
      id: '1',
      title: 'Fix Missing Meta Descriptions',
      description: '15 pages are missing meta descriptions, which can impact click-through rates from search results.',
      impact: 'high',
      effort: 'low',
      category: 'content',
      affectedPages: 15,
      tokenCost: 8,
      estimatedImprovement: '+12% CTR'
    },
    {
      id: '2',
      title: 'Optimize Page Speed',
      description: 'Several pages have slow loading times affecting user experience and search rankings.',
      impact: 'high',
      effort: 'medium',
      category: 'performance',
      affectedPages: 8,
      tokenCost: 15,
      estimatedImprovement: '+25% Core Web Vitals'
    },
    {
      id: '3',
      title: 'Add Schema Markup',
      description: 'Product pages lack structured data that could enhance search result appearance.',
      impact: 'medium',
      effort: 'medium',
      category: 'technical',
      affectedPages: 23,
      tokenCost: 12,
      estimatedImprovement: 'Rich snippets'
    },
    {
      id: '4',
      title: 'Internal Linking Opportunities',
      description: 'Orphaned pages and weak internal link structure identified.',
      impact: 'medium',
      effort: 'low',
      category: 'links',
      affectedPages: 12,
      tokenCost: 6,
      estimatedImprovement: '+18% page authority'
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-900 text-red-100';
      case 'medium': return 'bg-yellow-900 text-yellow-100';
      case 'low': return 'bg-green-900 text-green-100';
      default: return 'bg-gray-900 text-gray-100';
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case 'low': return 'bg-green-900 text-green-100';
      case 'medium': return 'bg-yellow-900 text-yellow-100';
      case 'high': return 'bg-red-900 text-red-100';
      default: return 'bg-gray-900 text-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technical': return <AlertTriangle size={16} />;
      case 'content': return <CheckCircle size={16} />;
      case 'performance': return <TrendingUp size={16} />;
      case 'links': return <ArrowRight size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const filteredOpportunities = selectedCategory === 'all' 
    ? opportunities 
    : opportunities.filter(opp => opp.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-100">SEO Opportunities</h1>
          <p className="text-gray-400 mt-2">AI-powered recommendations to improve your search rankings</p>
        </div>
        <Button className="bg-cyan-600 hover:bg-cyan-700">
          <Zap className="mr-2 h-4 w-4" />
          Run Full Analysis
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Opportunities</p>
                <p className="text-2xl font-bold text-gray-100">{opportunities.length}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-cyan-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">High Impact</p>
                <p className="text-2xl font-bold text-red-400">
                  {opportunities.filter(o => o.impact === 'high').length}
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Pages Affected</p>
                <p className="text-2xl font-bold text-gray-100">
                  {opportunities.reduce((sum, o) => sum + o.affectedPages, 0)}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Est. Token Cost</p>
                <p className="text-2xl font-bold text-cyan-400">
                  {opportunities.reduce((sum, o) => sum + o.tokenCost, 0)}
                </p>
              </div>
              <Zap className="h-8 w-8 text-cyan-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Opportunities List */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-100">Optimization Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-5 bg-gray-900">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="links">Links</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-6">
              <div className="space-y-4">
                {filteredOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="bg-gray-900 border-gray-600">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {getCategoryIcon(opportunity.category)}
                            <h3 className="text-lg font-semibold text-gray-100">{opportunity.title}</h3>
                            <Badge className={getImpactColor(opportunity.impact)}>
                              {opportunity.impact} impact
                            </Badge>
                            <Badge className={getEffortColor(opportunity.effort)}>
                              {opportunity.effort} effort
                            </Badge>
                          </div>
                          
                          <p className="text-gray-400 mb-4">{opportunity.description}</p>
                          
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <span>{opportunity.affectedPages} pages affected</span>
                            <span>{opportunity.tokenCost} tokens required</span>
                            <span className="text-green-400">{opportunity.estimatedImprovement}</span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                            View Details
                          </Button>
                          <Button className="bg-cyan-600 hover:bg-cyan-700">
                            <Zap className="mr-2 h-4 w-4" />
                            Apply Fix
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpportunitiesPage;

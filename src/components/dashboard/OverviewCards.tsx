
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Target, Zap } from 'lucide-react';

const OverviewCards: React.FC = () => {
  const stats = [
    {
      title: 'Active Projects',
      value: '3',
      change: '+2 this month',
      trend: 'up',
      icon: <Target className="h-4 w-4 text-primary" />
    },
    {
      title: 'Total AI Calls',
      value: '1,247',
      change: '+18% from last month', 
      trend: 'up',
      icon: <Zap className="h-4 w-4 text-primary" />
    },
    {
      title: 'SEO Score Average',
      value: '87%',
      change: '+12 points improved',
      trend: 'up',
      icon: <TrendingUp className="h-4 w-4 text-primary" />
    },
    {
      title: 'Content Generated',
      value: '24',
      change: '8 published this week',
      trend: 'up', 
      icon: <Users className="h-4 w-4 text-primary" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OverviewCards;

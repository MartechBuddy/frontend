
import React from 'react';
import OverviewCards from '@/components/dashboard/OverviewCards';
import ProjectSelector from '@/components/dashboard/ProjectSelector';
import AIUsageIndicator from '@/components/dashboard/AIUsageIndicator';
import RecentActivity from '@/components/dashboard/RecentActivity';
import QuickActions from '@/components/dashboard/QuickActions';
import TopOpportunities from '@/components/dashboard/TopOpportunities';

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Centralized overview of all your SEO activities and opportunities
          </p>
        </div>
      </div>

      {/* Overview Stats */}
      <OverviewCards />

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <QuickActions />
          <TopOpportunities />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <ProjectSelector />
          <AIUsageIndicator />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

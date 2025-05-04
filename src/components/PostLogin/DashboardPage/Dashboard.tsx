
import React from "react";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your MartechEngine dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="font-medium mb-2">Site Health</h2>
          <div className="text-3xl font-bold">82%</div>
        </Card>
        <Card className="p-6">
          <h2 className="font-medium mb-2">Traffic</h2>
          <div className="text-3xl font-bold">1,245</div>
        </Card>
        <Card className="p-6">
          <h2 className="font-medium mb-2">Content Progress</h2>
          <div className="text-3xl font-bold">50%</div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

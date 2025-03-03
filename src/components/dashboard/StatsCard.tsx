
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  trend?: {
    value: string;
    positive: boolean;
  };
  icon?: LucideIcon;
  className?: string;
  chart?: Array<{ value: number }>;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  trend,
  icon: Icon,
  className,
  chart,
}) => {
  return (
    <Card className={cn("glass-card p-5 rounded-xl border-white/5 animate-fade-in", className)}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-2xl font-semibold tracking-tight">{value}</h3>
            {trend && (
              <span
                className={cn(
                  "ml-2 text-xs flex items-center font-medium",
                  trend.positive ? "text-green-400" : "text-red-400"
                )}
              >
                {trend.positive ? "+" : "-"}
                {trend.value}
              </span>
            )}
          </div>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        {Icon && (
          <div className="p-2 rounded-full bg-primary/10">
            <Icon size={18} className="text-primary" />
          </div>
        )}
      </div>
      
      {chart && (
        <div className="h-16 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chart}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(217.2, 91.2%, 59.8%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(217.2, 91.2%, 59.8%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(217.2, 91.2%, 59.8%)" 
                fillOpacity={1} 
                fill="url(#colorValue)" 
                strokeWidth={1.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  );
};

export default StatsCard;

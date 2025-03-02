
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

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
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  trend,
  icon: Icon,
  className,
}) => {
  return (
    <div className={cn("glass-card p-5 rounded-xl animate-fade-in", className)}>
      <div className="flex justify-between items-start mb-3">
        <p className="text-sm text-muted-foreground font-medium">{title}</p>
        {Icon && (
          <div className="p-2 rounded-full bg-primary/10">
            <Icon size={18} className="text-primary" />
          </div>
        )}
      </div>
      <div className="flex items-baseline">
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
  );
};

export default StatsCard;

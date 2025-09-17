import React from 'react';
import { DivideIcon as LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
}

export function StatsCard({ title, value, change, trend, icon: Icon }: StatsCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-green-600" strokeWidth={1.5} />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-xl font-semibold text-gray-800">{value}</p>
          </div>
        </div>
        <div className={`flex items-center text-xs font-medium ${
          trend === 'up' ? 'text-green-600' : 'text-red-500'
        }`}>
          {trend === 'up' ? (
            <TrendingUp className="w-3 h-3 mr-1" strokeWidth={1.5} />
          ) : (
            <TrendingDown className="w-3 h-3 mr-1" strokeWidth={1.5} />
          )}
          {change}
        </div>
      </div>
    </div>
  );
}
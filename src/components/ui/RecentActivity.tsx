import React from 'react';
import { Clock, User, Calculator, FileText } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'payroll',
    title: 'Engineering payroll processed',
    description: 'Monthly payroll for 42 employees completed',
    time: '2 hours ago',
    icon: Calculator,
    color: 'green'
  },
  {
    id: 2,
    type: 'employee',
    title: 'New employee added',
    description: 'Sarah Johnson joined the Engineering team',
    time: '4 hours ago',
    icon: User,
    color: 'blue'
  },
  {
    id: 3,
    type: 'report',
    title: 'Monthly report generated',
    description: 'February payroll summary report is ready',
    time: '1 day ago',
    icon: FileText,
    color: 'purple'
  },
  {
    id: 4,
    type: 'payroll',
    title: 'Sales team payroll pending',
    description: 'Awaiting approval for 28 employees',
    time: '2 days ago',
    icon: Clock,
    color: 'orange'
  }
];

const getColorClasses = (color: string) => {
  const colorMap = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.green;
};

export function RecentActivity() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
      <h3 className="text-base font-semibold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(activity.color)}`}>
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
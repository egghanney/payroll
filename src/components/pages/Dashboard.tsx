import React from 'react';
import { StatsCard } from '../ui/StatsCard';
import { Chart } from '../ui/Chart';
import { RecentActivity } from '../ui/RecentActivity';
import { QuickActions } from '../ui/QuickActions';
import { Users, Calculator, TrendingUp, AlertTriangle } from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      title: 'Total Employees',
      value: '1,247',
      change: '+12%',
      trend: 'up' as const,
      icon: Users
    },
    {
      title: 'Monthly Payroll',
      value: '$2,847,392',
      change: '+8%',
      trend: 'up' as const,
      icon: Calculator
    },
    {
      title: 'Average Salary',
      value: '$72,450',
      change: '+5%',
      trend: 'up' as const,
      icon: TrendingUp
    },
    {
      title: 'Pending Reviews',
      value: '23',
      change: '-15%',
      trend: 'down' as const,
      icon: AlertTriangle
    }
  ];

  const payrollData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Payroll Amount',
      data: [2650000, 2720000, 2680000, 2750000, 2820000, 2847392],
      backgroundColor: '#228BE6',
      borderRadius: 4,
    }]
  };

  const departmentData = {
    labels: ['Engineering', 'Sales', 'Marketing', 'HR', 'Operations'],
    datasets: [{
      data: [35, 25, 15, 10, 15],
      backgroundColor: ['#845EF7', '#15AABF', '#FA5252', '#40C057', '#FAB005'],
    }]
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back! Here's your payroll overview.</p>
        </div>
        <QuickActions />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
          <h3 className="text-base font-semibold text-gray-800 mb-4">Monthly Payroll Trend</h3>
          <Chart type="bar" data={payrollData} />
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
          <h3 className="text-base font-semibold text-gray-800 mb-4">Department Distribution</h3>
          <Chart type="doughnut" data={departmentData} />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
          <h3 className="text-base font-semibold text-gray-800 mb-4">Upcoming Payrolls</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Engineering Team</p>
                <p className="text-xs text-gray-500">Due: March 15</p>
              </div>
              <span className="text-sm font-semibold text-green-600">$1,247,500</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Sales Team</p>
                <p className="text-xs text-gray-500">Due: March 15</p>
              </div>
              <span className="text-sm font-semibold text-green-600">$892,300</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Marketing Team</p>
                <p className="text-xs text-gray-500">Due: March 15</p>
              </div>
              <span className="text-sm font-semibold text-green-600">$445,200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
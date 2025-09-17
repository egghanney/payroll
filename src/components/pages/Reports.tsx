import React, { useState } from 'react';
import { Chart } from '../ui/Chart';
import { ReportFilters } from '../ui/ReportFilters';
import { FileText, Download, TrendingUp, Calendar } from 'lucide-react';

export function Reports() {
  const [selectedReport, setSelectedReport] = useState('payroll-summary');
  const [dateRange, setDateRange] = useState('last-6-months');

  const payrollTrendData = {
    labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    datasets: [{
      label: 'Total Payroll',
      data: [2450000, 2520000, 2680000, 2590000, 2720000, 2847392],
      backgroundColor: '#228BE6',
      borderColor: '#228BE6',
      borderWidth: 2,
      fill: false,
    }]
  };

  const departmentCostData = {
    labels: ['Engineering', 'Sales', 'Marketing', 'HR', 'Operations'],
    datasets: [{
      data: [1247500, 892300, 445200, 178900, 234500],
      backgroundColor: ['#845EF7', '#15AABF', '#FA5252', '#40C057', '#FAB005'],
    }]
  };

  const reportTypes = [
    { id: 'payroll-summary', name: 'Payroll Summary', icon: FileText },
    { id: 'department-costs', name: 'Department Costs', icon: TrendingUp },
    { id: 'employee-reports', name: 'Employee Reports', icon: FileText },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Reports</h1>
          <p className="text-gray-500 mt-1">Analyze payroll data and generate insights</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
          <Download className="w-4 h-4 mr-2" strokeWidth={1.5} />
          Export Report
        </button>
      </div>

      {/* Report Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reportTypes.map((report) => {
          const Icon = report.icon;
          return (
            <button
              key={report.id}
              onClick={() => setSelectedReport(report.id)}
              className={`p-4 rounded-3xl border-2 transition-all duration-200 hover:-translate-y-0.5 ${
                selectedReport === report.id
                  ? 'border-green-600 bg-green-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  selectedReport === report.id ? 'bg-green-600' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    selectedReport === report.id ? 'text-white' : 'text-gray-600'
                  }`} strokeWidth={1.5} />
                </div>
                <div className="ml-3 text-left">
                  <p className={`font-medium ${
                    selectedReport === report.id ? 'text-green-700' : 'text-gray-800'
                  }`}>
                    {report.name}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Filters */}
      <ReportFilters
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
      />

      {/* Report Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
          <h3 className="text-base font-semibold text-gray-800 mb-4">Payroll Trend</h3>
          <Chart type="line" data={payrollTrendData} />
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
          <h3 className="text-base font-semibold text-gray-800 mb-4">Department Costs</h3>
          <Chart type="doughnut" data={departmentCostData} />
        </div>
      </div>

      {/* Summary Stats */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-base font-semibold text-gray-800 mb-6">Summary Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-green-600" strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-semibold text-gray-800">$2.8M</p>
            <p className="text-sm text-gray-500">Total Payroll</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-semibold text-gray-800">12</p>
            <p className="text-sm text-gray-500">Pay Periods</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-semibold text-gray-800">247</p>
            <p className="text-sm text-gray-500">Reports Generated</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-orange-600" strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-semibold text-gray-800">+8.2%</p>
            <p className="text-sm text-gray-500">Growth Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
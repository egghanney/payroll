import React, { useState } from 'react';
import { PayrollTable } from '../ui/PayrollTable';
import { PayrollModal } from '../ui/PayrollModal';
import { Calendar, Calculator, Download, Plus } from 'lucide-react';

export function Payroll() {
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('2024-03');

  const payrollData = [
    {
      id: 1,
      period: '2024-03',
      department: 'Engineering',
      totalAmount: 1247500,
      employeeCount: 42,
      status: 'processed',
      processedDate: '2024-03-15'
    },
    {
      id: 2,
      period: '2024-03',
      department: 'Sales',
      totalAmount: 892300,
      employeeCount: 28,
      status: 'processed',
      processedDate: '2024-03-15'
    },
    {
      id: 3,
      period: '2024-03',
      department: 'Marketing',
      totalAmount: 445200,
      employeeCount: 15,
      status: 'pending',
      processedDate: null
    },
    {
      id: 4,
      period: '2024-02',
      department: 'Engineering',
      totalAmount: 1215000,
      employeeCount: 40,
      status: 'processed',
      processedDate: '2024-02-15'
    }
  ];

  const periods = ['2024-03', '2024-02', '2024-01', '2023-12'];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Payroll</h1>
          <p className="text-gray-500 mt-1">Process and manage payroll for all departments</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
            <Download className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Export Reports
          </button>
          <button
            onClick={() => setShowProcessModal(true)}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            <Calculator className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Process Payroll
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Calculator className="w-6 h-6 text-green-600" strokeWidth={1.5} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Processed</p>
              <p className="text-xl font-semibold text-gray-800">$2,584,800</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Current Period</p>
              <p className="text-xl font-semibold text-gray-800">March 2024</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Plus className="w-6 h-6 text-orange-600" strokeWidth={1.5} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-xl font-semibold text-gray-800">1 Department</p>
            </div>
          </div>
        </div>
      </div>

      {/* Period Filter */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-4">
          <Calendar className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
          <label className="text-sm font-medium text-gray-700">Pay Period:</label>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-200"
          >
            {periods.map(period => (
              <option key={period} value={period}>
                {new Date(period + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Payroll Table */}
      <PayrollTable data={payrollData.filter(item => item.period === selectedPeriod)} />

      {/* Process Payroll Modal */}
      {showProcessModal && (
        <PayrollModal
          isOpen={showProcessModal}
          onClose={() => setShowProcessModal(false)}
          onProcess={(data) => {
            console.log('Processing payroll:', data);
            setShowProcessModal(false);
          }}
        />
      )}
    </div>
  );
}
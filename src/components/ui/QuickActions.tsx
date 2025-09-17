import React from 'react';
import { Plus, Calculator, FileText, Users } from 'lucide-react';

export function QuickActions() {
  const actions = [
    { icon: Plus, label: 'Add Employee', color: 'bg-green-600 hover:bg-green-700' },
    { icon: Calculator, label: 'Process Payroll', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: FileText, label: 'Generate Report', color: 'bg-purple-600 hover:bg-purple-700' },
  ];

  return (
    <div className="flex items-center space-x-3">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <button
            key={index}
            className={`flex items-center px-4 py-2 ${action.color} text-white rounded-lg transition-colors duration-200`}
          >
            <Icon className="w-4 h-4 mr-2" strokeWidth={1.5} />
            {action.label}
          </button>
        );
      })}
    </div>
  );
}
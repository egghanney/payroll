import React from 'react';
import {
  LayoutDashboard,
  Users,
  Calculator,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'employees', label: 'Employees', icon: Users },
  { id: 'payroll', label: 'Payroll', icon: Calculator },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ currentPage, onPageChange, collapsed, onToggleCollapse }: SidebarProps) {
  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-sm border-r border-gray-200 transition-all duration-200 ease-in-out z-40 ${
      collapsed ? 'w-18' : 'w-60'
    }`}>
      {/* Logo Section */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <h1 className="ml-3 text-lg font-semibold text-gray-800">PayrollPro</h1>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mx-auto">
            <Calculator className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors duration-200"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center px-6 py-3 text-sm font-medium transition-all duration-200 ease-in-out ${
                isActive
                  ? 'bg-green-50 text-green-700 border-r-2 border-green-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              } ${collapsed ? 'justify-center px-4' : 'justify-start'}`}
            >
              <Icon 
                className={`flex-shrink-0 ${collapsed ? 'w-5 h-5' : 'w-5 h-5 mr-3'} ${
                  isActive ? 'text-green-600' : 'text-gray-500'
                }`}
                strokeWidth={1.5}
              />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
import React, { useState } from 'react';
import { SettingsSection } from '../ui/SettingsSection';
import { Toggle } from '../ui/Toggle';
import { Bell, Shield, Globe, Calculator } from 'lucide-react';

export function Settings() {
  const [notifications, setNotifications] = useState({
    payrollReminders: true,
    employeeUpdates: false,
    systemAlerts: true,
    reportGeneration: true,
  });

  const [payrollSettings, setPayrollSettings] = useState({
    autoProcess: false,
    taxCalculation: true,
    overtimeRules: true,
    bonusCalculation: false,
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
        <p className="text-gray-500 mt-1">Configure your payroll system preferences</p>
      </div>

      {/* Notification Settings */}
      <SettingsSection
        title="Notification Settings"
        description="Manage how you receive updates and alerts"
        icon={Bell}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Payroll Reminders</p>
              <p className="text-sm text-gray-500">Get notified before payroll processing deadlines</p>
            </div>
            <Toggle
              enabled={notifications.payrollReminders}
              onChange={(enabled) => setNotifications(prev => ({ ...prev, payrollReminders: enabled }))}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Employee Updates</p>
              <p className="text-sm text-gray-500">Notifications when employee information changes</p>
            </div>
            <Toggle
              enabled={notifications.employeeUpdates}
              onChange={(enabled) => setNotifications(prev => ({ ...prev, employeeUpdates: enabled }))}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">System Alerts</p>
              <p className="text-sm text-gray-500">Important system notifications and errors</p>
            </div>
            <Toggle
              enabled={notifications.systemAlerts}
              onChange={(enabled) => setNotifications(prev => ({ ...prev, systemAlerts: enabled }))}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Report Generation</p>
              <p className="text-sm text-gray-500">Notifications when reports are ready</p>
            </div>
            <Toggle
              enabled={notifications.reportGeneration}
              onChange={(enabled) => setNotifications(prev => ({ ...prev, reportGeneration: enabled }))}
            />
          </div>
        </div>
      </SettingsSection>

      {/* Payroll Settings */}
      <SettingsSection
        title="Payroll Configuration"
        description="Configure payroll processing rules and calculations"
        icon={Calculator}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Auto Process Payroll</p>
              <p className="text-sm text-gray-500">Automatically process payroll on scheduled dates</p>
            </div>
            <Toggle
              enabled={payrollSettings.autoProcess}
              onChange={(enabled) => setPayrollSettings(prev => ({ ...prev, autoProcess: enabled }))}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Tax Calculation</p>
              <p className="text-sm text-gray-500">Automatically calculate taxes and deductions</p>
            </div>
            <Toggle
              enabled={payrollSettings.taxCalculation}
              onChange={(enabled) => setPayrollSettings(prev => ({ ...prev, taxCalculation: enabled }))}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Overtime Rules</p>
              <p className="text-sm text-gray-500">Apply overtime calculations automatically</p>
            </div>
            <Toggle
              enabled={payrollSettings.overtimeRules}
              onChange={(enabled) => setPayrollSettings(prev => ({ ...prev, overtimeRules: enabled }))}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Bonus Calculation</p>
              <p className="text-sm text-gray-500">Include bonus calculations in payroll</p>
            </div>
            <Toggle
              enabled={payrollSettings.bonusCalculation}
              onChange={(enabled) => setPayrollSettings(prev => ({ ...prev, bonusCalculation: enabled }))}
            />
          </div>
        </div>
      </SettingsSection>

      {/* Security Settings */}
      <SettingsSection
        title="Security & Privacy"
        description="Manage access controls and data privacy settings"
        icon={Shield}
      >
        <div className="space-y-4">
          <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <p className="font-medium text-gray-800">Change Password</p>
            <p className="text-sm text-gray-500">Update your account password</p>
          </button>

          <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <p className="font-medium text-gray-800">Two-Factor Authentication</p>
            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
          </button>

          <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <p className="font-medium text-gray-800">Data Export</p>
            <p className="text-sm text-gray-500">Download a copy of your data</p>
          </button>
        </div>
      </SettingsSection>

      {/* System Settings */}
      <SettingsSection
        title="System Preferences"
        description="Configure general system settings"
        icon={Globe}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
            <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent">
              <option>Pacific Standard Time (PST)</option>
              <option>Eastern Standard Time (EST)</option>
              <option>Central Standard Time (CST)</option>
              <option>Mountain Standard Time (MST)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
            <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent">
              <option>USD - US Dollar</option>
              <option>CAD - Canadian Dollar</option>
              <option>EUR - Euro</option>
              <option>GBP - British Pound</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
            <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent">
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
        </div>
      </SettingsSection>
    </div>
  );
}
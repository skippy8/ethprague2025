
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  BarChart, 
  Users, 
  Activity, 
  Settings,
  Menu,
  X
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '#', icon: BarChart, current: true },
    { name: 'Session Replays', href: '#', icon: Activity, current: false },
    { name: 'User Analytics', href: '#', icon: Users, current: false },
    { name: 'Settings', href: '#', icon: Settings, current: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Mobile sidebar */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden",
        sidebarOpen ? "block" : "hidden"
      )}>
        <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
        <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 border-r border-gray-800">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-bold text-white">DApp Analytics</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="mt-8 px-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-lg mb-2 transition-colors",
                  item.current
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                )}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-64 lg:bg-gray-900 lg:border-r lg:border-gray-800 lg:block">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white">DApp Analytics</h2>
          <p className="text-sm text-gray-400 mt-1">Blockscout Framework</p>
        </div>
        <nav className="mt-8 px-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-lg mb-2 transition-colors",
                item.current
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur border-b border-gray-800 lg:hidden">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-400 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold text-white">DApp Analytics</h1>
            <div className="w-6" />
          </div>
        </div>
        
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

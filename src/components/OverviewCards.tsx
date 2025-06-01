
import React from 'react';
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';

export const OverviewCards = () => {
  const stats = [
    {
      name: 'Total Transactions',
      value: '2,847',
      change: '+12.5%',
      changeType: 'increase',
      icon: Activity,
    },
    {
      name: 'Active Users',
      value: '1,234',
      change: '+8.2%',
      changeType: 'increase',
      icon: Activity,
    },
    {
      name: 'Avg Gas Used',
      value: '45,632',
      change: '-5.1%',
      changeType: 'decrease',
      icon: DollarSign,
    },
    {
      name: 'Conversion Rate',
      value: '68.4%',
      change: '+2.3%',
      changeType: 'increase',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">{stat.name}</p>
              <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
            </div>
            <div className="p-3 bg-blue-600/20 rounded-lg">
              <stat.icon className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            {stat.changeType === 'increase' ? (
              <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
            )}
            <span
              className={`text-sm font-medium ${
                stat.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {stat.change}
            </span>
            <span className="text-gray-400 text-sm ml-2">vs last period</span>
          </div>
        </div>
      ))}
    </div>
  );
};


import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

export const GasEfficiency = () => {
  const gasData = [
    { version: 'v1.0', avgGas: 85000, maxGas: 120000, minGas: 45000 },
    { version: 'v1.1', avgGas: 78000, maxGas: 110000, minGas: 42000 },
    { version: 'v1.2', avgGas: 72000, maxGas: 95000, minGas: 38000 },
    { version: 'v1.3', avgGas: 68000, maxGas: 88000, minGas: 35000 },
    { version: 'v2.0', avgGas: 58000, maxGas: 75000, minGas: 28000 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
          <p className="text-white font-medium">{`Version: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-gray-300">
              {`${entry.dataKey}: ${entry.value.toLocaleString()} gas`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white">Gas Efficiency</h3>
          <p className="text-gray-400 text-sm mt-1">Compare gas usage across dApp versions</p>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
            <span className="text-gray-300">Average</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
            <span className="text-gray-300">Maximum</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
            <span className="text-gray-300">Minimum</span>
          </div>
        </div>
      </div>

      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={gasData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="version" stroke="#9CA3AF" fontSize={12} />
            <YAxis stroke="#9CA3AF" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="avgGas" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="maxGas" 
              stroke="#10B981" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#10B981', strokeWidth: 2, r: 3 }}
            />
            <Line 
              type="monotone" 
              dataKey="minGas" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-900/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Latest Version</p>
          <p className="text-white text-xl font-bold">v2.0</p>
          <p className="text-green-400 text-sm">-32% gas usage</p>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Avg Gas Saved</p>
          <p className="text-white text-xl font-bold">27K</p>
          <p className="text-blue-400 text-sm">per transaction</p>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Cost Reduction</p>
          <p className="text-white text-xl font-bold">$12.50</p>
          <p className="text-purple-400 text-sm">avg per user</p>
        </div>
      </div>
    </div>
  );
};

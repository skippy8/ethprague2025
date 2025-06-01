
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export const UserSegmentation = () => {
  const [activeSegment, setActiveSegment] = useState('wallet-age');

  const segmentData = {
    'wallet-age': [
      { name: 'New (< 30 days)', value: 324, color: '#3B82F6' },
      { name: 'Medium (30-180 days)', value: 457, color: '#10B981' },
      { name: 'Experienced (180+ days)', value: 612, color: '#8B5CF6' },
    ],
    'balance': [
      { name: 'Small (< 0.1 ETH)', value: 445, color: '#EF4444' },
      { name: 'Medium (0.1-1 ETH)', value: 523, color: '#F59E0B' },
      { name: 'Large (1+ ETH)', value: 425, color: '#10B981' },
    ],
    'nft-holdings': [
      { name: 'No NFTs', value: 678, color: '#6B7280' },
      { name: '1-5 NFTs', value: 456, color: '#3B82F6' },
      { name: '5+ NFTs', value: 259, color: '#8B5CF6' },
    ],
  };

  const segments = [
    { id: 'wallet-age', label: 'Wallet Age' },
    { id: 'balance', label: 'Balance' },
    { id: 'nft-holdings', label: 'NFT Holdings' },
  ];

  const currentData = segmentData[activeSegment as keyof typeof segmentData];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
          <p className="text-white font-medium">{data.name}</p>
          <p className="text-gray-300">{`Users: ${data.value.toLocaleString()}`}</p>
          <p className="text-gray-300">
            {`Percentage: ${((data.value / currentData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1)}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white">User Segmentation</h3>
          <p className="text-gray-400 text-sm mt-1">Analyze users by different criteria</p>
        </div>
      </div>

      <div className="flex space-x-2 mb-6">
        {segments.map((segment) => (
          <button
            key={segment.id}
            onClick={() => setActiveSegment(segment.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeSegment === segment.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {segment.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={currentData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {currentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          {currentData.map((item, index) => {
            const total = currentData.reduce((sum, data) => sum + data.value, 0);
            const percentage = ((item.value / total) * 100).toFixed(1);
            
            return (
              <div key={index} className="bg-gray-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-300 text-sm">{item.name}</span>
                  </div>
                  <span className="text-white font-medium">{percentage}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: item.color,
                      width: `${percentage}%`,
                    }}
                  ></div>
                </div>
                <p className="text-gray-400 text-sm mt-2">{item.value.toLocaleString()} users</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

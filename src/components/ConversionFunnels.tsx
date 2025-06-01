
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export const ConversionFunnels = () => {
  const funnelData = [
    { step: 'Connect Wallet', users: 1000, rate: 100 },
    { step: 'Approve Token', users: 850, rate: 85 },
    { step: 'Start Transaction', users: 720, rate: 72 },
    { step: 'Confirm Gas', users: 680, rate: 68 },
    { step: 'Complete Transaction', users: 650, rate: 65 },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white">Conversion Funnels</h3>
          <p className="text-gray-400 text-sm mt-1">Track user drop-offs in transaction flows</p>
        </div>
        <select className="bg-gray-700 text-white px-3 py-1 rounded border border-gray-600 text-sm">
          <option>Swap Flow</option>
          <option>Staking Flow</option>
          <option>NFT Minting</option>
        </select>
      </div>

      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={funnelData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="step" 
              stroke="#9CA3AF"
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis stroke="#9CA3AF" fontSize={12} />
            <Bar dataKey="users" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        {funnelData.map((step, index) => (
          <div key={step.step} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400 text-sm font-medium">{index + 1}</span>
              </div>
              <span className="text-gray-300">{step.step}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">{step.users.toLocaleString()}</span>
              <span className="text-gray-400">({step.rate}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

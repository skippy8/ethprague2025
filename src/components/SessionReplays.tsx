
import React from 'react';
import { Play, Eye, Clock } from 'lucide-react';

export const SessionReplays = () => {
  const replays = [
    {
      id: '1',
      user: '0x742d...7a9c',
      duration: '2m 34s',
      actions: 5,
      gasUsed: '0.0024 ETH',
      timestamp: '2 hours ago',
      status: 'completed',
    },
    {
      id: '2',
      user: '0x8f3e...2b1d',
      duration: '1m 12s',
      actions: 3,
      gasUsed: '0.0018 ETH',
      timestamp: '4 hours ago',
      status: 'failed',
    },
    {
      id: '3',
      user: '0xa5c7...9e4f',
      duration: '3m 45s',
      actions: 8,
      gasUsed: '0.0035 ETH',
      timestamp: '6 hours ago',
      status: 'completed',
    },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white">Session Replays</h3>
          <p className="text-gray-400 text-sm mt-1">Recent contract interaction flows</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {replays.map((replay) => (
          <div
            key={replay.id}
            className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:bg-gray-900/70 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="p-2 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors">
                  <Play className="w-4 h-4 text-blue-400" />
                </button>
                <div>
                  <p className="text-white font-medium">{replay.user}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {replay.duration}
                    </span>
                    <span>{replay.actions} actions</span>
                    <span>{replay.gasUsed}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    replay.status === 'completed'
                      ? 'bg-green-600/20 text-green-400'
                      : 'bg-red-600/20 text-red-400'
                  }`}
                >
                  {replay.status}
                </span>
                <span className="text-gray-400 text-sm">{replay.timestamp}</span>
                <button className="p-1 text-gray-400 hover:text-white">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { OverviewCards } from '@/components/OverviewCards';
import { SessionReplays } from '@/components/SessionReplays';
import { ConversionFunnels } from '@/components/ConversionFunnels';
import { GasEfficiency } from '@/components/GasEfficiency';
import { UserSegmentation } from '@/components/UserSegmentation';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">DApp Analytics Dashboard</h1>
            <p className="text-gray-400 mt-2">Track smart contract interactions and user behavior</p>
          </div>
          <div className="flex items-center gap-4">
            <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>
        
        <OverviewCards />
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <SessionReplays />
          <ConversionFunnels />
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <GasEfficiency />
          <UserSegmentation />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

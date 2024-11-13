import { Building, DollarSign, Percent, Users } from 'lucide-react';
import React from 'react'

const StatsSection = () => {
  return (

      <div className="grid grid-cols-4 gap-4 mb-4  justify-between">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-gray-500">Total Listings</p>
          <p className="text-2xl font-bold">100</p>
          <Building/>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-gray-500">Average Price</p>
          <p className="text-2xl font-bold">$61,472,821</p>
          <DollarSign/>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-gray-500">Average Cap Rate</p>
          <p className="text-2xl font-bold">4.89%</p>
         <Percent/> 
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-gray-500">Total Units</p>
          <p className="text-2xl font-bold">11,232</p>
         <Users/> 
        </div>
      </div>

  );
}

export default StatsSection

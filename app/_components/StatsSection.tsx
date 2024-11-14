// import { Building, DollarSign, Percent, Users } from "lucide-react";
// import React from "react";

// const StatsSection = ({ stats }) => {
//   return (
//     <div className="grid grid-cols-4 gap-4 mb-4 text-center">
//       <div className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50">
//         <p className="text-gray-600 font-semibold">Total Listings</p>
//         <p className="text-2xl font-bold text-gray-800">
//           {stats.totalListings}
//         </p>
//         <Building className="mx-auto mt-2 text-indigo-500" />
//       </div>
//       <div className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50">
//         <p className="text-gray-600 font-semibold">Average Price</p>
//         <p className="text-2xl font-bold text-gray-800">
//           ${stats.averagePrice.toLocaleString()}
//         </p>
//         <DollarSign className="mx-auto mt-2 text-green-500" />
//       </div>
//       <div className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50">
//         <p className="text-gray-600 font-semibold">Average Cap Rate</p>
//         <p className="text-2xl font-bold text-gray-800">
//           {stats.averageCapRate.toFixed(2)}%
//         </p>
//         <Percent className="mx-auto mt-2 text-blue-500" />
//       </div>
//       <div className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50">
//         <p className="text-gray-600 font-semibold">Total Units</p>
//         <p className="text-2xl font-bold text-gray-800">{stats.totalUnits}</p>
//         <Users className="mx-auto mt-2 text-purple-500" />
//       </div>
//     </div>
//   );
// };

// export default StatsSection;


import { Building, DollarSign, Percent, Users } from "lucide-react";
import React from "react";

const StatsSection = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4 text-center">
      <div className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50">
        <p className="text-gray-600 font-semibold">Total Listings</p>
        <p className="text-2xl font-bold text-gray-800">
          {stats.totalListings}
        </p>
        <Building className="mx-auto mt-2 text-indigo-500" />
      </div>
      <div className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50">
        <p className="text-gray-600 font-semibold">Average Price</p>
        <p className="text-2xl font-bold text-gray-800">
          ${stats.averagePrice.toLocaleString()}
        </p>
        <DollarSign className="mx-auto mt-2 text-green-500" />
      </div>
      <div className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50">
        <p className="text-gray-600 font-semibold">Average Cap Rate</p>
        <p className="text-2xl font-bold text-gray-800">
          {stats.averageCapRate.toFixed(2)}%
        </p>
        <Percent className="mx-auto mt-2 text-blue-500" />
      </div>
      <div className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50">
        <p className="text-gray-600 font-semibold">Total Units</p>
        <p className="text-2xl font-bold text-gray-800">{stats.totalUnits}</p>
        <Users className="mx-auto mt-2 text-purple-500" />
      </div>
    </div>
  );
};

export default StatsSection;

import { Building, DollarSign, Percent, Users } from "lucide-react";
import React from "react";

const StatsSection = ({ stats}) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4 text-center">
      <div>
        <p>Total Listings</p>
        <p>{stats.totalListings}</p>
        <Building />
      </div>
      <div>
        <p>Average Price</p>
        <p>${stats.averagePrice.toLocaleString()}</p>
        {/* <p>{Number(stats.averagePrice.toLocaleString().replace(/[^0-9.-]+/g, ""))}</p>
        <p>Number(currency.replace(/[^0-9.-]+/g,""))</p> */}
        {/* <p>${stats.averagePrice.toLocaleString(/[^0-9.-]+/g, "")}</p> */}

        <DollarSign />
      </div>
      <div>
        <p>Average Cap Rate</p>
        <p>{stats.averageCapRate.toFixed(2)}%</p>
        <Percent />
      </div>
      <div>
        <p>Total Units</p>
        <p>{stats.totalUnits}</p>
        <Users />
      </div>
    </div>
  );
};

export default StatsSection;

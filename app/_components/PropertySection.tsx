import React from "react";

const PropertySection = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2">Property Listings</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Address</th>
              <th className="py-2">Price</th>
              <th className="py-2">Cap Rate</th>
              <th className="py-2">Units</th>
              <th className="py-2">Occupancy</th>
              <th className="py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2">6844 Maple St, New York, USA</td>
              <td className="py-2">$69,413,893</td>
              <td className="py-2">5.91%</td>
              <td className="py-2">70</td>
              <td className="py-2">86%</td>
              <td className="py-2">Existing Portfolio Property</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertySection;

"use client";
import React from "react";
import properties from "../data/properties.json";
import { NavigationIcon } from "lucide-react";

const PropertySection = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1>Temp Data need to change </h1>
        <h3 className="text-2xl font-semibold mb-4 ">Property Listings</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">Sale Price</th>
              <th className="py-2 px-4">Rent Price</th>
              <th className="py-2 px-4">Type</th>
              <th className="py-2 px-4">Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {properties.properties.map((property, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4 flex items-center">
                  <NavigationIcon className="mr-2" />
                  {property.address}
                </td>
                <td className="py-2 px-4">{property.salePrice}</td>
                <td className="py-2 px-4">{property.rentPrice}</td>
                <td className="py-2 px-4">{property.apartmentType}</td>
                <td className="py-2 px-4">{property.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertySection;

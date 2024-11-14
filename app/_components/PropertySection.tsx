"use client";
import React, { useEffect, useState } from "react";
import { NavigationIcon } from "lucide-react";

const PropertySection = ({ properties, selectedFilters }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };
    loadData();
  }, [properties]);

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-2xl font-semibold mb-4">Property Listings</h3>

        {isLoading ? (
          <div className="text-center py-4">
            <p>Loading properties...</p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <h4 className="font-semibold">Selected Filters:</h4>
              <ul className="text-sm">
                {selectedFilters.propertyAddress && (
                  <li>Address: {selectedFilters.propertyAddress}</li>
                )}
                {selectedFilters.zipCode && (
                  <li>Zip Code: {selectedFilters.zipCode}</li>
                )}
                {selectedFilters.propertyType && (
                  <li>Type: {selectedFilters.propertyType}</li>
                )}
                {selectedFilters.priceRangeMin && (
                  <li>Min Price: {selectedFilters.priceRangeMin}</li>
                )}
                {selectedFilters.priceRangeMax && (
                  <li>Max Price: {selectedFilters.priceRangeMax}</li>
                )}
                {/* Add more filters if needed */}
              </ul>
            </div>

            {/* Display Property Listings */}
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
                {properties.map((property, index) => (
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
          </>
        )}
      </div>
    </div>
  );
};

export default PropertySection;

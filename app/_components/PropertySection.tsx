// "use client";
// import React, { useEffect, useState } from "react";
// import { NavigationIcon } from "lucide-react";

// const PropertySection = ({ properties, selectedFilters }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       setIsLoading(false);
//     };
//     loadData();
//   }, [properties]);

//   return (
//     <div className="p-4">
//       <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
//         <h3 className="text-2xl font-semibold mb-4 text-gray-800">
//           Property Listings
//         </h3>

//         {isLoading ? (
//           <div className="text-center py-4">
//             <p className="text-gray-600">Loading properties...</p>
//           </div>
//         ) : (
//           <>
//             <div className="mb-4">
//               <h4 className="font-semibold text-gray-700">Selected Filters:</h4>
//               <ul className="text-sm text-gray-600 mt-2">
//                 {selectedFilters.propertyAddress && (
//                   <li>Address: {selectedFilters.propertyAddress}</li>
//                 )}
//                 {selectedFilters.zipCode && (
//                   <li>Zip Code: {selectedFilters.zipCode}</li>
//                 )}
//                 {selectedFilters.propertyType && (
//                   <li>Type: {selectedFilters.propertyType}</li>
//                 )}
//                 {selectedFilters.priceRangeMin && (
//                   <li>Min Price: {selectedFilters.priceRangeMin}</li>
//                 )}
//                 {selectedFilters.priceRangeMax && (
//                   <li>Max Price: {selectedFilters.priceRangeMax}</li>
//                 )}
//               </ul>
//             </div>

//             {/* Display Property Listings */}
//             <table className="w-full text-left border-t border-gray-200">
//               <thead>
//                 <tr className="bg-gray-50 text-gray-600">
//                   <th className="py-2 px-4 border-b">Address</th>
//                   <th className="py-2 px-4 border-b">Sale Price</th>
//                   <th className="py-2 px-4 border-b">Rent Price</th>
//                   <th className="py-2 px-4 border-b">Type</th>
//                   <th className="py-2 px-4 border-b">Zip Code</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {properties.map((property, index) => (
//                   <tr
//                     key={index}
//                     className="border-b hover:bg-gray-100 transition duration-150"
//                   >
//                     <td className="py-2 px-4 flex items-center text-gray-700">
//                       <NavigationIcon className="mr-2 text-indigo-500" />
//                       {property.address}
//                     </td>
//                     <td className="py-2 px-4 text-gray-700">
//                       {property.salePrice}
//                     </td>
//                     <td className="py-2 px-4 text-gray-700">
//                       {property.rentPrice}
//                     </td>
//                     <td className="py-2 px-4 text-gray-700">
//                       {property.apartmentType}
//                     </td>
//                     <td className="py-2 px-4 text-gray-700">
//                       {property.zipcode}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PropertySection;


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
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Property Listings
        </h3>

        {isLoading ? (
          <div className="text-center py-4">
            <p className="text-gray-600">Loading properties...</p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">Selected Filters:</h4>
              <ul className="text-sm text-gray-600 mt-2">
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
              </ul>
            </div>

            <table className="w-full text-left border-t border-gray-200">
              <thead>
                <tr className="bg-gray-50 text-gray-600">
                  <th className="py-2 px-4 border-b">Address</th>
                  <th className="py-2 px-4 border-b">Sale Price</th>
                  <th className="py-2 px-4 border-b">Rent Price</th>
                  <th className="py-2 px-4 border-b">Type</th>
                  <th className="py-2 px-4 border-b">Zip Code</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 transition duration-150"
                  >
                    <td className="py-2 px-4 flex items-center text-gray-700">
                      <div>
                        <NavigationIcon className="mr-2 text-indigo-500" />
                      </div>
                      {property.address}
                    </td>
                    <td className="py-2 px-4 text-gray-700">
                      {property.salePrice}
                    </td>
                    <td className="py-2 px-4 text-gray-700">
                      {property.rentPrice}
                    </td>
                    <td className="py-2 px-4 text-gray-700">
                      {property.apartmentType}
                    </td>
                    <td className="py-2 px-4 text-gray-700">
                      {property.zipcode}
                    </td>
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

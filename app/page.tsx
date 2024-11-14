"use client";
import React, { useState } from "react";
import { AppSidebar } from "./_components/AppSideBar";
import StatsSection from "./_components/StatsSection";
import PropertySection from "./_components/PropertySection";
import Map from "./_components/Map";

const Page = () => {
  const property = [
    {
      propertyName: "Amanora desire towers",
      latitude: "18.5172622",
      longitude: "73.9389447",
      apartmentType: "2bhk",
      salePrice: "65,00,000",
      rentPrice: "25,000",
      address: "Amanora Park Town, Hadapsar, Pune, Maharashtra 411028",
      zipcode: "411028",
    },
    {
      propertyName: "Silver Oak Society",
      latitude: "18.5334206",
      longitude: "73.9578425",
      apartmentType: "3bhk",
      salePrice: "95,00,000",
      rentPrice: "35,000",
      address:
        "Zed Corner, Silver Oak Society, SNBP School Road,40 ft Road, Mundhwa - Manjari Rd, Manjari Budruk, Pune, Maharashtra 412307",
      zipcode: "412307",
    },
    {
      propertyName: "Chintamani Society",
      latitude: "18.5334206",
      longitude: "73.9578425",
      apartmentType: "1bhk",
      salePrice: "45,00,000",
      rentPrice: "15,000",
      address: "Manjari Budruk, Maharashtra 412307",
      zipcode: "412307",
    },
    {
      propertyName: "Amanora desire towers",
      latitude: "18.5172622",
      longitude: "73.9389447",
      apartmentType: "2bhk",
      salePrice: "65,00,000",
      rentPrice: "25,000",
      address: "Amanora Park Town, Hadapsar, Pune, Maharashtra 411028",
      zipcode: "411028",
    },
    {
      propertyName: "Atlanta east",
      latitude: "18.5336342",
      longitude: "73.950901",
      apartmentType: "2bhk",
      salePrice: "45,00,000",
      rentPrice: "15,000",
      address: "Sharad Nagar, Mundhwa, Pune, Maharashtra 411036",
      zipcode: "411036",
    },
    {
      propertyName: "Eaves garden Society",
      latitude: "18.533268",
      longitude: "73.9479184",
      apartmentType: "4bhk",
      salePrice: "105,00,000",
      rentPrice: "65,000",
      address: "Mundhwa, Pune, Maharashtra 411036",
      zipcode: "411036",
    },
  ];
  const [propertyList, setPropertyList] = useState(property);
  const filterProperties = (filters) => {
    const filteredProperties = property.filter((p) => {
      let isMatch = true;
      if (filters.propertyAddress) {
        isMatch = isMatch && p.address.includes(filters.propertyAddress);
      }
      // if (filters.searchRadius) {
      //   isMatch =
      //     isMatch &&
      //     getDistanceFromLatLonInKm(
      //       p.latitude,
      //       p.longitude,
      //       filters.latitude,
      //       filters.longitude
      //     ) <= filters.searchRadius;
      // }
      if (filters.priceRangeMin) {
        isMatch =
          isMatch &&
          Number(p.salePrice.replace(/[^0-9.-]+/g, "")) >=
            filters.priceRangeMin;
      }
      if (filters.priceRangeMax) {
        new Intl.NumberFormat();
        isMatch =
          isMatch &&
          Number(p.salePrice.replace(/[^0-9.-]+/g, "")) <=
            filters.priceRangeMax;
      }
      if (filters.propertyType) {
        isMatch = isMatch && p.apartmentType === filters.propertyType;
      }
      return isMatch;
    });
    setPropertyList(filteredProperties);
  };
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-72">
        <AppSidebar filterProperties={filterProperties} />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="h-2/3">
          <Map
            locations={propertyList.map((p) => {
              return {
                name: p.propertyName,
                coordinates: [p.longitude, p.latitude],
                apartmentType: p.apartmentType,
                salePrice: p.salePrice,
                address: p.address,
              };
            })}
          />
        </div>

        {/* Stats & Property sections */}
        <div className="p-4 space-y-6 overflow-y-auto h-1/3">
          <StatsSection />
          <PropertySection />
        </div>
      </div>
    </div>
  );
};

export default Page;

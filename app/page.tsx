"use client";
import React, { useState, useEffect } from "react";
import { SideBar } from "./_components/SideBar";
import StatsSection from "./_components/StatsSection";
import PropertySection from "./_components/PropertySection";
import Map from "./_components/Map";
import { property } from "./data/properties";
const Page = () => {
  const [propertyList, setPropertyList] = useState(property);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [stats, setStats] = useState({
    totalListings: 0,
    averagePrice: 0,
    averageCapRate: 0,
    totalUnits: 0,
  });

  const calculateStats = (properties: typeof property) => {
    const totalListings = properties.length;
    const totalSalePrice = properties.reduce(
      (acc, p) => acc + parseFloat(p.salePrice.replace(/[^0-9.-]+/g, "")),
      0
    );
    const averagePrice = totalListings > 0 ? totalSalePrice / totalListings : 0;

    const totalCapRate = properties.reduce((acc) => acc + 0, 0);
    const averageCapRate = totalListings > 0 ? totalCapRate / totalListings : 0;

    const totalUnits = properties.reduce((acc) => acc + 1, 0);

    setStats({
      totalListings,
      averagePrice,
      averageCapRate,
      totalUnits,
    });
  };

  const filterProperties = (filters: {
    propertyAddress?: string;
    priceRangeMin?: number;
    priceRangeMax?: number;
    propertyType?: string;
    zipCode?: string;
  }) => {
    setSelectedFilters(filters);

    const filteredProperties = property.filter((p) => {
      let isMatch = true;
      if (filters.propertyAddress) {
        isMatch = isMatch && p.address.includes(filters.propertyAddress);
      }
      if (filters.priceRangeMin) {
        isMatch =
          isMatch &&
          Number(p.salePrice.replace(/[^0-9.-]+/g, "")) >=
            filters.priceRangeMin;
      }
      if (filters.priceRangeMax) {
        isMatch =
          isMatch &&
          Number(p.salePrice.replace(/[^0-9.-]+/g, "")) <=
            filters.priceRangeMax;
      }
      if (filters.propertyType) {
        isMatch = isMatch && p.apartmentType === filters.propertyType;
      }
      if (filters.zipCode) {
        isMatch = isMatch && p.zipcode === filters.zipCode;
      }
      return isMatch;
    });

    setPropertyList(filteredProperties);
    calculateStats(filteredProperties);
  };

  useEffect(() => {
    calculateStats(propertyList);
  }, [propertyList]);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden">
      <div className="w-full md:w-72 h-full overflow-auto">
        <SideBar filterProperties={filterProperties} />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Scrollable Content */}
        <div className="flex-1 p-4 space-y-6 overflow-y-auto">
          {/* Map Container - Ensures no empty space on the sides */}
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <Map
              locations={propertyList.map((p) => ({
                name: p.propertyName,
                coordinates: [parseFloat(p.longitude), parseFloat(p.latitude)],
                apartmentType: p.apartmentType,
                salePrice: p.salePrice,
                address: p.address,
              }))}
            />
          </div>

          {/* Stats and Property Sections */}
          <StatsSection stats={stats} />
          <PropertySection
            properties={propertyList}
            selectedFilters={selectedFilters}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

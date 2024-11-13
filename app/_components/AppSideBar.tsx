"use client";
import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  // State to hold filter values
  const [filters, setFilters] = useState({
    zipCode: "",
    propertyAddress: "",
    searchRadius: 50,
    priceRangeMin: "",
    priceRangeMax: "",
    propertyType: "",
    minCapRate: "",
    minOccupancy: 80,
    sourceType: "",
    yearBuiltMin: "",
    yearBuiltMax: "",
  });

  // Updates state based on input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Logs selected filters to console
  const applyFilters = () => {
    console.log("Selected Filters:", filters);
  };

  return (
    <Sidebar className="bg-gray-100 p-4 w-72">
      <SidebarHeader className="text-xl font-bold text-center mb-4">
        Multifamily Dashboard
      </SidebarHeader>
      <SidebarContent className="space-y-4">
        <SidebarGroup>
          {/* Input Area For ZipCode & Property Address */}
          <label className="text-sm">Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            placeholder="Enter zip code"
            value={filters.zipCode}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />

          <label>Property Address</label>
          <input
            type="text"
            name="propertyAddress"
            placeholder="Enter address"
            value={filters.propertyAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />

          {/* Range Slider for Search Radius */}
          <label className="text-sm">Search Radius (miles)</label>
          <input
            type="range"
            name="searchRadius"
            min="0"
            max="100"
            value={filters.searchRadius}
            onChange={handleChange}
            className="w-full mb-2"
          />

          {/* Price Range Inputs */}
          <label className="text-sm">Price Range:</label>
          <input
            type="text"
            name="priceRangeMin"
            placeholder="Min"
            value={filters.priceRangeMin}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />
          <input
            type="text"
            name="priceRangeMax"
            placeholder="Max"
            value={filters.priceRangeMax}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />

          {/* Property Type Dropdown */}
          <label >Property Type</label>
          <select
            name="propertyType"
            value={filters.propertyType}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          >
            <option value="">Select Type</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk">4 BHK</option>
          </select>

          {/* Additional Filters */}
          <label >Min Cap Rate</label>
          <input
            type="text"
            name="minCapRate"
            placeholder="Min Cap Rate"
            value={filters.minCapRate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />
          <label className="text-sm">Min Occupancy (%):</label>
          <input
            type="range"
            name="minOccupancy"
            min="0"
            max="100"
            value={filters.minOccupancy}
            onChange={handleChange}
            className="w-full mb-2"
          />

          {/* Source Type Dropdown */}
          <label >Source Type</label>
          <select
            name="sourceType"
            value={filters.sourceType}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          >
            <option value="">Select source</option>
            <option value="Existing Portfolio Property">
              Existing Portfolio Property
            </option>
          </select>

          {/* Year Built Range */}
          <label className="text-sm">Year Built Range:</label>
          <input
            type="text"
            name="yearBuiltMin"
            placeholder="Min"
            value={filters.yearBuiltMin}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />
          <input
            type="text"
            name="yearBuiltMax"
            placeholder="Max"
            value={filters.yearBuiltMax}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mt-4">
        <button
          onClick={applyFilters}
          className=" w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Apply Filters
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}

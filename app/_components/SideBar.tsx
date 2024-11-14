"use client";
import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

interface SideBarProps {
  filterProperties: (filters: {
    propertyAddress?: string;
    zipCode?: string;
    propertyType?: string;
    priceRangeMin?: number;
    priceRangeMax?: number;
  }) => void;
}

export function SideBar({ filterProperties }: SideBarProps) {
  const [filters, setFilters] = useState({
    zipCode: "",
    propertyAddress: "",
    searchRadius: 50,
    priceRangeMin: 0,
    priceRangeMax: 0,
    propertyType: "",
    minCapRate: "",
    minOccupancy: 50,
    sourceType: "",
    yearBuiltMin: "",
    yearBuiltMax: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFilters({
      ...filters,
      [e.target?.name]: e.target.value,
    });
  };

  // Printing the sleceted filters on Conosle
  const applyFilters = () => {
    console.log("Selected Filters:", filters);
    filterProperties(filters);
    setFilters({
      zipCode: "",
      propertyAddress: "",
      searchRadius: 50,
      priceRangeMin: 0,
      priceRangeMax: 0,
      propertyType: "",
      minCapRate: "",
      minOccupancy: 50,
      sourceType: "",
      yearBuiltMin: "",
      yearBuiltMax: "",
    });
  };

  return (
    <Sidebar className="bg-gray-100 p-4 w-72">
      <SidebarHeader className="text-xl font-bold text-center mb-4">
        Multifamily Dashboard
      </SidebarHeader>
      <SidebarContent className="space-y-4">
        <SidebarGroup>
          {/* Input Area For ZipCode & Property Address */}
          <label className="text-sm font-bold">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            placeholder="Enter zip code"
            value={filters.zipCode}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />

          <label className="text-sm font-bold">Property Address</label>
          <input
            type="text"
            name="propertyAddress"
            placeholder="Enter address"
            value={filters.propertyAddress}
            onChange={handleChange}
            className="w-full p-2 border  rounded-md mb-2"
          />

          {/* Range Slider for Search Radius */}
          <label className="text-sm font-bold">Search Radius (miles)</label>
          <input
            type="range"
            name="searchRadius"
            min="0"
            max="100"
            value={filters.searchRadius}
            onChange={handleChange}
          />
          <p className="text-sm ">{filters.searchRadius} miles</p>

          {/* Price Range Inputs */}
          <label className="text-sm  mt-2 font-bold ">Price Range</label>
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
          <label className="font-bold  text-sm mt-2">Property Type</label>
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

          <label className="font-bold mt-2 text-sm">Min Cap Rate</label>
          <input
            type="text"
            name="minCapRate"
            placeholder="Min Cap Rate"
            value={filters.minCapRate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />

          {/* Range Slider for Min Occupancy */}
          <label className="text-sm font-bold">Min Occupancy (%)</label>
          <input
            type="range"
            name="minOccupancy"
            min="0"
            max="100"
            value={filters.minOccupancy}
            onChange={handleChange}
          />
          <p className="text-sm">{filters.minOccupancy}%</p>

          {/* Source Type Dropdown */}
          <label className="font-bold mt-2 text-sm">Source Type</label>
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
          <label className="text-sm mt-2 font-bold">Year Built Range</label>
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
        <Button onClick={applyFilters} className="hover:bg-slate-700">
          Apply Filter
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

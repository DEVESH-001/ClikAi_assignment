import React from "react";
import { AppSidebar } from "./_components/AppSideBar";
import Map from "./_components/Map";
import StatsSection from "./_components/StatsSection";
import PropertySection from "./_components/PropertySection";

const Page = () => {
  return (
    <div className="flex h-screen">
      <div className="w-72">
        <AppSidebar />
      </div>

      <div className="flex-1">
        <Map />
        <StatsSection/>
        <PropertySection/>
      </div>
    </div>
  );
};

export default Page;

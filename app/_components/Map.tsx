"use client";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface Location {
  name: string;
  coordinates: [number, number];
  apartmentType: string;
  salePrice: string;
  address: string;
}

function Map({ locations }: { locations: Location[] }) {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGV2ZXNoMjAwMSIsImEiOiJjbTNla3g2ZWYwZWVrMmlxeHVxZGc2MG14In0.7HmZy3yl0mBsrFWp60ARTQ";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLDivElement,
      center: [73.951893, 18.530052],
      zoom: 13.12,
    });

    // Add popup markers
    locations.forEach((location) => {
      const { name, coordinates, apartmentType, salePrice, address } = location;
      const popupContent = `
        <div>
          <strong>${name}</strong>
          <p>Type: ${apartmentType}</p>
          <p>Sale Price: ${salePrice}</p>
          <p>Address: ${address}</p>
        </div>
      `;
      new mapboxgl.Marker()
        .setLngLat(coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(popupContent))
        .addTo(mapRef.current as mapboxgl.Map);
    });

    return () => {
      mapRef.current?.remove();
    };
  }, [locations]);

  return (
    <div
      id="map-container"
      ref={mapContainerRef}
      className="w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] mt-4 rounded-lg shadow-md"
    />
  );
}

export default Map;

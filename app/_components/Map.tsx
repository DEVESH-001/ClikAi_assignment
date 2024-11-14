
// "use client";
// import { useRef, useEffect } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// function Map({ locations }: { locations: Object[] }) {
//   const mapRef = useRef();
//   const mapContainerRef = useRef();

//   useEffect(() => {
//     mapboxgl.accessToken =
//       "pk.eyJ1IjoiZGV2ZXNoMjAwMSIsImEiOiJjbTNla3g2ZWYwZWVrMmlxeHVxZGc2MG14In0.7HmZy3yl0mBsrFWp60ARTQ";
//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       center: [73.951893, 18.530052], 
//       zoom: 13.12,
//     });

//     // Add popup markers
//     locations.forEach((location) => {
//       const { name, coordinates, apartmentType, salePrice, address } = location;
//       const popupContent = `
//         <div>
//           <strong>${name}</strong>
//           <p>Type: ${apartmentType}</p>
//           <p>Sale Price: ${salePrice}</p>
//           <p>Address: ${address}</p>
//         </div>
//       `;
//       new mapboxgl.Marker()
//         .setLngLat(coordinates)
//         .setPopup(new mapboxgl.Popup().setHTML(popupContent)) // Set the content for the popup
//         .addTo(mapRef.current);
//     });

//     return () => {
//       mapRef.current.remove();
//     };
//   }, [locations]);

//   return (
//     <div
//       id="map-container"
//       ref={mapContainerRef}
//       className="w-full h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] mt-4 rounded-lg shadow-md"
//     />
//   );
// }

// export default Map;

"use client";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Map({ locations }: { locations: Object[] }) {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGV2ZXNoMjAwMSIsImEiOiJjbTNla3g2ZWYwZWVrMmlxeHVxZGc2MG14In0.7HmZy3yl0mBsrFWp60ARTQ";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
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
        .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove();
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

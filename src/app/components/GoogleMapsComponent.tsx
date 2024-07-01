"use client";
import React, { useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import Link from "next/link";
import GoogleSateliteImg from "@images/GoogleSatelite.png";
import Image from "next/image";

const containerStyle = {
  width: "100%",
  height: "250px",
};

const center = {
  lat: 55.6377983,
  lng: 12.0702486,
};

const googleMapsApiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

const GoogleMapsComponent = () => {
  const [mapType, setMapType] = useState("roadmap"); // Default map type is "roadmap"

  const mapOptions = {
    disableDefaultUI: true, // Disable default UI controls
    zoomControl: true, // Enable zoom control
    streetViewControl: false, // Disable street view control
    fullscreenControl: false, // Disable fullscreen control
  };

  const toggleSatellite = () => {
    setMapType(mapType === "roadmap" ? "satellite" : "roadmap");
  };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={mapOptions}
        mapTypeId={mapType} // Dynamically set map type based on state
      >
        <Marker position={center} label="Roskilde Gymnastikforening" />
        {/* Custom control for satellite toggle */}
        <div className="absolute bottom-2 left-2 z-10">
          <button
            className="bg-white p-1 rounded-lg shadow-md text-sm font-semibold text-gray-600 hover:bg-gray-100"
            onClick={toggleSatellite}
          >
            <Image
              alt="Google Satelite Image"
              className="w-10 h-10"
              src={GoogleSateliteImg}
            />
          </button>
        </div>
        {/* Information box */}
        <div className="absolute w-64 h-22 top-2 left-2 p-2 bg-white rounded-lg shadow-lg z-10">
          <h3 className="text-md text-black font-semibold">
            Roskilde Gymnastikforening
          </h3>
          <Link
            target="blank"
            className="text-blue-400 text-xs"
            href="https://www.google.com/maps/place/Roskilde+Gymnastikforening/@55.6378524,12.0676391,17z/data=!3m1!4b1!4m6!3m5!1s0x465261947b230723:0x891f96a54260a375!8m2!3d55.6378494!4d12.070214!16s%2Fg%2F11b5pjj__j?entry=ttu"
          >
            Se på maps
          </Link>
        </div>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;

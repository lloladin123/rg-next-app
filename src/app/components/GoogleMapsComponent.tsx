"use client";
import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

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
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} label="Roskilde Gymnastikforening" />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;

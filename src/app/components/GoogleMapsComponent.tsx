"use client";
import React, { CSSProperties } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "250px",
};

const center = {
  lat: 55.6377983,
  lng: 12.0702486,
};

const labelStyle: CSSProperties = {
  textAlign: "center",
  fontSize: "12px",
  color: "#1e6873",
  padding: "5px",
  position: "relative",
  top: "-20px", // Adjust top position to move the label up or down
  left: "-10%", // Adjust left position to move the label left or right
  transform: "translateX(-50%)", // Center the label horizontally
};

const googleMapsApiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

const GoogleMapsComponent = () => {
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="label  flex flex-col" style={labelStyle}>
            <p className="text-left">Roskilde</p>
            <p className="text-left">Gymnastikforening</p>
          </div>
        </div>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;

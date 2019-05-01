import React, { useEffect } from "react";

require("dotenv").config({
  path: `.env`
});

const MAPS_API_KEY = process.env.REACT_APP_MAPS_API_KEY;

const Map = () => {
  useEffect(() => {
    window.initMap = initMap;
    runScript(
      `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=initMap`
    );
  });

  const initMap = () => {
    // Declare map object
    new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 39.952583, lng: -75.165222 },
      zoom: 14
    });
  };

  return <div id="map" />;
};

export default Map;

function runScript(src) {
  const body = window.document.querySelector("body");
  const script = window.document.createElement("script");

  script.src = src;
  script.async = true;
  script.defer = true;
  body.insertAdjacentElement("beforeend", script);

  script.onerror = () => {
    throw new Error("Failed to load Google Maps");
  };
}

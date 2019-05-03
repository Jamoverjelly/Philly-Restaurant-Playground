import React, { useEffect, useState } from "react";

const MAPS_API_KEY = process.env.MAPS_API_KEY;

const Map = props => {
  const [markers, setMarkers] = useState([]);
  const [currentMarker, setCurrentMarker] = useState({});
  const [infoWindow, setInfoWindow] = useState(false);

  useEffect(() => {
    window.initMap = initMap;
    runScript(
      `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=initMap`
    );
    window.google = {};
  });

  const initMap = () => {
    // Declare map object
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 39.952583, lng: -75.165222 },
      zoom: 14
    });

    props.restaurants.map(restaurant => {
      let {
        alias: key,
        name,
        location: { display_address: address },
        coordinates: { latitude: lat, longitude: lng },
        price,
        rating
      } = restaurant.node;

      let marker = new window.google.maps.Marker({
        key: key,
        map: map,
        title: name,
        address: address,
        position: {
          lat: lat,
          lng: lng
        },
        price: price,
        rating: rating,
        animation: window.google.maps.Animation.DROP
      });

      markers.push(marker);
    });
  };

  return <div id="map" style={{ height: `100%` }} />;
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

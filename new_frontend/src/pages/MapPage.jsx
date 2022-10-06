import React, { useRef } from "react";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import data from "../data/stash.json";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
// eslint-disable-next-line import/no-webpack-loader-syntax
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
mapboxgl.workerClass = MapboxWorker;

function distance(lat1, lat2, lon1, lon2) {
  // The math module contains a function
  // named toRadians which converts from
  // degrees to radians.
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  // Haversine formula
  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in kilometers. Use 3956
  // for miles
  let r = 6371;

  // calculate the result
  return c * r;
}
mapboxgl.accessToken =
  "pk.eyJ1IjoidWx0cmFyYXB0b3IiLCJhIjoiY2t0cGo5aThxMGFxMzJybXBiNmZ3bWY4eSJ9.q24IUWxYYm6DhTDn5pY2Rg";

const MapPage = () => {
  const mapContainer = useRef(null);
  const {
    state: { user },
  } = useGlobalContext();
  const [showcon, setShowcon] = React.useState(false);

  const treasureItems = async () => {
    try {
      await axios.get("/api/auth/treasure-items");
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    const location = window.navigator && window.navigator.geolocation;
    let position = { lat: 0, lng: 0 };

    if (location) {
      location.getCurrentPosition(
        (pos) => {
          position.lat = pos.coords.latitude;
          position.lng = pos.coords.longitude;
        },
        (error) => {
          console.log(error);
        }
      );
    }
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [position.lng, position.lat],
      pitch: 50,
      bearing: 0,
      zoom: 18,
      minPitch: 35,
      maxPitch: 65,
    });

    var geoLocate = new mapboxgl.GeolocateControl({
      fitBoundsOptions: {
        maxZoom: 18,
      },
      positionOptions: {
        enableHighAccuracy: true,
      },
      // When active the map will receive updates to the device's location as it changes.
      // trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      trackUserLocation: true,
      showUserHeading: false,
      showAccuracyCircle: true,
    });
    map.addControl(geoLocate);
    geoLocate.on("geolocate", function () {
      map.setZoom(18);
    });
    map.on("load", () => {
      geoLocate.trigger();
      map.addLayer({
        id: "sky",
        type: "sky",
        paint: {
          "sky-type": "atmosphere",
          "sky-atmosphere-sun": [0.0, 90.0],
          "sky-atmosphere-sun-intensity": 15,
        },
      });
    });
    const player = document.createElement("div");
    player.style.backgroundImage = `url(https://cdn.discordapp.com/attachments/995303058131128371/995417061041901568/Yellow_Corn_2.png)`;
    player.id = `playerChar`;
    player.style.minWidth = `10px`;
    player.style.maxWidth = `50px`;
    player.style.width = `10vw`;
    player.style.aspectRatio = `3/4`;
    player.style.backgroundSize = `100%`;
    player.style.zIndex = `99`;
    if (location) {
      location.getCurrentPosition(
        (position) => {
          player.dataset.lng = position.lng;
          player.dataset.lat = position.lat;
          new mapboxgl.Marker(player, { anchor: "bottom" })
            .setLngLat([position.coords.longitude, position.coords.latitude])
            .addTo(map);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    for (var points of data) {
      const treasure = document.createElement("div");
      treasure.className = "chest";
      treasure.style.minWidth = `75px`;
      treasure.style.maxWidth = `100px`;
      treasure.style.width = `10vw`;
      treasure.style.aspectRatio = `4/3`;
      treasure.style.backgroundSize = `100%`;
      treasure.style.zIndex = `98`;
      treasure.dataset.lng = points.lng;
      treasure.dataset.lat = points.lat;
      // eslint-disable-next-line
      treasure.addEventListener("click", () => {
        var pointDist = distance(
          position.lat,
          points.lat,
          position.lng,
          points.lng
        );
        if (pointDist <= 0.2) {
          if (user.inventory.length === 0) {
            window.alert("You do not have anything to recycle!");
            return;
          }
          treasureItems();
          setShowcon(true);
        }
      });
      new mapboxgl.Marker(treasure, { anchor: "bottom" })
        .setLngLat([points.lng, points.lat])
        .addTo(map);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div>
        {showcon && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}
        {showcon && (
          <div className="text-center absolute justify-center flex flex-col gap-2 z-[10000] w-[80vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 shadow-lg rounded-lg p-6">
            <h1 className="font-bold text-2xl">
              Yay! You have successfully recycled your items!
            </h1>
            <Link to="/leaderboard">
              <button className="py-2 px-4 self-center mt-4 font-bold rounded-md bg-green-200 hover:bg-green-800 transition hover:text-white shadow-lg">
                View Leaderboard
              </button>
            </Link>
          </div>
        )}
        <div ref={mapContainer} className="w-[100vw] h-[100vh]" />
      </div>
    </>
  );
};

export default MapPage;

"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function ClickHandler({ onClick }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng);
    },
  });
  return null;
}

function MapController({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.flyTo(center, 15, {
        animate: true,
        duration: 1.2,
      });
    }
  }, [center, map]);

  return null;
}

export default function MapPickerClient({ onSelect, error }) {
  const [marker, setMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState([25.2048, 55.2708]);
  const [isLocating, setIsLocating] = useState(false);
  const [locationHint, setLocationHint] = useState("");

  const dropMarker = (lat, lng, recenter = true) => {
    const coords = [lat, lng];
    setMarker(coords);
    if (recenter) {
      setMapCenter(coords);
    }
    setLocationHint("");
    onSelect(lat, lng);
  };

  const handleClick = (latlng) => {
    dropMarker(latlng.lat, latlng.lng);
  };

  const fallbackToApproximateLocation = async () => {
    setIsLocating(true);
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      if (data?.latitude && data?.longitude) {
        dropMarker(Number(data.latitude), Number(data.longitude), true);
        setLocationHint(
          "Used approximate location based on your network. Adjust the pin if needed."
        );
      } else {
        throw new Error("Missing coordinates");
      }
    } catch (err) {
      setLocationHint(
        "Unable to detect your location. Please tap on the map to pin the site manually."
      );
    } finally {
      setIsLocating(false);
    }
  };

  const useCurrent = () => {
    const isSecureOrigin =
      typeof window !== "undefined" &&
      (window.isSecureContext || window.location.hostname === "localhost");

    if (!isSecureOrigin) {
      fallbackToApproximateLocation();
      return;
    }

    if (!navigator.geolocation) {
      fallbackToApproximateLocation();
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        dropMarker(pos.coords.latitude, pos.coords.longitude, true);
        setIsLocating(false);
      },
      () => {
        fallbackToApproximateLocation();
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  };

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700">
        Map Location
      </label>
      <p className="mb-2 text-xs text-slate-500">
        Tap anywhere on the map or use your current location.
      </p>

      <div className="relative z-0 isolate rounded-md border border-slate-300 overflow-hidden">
        <MapContainer
          center={mapCenter}
          zoom={12}
          scrollWheelZoom={false}
          className="h-[260px] w-full relative z-0"
        >
          <TileLayer
            attribution="Ac OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapController center={mapCenter} />
          <ClickHandler onClick={handleClick} />
          {marker && <Marker position={marker} />}
        </MapContainer>
      </div>

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={useCurrent}
          disabled={isLocating}
          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLocating ? "Fetching your location..." : "Use Current Location"}
        </button>
        <p className="text-xs text-slate-500">
          Tap again to move the pin if needed.
        </p>
      </div>
      {locationHint && (
        <p className="mt-2 text-xs text-amber-600">{locationHint}</p>
      )}
      {marker && (
        <p className="mt-2 text-xs text-green-600">
          Location selected successfully
        </p>
      )}

      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
}

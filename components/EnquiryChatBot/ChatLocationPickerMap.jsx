"use client";

import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCallback, useEffect, useMemo, useState } from "react";
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
      map.flyTo(center, 14, { animate: true, duration: 0.8 });
    }
  }, [center, map]);

  return null;
}

const DEFAULT_CENTER = [25.2048, 55.2708];

export default function ChatLocationPickerMap({ onSelect, strings = {} }) {
  const [marker, setMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);
  const [isLocating, setIsLocating] = useState(false);
  const [status, setStatus] = useState("");
  const [statusTone, setStatusTone] = useState("muted");

  const promptText =
    strings.prompt ||
    "Tap anywhere on the map or use your current location.";
  const hintText =
    strings.hint || "Tap again to fine-tune the pin if needed.";
  const useCurrentText =
    strings.useCurrent || "Use Current Location";
  const fetchingText =
    strings.fetching || "Detecting your location…";
  const shareText =
    strings.share || "Share This Location";
  const approxText =
    strings.approx || "Used approximate location. Please confirm.";
  const fallbackText =
    strings.fallback ||
    "Unable to detect your location. Please pin the site manually.";
  const successText =
    strings.success ||
    "Pin placed. Share this location to continue.";

  const handleStatus = useCallback((message, tone = "muted") => {
    setStatus(message);
    setStatusTone(tone);
  }, []);

  const dropMarker = useCallback(
    (lat, lng, recenter = true, message, tone = "success") => {
      const coords = [lat, lng];
      setMarker(coords);
      if (recenter) {
        setMapCenter(coords);
      }
      handleStatus(message ?? successText, tone);
    },
    [handleStatus, successText]
  );

  const handleMapClick = useCallback(
    (latlng) => {
      dropMarker(latlng.lat, latlng.lng, false);
    },
    [dropMarker]
  );

  const fallbackToApproximateLocation = useCallback(async () => {
    setIsLocating(true);
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      if (data?.latitude && data?.longitude) {
        dropMarker(
          Number(data.latitude),
          Number(data.longitude),
          true,
          approxText,
          "info"
        );
      } else {
        throw new Error("Missing coordinates");
      }
    } catch (error) {
      handleStatus(fallbackText, "error");
    } finally {
      setIsLocating(false);
    }
  }, [approxText, dropMarker, fallbackText, handleStatus]);

  const useCurrentLocation = useCallback(() => {
    const isSecureOrigin =
      typeof window !== "undefined" &&
      (window.isSecureContext || window.location.hostname === "localhost");

    if (!isSecureOrigin || !navigator.geolocation) {
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
  }, [dropMarker, fallbackToApproximateLocation]);

  const handleShare = useCallback(() => {
    if (!marker) return;
    onSelect?.({ lat: marker[0], lng: marker[1] });
  }, [marker, onSelect]);

  const statusClasses = useMemo(() => {
    if (statusTone === "error") return "text-red-600";
    if (statusTone === "success") return "text-green-600";
    if (statusTone === "info") return "text-blue-600";
    return "text-slate-500";
  }, [statusTone]);

  return (
    <div className="space-y-4 rounded-[28px] border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/5 sm:p-5">
      <div>
        <p className="text-sm font-semibold text-slate-800">{promptText}</p>
        <p className="text-xs text-slate-500">{hintText}</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <MapContainer
          center={mapCenter}
          zoom={12}
          scrollWheelZoom={false}
          className="h-[220px] w-full"
        >
          <TileLayer
            attribution="© OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapController center={mapCenter} />
          <ClickHandler onClick={handleMapClick} />
          {marker && <Marker position={marker} />}
        </MapContainer>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={useCurrentLocation}
          disabled={isLocating}
          className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLocating ? fetchingText : useCurrentText}
        </button>
        <button
          type="button"
          onClick={handleShare}
          disabled={!marker}
          className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {shareText}
        </button>
      </div>

      {status && (
        <p className={`text-xs ${statusClasses}`}>{status}</p>
      )}
    </div>
  );
}

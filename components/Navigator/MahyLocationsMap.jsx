"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_CENTER = [24.4539, 54.3773];
const DEFAULT_ZOOM = 7;
const LOCATION_FOCUS_ZOOM = 13;

const mahyLocations = [
  {
    name: "MAHY Khoory Group of Companies",
    lat: 25.2720,
    lng: 55.3338,
    city: "Dubai",
    address: "Near Abu Hail Metro Station, Dubai",
    category: "Head Office",
  },
  {
    name: "MAHY Khoory Trading",
    lat: 25.2720,
    lng: 55.3338,
    city: "Dubai",
    address: "Near Abu Hail Metro Station, Dubai",
    category: "Trading",
  },
  {
    name: "Emirates International Equipment & Machinery LLC",
    lat: 25.2406,
    lng: 55.3587,
    city: "Dubai",
    address: "Umm Ramool, Rashidiya",
    category: "Machinery",
  },
  {
    name: "Union Paper Mills",
    lat: 25.1503,
    lng: 55.2201,
    city: "Dubai",
    address: "Al Quoz Industrial Area 1",
    category: "Manufacturing",
  },
  {
    name: "Union Wood Works",
    lat: 25.1376,
    lng: 55.2281,
    city: "Dubai",
    address: "Al Quoz Industrial Area 3",
    category: "Manufacturing",
  },
  {
    name: "National Paper Industry",
    lat: 25.4033,
    lng: 55.5136,
    city: "Ajman",
    address: "New Industrial Area, Ajman",
    category: "Manufacturing",
  },
  {
    name: "Al Dhafra Paper Manufacturing",
    lat: 24.3860,
    lng: 54.4970,
    city: "Abu Dhabi",
    address: "P.O Box 132522, Abu Dhabi",
    category: "Manufacturing",
  },
  {
    name: "MAHY Khoory Motors",
    lat: 24.4850,
    lng: 54.3530,
    city: "Abu Dhabi",
    address: "Al Danah East, Abu Dhabi",
    category: "Automotive",
  },
  {
    name: "Pearl Marina Hotel Apartments",
    lat: 25.0807,
    lng: 55.1403,
    city: "Dubai",
    address: "Dubai Marina",
    category: "Hospitality",
  },
  {
    name: "Market Restaurant & Cafe",
    lat: 25.0807,
    lng: 55.1403,
    city: "Dubai",
    address: "Dubai Marina",
    category: "Hospitality",
  },
];

export default function MahyLocationsMap() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [leafletComponents, setLeafletComponents] = useState(null);
  const [leafletLib, setLeafletLib] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);
  const markerRefs = useRef([]);

  useEffect(() => {
    let isMounted = true;

    const loadLeaflet = async () => {
      try {
        const [{ MapContainer, TileLayer, Marker, Popup }, leafletLibModule] =
          await Promise.all([import("react-leaflet"), import("leaflet")]);

        if (!isMounted) {
          return;
        }

        setLeafletComponents({ MapContainer, TileLayer, Marker, Popup });
        setLeafletLib(leafletLibModule.default ?? leafletLibModule);
      } catch (error) {
        console.error("Failed to load Leaflet", error);
      }
    };

    loadLeaflet();

    return () => {
      isMounted = false;
    };
  }, []);

  const markerIcon = useMemo(() => {
    if (!leafletLib) {
      return null;
    }

    return new leafletLib.Icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
  }, [leafletLib]);

  useEffect(() => {
    if (!mapInstance?.zoomControl) {
      return;
    }

    mapInstance.zoomControl.setPosition("topright");
  }, [mapInstance]);

  useEffect(() => {
    if (!mapInstance?.scrollWheelZoom) {
      return;
    }

    const container = mapInstance.getContainer();

    if (!container) {
      return;
    }

    let disableTimeoutId;

    const ensureTouchZoomEnabled = () => {
      if (mapInstance.touchZoom && !mapInstance.touchZoom.enabled()) {
        mapInstance.touchZoom.enable();
      }
    };

    const enableInteractiveZoom = () => {
      clearTimeout(disableTimeoutId);

      if (!mapInstance.scrollWheelZoom.enabled()) {
        mapInstance.scrollWheelZoom.enable();
      }

      ensureTouchZoomEnabled();
    };

    const scheduleDisable = () => {
      clearTimeout(disableTimeoutId);

      disableTimeoutId = setTimeout(() => {
        mapInstance.scrollWheelZoom.disable();
      }, 500);
    };

    const wheelListenerOptions = { passive: false };
    const touchListenerOptions = { passive: true };

    container.addEventListener("mouseenter", enableInteractiveZoom);
    container.addEventListener("pointerdown", enableInteractiveZoom);
    container.addEventListener("wheel", enableInteractiveZoom, wheelListenerOptions);
    container.addEventListener("touchstart", enableInteractiveZoom, touchListenerOptions);
    container.addEventListener("mouseleave", scheduleDisable);
    container.addEventListener("touchend", scheduleDisable, touchListenerOptions);

    mapInstance.scrollWheelZoom.disable();

    return () => {
      clearTimeout(disableTimeoutId);
      container.removeEventListener("mouseenter", enableInteractiveZoom);
      container.removeEventListener("pointerdown", enableInteractiveZoom);
      container.removeEventListener("wheel", enableInteractiveZoom, wheelListenerOptions);
      container.removeEventListener("touchstart", enableInteractiveZoom, touchListenerOptions);
      container.removeEventListener("mouseleave", scheduleDisable);
      container.removeEventListener("touchend", scheduleDisable, touchListenerOptions);
    };
  }, [mapInstance]);

  const focusLocation = useCallback(
    (index) => {
      if (!mapInstance) {
        return;
      }

      const target = mahyLocations[index];

      if (!target) {
        return;
      }

      mapInstance.flyTo([target.lat, target.lng], LOCATION_FOCUS_ZOOM, {
        animate: true,
        duration: 1.1,
      });
    },
    [mapInstance]
  );

  const handleLocationSelect = useCallback(
    (index) => {
      setActiveIndex(index);
      focusLocation(index);
    },
    [focusLocation]
  );

  useEffect(() => {
    if (activeIndex == null) {
      return;
    }

    focusLocation(activeIndex);
  }, [activeIndex, focusLocation]);

  useEffect(() => {
    if (activeIndex == null) {
      return;
    }

    const marker = markerRefs.current[activeIndex];
    marker?.openPopup();
  }, [activeIndex, leafletComponents]);

  if (!leafletComponents || !markerIcon) {
    return (
      <section className="relative w-full h-[700px] rounded-3xl overflow-hidden bg-white shadow-2xl flex items-center justify-center">
        <p className="text-sm text-gray-500">Loading interactive map...</p>
      </section>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = leafletComponents;

  return (
    <section className="relative w-full h-[700px] rounded-3xl overflow-hidden bg-white shadow-2xl">
      {/* Sidebar */}
      <aside className="absolute z-[1000] top-6 left-6 w-[320px] max-h-[85%] overflow-y-auto rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl p-4 space-y-3 hidden lg:block">
        <h3 className="text-lg font-semibold mb-2">
          MAHY Office Locations
        </h3>

        {mahyLocations.map((loc, i) => (
          <button
            key={i}
            onClick={() => handleLocationSelect(i)}
            className={`w-full text-left rounded-xl p-3 transition ${
              activeIndex === i
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <p className="font-medium text-sm">{loc.name}</p>
            <p className="text-xs opacity-70">{loc.city}</p>
          </button>
        ))}
      </aside>

      {/* Map */}
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        className="w-full h-full"
        scrollWheelZoom={false}
        whenCreated={setMapInstance}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="(c) OpenStreetMap contributors"
        />

        {mahyLocations.map((loc, i) => (
          <Marker
            key={loc.name}
            position={[loc.lat, loc.lng]}
            icon={markerIcon}
            ref={(marker) => {
              markerRefs.current[i] = marker ?? null;
            }}
            eventHandlers={{
              click: () => handleLocationSelect(i),
            }}
          >
            <Popup>
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">{loc.name}</h4>
                <p className="text-xs text-gray-600">{loc.address}</p>
                <span className="inline-block text-[10px] px-2 py-1 rounded-full bg-gray-100">
                  {loc.category}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}

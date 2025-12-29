"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";

export default function ManufacturingNetworkMap({ data, locations }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  const networkPins = useMemo(
    () => [
      { lon: 55.296249, lat: 25.276987, label: locations[0] },
      { lon: 39.1911, lat: 21.4858, label: locations[1] },
      { lon: 77.209, lat: 28.6139, label: locations[2] },
      { lon: 103.8198, lat: 1.3521, label: locations[3] },
      { lon: 51.389, lat: 25.2854, label: locations[4] },
    ],
    []
  );
  const primaryPin = networkPins[0];

  const dotStep = 8;
  const dotRadius = 2.0;

  const baseDot = "#D3D7DF";
  const baseDot2 = "#C7CCD6";

  const regionDot = "#8F9DFF";
  const regionDot2 = "#A7B0FF";

  const activeDot = "#2D69FF";

  const waveInterval = 5000;
  const waveDuration = 2600;
  const pulseDuration = 2600;
  const pulseStagger = 360;

  const baseWidth = 1600;
  const baseHeight = 800;

  const [canvasSize, setCanvasSize] = useState({
    width: baseWidth,
    height: baseHeight,
  });

  const [isPinHovered, setIsPinHovered] = useState(false);

  const isCompactMap = canvasSize.width < 640;

  const densityFactor = isCompactMap ? 0.72 : 1;

  const pointsRef = useRef([]);

  const pinPxRef = useRef([0, 0]);
  const pinPixelsRef = useRef([]);

  const animRef = useRef({ raf: null, start: 0 });
  const hoverStateRef = useRef(false);
  const controlsRef = useRef({ start: () => {}, stop: () => {} });
  const worldDataRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const recalc = () => {
      const rect = wrap.getBoundingClientRect();
      const width = rect.width || baseWidth;
      const height =
        rect.height && rect.height > 0
          ? rect.height
          : Math.max(300, (width / baseWidth) * baseHeight * 0.65);

      setCanvasSize((prev) => {
        if (
          Math.abs(prev.width - width) < 1 &&
          Math.abs(prev.height - height) < 1
        ) {
          return prev;
        }
        return { width, height };
      });
    };

    recalc();
    const observer = new ResizeObserver(recalc);
    observer.observe(wrap);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = Math.max(360, canvasSize.width || baseWidth);
    const height =
      canvasSize.height || Math.max(320, (width / baseWidth) * baseHeight);

    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const scaleFactor = width / baseWidth;

    const renderRadius = Math.min(
      isCompactMap ? 3.4 : 3.1,
      Math.max(isCompactMap ? 1.9 : 1.55, dotRadius * scaleFactor)
    );
    // const renderRadius = Math.min(3.1, Math.max(1.55, dotRadius * scaleFactor));
    // const spacing = Math.max(5.6, dotStep * scaleFactor);

    const spacing = Math.max(
      isCompactMap ? 4.8 : 5.6,
      dotStep * scaleFactor * densityFactor
    ); // This is key to framing like the reference screenshot:
    // slightly higher translate Y and a touch bigger scale so map fills area nicely
    // const projection = geoNaturalEarth1()
    //   .scale(365 * scaleFactor)
    //   .translate([width * 0.52, height * 0.53]);

    const projection = geoNaturalEarth1()
      .scale((isCompactMap ? 520 : 365) * scaleFactor)
      .translate(
        isCompactMap
          ? [width * 0.58, height * 0.6]
          : [width * 0.52, height * 0.53]
      );

    const path = geoPath(projection);
    let destroyed = false;

    const smooth01 = (t) => Math.max(0, Math.min(1, t));
    const smoothstep = (edge0, edge1, x) => {
      const t = smooth01((x - edge0) / (edge1 - edge0));
      return t * t * (3 - 2 * t);
    };

    const regionTint = (lon, lat) => {
      const lonFactor = smoothstep(-10, 40, lon) * smoothstep(40, 165, lon);
      const latFactor = smoothstep(-20, 10, lat) * smoothstep(10, 75, lat);
      return lonFactor * latFactor; // 0..1
    };

    function drawPrimaryPin(px, py, label, pulseProgress) {
      // Label
      const labelFontSize = Math.max(13, Math.min(18, width / 95));
      ctx.font = `600 ${labelFontSize}px 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial`;
      ctx.fillStyle = "#111827";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText(label, px, py - 34);

      ctx.beginPath();
      ctx.moveTo(px, py - 26);
      ctx.lineTo(px, py - 10);
      ctx.strokeStyle = "rgba(45,105,255,0.85)";
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // Soft glow behind pin
      ctx.save();
      ctx.globalAlpha = 1;
      const glow = ctx.createRadialGradient(px, py, 0, px, py, 26);
      glow.addColorStop(0, "rgba(45,105,255,0.38)");
      glow.addColorStop(0.55, "rgba(45,105,255,0.16)");
      glow.addColorStop(1, "rgba(45,105,255,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(px, py, 26, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Outer halo ring
      ctx.beginPath();
      ctx.arc(px, py, 13, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(45,105,255,0.95)";
      ctx.lineWidth = 2.4;
      ctx.stroke();

      // Inner dot + white core (reference has that “target” feel)
      ctx.beginPath();
      ctx.arc(px, py, 6.3, 0, Math.PI * 2);
      ctx.fillStyle = activeDot;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Pulse rings (your existing behavior, just slightly softer)
      // pulseProgress.forEach((progress) => {
      //   const radius = 18 + progress * 52;
      //   const alpha = 0.34 * (1 - progress);
      //   ctx.beginPath();
      //   ctx.arc(px, py, radius, 0, Math.PI * 2);
      //   ctx.strokeStyle = `rgba(45,105,255,${alpha})`;
      //   ctx.lineWidth = 2;
      //   ctx.stroke();
      // });

      pulseProgress.forEach((progress) => {
        const radius = 18 + progress * 52;

        // 🔵 Dark near pin → light as it expands
        const gradient = ctx.createRadialGradient(
          px,
          py,
          radius * 0.15, // inner (near pin)
          px,
          py,
          radius // outer
        );

        gradient.addColorStop(0, "rgba(45,105,255,0.55)"); // dark blue
        gradient.addColorStop(0.45, "rgba(45,105,255,0.35)");
        gradient.addColorStop(1, "rgba(167,176,255,0.15)"); // light blue

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    }

    function drawSecondaryPin(px, py) {
      // small white halo
      ctx.beginPath();
      ctx.arc(px, py, 7, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // soft ring
      ctx.beginPath();
      ctx.arc(px, py, 7, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(45,105,255,0.30)";
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // core
      ctx.beginPath();
      ctx.arc(px, py, 3.1, 0, Math.PI * 2);
      ctx.fillStyle = activeDot;
      ctx.fill();
    }

    function drawFrame(waveRadius, pulseProgress = []) {
      ctx.clearRect(0, 0, width, height);

      // Background: the reference inside the map area feels almost flat white
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      const pts = pointsRef.current;

      // Precompute a subtle depth variation with alternating dot color
      // (this prevents the map looking “flat”)
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];

        // Regional tint (right side more violet-blue)
        const tint = regionTint(p.lon, p.lat);

        // mix base greys with blue-violet in tinted regions
        const baseMix = i % 2 === 0 ? baseDot : baseDot2;
        const regionMix = i % 2 === 0 ? regionDot : regionDot2;

        // Mix colors using d3 interpolator
        const mixed = d3.interpolateRgb(baseMix, regionMix)(tint);

        // Apply your wave highlight ON TOP
        if (waveRadius !== null) {
          const edge = 0.06;
          const t = (waveRadius - p.dist) / edge;

          if (t >= 1) {
            // fully activated
            ctx.beginPath();
            ctx.arc(p.x, p.y, renderRadius, 0, Math.PI * 2);
            ctx.fillStyle = activeDot;
            ctx.fill();
            continue;
          } else if (t > 0) {
            // transition band
            ctx.globalAlpha = 0.28 + 0.72 * t;
            ctx.beginPath();
            ctx.arc(p.x, p.y, renderRadius, 0, Math.PI * 2);
            ctx.fillStyle = activeDot;
            ctx.fill();
            ctx.globalAlpha = 1;
            continue;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, renderRadius, 0, Math.PI * 2);
        ctx.fillStyle = mixed;
        ctx.fill();
      }

      const pinPixels = pinPixelsRef.current;
      const [mainPx = 0, mainPy = 0] = pinPxRef.current;

      // Primary pin
      if (mainPx && mainPy) {
        drawPrimaryPin(mainPx, mainPy, primaryPin.label, pulseProgress);
      }

      // Secondary pins
      pinPixels.forEach((coords, idx) => {
        if (!coords || idx === 0) return;
        const [px, py] = coords;
        drawSecondaryPin(px, py);
      });
    }

    function loop(now) {
      if (destroyed) return;

      if (!hoverStateRef.current) {
        if (animRef.current.raf) {
          cancelAnimationFrame(animRef.current.raf);
          animRef.current.raf = null;
        }
        animRef.current.start = 0;
        drawFrame(null);
        return;
      }

      if (!pointsRef.current.length) {
        animRef.current.raf = requestAnimationFrame(loop);
        return;
      }

      if (!animRef.current.start) animRef.current.start = now;

      const elapsed = now - animRef.current.start;
      const cycle = elapsed % waveInterval;

      const waveActive = cycle <= waveDuration;
      const eased = waveActive
        ? 1 - Math.pow(1 - cycle / waveDuration, 3)
        : null;

      const waveRadius = eased !== null ? eased * Math.PI : null;

      const pulseProgress = [];
      for (let i = 0; i < 2; i++) {
        const offset = cycle - i * pulseStagger;
        if (offset < 0 || offset > pulseDuration) continue;
        pulseProgress.push(offset / pulseDuration);
      }

      drawFrame(waveRadius, pulseProgress);
      animRef.current.raf = requestAnimationFrame(loop);
    }

    function startAnimation() {
      if (animRef.current.raf || !hoverStateRef.current) return;
      animRef.current.start = 0;
      animRef.current.raf = requestAnimationFrame(loop);
    }

    function stopAnimation() {
      if (animRef.current.raf) {
        cancelAnimationFrame(animRef.current.raf);
        animRef.current.raf = null;
      }
      animRef.current.start = 0;
      drawFrame(null);
    }

    controlsRef.current = { start: startAnimation, stop: stopAnimation };

    // function handleMove(e) {
    //   const rect = canvas.getBoundingClientRect();
    //   const mx = ((e.clientX - rect.left) / rect.width) * width;
    //   const my = ((e.clientY - rect.top) / rect.height) * height;
    //   const [px, py] = pinPxRef.current;

    //   const hitRadius = 40 * (width / baseWidth);
    //   const hit = Math.hypot(mx - px, my - py) <= hitRadius;
    //   setIsPinHovered(hit);
    // }

    // function handleLeave() {
    //   setIsPinHovered(false);
    // }

    // canvas.addEventListener("mousemove", handleMove);
    // canvas.addEventListener("mouseleave", handleLeave);

    async function loadWorld() {
      if (worldDataRef.current) return worldDataRef.current;
      const data = await fetch(
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
      ).then((r) => r.json());
      worldDataRef.current = data;
      return data;
    }

    (async () => {
      const world = await loadWorld();
      if (destroyed) return;

      const land = feature(world, world.objects.countries);

      pinPxRef.current = projection([primaryPin.lon, primaryPin.lat]);
      pinPixelsRef.current = networkPins.map((pin) =>
        projection([pin.lon, pin.lat])
      );

      const pts = [];
      for (const f of land.features) {
        const bounds = path.bounds(f);

        for (let x = bounds[0][0]; x < bounds[1][0]; x += spacing) {
          for (let y = bounds[0][1]; y < bounds[1][1]; y += spacing) {
            const lonlat = projection.invert([x, y]);
            if (!lonlat) continue;
            if (!d3.geoContains(f, lonlat)) continue;

            pts.push({
              x,
              y,
              lon: lonlat[0],
              lat: lonlat[1],
              dist: d3.geoDistance(lonlat, [primaryPin.lon, primaryPin.lat]),
            });
          }
        }
      }

      pointsRef.current = pts;
      drawFrame(null);
    })();

    return () => {
      destroyed = true;
      // canvas.removeEventListener("mousemove", handleMove);
      // canvas.removeEventListener("mouseleave", handleLeave);
      if (animRef.current.raf) cancelAnimationFrame(animRef.current.raf);
    };
  }, [primaryPin, networkPins, canvasSize]);

  useEffect(() => {
    hoverStateRef.current = isPinHovered;
    if (isPinHovered) controlsRef.current.start();
    else controlsRef.current.stop();
  }, [isPinHovered]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPinHovered(true);
      setTimeout(() => {
        setIsPinHovered(false);
      }, waveDuration + 150);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-16 sm:pb-20">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        <div
          className="
            bg-white
            rounded-[28px]
            shadow-[0_30px_90px_rgba(15,23,42,0.12)]
            px-6
            sm:px-10
            py-10
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,320px)_1fr] items-center gap-10 lg:gap-16">
            <div className="order-2 lg:order-1 text-center lg:text-start">
              <p className="text-xs sm:text-sm font-semibold uppercase text-[#1C4C9A]">
                {data[0]}
              </p>
              <h2 className="mt-4 text-[30px] sm:text-[36px] lg:text-[40px] font-semibold leading-tight text-gray-900">
                {data[1]}
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-7 text-gray-600 max-w-xl mx-auto lg:mx-0">
                {data[2]}
              </p>
            </div>

            <div
              ref={wrapRef}
              className="
                order-2 lg:order-2
                relative w-full
                h-[320px] sm:h-[400px] lg:h-[520px] xl:h-[580px]
                overflow-hidden
                rounded-[22px] sm:rounded-[28px] lg:rounded-[32px]
                bg-[#FFFFFF]
              "
            >
              <canvas
                ref={canvasRef}
                className="absolute inset-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//copy of old component

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import * as d3 from "d3";
// import { geoNaturalEarth1, geoPath } from "d3-geo";
// import { feature } from "topojson-client";

// export default function ManufacturingNetworkMap() {
//   const wrapRef = useRef(null);
//   const canvasRef = useRef(null);

//   const networkPins = useMemo(
//     () => [
//       { lon: 55.296249, lat: 25.276987, label: "Dubai, UAE" },
//       { lon: 39.1911, lat: 21.4858, label: "Jeddah, Saudi Arabia" },
//       { lon: 77.209, lat: 28.6139, label: "New Delhi, India" },
//       { lon: 103.8198, lat: 1.3521, label: "Singapore" },
//       { lon: 51.389, lat: 25.2854, label: "Doha, Qatar" },
//     ],
//     []
//   );
//   const primaryPin = networkPins[0];

//   const dotStep = 8;
//   const dotRadius = 2.0;
//   const baseDot = "#d4d7dd";
//   const activeDot = "#2D69FF";
//   const waveInterval = 5000;
//   const waveDuration = 2600;
//   const pulseDuration = 2600;
//   const pulseStagger = 360;

//   const baseWidth = 1600;
//   const baseHeight = 800;

//   const [canvasSize, setCanvasSize] = useState({
//     width: baseWidth,
//     height: baseHeight,
//   });

//   const [isPinHovered, setIsPinHovered] = useState(false);
//   const pointsRef = useRef([]);
//   const pinPxRef = useRef([0, 0]);
//   const pinPixelsRef = useRef([]);
//   const animRef = useRef({ raf: null, start: 0 });
//   const hoverStateRef = useRef(false);
//   const controlsRef = useRef({ start: () => {}, stop: () => {} });
//   const worldDataRef = useRef(null);

//   useEffect(() => {
//     const wrap = wrapRef.current;
//     if (!wrap) return;

//     const recalc = () => {
//       const rect = wrap.getBoundingClientRect();
//       const width = rect.width || baseWidth;
//       const height =
//         rect.height && rect.height > 0
//           ? rect.height
//           : Math.max(300, (width / baseWidth) * baseHeight * 0.65);

//       setCanvasSize((prev) => {
//         if (
//           Math.abs(prev.width - width) < 1 &&
//           Math.abs(prev.height - height) < 1
//         ) {
//           return prev;
//         }

//         return { width, height };
//       });
//     };

//     recalc();
//     const observer = new ResizeObserver(recalc);
//     observer.observe(wrap);

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const wrap = wrapRef.current;
//     if (!canvas || !wrap) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const width = Math.max(360, canvasSize.width || baseWidth);
//     const height =
//       canvasSize.height || Math.max(320, (width / baseWidth) * baseHeight);

//     const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
//     canvas.width = width * dpr;
//     canvas.height = height * dpr;
//     canvas.style.width = "100%";
//     canvas.style.height = "100%";
//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//     const scaleFactor = width / baseWidth;
//     const renderRadius = Math.min(3, Math.max(1.5, dotRadius * scaleFactor));
//     const spacing = Math.max(5.2, dotStep * scaleFactor);
//     const projection = geoNaturalEarth1()
//       .scale(350 * scaleFactor)
//       .translate([width * 0.52, height * 0.56]);
//     const path = geoPath(projection);
//     let destroyed = false;

//     function drawFrame(waveRadius, pulseProgress = []) {
//       ctx.clearRect(0, 0, width, height);

//       const gradient = ctx.createLinearGradient(0, 0, 0, height);
//       gradient.addColorStop(0, "#ffffff");
//       gradient.addColorStop(1, "#f7f9ff");
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, width, height);

//       const pts = pointsRef.current;

//       for (let i = 0; i < pts.length; i++) {
//         const p = pts[i];
//         let color = baseDot;

//         if (waveRadius !== null) {
//           const edge = 0.06;
//           const t = (waveRadius - p.dist) / edge;

//           if (t >= 1) {
//             color = activeDot;
//           } else if (t > 0) {
//             ctx.globalAlpha = 0.25 + 0.75 * t;
//             ctx.beginPath();
//             ctx.arc(p.x, p.y, renderRadius, 0, Math.PI * 2);
//             ctx.fillStyle = activeDot;
//             ctx.fill();
//             ctx.globalAlpha = 1;
//             continue;
//           }
//         }

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, renderRadius, 0, Math.PI * 2);
//         ctx.fillStyle = color;
//         ctx.fill();
//       }

//       const pinPixels = pinPixelsRef.current;
//       const [mainPx = 0, mainPy = 0] = pinPxRef.current;

//       if (mainPx && mainPy) {
//         const labelFontSize = Math.max(13, Math.min(18, width / 95));
//         ctx.font = `600 ${labelFontSize}px 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial`;
//         ctx.fillStyle = "#111827";
//         ctx.textAlign = "right";
//         ctx.textBaseline = "middle";
//         ctx.fillText(primaryPin.label, mainPx - 16, mainPy - 34);

//         ctx.beginPath();
//         ctx.moveTo(mainPx - 12, mainPy - 34);
//         ctx.lineTo(mainPx, mainPy - 34);
//         ctx.lineTo(mainPx, mainPy);
//         ctx.strokeStyle = activeDot;
//         ctx.lineWidth = 1.3;
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.arc(mainPx, mainPy, 12, 0, Math.PI * 2);
//         ctx.strokeStyle = activeDot;
//         ctx.lineWidth = 2.2;
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.arc(mainPx, mainPy, 4.6, 0, Math.PI * 2);
//         ctx.fillStyle = activeDot;
//         ctx.fill();

//         pulseProgress.forEach((progress) => {
//           const radius = 18 + progress * 48;
//           const alpha = 0.4 * (1 - progress);
//           ctx.beginPath();
//           ctx.arc(mainPx, mainPy, radius, 0, Math.PI * 2);
//           ctx.strokeStyle = `rgba(45,105,255,${alpha})`;
//           ctx.lineWidth = 2;
//           ctx.stroke();
//         });
//       }

//       pinPixels.forEach((coords, idx) => {
//         if (!coords || idx === 0) return;
//         const [px, py] = coords;

//         ctx.beginPath();
//         ctx.arc(px, py, 7, 0, Math.PI * 2);
//         ctx.fillStyle = "#ffffff";
//         ctx.fill();

//         ctx.beginPath();
//         ctx.arc(px, py, 7, 0, Math.PI * 2);
//         ctx.strokeStyle = "rgba(45,105,255,0.35)";
//         ctx.lineWidth = 1.4;
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.arc(px, py, 3.2, 0, Math.PI * 2);
//         ctx.fillStyle = activeDot;
//         ctx.fill();
//       });
//     }

//     function loop(now) {
//       if (destroyed) return;
//       if (!hoverStateRef.current) {
//         if (animRef.current.raf) {
//           cancelAnimationFrame(animRef.current.raf);
//           animRef.current.raf = null;
//         }
//         animRef.current.start = 0;
//         drawFrame(null);
//         return;
//       }

//       if (!pointsRef.current.length) {
//         animRef.current.raf = requestAnimationFrame(loop);
//         return;
//       }

//       if (!animRef.current.start) animRef.current.start = now;

//       const elapsed = now - animRef.current.start;
//       const cycle = elapsed % waveInterval;

//       const waveActive = cycle <= waveDuration;
//       const eased = waveActive
//         ? 1 - Math.pow(1 - cycle / waveDuration, 3)
//         : null;
//       const waveRadius = eased !== null ? eased * Math.PI : null;

//       const pulseProgress = [];
//       for (let i = 0; i < 2; i++) {
//         const offset = cycle - i * pulseStagger;
//         if (offset < 0 || offset > pulseDuration) continue;
//         pulseProgress.push(offset / pulseDuration);
//       }

//       drawFrame(waveRadius, pulseProgress);
//       animRef.current.raf = requestAnimationFrame(loop);
//     }

//     function startAnimation() {
//       if (animRef.current.raf || !hoverStateRef.current) return;
//       animRef.current.start = 0;
//       animRef.current.raf = requestAnimationFrame(loop);
//     }

//     function stopAnimation() {
//       if (animRef.current.raf) {
//         cancelAnimationFrame(animRef.current.raf);
//         animRef.current.raf = null;
//       }
//       animRef.current.start = 0;
//       drawFrame(null);
//     }

//     controlsRef.current = { start: startAnimation, stop: stopAnimation };

//     function handleMove(e) {
//       const rect = canvas.getBoundingClientRect();
//       const mx = ((e.clientX - rect.left) / rect.width) * width;
//       const my = ((e.clientY - rect.top) / rect.height) * height;
//       const [px, py] = pinPxRef.current;
//       const hitRadius = 34 * (width / baseWidth);
//       const hit = Math.hypot(mx - px, my - py) <= hitRadius;
//       setIsPinHovered(hit);
//     }

//     function handleLeave() {
//       setIsPinHovered(false);
//     }

//     canvas.addEventListener("mousemove", handleMove);
//     canvas.addEventListener("mouseleave", handleLeave);

//     async function loadWorld() {
//       if (worldDataRef.current) return worldDataRef.current;
//       const data = await fetch(
//         "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
//       ).then((r) => r.json());
//       worldDataRef.current = data;
//       return data;
//     }

//     (async () => {
//       const world = await loadWorld();
//       if (destroyed) return;

//       const land = feature(world, world.objects.countries);
//       pinPxRef.current = projection([primaryPin.lon, primaryPin.lat]);
//       pinPixelsRef.current = networkPins.map((pin) =>
//         projection([pin.lon, pin.lat])
//       );

//       const pts = [];
//       for (const f of land.features) {
//         const bounds = path.bounds(f);

//         for (let x = bounds[0][0]; x < bounds[1][0]; x += spacing) {
//           for (let y = bounds[0][1]; y < bounds[1][1]; y += spacing) {
//             const lonlat = projection.invert([x, y]);
//             if (!lonlat) continue;
//             if (!d3.geoContains(f, lonlat)) continue;

//             pts.push({
//               x,
//               y,
//               dist: d3.geoDistance(lonlat, [primaryPin.lon, primaryPin.lat]),
//             });
//           }
//         }
//       }

//       pointsRef.current = pts;
//       drawFrame(null);
//     })();

//     return () => {
//       destroyed = true;
//       canvas.removeEventListener("mousemove", handleMove);
//       canvas.removeEventListener("mouseleave", handleLeave);
//       if (animRef.current.raf) cancelAnimationFrame(animRef.current.raf);
//     };
//   }, [primaryPin, networkPins, canvasSize]);

//   useEffect(() => {
//     hoverStateRef.current = isPinHovered;
//     if (isPinHovered) {
//       controlsRef.current.start();
//     } else {
//       controlsRef.current.stop();
//     }
//   }, [isPinHovered]);

//   return (
//     // <section className="py-16 sm:py-20 bg-[#F1F4FA]">
//     // <section className="pb-16 sm:pb-20">
//     //   <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
//     //     {/* <div className="bg-white rounded-[32px] sm:rounded-[38px] shadow-[0_20px_70px_rgba(15,23,42,0.08)] px-5 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-16"> */}
//     //     <div
//     //       className="
//     //         bg-white
//     //         rounded-[28px]
//     //         shadow-[0_30px_90px_rgba(15,23,42,0.12)]
//     //         px-6
//     //         sm:px-10
//     //         py-10
//     //       "
//     //     >
//     //       <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,430px)_1fr] items-center gap-10 lg:gap-16">
//     //         <div className="order-2 lg:order-1 text-center lg:text-left">
//     //           <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-[#1C4C9A]">
//     //             Connected Presence
//     //           </p>
//     //           <h2 className="mt-4 text-[30px] sm:text-[36px] lg:text-[40px] font-semibold leading-tight text-gray-900">
//     //             Our Networks Centre
//     //           </h2>
//     //           <p className="mt-6 text-base sm:text-lg leading-7 text-gray-600 max-w-xl mx-auto lg:mx-0">
//     //             Anchored in Dubai, our manufacturing network spans the Middle
//     //             East and Asia through authorized plants and logistics partners,
//     //             keeping production nimble and supply chains responsive for every
//     //             market we serve.
//     //           </p>
//     //         </div>
//     //         <div
//     //           ref={wrapRef}
//     //           className="order-2 lg:order-2 relative w-full h-[320px] sm:h-[400px] lg:h-[520px] xl:h-[580px] overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] bg-[#F8FAFF]"
//     //         >
//     //           <canvas
//     //             ref={canvasRef}
//     //             className="absolute inset-0 cursor-pointer"
//     //           />
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>

//     <section className="pb-16 sm:pb-20">
//       <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
//         <div
//           className="
//           bg-white
//           rounded-[28px]
//           shadow-[0_30px_90px_rgba(15,23,42,0.12)]
//           px-6
//           sm:px-10
//           py-10
//         "
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,430px)_1fr] items-center gap-10 lg:gap-16">
//             {/* TEXT */}
//             <div className="text-center lg:text-left">
//               <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-[#1C4C9A]">
//                 Connected Presence
//               </p>

//               <h2 className="mt-4 text-[30px] sm:text-[36px] lg:text-[40px] font-semibold leading-tight text-gray-900">
//                 Our Networks Centre
//               </h2>

//               <p className="mt-6 text-base sm:text-lg leading-7 text-gray-600 max-w-xl mx-auto lg:mx-0">
//                 Anchored in Dubai, our manufacturing network spans the Middle
//                 East and Asia through authorized plants and logistics partners,
//                 keeping production nimble and supply chains responsive for every
//                 market we serve.
//               </p>
//             </div>

//             {/* MAP */}
//             <div
//               ref={wrapRef}
//               className="
//               relative
//               w-full
//               h-[300px]
//               sm:h-[380px]
//               md:h-[460px]
//               lg:h-[520px]
//               xl:h-[580px]
//               overflow-hidden
//               rounded-[22px]
//               sm:rounded-[28px]
//               lg:rounded-[32px]
//               bg-[#F8FAFF]
//             "
//             >
//               <canvas
//                 ref={canvasRef}
//                 className="absolute inset-0 cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

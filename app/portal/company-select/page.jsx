"use client";

import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CompanySelect() {
  const router = useRouter();
  const params = useSearchParams();
  const redirectParam = params.get("redirect");

  const COMPANY_IMAGE_MAP = {
    "Mohd Abdulla Haji Yousuf (MAHY) Khoory & CO.,LLC":
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175782/image-1_o4wida.png",

    "Emirates International Equipments Machinery LLC.":
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175783/image-3_sdiod9.jpg",

    "Greenland Equipment & Machinery EST. L.L.C":
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175789/image-4_lcsxcf.jpg",

    "Al Mehwar Al Fde General Trading L.L.C":
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175788/image-5_xlekgs.png",

    "Al Khoory Engineering":
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175787/image-6_ids5vt.png",

    "Union Paper Mills":
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175787/image-7_wqqqtt.png",

    "Al Dhafra Paper Manufacturing":
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175764/image-8_f8yris.png",

    "Union Wood Works":
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175763/image-9_qon0ki.png",

    "MAHY Khoory Automotive Division":
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175772/image-21_rmr4xp.jpg",
  };

  const [companies, setCompanies] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  const BLOCKED_ENTITIES = ["DAT", "RWMD", "ADWC", "SWMD", "GLT", "GAWM"];

  useEffect(() => {
    const API_BASE = process.env.NEXT_PUBLIC_BASE_URL;

    fetch(`${API_BASE}api/companies/legal-entities`)
      .then((r) => r.json())
      .then((data) => {
        const mapped = data
          .filter(
            (c) => !BLOCKED_ENTITIES.includes(c.LegalEntityId?.toUpperCase()),
          )
          .map((c) => ({
            id: c.LegalEntityId,
            name: c.Name,
            image:
              COMPANY_IMAGE_MAP[c.Name] ||
              "https://via.placeholder.com/400x240?text=Company",
          }));

        setCompanies(mapped);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const confirmSelection = () => {
    if (!selected) return;

    Cookies.set("mahy_company", JSON.stringify(selected), {
      expires: 1,
    });

    const decodedRedirect = redirectParam
      ? decodeURIComponent(redirectParam)
      : "/contact-us";

    const url = new URL(decodedRedirect, window.location.origin);
    url.searchParams.set("company", selected.id);

    router.push(`${url.pathname}?${url.searchParams.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-6">Select Your Company</h2>

        {loading ? (
          <div className="text-center py-20 text-slate-400">
            Loading companies…
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c)}
                className={`group overflow-hidden rounded-2xl border transition-all ${
                  selected?.id === c.id
                    ? "ring-2 ring-[var(--accent-color)]"
                    : "hover:shadow-xl"
                }`}
              >
                <div className="h-36 w-full bg-white flex items-center justify-center p-6">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-4 bg-white text-left">
                  <h3 className="font-medium text-slate-900">{c.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Legal Entity: {c.id}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-end">
          <button
            disabled={!selected}
            onClick={confirmSelection}
            className={`px-8 py-3 rounded-xl font-medium transition ${
              selected
                ? "b-base text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Confirm & Continue
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import Cookies from "js-cookie";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";

// const companies = [
//   { id: "UPM", name: "Union Paper Mills" },
//   { id: "ADPM", name: "Al Dhafra Paper Manufacturing" },
//   { id: "UWW", name: "Union Wood Works" },
// ];

// export default function CompanySelect() {
//   const router = useRouter();
//   const params = useSearchParams();
//   const [selected, setSelected] = useState(null);

//   const redirectParam = params.get("redirect");

//   const confirmSelection = () => {
//     if (!selected) return;

//     Cookies.set("mahy_company", JSON.stringify(selected), {
//       expires: 1,
//     });

//     const decodedRedirect = redirectParam
//       ? decodeURIComponent(redirectParam)
//       : "/contact-us";

//     const url = new URL(decodedRedirect, window.location.origin);
//     url.searchParams.set("company", selected.id);

//     router.push(url.pathname + "?" + url.searchParams.toString());
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-xl bg-white p-8 rounded-2xl shadow"
//       >
//         <h2 className="text-xl font-semibold mb-6">
//           Select Company
//         </h2>

//         <div className="space-y-3">
//           {companies.map((c) => (
//             <button
//               key={c.id}
//               onClick={() => setSelected(c)}
//               className={`w-full p-4 border rounded-xl text-left ${
//                 selected?.id === c.id
//                   ? "border-[var(--accent-color)] bg-[#f7fcff]"
//                   : ""
//               }`}
//             >
//               {c.name}
//             </button>
//           ))}
//         </div>

//         <div className="mt-6 text-right">
//           <button
//             disabled={!selected}
//             onClick={confirmSelection}
//             className={`px-6 py-3 rounded-xl ${
//               selected
//                 ? "b-base text-white"
//                 : "bg-gray-200 text-gray-400"
//             }`}
//           >
//             Confirm & Continue
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

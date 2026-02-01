"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ServiceRequestTop({
  brand = "Service",
  company = "MAHY Khoory",
  title = "MAHY Servicing",
  primaryCta = "Schedule Service",
  secondaryCta = "Manage My Appointment",
  extendedText = "If you have an extended service plan:",
  extendedCta = "Manage My Extended Service Plan",
  phoneLabel = "MAHY Customer Service:",
  phone = "+93712589225",
  imageSrc,
  onPrimaryClick = "/contact-us/schedule-service",
}) {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden bg-[var(--background)]">
      <div className="flex flex-col lg:flex-row h-full">
        {/* LEFT CONTENT */}
        <div className="relative z-10 w-full lg:w-[58%] flex items-center">
          <div
            className="
              w-full
              max-w-[640px]
              pl-8
              sm:pl-12
              lg:pl-[96px]
              pr-6
              py-28
              text-[var(--foreground)]
            "
          >
            {/* Brand */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.25em] uppercase text-[var(--accent-dark)]">
                {brand}
              </p>
              <p className="text-sm text-slate-500 mt-1">
                {company}
              </p>
            </div>

            {/* Title */}
            <h1 className="text-[42px] sm:text-[52px] lg:text-[60px] font-semibold leading-[1.1] max-w-[520px] mb-14">
              {title}
            </h1>

            {/* CTAs */}
            <div className="flex flex-col items-start gap-4 mb-14">
              <button
                onClick={() => router.push(onPrimaryClick)}
                className="
                  b-base
                  b-base-hover
                  text-white
                  font-semibold
                  px-12
                  h-[56px]
                  rounded-full
                  transition
                  shadow-sm
                "
              >
                {primaryCta}
              </button>

              <button
                className="
                  border-base
                  text-[var(--accent-dark)]
                  px-12
                  h-[56px]
                  rounded-full
                  hover:bg-[var(--accent-light)]
                  hover:text-black
                  transition
                "
              >
                {secondaryCta}
              </button>
            </div>

            {/* Extended plan */}
            <div className="mb-14">
              <p className="text-sm text-slate-600 mb-4">
                {extendedText}
              </p>
              <button
                className="
                  border
                  border-slate-300
                  text-slate-700
                  px-10
                  h-[44px]
                  rounded-full
                  text-sm
                  hover:border-[var(--accent-color)]
                  hover:text-[var(--accent-dark)]
                  transition
                "
              >
                {extendedCta}
              </button>
            </div>

            {/* Phone */}
            <p className="text-sm text-slate-600">
              {phoneLabel}{" "}
              <span className="font-semibold text-[var(--accent-dark)]">
                {phone}
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full lg:w-[42%] min-h-[50vh] lg:min-h-full"
        >
          {/* Gradient overlay for harmony */}
          <div className="absolute inset-0 z-10 bg-gradient-to-l from-white/80 via-white/40 to-transparent" />

          <Image
            src={imageSrc}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

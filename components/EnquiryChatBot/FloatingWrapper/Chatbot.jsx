"use client";

import { usePathname } from "next/navigation";
import ChatWidget from "../ChatWidget";

const HIDDEN_ROUTES = [
  "/careers",
  //   "/about-us",
  "/privacy-policy",
  "/terms"
];

export default function ChatBot({ data, locale, isWidgetOpen, setIsWidgetOpen }) {
  const pathname = usePathname();
  if (HIDDEN_ROUTES.some(route => pathname.startsWith(route))) return null;
  return <ChatWidget data={data} locale={locale} isWidgetOpen={isWidgetOpen} setIsWidgetOpen={setIsWidgetOpen} />;
}

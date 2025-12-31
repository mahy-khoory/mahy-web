import { getTranslations } from "next-intl/server";
import KeyStats from "./KeyStats";

export default async function KeyStatsSection() {
  const translations = await getTranslations('HomePage.KeyFacts');

  const stats = [
    { value: 4000, label: translations('Fact1') },
    { value: 31, label: translations('Fact2') },
    { value: 300, label: translations('Fact3') },
    { value: 2000, label: translations('Fact4') },
    { value: 1000, label: translations('Fact5') },
  ];

  return (
    <KeyStats heading={translations("Heading")} stats={stats} />
  );
}

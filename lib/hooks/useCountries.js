import { useQuery } from "@tanstack/react-query";
import { fetchCountries } from "@/lib/api/lookupApi";

export const useCountries = (enabled = false) =>
  useQuery({
    queryKey: ["countries"],
    queryFn: async () => (await fetchCountries()) ?? [],
    enabled
  });

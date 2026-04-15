import { useQuery } from "@tanstack/react-query";
import { fetchCities } from "@/lib/api/lookupApi";
import { normalizeCountryRegionCode } from "@/lib/utils/country";

export const useCities = (country, enabled = false) =>
  useQuery({
    queryKey: ["cities", normalizeCountryRegionCode(country)],
    queryFn: () => fetchCities(country),
    enabled: enabled && !!normalizeCountryRegionCode(country),
  });

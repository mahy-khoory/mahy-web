import { useQuery } from "@tanstack/react-query";
import { fetchCurrencies } from "@/lib/api/lookupApi";

export const useCurrencies = (enabled = false) =>
  useQuery({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
    enabled,
  });
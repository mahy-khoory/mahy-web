import { useQuery } from "@tanstack/react-query";
import { fetchTaxGroups } from "../api/lookupApi";

export const useTaxGroups = (enabled = false) => useQuery({
    queryKey: ["tax-groups"],
    queryFn: fetchTaxGroups,
    enabled,
})
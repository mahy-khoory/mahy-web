import { useQuery } from "@tanstack/react-query";
import { fetchTaxGroups } from "../api/lookupApi";

export const useTaxGroups = (company, enabled = false) => useQuery({
    queryKey: ["tax-groups", company],
    queryFn: () => fetchTaxGroups(company),
    enabled : enabled && !!company,
})
import { useQuery } from "@tanstack/react-query";
import { fetchDeliveryTerms } from "../api/lookupApi";

export const useDeliveryTerms = (company, enabled = false) => useQuery({
    queryKey: ["delivery-terms", company],
    queryFn: () => fetchDeliveryTerms(company),
    enabled : enabled && !!company,
})
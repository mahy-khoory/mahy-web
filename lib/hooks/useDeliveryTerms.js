import { useQuery } from "@tanstack/react-query";
import { fetchDeliveryTerms } from "../api/lookupApi";

export const useDeliveryTerms = (enabled = false) => useQuery({
    queryKey: ["delivery-terms"],
    queryFn: fetchDeliveryTerms,
    enabled,
})
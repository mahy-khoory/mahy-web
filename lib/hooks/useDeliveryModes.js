import { useQuery } from "@tanstack/react-query";
import { fetchDeliveryModes } from "../api/lookupApi";

export const useDeliveryModes = (company, enabled = false) => useQuery({
    queryKey: ["dlvModes", company],
    queryFn: () => fetchDeliveryModes(company),
    enabled : enabled && !!company,
})
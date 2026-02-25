import { useQuery } from "@tanstack/react-query";
import { fetchDeliveryModes } from "../api/lookupApi";

export const useDeliveryModes = (enabled = false) => useQuery({
    queryKey: ["dlvModes"],
    queryFn: fetchDeliveryModes,
    enabled,
})
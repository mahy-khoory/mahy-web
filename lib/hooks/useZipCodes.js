import { useQuery } from "@tanstack/react-query";
import { fetchZipCodes } from "../api/lookupApi";

export const useZipCodes = (enabled = false) => useQuery({
    queryKey: ["zip-codes"],
    queryFn: fetchZipCodes,
    enabled,
})
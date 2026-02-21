import { useQuery } from "@tanstack/react-query";
import { fetchLineOfBusiness } from "../api/lookupApi";

export const useLineOfBusiness = (enabled = false) => useQuery({
    queryKey: ["line-of-business"],
    queryFn: fetchLineOfBusiness,
    enabled, 
})
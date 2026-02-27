import { useQuery } from "@tanstack/react-query";
import { fetchLineOfBusiness } from "../api/lookupApi";

export const useLineOfBusiness = (company, enabled = false) => useQuery({
    queryKey: ["line-of-business", company],
    queryFn: () => fetchLineOfBusiness(company),
    enabled: enabled && !!company, 
})
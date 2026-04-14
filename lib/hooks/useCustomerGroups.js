import { useQuery } from "@tanstack/react-query";
import { fetchCustomerGroups } from "@/lib/api/lookupApi";

export const useCustomerGroups = (company, enabled = false) =>
  useQuery({
    queryKey: ["cust-groups", company],
    queryFn: async () => (await fetchCustomerGroups(company)) ?? [],
    enabled: enabled && !!company,
  });

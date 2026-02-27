import { useQuery } from "@tanstack/react-query";
import { fetchPaymentTerms } from "@/lib/api/lookupApi";

export const usePaymentTerms = (company, enabled = false) =>
  useQuery({
    queryKey: ["payment-terms", company],
    queryFn: () =>  fetchPaymentTerms(company),
    enabled:  enabled && !!company, 
  });
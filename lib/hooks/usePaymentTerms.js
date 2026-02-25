import { useQuery } from "@tanstack/react-query";
import { fetchPaymentTerms } from "@/lib/api/lookupApi";

export const usePaymentTerms = (enabled = false) =>
  useQuery({
    queryKey: ["payment-terms"],
    queryFn: fetchPaymentTerms,
    enabled, 
  });
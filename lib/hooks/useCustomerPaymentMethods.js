import { useQuery } from "@tanstack/react-query";
import { fetchCustomerPaymentMethods } from "../api/lookupApi";

export const useCustomerPaymentMethods = (company, enabled = false) => useQuery({
    queryKey: ["customer-payment-methods", company],
    queryFn: () => fetchCustomerPaymentMethods(company),
    enabled : enabled && !!company,
})


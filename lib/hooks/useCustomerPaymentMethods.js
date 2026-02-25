import { useQuery } from "@tanstack/react-query";
import { fetchCustomerPaymentMethods } from "../api/lookupApi";

export const useCustomerPaymentMethods = (enabled = false) => useQuery({
    queryKey: ["customer-payment-methods"],
    queryFn: fetchCustomerPaymentMethods,
    enabled 
})


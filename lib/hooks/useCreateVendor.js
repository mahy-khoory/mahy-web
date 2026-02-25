import { useMutation } from "@tanstack/react-query";
import { createVendor } from "../api/vendor.api";


export const useCreateVendor = () => {
  return useMutation({
    mutationFn: createVendor,
  });
};
import { useMutation } from "@tanstack/react-query";
import { createServiceRequest } from "../api/serviceRequest.api";

export const useCreateServiceRequest = () => {
  return useMutation({
    mutationFn: createServiceRequest,
  });
};

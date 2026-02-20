import { useMutation } from "@tanstack/react-query";
import { createSiteVisit } from "../api/siteVisit.api";

export const useCreateSiteVisit = () => {
  return useMutation({
    mutationFn: createSiteVisit,
  });
};

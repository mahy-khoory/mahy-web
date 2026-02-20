import api from "./axiosService";

export const createServiceRequest = async (payload) => {
  const baseURL =  process.env.NEXT_PUBLIC_BASE_URL
  const response = await api.post(
    `${baseURL}api/forms/service-request`,
    payload
  );
  return response.data;
};

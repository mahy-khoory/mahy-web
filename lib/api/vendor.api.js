
import api from "./axiosService";

export const createVendor = async (formData) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await api.post(
    `${baseURL}api/vend/create`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
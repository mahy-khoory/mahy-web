import api from "./axiosService";

export const createSiteVisit = async (formData) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  // console.log(baseURL);
  
  const response = await api.post(
    `${baseURL}api/forms/site-visit`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

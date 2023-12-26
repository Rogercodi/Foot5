import axios from "axios";

export const useStrapi = async (method: string, url: string, body: Object) => {
  const strapi = await axios({
    method,
    data: body,
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: "http://localhost:1337,",
    url,
  });
  return strapi;
};

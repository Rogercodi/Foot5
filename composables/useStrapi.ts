import axios from "axios";

export const fetchApi = async (method: string, url: string, body?: Object) => {  
  const fetch = await axios({
    url: url,
    data: body,
  })
  console.log('fetch', fetch)
  return fetch;
};

import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
// const baseUrl = "https://bayut.p.rapidapi.com/auto-complete";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "ed11255d8amsh3aea5db7fda7328p1494c4jsna4bedc72750c",
    },
  });

  return data;
};

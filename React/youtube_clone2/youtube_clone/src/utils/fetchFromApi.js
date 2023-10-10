import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
    // origin: "localhost:3000",
  },
  headers: {
    "X-RapidAPI-Key": "094c74b507msh5742948fe2a0696p13c3efjsnc600d011e5c8",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// /baseUrl/get

export const fetchFromApi = async (url) => {
  // console.log(process.env.REACT_APP_RAPID_API_KEY);
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

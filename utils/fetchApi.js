import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '2cfe1bd86cmshc9ba96bd1ce9d3bp173364jsn281d2cec4288'
    },
  });
    
  return data;
}
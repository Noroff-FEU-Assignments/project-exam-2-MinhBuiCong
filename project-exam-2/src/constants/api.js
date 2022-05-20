import axios from "axios";
const KEY = process.env.REACT_APP_API_KEY;
export const url = "https://gentle-plateau-64010.herokuapp.com";
export const BASE_URL = url;

export const getHotels = async () => {
  const response = await axios.get(`${BASE_URL}/api/hotels`).catch((error) => {
    console.log(error);
  });

  return response.data;
};

export const headers = {
  "Content-Type": "application/json",
  key: KEY,
};
export const PATCH = "PATCH";
export const DELETE = "DELETE";

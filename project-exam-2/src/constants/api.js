import axios from "axios";
const KEY = process.env.REACT_APP_API_KEY;
export const url = "https://gentle-plateau-64010.herokuapp.com";
export const BASE_URL = url;

export const getHotels = async (setHotels) => {
  await axios
    .get(`${BASE_URL}/api/hotels`)
    .then((res) => {
      setHotels(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const headers = {
  "Content-Type": "application/json",
  key: KEY,
};
export const PATCH = "PATCH";
export const DELETE = "DELETE";

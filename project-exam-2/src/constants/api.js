import axios from "axios";
import { getToken } from "../components/auth/storage";
export const url = "https://gentle-plateau-64010.herokuapp.com";
export const BASE_URL = url;

export const getHotels = async () => {
  const response = await axios
    .get(`${BASE_URL}/api/hotels?populate=*`)
    .catch((error) => {
      console.log(error);
    });

  return response.data;
};

export const addHotel = async (body) => {
  const response = await axios
    .post(`${BASE_URL}/api/hotels`, body, options)
    .catch((error) => {
      console.log(error);
    });
  console.log(response.data);
  return response.data;
};

const options = {
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
};

export const getContact = async () => {
  const response = await axios
    .get(`${BASE_URL}/api/contacts`, options)
    .catch((error) => {
      console.log(error);
    });

  return response.data;
};
export const deleteContact = (id, cb) => {
  axios
    .delete(`${BASE_URL}/api/contacts/${id}`, options)
    .then(cb)
    .catch((error) => {
      console.log(error);
    });
};
export const postContact = async (body) => {
  const response = await axios
    .post(`${BASE_URL}/api/contacts`, body)
    .catch((error) => {
      console.log(error);
    });

  return response.data;
};
export const postEnquiry = async (body) => {
  const response = await axios
    .post(`${BASE_URL}/api/enquiries`, body)
    .catch((error) => {
      console.log(error);
    });

  return response.data;
};

export const deleteEnquiry = (id, cb) => {
  axios
    .delete(`${BASE_URL}/api/enquiries/${id}`, options)
    .then(cb)
    .catch((error) => {
      console.log(error);
    });
};

export const getEnquiry = async () => {
  const response = await axios
    .get(`${BASE_URL}/api/enquiries`, options)
    .catch((error) => {
      console.log(error);
    });

  return response.data;
};

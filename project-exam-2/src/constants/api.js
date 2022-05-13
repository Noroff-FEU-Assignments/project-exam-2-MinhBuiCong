// export const API =
//   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const KEY = process.env.REACT_APP_API_KEY;
const url = "https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/";
const proxy = "https://hidden-temple-21187.herokuapp.com/";
export const BASE_URL = proxy + url;

export const headers = {
  "Content-Type": "application/json",
  key: KEY,
};
export const PATCH = "PATCH";
export const DELETE = "DELETE";

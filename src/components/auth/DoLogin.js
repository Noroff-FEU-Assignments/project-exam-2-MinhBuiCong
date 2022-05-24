import { BASE_URL } from "../../constants/api.js";
import { saveToken, saveUser } from "./storage.js";

async function DoLogin(username, password) {
  const url = `${BASE_URL}/api/auth/local`;

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);

      return true;
    }

    if (json.error) {
      return false;
    }
  } catch (error) {
    console.log(`error`, error);
    return false;
  }
}

export default DoLogin;

import axios from "axios";

export const kenzieHubApi = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
});

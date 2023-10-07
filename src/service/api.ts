import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v2/",
});

export { api };

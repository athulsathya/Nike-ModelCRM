import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;   //importing from .env

console.log(url, "baseURL");

const axiosinstance = axios.create({
  baseURL: url,      //as base url set up backend url 
  withCredentials: true,   //for accepting cookies
});

export { axiosinstance };

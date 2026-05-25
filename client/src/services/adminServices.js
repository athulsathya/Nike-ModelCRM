import { axiosinstance } from "../axios/axiosinstance";



export const verifyUser = () => {
  return axiosinstance.get("/auth/check");
};
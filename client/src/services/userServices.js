import { axiosinstance } from "../axios/axiosinstance";

export const listProducts = () => {
  return axiosinstance.get("/product/listproduct");
};

export const userSignUp = (data) => {
  return axiosinstance.post("/user/register", data);
};

export const userLogin = (data) => {
  return axiosinstance.post("/user/login", data);
};

export const userLogOut = () => {
  return axiosinstance.post("/user/logout");
};

export const addToCart = (productId) => {
  return axiosinstance.post(`/cart/addtocart/${productId}`);
};

export const getCartItem = () => {
  return axiosinstance.get(`/cart/getcart`);
};

export const removeCartItem = (productId) => {
  return axiosinstance.delete(`/cart/removefromcart/${productId}`);
};

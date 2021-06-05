import axios from "axios";
import { host } from "./api";

const topicUrl = `${host}api/v1/product/`;

const Get = async () => await axios.get(`${topicUrl}`);
const GetNew = async () => await axios.get(`${topicUrl}/whatsnew/products`);

export const fetchProducts = () => async (dispatch) => {
  try {
    const products = await Get();
    dispatch({ type: "FETCH_ALL_PRODUCTS", payload: products.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchNewProducts = () => async (dispatch) => {
  try {
    // const whatsNew = await GetNew();
    // dispatch({ type: "FETCH_ALL_WHATSNEW", payload: whatsNew.data.whatsNew });
    dispatch({ type: "FETCH_ALL_WHATSNEW" });
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchBestSeller = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_ALL_BESTSELLER" });
  } catch (error) {
    console.log(error.message);
  }
};
export const createProductsList = () => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_PRODUCTLIST" });
  } catch (error) {
    console.log(error.message);
  }
};
export const createCategoryList = () => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_CATEGORYLIST" });
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchSales = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_ALL_SALES" });
  } catch (error) {
    console.log(error.message);
  }
};

import axios from "axios";
import { host } from "./api";

const testinomialUrl = `${host}api/v1/testinomials`;
const Get = async () => await axios.get(`${testinomialUrl}`);

export const fetchTestinomial = () => async (dispatch) => {
  try {
    const response = await Get();
    dispatch({ type: "FETCH_ALL_TESTINOMIAL", payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};

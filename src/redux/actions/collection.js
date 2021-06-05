import axios from "axios";
import {host} from "./api"

const topicUrl = `${host}api/v1/collection/`;

const Get = async () => await axios.get(`${topicUrl}`);


export const fetchCollections = () => async (dispatch) => {
  try {
    const collections = await Get();
    dispatch({ type: "FETCH_ALL_COLLECTION", payload: collections.data });
  } catch (error) {
    console.log(error.message)
  }
};
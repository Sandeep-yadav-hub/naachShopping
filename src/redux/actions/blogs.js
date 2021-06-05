import axios from "axios";
import { host } from "./api";

const topicUrl = `${host}api/v1/blogs/`;

const Get = async () => await axios.get(`${topicUrl}`);

export const fetchCollections = () => async (dispatch) => {
  try {
    const blogs = await Get();
    dispatch({ type: "FETCH_ALL_BLOGS", payload: blogs.data });
  } catch (error) {
    console.log(error.message)
  }
}
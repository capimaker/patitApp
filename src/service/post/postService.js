const API_URL = "http://localhost:8080/post";
import axios from "axios";

const getAllPost = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const postService = {
  getAllPost,
};

export default postService;

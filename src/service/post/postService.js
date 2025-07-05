const API_URL = "http://localhost:8080/post";
import axios from "axios";

const getAllPost = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const likePost = async (postId, token) => {
  const res = await axios.post(
    `${API_URL}/id/${postId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data.post;
};

const postService = {
  getAllPost,
  likePost,
};

export default postService;

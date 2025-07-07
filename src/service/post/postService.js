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

const getPostByTitle = async (postTitle) => {
  const res = await axios.get(`${API_URL}/title/${postTitle}`);
  return res.data;
};

const postService = {
  getAllPost,
  likePost,
  getPostByTitle,
};

export default postService;

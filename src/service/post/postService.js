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

const createPost = async (formData) => {
  let token = localStorage.getItem("token");
  if (token?.startsWith('"') && token?.endsWith('"')) {
    token = token.slice(1, -1);
  }
  if (!token) throw new Error("No token found");
  const res = await axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

const postService = {
  getAllPost,
  likePost,
  getPostByTitle,
  createPost,
};

export default postService;

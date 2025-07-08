import axios from "axios";
const API_URL = "http://localhost:8080/comment";

const updateComment = async (commentId, updatedComment) => {
  let token = localStorage.getItem("token");
  if (token?.startsWith('"') && token?.endsWith('"')) {
    token = token.slice(1, -1);
  }
  if (!token) throw new Error("No token found");
  const res = await axios.put(`${API_URL}/id/${commentId}`, updatedComment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

const commentService = {
  updateComment,
};

export default commentService;

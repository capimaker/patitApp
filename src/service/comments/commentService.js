import axios from "axios";
const API_URL = "http://localhost:8080/comment";

const updateComment = async (commentId, updatedComment, token) => {
  console.log("Token para actualizar:", token);
  console.log("ID del comentario:", commentId);
  console.log("Datos a enviar:", updatedComment);
  console.log("Token:", token);
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

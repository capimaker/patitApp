import React, { useState } from "react";
import { useDispatch } from "react-redux";

const CreateComment = (postId) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch;

  const handleCreate = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await dispatch(createComment({ postId, text: text.trim(), token }));
      setText("");
    } catch (error) {}
  };

  return <div>CreateComment</div>;
};

export default CreateComment;

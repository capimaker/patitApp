import { useEffect } from "react";
import Post from "./Post/Post";
import { getAllPost } from "../../service/post/postSlice";
import { useDispatch } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <Post />
    </>
  );
};

export default Posts;

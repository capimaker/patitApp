import { useDispatch, useSelector } from "react-redux";
import { Avatar, Card } from "antd";
import { CommentOutlined, HeartOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { getAllPost } from "../../../service/post/postSlice";
const { Meta } = Card;
import "./Post.css";
import Carrusel from "../../Elements/Carrusel/Carrusel";

const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  //   const {user } = useSelector((state)=> state.users)
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  return (
    <div className="post-card">
      {posts.map((post) => (
        <Card
          className="individual-card"
          key={post._id}
          cover={<Carrusel images={post.image} />}
          actions={[<HeartOutlined key="like" />, <CommentOutlined key="comment" />]}
        >
          <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title={post.title}
            description={post.body}
          />
        </Card>
      ))}
    </div>
  );
};

export default Post;

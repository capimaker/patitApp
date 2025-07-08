import { useDispatch, useSelector } from "react-redux";
import { Avatar, Badge, Card } from "antd";
import { HeartTwoTone, MessageTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getAllPost, likePost } from "../../../service/post/postSlice";
const { Meta } = Card;
import "./Post.css";
import Carrusel from "../../Elements/Carrusel/Carrusel";
import CommentsModal from "../../Elements/CommentsModal/CommentsModal";

const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const backendUrl = "http://localhost:8080/uploads";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  const handleOpenComments = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <div className="post-card">
      {posts.map((post) => (
        <Card
          className="individual-card"
          key={post._id}
          cover={
            <Carrusel
              images={(Array.isArray(post.image) ? post.image : post.image ? [post.image] : []).map(
                (img) => (img.startsWith("http") ? img : `${backendUrl}/${img}`)
              )}
            />
          }
          actions={[
            <Badge count={post.likes.length} offset={[6, 0]} size="small" color="orange">
              <HeartTwoTone
                key="like"
                twoToneColor="#d06000"
                onClick={() => dispatch(likePost(post._id))}
              />
            </Badge>,
            <Badge count={post.comments.length} offset={[6, 0]} size="small" color="orange">
              <MessageTwoTone
                key="comment"
                twoToneColor="#d06000"
                onClick={() => {
                  setSelectedPost(post);
                  setIsModalOpen(true);
                }}
              />
            </Badge>,
          ]}
        >
          <Meta
            avatar={<Avatar src={post.user?.image || ""} />}
            title={<span className="meta-title">{post.title}</span>}
            description={<span className="meta-description">{post.body}</span>}
          />
        </Card>
      ))}
      {selectedPost && (
        <CommentsModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          post={selectedPost}
        />
      )}
    </div>
  );
};

export default Post;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, likePost } from "../../service//post/postSlice";
import { Card, Avatar, Badge } from "antd";
import { HeartTwoTone, MessageTwoTone } from "@ant-design/icons";
import Carrusel from "../Elements/Carrusel/Carrusel";
import CommentsModal from "../Elements/CommentsModal/CommentsModal";
import "./Profile.css";
const { Meta } = Card;

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts.posts);

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  
  const myPosts = posts.filter((p) => p.user?._id === user?._id);

  const handleLike = (postId) => {
    
    dispatch(likePost(postId));
  };

  const openComments = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <div className="profile-container">
     
      <div className="profile-header">
        <img
          src={user.image || ""}
          alt={user.name}
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      <h3 className="profile-posts-title">Mis publicaciones</h3>

      {myPosts.length === 0 ? (
        <p className="no-posts">No tienes publicaciones aún.</p>
      ) : (
        <div className="profile-grid">
          {myPosts.map((post) => (
            <Card
              key={post._id}
              className="individual-card"
              cover={<Carrusel images={post.image} />}
              actions={[
                <Badge
                  count={post.likes.length}
                  offset={[6, 0]}
                  size="small"
                  color="orange"
                >
                  <HeartTwoTone
                    key="like"
                    twoToneColor="#d06000"
                    onClick={() => handleLike(post._id)}
                  />
                </Badge>,
                <Badge
                  count={post.comments.length}
                  offset={[6, 0]}
                  size="small"
                  color="orange"
                >
                  <MessageTwoTone
                    key="comment"
                    twoToneColor="#d06000"
                    onClick={() => openComments(post)}
                  />
                </Badge>,
              ]}
            >
              <Meta
                avatar={<Avatar src={post.user.image} />}
                title={post.title}
                description={post.body}
              />
            </Card>
          ))}
        </div>
      )}
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

export default Profile;

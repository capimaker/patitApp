import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getAllPost, likePost } from "../../service/post/postSlice";
import { toggleFollow, fetchLoggedUser } from "../../service/followers/followSlice";
import { Card, Avatar, Badge, Button, Modal, List } from "antd";
import { HeartTwoTone, MessageTwoTone } from "@ant-design/icons";
import Carrusel from "../Elements/Carrusel/Carrusel";
import CommentsModal from "../Comments/CommentsModal/CommentsModal";
import "./Profile.css";

const { Meta } = Card;

const Profile = () => {
  const { id, name } = useParams();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.user);

  const { user: me, isLoading: followLoading } = useSelector((state) => state.follow);

  const posts = useSelector((state) => state.posts.posts);

  const [profileUser, setProfileUser] = useState(auth);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isFollowersModalOpen, setFollowersModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllPost());
    dispatch(fetchLoggedUser());
  }, [dispatch]);

  useEffect(() => {
    if (id && id !== auth._id) {
      fetch(`http://localhost:8080/user/id/${id}`)
        .then((res) => res.json())
        .then((u) => setProfileUser(u))
        .catch(console.error);
    } else if (name) {
      fetch(`http://localhost:8080/user/name/${encodeURIComponent(name)}`)
        .then((res) => res.json())
        .then((arr) => setProfileUser(arr[0] || null))
        .catch(console.error);
    } else {
      setProfileUser(auth);
    }
  }, [id, name, auth]);

  if (!profileUser) {
    return <p className="no-posts">Usuario no encontrado.</p>;
  }

  const myPosts = posts.filter((p) => p.user?._id === profileUser._id);

  const isFollowing = me?.following?.includes(profileUser._id);

  const handleFollow = () => {
    dispatch(toggleFollow(profileUser._id))
      .unwrap()
      .then(() => {
        fetch(`http://localhost:8080/user/id/${profileUser._id}`)
          .then((res) => res.json())
          .then((u) => setProfileUser(u))
          .catch(console.error);
      })
      .catch(console.error);
  };

  const handleLike = (postId) => dispatch(likePost(postId));
  const openComments = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        {/* Avatar clicable pero no hace nada de moemento*/}
        <Link to={`/profile/id/${profileUser._id}`}>
          <img
            src={profileUser.image || "/default-avatar.png"}
            alt={profileUser.name}
            className="profile-avatar"
          />
        </Link>
        <div className="profile-info">
          <h2>{profileUser.name}</h2>
          <p>{profileUser.email}</p>

          {auth && profileUser._id !== auth._id && (
            <button
              className={`follow-button ${isFollowing ? "following" : ""}`}
              onClick={handleFollow}
              disabled={followLoading}
            >
              {isFollowing ? "Siguiendo" : "Seguir"}
            </button>
          )}

          {/* Estadísticas */}
          <div className="follow-stats">
            <Button type="link" onClick={() => setFollowersModalOpen(true)}>
              {profileUser.followers?.length ?? 0} seguidores
            </Button>
            <span>{profileUser.following?.length ?? 0} siguiendo</span>
          </div>
        </div>
      </div>

      {/* Modal de seguidores */}
      <Modal
        title={`Seguidores de ${profileUser.name}`}
        open={isFollowersModalOpen}
        onCancel={() => setFollowersModalOpen(false)}
        footer={null}
      >
        {profileUser.followers?.length === 0 ? (
          <p>No tienes seguidores aún.</p>
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={profileUser.followers}
            renderItem={(f) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={f.image || "/default-avatar.png"} />}
                  title={<Link to={`/profile/id/${f._id}`}>{f.name}</Link>}
                />
              </List.Item>
            )}
          />
        )}
      </Modal>

      <h3 className="profile-posts-title">Publicaciones de {profileUser.name}</h3>

      {/* Lista de posts */}
      {myPosts.length === 0 ? (
        <p className="no-posts">No hay publicaciones.</p>
      ) : (
        <div className="profile-grid">
          {myPosts.map((post) => (
            <Card
              key={post._id}
              className="individual-card"
              cover={
                <Carrusel
                  images={(Array.isArray(post.image)
                    ? post.image
                    : post.image
                    ? [post.image]
                    : []
                  ).map((img) =>
                    img.startsWith("http") ? img : `http://localhost:8080/uploads/${img}`
                  )}
                />
              }
              actions={[
                <Badge count={post.likes.length} offset={[6, 0]} size="small" color="orange">
                  <HeartTwoTone
                    key="like"
                    twoToneColor="#d06000"
                    onClick={() => handleLike(post._id)}
                  />
                </Badge>,
                <Badge count={post.comments.length} offset={[6, 0]} size="small" color="orange">
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

      {/* Modal de comentarios */}
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

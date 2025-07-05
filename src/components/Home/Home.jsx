import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { FaPaw } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [redirected, setRedirected] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const timeout = setTimeout(() => {
  //     if (token) {
  //       navigate("/post");
  //     } else {
  //       navigate("/login");
  //     }
  //     setRedirected(true);
  //   }, 100);
  //   return () => clearTimeout(timeout);
  // }, [navigate]);

  return (
    <>
      <Header />
      {!redirected && (
        <div className="home-container">
          <div className="welcome-header">
            <FaPaw className="paw-icon" />
            <h2>Bienvenido/a a Patitas Conectadas</h2>
          </div>

          <div className="post-box">
            <textarea
              placeholder="¿Qué hay en tu mente?"
              className="post-input"
              rows={3}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
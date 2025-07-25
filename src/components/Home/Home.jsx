import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { FaPaw } from "react-icons/fa";
import "./Home.css";
import Post from "../Posts/Post/Post";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <div className="home-container">
        <div className="welcome-header">
          <FaPaw className="paw-icon" />
          <h2>Bienvenido/a a Patitas Conectadas</h2>
        </div>
        <div>
          <Post />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;

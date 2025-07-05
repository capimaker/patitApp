import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoSearchOutline, IoLogOutOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaPaw } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* NAVBAR DESKTOP */}
      <nav className="header desktop-navbar">
        <Link to="/home" className="nav-icon"><AiOutlineHome /></Link>
        <Link to="/search" className="nav-icon"><IoSearchOutline /></Link>
        <span onClick={handleLogout} className="nav-icon"><IoLogOutOutline /></span>
        <Link to="/create" className="nav-icon"><FaPlus /></Link>
        <Link to="/profile" className="nav-icon"><FaPaw /></Link>
      </nav>

      {/* NAVBAR MOBILE */}
      <nav className="header mobile-navbar">
        <Link to="/home" className="nav-icon"><AiOutlineHome /></Link>
        <Link to="/search" className="nav-icon"><IoSearchOutline /></Link>
        <Link to="/create" className="nav-icon"><FaPlus /></Link>
        <Link to="/profile" className="nav-icon"><FaPaw /></Link>
        <span onClick={handleLogout} className="nav-icon"><IoLogOutOutline /></span>
      </nav>
    </>
  );
};

export default Header;
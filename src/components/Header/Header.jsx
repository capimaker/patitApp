import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/userSlice";
import "./Header.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { FiLogOut, FiPlus, FiSearch } from "react-icons/fi";
import { FaPaw } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/home">
            <AiOutlineHome className="nav-icon" />
          </Link>

          <div className="desktop-only">
            <Link to="/search">
              <IoSearchOutline className="nav-icon" />
            </Link>
          </div>

          <Link to="/logout" onClick={handleLogout}>
            <FiLogOut className="nav-icon" />
          </Link>

          <div className="desktop-only">
            <Link to="/add">
              <FiPlus className="nav-icon" />
            </Link>
          </div>

          <div className="desktop-only">
            <Link to="/add">
              <FaPaw className="nav-icon" />
            </Link>
          </div>
        </div>
      </nav>

      <div className="mobile-footer">
        <Link to="/search">
          <FiSearch className="nav-icon" />
        </Link>
        <Link to="/add">
          <FiPlus className="nav-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

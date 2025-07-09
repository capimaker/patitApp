import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoSearchOutline, IoLogOutOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { logout } from "../../service/authSlice";
import { Mybutton } from "../Elements/Button/Button";
import { FaPaw } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {/* NAVBAR DESKTOP */}
      <nav className="header desktop-navbar">
        <div className="nav-content">
          <Link to="/home" className="nav-icon">
            <AiOutlineHome />
          </Link>
          <Link to="/search" className="nav-icon">
            <IoSearchOutline />
          </Link>
          <Link to="/posts/newpost" className="nav-icon">
            <FaPlus />
          </Link>
          <Link to="/profile" className="nav-icon">
            <FaPaw />
          </Link>
          <span onClick={onLogout} className="nav-icon">
            <IoLogOutOutline />
          </span>
        </div>
      </nav>

      {/* NAVBAR MOBILE */}
      <nav className="header mobile-navbar">
        <div className="nav-content">
          <Link to="/home" className="nav-icon">
            <AiOutlineHome />
          </Link>
          <Link to="/search" className="nav-icon">
            <IoSearchOutline />
          </Link>
          <Link to="/posts/newpost" className="nav-icon">
            <FaPlus />
          </Link>
          <Link to="/profile" className="nav-icon">
            <FaPaw />
          </Link>
          <span onClick={onLogout} className="nav-icon">
            <IoLogOutOutline />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;

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
  const {user} = useSelector ((state) => state.auth);
  // const token = localStorage.getItem("token");     //comentar para poder trabajar en Home

    const onLogout = (e) =>{
        e.preventDefault();
        dispatch(logout());
        navigate("/");
  };

  return (
    <>
      <div className = "header-top">
         {user ? (
            <>
            {/* //      <Mybutton onClick={onLogout}>Cerrar Sesión</Mybutton> */}
            {/* //      <span><Link to="/profile">{user.name}</Link></span> */}
                  </>
               ):(
                <>
                <span><Link to="/login"> Iniciar Sesión</Link></span>
                <span><Link to="/register">Registrate</Link></span>
                </>
                )}
        </div>

      {/* NAVBAR DESKTOP */}
      <nav className="header desktop-navbar">
        <Link to="/home" className="nav-icon"><AiOutlineHome /></Link>
        <Link to="/search" className="nav-icon"><IoSearchOutline /></Link>
        <Link to="/create" className="nav-icon"><FaPlus /></Link>
        <Link to="/profile" className="nav-icon"><FaPaw /></Link>
        <span onClick={onLogout} className="nav-icon"><IoLogOutOutline /></span>
        {/* {token && (                                               
          <Link to="/profile" className="nav-icon"><FaPaw /></Link>
         )}    */}
                                                                   
        </nav>

      {/* NAVBAR MOBILE */}
      <nav className="header mobile-navbar">
        <Link to="/home" className="nav-icon"><AiOutlineHome /></Link>
        <Link to="/search" className="nav-icon"><IoSearchOutline /></Link>
        <Link to="/create" className="nav-icon"><FaPlus /></Link>
         {/* {token && (                                                    
          <Link to="/profile" className="nav-icon"><FaPaw /></Link>
         )}                                                                 */}
         <Link to="/profile" className="nav-icon"><FaPaw /></Link>
        <span onClick={onLogout}className="nav-icon"><IoLogOutOutline /></span>
      </nav>
    </>
  )
}

export default Header    
 // comentar desde {token && en lineas 45 y 56..... hasta )} para trabajar en home 
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../../service/authSlice";
import { Mybutton } from "../Elements/Button/Button";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector ((state) => state.auth);

    const onLogout = (e) =>{
        e.preventDefault();
        dispatch(logout());
        navigate("/");
    };
    return(
        <nav>
            {user ? (
            <>
                {user.role === 'admin' ? <span><Link to ="/admin">Admin</Link></span>:''}
                 <Mybutton onClick={onLogout}> Cerrar Sesión</Mybutton>
                 <span><Link to="/profile">{user.name}</Link></span>
                 </>
               ):(
                <>
                <span><Link to="/login"> Iniciar Sesión</Link></span>
                <span><Link to="/register">Registrate</Link></span>
                </>
                )}
                
        </nav>
    )
}
export default Header;
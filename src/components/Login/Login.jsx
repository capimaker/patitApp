import React, {useState} from 'react'
import "./Login.css"
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Inputpass } from "./Inputpass"; 
import { Inputemail } from './Inputemail';
import { login } from '../../service/authSlice';
import { Mybutton } from '../Elements/Button/Button';

const Login = () => {
   const [activeTab, setActiveTab] = useState('login');
    const [formData, setFormData] = useState({
        email: "",
        password:""
    });
    const {email,password} = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src="../src/assets/huella.png" alt="Logo" />
      </div>

      <div className="tabs">
        
        <NavLink
          to="/login"
          className={({ isActive }) => isActive ? 'tab active' : 'tab'}
        >
          Iniciar sesión
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) => isActive ? 'tab active' : 'tab'}
        >
          Registrarse
        </NavLink>
      </div>
    

      <form className="login-form" onSubmit={onSubmit}>
        <Inputemail
        className="login-input"
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={onChange}
        />
        <Inputpass
        className="login-input"
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={onChange}
      />
        <Mybutton className="login-button" htmlType="submit">
          Iniciar Sesión
        </Mybutton>
         <p className="forgot">
           ¿Olvidaste la contraseña?
        </p>
        </form>
       </div>
  );
};

export default Login;

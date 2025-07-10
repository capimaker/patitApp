import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Inputpass } from "./Inputpass";
import { Inputemail } from "./Inputemail";
import { login } from "../../service/authSlice";
import { Mybutton } from "../Elements/Button/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/logo_patitas.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

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
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <h3>La red social aprobada por perros...toleada por gatos</h3>
      </div>

      <div className="tabs">
        <NavLink to="/login" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
          <h3>Iniciar sesión</h3>
        </NavLink>
        <NavLink to="/register" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
          <h3>Registrarse</h3>
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
        <p className="forgot"></p>
      </form>
    </div>
  );
};

export default Login;

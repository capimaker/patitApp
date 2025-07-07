import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { register } from "../../service/authSlice";
import { notification } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Inputpass as Inputpass1 } from "./Inputpass";
import { Inputpass as Inputpass2 } from "./Inputpass";
import { Inputemail } from "./Inputemail";
import { Inputname } from "./Inputname";
import "./Register.css";
import huellaLogo from "../../assets/logo_patitas.png";
import { Mybutton } from '../Elements/Button/Button';
import { FaPaw } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    } else {
      dispatch(register(formData));
    }
    console.log("formData", formData);
  };

  return (
    <div className="register-container">
      <img src={huellaLogo} alt="Huella" className="logo-huella" />

      <div className="tabs">
        <NavLink to="/login" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
          <h3>Iniciar sesión</h3>
        </NavLink>
        <NavLink to="/register" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
          <h3>Registrarse</h3>
        </NavLink>
      </div>
      <form onSubmit={onSubmit}>
        <Inputname
          className="name_css"
          type="name"
          name="name"
          value={name}
          placeholder="Name"
          onChange={onChange}
        />
        <Inputemail
          className="email_css"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={onChange}
        />
        <Inputpass1
          className="pass_css"
          name="password"
          value={password}
          placeholder="Password"
          onChange={onChange}
        />

        <Inputpass2
          className="pass2_css"
          name="password2"
          value={password2}
          placeholder="Repeat Password"
          onChange={onChange}
        />
        <Mybutton className="register-button" htmlType="submit">
          Registrarse
        </Mybutton>
      </form>
    </div>
  );
};

export default Register;
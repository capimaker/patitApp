import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../service/AuthSlice";
import { notification } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Inputpass } from "./Inputpass";
import { Inputemail } from "./Inputemail";
import { Inputname } from "./Inputname";


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
    if (password !== password) {
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
      <Inputpass
        className="pass_css"
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={onChange}
      />
         <Inputpass
        className="pass2_css"
        type="password"
        name="password2"
        value={password2}
        placeholder="Repeat Password"
        onChange={onChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

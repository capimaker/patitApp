import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../service/AuthSlice";
//import { Form } from "antd";
import { notification } from "antd";
import '@ant-design/v5-patch-for-react-19';


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
  }


return (
    <div>
  <form onSubmit={onSubmit}>
    <input type="text" name="name" value={name} placeholder="name" onChange={onChange} />
    <input type="email" name="email" value={email} placeholder="email" onChange={onChange} />
    <input
      type="password"
      name="password"
      value={password}
      placeholder = "password"
      onChange={onChange}
    />
    <input
      type="password"
      name="password2"
      value={password2}
      placeholder = "password2"
      onChange={onChange}
    />
    <button type="submit">Register</button>
  </form>
  </div>
)

}
export default Register;

import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { Inputpass } from "./Inputpass"; 
import { Inputemail } from './Inputemail';
import { login } from '../../service/authSlice';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password:""
    });
    const {email,password} = formData;

    const dispatch = useDispatch();

    const onChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
    const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };


  return (

      <form onSubmit={onSubmit}>
        <Inputemail
        className = "login_css"
        type="email"
        name="email"
        value={email}
        placeholder="Name"
        onChange={onChange}
        />
        <Inputpass
        className = "pass"
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={onChange}
      />
        <button type='submit'>Login</button> 
        </form>
       
  );
};

export default Login;
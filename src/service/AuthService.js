 import axios from "axios";

const API_URL = "http://localhost:8080/user";

const register = async (userData) => {
    const res = await axios.post(API_URL, userData);
      return res.data;
};

const login = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  if (res.data) {
    console.log(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", JSON.stringify(res.data.token));
  }
  return res.data;
};

const logout = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.delete(`${API_URL}/logout`,{
    headers:{
      authorization: `Bearer ${token}`,
    },
  });
  if (res.data){
    localStorage.clear();
  }
  return res.data;
}
const authService = {
    login,
    logout,
    register,
};

export default authService;

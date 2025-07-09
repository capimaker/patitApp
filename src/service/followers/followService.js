import axios from "axios";
import followService from "./followService";

const API_URL = "http://localhost:8080/user";

const toggleFollow = async(targetUserId) =>{
    const token = JSON.parse(localStorage.getItem("token"));
     const res = await axios.post(
    `${API_URL}/follow/${targetUserId}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};
{/*const getLoggedUser = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  return res.data.user;
};*/}


export default {
  toggleFollow,
 // getLoggedUser,
  
};

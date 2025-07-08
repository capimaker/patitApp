import axios from "axios";

const API_URL = "http://localhost:8080/user";

const followToggle = async(targetUserId) =>{
    const token = JSON.parse(localStorage.getItem("token"));
     const res = await axios.post(
    `${API_URL}/${targetUserId}/follow`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};
const getFollowers = async (userId) => {
  
  const res = await axios.get(`${API_URL}/${userId}/followers`);
  return res.data; 
};
const getFollowing = async (userId) => {
  
  const res = await axios.get(`${API_URL}/${userId}/following`);
  return res.data; 
};

export default {
  followToggle,
  getFollowers,
  getFollowing,
};

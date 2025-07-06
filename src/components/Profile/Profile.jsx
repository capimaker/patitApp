
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
 const {user} = useSelector ((state) => state.auth);
  return (
    <div>Profile
        <p>{user.name}</p>
        <p>{user.email}</p>
    </div>
  );
}

export default Profile
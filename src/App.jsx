import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts";
import Login from "./components/Login/Login";
import Search from "./components/Search/Search";
import Register from "./components/Register/Register";
import NewPost from "./components/Posts/NewPost/NewPost";
import PrivateZone from "./Guards/PrivateZone";
import AdminZone from "./Guards/AdminZone";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/admin" element={
            <AdminZone>
            <Admin />
            </AdminZone>
            } 
            />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:postTitle" element={<Search />} />
          <Route path="/profile/id/:id" element={<Profile />} />
          <Route path="/profile/name/:name" element={<Profile />} />

          <Route path="/profile" element={
            <PrivateZone>
            <Profile />
            </PrivateZone>
            } />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/newpost" element={<NewPost />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

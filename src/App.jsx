import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import NewPost from "./components/Posts/NewPost/NewPost";
import PrivateZone from "./Guards/PrivateZone";
import AdminZone from "./Guards/AdminZone";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/admin"
            element={
              <AdminZone>
                <Admin />
              </AdminZone>
            }
          />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:postTitle" element={<Search />} />
          <Route path="/profile/id/:id" element={<Profile />} />
          <Route path="/profile/name/:name" element={<Profile />} />

          <Route
            path="/profile"
            element={
              <PrivateZone>
                <Profile />
              </PrivateZone>
            }
          />
          <Route path="/posts/newpost" element={<NewPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

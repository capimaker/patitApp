import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts";
import Login from "./components/Login/Login";
import Search from "./components/Search/Search";
import Register from "./components/Register/Register";
import NewPost from "./components/Posts/NewPost/NewPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:postTitle" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/newpost" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

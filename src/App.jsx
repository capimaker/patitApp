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

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/register" element={<Register/>}/>
         <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:postTitle" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

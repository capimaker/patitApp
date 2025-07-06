import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Posts from "./components/Posts/Posts";
import Login from "./components/Login/Login";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

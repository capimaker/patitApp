import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Header from './components/Header/Header';
import Login from "./components/Login/Login";
import Profile from './components/Profile/Profile';

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Login from "./components/Login/Login";


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
      <Routes>
        
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

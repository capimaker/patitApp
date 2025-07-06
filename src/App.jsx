import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
         <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

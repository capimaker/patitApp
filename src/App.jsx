import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Login from "./components/Login/Login";

function App() {
  return (
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

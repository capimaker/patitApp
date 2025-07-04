import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

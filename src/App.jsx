import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./components/Posts/Post/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

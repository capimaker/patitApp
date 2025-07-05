
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from "./components/Login/Login";
import Profile from './components/Profile/Profile';
import './App.css'


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
      <Routes>
        
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

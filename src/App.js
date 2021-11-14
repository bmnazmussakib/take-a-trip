import logo from './logo.svg';
import './bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  // console.log("This is App JS: ",loggedInUser);
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;

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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SignIn from './Components/SignIn/SignIn';
import PageNotFound from './Components/PageNotFound/PageNotFound';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  // console.log("This is App JS: ",loggedInUser);
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="body">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/destination" element={<Destination />} /> */}
        {/* <Route path="/destination" element={ <PrivateRoute> <DestinationPage /> </PrivateRoute>  } /> */}
        <Route path="/destination/:vehicle" element={ <PrivateRoute> <Destination /> </PrivateRoute>  } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;

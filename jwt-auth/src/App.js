import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import logoimg from "./components/f-logo.jpg"
import AuthService from "./services/auth-service";

import Login from "./components/Login";
import Home from "./components/Home";
import Service from "./Service/Service";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import AdminBoard from "./components/AdminBoard";
import EditAppointment from "./components/EditAppointment"

import Booking from "./components/Booking";
const App = () => {
  
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);

      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      
        <Link to={"/"} className="navbar-brand"> 
         Beauty Salon
          
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/service"} className="nav-link">
              Services
            </Link>
          </li>
          
          {showAdminBoard && (
            <>
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin 
              </Link>
            </li>
            <li className="nav-item">
            <Link to={"/user"} className="nav-link">
              Add Service
            </Link>
            
          </li></>
            
          )} 

          {/* {currentUser && (
            
          )} */}
          </div>
          
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {/* {currentUser.username} */}Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/booking"} className="nav-link">
                Booking
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

          </div>
        )}
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/user" element={<BoardUser/>} />
          <Route path="/admin" element={<AdminBoard/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/editAppointment/:id" element={<EditAppointment/>} />
   
        </Routes>
      </div>
    </div>
  );
};

export default App;
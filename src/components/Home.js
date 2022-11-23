import React, { useState, useEffect } from "react";

import UserService from "../services/user-service";
import img from "./about.jpg";
// import img1 from "./img1.jpg";

import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <>
      <div className="container">
        
        <img src={img} alt="" height="100%" width="100%" /> 
       
        <Footer />
      </div>
    </>
  );
};

export default Home;

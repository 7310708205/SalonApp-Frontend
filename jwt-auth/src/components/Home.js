import React, { useState, useEffect } from "react";

import UserService from "../services/user-service";
import img from "../components/about.jpg";
import img1 from "../components/img1.jpg";
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
      <h3 className="nav">Welcome to our Salon</h3>
      <img src={img} alt="" height={700} width={1000}/>
      <img src={img1} alt="" height={500} width={700}/>
    
    <Footer />
    </div>
    </>
  );
};

export default Home;
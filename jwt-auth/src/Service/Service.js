import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const Service = () => {
  const [users, setUsers] = useState([
    {
      name: "",
      image: "",
      price: "",
    },
  ]);
  useEffect(() => {
    AllUsers();
  }, []);
  const AllUsers = async () => {
    axios
      .get("http://localhost:8080/api/test/image/allimages")
      .then((response) => {
        setUsers(response.data);
        console.log(response);
      });
  };
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {users.map((user, index) => {
        return (
          <div className="col">
            <div className="card">
              <img src={user.image} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>

                <p className="card-text">{user.price}</p>
              </div>
            </div>
          </div>
        );
      })}</div>
    </>
  );
};
export default Service;

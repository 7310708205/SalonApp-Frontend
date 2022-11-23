import "../App.css";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "./img1.jpg";
const Booking = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    address: "",
    service:"",
    city: "",
    date: "",
  });

  const { firstname, lastname, address, service, city, date } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/test/appointment", user);
    alert("Appointment Submitted Successfully");
    navigate("/");
  };
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <section className="h-100 bg-dark">
          <div
            className="container py-5 h-100"
            style={{ backgroundColor: "grey" }}
            
          >
           
            <div className="row d-flex justify-content-center align-items-center h-100">
            
              <div className="col">
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block"></div>
                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        <h4
                          className="mb-5 "
                          style={{
                            fontFamily: "sans-serif",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Book your Appointment
                        </h4>
                     
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                name="firstname"
                                value={firstname}
                                onChange={(e) => onInputChange(e)}
                                id="form3Example1m"
                                class="form-control form-control-lg"
                                placeholder="First name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                name="lastname"
                                value={lastname}
                                onChange={(e) => onInputChange(e)}
                                id="form3Example1n"
                                class="form-control form-control-lg"
                                placeholder="Last name"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => onInputChange(e)}
                            id="form3Example8"
                            className="form-control form-control-lg"
                            placeholder="Address"
                          />
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select
                              className="form-select"
                              name="service"
                              value={service}
                              onChange={(e) => onInputChange(e)}
                            >
                              <option value="Other">Service</option>
                              <option value="Haircut">Hair Cut</option>
                              <option value="Facial">Facial</option>
                              <option value="Massage">Massage</option>
                              <option value="Massage">Makeup</option>
                              <option value="Waxing">Waxing</option>
                              <option value="Menicure">Menicure</option>
                              <option value="Menicure">Shampoo</option>
                            </select>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select
                              className="form-select"
                              name="city"
                              value={city}
                              onChange={(e) => onInputChange(e)}
                            >
                              <option value="Other">City</option>
                              <option value="Dehradun">Dehradun</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Pune">Pune</option>
                              <option value="Pune">Chandigarh</option>
                              <option value="Pune">Shimla</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            //type="date"
                            type="date" min="2022-11-23"
                            name="date"
                            value={date}
                            onChange={(e) => onInputChange(e)}
                            class="form-control form-control-lg"
                            placeholder="Date of Appointment"
                          />
                        </div>

                        <div
                          className="form-outline mb-4"
                          style={{ display: "none" }}
                        >
                          
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="submit"
                            class="btn btn-outline-dark"
                          >
                            Book Now 
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};
export default Booking;

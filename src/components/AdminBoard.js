import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

//import UserService from "../services/user-service";

const AdminBoard = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([
    {
      firstname: "",
      lastname: "",
      address: "",
      service: "",
      city: "",
      date: "",
    },
  ]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    axios.get(`http://localhost:8080/api/test/appointment`).then((response) => {
      setUsers(response.data);
    });
  };

  const deleteUser = async (id) => {
    axios
      .delete(`http://localhost:8080/api/test/appointment/${id}`)
      .then((response) => {
        alert("Appointment Deleted Succesfully");

        setUsers(response.data);

        window.location.reload();

        loadUsers();
      });
  };

  return (
    <div className="admin_container">
      <div className="py-4">
        {/* <table className="table_content table border shadow"> */}
        <table className="table table-bordered table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th> <th scope="col">FirstName</th>
              <th scope="col">LastName</th> <th scope="col">Address</th>
              <th scope="col">Service</th>
              <th scope="col">City</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>{" "}
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.address}</td>
                  <td>{user.service}</td>
                  <td>{user.city}</td>
                  <td>{user.date}</td>

                  <td>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/editAppointment/${user.id}`}
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBoard;

// import React from 'react'
// import { useState,useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const AdminBoard = () => {
//     const {id}=useParams();
//     const [users,setUsers]=useState([
//               {
//                 email : "",
//                 name : "",
//                 issue:"",
//                 city:"",
//                 state:"",
//                 zip:""
//
//               }
//             ]);
//         useEffect(() => {

//             AllUsers();
//
//           }, []);
//
//           const AllUsers = async () => {

// AllUsers();
//
//           }, []);
//
//           const AllUsers = async () => {

//             axios.get('http://localhost:8080/api/test/contact/allcontacts').then((response)=>{
//
//                setUsers(response.data);
//
//                console.log(response);
//
//            })}
//
//            const deleteUser=async(id)=>{
//             await axios.delete(`http://localhost:8080/api/test/contact/${id}`);
//             AllUsers();
//           }
//     return (
//         <div>
//             <div className='container'>

//                 <div className='py-4'>

//                     <table className="table border shadow">

// <thead>

// <tr>

// <th scope="col">ID</th>

// <th scope="col">EMAIL</th>

// <th scope="col">NAME</th>

// <th scope="col">ISSUE</th>

// <th scope="col">CITY</th>

// <th scope="col">STATE</th>

// <th scope="col">ZIP</th>

// <th scope="col">ACTION</th>

// </tr>

// </thead>

// <tbody>
// {users.map((user, index) => {

// return( <tr>

//             <th scope="row" key={index}>{index+1}</th>

//             <td>{user.email}</td>

//             <td>{user.name}</td>

//             <td>{user.issue}</td>

//             <td>{user.city}</td>

//             <td>{user.state}</td>
//             <td>{user.zip}</td>

//             <td>

//     {/* <Link className='btn btn-success mx-2' to={`/viewUser/${user.id}`}>Accept</Link> */}

//     <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>

//   </td>

//  </tr>

//         )})}

// </tbody>

// </table>

//         </div>

//

//     </div>
//
//
//         </div>
//     )
// }

//export default AdminBoard;

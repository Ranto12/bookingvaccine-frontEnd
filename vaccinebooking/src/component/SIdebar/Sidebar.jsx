// import React, { useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'

// //redux
// import { useDispatch, useSelector } from 'react-redux'
// import {handleSidbar} from "./../../redux/ToggleButton/Index"

// //libarary 
// import Swal from 'sweetalert2'
// import "animate.css"

// //assets
// import {icon} from "../../assets/icon";

// //menu
// import {menuItem, menuItemAdmin} from './../../MenuConst/MenuItem';

// const Sidebar = () => {
//     //state dan variables
//     const [isAdmin] = useState(
//         JSON.parse(localStorage.getItem("token")).tipe === "admin"
//     );
//     const navigate = useNavigate();

//     //redux
//     const {toggleSidebar} = useSelector((state)=> state.toggleButton);
//     const dispatch = useDispatch();

//     //swall
//      const Toast = Swal.mixin({
//          toast: true,
//          position: 'top-end',
//          showConfirmButton: false,
//          timer: 3000,
//          timerProgressBar: true,
//          didOpen:(toast)=>{
//              toast.addEventListener("mouseenter", Swal.stopTimer);
//              toast.addEventListener("mouseleave", Swal.resumeTimer);
//          },
//      });


//     //  function
//     const handleSubmit=()=>{
//         Swal.fire({
//             title: "Sign Out",
//             text: "Are you sure want to Sign out?",
//             icon: "warning",
//             iconColor: "#EB5354",
//             showCancelButton: true,
//             confirmButtonText:"Yes",   
//             confirmButtonColor: "#3085b6",
//             cancelButtonColor: "#eb5353",
//             showClass:{
//                 popup: "animate__animated animte__bounceIn",
//             },
//         }).then((result)=>{
//             if(result.isConfirmed){
//                 localStorage.removeItem("token");
//                 navigate("login");
//                 Toast.fire({
//                     icon: "success",
//                     title: "Sign out succesfully",
//                 });
//             }
//         });
//     };

//   return (
//     <div>Sidebar</div>
//   )
// }

// export default Sidebar
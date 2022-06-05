import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import '../../assets/Style/style.css'

// //redux
// import { useDispatch, useSelector } from 'react-redux'
// import {handleSidbar} from "./../../redux/ToggleButton/Index"

// //libarary 
// import Swal from 'sweetalert2'
// import "animate.css"

//assets
import {icon} from "../../assets/icon";
import { BsFillGridFill, BsBook, BsPersonFill, BsPersonBadgeFill, BsFillFileEarmarkTextFill, BsShieldFillCheck, BsDoorClosed } from "react-icons/bs";

// //menu
// import {menuItem, menuItemAdmin} from './../../MenuConst/MenuItem';

const Sidebar = () => {
    // //state dan variables
    // const [isAdmin] = useState(
    //     JSON.parse(localStorage.getItem("token")).tipe === "admin"
    // );
    // const navigate = useNavigate();

    // //redux
    // const {toggleSidebar} = useSelector((state)=> state.toggleButton);
    // const dispatch = useDispatch();

    // //swall
    //  const Toast = Swal.mixin({
    //      toast: true,
    //      position: 'top-end',
    //      showConfirmButton: false,
    //      timer: 3000,
    //      timerProgressBar: true,
    //      didOpen:(toast)=>{
    //          toast.addEventListener("mouseenter", Swal.stopTimer);
    //          toast.addEventListener("mouseleave", Swal.resumeTimer);
    //      },
    //  });


    // //  function
    // const handleSubmit=()=>{
    //     Swal.fire({
    //         title: "Sign Out",
    //         text: "Are you sure want to Sign out?",
    //         icon: "warning",
    //         iconColor: "#EB5354",
    //         showCancelButton: true,
    //         confirmButtonText:"Yes",   
    //         confirmButtonColor: "#3085b6",
    //         cancelButtonColor: "#eb5353",
    //         showClass:{
    //             popup: "animate__animated animte__bounceIn",
    //         },
    //     }).then((result)=>{
    //         if(result.isConfirmed){
    //             localStorage.removeItem("token");
    //             navigate("login");
    //             Toast.fire({
    //                 icon: "success",
    //                 title: "Sign out succesfully",
    //             });
    //         }
    //     });
    // };

  return (
      <section>
          <div className='row'>
              <div className=' '>
                <div className='text-center mt-5 sidebar mx-3  rounded-3 '>
                    <h1 className='pb-5 pt-5 text-muted '>Logo</h1>

                    <div className='  text-center pb-4 ps-4 hover-bg-secondary ' >
                           <Link className='text-decoration-none d-flex menu-sidebar  me-4 py-2' to="/">
                               <div className='text-muted pt-1 ps-4 ' >
                                    < BsFillGridFill/> 
                               </div>
                                <div className=' ps-4 text-muted  fs-5'>
                                    Dashboard
                               </div>
                           </Link>
                    </div>

                    <div className='  text-center pb-4 ps-4 hover-bg-secondary ' >
                           <Link className='text-decoration-none d-flex menu-sidebar  me-4 py-2' to="/">
                               <div className='text-muted pt-1 ps-4 ' >
                                    < BsBook/> 
                               </div>
                                <div className=' ps-4 text-muted  fs-5'>
                                Data booking
                               </div>
                           </Link>
                    </div>

                    <div className='  text-center pb-4 ps-4 hover-bg-secondary ' >
                           <Link className='text-decoration-none d-flex menu-sidebar  me-4 py-2' to="/">
                               <div className='text-muted pt-1 ps-4 ' >
                                    < BsPersonFill/> 
                               </div>
                                <div className=' ps-4 text-muted  fs-5'>
                                Dashboard
                               </div>
                           </Link>
                    </div>

                    <div className='  text-center pb-4 ps-4 hover-bg-secondary ' >
                           <Link className='text-decoration-none d-flex menu-sidebar  me-4 py-2' to="/">
                               <div className='text-muted pt-1 ps-4 ' >
                                    < BsFillFileEarmarkTextFill/> 
                               </div>
                                <div className=' ps-4 text-muted  fs-5'>
                                Kelola Berita
                               </div>
                           </Link>
                    </div>

                    <div className='  text-center pb-4 ps-4 hover-bg-secondary ' >
                           <Link className='text-decoration-none d-flex menu-sidebar  me-4 py-2' to="/">
                               <div className='text-muted pt-1 ps-4 ' >
                                    < BsPersonBadgeFill/> 
                               </div>
                                <div className=' ps-4 text-muted  fs-5'>
                                Kelola Pengguna
                               </div>
                           </Link>
                    </div>

                    <div className='  text-center pb-4 ps-4 hover-bg-secondary ' >
                           <Link className='text-decoration-none d-flex menu-sidebar  me-4 py-2' to="/">
                               <div className='text-muted pt-1 ps-4 ' >
                                    < BsShieldFillCheck/> 
                               </div>
                                <div className=' ps-4 text-muted  fs-5'>
                                Kelola Admin
                               </div>
                           </Link>
                    </div>

                    <div className='  text-center pb-4 ps-4 hover-bg-secondary pt-5 ' >
                           <Link className='text-decoration-none d-flex menu-sidebar  me-4 py-2' to="/">
                               <div className='text-muted pt-1 ps-4 ' >
                                    < BsDoorClosed/> 
                               </div>
                                <div className=' ps-4 text-muted  fs-5'>
                                Keluar
                               </div>
                           </Link>
                    </div>

                </div>


            </div>
            {/* <div className='col-5'>
                <div>
                    <h1>logo</h1>
                    
                </div>
            </div>
            <div className='col-4'>
                <div>
                    <h1>logo</h1>
                    
                </div>
            </div> */}
          </div>

      </section>
  )
}

export default Sidebar
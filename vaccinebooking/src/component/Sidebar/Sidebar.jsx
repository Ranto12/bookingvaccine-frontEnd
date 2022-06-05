import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import '../../assets/Style/style.css'

//assets
import {icon} from "../../assets/icon";
import { BsFillGridFill, BsBook, BsPersonFill, BsPersonBadgeFill, BsFillFileEarmarkTextFill, BsShieldFillCheck, BsDoorClosed } from "react-icons/bs";

const Sidebar = () => {
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
                           <Link className='text-decoration-none d-flex menu-sidebar  me-4 py-2' to="/KelolaBerita">
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
          </div>

      </section>
  )
}

export default Sidebar

// ok
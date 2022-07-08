import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/Style/style.css";

//assets
import {
  BsFillGridFill,
  BsBook,
  BsPersonFill,
  BsPersonBadgeFill,
  BsFillFileEarmarkTextFill,
  BsShieldFillCheck,
  BsDoorClosed,
} from "react-icons/bs";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
}

const Sidebar = () => {
  return (
    <section>
      <div className="row">
        <div className=" ">
          <div className="text-center mt-5 sidebar mx-3  rounded-3 ">
            <h1 className="pb-5 pt-5 text-light ">Logo</h1>

            <div className="  text-center pb-4 ps-4 hover-bg-secondary ">
              <Link
                className="text-decoration-none   d-flex menu-sidebar  me-4 py-2"
                to="/Dashboard"
              >
                <div className="row  row-cols-sm-1 row-cols-md-2 ">
                  <div className="col-3 text-light ps-4 icon-dasboard ">
                    <BsFillGridFill />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-bold pt-3 pt-2">Dashboard</div>
                </div>
              </Link>
            </div>

            <div className="  text-center pb-4 ps-4 hover-bg-secondary ">
              <Link
                className="text-decoration-none   d-flex menu-sidebar  me-4 py-2"
                to="/DataBooking"
              >
                <div className="row  row-cols-sm-1 row-cols-md-2 ">
                  <div className="col-3 text-light ps-4 icon-dasboard ">
                    <BsBook />
                  </div>

                  <div className="col-9 ps-4 text-start  text-light h6 fw-bold pt-3 pt-2">Data booking</div>
                </div>
              </Link>
            </div>

            <div className="  text-center pb-4 ps-4 hover-bg-secondary ">
              <Link
                className="text-decoration-none   d-flex menu-sidebar  me-4 py-2"
                to="/kelolaJadwal"
              >
                <div className="row  row-cols-sm-1 row-cols-md-2 ">
                  <div className="col-3 text-light ps-4 icon-dasboard ">
                    <BsPersonFill />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-bold pt-3 pt-2">Kelola jadwal</div>
                </div>
              </Link>
            </div>

            <div className="  text-center pb-4 ps-4 hover-bg-secondary ">
              <Link
                className="text-decoration-none   d-flex menu-sidebar  me-4 py-2"
                to="/KelolaBerita"
              >
                <div className="row  row-cols-sm-1 row-cols-md-2 ">
                  <div className="col-3 text-light ps-4 icon-dasboard ">
                    <BsFillFileEarmarkTextFill />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-bold pt-3 pt-2">Kelola Berita</div>
                </div>
              </Link>
            </div>

            <div className="  text-center pb-4 ps-4 hover-bg-secondary ">
              <Link
                className="text-decoration-none   d-flex menu-sidebar  me-4 py-2"
                to="/KelolaPengguna"
              >
                <div className="row  row-cols-sm-1 row-cols-md-2 ">
                  <div className="col-3 text-light ps-4 icon-dasboard ">
                    <BsPersonBadgeFill />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-bold pt-3 pt-2">Kelola Pengguna</div>
                </div>
              </Link>
            </div>

            <div className="  text-center pb-4 ps-4 hover-bg-secondary ">
              <Link
                className="text-decoration-none   d-flex menu-sidebar  me-4 py-2"
                to="/KelolaAdmin"
              >
                <div className="row  row-cols-sm-1 row-cols-md-2 ">
                  <div className="col-3 text-light ps-4 icon-dasboard ">
                    <BsShieldFillCheck />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-bold pt-3 pt-2">Kelola Admin</div>
                </div>
              </Link>
            </div>

            <div className="  text-center pb-4 ps-4 hover-bg-secondary ">
              <Link
                className="text-decoration-none   d-flex menu-sidebar  me-4 py-2"
                to="/"
              >
                <div className="row  row-cols-sm-1 row-cols-md-2 " onClick={handleLogout}>
                  <div className="col-3 text-light ps-4 icon-dasboard ">
                    <BsDoorClosed />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-bold pt-3 pt-2">Keluar</div>
                </div>
              </Link>
            </div>
           


          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

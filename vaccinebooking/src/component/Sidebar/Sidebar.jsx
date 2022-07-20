import { Link, useNavigate } from "react-router-dom";
import "../../assets/Style/style.css";
import logo from '../../assets/img/logo.svg';
import dashboard from '../../assets/img/dashboard.png';
import kelolapengguna from '../../assets/img/kelolapengguna.png';
import kelolajadwal from '../../assets/img/kelolajadwal.png';
import kelolaberita from '../../assets/img/kelolaberita.png';
import databooking from '../../assets/img/databooking.png';
import keluar from '../../assets/img/keluar.png';
import kelolaadmin from '../../assets/img/kelolaadmin.png';

//assets


const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/login");
  }
  return (
    <section className="">
      <div className="row fullHight ">
        <div className=" ">
          <div className="text-center mt-5 sidebar mx-3  rounded-3 ">
            <div className="row align-items-center justify-content-end">
              <div className=" align-items-center p-5" >
                <img src={logo} alt="logo" className="Logo-img"/>
              </div>

            </div>

            <div className="  text-center pb-4 ps-4 hover-bg-secondary ">
              <Link
                className="text-decoration-none   d-flex menu-sidebar  me-4 py-2"
                to="/Dashboard"
              >
                <div className="row  row-cols-sm-1 row-cols-md-2 ">
                  <div className="col-3 text-light ps-4 icon-dasboard ">
                    <img src={dashboard} alt="" />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-500 pt-3 pt-2">Dashboard</div>
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
                    <img src={databooking} alt="" />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-500 pt-3 pt-2">Data booking</div>
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
                    <img src={kelolajadwal} alt="" />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-500 pt-3 pt-2 ">Kelola jadwal</div>
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
                    <img src={kelolaberita} alt="" />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-500 pt-3 pt-2">Kelola Berita</div>
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
                    <img src={kelolapengguna} alt="" />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-500 pt-3 pt-2">Kelola Pengguna</div>
                </div>
              </Link>
            </div>

            {
              localStorage.getItem("role") === "SUPER ADMIN" ? (
                <div className="  text-center pb-4 ps-4 hover-bg-secondary ">
              <Link
                className="text-decoration-none   d-flex menu-sidebar  me-4 py-2"
                to="/KelolaAdmin"
              >
                <div className="row  row-cols-sm-1 row-cols-md-2 ">
                  <div className="col-3 text-light ps-4 icon-dasboard ">
                    <img src={kelolaadmin} alt="" />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-500 pt-3 pt-2">Kelola Admin</div>
                </div>
              </Link>
            </div>
              ):(null)
            }

            <div className="  text-center pb-4 ps-4 hover-bg-secondary align-items-end ">
              <Link
                className="text-decoration-none   d-flex menu-sidebar  me-4 py-2"
                to="/login"
              >
                <div className="row  row-cols-sm-1 row-cols-md-2 " onClick={handleLogout}>
                  <div className="col-3 text-light ps-4 icon-dasboard ">
                   <img src={keluar} alt="" />
                  </div>

                  <div className="col-9 ps-4 text-start text-light h6 fw-500 pt-3 pt-2">Keluar</div>
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

// style
import { BsFillSquareFill } from "react-icons/bs";
import "./../../assets/Style/style.css";
// component
import Sidebar from '../../component/Sidebar/Sidebar';
// length
import {LengthAdmin, LengthPenguna, LengthKecamatan, LengthRSUD, LengthPuskesmas} from '../../component/Dasboard/APIrequired/Length';


const Dashboard = () => {
  return (
    <div>
      <div className="row Fontcolor-Dasboard me-5">
        {/* sidebar */}
        <div className="col-3">
          <Sidebar />
        </div>
        {/* content */}
        <div className="col-9 mt-5">
          <div className="title-das ">
            <h1 className="fz-Head ">Selamat Datang,</h1>
            <h1 className="fz-Title fw-bold">Super Admin</h1>
          </div>

          {/* total admin */}
          <div className="row row-cols-1 row-cols-xl-2 mt-3 ">
            <div className="col">
              <div className="Card-TotalAdmin">
                <div className="">
                  <div className="d-flex align-items-center">
                    <div className="me-4 display-6 ">
                      <BsFillSquareFill />
                    </div>
                    <h3 className=" pt-3">Total Admin</h3>
                  </div>
                  <h1 className="mt-4 display-3 fw-bold ">
                    <LengthAdmin />
                  </h1>
                  <h1 className="pt-3">Pengelola</h1>
                </div>
              </div>
            </div>

            {/* total pengguna */}

            <div className="col">
              <div className="Card-TotalAdmin">
                <div className="">
                  <div className="d-flex align-items-center">
                    <div className="me-4 display-6 ">
                      <BsFillSquareFill />
                    </div>
                    <h3 className=" pt-3">Total pengguna</h3>
                  </div>
                  <h1 className="mt-4 display-3 fw-bold ">
                    <LengthPenguna />
                  </h1>
                  <h1 className="pt-3">Pengguna</h1>
                </div>
              </div>
            </div>
          </div>

          {/* fasilitas kesehatan */}
          <div className="row row-cols-1 row-cols-xl-2 mt-4 mb-5">
            <div className="col">

              <div className="Card-TotalAdmin">
                <div className="">
                  <div className="d-flex align-items-center ">
                    <div className="me-4 display-6 ">
                      <BsFillSquareFill />
                    </div>
                    <h4 className=" pt-3 fw-bold">Total Fasilitas Kesehatan</h4>
                  </div>

                    <div className=" text-center mt-5  text-light ">
                      <div className="d-flex justify-content-around pb-xl-4 mb-xl-2   ">
                      
                          <div className="card-faskes me-3 font-card-dashboard ">
                            <h3>
                            <div className=""><LengthRSUD /> </div>
                            <div>RSUD</div>
                            </h3>
                          </div>
                      
                          <div className="card-faskes1 me-4 ">
                          <h5>
                          <LengthPuskesmas />
                          PUSKESMAS
                          </h5>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            {/* total kelurahan */}
            <div className="col ">
              <div className="Card-TotalAdmin">
                <div className="">
                  <div className="d-flex align-items-center ">
                    <div className="me-4 display-6 ">
                      <BsFillSquareFill />
                    </div>
                    <h3 className="fw-bold pt-3">Total Kecamatan</h3>
                  </div>
                  <h1 className="mt-4 display-3 fw-bold ">
                    <LengthKecamatan />
                  </h1>
                  <h1  className="pt-3">Kecamatan</h1>
                </div>
              </div>
            
          </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;

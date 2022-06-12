import React, { useEffect, useState } from "react";

// icons
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BsFillSquareFill } from "react-icons/bs";

// style
import "./../../assets/Style/style.css";

// component
import Sidebar from "../../component/Sidebar/Sidebar";
import LengthPenguna from "../../component/Dasboard/APIrequired/Length";
import { BsTypeH1 } from "react-icons/bs";

const Dashboard = () => {
  // initial state and valiables
  const [input, setInput] = useState("");
  const [count, setCount] = useState(1);

  const onChangeInput = (e) => {
    const input = e.target.value;
    setInput(input);
  };

  const handleSearch = () => {
    setCount(1 + input);
  };

  useEffect(() => {
    handleSearch();
  }, []);

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

          <div className="row mt-3 ">
            <div className="col-6">
              <div className="Card-TotalAdmin">
                <div className="">
                  <div className="d-flex align-items-center">
                    <div className="me-4 display-6 ">
                      <BsFillSquareFill />
                    </div>
                    <h3 className=" pt-3">Total Admin</h3>
                  </div>
                  <h1 className="mt-4 display-3 fw-bold ">100</h1>
                  <h1 className="pt-3">Pengelola</h1>
                </div>
              </div>
            </div>

            {/* total pengguna */}

            <div className="col-6">
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
          <div className="row mt-4 mb-5">
            <div className="col-6">

              <div className="Card-TotalAdmin">
                <div className="">
                  <div className="d-flex align-items-center">
                    <div className="me-4 display-6 ">
                      <BsFillSquareFill />
                    </div>
                    <h3 className=" pt-3 fw-bold">Total Fasilitas Kesehatan</h3>
                  </div>

                  <div calssName="">
                    <div className="d-flex text-center mt-5 text-light ">
                        <div className="me-3 card-faskes ">
                            <h1 className=" fw-bold ">10</h1>
                            <h4 className="pt-2">RSUD</h4>
                        </div>
                        
                        <div className="ms-1 card-faskes1 ">
                            <h1 className=" fw-bold ">10</h1>
                            <h4 className="pt-2">PUSKESMAS</h4>
                        </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* total kelurahan */}
            <div className="col-6 ">
              <div className="Card-TotalAdmin">
                <div className="">
                  <div className="d-flex align-items-center">
                    <div className="me-4 display-6 ">
                      <BsFillSquareFill />
                    </div>
                    <h3 className="fw-bold pt-3">Total Kecamatan</h3>
                  </div>
                  <h1 className="mt-4 display-3 fw-bold ">
                    <LengthPenguna />
                  </h1>
                  <h1  className="pt-3 pb-4">Kecamatan</h1>
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

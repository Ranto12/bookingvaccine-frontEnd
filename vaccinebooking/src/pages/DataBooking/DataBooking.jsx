import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";

// style
import "./../../assets/Style/style.css";

// icon
import { AiOutlineSearch } from "react-icons/ai";
import TabelDataBooking from "../../component/DataBooking/TabelDataBooking";

// API
import api from "../../API/data/post";

// component
import Select from "../../component/PageComponent/Select";
import Pagenation from "../../component/Pagenation/Pagenation";

const DataBooking = () => {
  // initial state and valiables
  const [booking, setBooking] = useState([]);
  const [input, setInput] = useState();
  const [size, setSize] = useState(15);
  const [page, setPage] = useState(0);
  const [lengthPage, setLengthPage] = useState(0);



  const onChangeInput = (e) => {
    setInput(e.target.value)
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`/booking?page=${page}&size=${size}`, {
          headers:{
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }}
        )
        setBooking(response.data.data.content);
        setLengthPage(response.data.data.totalPages);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, [page, size, lengthPage]);

  return (
    <div className="Fontcolor-Dasboard">
      <div className="row me-5">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-5">
          <div className="row">
            <div className="col-6">
              <h1 className="fz-Head">Kelola Data</h1>
              <h1 className="fz-Title">Booking vaksinasi</h1>
            </div>
          </div>

          {/* filtering */}
          <div className="row d-flex Margin-top-Serch align-items-end">
            <div className="col-6 d-flex " style={{ height: "26px" }}>
              <div>
                <p className="Fz-16">Tampilkan</p>
              </div>
              <div className="ms-2">
                <Select setSize={setSize} />
              </div>
              <div className="d-flex">
                <div>
                  <p className="ms-2 Fz-16 me-2">entri</p>
                </div>
                <div className="border border-dark d-flex w-100 BorderRadiusInline">
                  <div
                    className="ms-3 me-3"
                    style={{ cursor: "pointer", border: "none" }}
                  >
                    <AiOutlineSearch />
                  </div>
                  <div className="d-flex">
                    <input
                      type="text"
                      style={{
                        width: "251px",
                        height: "24px",
                        border: "none",
                        borderRadius: "2px",
                      }}
                      placeholder="Cari"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* tabel */}
          <div className="row mt-4 table-header background-color-Table ">
            <div className="row mt-2 table-data ">
              <div className="col-1">No</div>
              <div className="col-4">Nama</div>
              <div className="col-3">NIK</div>
              <div className="col-3">Jenis Vaksin</div>
              <div className="col-1">Aksi</div>
            </div>
          </div>

          {/* isi tabel */}
          <div className="TabelkelolaBerita row Border-Color-Box ">
            {booking &&
            booking?.filter((val) => {
                if (input == null) {
                  return val
                }
                else if (val.user_mapped.first_name?.toLowerCase().includes(input.toLocaleLowerCase())) {
                  return val
                } else {
                  return null;
                }
              }).map((value, index) => {
                // console.log("data", value.user_mapped)
                if(value.family_mapped !== null){
                  return(
                    <TabelDataBooking 
                    key={value.id_booking} Number={index + 1} 
                        namaUser={value.family_mapped.user_mapped.first_name + " " + value.family_mapped.user_mapped.last_name}
                        nikuser={value.family_mapped.user_mapped.username} 
                        jenisVaccine={value.session_mapped.vaccine_mapped.vaccine_name} 
                        family={value.family_mapped}
                        value ={value}
                        nikFamily={value.family_mapped.nik}
                        nameFamily={value.family_mapped.full_name} 
                    />
                  )
                }else{
                  return (
                    <TabelDataBooking 
                        key={value.id_booking} Number={index + 1} 
                        namaUser={value.user_mapped.first_name + " " + value.user_mapped.last_name}
                        nikuser={value.user_mapped.username} 
                        jenisVaccine={value.session_mapped.vaccine_mapped.vaccine_name} 
                        family={value.family_mapped}
                    />
                  )
                }
              })}
          </div>
              {booking?.length > 0 ? (
          <Pagenation data={booking} size={size} page={page} setPage={setPage} lengthPage={lengthPage}/>
              ):(
                null
              )
            }
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBooking;

import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { Link } from "react-router-dom";

// style
import "./../../assets/Style/style.css";

// icon
import { AiOutlineSearch } from "react-icons/ai";
import TabelDataBooking from "../../component/DataBooking/TabelDataBooking";

// API
import api from "../../API/data/post";

// component 
import Select from "../../component/PageComponent/Select";


const DataBooking = () => {
  // initial state and valiables
  const [booking, setBooking] = useState([]);
  const [Values, setValues] = useState(15);
  const [filteredData, setFilteredData] = useState(booking);
  

  const onChangeInput = (e) => {
    const value = e.target.value.toLowerCase();
    let result = [];
    result= booking.filter((data)=>{
      return data.nama.search(value) !== -1;
    });
    setFilteredData(result);
  };

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/bookingVaccine")
        setBooking(response.data);
        setFilteredData(response.data);
      } catch (err) {
        if (err.response) {
          //not in the 200 response range
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(`Error ${err.message}`);
        }
      }
    }
    fetchPosts();
  }, [])

  return (
    <div className="Fontcolor-Dasboard">
      <div className="row me-5">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-5">
          <div className="row">
            <div className="col-6">
<<<<<<< HEAD
              <h1 className="header">Kelola Data</h1>
              <h1 className="title">Booking vaksinasi</h1>
=======
              <h1 className="fz-Head">Kelola Data</h1>
              <h1 className="fz-Title">Booking vaksinasi</h1>
>>>>>>> ad1752ce9156dc51cc73ab2928c292b8233db8ae
            </div>
          </div>

          {/* filtering */}
          <div className="row d-flex Margin-top-Serch align-items-end">
            <div className="col-6 d-flex " style={{ height: "26px" }}>
              <div>
                <p className="filter">Total</p>
              </div>
              <div className="ms-2 Select15">
              <Select setValues={setValues} />
              </div>
              <div className="d-flex">
                <div>
                  <p className="ms-2 filter me-2">entri</p>
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
          <div className="row mt-4 table-header background-color-Table  justify-content-center">
            <div className="row mt-2 table-data justify-content-center">
              <div className="col-1">No</div>
              <div className="col-4">Nama</div>
              <div className="col-2">NIK</div>
              <div className="col-4">Jenis Vaksin</div>
              <div className="col-1">Aksi</div>
            </div>
          </div>

          {/* isi tabel */}
<<<<<<< HEAD
          <div className="TabelDataBooking  table-styling row ">
            {booking.map((data, index) => {
              return (
                <TabelDataBooking
                  key={data.id}
                  Number={index + 1}
                  nama={data.nama}
                  nik={data.nik}
                  jenisVaccine={data.jenisVaccine}
                />
              );
=======
          <div className="TabelkelolaBerita row Border-Color-Box">
            {filteredData.map((value, index) => {
              return (
                <TabelDataBooking key={value.id} Number={index + 1} nama={value.nama} nik={value.nik} jenisVaccine={value.jenisVaccine} />
              )
>>>>>>> ad1752ce9156dc51cc73ab2928c292b8233db8ae
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBooking;

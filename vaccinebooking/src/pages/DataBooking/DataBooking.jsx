import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { Link } from "react-router-dom";

// style
import "./../../assets/Style/style.css";

// icon
import { AiOutlineSearch } from "react-icons/ai";
import TabelDataBooking from "../../component/DataBooking/TabelDataBooking";

// API
import api from '../../API/data/post'

const DataBooking = () => {
  // initial state and valiables
  const [input, setInput] = useState("");
  const [count, setCount] = useState(1);
  const [booking, setBooking] = useState([]);

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

  useEffect(()=>{
    const fetchPosts = async()=>{
        try{
            const response = await api.get("/bookingVaccine")
            setBooking(response.data);
        } catch(err){
            if(err.response){
                //not in the 200 response range
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            }else{
                console.log(`Error ${err.message}`);
            }
        }
    }
    fetchPosts();
},[])

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
              <h1 className="fz-title">Booking vaksinasi</h1>
            </div>
          </div>

          {/* filtering */}
          <div className="row d-flex Margin-top-Serch align-items-end">
            <div className="col-6 d-flex " style={{ height: "26px" }}>
              <div>
                <p className="Fz-16">Tampilkan</p>
              </div>
              <div className="ms-2">
                <select
                  name="jumlahArtiker "
                  id="jumlahArtikel"
                  style={{ fontSize: "14px", borderRadius: "2px" }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                </select>
              </div>
              <div className="d-flex">
                <div>
                  <p className="ms-2 Fz-16 me-2">entri</p>
                </div>
                <div className="border border-dark d-flex w-100">
                  <div
                    className="ms-3 me-3"
                    style={{ cursor: "pointer", border: "none" }}
                    onClick={handleSearch}
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
          <div className="row mt-4 background-color-Table  justify-content-center">
            <div className="col-1">No</div>
            <div className="col-4">Nama</div>
            <div className="col-2">NIK</div>
            <div className="col-4">Jenis Vaksin</div>
            <div className="col-1">Action</div>
          </div>

          {/* isi tabel */}
          <div className="TabelDataBooking row ">
            {booking.map((data, index)=>{
              return(
                <TabelDataBooking key={data.id} Number={index +1 } nama={data.nama} nik={data.nik}  jenisVaccine={data.jenisVaccine}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBooking;

import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { Link } from "react-router-dom";

// style
import "./../../assets/Style/style.css";

// icon
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCalendarCheckFill } from "react-icons/bs";

// component
import TabelVaksinasi from "../../component/JadwalVaksinasi/TabelVaksinasi";
import Select from "../../component/PageComponent/Select";

// Api
import api from "./../../API/data/post";

const KelolaJadwal = () => {
  // initial state and valiables
  const [input, setInput] = useState("");
  const [count, setCount] = useState(1);
  const [jadwal, setJadwal] = useState([]);

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

  // api
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/jawal");
        setJadwal(response.data);
      } catch (err) {
        if (err.response) {
          //not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="Fontcolor-Dasboard">
        <div className="row me-5">
          <div className="col-3">
            <Sidebar />
          </div>

          {/* content */}
          <div className="col-9 mt-5">
            <div className="row">
              {/* Title */}
              <div className="col-10">
                <h1 className="fz-Head">Kelola Data</h1>
                <h1 className="fz-Title">
                  Jadwal Vaksinasi - Fasilitas Kesehatan
                </h1>
              </div>

              {/* handle */}
            </div>

            <div className="row Margin-top-Serch align-items-end d-flex">
              <div className="col-6 d-flex TotalPengguna">
                <div>
                  <p className="Fz-16">Total</p>
                </div>
                <div className="ms-2 Select15">
                  <Select onChangeInput={onChangeInput} />
                </div>
                <div className="d-flex">
                  <div>
                    <p className="ms-2 Fz-16 me-2">entri</p>
                  </div>
                  <div className="border border-dark d-flex w-100 BorderRadiusInline">
                    <div
                      className="ms-3 me-3 PointerClikCss"
                      onClick={handleSearch}
                    >
                      <AiOutlineSearch />
                    </div>
                    <div className="d-flex ">
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

              <div className="col-6 d-flex justify-content-end">
                <div>
                  <Link to="/jadwalvaksinasi">
                    <button className="Button-add-admin">
                      <BsFillCalendarCheckFill className="me-3" />
                      Buat Jadwal
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* table */}
            <div className="row mt-4 background-color-Table ">
              <div className="col-1">No</div>
              <div className="col-3">Nama Faskes</div>
              <div className="col-2">Stock</div>
              <div className="col-3">Jenis Vaksin</div>
              <div className="col-2">Waktu</div>
              <div className="col-1">Action</div>
            </div>
            {/* isi table */}
            <div className="TabelkelolaBerita row Border-Color-Box">
              {jadwal.map((data, index) => {
                return (
                  <TabelVaksinasi
                    Number={index + 1}
                    key={data.id}
                    nama={data.namaFaskes}
                    stock={data.stock}
                    jenis={data.jenis}
                    waktu={data.waktu}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default KelolaJadwal;

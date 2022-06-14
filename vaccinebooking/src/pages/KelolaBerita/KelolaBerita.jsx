import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { Link } from "react-router-dom";

// style
import "./../../assets/Style/style.css";

// icon
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import TabelKelolaBerita from "../../component/KelolaBerita/TabelKelolaBerita";

// api
import api from './../../API/data/post'
import Select from "../../component/PageComponent/Select";

const KelolaBerita = () => {
  // initial state and valiables
  const [input, setInput] = useState("");
  const [count, setCount] = useState(1);
  const [Artikels, setArtikels] = useState([]);
  const [Values, setValues] = useState(15);


  //funtion
  const onChangeInput = (e) => {
    const input = e.target.value;
    setInput(input)
  }
  const handleSearch = () => {
    setCount(1 + input)
  }


  //  useEffect
  useEffect(() => {
    handleSearch();
  }, [])

  //  API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/Artikel")
        setArtikels(response.data);
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
        <div className='col-9 mt-5'>
          <div className='row'>
            <div className='col-6'>
              <h1 className='fz-Head'>
                Kelola Data
              </h1>
              <h1 className='fz-Title'>
                Artikel/Berita Terbaru
              </h1>
            </div>
          </div>

          {/* filtering */}
          <div className='row d-flex Margin-top-Serch align-items-end'>
            <div className='col-6 d-flex TotalPengguna ' >
              <div>
                <p className='Fz-16'>Total</p>
                {input}
              </div>
              <div className='ms-2 Select15'>
                <Select setValues={setValues} />
              </div>
              <div className="d-flex">
                <div>
                  <p className="ms-2 Fz-16 me-2">entri</p>
                </div>
                <div className="border border-dark d-flex w-100 BorderRadiusInline">
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


            <div className="col-6 d-flex justify-content-end">
              <Link to='/jadwalvaksinasi' >
               <button className='Button-add-admin'>
                <MdPostAdd className='me-3'/>
                Buat Berita
              </button>
              </Link>
            </div>
          </div>

          {/* tabel */}
          <div className="row mt-4 background-color-Table  justify-content-center ">
            <div className="col-1">No</div>
            <div className="col-4">judul Berita</div>
            <div className="col-2">Author</div>
            <div className="col-4">Tanggal Posting</div>
            <div className="col-1">Action</div>
          </div>

          {/* isi tabel */}
          <div className='TabelkelolaBerita row Border-Color-Box '>
            {Artikels.map((artikel, index) => {
              return (
                <TabelKelolaBerita key={artikel.ArtikelsId} Number={index + 1} title={artikel.title} tanggal={artikel.tanggal} author={artikel.author} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelolaBerita;

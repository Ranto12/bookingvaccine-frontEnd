import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { Link } from "react-router-dom";

// style
import "./../../assets/Style/style.css";

// icon
import { AiOutlineSearch } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import TabelKelolaBerita from "../../component/KelolaBerita/TabelKelolaBerita";

// api
import api from "./../../API/data/post";
import Select from "../../component/PageComponent/Select";
import Pagenation from "../../component/Pagenation/Pagenation";

const KelolaBerita = () => {
  // initial state and valiables
  const [input, setInput] = useState("");
  const [Artikels, setArtikels] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(15);
  const [lengthPage, setLengthPage] = useState(0);
  //funtion
  const onChangeInput = (e) => {
    const inputt = e.target.value;
    setInput(inputt);
  };
  console.log(input, "input")
  const handleSearch = () => {
    setInput();
  };

  //  useEffect
  useEffect(() => {
    handleSearch();
  }, []);

  //  API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`/news/${page}/${size}`)
        setArtikels(response.data.data.content);
        setLengthPage(response.data.data.totalPages);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, [page, size]);

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
              <h1 className="fz-Title">Artikel/Berita Terbaru</h1>
            </div>
          </div>

          {/* filtering */}
          <div className="row d-flex Margin-top-Serch align-items-end">
            <div className="col-6 d-flex TotalPengguna ">
              <div>
                <p className="Fz-16">Tampilkan</p>
              </div>
              <div className='ms-2 Select15'>
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
              <Link to='/ArtikelTerbaru' >
                <button className='Button-add-admin'>
                  <MdPostAdd className='me-3' />
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
            {Artikels &&
              Artikels?.filter((val) => {

                if (input == null) {
                  return val
                }

                else if (val?.title_news_vaccine?.toLowerCase().includes(input.toLowerCase()) || val?.author_news_vaccine?.toLowerCase().includes(input.toLowerCase()) || val?.created_at?.toLowerCase().includes(input.toLowerCase())) {
                  return val
                } else{
                  return null;
                }
              }).map((data, index) => {
                return (
                  <TabelKelolaBerita key={data.id_news_vaccine} id={data.id_news_vaccine} Number={index + 1} title={data.title_news_vaccine} tanggal={data.created_at} author={data.author_news_vaccine} content={data.content_news_vaccine}/>
                )
              })}
          </div>
          {Artikels?.length > 0 ? (
          <Pagenation data={Artikels} size={size} page={page} setPage={setPage} lengthPage={lengthPage}/>
            ) : (
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

export default KelolaBerita;

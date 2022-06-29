import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
// style
import "./../../assets/Style/style.css";
import { Grid, IconButton } from "@mui/material";

import {BsFileEarmarkImage} from 'react-icons/bs'
import axios from "axios";

const ArtikelTerbaru = () => {
  // initial state and valiables
  const [input, setInput] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const inputRef = useRef();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [iamge, setImage] = useState("");

  // function 
  // handleChange
  const handleName =(e)=>{
    setTitle(e.target.value);
  }
  const handleAuthor =(e)=>{
    setAuthor(e.target.value);
  }
  const handleBody=(e)=>{
    setBody(e.target.value);
  }
const handleImage=(e)=>{
  setImage(e.target.value)
}
  // testing
  console.log(`Image`,iamge, title, author, body )


  // post 
  // const handleSubmit =(e) =>{
  //   e.preventDefault();
  //   axios({
  //     method: "POST",
  //     url: "http://35.247.142.238/api/v1/news",
  //     data: {
  //       "author_news_vaccine" : "author",
  //       "content_news_vaccine": "body",
  //       // id_news_vaccine : 0,
  //       // image_news_vaccine: image,
  //       "title_news_vaccine" : "title",
        
  //       // "titleNewsVaccine" :"wkwkwkw",
  //       // "authorNewsVaccine" : "author",
  //       // "contentNewsVaccine"  : "body",
  //       // id_news_vaccine : 0,
  //       // uploadFile : image

  //     },
  //   })
  //   .then(res => {
  //     console.log("Res", res.data.message);
  //   })
  //   .catch(err =>{
  //     console.log("Error in request", err);
  //   })
  // }

  // const handleSubmit=(e,)=>{
  //   e.preventDefault();
  //   axios.post('http://35.247.142.238/api/v1/news', JSON.stringify({
  //     "titleNewsVaccine": title,
  //     "authorNewsVaccine": author,
  //     "statcontentNewsVaccineus": body,
  //  }) , { headers: {  "Content-Type": "application/json"  }
  // })
  // .then(res =>{
  //     console.log("Res", res.data.message);
  // })
  // .catch(err =>{
  //       console.log("Error in request", err);
  //     })

  // }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://35.247.142.238/api/v1/news?titleNewsVaccine='+title+'&authorNewsVaccine='+author+'&contentNewsVaccine='+body , JSON.stringify({
      'file' : iamge
    }))
    .then(res => {
      console.log("Res", res.data.message);
    })
    .catch(err =>{
        console.log("Error in request", err);
    })
  }

  return (
    <div className="Fontcolor-Dasboard">
      <div className="row me-5 borderInput">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-5">
          <div className="row">
            <div className="col-6">
              <h1 className="header">Tambahkan</h1>
              <h1 className="title">Berita terbaru</h1>
            </div>
          </div>

          <div className=" table-header row mt-4 background-color-Table  justify-content-center">
            <h6 style={{ marginTop: "1rem",color: "#FFFFFF" }}>
              Silahkan Masukan Data sesuai dengan bagian yang telah di sediakan
            </h6>
          </div>

          {/* isi Form */}
          <div className="FormArtikelTerbaru row " onSubmit={handleSubmit}>
            <div className="d-flex FormArtikelTerbaru justify-content-start">
              <div style={{width: "100%", color: " #4E7EA7"}}>
                <h6 style={{ marginTop: "2rem", color: "#4E7EA7"}}>
                  Judul Berita
                </h6>
                <input type="text" className="FormArtikel p-1 rounded-2" style={{width: "100%", border: "none"}}
                  onChange={handleName}
                  value={title}
                  required
                />
                <h6 style={{ marginTop: "1rem",color: "#4E7EA7" }}
                >
                  Author
                </h6>
                <input type="text" className="w-100 FormArtikel p-1 rounded-2" style={{ border: "none",}}
                  onChange={handleAuthor}
                  value={author}
                  required
                />
                <input type="file"  style={{ display: "none"}}
                />
                <Grid container columnSpacing={{ xs: 2 }}>
                  <Grid item xs={9}>
                    <Grid container>
                      <Grid container item xs>
                        <h6 style={{ marginTop: "1rem", color: "#4E7EA7" }}>
                          Isi Berita
                        </h6>
                      </Grid>
                    </Grid>
                    <textarea type="text" className="w-100 FormArtikel p-1 rounded-2"
                      style={{ border: "none",height: "20rem",resize: "none"}}
                      onChange={handleBody}
                      value={body}
                      required
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <div>
                      <h6 style={{marginTop: "1rem",color: "#4E7EA7"}}>
                        Upload Gambar Cover
                      </h6>
                      {imagePreview === "" ? (
                        <div>
                          <div
                            style={{width: "75%", height: "20rem", border: "dashed 2px #4E7EA7", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer",}}>
                            <div style={{height: "10rem"}} className="image-upload">
                              <div className="image-upload">
                                <label for="file-input">
                                  <BsFileEarmarkImage className="h-100  w-100  image-size-uploadimage" />
                                </label>
                                <input id="file-input" type="file" onChange={handleImage} />
                              </div>
                            </div>
                            <div
                              style={{textAlign: "center", fontSize: "10px", marginTop: "1rem", color: "#4E7EA7"}}>
                              <p>
                                Upload Foto Fasilitas Kesehatan Anda <br />{" "}
                                Ukuran foto tidak lebih dari 10mb{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "20rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          <img src={imagePreview} height="100%" />
                        </div>
                      )}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "end",
                        }}
                      >
                      </div>
                        </div>
                      <div className="text-end mt-3">
                          <button className="btn-kelola-jadwal1 me-3  rounded-3 mb-5">
                            Batal
                          </button>
                          <button className="btn-kelola-jadwal ms-3  rounded-3 mb-5 " onClick={handleSubmit} type="submit">
                            Simpan
                          </button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtikelTerbaru;

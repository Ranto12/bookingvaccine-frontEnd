import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import PanoramaIcon from "@mui/icons-material/Panorama";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
// style
import "./../../assets/Style/style.css";
import { Grid, IconButton } from "@mui/material";

import ImagePlaceholder from "../../assets/image/ImagePlaceholder.jpg";

const ArtikelTerbaru = () => {
  // initial state and valiables
  const [input, setInput] = useState("");
  const [count, setCount] = useState(1);
  const [imagePreview, setImagePreview] = useState("");
  const inputRef = useRef();

  const onChangeInput = (e) => {
    const input = e.target.value;
    setInput(input);
  };

  const handleSearch = () => {
    setCount(1 + input);
  };

  const onInputImage = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };

  const onChangeImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImagePreview("");
      return;
    }
    const url = URL.createObjectURL(e.target.files[0]);
    setImagePreview(url);
  };

  useEffect(() => {
    handleSearch();
  }, []);

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
            <h6
              style={{
                marginTop: "1rem",
                color: "#FFFFFF",
              }}
            >
              Silahkan Masukan Data sesuai dengan bagian yang telah di sediakan
            </h6>
          </div>

          {/* isi Form */}
          <div className="FormArtikelTerbaru row ">
            <div className="d-flex FormArtikelTerbaru justify-content-start">
              <div
                style={{
                  width: "100%",
                  color: " #4E7EA7"
                }}
              >
                <h6
                  style={{
                    marginTop: "2rem",
                    color: "#4E7EA7",
                  }}
                >
                  Judul Berita
                </h6>
                <input
                  type="text"
                  className="FormArtikel p-1 rounded-2"
                  style={{
                    width: "100%",
                    border: "none",
                  }}
                />
                <h6
                  style={{
                    marginTop: "1rem",
                    color: "#4E7EA7",
                  }}
                >
                  Author
                </h6>
                <input
                  type="text"
                  className="w-100 FormArtikel p-1 rounded-2"
                  style={{
                    border: "none",
                  }}
                />
                <input
                  type="file"
                  style={{
                    display: "none",
                  }}
                  ref={inputRef}
                  onChange={onChangeImage}
                />
                <Grid container columnSpacing={{ xs: 2 }}>
                  <Grid item xs={9}>
                    <Grid container>
                      <Grid container item xs>
                        <h6
                          style={{
                            marginTop: "1rem",
                            color: "#4E7EA7",
                          }}
                        >
                          Isi Berita
                        </h6>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="outlined"
                          sx={{
                            minHeight: 0,
                            minWidth: 0,
                            padding: 0,
                          }}
                        >
                          <FormatBoldIcon
                            style={{ color: "#AAA9A9" }}
                          ></FormatBoldIcon>
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ minHeight: 0, minWidth: 0, padding: 0 }}
                        >
                          <FormatItalicIcon
                            style={{ color: "#AAA9A9" }}
                          ></FormatItalicIcon>
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ minHeight: 0, minWidth: 0, padding: 0 }}
                        >
                          <FormatUnderlinedIcon
                            style={{ color: "#AAA9A9" }}
                          ></FormatUnderlinedIcon>
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ minHeight: 0, minWidth: 0, padding: 0 }}
                        >
                          <PanoramaIcon
                            style={{ color: "#AAA9A9" }}
                          ></PanoramaIcon>
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ minHeight: 0, minWidth: 0, padding: 0 }}
                        >
                          <FormatListBulletedIcon
                            style={{ color: "#AAA9A9" }}
                          ></FormatListBulletedIcon>
                        </Button>
                      </Grid>
                    </Grid>
                    <textarea
                      type="text"
                      className="w-100 FormArtikel p-1 rounded-2"
                      style={{
                        border: "none",
                        height: "20rem",
                        resize: "none",
                      }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <div>
                      <h6
                        style={{
                          marginTop: "1rem",
                          color: "#4E7EA7",
                        }}
                      >
                        Upload Gambar Cover
                      </h6>
                      {imagePreview === "" ? (
                        <div>
                          <div
                            style={{
                              width: "75%",
                              height: "20rem",
                              border: "dashed 2px #4E7EA7",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                            onClick={onInputImage}
                          >
                            <div
                              style={{
                                height: "10rem",
                              }}
                            >
                              <img src={ImagePlaceholder} height="100%" />
                            </div>
                            <div
                              style={{
                                textAlign: "center",
                                fontSize: "0.9em",
                                marginTop: "1rem",
                                color: "#4E7EA7",
                              }}
                            >
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
                          onClick={onInputImage}
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
                        <div className="text-end mt-3">
                          <button className="btn-kelola-jadwal1 me-3  rounded-3 mb-5">
                            Batal
                          </button>
                          <button className="btn-kelola-jadwal ms-3  rounded-3 mb-5">
                            Simpan
                          </button>
                        </div>
                      </div>
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

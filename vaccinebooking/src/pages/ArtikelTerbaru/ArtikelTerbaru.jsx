import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";
import boostrap from "bootstrap";

// style
import "./../../assets/Style/style.css";
import { Button, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/system";

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

  const theme = createTheme({
    palette: {
      primary: {
        main: "#8e8b8b",
        darker: "#8b8b8b",
      },
    },
  });

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
              <h1 className="fz-title">Artikel/berita Terbaru</h1>
            </div>
          </div>

          <div className="row mt-4 background-color-Table  justify-content-center">
            <h6>
              Silahkan Masukan Data sesuai dengan bagian yang telah di sediakan
            </h6>
          </div>

          {/* isi Form */}
          <div className="FormArtikelTerbaru row ">
            <div
              className="d-flex FormArtikelTerbaru justify-content-start"
              style={{ backgroundcolor: "#D9D9D9" }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <h6
                  style={{
                    marginTop: "2rem",
                  }}
                >
                  Judul Artikel/Berita
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
                  <Grid item xs={7}>
                    <h6>Isi Artikel/Berita</h6>
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
                  <Grid item xs={5}>
                    <div>
                      <h6>Upload Gambar Cover</h6>
                      {imagePreview === "" ? (
                        <div>
                          <div
                            style={{
                              width: "100%",
                              height: "20rem",
                              border: "dashed 2px #aaa9a9",
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
                        <Stack
                          direction="row"
                          spacing={2}
                          className="mb-4 mt-4"
                        >
                          <ThemeProvider theme={theme}>
                            <Button color="primary">Batal</Button>
                            <Button variant="contained" color="primary">
                              Simpan
                            </Button>
                          </ThemeProvider>
                        </Stack>
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

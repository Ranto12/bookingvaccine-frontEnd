import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsFileEarmarkImage } from "react-icons/bs";

// api
import api from '../../API/data/post';
import {URL} from '../../API/URL';

export default function FormKelolaJadwal({address, name, data}) {
  // state and variables
  const [vaccine, setvaccine] = useState([]);
  const [idVaccine, setIdvaccine] = useState();
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState("");
  const [Stock, setStock] = useState(0);
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const chaangeStartDate =(e)=>{
    setStartDate(e.target.value);
  }
  const ChangeidVaccine =(e)=>{
    setIdvaccine(e.target.value);
  }
  const ChangeStartTime =(e)=>{
    setStartTime(e.target.value)
  }
  const onChangeStock =(e)=>{
    if(e.target.value.length==3) return false;
    setStock(e.target.value);
  }
 const onChangeImage=(e)=>{
    setImage(e.target.files[0]);
 }

  // useEffect
  useEffect(()=>{
    const fetchPosts = async()=>{
        try{
            const response = await api.get("/vaccine", {
              headers:{
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
          })
            setvaccine(response.data);
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

const handleSubmit =(e)=>{
  e.preventDefault();
  const formData = new FormData();
  formData.append("vaccine_id ", idVaccine);
  formData.append("area_id", data.area_mapped.id_area);
  formData.append("health_facilities_id", data.id_health_facilities);
  formData.append("stock", Stock);
  formData.append("start_date", `${startDate}`);
  formData.append("start_time", `${startTime}`);
  formData.append("file", image);
  try{
    const response = axios({
      method: "post",
      url: `${URL}/session`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data",
                  "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
    });
    console.log("response aman");
  }catch(error){
    console.log(error)
  }
}
// debug
// console.log(`vaccine= `, idVaccine," area= ", data.area_mapped.id_area, "healt= ", data.id_health_facilities, "stock= ", Stock, "date= ", startDate, "time= ", startTime, "image= ", image  )
// console.log(Stock)
  return (
    <div className="mb-5 borderInput" style={{ color: " #4E7EA7" }}  >
      <div >
        <div>
          <label className="mt-4 fw-bold ">Nama Fasilitas Kesehatan</label>
        </div>
        <label className="mt-2 fw-normal ">{name}</label>
      </div>
      <div >
        <div>
          <label className="mt-4 fw-bold ">Alamat Lengkap</label>
        </div>
        <label className="mt-2 fw-normal ">{address}</label>
      </div>
      <div className="mt-3">
        <div>
          <label className="fw-bold"> Jenis Vaksin</label>
          <div className="mt-3">
            {vaccine.data && 
            vaccine.data.map((item)=>{
              const id = item.id_vaccine;
              return(
                <label>
                <input type="radio" key={item.id} name="fav_language" className="ms-3"
                value={item.id_vaccine}
                onChange={ChangeidVaccine}
                />
                <span className="px-3">{item.vaccine_name} </span>
                </label>
                )
                })}
          </div>
        </div>
      </div>

      <div>
        <div className="mt-3">
          <label className="fw-bold ">Stock</label>
        </div>
        <input onInput={(e)=>{
          if (e.target.value.length > 4) {
            e.target.value = e.target.value.slice(0, 4);
          }
        }} 
        onChange={onChangeStock}
        type="number"  className="mt-2 p-1 rounded-2 input-kel Background-White" onKeyPress={(e) =>["e", "E", "+", "-", ","].includes(e.key) && e.preventDefault()} required min="4" max="5" />
        <span className="ms-3">Buah</span>
      </div>

      <div className="mt-3">
        <div>
          <label className="fw-bold mb-3"> Sesi </label>
        </div>
        <span className="">
          <input type="date" className="mt-2 p-1 rounded-2 input-kel Background-White" onChange={chaangeStartDate} />
        </span>
        <span className="mx-4">-</span>
        <span> 
          <input type="time" className="mt-2 p-1 rounded-2 input-kel Background-White" onChange={ChangeStartTime} />
        </span>
      </div>
      <div className="row mt-4">
        <div className="col-8">
          <h5> Upload Gambar </h5>
            {imagePreview === "" ? (
                        <div>
                          <div
                            style={{width: "100%", height: "15rem", border: "dashed 2px #4E7EA7", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer" , marginBottom:"2%"}} >
                            <div style={{height: "50% ", paddingBottom:"1px", paddingTop:"25px", borderRadius:"10px", backgroundColor:"#D9D9D9"}} className="image-upload card">
                              <div className="image-upload">
                                <label for="file-input">
                                  <BsFileEarmarkImage className=" image-size-uploadimage" />
                                </label>
                                <input id="file-input" type="file" onChange={onChangeImage} />
                              </div>
                            </div>
                            <div
                              style={{textAlign: "center", fontSize: "10px", marginTop: "1rem", color: "#4E7EA7"}}>
                              <p>
                                {image && image.name ? (
                                  <span className="d-flex justify-content-center ">{image.name}</span>
                                ):(
                                  <span>
                                    Upload Foto Fasilitas Kesehatan Anda <br />{" "}
                                    Ukuran foto tidak lebih dari 10mb{" "}
                                  </span>
                                )}
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
        </div>
          <div className="col-4 text-center align-self-end">
            <div>
                <button className="btn-kelola-jadwal1 me-3  rounded-3 mb-5  ">Batal</button>
                <button className="btn-kelola-jadwal ms-3  rounded-3 mb-5  " onClick={handleSubmit}>Simpan</button>
            </div>
          </div>
      </div>
    </div>
  );
}
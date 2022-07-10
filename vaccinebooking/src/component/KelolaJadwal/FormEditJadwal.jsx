import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsFileEarmarkImage } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {URL} from "../../API/URL";

// api
import api from '../../API/data/post'
import Swal from "sweetalert2";
              
function FormEditJadwal( {namaFaskes, stockVaccine, tanggalVaccine, alamatFacility, WaktuVaccine, idFacility, Idvaccine, idSesion, data, idArea}) {
  // state and variables
  const [vaccine, setvaccine] = useState([]);
  const [idVaccinee, setIdvaccine] = useState(Idvaccine);
  const [startDate, setStartDate] = useState(tanggalVaccine);
  const [startTime, setStartTime] = useState(WaktuVaccine);
  const [Stock, setStock] = useState(stockVaccine);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const navigate = useNavigate();

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
    setStock(e.target.value);
  }
 const onChangeImage=(e)=>{
    setImage(e.target.files[0]);
 }

  // get api jenis vaccine
  // useEffect
  useEffect(()=>{
    const fetchPosts = async()=>{
        try{
            const response = await api.get("/vaccine", {
              headers:{
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
          })
          setvaccine(response.data.data);
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
    console.log("render pertama")
},[idVaccinee])
// funtion

const handleSubmit =(e)=>{
  e.preventDefault();
    if(image !== null){
      const formData = new FormData();
      formData.append("vaccine_id", idVaccinee);
      formData.append("area_id", idArea);
      formData.append("health_facilities_id", idFacility);
      formData.append("stock", Stock);
      formData.append("start_date", `${startDate}`);
      formData.append("start_time", `${startTime}`);
      formData.append("file", image);
      try{
        const response = axios({
          method: "put",
          url: `${URL}/session/${idSesion}`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data", 
                    "Authorization": `Bearer ${localStorage.getItem('token')}` },
        })
        .then((response) => {
          Swal.fire('Berhasil', 'Jadwal Berhasil Anda Edit', 'success');
          navigate('/kelolaJadwal');
          console.log(response);
        })
      }catch(error){
        console.log("error nya ini mas e", error);
      if(error.response.status === 500){
        Swal.fire('Gagal', 'Jadwal Gagal Anda Edit', 'error');
      }}
    }else{
      e.preventDefault();
      axios.put(`${URL}/session/${idSesion}`,{
        vaccine_id: idVaccinee,
        area_id: idArea,
        health_facilities_id: idFacility,
        stock: Stock,
        start_date: `${startDate}`,
        start_time: `${startTime}`
      },{
        headers:{
          "Content-Type": "multipart/form-data", 
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        Swal.fire('Berhasil', 'Jadwal Berhasil Anda Edit', 'success');
        navigate('/kelolaJadwal');
        console.log(response);
      })
      .catch((error) => {
        // console.log("error nya ini mas e", error);
        if(error.response.status === 500){
          Swal.fire('Gagal', 'Jadwal Gagal Anda Edit', 'error');
        }
      })
    }
}
// debug
// console.log(`vaccine= `, idVaccine," area= ", data.area_mapped.id_area, "healt= ", data.id_health_facilities, "stock= ", Stock, "date= ", startDate, "time= ", startTime, "image= ", image  )
// console.log('vacicine', IdVaccine)
// console.log(`data`, namaFaskes, stockVaccine, tanggalVaccine, alamatFacility, WaktuVaccine, idFacility, Idvaccine, idSesion)
console.log("data", idArea, idFacility, image, startDate, startTime, Stock, idVaccinee, idSesion)
// console.log(URL)

  return (
    <div className="mb-5 borderInput" style={{ color: " #4E7EA7" }}  >
      <div >
        <div>
          <label className="mt-4 fw-bold ">Nama Fasilitas Kesehatan</label>
        </div>
        <label className="mt-2 fw-normal ">{namaFaskes}</label>
      </div>
      <div >
        <div>
          <label className="mt-4 fw-bold ">Alamat Lengkap</label>
        </div>
        <label className="mt-2 fw-normal ">{alamatFacility}</label>
      </div>
      <div className="mt-3">
        <div>
          <label className="fw-bold"> Jenis Vaksin</label>
          <div className="mt-3" >
            {vaccine.map((item)=>{ 
              return(
                <label htmlFor={item.vaccine_name}> 
                <input type="radio" key={item.id_vaccine} name="fav_language" className="ms-3"
                value={item.id_vaccine}
                checked={idVaccinee === item.id_vaccine}
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
        type="number"  className="mt-2 p-1 rounded-2 input-kel Background-White" onKeyPress={(e) =>["e", "E", "+", "-", ","].includes(e.key) && e.preventDefault()} required min="4" max="5" value={Stock} />
        <span className="ms-3">Buah</span>
      </div>

      <div className="mt-3">
        <div>
          <label className="fw-bold mb-3"> Sesi </label>
        </div>
        <span className="">
          <input type="date" className="mt-2 p-1 rounded-2 input-kel Background-White" onChange={chaangeStartDate} value={startDate}/>
        </span>
        <span className="mx-4">-</span>
        <span> 
          <input type="time" className="mt-2 p-1 rounded-2 input-kel Background-White" onChange={ChangeStartTime} value={startTime}/>
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
                        <input  id="file-input" type="file" onChange={onChangeImage} />
                      </div>
                    </div>
                    <div
                      tyle={{textAlign: "center", fontSize: "10px", marginTop: "1rem", color: "#4E7EA7"}}>
                        <p>
                          Upload Foto Fasilitas Kesehatan Anda <br />{" "}
                          Ukuran foto tidak lebih dari 10mb{" "}
                        </p>
                    </div>
                </div>
              </div>
              ) : (
              <div
                style={{width: "100%", height: "20rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
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
export default FormEditJadwal
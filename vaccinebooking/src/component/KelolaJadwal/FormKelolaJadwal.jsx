import { RepeatOneSharp } from "@mui/icons-material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsFileEarmarkImage } from "react-icons/bs";

// api
import api from '../../API/data/post'

export default function FormKelolaJadwal({address, maps, category, name, data, key}) {
  // state and variables
  const [vaccine, setvaccine] = useState([]);
  const [idVaccine, setIdvaccine] = useState();
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState("");
  const [Stock, setStock] = useState(0);
  const [image, setImage] = useState("");

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
    setImage(e.target.value);
 }

  // get api jenis vaccine
  // useEffect
  useEffect(()=>{
    const fetchPosts = async()=>{
        try{
            const response = await api.get("/vaccine")
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

// funtion

const handleSubmit =(e) =>{
  axios({
    method:"POST",
    url: "http://35.247.142.238/api/v1/session",
    data: {
      start_date: `${startDate}`,
      start_time: `${startTime}`,
      id_area: data.area_mapped.id_area,
      id_vaccine: idVaccine,
      id_health_facilities: data.id_health_facilities,
      stock: Stock
    },
  })
  .then(res => {
    console.log("Succes bro", res.data.message);
  })
  .catch(err =>{
    console.log("Error in request", err);
  })
}

// debugger
// console.log(`data iamge, ${image}`)

  return (
    <div className="mb-5 borderInput" style={{ color: " #4E7EA7" }}  >
      <div >
        <div>
          <label className="mt-4 fw-bold ">Nama Fasilitas Kesehatan</label>
        </div>
        <input type="text" className="w-100 bg-light input-kelola mt-2 p-1 rounded-2" style={{ border: "1px solid  #D9D9D9" }} value={name}/>
      </div>
      <div className="mt-3 ">
        <span>
          <label for="categoty" >{category}</label>
        </span>
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
        <input onChange={onChangeStock} type="number" className="mt-2 p-1 rounded-2 input-kel Background-White"/>
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
        <div className="col-4">
          <h5> Upload Gambar </h5>
            <div className="card img-input">
              <label>
                <div className="text-center img-card  ">
                  <BsFileEarmarkImage className="h-50 w-50 PointerClikCss" />
                </div>
                <input type="file" onChange={onChangeImage} />
              </label>
              <p className="card-text text-center pt-2">
                Upload Foto Fasilitas Kesehatan Anda Ukuran FOto tidak Lebih dari
                10 mb
              </p>
            </div>
        </div>
          <div className="col-8">
            <div>
              <h5> Alamat Lengkap </h5>
              <textarea className="p-3 w-100 rounded-3 input-kel-area" disabled>{address}</textarea>
            </div>
            <div>
              <h6> Link Google Maps </h6>
              <textarea className="p-3 w-100 rounded-3 input-kel-area" disabled>{maps}</textarea>
            </div>
            <div className="text-end mt-3 mb-5">
                <button className="btn-kelola-jadwal1 me-3  rounded-3 mb-5">Batal</button>
                <button className="btn-kelola-jadwal ms-3  rounded-3 mb-5" onClick={handleSubmit}>Simpan</button>
            </div>
          </div>
      </div>
    </div>
  );
}
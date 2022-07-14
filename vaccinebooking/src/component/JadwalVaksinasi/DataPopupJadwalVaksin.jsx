import React from "react";
import { useState } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect } from "react";
import api from '../../API/data/post';


export default function DataPopupBooking({ namaFaskes, stock, jenis, alamat, waktu }) {
  // console.log(nama, "ini namanya")
  const [selected] = useState(jenis);
  const [vaccine, setvaccine] = useState([]) 

  useEffect(() => {
    console.log(jenis)
  },[jenis])



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
},[])


  return (
    <div>
      <ul className="p-0">
        <li>
          <h5>Nama Admin</h5>
          <h6 className="data-popup"> {namaFaskes}</h6>
        </li>
        <li>
          <h5>Alamat Lengkap</h5>
          <h6 className="data-popup">{alamat}</h6>
        </li>
      </ul>  
      <ul className="p-0">
      <div className="data-popup">
          <h5>Jenis Vaksin</h5>
          <div className="d-flex">
          {vaccine?.map((item) => {
            // console.log(item.vaccine_name)
            return(
              <div className="d-flex">
                <RadioGroup className="d-flex col-md-12"
                row
            value={selected}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel
                value={item.vaccine_name}
                control={<Radio />}
                label={item.vaccine_name}
                disabled={item.vaccine_name !== selected}
                />
                
          </RadioGroup>
              </div>
            )
          })}
        </div>
        </div>
      </ul>
        <ul className="p-0">
        <li>
          <h5>Stock</h5>
          <h6 className="data-popup"> {stock}</h6>
        </li>
        <li>
          <h5>Sesi</h5>
          <h6 className="data-popup"> {waktu} - selesai</h6>
        </li>
      </ul>
    </div>
    
  );
}

import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
// component
import Sidebar from "../../component/Sidebar/Sidebar";
import api from '../../API/data/post';
import FormEditJadwal from "../../component/KelolaJadwal/FormEditJadwal";
// style
import '../../assets/Style/style.css';
import { useLocation } from "react-router-dom";

const EditJadwalVaksinasi = () => {
  // state and variable
  const [vacility, setVacility] = useState([]);
  let location = useLocation();
  const namaFaskes = location.state.namaFaskes;
  const stockVaccine = location.state.stockVaccine;
  const tanggalVaccine = location.state.tanggalVaccine;
  const alamatFacility = location.state.alamatFacility;
  const WaktuVaccine = location.state.WaktuVaccine;
  const idFacility = location.state.idFacility;
  const Idvaccine = location.state.Idvaccine;
  const idSesion = location.state.idSesion;
  const key = location.state.key;
  const idArea = location.state.idArea;
  // useEffect
  useEffect(()=>{
    const fetchPosts = async()=>{
        try{
            const response = await api.get(`/facility/user/${localStorage.getItem("id_users")}`, {
              headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`
              }})
            setVacility(response.data.data);
        } catch(err){
            console.log(err);
        }
    }
    fetchPosts();
},[])

  return (
    <div>
      <div className="row me-5 ">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-5 text-secondary title-das" >
          <div className="title-das ">
            <h4>Edit</h4>
            <h1>Jadwal Vaksinasi - Fasilitas Kesehatan</h1>
          </div>
          <div className="bg-card-kelola text-light">
            <h5 >
              Silahkan Masukkan Data Sesuai dengan bagian yang telah di Sediakan
            </h5>
          </div>
          <Form className='bg-form-jadwal'>
           {vacility.map((data, index)=>{
            return(
              <FormEditJadwal 
                key={key}
                namaFaskes={namaFaskes} 
                stockVaccine={stockVaccine} 
                tanggalVaccine={tanggalVaccine}
                alamatFacility={alamatFacility}
                WaktuVaccine={WaktuVaccine}
                idFacility={idFacility}
                Idvaccine={Idvaccine}
                idSesion={idSesion}
                idArea={idArea}
              />
            )
           })}
          </Form>
        </div>
      </div>
    </div>
  )
}

export default EditJadwalVaksinasi

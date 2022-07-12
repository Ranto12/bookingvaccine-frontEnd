import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";


// component
import Sidebar from "../../component/Sidebar/Sidebar";

// style
import '../../assets/Style/style.css';

// api
import api from '../../API/data/post';
import FormEditJadwal from "../../component/KelolaJadwal/FormEditJadwal";
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
              headers:{
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
              }})
            setVacility(response.data);
        } catch(err){
            if(err.response){
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
      <div className="row me-5 ">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-5 text-secondary" style={{ color: " #4E7EA7" }}>
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
           {vacility.data && 
           vacility.data.map((data, index)=>{
            // console.log(`data di map`, data.area_mapped.id_area)
            return(
            //   <FormEditJadwal key={data.id_health_facilities} data={data} address={data.address_health_facilities} maps={data.link_location} category={data.category_mapped.category_facilities_name} name={data.health_facilities_name}/>
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

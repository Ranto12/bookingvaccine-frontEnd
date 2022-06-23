import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

// component
import Sidebar from "../../component/Sidebar/Sidebar";
import FormKelolaJadwal from "../../component/KelolaJadwal/FormKelolaJadwal";

// style
import '../../assets/Style/style.css';

// api
import api from '../../API/data/post';


const JadwalVaksinasi = () => {
  // state and variable
  const [vacility, setVacility] = useState([]);

  // useEffect
  useEffect(()=>{
    const fetchPosts = async()=>{
        try{
            const response = await api.get("/facility/user/7")
            setVacility(response.data);
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

console.log(vacility)


  return (
    <div>
      <div className="row me-5 ">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-5 text-secondary" style={{ color: " #4E7EA7" }}>
          <div className="title-das ">
            <h4>Tambahkan</h4>
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
              <FormKelolaJadwal key={data.id_health_facilities} data={data} address={data.address_health_facilities} maps={data.link_location} category={data.category_mapped.category_facilities_name} name={data.health_facilities_name}/>
            )
           })}
          </Form>
        </div>
      </div>
    </div>
  )
}

export default JadwalVaksinasi

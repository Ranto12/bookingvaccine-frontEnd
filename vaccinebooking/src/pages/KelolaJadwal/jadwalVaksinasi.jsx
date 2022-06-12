import React from "react";
import { Form } from "react-bootstrap";

// component
import Sidebar from "../../component/Sidebar/Sidebar";
import FormKelolaJadwal from "../../component/KelolaJadwal/FormKelolaJadwal";

// style
import '../../assets/Style/style.css'


const JadwalVaksinasi = () => {
  return (
    <div>
      <div className="row me-5 ">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-5 text-secondary">
          <div>
            <h4>Kelola Data</h4>
            <h1>Jadwal Vaksinasi - Fasilitas Kesehatan</h1>
          </div>

          <div className="bg-card-kelola bg-secondary">
            <h5>
              Silahkan Masukkan Data Sesuai dengan bagian yang telah di Sediakan
            </h5>
          </div>

          <Form className='bg-form-jadwal'>
            <FormKelolaJadwal />     

            <div className="text-end mt-3 mb-5">
              <button className="btn-kelola-jadwal1 me-3  rounded-3 mb-5">batal</button>
              <button className="btn-kelola-jadwal ms-3  rounded-3 mb-5">Simpan</button>
          </div>     
          </Form>
        </div>
      </div>
    </div>
  )
}

export default JadwalVaksinasi

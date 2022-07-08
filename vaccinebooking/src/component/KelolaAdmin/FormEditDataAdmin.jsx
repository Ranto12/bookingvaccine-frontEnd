import React, { useState } from "react";
import axios from 'axios';
import "../../assets/Style/style.css";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function FormEditDataAdmin({id_user, Name, hp, mail, address, birth_date, gender, pw, usernames }) {
   // initial state and variable
   const [namaAdmin, setNamaAdmin] = useState(Name);
   const [tanggalLahir, setTanggalLahir] = useState(birth_date);
   const [jenisKelamin, setJenisKelamin] = useState(gender);
   const [email, setEmail] = useState(mail);
   const [password, setpassword] = useState(pw);
   const [username, setUsername] = useState(usernames);
   const [noTlp, setNoTlp]= useState(hp);
   const [alamat, setAlamat] = useState(address);
   const navigate = useNavigate();


   // funtion
   const handleNamaAdmin=(e)=>{
     setNamaAdmin(e.target.value);
   }
   const handleTanggalLahir=(e)=>{
     setTanggalLahir(e.target.value);
   }
   const handlejenisKelamin=(e)=>{
     setJenisKelamin(e.target.value);
   }
   const handleemail=(e)=>{
     setEmail(e.target.value); 
   }
   const handlepassword=(e)=>{
     setpassword(e.target.value);
   }
   const handleusername=(e)=>{
     setUsername(e.target.value);
   }
   const handlenoTlp=(e)=>{
     setNoTlp(e.target.value);
   }
   const handlealamat=(e)=>{
     setAlamat(e.target.value); 
   }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put(`http://35.247.142.238:80/api/v1/users/${id_user}`, {
      headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
  },{
        address: alamat,
        birth_date: `${tanggalLahir}`,
        email: email,
        first_name: namaAdmin,
        gender: jenisKelamin,
        no_phone: noTlp,
        password: password,
        roles: "ADMIN",
        username: username
    })
    .then((response) => {
      // console.log(response);
     Swal.fire('Berhasil', 'Data Admin Berhasil Ditambahkan', 'success');
      navigate('/KelolaAdmin');
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        confirmButtonText : "OK"
      })
    });
  }
  // console.log(namaAdmin, jenisKelamin, alamat, email, noTlp, password, username, tanggalLahir ,roles)
  return (
    <div>
      <div className="mb-5 ">
      <div className="row title-das">
          <div className="col-12 input-nama-admin-font  mt-4 mb-0 ">
            <label >Nama Admin</label>
            <input required type="text" className="input-Nama-admin" value={namaAdmin} onChange={handleNamaAdmin} />
          </div>
        </div>
        <div className="row title-das">
          <div className="col-6 input-nama-admin-font">
            <label >Tanggal Lahir</label>
            <input required type="date" className="input-Nama-admin" value={tanggalLahir} onChange={handleTanggalLahir} />
          </div>
          <div className="col-6 input-nama-admin-font">
            <label >Jenis Kelamin</label>
            {/* <input type="text" className="input-Nama-admin" value={jenisKelamin} onChange={handlejenisKelamin}/> */}
            <select name="jenisKelamin" id="jenisKelamin" className="input-Nama-admin" onChange={handlejenisKelamin}>
              <option value="Laki-Laki" selected={jenisKelamin === "Laki-Laki"} >Laki-Laki</option>
              <option value="Perempuan" selected={jenisKelamin === "Perempuan"} >Perempuan</option>
            </select>
          </div>
        </div>
        <div className="row title-das">
          <div className="col-6 input-nama-admin-font ">
            <label >Email</label>
            <input required type="text" className="input-Nama-admin" value={email} onChange={handleemail}/>
          </div>
          <div className="col-6 input-nama-admin-font">
            <label >Password</label>
            <input required type="password" className="input-Nama-admin" value={password} onChange={handlepassword}/>
          </div>
        </div>
        <div className="row title-das">
          <div className="col-6 input-nama-admin-font ">
            <label >Alamat Lengkap</label>
            <textarea required type="text" className="w-100 input-alamat-admin" value={alamat} onChange={handlealamat} />
          </div>
          <div className="col-6 input-nama-admin-font">
            <div>
              <label >UserName</label>
              <input required type="text" className="input-Nama-admin" value={username} onChange={handleusername}/>
            </div>
            <div>
              <label >No. Telp</label>
              <input required type="text" className="input-Nama-admin" value={noTlp} onChange={handlenoTlp}/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-end mt-3 mb-5">
        <button className="btn-kelola-jadwal1 me-3  rounded-3 mb-5">
          batal
        </button>
        <button className="btn-kelola-jadwal ms-3  rounded-3 mb-5" onClick={handleSubmit}>
          Simpan
        </button>
      </div>
    </div>
  );
}
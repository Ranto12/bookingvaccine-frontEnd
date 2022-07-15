import React from "react";
import "../../assets/Style/style.css";
import PopUpPengguna from "./PopUpPengguna";

const TablePengguna = ({
  id, 
  nama, 
  nohp, 
  NIK, 
  Number, 
  gender, 
  email, 
  tgl_lahir 
}) => {
  return (
    <div className="d-flex TabelkelolaBerita TableColor-child title-das">
      <div className="col-1">{Number}</div>
      <div className="col-4">{nama}</div>
      <div className="col-3">{nohp}</div>
      <div className="col-3">{NIK}</div>
      <div className="col-1 justify-content-center  ">
        <PopUpPengguna 
        key={id} 
        nama={nama} 
        number ={Number} 
        nohp={nohp} 
        nik={NIK} 
        gender={gender} 
        email={email} 
        tgl_lahir={tgl_lahir} 
        />
      </div>
    </div>
  );
};

export default TablePengguna;

// ok

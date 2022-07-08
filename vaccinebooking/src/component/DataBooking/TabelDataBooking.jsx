import React from "react";
import { useState } from "react";
import "../../assets/Style/style.css";
import PopUpPenggunaBooking from "./PopUpPenggunaBooking";

const TablePengguna = ({ key, namaUser, nikuser, jenisVaccine, Number, family, nameFamily, nikFamily, value, User }) => {
  const [dataUserNull, setDatauserNull] = useState("null");
  
  return (
    <div
      className="row TabelDataBooking justify-content-center"
      style={{ backgroundColor: Number % 2 === 1 ? "#FFFFFF" : "#F7F7F7" }}>
            
            <div className="col-1 ">{Number}</div>
            <div className="col-4">{nameFamily ? nameFamily : namaUser}</div>
            <div className="col-3  Pointer-Booking">{nikFamily ? nikFamily : nikuser}</div>
            <div className="col-3">{jenisVaccine}</div>
            <div className="col-1 d-flex justify-content-center">
            <div className=" d-flex p-2">
            <PopUpPenggunaBooking namaUser={namaUser} nikuser={nikuser} 
            jenisVaccine={jenisVaccine} Number={Number}  nikFamily={nikFamily} nameFamily={nameFamily}/>
            </div>
            </div>
    </div>
  );
};

export default TablePengguna;

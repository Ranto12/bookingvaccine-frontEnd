import React from "react";
import "../../assets/Style/style.css";
import { Button, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Overlaybookingvacinne from "../Overlay/Overlaybookingvacinne";
import PopUpPenggunaBooking from "./PopUpPenggunaBooking";

const TablePengguna = ({ key, nama, nik, jenisVaccine, Number }) => {
  return (
    <div
      className="d-flex TabelDataBooking justify-content-center"
      style={{ backgroundColor: Number % 2 === 1 ? "#FFFFFF" : "#F7F7F7" }}
    >
      <div className="col-1">{Number}</div>
      <div className="col-4">{nama}</div>
      <div className="col-3  Pointer-Booking">{nik}</div>
      <div className="col-3">{jenisVaccine}</div>
      <div className="col-1 d-flex justify-content-center">
        <div className=" d-flex p-2">
        <PopUpPenggunaBooking nama={nama}
          nik={nik}
          jenisVaccine={jenisVaccine}
          Number={Number}/>
          
        </div>
      </div>
    </div>
  );
};

export default TablePengguna;

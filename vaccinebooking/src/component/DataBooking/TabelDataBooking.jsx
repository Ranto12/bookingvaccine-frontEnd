import React from "react";
import "../../assets/Style/style.css";
import { IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Overlaybookingvacinne from "../Overlay/Overlaybookingvacinne";

const TablePengguna = ({ key, nama, nik, jenisVaccine, Number }) => {
  return (
    <div
<<<<<<< HEAD
      className="d-flex TabelDataBooking justify-content-center"
      style={{ backgroundColor: Number % 2 === 1 ? "#FFFFFF" : "#F7F7F7" }}
    >
=======
      className="d-flex TabelkelolaBerita justify-content-center TableColor-child">
>>>>>>> ad1752ce9156dc51cc73ab2928c292b8233db8ae
      <div className="col-1">{Number}</div>
      <div className="col-4">
        {nama}
      </div>
      <div className="col-2  Pointer-Booking">
      <Overlaybookingvacinne  nama={nama} nik={nik} jenisVaccine={jenisVaccine} Number={Number} />

      </div>
      <div className="col-4">{jenisVaccine}</div>
      <div className="col-1 d-flex justify-content-center">
        <IconButton
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="acc"
          color="success"
        >
          <CheckCircleIcon />
        </IconButton>
        <IconButton
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="decline"
          color="error"
        >
          <CancelIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TablePengguna;

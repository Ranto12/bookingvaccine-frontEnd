import React from "react";
import "../../assets/Style/style.css";
import { IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Overlaybookingvacinne from "../Overlay/Overlaybookingvacinne";

const TablePengguna = ({ key, nama, nik, jenisVaccine, Number }) => {
  return (
    <div
      className="d-flex TabelkelolaBerita justify-content-center TableColor-child">
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
          title="remove"
          color="error"
        >
          <CancelIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TablePengguna;

import React from "react";
import "../../assets/Style/style.css";
import { IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const TablePengguna = ({key, nama, nik, jenisVaccine, Number}) => {
  return (
    <div
      className="d-flex TabelDataBooking justify-content-center"
      style={{ backgroundcolor: "#D9D9D9" }}
    >
      <div className="col-1">{Number}</div>
      <div className="col-4">{nama}</div>
      <div className="col-2">{nik}</div>
      <div className="col-4">{jenisVaccine}</div>
      <div className="col-1 d-flex justify-content-center">
        <IconButton aria-label="Check">
          <CheckCircleIcon />
        </IconButton>
        <IconButton aria-label="Cancel">
          <CancelIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TablePengguna;

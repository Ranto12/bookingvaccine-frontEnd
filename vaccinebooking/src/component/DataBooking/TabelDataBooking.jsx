import React from "react";
import "../../assets/Style/style.css";
import { Button, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";
import Overlaybookingvacinne from "../Overlay/Overlaybookingvacinne";

const TablePengguna = ({ key, nama, nik, jenisVaccine, Number }) => {
  return (
    <div
      className="d-flex TabelDataBooking justify-content-center"
      style={{ backgroundColor: Number % 2 === 1 ? "#FFFFFF" : "#F7F7F7" }}
    >
      <div className="col-1">{Number}</div>
      <div className="col-4">{nama}</div>
      <div className="col-3  Pointer-Booking">
        <Overlaybookingvacinne
          nama={nama}
          nik={nik}
          jenisVaccine={jenisVaccine}
          Number={Number}
        />
      </div>
      <div className="col-3">{jenisVaccine}</div>
      <div className="col-1 d-flex justify-content-center">
        <div className=" d-flex p-2">
          <Button
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            sx={{
              minHeight: 0,
              minWidth: 0,
              backgroundColor: "#829CCC",
            }}
          >
            <SearchIcon style={{ color: "white" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TablePengguna;

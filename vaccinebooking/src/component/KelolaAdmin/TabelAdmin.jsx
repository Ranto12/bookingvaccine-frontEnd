import React from "react";
import "../../assets/Style/style.css";
import { IconButton } from "@mui/material";
import { RiPencilFill } from "react-icons/ri";
import { RiFileSearchFill } from "react-icons/ri";
import PopUpAdmin from "./PopUpAdmin";

const TabelAdmin = ({ Number, nama, hp, alamat, email, admin }) => {
  return (
    <div className="d-flex TabelkelolaBerita justify-content-center TableColor-child">
      <div className="col-1 ps-3">{Number}</div>
      <div className="col-3 ps-2">{nama}</div>
      <div className="col-2 ps-2">{alamat}</div>
      <div className="col-2 ps-2">{hp}</div>
      <div className="col-3 ps-2">{email}</div>
      <div className="col-1 d-flex justify-content-center">
        <PopUpAdmin data={admin} />
        <IconButton className="me-2">
          <RiPencilFill
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="edit"
          />
        </IconButton>
        <IconButton className="me-2">
          <RiFileSearchFill
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="view"
          />
        </IconButton>
      </div>
    </div>
  );
};

export default TabelAdmin;

// ok

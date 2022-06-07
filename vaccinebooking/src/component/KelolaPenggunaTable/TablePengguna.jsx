import React from "react";
import "../../assets/Style/style.css";
import { IconButton } from "@mui/material";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const TablePengguna = () => {
  return (
    <div className="d-flex TabelkelolaBerita justify-content-center TableColor-child">
      <div className="col-1">1</div>
      <div className="col-3">mr. Joko</div>
      <div className="col-3">PRJ</div>
      <div className="col-2">08123123786234</div>
      <div className="col-2">joko@gmail.com</div>
      <div className="col-1 d-flex justify-content-center ">
        <IconButton aria-label="Check">
          <RiPencilFill />
        </IconButton>
        <IconButton aria-label="Cancel">
          <MdDelete />
        </IconButton>
      </div>
    </div>
  );
};

export default TablePengguna;

// ok

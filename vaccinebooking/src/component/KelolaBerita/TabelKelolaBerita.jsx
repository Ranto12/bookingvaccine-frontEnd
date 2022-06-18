import React from "react";
import "../../assets/Style/style.css";
import { IconButton } from "@mui/material";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const TabelKelolaBerita = ({ Number, title, tanggal, author}) => {
  
  return (
    <div className="d-flex TabelkelolaBerita justify-content-center TableColor-child">
      <div className="col-1">{Number}</div>
      <div className="col-4">{title}</div>
      <div className="col-2">{author}</div>
      <div className="col-4">{tanggal}</div>
      <div className="col-1 d-flex justify-content-center ">
        <IconButton aria-label="Check" data-bs-toggle="tooltip" data-bs-placement="top" title="edit">
          <RiPencilFill  />
        </IconButton>
        <IconButton aria-label="Cancel" data-bs-toggle="tooltip" data-bs-placement="top" title="remove">
          <MdDelete />
        </IconButton>
      </div>
    </div>
  );
};

export default TabelKelolaBerita;

// ok

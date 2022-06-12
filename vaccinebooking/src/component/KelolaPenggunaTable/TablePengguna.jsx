import React from "react";
import "../../assets/Style/style.css";
import { IconButton } from "@mui/material";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const TablePengguna = ({key, nama, nohp, NIK, Number}) => {

  // function
  const handleDelete=()=>{
    <p>mantul</p>
  }
  return (
    <div className="d-flex TabelkelolaBerita  TableColor-child">
      <div className='col-1' >
              {Number}
            </div>
            <div className='col-4'>
              {nama}
            </div>
            <div className='col-3'>
              {nohp}
            </div>
            <div className='col-3'>
              {NIK}
            </div>
      <div className="col-1 d-flex  ">
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

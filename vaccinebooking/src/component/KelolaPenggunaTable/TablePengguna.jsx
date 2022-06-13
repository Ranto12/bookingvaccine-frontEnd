import React from "react";
import "../../assets/Style/style.css";
import { IconButton } from "@mui/material";
import { RiFileSearchFill } from "react-icons/ri";


const TablePengguna = ({key, nama, nohp, NIK, Number}) => {

  // function
  const handleDelete=()=>{
    <p>mantul</p>
  }
  return (
    <div className="d-flex TabelkelolaBerita  TableColor-child ">
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
      <div className="col-1 justify-content-center  ">
        <IconButton aria-label="Cancel" data-bs-toggle="tooltip" data-bs-placement="top" title="view" >
          <RiFileSearchFill />
        </IconButton>
      </div>
    </div>
  );
};

export default TablePengguna;

// ok

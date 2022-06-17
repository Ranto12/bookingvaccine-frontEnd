import React from "react";
import "../../assets/Style/style.css";
import { IconButton } from "@mui/material";
import { RiFileSearchFill } from "react-icons/ri";


const TablePengguna = ({ nama, nohp, NIK, Number}) => {
  return (
    <div className="d-flex TabelkelolaBerita justify-content-center TableColor-child ">
      <div className='col-1 ps-3' >
              {Number}
            </div>
            <div className='col-4 ps-2'>
              {nama}
            </div>
            <div className='col-3 ps-2'>
              {nohp}
            </div>
            <div className='col-3 ps-3'>
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

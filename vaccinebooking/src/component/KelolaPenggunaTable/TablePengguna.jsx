import React from "react";
import "../../assets/Style/style.css";
import PopUpPengguna from "./PopUpPengguna";

const TablePengguna = ({ key, nama, nohp, NIK, Number, data }) => {

  return (
    <div className="d-flex TabelkelolaBerita TableColor-child ">
      <div className="col-1">{Number}</div>
      <div className="col-4">{nama}</div>
      <div className="col-3">{nohp}</div>
      <div className="col-3">{NIK}</div>
      <div className="col-1 justify-content-center  ">
        <PopUpPengguna nama={nama} />
      </div>
    </div>
  );
};

export default TablePengguna;

// ok

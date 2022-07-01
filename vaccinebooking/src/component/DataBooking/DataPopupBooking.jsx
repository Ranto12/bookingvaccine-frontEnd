import React from "react";
import api from "../../API/data/post";
import { useState, useEffect } from "react";

export default function DataPopupBooking({ nama, nik, jenisVaccine, Number }) {
  // console.log(nama, "ini namanya")
  return (
    <div>
      <ul>
        <li>
          <h5>Nama</h5>
          <h6 className="data-popup"> {nama}</h6>
        </li>
        <li>
          <h5>NIK</h5>
          <h6 className="data-popup">{nik}</h6>
        </li>
        <li>
          <h5>Jenis Vaksin</h5>
          <h6 className="data-popup"> {jenisVaccine}</h6>
        </li>
      </ul>

      <div className="mt-5">
        <h5 className="title-table-datapopup  ms-4">Anggota Keluarga</h5>
        <div className="row mt-4 table-header table-popup-booking  justify-content-center ms-4 me-3">
          <div className="row mt-2 table-data justify-content-between">
            <div className="col-1">No</div>
            <div className="col-4">Nama</div>
            <div className="col-3">NIK</div>
          </div>
        </div>

        <div className="table-booking-table row Border-Color-Box me-3 ms-4">
          <div className="d-flex TabelDataBooking justify-content-between ">
            <div className="col-1">{Number}</div>
            <div className="col-4">{nama}</div>
            <div className="col-3  Pointer-Booking">{nik}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

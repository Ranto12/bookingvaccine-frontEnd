import React from "react";
import api from "./../../API/data/post";
import { useState, useEffect } from "react";

export default function DataPopupAdmin({ data }) {
  return (
    <div>
      <ul>
        <li>
          <h5>Nama Admin</h5>
          <h6 className="data-popup"> {data.nama}</h6>
        </li>
        <li>
          <h5>Alamat Lengkap</h5>
          <h6 className="data-popup"> John Doe</h6>
        </li>
        <li>
          <h5>Kategori</h5>
          <h6 className="data-popup"> John Doe</h6>
        </li>
        <li>
          <h5>No. Telp</h5>
          <h6 className="data-popup"> John Doe</h6>
        </li>
        <li>
          <h5>E-mail</h5>
          <h6 className="data-popup"> John Doe</h6>
        </li>
      </ul>
    </div>
  );
}

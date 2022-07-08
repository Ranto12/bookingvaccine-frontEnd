import React from "react";

export default function DataPopupAdmin({ Name ,hp ,email , role , alamat}) {
  return (
    <div>
      <ul>
        <li>
          <h5>Nama Admin</h5>
          <h6 className="data-popup">{Name} </h6>
        </li>
        <li>
          <h5>Alamat Lengkap</h5>
          <h6 className="data-popup">{alamat}</h6>
        </li>
        <li>
          <h5>Kategori</h5>
          <h6 className="data-popup">{role}</h6>
        </li>
        <li>
          <h5>No. Telp</h5>
          <h6 className="data-popup">{hp}</h6>
        </li>
        <li>
          <h5>E-mail</h5>
          <h6 className="data-popup">{email}</h6>
        </li>
      </ul>
    </div>
  );
}

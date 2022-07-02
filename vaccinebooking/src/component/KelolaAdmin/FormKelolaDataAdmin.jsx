import React from "react";
import "../../assets/Style/style.css";

export default function FormKelolaDataAdmin() {
  return (
    <div>
      <div className="mb-5">
        <div>
          <div>
            <label className="mt-4 fw-bold ">Nama Fasilitas Kesehatan</label>
          </div>
           <input  className="mt-2 p-1 rounded-2 input-Nama Background-White"  />
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <div>
              <h5> Alamat Lengkap </h5>
              <textarea className="w-100 rounded-3 input-are-area"></textarea>
            </div>
          </div>
          <div className="col-6">
            <div>
              <label className=" fw-bold ">No.Telp</label>
            </div>
            <input
              type="text"
              className=" input-kel-area w-100 mt-2 p-1 rounded-3"
            />
            <div className="pt-3">
              <h6> Email </h6>
              <textarea className=" w-100  rounded-3 email-area"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <input
            type="text"
            className="w-100 input-kelola mt-2 p-1 rounded-2"
          />
        </div>

        <div className="mt-3">
          <span>
            <input
              type="radio"
              id="Puskesmas"
              name="fav_language"
              value="Puskesmas"
            />
              <label for="Puskesmas">Puskesmas</label>
          </span>

          <span className="px-3">
            <input type="radio" id="RSUD" name="fav_language" value="RSUD" /> {" "}
            <label for="RSUD">RSUD</label>
          </span>
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

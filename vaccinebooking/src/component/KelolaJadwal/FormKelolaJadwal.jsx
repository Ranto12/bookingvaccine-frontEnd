import React from "react";
import { BsFileEarmarkImage } from "react-icons/bs";

export default function FormKelolaJadwal() {
  return (
    <div className="mb-5">
      <div>
        <div>
          <label className="mt-4 fw-bold ">Nama Fasilitas Kesehatan</label>
        </div>
        <input type="text" className="w-100 input-kelola mt-2 p-1 rounded-2" />
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

      <div className="mt-3">
        <div>
          <label className="fw-bold"> Jenis Vaksin</label>
        </div>

        <div className="mt-3">
          <label>
            <input type="radio" name="fav_language" value="Sinovac" />
            <span className="px-3">Sinovac</span>
          </label>

          <label>
            <input type="radio" name="fav_language" className="ms-3" value="Moderna" />
            <span className="px-3">Moderna</span>
          </label>

          <label>
            <input type="radio" name="fav_language"className="ms-3" value="Pfizer" />
            <span className="px-3">Pfizer</span>
          </label>

          <label>
            <input type="radio" name="fav_language" className="ms-3" value="Astra" />
            <span className="px-3">Astra</span>
          </label>

          <label>
            <input type="radio" name="fav_language" className="ms-3" value="Sinopharm"/>
            <span className="px-3">Sinopharm</span>
          </label>
        </div>
      </div>

      <div>
        <div className="mt-3">
          <label className="fw-bold">Stock</label>
        </div>
        <input type="number" className="mt-2 p-1 rounded-2 input-kel" />
        <span className="ms-3">Buah</span>
      </div>

      <div className="mt-3">
        <div>
          <label className="fw-bold mb-3"> Sesi </label>
        </div>
        <span className="">
          <input type="text" className="mt-2 p-1 rounded-2 input-kel" />
        </span>
        <span className="mx-4">-</span>
        <span>
          <input type="text" className="mt-2 p-1 rounded-2 input-kel" />
        </span>

        <span className="px-4">
          <input type="radio" value="selesai"   />
          <span className="ms-3">
          Selesai
          </span>
        </span>
      </div>

      <div className="row mt-4">
        <div className="col-4">
          <h5> Upload Gambar </h5>
          <div className="card img-input">
            <label>
              <div className="text-center img-card  ">
                <BsFileEarmarkImage className="h-50 w-50 " />
              </div>
              <input type="file" />
            </label>
            <p className="card-text text-center pt-2">
              Upload Foto Fasilitas Kesehatan Anda Ukuran FOto tidak Lebih dari
              10 mb
            </p>
          </div>
        </div>
        <div className="col-8">
          <div>
            <h5> Alamat Lengkap </h5>
            <textarea className="p-3 w-100 rounded-3 input-kel-area"></textarea>
          </div>
          <div>
            <h6> Link Google Maps </h6>
            <textarea className="p-3 w-100 rounded-3 input-kel-area"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
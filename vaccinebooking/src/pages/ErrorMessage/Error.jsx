import React from "react";
import errorLogo from "../../assets/img/404.png";

const Error = () => {
  return (
    <div className=" errorPages justify-content-center">
      <div className=" d-flex justify-content-center">
        <img src={errorLogo} alt="/"></img>
      </div>
      <div className=" d-flex justify-content-center py-5 ">
        <div className="titleErrorMessage">
          Maaf, halaman yang anda cari tidak ditemukan.
        </div>
      </div>
    </div>
  );
};

export default Error;
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { RiFileSearchFill } from "react-icons/ri";
import DataPopup from "./DataPopup";
import '../../assets/Style/style.css'
import { BsXCircle } from "react-icons/bs";

export default function PopUpPengguna({nama, number, nohp, nik, gender, email, tgl_lahir}) {
  // console.log(nama, "wow")
  
  return (
    <div>
      <div
        className="modal fade "
        id={"exampleModal" + number}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg    ">
          <div className="modal-content modPengguna">
            <div className="modal-header pop-title ">
              <h5 className="modal-title  text-light  " id="exampleModalLabel">
                Detail Pengguna
              </h5>
              <button type="button"
               className="btn-close rounded-circle me-3" 
               data-bs-dismiss="modal" 
               aria-label="Close"></button>

            </div>
            <div className="modal-body">
                <ul>
                    <DataPopup  nama={nama} nohp={nohp} nik={nik} gender={gender} email={email} tgl_lahir={tgl_lahir}  />
                </ul>
            </div>
          </div>
        </div>
      </div>

      <IconButton aria-label="Cancel" data-bs-toggle="modal" data-bs-placement="top" title="view" data-bs-target = {"#exampleModal" + number}  >
          <RiFileSearchFill />
        </IconButton>
    </div>
  );
}

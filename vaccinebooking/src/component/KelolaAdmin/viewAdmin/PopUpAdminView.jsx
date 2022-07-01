import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { RiFileSearchFill } from "react-icons/ri";
import DataPopupAdminView from "./DataPopupAdminView";
import '../../../assets/Style/style.css'
import { BsXCircle } from "react-icons/bs";

export default function PopUpAdminView() {
  
  return (
    <div>
      <div
        className="modal fade "
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg    ">
          <div className="modal-content modView">
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
                    <DataPopupAdminView  />
                </ul>
            </div>
          </div>
        </div>
      </div>

      <IconButton aria-label="Cancel" data-bs-toggle="modal" data-bs-placement="top" title="view" data-bs-target = "#exampleModal1"  >
          <RiFileSearchFill />
        </IconButton>
    </div>
  );
}

import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { RiPencilFill } from "react-icons/ri";
import DataPopupAdminEdit from "./DataPopupAdminEdit";
import '../../../assets/Style/style.css'
import { BsXCircle } from "react-icons/bs";

export default function PopUpAdminEdit() {
  
  return (
    <div>
      <div
        className="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg    ">
          <div className="modal-content modEdit ">
            <div className="modal-header pop-title ">
              <h5 className="modal-title  text-light  " id="exampleModalLabel">
               Edit Detail Admin
              </h5>
              <button type="button"
               class="btn-close rounded-circle me-3" 
               data-bs-dismiss="modal" 
               aria-label="Close"></button>

            </div>
            <div className="modal-body">
                <ul>
                    <DataPopupAdminEdit  />
                </ul>
            </div>
          </div>
        </div>
      </div>

      <IconButton aria-label="Cancel" data-bs-toggle="modal" data-bs-placement="top" title="edit" data-bs-target = "#exampleModal"  >
          <RiPencilFill />
        </IconButton>
    </div>
  );
}

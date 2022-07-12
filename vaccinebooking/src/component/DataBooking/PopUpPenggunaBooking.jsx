import { IconButton } from "@mui/material";
import DataPopup from "./DataPopupBooking";
import '../../assets/Style/style.css'
import { RiFileSearchFill } from "react-icons/ri";



export default function PopUpPenggunaBooking({namaUser, nikuser, jenisVaccine, Number,family, nameFamily, nikFamily }) {
  return (
    <div>
      <div
        className="modal fade "
        id={"exampleModal" + Number}
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
                    <DataPopup  
                  namaUser={namaUser} nikuser={nikuser} jenisVaccine={jenisVaccine}
                  nameFamily={nameFamily} nikFamily={nikFamily}
                    />
                </ul>
            </div>
          </div>
        </div>
      </div>

      <IconButton aria-label="Cancel" data-bs-toggle="modal" data-bs-placement="top" title="view" data-bs-target = {"#exampleModal" + Number} className="padding-none" >
          <RiFileSearchFill color="#829CCC" />
        </IconButton>
    </div>
  );
}

import { IconButton } from "@mui/material";
import { RiFileSearchFill } from "react-icons/ri";
import DataPopupAdmin from "./DataPopupAdmin";
import "../../assets/Style/style.css";

export default function PopUpAdmin({ Number ,Name ,hp ,email , role, alamat}) {
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
          <div className="modal-content">
            <div className="modal-header pop-title ">
              <h5 className="modal-title  text-light  " id="exampleModalLabel">
                Detail Admin
              </h5>
              <button
                type="button"
                className="btn-close rounded-circle me-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul>
                <DataPopupAdmin Number={Number} Name={Name} hp={hp} email={email} role={role} alamat={alamat} />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <IconButton aria-label="Cancel" data-bs-toggle="modal" data-bs-placement="top" title="view" data-bs-target = {"#exampleModal" + Number}  >
          <RiFileSearchFill />
        </IconButton>
    </div>
  );
}
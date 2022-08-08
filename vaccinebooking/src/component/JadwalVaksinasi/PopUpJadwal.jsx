import { IconButton } from "@mui/material";
import { RiFileSearchFill } from "react-icons/ri";
import DataPopupJadwal from "./DataPopUpJadwal";
import "../../assets/Style/style.css";

export default function DataPopUpjadwal({
  number,
  namaAdmin,
  alamatLengkap,
  jenisVaksin,
  stock,
  sesi,
}) {
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
                <DataPopupJadwal
                  number={number}
                  namaAdmin={namaAdmin}
                  alamatLengkap={alamatLengkap}
                  jenisVaksin={jenisVaksin}
                  stock={stock}
                  sesi={sesi}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <IconButton
        aria-label="Cancel"
        data-bs-toggle="modal"
        data-bs-placement="top"
        title="view"
        data-bs-target={"#exampleModal" + number}
      >
        <RiFileSearchFill />
      </IconButton>
    </div>
  );
}

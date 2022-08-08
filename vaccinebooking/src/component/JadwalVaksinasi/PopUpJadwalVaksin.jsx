import { IconButton } from "@mui/material";
import DataPopupJadwalVaksin from "./DataPopupJadwalVaksin"
import '../../assets/Style/style.css'
import { RiFileSearchFill } from "react-icons/ri";



export default function PopUpJadwalVaksin({namaFaskes, stock, jenis , Number, alamat, waktu, Idvaccine}) {
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
                    <DataPopupJadwalVaksin  
                  namaFaskes={namaFaskes} 
                  stock={stock} 
                  jenis={jenis}
                  alamat={alamat} 
                  waktu={waktu} 
                  Idvaccine={Idvaccine}
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

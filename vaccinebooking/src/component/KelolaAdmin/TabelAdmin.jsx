import React from "react";
import "../../assets/Style/style.css";
import { IconButton } from "@mui/material";
import { RiPencilFill } from "react-icons/ri";
import { RiFileSearchFill } from "react-icons/ri";
import PopUpAdmin from "./PopUpAdmin";
import { useNavigate } from "react-router-dom";

const TabelAdmin = ({Number ,Name ,hp ,email, role}) => {
  // console.log(Number)
  let navigate = useNavigate();
  const navigateEditadmin=()=>{
    navigate('/EditAdmin')
  }
  return (
    <div className="d-flex TabelkelolaBerita justify-content-center TableColor-child">
      <div className="col-1 ps-3">{Number}</div>
      <div className="col-3 ps-2">{Name}</div>
      <div className="col-2 ps-2"></div>
      <div className="col-2 ps-2">{hp}</div>
      <div className="col-3 ps-2">{email}</div>
      <div className="col-1 d-flex justify-content-center">
        <IconButton className="me-2">
          <RiPencilFill onClick={navigateEditadmin} />
        </IconButton >
            <PopUpAdmin Number={Number} Name={Name} hp={hp} email={email} role={role}/>
      </div>
    </div>
  );
};

export default TabelAdmin;

// ok

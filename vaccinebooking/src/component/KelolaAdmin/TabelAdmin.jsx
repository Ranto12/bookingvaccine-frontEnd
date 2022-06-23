import React from "react";
import "../../assets/Style/style.css";
import { IconButton } from "@mui/material";
import { RiPencilFill } from "react-icons/ri";
import { RiFileSearchFill } from "react-icons/ri";
import PopUpAdminEdit from "./editAdmin/PopUpAdminEdit";
import PopUpAdminView from "./viewAdmin/PopUpAdminView";

const TabelAdmin = ({Number, nama, hp, alamat, email}) => {
    return (
        <div className="d-flex TabelkelolaBerita justify-content-center TableColor-child">
            <div className="col-1 ps-3">{Number}</div>
            <div className="col-3 ps-2">{nama}</div>
            <div className="col-2 ps-2">{alamat}</div>
            <div className="col-2 ps-2">{hp}</div>
            <div className="col-3 ps-2">{email}</div>
            <div className="col-1 d-flex justify-content-center">
                < PopUpAdminEdit />
                < PopUpAdminView />
            </div>
        </div>
    );
};

export default TabelAdmin;

// ok

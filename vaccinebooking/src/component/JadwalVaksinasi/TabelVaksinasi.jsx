import React from "react";
import "../../assets/Style/style.css";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const TabelVaksinasi = () => {
    return (
        <div className="d-flex TabelJadwalVaksinasi justify-content-center p-0">
            <div className="col-1 ps-3">1</div>
            <div className="col-3 ps-2">lorem Ipsum</div>
            <div className="col-2 ps-2">100</div>
            <div className="col-3 ps-3">Sinovac</div>
            <div className="col-2 ps-1">8.00 WIB</div>
            <div className="col-1 d-flex justify-content-center">
                <div className="me-2">
                    <RiPencilFill />
                </div>
                <div className="me-2">
                    <MdDelete />
                </div>
            </div>
        </div>
    );
};

export default TabelVaksinasi;

// ok

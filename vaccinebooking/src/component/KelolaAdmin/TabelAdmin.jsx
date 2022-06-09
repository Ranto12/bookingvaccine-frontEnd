import React from "react";
import "../../assets/Style/style.css";
import { RiPencilFill } from "react-icons/ri";
import { RiFileSearchFill } from "react-icons/ri";

const TabelAdmin = () => {
    return (
        <div className="d-flex TabelAdmin justify-content-center p-0">
            <div className="col-1 ps-3">1</div>
            <div className="col-3 ps-2">jhon doe</div>
            <div className="col-2 ps-2">jln Beringin</div>
            <div className="col-2 ps-2">086678909187</div>
            <div className="col-3 ps-2">Loremipsum@gmail.com</div>
            <div className="col-1 d-flex justify-content-center">
                <div className="me-2">
                    <RiPencilFill />
                </div>
                <div className="me-2">
                    <RiFileSearchFill />
                </div>
            </div>
        </div>
    );
};

export default TabelAdmin;

// ok

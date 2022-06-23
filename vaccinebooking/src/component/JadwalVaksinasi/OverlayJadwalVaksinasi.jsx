import React from 'react'
import { useState } from 'react'

// style
import '../../assets/Style/PopUp.css';

// icon
import DataOverlay from './DataOverlay';
// import { IoMdCloseCircle } from 'react-icons/io'
// import { IconButton } from "@mui/material";
import { RiPencilFill } from "react-icons/ri";

function OverlayJadwalVaksinasi({ data }) {
    const [popUp, setPopUp] = useState(false);
    const handleClikPopUp = () => {
        setPopUp(!popUp)
    }
    if (popUp) {
        document.body.classList.add('popUp-active')
    } else {
        document.body.classList.remove('popUp-active')
    }
    // console.log("berhasil", data)
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
                    <div className="modal-content">
                        <div className="modal-header pop-title ">
                            <h5 className="modal-title  text-light  " id="exampleModalLabel">
                                Detail Pengguna
                            </h5>
                            <button type="button"
                                class="btn-close rounded-circle me-3"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>

                        </div>
                        <div className="modal-body">
                            <ul>
                                <DataOverlay data={data} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>

                < RiPencilFill />

            </div>

        </div>
    )
}

export default OverlayJadwalVaksinasi
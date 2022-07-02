import React from "react";
import "../../assets/Style/style.css";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { IconButton } from "@mui/material";
import OverlayJadwalVaksinasi from "./OverlayJadwalVaksinasi";
import { useState } from "react";
import { Identity } from "@mui/base";
import axios from "axios";


const TabelVaksinasi = ({ Number, nama, stock, jenis, waktu, key, image }) => {
    // initial state and variable
    const id = key;

    const [getData, setData] = useState({
        nama: "",
        stock: ""
    });
    const handleClick = (id, nama, stock) => {
        setData({
            nama: nama,
            stock: stock
        })
        console.log(getData)
    }

    const handleDelete =()=>{
        axios({
            method: "DELETE",
            url: `http://35.247.142.238/api/v1/session/${id}`
            
          })
          .then(res => {
            console.log("Res", res.data.message);
          })
          .catch(err =>{
            console.log("Error in request", err);
          })
    }


    return (
        <div className="d-flex TabelkelolaBerita justify-content-center TableColor-child">
            <div className="col-1 ps-3">{Number}</div>
            <div className="col-3 ps-2">{nama}</div>
            <div className="col-2 ps-2">{stock}</div>
            <div className="col-3 ps-3">{jenis}</div>
            <div className="col-2 ps-1">{waktu}  WIB - selesai</div>
            <div className="col-1 d-flex justify-content-center">


                <IconButton aria-label="Cancel" data-bs-toggle="modal" data-bs-placement="top" title="view" data-bs-target="#exampleModal" onClick={() => { handleClick(Number, nama, stock) }}>
                    <OverlayJadwalVaksinasi data={getData} />
                </IconButton>
                <IconButton className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="remove">
                    <MdDelete onClick={handleDelete} />
                </IconButton>
            </div>
        </div>
    );
};

export default TabelVaksinasi;

// ok

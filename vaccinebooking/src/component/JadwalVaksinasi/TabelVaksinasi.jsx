import React from "react";
import "../../assets/Style/style.css";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { IconButton } from "@mui/material";
// import OverlayJadwalVaksinasi from "./OverlayJadwalVaksinasi";
import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";


const TabelVaksinasi = ({ Number, idSesion,  nama, stock, jenis, waktu, image, tanggal, id_area, id_facility, Idvaccine , namaFaskes, alamat}) => {
    // initial state and variable
    let navigate = useNavigate();
    const handleNavigate=(e)=>{ 
        e.preventDefault();
        navigate("/EditJadwalVaksinasi", 
        {state:{
            stockVaccine: stock, 
            namaFaskes : namaFaskes, 
            tanggalVaccine : tanggal , 
            alamatFacility: alamat, 
            WaktuVaccine: waktu,
            idFacility: id_facility, 
            Idvaccine: Idvaccine,
            idSesion: idSesion,
            key : idSesion,
            idArea :id_area
        }});
    }
    const [getData, setData] = useState({
        nama: "",
        stock: ""
    });
    const handleClick = ( nama, stock) => {
        setData({
            nama: nama,
            stock: stock
        })
        console.log(getData)
    }
    // console.log(`id facility`, id_facility)
    
    return (
        <div className="d-flex TabelkelolaBerita justify-content-center TableColor-child title-das" >
            <div className="col-1 ps-3">{Number}</div>
            <div className="col-3 ps-2">{nama}</div>
            <div className="col-2 ps-2">{stock}</div>
            <div className="col-3 ps-3">{jenis}</div>
            <div className="col-2 ps-1">{waktu}  WIB - selesai</div>
            <div className="col-1 d-flex justify-content-center">
                <IconButton onClick={handleNavigate}>
                    < RiPencilFill  />
                </IconButton>
                <IconButton >
                    <MdDelete/>
                </IconButton>
            </div>
        </div>
    );
};

export default TabelVaksinasi;

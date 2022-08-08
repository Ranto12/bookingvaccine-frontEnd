import { IconButton } from "@mui/material";
import { RiPencilFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import PopUpJadwalVaksin from "./PopUpJadwalVaksin"

const TabelVaksinasi = ({ 
    Number, 
    idSesion,  
    nama, 
    stock, 
    jenis, 
    waktu, 
    tanggal, 
    id_area, 
    id_facility, 
    Idvaccine, 
    namaFaskes, 
    alamat}) => {
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

                <PopUpJadwalVaksin 
                namaFaskes={namaFaskes} 
                stock = {stock} 
                jenis = {jenis}
                alamat = {alamat} 
                waktu = {waktu} 
                Number = {Number}
                Idvaccine={Idvaccine} />
            </div>
        </div>
    );
};

export default TabelVaksinasi;

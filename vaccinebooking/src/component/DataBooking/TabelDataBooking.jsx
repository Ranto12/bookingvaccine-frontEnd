import "../../assets/Style/style.css";
import PopUpPenggunaBooking from "./PopUpPenggunaBooking";

const TablePengguna = ({ id, namaUser, nikuser, jenisVaccine, Number, nameFamily, nikFamily }) => {
  
  return (
    <div
      className="d-flex TabelkelolaBerita TableColor-child title-das">
            
            <div className="col-1  ">{Number}</div>
            <div className="col-4">{nameFamily ? nameFamily : namaUser}</div>
            <div className="col-3  Pointer-Booking">{nikFamily ? nikFamily : nikuser}</div>
            <div className="col-3">{jenisVaccine}</div>
            <div className="col-1 d-flex justify-content-center pb-1 pt-1 ">
            <PopUpPenggunaBooking key={id} namaUser={namaUser} nikuser={nikuser} 
            jenisVaccine={jenisVaccine} Number={Number}  nikFamily={nikFamily} nameFamily={nameFamily}/>
            </div>
    </div>
  );
};

export default TablePengguna;

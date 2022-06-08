import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import style from "../../assets/Style/Jadwal.module.css"
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillGridFill, BsBook } from "react-icons/bs";
import Tabel from "../../component/JadwalVaksinasi/TabelVaksinasi";
function Jadwal() {
    return (
        <>
            <div className="row  me-5" >
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className=" col-md-9 p-0 ">
                    <div className="row margin-rigth" style={{ color: "#C2C2C2" }} >
                        <div>
                            <p className={style.kelola}>
                                Kelola Data
                            </p>
                            <p className={style.jadwal}>
                                Jadwal Vaksinasi - Vasilitas Kesehatan
                            </p>
                        </div>


                        <div className="d-flex col-md-2 p-0 ">
                            <div className={style.tampilkan}>
                                <p>Tampilkan</p>
                            </div>
                            <div style={{ border: "1px solid", width: "34px", height: " 26px", textAlign: "center" }} >
                                <p>5</p>
                            </div>
                        </div>

                        <div className='d-flex col-md-4 p-0'>
                            <div style={{ marginRigth: "7px" }} >
                                <p >entri</p>
                            </div>
                            <div className={style.searchbar}>
                                <div className={style.svg}>
                                    <AiOutlineSearch />
                                </div>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex col-md-6 justify-content-end p-0">
                            <div className={style.button} >
                                <div className={style.bsbook}>
                                    <BsBook />
                                </div>
                                <div>
                                    <p>Buat data</p>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className='row mt-2 background-color-Table  justify-content-center mr-3'>
                        <div className='col-1'>
                            No
                        </div>
                        <div className='col-3'>
                            Nama Faskes
                        </div>
                        <div className='col-2'>
                            Stock
                        </div>
                        <div className='col-3'>
                            Jenis Vaksin
                        </div>
                        <div className='col-2'>
                            Waktu
                        </div>
                        <div className='col-1'>
                            Action
                        </div>
                    </div>
                    <div className='TabelkelolaBerita row  '>
                        <Tabel />
                    </div>

                </div>






            </div>
        </>
    )
}
export default Jadwal
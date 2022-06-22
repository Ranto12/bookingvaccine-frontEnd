import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
// style
import './../../assets/Style/style.css';

// icon
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillCalendarCheckFill } from 'react-icons/bs'

// component
import TabelVaksinasi from '../../component/JadwalVaksinasi/TabelVaksinasi';
import Select from '../../component/PageComponent/Select';

// Api
import api from './../../API/data/post'
import { responsiveProperty } from '@mui/material/styles/cssUtils';

const KelolaJadwal = () => {
    // initial state and valiables
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [count, setCount] = useState(1);
    const [jadwal, setJadwal] = useState([]);
    const [search, setSearch] = useState([]);


    const onChangeInput = (e) => {
        const inputt = e.target.value;
        setInput(inputt)
        console.log(inputt)
    }

    // const handleSearch = async (e) => {
    //     try {
    //         const response = await axios.get(`http://34.142.219.145:80/api/v1/session/search/${input}`)
    //         console.log(response, "data search")
    //         setSearch(response.data.data)
    //     } catch (error) {
    //         console.log("eror handle search")

    //     }


    // }

    // useEffect(() => {
    //     handleSearch();
    // }, [])

    // api
    useEffect(() => {
        const fetchPosts = async () => {
            axios
                .get("http://34.142.219.145:80/api/v1/session")
                .then((res) => {
                    console.log(res.data.data)
                    setJadwal(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                    console.log("Data tidak ketemu");
                    setError("Data tidak ketemu");
                });
        }

        fetchPosts();
    }, [])

    return (
        <>
            <div className='Fontcolor-Dasboard'>
                <div className='row me-5'>
                    <div className='col-3'>
                        <Sidebar />
                    </div>

                    {/* content */}
                    <div className='col-9 mt-5'>
                        <div className='row'>
                            {/* Title */}
                            <div className='col-10'>
                                <h1 className='fz-Head'>
                                    Kelola Data
                                </h1>
                                <h1 className='fz-Title'>
                                    Jadwal Vaksinasi - Fasilitas Kesehatan
                                </h1>
                            </div>

                            {/* handle */}
                        </div>

                        <div className='row Margin-top-Serch align-items-end d-flex'>
                            <div className='col-6 d-flex TotalPengguna'>
                                <div >
                                    <p className='Fz-16'>Total</p>
                                </div>
                                <div className='ms-2 Select15'>
                                    <Select onChangeInput={onChangeInput} />
                                </div>
                                <div className='d-flex'>
                                    <div>
                                        <p className='ms-2 Fz-16 me-2'>entri</p>
                                    </div>
                                    <div className='border border-dark d-flex w-100 BorderRadiusInline' >
                                        <div className='ms-3 me-3 PointerClikCss' >
                                            <AiOutlineSearch />
                                        </div>
                                        <div className='d-flex '>
                                            <input type="text" style={{ width: "251px", height: "24px", border: "none", borderRadius: "2px" }} placeholder="Cari" onChange={onChangeInput} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-6 d-flex justify-content-end'>
                                <div >
                                    <Link to='/jadwalvaksinasi' >
                                        <button className='Button-add-admin'>
                                            <BsFillCalendarCheckFill className='me-3' />
                                            Buat Jadwal
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* table */}
                        <div className='row mt-4 background-color-Table '>
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
                        {/* isi table */}
                        <div className='TabelkelolaBerita row Border-Color-Box'>
                            {jadwal?.filter((val) => {
                                if (input == "") {
                                    return val
                                }
                                else if (val.vaccine_mapped.vaccine_name.toLowerCase().includes(input.toLocaleLowerCase()) || val.health_facilities_dao_mapped.health_facilities_name.toLowerCase().includes(input.toLocaleLowerCase())) {
                                    return val
                                }

                            }).map((data, index) => {
                                return (
                                    <TabelVaksinasi Number={index + 1} key={data.id_session} nama={data.health_facilities_dao_mapped.health_facilities_name} stock={data.stock} jenis={data.vaccine_mapped.vaccine_name} waktu={data.start_time} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default KelolaJadwal

import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { Link } from 'react-router-dom';

// style
import './../../assets/Style/style.css';

// icon
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilterLeft } from 'react-icons/bs';
import { RiFileSearchFill } from 'react-icons/ri';
import { IoPersonAddSharp } from 'react-icons/io5'

import TabelAdmin from '../../component/KelolaAdmin/TabelAdmin';
import api from '../../API/data/post'

const KelolaAdmin = () => {
    // initial state and valiables
    const [input, setInput] = useState("");
    const [count, setCount] = useState(1);
    const [admin, setAdmin] = useState([]);

    const onChangeInput = (e) => {
        const input = e.target.value;
        setInput(input)
    }

    const handleSearch = () => {
        setCount(1 + input)

    }

    useEffect(() => {
        handleSearch();
    }, [])

    // API

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get("/admin")
                setAdmin(response.data);
            } catch (err) {
                if (err.response) {
                    //not in the 200 response range
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
                } else {
                    console.log(`Error ${err.message}`);
                }
            }
        }
        fetchPosts();
    }, [])

    return (
        <div className='Fontcolor-Dasboard'>
            <div className='row me-5'>
                <div className='col-3'>
                    <Sidebar />
                </div>
                <div className='col-9 mt-5'>
                    <div className='row'>
                        <div className='col-6'>
                            <h1 className='fz-Head'>
                                Kelola Data
                            </h1>
                            <h1 className='fz-Title'>
                                Admin
                            </h1>
                        </div>
                    </div>

                    {/* filtering */}
                    <div className='row d-flex Margin-top-Serch align-items-end'>
                        <div className='col-6 d-flex TotalPengguna ' >
                            <div>
                                <p className='Fz-16'>Total</p>
                            </div>
                            <div className='ms-2 Select15'>
                                <select name="jumlahArtiker " id="jumlahArtikel Select15" >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                </select>
                            </div>
                            <div className='d-flex'>
                                <div>
                                    <p className='ms-2 Fz-16 me-2'>entri</p>
                                </div>
                                <div className='border border-dark d-flex w-100 BorderRadiusInline' >
                                    <div className='ms-3 me-3' style={{ cursor: "pointer", border: "none" }} onClick={handleSearch}>
                                        <AiOutlineSearch />
                                    </div>
                                    <div className='d-flex'>
                                        <input type="text" style={{ width: "251px", height: "24px", border: "none", borderRadius: "2px" }} placeholder="Cari" onChange={onChangeInput} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>

                            <Link className='text-decoration-none Fontcolor-Dasboard  d-flex' to='/AddAdmin' >
                                <div className='d-flex ms-2 justify-content-center LinkText' style={{ border: "1px solid", height: "35px", width: "124px", borderRadius: "10px", paddingLeft: "8px", paddingRight: "8px", background: "#7BD9E8" }}>

                                    <div className='me-1' style={{ marginTop: "2px", }}>
                                        < IoPersonAddSharp />
                                    </div>
                                    <p style={{ fontSize: "14px", marginLeft: "1px", marginTop: "5px", }}>
                                        Tambahkan
                                    </p>

                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* tabel */}
                    <div className='row mt-4 background-color-Table  justify-content-center'>
                        <div className='col-1'>
                            No
                        </div>
                        <div className='col-3'>
                            Nama Admin
                        </div>
                        <div className='col-2'>
                            Alamat
                        </div>
                        <div className='col-2'>
                            No Telp
                        </div>
                        <div className='col-3'>
                            Email
                        </div>
                        <div className='col-1'>
                            Action
                        </div>
                    </div>

                    {/* isi tabel */}
                    <div className='TabelAdmin row Border-Color-Box'>
                        {admin.map((data, index) => {
                            return (
                                <TabelAdmin key={data.id} Number={index + 1} nama={data.nama} alamat={data.alamat} hp={data.noHp} email={data.email} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KelolaAdmin
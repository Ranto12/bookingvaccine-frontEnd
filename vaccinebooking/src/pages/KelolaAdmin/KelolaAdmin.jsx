import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { Link } from 'react-router-dom';

// style
import './../../assets/Style/style.css';

// icon
import { AiOutlineSearch } from 'react-icons/ai';
import { IoPersonAddSharp } from 'react-icons/io5'

import TabelAdmin from '../../component/KelolaAdmin/TabelAdmin';
import api from '../../API/data/post'
import Select from '../../component/PageComponent/Select';

const KelolaAdmin = () => {
    // initial state and valiables
    const [input, setInput] = useState("");
    const [admin, setAdmin] = useState([]);
    const [ setSize] = useState(15);

    const onChangeInput = (e) => {
        const input = e.target.value;
        setInput(input)
    }

    // API 
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get("/users/roles/ADMIN", {
                    headers:{
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }})
                setAdmin(response.data.data);
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
                                <Select setSize={setSize} />
                            </div>
                            <div className='d-flex'>
                                <div>
                                    <p className='ms-2 Fz-16 me-2'>entri</p>
                                </div>
                                <div className='border border-dark d-flex w-100 BorderRadiusInline' >
                                    <div className='ms-3 me-3' style={{ cursor: "pointer", border: "none" }}>
                                        <AiOutlineSearch />
                                    </div>
                                    <div className='d-flex'>
                                        <input type="text" style={{ width: "251px", height: "24px", border: "none", borderRadius: "2px" }} placeholder="Cari" onChange={onChangeInput} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>
                           <div>
                           <Link to='/AddAdmin' >
                                <button className='Button-add-admin'>
                                    <IoPersonAddSharp className='me-3' />
                                    Tambahkan
                                </button>
                            </Link>
                           </div>
                        </div>
                    </div>
                    {/* tabel */}
                    {admin.length !==0 ? (
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
                    ):(
                        null
                    )}

                    {/* isi tabel */}
                    <div className={admin.length !==0 ? 'TabelAdmin row Border-Color-Box' : ""}>
                        { admin && 
                        admin.filter((val)=>{
                            if(input === ""){
                                return val
                            } else if(val.first_name?.toLowerCase().includes(input.toLocaleLowerCase()) || 
                                        val.address?.toLowerCase().includes(input.toLocaleLowerCase()) ||
                                        val.email?.toLowerCase().includes(input.toLocaleLowerCase()) ||
                                        val.no_phone?.toLowerCase().includes(input.toLocaleLowerCase()) 
                                        ){
                                return val
                            } else {
                                return null;
                            }
                        }).map((data, index)=>{
                            return(
                                <TabelAdmin 
                                key={data.id_user} id={data.id_user}
                                Number={index +1} Name={data.first_name} 
                                hp={data.no_phone} email={data.email} role={data.roles} 
                                alamat={data.address}  tanggalLahir={data.birth_date}
                                gender={data.gender} pw={data.password} username={data.username}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KelolaAdmin
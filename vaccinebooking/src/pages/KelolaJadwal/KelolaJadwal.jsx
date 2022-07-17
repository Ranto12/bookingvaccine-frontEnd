import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
// style
import './../../assets/Style/style.css';

// icon
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillCalendarCheckFill } from 'react-icons/bs'

// component
import TabelVaksinasi from '../../component/JadwalVaksinasi/TabelVaksinasi';
import Select from '../../component/PageComponent/Select';
import Search from '../../component/Basing/Search';


// Api
import api from './../../API/data/post'
import Pagenation from '../../component/Pagenation/Pagenation';
import Spiner from '../../assets/Spinners/Spinners';

const KelolaJadwal = () => {
    // initial state and valiables
    const [input, setInput] = useState("");
    const [jadwal, setJadwal] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(15);
    const [lengthPage, setLengthPage] = useState(0);
    const [loading, setLoading] = useState(true);

    // function
    const onChangeInput = (e) => {
        const inputt = e.target.value;
        setInput(inputt)
    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get(`session/paging?page=${page}&size=${size}`, {
                    headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
                )
                setJadwal(response.data.data.content);
                setLengthPage(response.data.data.totalPages);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false)
            }
        }
        fetchPosts();
    }, [size, page])
    if (loading) {
        return <Spiner />
    }
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
                                    <p className='Fz-16'>Tampilkan</p>
                                </div>
                                <div className='ms-2 Select15'>
                                    <Select setSize={setSize} />
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
                                            <input type="text" style={{ maxWidth: "251px", width:"251px", minWidth:"150px", height: "24px", border: "none", borderRadius: "2px" }} placeholder="Cari" onChange={onChangeInput} />
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
                        {jadwal.length !== 0 ? (
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
                        ):(null)}
                        {/* isi table */}
                        <div className={jadwal.length !==0 ? 'TabelkelolaBerita row Border-Color-Box' : ""}>
                            {jadwal &&
                                jadwal?.filter((val) => {
                                    if (input === "") {
                                        return val
                                    }
                                    else if (val.vaccine_mapped.vaccine_name?.toLowerCase().includes(input.toLocaleLowerCase()) ||
                                        val.health_facilities_dao_mapped.health_facilities_name?.toLowerCase().includes(input.toLocaleLowerCase()) ||
                                        val.start_time?.toLowerCase().includes(input.toLocaleLowerCase())) {
                                        return val
                                    }
                                    else {
                                        return null;
                                    }

                                }).map((data, index) => {
                                    return (
                                        < TabelVaksinasi
                                            Number={index + 1
                                            }
                                            key={data.id_session}
                                            idSesion={data.id_session}
                                            nama={data.health_facilities_dao_mapped.health_facilities_name}
                                            stock={data.stock}
                                            jenis={data.vaccine_mapped.vaccine_name}
                                            waktu={data.start_time}
                                            image={data.file_name}
                                            tanggal={data.start_date}
                                            id_area={data.area_mapped.id_area}
                                            id_facility={data.health_facilities_dao_mapped.id_health_facilities}
                                            Idvaccine={data.vaccine_mapped.id_vaccine}
                                            namaFaskes={data.health_facilities_dao_mapped.health_facilities_name}
                                            alamat={data.health_facilities_dao_mapped.address_health_facilities}
                                        />
                                    )
                                })}
                        </div>
                        {jadwal.length > 0 ? (
                            <Pagenation 
                            data={jadwal} 
                            size={size} 
                            page={page} 
                            setPage={setPage} 
                            lengthPage={lengthPage}/>
                        ):(
                            null
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default KelolaJadwal
import React, { useEffect, useState } from 'react'

// icons
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotifications} from 'react-icons/io'
import {RiAdminFill} from 'react-icons/ri'

// style
import './../../assets/Style/style.css'

// component
import Sidebar from '../../component/Sidebar/Sidebar';
import LengthPenguna from '../../component/Dasboard/APIrequired/Length'

const Dashboard = () => {
    // initial state and valiables
    const [input, setInput] = useState("");
    const [count, setCount] = useState(1);

    const onChangeInput = (e) =>{
        const input = e.target.value;
        setInput(input)
    }

    const handleSearch=() =>{
        setCount(1+input)
    }

    useEffect(()=>{
        handleSearch();
    },[])
  return (
    <div >
      <div className='row Fontcolor-Dasboard me-5'>
        
        {/* sidebar */}
        <div className='col-3'>
            <Sidebar/>
        </div>

        {/* content */}
        <div className='col-9 mt-5'>
            <div className='row'>
                <div className='col-5'>
                    <div className=''>
                        <h1 className='fz-Head'>
                            Selemat Datang,
                        </h1>
                        <h1 className='fz-Title'>
                            Super Admin
                        </h1>
                    </div>
                </div>
                {/* <div className='col-7'>
                    <div className='justify-content-center d-flex align-items-center mb-6'>
                        <div className='d-flex '>
                            <div className='border border-dark d-flex w-100' >
                                <div className='' style={{cursor:"pointer"}} onClick={handleSearch}>
                                    <AiOutlineSearch/>
                                </div>
                                <div>
                                    <input type="text" style={{width:"439px", border:"none"}} placeholder="Cari" onChange={onChangeInput}/>
                                </div>
                            </div>
                            <div className='w-60 ms-3'>
                                <IoMdNotifications/>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* total admin */}
            <div className='row'>
                <div className='col-6'>
                    <div className='Card-TotalAdmin'>
                        <div className='card' 
                            style={{width:"488.23px", 
                            height:"360px",
                            borderRadius:"20px", 
                            marginTop:"30px", 
                            paddingLeft:"36.54px",
                            paddingTop:"30px",
                            background: "#D9D9D9",
                            position: "absolute"
                            }}>
                            <div className='d-flex align-items-center'>
                                <div className='me-4 '><RiAdminFill /></div>
                                <div style={{fontSize:"24px"}}>Total Admin</div>
                            </div>
                        <div style={{fontSize:"64px" , marginTop:"54px", marginBottom:"24px"}}>
                            100
                        </div>
                        <div style={{fontSize:"35px"}}>
                            Pengelola
                        </div>
                        </div>
                    </div>
                </div>

                {/* total pengguna */}
                <div className='col-6'>
                    <div className='card' 
                        style={{width:"488.23px", 
                        height:"360px",
                        borderRadius:"20px", 
                        marginTop:"30px", 
                        paddingLeft:"33.5px",
                        paddingTop:"30px",
                        background: "#D9D9D9"
                        }}>
                    <div className='d-flex align-items-center'>
                        <div className='me-4'>
                            <RiAdminFill />
                        </div>
                        <div style={{fontSize:"24px"}}>
                            Total Pengguna
                        </div>
                    </div>
                    <div style={{fontSize:"64px" , marginTop:"54px", marginBottom:"24px"}}>
                        <LengthPenguna/>
                        </div>
                    <div style={{fontSize:"35px"}}>
                        Pengguna
                    </div>
                    </div>
                </div>
            </div>

            {/* fasilitas kesehatan */}
            <div className='row'>
                <div className='col-6'>
                    <div className='card' 
                        style={{width:"488.23px", 
                        height:"360px",
                        borderRadius:"20px", 
                        marginTop:"38px", 
                        paddingLeft:"36.54px",
                        paddingTop:"30px",
                        background: "#D9D9D9"
                        }}>
                        <div className='d-flex align-items-center'>
                            <div className='me-3'>
                                <RiAdminFill />
                            </div>
                            <div style={{fontSize:"24px"}}>
                                Fasilitas kesehatan
                            </div>
                        </div>
                        <div className='d-flex mt-5'>
                            <div className='card background-color-card-rsud' style={{width:"194.89px", height:"192px", marginRight:"32.5px", alignItems:"center" , justifyContent:"center"}}>
                                <div style={{fontSize:"64px"}}>
                                    10
                                </div>
                                <div style={{fontSize:"24px"}}>
                                    RSUD
                                </div>
                            </div>
                            <div className='card background-color-card-rsud' style={{width:"194.89px", height:"192px", marginRight:"32.5px", alignItems:"center" , justifyContent:"center"}}>
                                <div style={{fontSize:"64px"}}>
                                    10
                                </div>
                                <div style={{fontSize:"24px"}}>
                                    PUSKESMAS
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

                {/* total kelurahan */}
                <div className='col-6'>
                    <div className='Card-TotalAdmin'>
                        <div className='card' 
                            style={{width:"488.23px", 
                            height:"360px",
                            borderRadius:"20px", 
                            marginTop:"30px", 
                            paddingLeft:"36.54px",
                            paddingTop:"30px",
                            background: "#D9D9D9"
                            }}>
                                <div className='d-flex align-items-center'>
                                    <div className='me-3'>
                                        <RiAdminFill />
                                    </div>
                                    <div style={{fontSize:"24px"}}>
                                        Total Kelurahan
                                    </div>
                                </div>
                                <div style={{fontSize:"64px" , marginTop:"54px", marginBottom:"24px"}}>
                                    100
                                </div>
                                <div style={{fontSize:"35px"}}>
                                    Kelurahan
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotifications} from 'react-icons/io'
import {RiAdminFill} from 'react-icons/ri'

const Dasboard = () => {
  return (
    <div className='container mt-5 ' style={{color:"#AAA9A9"}}>
      <div className='row'>
        <div className='col-3'>
          col 1
        </div>
        <div className='col-5 '>
          <h1 style={{fontSize:"24px"}}>Selemat Datang,</h1>
          <h1 style={{fontSize:"36px"}}>Super Admin</h1>
        </div>
        <div className='col-4 justify-content-center d-flex align-items-center'>
          <div className=''>
            <div className='border border-dark d-flex w-100 ' >
              <div className='ms-3 me-3' style={{cursor:"pointer"}} onClick={()=>{}}>
              <AiOutlineSearch/>
              </div>
              <div>
                <input type="text" style={{width:"292px", border:"none"}} placeholder="Cari"/>
              </div>
            </div>
          </div>
          <div className='w-60 ms-3'>
          <IoMdNotifications/>
          </div>
        </div>

      </div>
      {/* card */}
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-4 d-flex'>
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
              <div className='me-4 '><RiAdminFill /></div>
              <div style={{fontSize:"24px"}}>Total Admin</div>
            </div>
            <div style={{fontSize:"64px" , marginTop:"54px", marginBottom:"24px"}}>100</div>
            <div style={{fontSize:"35px"}}>Pengelola</div>
          </div>
        </div>
        <div className='col-6 d-flex'>
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
              <div className='me-4'><RiAdminFill /></div>
              <div style={{fontSize:"24px"}}>Total Pengguna</div>
            </div>
            <div style={{fontSize:"64px" , marginTop:"54px", marginBottom:"24px"}}>100</div>
            <div style={{fontSize:"35px"}}>Pengguna</div>
          </div>
        </div>
        {/* card */}
      </div>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-4 d-flex'>
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
              <div className='me-4'><RiAdminFill /></div>
              <div style={{fontSize:"24px"}}>Total Admin</div>
            </div>
            <div className='d-flex'>
            <div className='card' style={{width:"194.89px", height:"192px"}}></div>
            <div className='card' style={{width:"194.89px", height:"192px"}}></div>
            </div>
            
          </div>
        </div>
        <div className='col-6 d-flex'>
          <div className='card' 
          style={{width:"488.23px", 
          height:"360px",
          borderRadius:"20px", 
          marginTop:"38px", 
          paddingLeft:"33.5px",
          paddingTop:"30px",
          background: "#D9D9D9"
          }}>
            <div className='d-flex align-items-center'>
              <div className='me-4'><RiAdminFill /></div>
              <div style={{fontSize:"24px"}}>Total Pengguna</div>
            </div>
            <div style={{fontSize:"64px" , marginTop:"54px", marginBottom:"24px"}}>100</div>
            <div style={{fontSize:"35px"}}>Pengguna</div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Dasboard
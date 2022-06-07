import React, { useState, useEffect } from 'react'

//style 
import '../../assets/Style/style.css'
import Sidebar from '../../component/Sidebar/Sidebar';

// icon
import {FaUserPlus} from 'react-icons/fa'
import {AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import TabelKelolaBerita from '../../component/KelolaBerita/TabelKelolaBerita';
import TablePengguna from '../../component/KelolaPenggunaTable/TablePengguna';




const KelolaPengguna = () => {
  const [input, setInput] = useState();
  const [count, setCount] = useState(1);


  // funtion
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
    <>
    <div className='Fontcolor-Dasboard'>
      <div className='row me-5'>
        <div className='col-3'>
          <Sidebar/>
        </div>

        {/* content */}

        <div className='col-9 mt-5'>
          <div className='row'>
            {/* Title */}
            <div className='col-6'>
              <h1 className='fz-Head'>
                Kelola Data
              </h1>
              <h1 className='fz-Title'>
                Pengguna
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
                <select name="JumlahPengguna" id="JumlahPengguna">
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
                  <div className='ms-3 me-3 PointerClikCss' onClick={handleSearch}>
                    <AiOutlineSearch/>
                  </div>
                  <div className='d-flex '>
                    <input type="text" style={{width:"251px", height:"24px", border:"none", borderRadius:"2px"}} placeholder="Cari" onChange={onChangeInput}/>
                  </div>
                </div>                                
              </div>
            </div>

            <div className='col-6 d-flex justify-content-end'>
            <div className='d-flex ms-2 '  style={{border:"1px solid", height:"26px", borderRadius:"10px", paddingLeft:"8px", paddingRight:"8px", background:"#D9D9D9"}}>
                  <Link className='text-decoration-none Fontcolor-Dasboard LinkText d-flex' to='/buatBerita' >
                    <div className='me-1' >
                      <FaUserPlus/>
                    </div>
                      <p style={{fontSize:"14px", marginLeft:"1px"}}>
                        Add
                       </p>
                  </Link>
                </div>
            </div>
          </div>

          {/* table  */}
          <div className='row mt-4 background-color-Table  justify-content-center'>
            <div className='col-1'>
              No
            </div>
            <div className='col-3'>
              Nama Admin
            </div>
            <div className='col-3'>
              Alamat
            </div>
            <div className='col-2'>
              No. Telp
            </div>
            <div className='col-2'>
              Email
            </div>
            <div className='col-1'>
              Action
            </div>
          </div>
          {/* isi table */}
          <div className='TabelkelolaBerita row'>
            <TablePengguna/>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default KelolaPengguna
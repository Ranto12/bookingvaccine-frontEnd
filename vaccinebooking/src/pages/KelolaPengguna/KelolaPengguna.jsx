import React, { useState, useEffect } from 'react'

// import component
import Select from '../../component/PageComponent/Select';
import TablePengguna from '../../component/KelolaPenggunaTable/TablePengguna';

//style 
import '../../assets/Style/style.css'
import Sidebar from '../../component/Sidebar/Sidebar';

// icon
import {AiOutlineSearch } from 'react-icons/ai';

// Api
import api from './../../API/data/post'
import PopUpPengguna from '../../component/KelolaPenggunaTable/PopUpPengguna';

const KelolaPengguna = () => {
  const [input, setInput] = useState();
  const [count, setCount] = useState(0);
  const [dataPengguna, setDataPengguna] = useState([]);


  // funtion
  const onChangeInput = (e) =>{
    const input = e.target.value;
    setInput(input)
  }
  
  const handleSearch=() =>{
    setCount(1+input)
  }
 
  useEffect(()=>{
    const fetchPosts = async()=>{
        try{
            const response = await api.get("/pengguna")
            setDataPengguna(response.data);
        } catch(err){
            if(err.response){
                //not in the 200 response range
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            }else{
                console.log(`Error ${err.message}`);
            }
        }
    }
    fetchPosts();
},[])
// // console.log(`length, ${dataPengguna.length}`)
// console.log(dataPengguna)


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
                <Select onChangeInput={onChangeInput}/> 
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
              
            </div>
          </div>

          {/* table  */}
          <div className='row mt-4 background-color-Table '>
            <div className='col-1'>
              No
            </div>
            <div className='col-4'>
              Nama Pengguna
            </div>
            <div className='col-3'>
              No. Hp
            </div>
            <div className='col-3'>
              Nik
            </div>
            <div className='col-1'>
              Action
            </div>
          </div>
          {/* isi table */}
          <div className='TabelkelolaBerita row Border-Color-Box mb-2'>
            {dataPengguna.map((data, index)=>{
              return(
                <TablePengguna Number={index + 1} key={data.id} nama={data.nama} nohp = {data.noHp}  NIK={data.nik} alamat = {data.alamat} pengguna = {data}   />
              )

            })}
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default KelolaPengguna
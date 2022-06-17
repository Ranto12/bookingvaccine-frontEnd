import React from 'react'
import { useState } from 'react'

// style
import '../../assets/Style/PopUp.css';

// icon
import {IoMdCloseCircle} from 'react-icons/io'
import TableDetailPemesanan from '../Popup';

const Overlaybookingvacinne = ({nama, nik, jenisVaccine, Number}) => {
    const [popUp, setPopUp] = useState(false);

    // funtion
    const handleClikPopUp =()=>{
        setPopUp(!popUp)
    }
    if(popUp){
         document.body.classList.add('popUp-active')
        }else{
            document.body.classList.remove('popUp-active')
    }
  return (
    <div >
        <div onClick={handleClikPopUp} className="btn-popUp"> {nik}</div>

        {popUp && (
            <div className='popUp'>
                <div onClick={handleClikPopUp} className="overlay"></div>
                    <div className='row justify-content-center '>
                        <div className='col-9 d-flex justify-content-center '>
                            <div className=' popUp-content Absolute-position '>
                                <div className='row mb-5 modal-dialog-centered'>
                                    <div className='justify-content-center'>
                                    <div className='title-PopUp'>
                                        <div className=' justify-content-center me-5 ms-5 mt-3 mb-3'>Detail Pemesanan
                                        <IoMdCloseCircle onClick={handleClikPopUp}/>
                                        </div>
                                    </div>
                                    <div className='title-Head mt-5 me-5 ms-5'>Nama</div>
                                    <div className='title-body me-5 ms-5'>{nama}</div>
                                    <div className='Br-inline me-5 ms-5'></div>
                                    <div className='title-Head me-5 ms-5'>NIK</div>
                                    <div className='title-body me-5 ms-5'>{nik}</div>
                                    <div className='Br-inline me-5 ms-5'></div>
                                    <div className='title-Head me-5 ms-5'>Jenis Vaksin</div>
                                    <div className='title-body me-5 ms-5'>{jenisVaccine}</div>
                                    <div className='Br-inline me-5 ms-5'></div>
                                    <div className='title-Head me-5 ms-5 m-3'>Anggota keluarga</div>
                                    <div className='title-body  me-5 ms-5 '>
                                       <div className='row Fz-detail-pemesanan bg-title-body align-items-center pt-2 pb-2'>
                                        <div className='col-2'>No</div>
                                        <div className='col-5'>Nama</div>
                                        <div className='col-5'>NIK</div>
                                       </div>
                                            <TableDetailPemesanan nama={nama} nik={nik} jenisVaccine={jenisVaccine} Number={Number}/>
                                    </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
        )}
        <div>
            
        </div>
    </div>
  )
}

export default Overlaybookingvacinne
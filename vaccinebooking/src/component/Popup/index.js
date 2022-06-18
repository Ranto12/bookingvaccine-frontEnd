import React from 'react'


const TableDetailPemesanan = ({nama, nik, jenisVaccine, Number}) => {
  return (
    <div className='row Family-pemesanan ps-3 pe-3'>
        <div className='col-2'>{Number}</div>
        <div className='col-5'>{nama}</div>
        <div className='col-5'>{nik}</div>
    </div>
  )
}

export default TableDetailPemesanan
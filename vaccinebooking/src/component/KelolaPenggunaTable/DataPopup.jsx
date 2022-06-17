import React from 'react'
import api from './../../API/data/post'
import  { useState, useEffect } from 'react'

export default function DataPopup({data}) {
  return (
    <div>
    <ul>
      <li>
        <h5>Nama</h5>
        <h6 className='data-popup'> {data.nama}</h6>
      </li>
      <li>
        <h5>Alamat</h5>
        <h6 className='data-popup'> John Doe</h6>
      </li>
      <li>
        <h5>Nohp</h5>
        <h6 className='data-popup'> John Doe</h6>
      </li>
      <li>
        <h5>Nik</h5>
        <h6 className='data-popup'> John Doe</h6>
      </li>
      <li>
        <h5>Alamat</h5>
        <h6 className='data-popup'> John Doe</h6>
      </li>
      <li>
        <h5>Nohp</h5>
        <h6 className='data-popup'> John Doe</h6>
      </li>
      <li>
        <h5>Nik</h5>
        <h6 className='data-popup'> John Doe</h6>
      </li>
    </ul>  
    </div>
  )
}

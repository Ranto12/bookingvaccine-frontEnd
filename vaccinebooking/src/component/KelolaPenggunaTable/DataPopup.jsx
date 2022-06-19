import React from 'react'
import api from './../../API/data/post'
import  { useState, useEffect } from 'react'

export default function DataPopup({nama}) {
  return (
    <div>
    <ul>
      <li>
        <h5>Nama</h5>
        <h6 className='data-popup'> jancok</h6>
      </li>
      <li>
        <h5>Tanggal Lahir</h5>
        <h6 className='data-popup'>{nama}</h6>
      </li>
      <li>
        <h5>Jenis Kelamin</h5>
        <h6 className='data-popup'> {nama}</h6>
      </li>
      <li>
        <h5>Email</h5>
        <h6 className='data-popup'> </h6>
      </li>
      <li>
        <h5>NIK</h5>
        <h6 className='data-popup'> {nama}</h6>
      </li>
      <li>
        <h5>No. Telp</h5>
        <h6 className='data-popup'>{nama}</h6>
      </li>
    </ul>  
    </div>
  )
}

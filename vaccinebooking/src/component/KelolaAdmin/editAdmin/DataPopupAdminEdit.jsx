import React from 'react'
import api from '../../../API/data/post'
import  { useState, useEffect } from 'react'

export default function DataPopupAdminEdit() {
  return (
    <div>
    <ul>
      <li>
        <h5>Nama Fasilitas Kesehatan</h5>
        <input type="text" className='editpop border-0' />
      </li>
      <li>
        <h5>Alamat Lengkap</h5>
        <input type="text" className='editpop border-0 ' />
      </li>
  
      <li className='popRadio '>
        <h5>Kategori</h5>
        <label className='data-popup-radio mx-2 mt-2 ' >
        <input type="radio" id="RSUD" name="fav_language"     /> RSUD
        </label>

        <label className='data-popup-radio mx-2'>
        <input type="radio" id="PUSKESMAS" name="fav_language"  /> PUSKESMAS
        </label>
      </li>

      <li>
        <h5>No. TELP</h5>
        <input type="text" className='editpop border-0 ' />
      </li>

      <li>
        <h5>Email</h5>
        <input type="text" className='editpop border-0 ' />
      </li>

    </ul>  

    <button></button>
    </div>
  )
}


  


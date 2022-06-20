import React from 'react'
import api from './../../API/data/post'
import { useState, useEffect } from 'react'

export default function DataOverlay({ nama }) {
    return (
        <div>
            <ul>
                <li>
                    <h5>Nama Fasilitas Kesehatan</h5>
                    <h6 className='data-popup'> {nama}</h6>
                </li>
                <li>
                    <h5>Alamat Lengkap</h5>
                    <h6 className='data-popup'>jln pendidikan</h6>
                </li>
                <li>
                    <h5>Kategori</h5>
                    <div className='data-popup'>
                        <span>
                            <input type="radio" name="kategori" value="RSUD" />{" "}
                            <label htmlFor="RSUD"><h6>RSUD</h6></label>

                        </span>
                        <span className='px-3'>
                            <input type="radio" name="kategori" value="Puskesmas" />{" "}
                            <label htmlFor="Puskesmas"><h6 >Puskesmas</h6></label>

                        </span>
                    </div>
                </li>
                <li>
                    <h5>Nomor Telpon</h5>
                    <h6 className='data-popup'> John Doe</h6>
                </li>

            </ul>
        </div>
    )
}

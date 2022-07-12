export default function DataPopupAdminEdit() {
  return (
    <div>
    <ul>
      <li>
        <h5>Nama Admin</h5>
        <h6 className='data-popup'> awda</h6>
      </li>
      <li>
        <h5>Alamat Lengkap</h5>
        <h6 className='data-popup'> John Doe</h6>
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
        <h5>No. Telp</h5>
        <h6 className='data-popup'> John Doe</h6>
      </li>
      <li>
        <h5>Alamat</h5>
        <h6 className='data-popup'> John Doe</h6>
      </li>
      <li>
        <h5>Email</h5>
        <h6 className='data-popup'> John Doe</h6>
      </li>
    </ul>  
    </div>
  )
}

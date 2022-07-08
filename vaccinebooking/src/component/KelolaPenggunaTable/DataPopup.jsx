export default function DataPopup({nama,nohp, nik,gender, email, tgl_lahir}) {
  // console.log(nama, "ini namanya")
  return (
    <div>
    <ul>
      <li>
        <h5>Nama</h5>
        <h6 className='data-popup'> {nama}</h6>
      </li>
      <li>
        <h5>Tanggal Lahir</h5>
        <h6 className='data-popup'>{tgl_lahir}</h6>
      </li>
      <li>
        <h5>Jenis Kelamin</h5>
        <h6 className='data-popup'> {gender}</h6>
      </li>
      <li>
        <h5>Email</h5>
        <h6 className='data-popup'>{email}</h6>
      </li>
      <li>
        <h5>NIK</h5>
        <h6 className='data-popup'> {nik}</h6>
      </li>
      <li>
        <h5>No. Telp</h5>
        <h6 className='data-popup'>{nohp}</h6>
      </li>
    </ul>  
    </div>
  )
}

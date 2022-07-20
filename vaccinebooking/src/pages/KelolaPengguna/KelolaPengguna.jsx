import { useState, useEffect } from 'react'

// import component
import TablePengguna from '../../component/KelolaPenggunaTable/TablePengguna';
import Pagenation from '../../component/Pagenation/Pagenation';
import Select from '../../component/PageComponent/Select';
import Sidebar from '../../component/Sidebar/Sidebar';
import Spiner from '../../assets/Spinners/Spinners';
import Search from '../../component/Basing/Search';
import api from './../../API/data/post'

//style 
import { AiOutlineSearch } from 'react-icons/ai';
import icons from "../../assets/img/sorry.png"
import '../../assets/Style/style.css'

const KelolaPengguna = () => {
  // initial state and variabale
  const [input, setInput] = useState("");
  const [dataPengguna, setDataPengguna] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(15);
  const [lengthPage, setLengthPage] = useState(0);
  const [loading, setLoading] = useState(true);
  
  // funtion
  const onChangeInput = (e) => {
    const inputs = e.target.value;
    setInput(inputs)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`users/pagination/USER?page=${page}&size=${size}`, {
          headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`
          }}
        )
        setDataPengguna(response.data.data.content);
        setLengthPage(response.data.data.totalPages);
      } catch (err) {
        console.log(err);
      }finally{
        setLoading(false)
      }
    }
    fetchPosts();
},[page, size])

if(loading){
  return <Spiner/>
}
  return (
    <>
      <div className='Fontcolor-Dasboard'>
        <div className='row me-5'>
          <div className='col-3'>
            <Sidebar />
          </div>

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
              
            </div>
            <div className='row Margin-top-Serch align-items-end d-flex'>
              <div className='col-6 d-flex TotalPengguna'>
                <div >
                  <p className='Fz-16'>Tampilkan</p>
                </div>
                <div className='ms-2 Select15'>
                  <Select setSize={setSize} />
                </div>
                
                <div className='d-flex'>
                  <div>
                    <p className='ms-2 Fz-16 me-2'>entri</p>
                  </div>
                  <div className='border border-dark d-flex w-100 BorderRadiusInline' >
                    <div className='ms-3 me-3 PointerClikCss' >
                      <AiOutlineSearch />
                    </div>
                    <div className='d-flex '>
                      <input 
                        type="text" 
                        className='input-kelola-pengguna' 
                        placeholder="Cari" 
                        onChange={onChangeInput} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {dataPengguna.length !== 0 ?(
            <div className='row mt-4 background-color-Table '>
              <div className='col-1'>No</div>
              <div className='col-4'>Nama Pengguna</div>
              <div className='col-3'>No. Hp</div>
              <div className='col-3'>Nik</div>
              <div className='col-1'>Action</div>
            </div>
          ):(null)}
          {/* validasi data kosong */}
          { dataPengguna.length === 0 ? (
            <Search 
              icons={icons} 
              message={"Belum ada pengguna"} 
              message2={""}/>
          ):(null)
          }      

          {/* isi table */}
          <div className={dataPengguna.length !== 0 ? "TabelkelolaBerita row Border-Color-Box mb-2" : ""}>
            {dataPengguna?.filter((val) => {
                  if (input === "") {
                    return  val
                  }
                  else if (val.first_name?.toLowerCase().includes(input.toLocaleLowerCase()) || 
                          val.last_name?.toLowerCase().includes(input.toLocaleLowerCase()) || 
                          val.no_phone?.toLowerCase().includes(input.toLocaleLowerCase()) || 
                          val.username?.toLowerCase().includes(input.toLocaleLowerCase()) 
                  ) {
                    return val
                  }
                  else {
                    return null;
                  }
                    
                }).map((data, index)=>{
              return(
                <TablePengguna 
                  Number={index + 1}  
                  key={data.id_user}  
                  id={data.id_user}
                  nama={data.first_name + " " + data.last_name} 
                  nohp={data.no_phone}  
                  NIK={data.username}  
                  data={data} 
                  email={data.email} 
                  gender={data.gender} 
                  tgl_lahir={data.birth_date}
                />
              )
            })}
          </div>
          {dataPengguna?.length > 0 ? (
            <Pagenation 
                setPage={setPage} 
                lengthPage={lengthPage}/>
              ) : (
                null
              )
          }
          </div>
        </div>
      </div>
    </>
  )
}
export default KelolaPengguna
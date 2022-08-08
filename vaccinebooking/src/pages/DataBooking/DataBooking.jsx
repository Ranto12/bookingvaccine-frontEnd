import api from "../../API/data/post";
import { useState, useEffect } from "react";
import icons from "../../assets/img/sorry.png"
import { AiOutlineSearch } from "react-icons/ai";
import Search from "../../component/Basing/Search";
import Spiner from "../../assets/Spinners/Spinners";
import Sidebar from "../../component/Sidebar/Sidebar";
import Select from "../../component/PageComponent/Select";
import Pagenation from "../../component/Pagenation/Pagenation";
import TabelDataBooking from "../../component/DataBooking/TabelDataBooking";

const DataBooking = () => {
  // initial state and valiables
  const [booking, setBooking] = useState([]);
  const [input, setInput] = useState();
  const [size, setSize] = useState(15);
  const [page, setPage] = useState(0);
  const [lengthPage, setLengthPage] = useState(0);
  const [loading, setLoading] = useState(true);
  //funtion
  const onChangeInput = (e) => {
    setInput(e.target.value)
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`/booking?page=${page}&size=${size}`, {
          headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`
          }}
        )
        setBooking(response.data.data.content);
        setLengthPage(response.data.data.totalPages);
      } catch (err) {
        console.log(err);
      }finally{
        setLoading(false)
      }
    };
    fetchPosts();
  }, [page, size, lengthPage]);
  if(loading){
    return <Spiner/>
  }
  return (
    <div className="Fontcolor-Dasboard">
      <div className="row me-5">
        <div className="col-3 ">
          <Sidebar />
        </div>
        <div className="col-9 mt-5">
          <div className="row">
            <div className="col-6">
              <h1 className="fz-Head">Kelola Data</h1>
              <h1 className="fz-Title">Booking vaksinasi</h1>
            </div>
          </div>

          {/* filtering */}
          <div className="row d-flex Margin-top-Serch align-items-end">
            <div className="col-6 d-flex " style={{ height: "26px" }}>
              <div>
                <p className="Fz-16">Tampilkan</p>
              </div>
              <div className="ms-2">
                <Select setSize={setSize} />
              </div>
              <div className="d-flex">
                <div>
                  <p className="ms-2 Fz-16 me-2">entri</p>
                </div>
                <div className="border border-dark d-flex w-100 BorderRadiusInline">
                  <div className="ms-3 me-3 PointerClikCss">
                    <AiOutlineSearch />
                  </div>
                  <div className="d-flex">
                    <input
                      type="text"
                      style={{
                        maxWidth: "251px",
                        width: "251px",
                        minWidth: "150px",
                        height: "24px",
                        border: "none",
                        borderRadius: "2px",
                      }}
                      placeholder="Cari"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* tabel */}
          { booking.length > 0 ? (
            <div className="row mt-4 table-header background-color-Table ">
            <div className="row mt-2 table-data ">
              <div className="col-1">No</div>
              <div className="col-4">Nama</div>
              <div className="col-3">NIK</div>
              <div className="col-3">Jenis Vaksin</div>
              <div className="col-1">Aksi</div>
            </div>
          </div>
          ):( null )}

          {/* validasi data kosong */}
          { booking.length === 0 ? (
            <Search icons={icons} message={"Belum Booking Vaccine"} message2={"Dari Pengguna"}/>
            ):(null)
          }           

          {/* isi tabel */}
          <div className={booking.length !== 0 ? "TabelkelolaBerita row Border-Color-Box " : ""}>
            {booking &&
            booking?.filter((val) => {
              console.log("val", val)
                if (input == null) {
                  return val
                }
                else if (val?.user_mapped?.first_name?.toLowerCase().includes(input.toLocaleLowerCase()) ||
                        val?.user_mapped?.last_name?.toLowerCase().includes(input.toLocaleLowerCase()) ||
                        val?.user_mapped?.username?.toLowerCase().includes(input.toLocaleLowerCase()) ||
                        val?.session_mapped?.vaccine_mapped?.vaccine_name?.toLowerCase().includes(input.toLocaleLowerCase()) ||
                        val?.family_mapped?.full_name?.toLowerCase().includes(input.toLocaleLowerCase()) ||
                        val?.family_mapped?.nik?.toLowerCase().includes(input.toLocaleLowerCase())
                ) {
                  return val
                } else {
                  return null;
                }
              }).map((value, index) => {
                if(value.family_mapped !== null){
                  return(
                    <TabelDataBooking 
                        key={value.id_booking} Number={index + 1} id={value.id_booking}
                        namaUser={value.family_mapped.user_mapped.first_name + " " + value.family_mapped.user_mapped.last_name}
                        nikuser={value.family_mapped.user_mapped.username} 
                        jenisVaccine={value.session_mapped.vaccine_mapped.vaccine_name} 
                        family={value.family_mapped}
                        value ={value}
                        nikFamily={value.family_mapped.nik}
                        nameFamily={value.family_mapped.full_name} 
                    />
                  )
                }else{
                  return (
                    <TabelDataBooking 
                        key={value.id_booking} Number={index + 1} id={value.id_booking}
                        namaUser={value.user_mapped.first_name + " " + value.user_mapped.last_name}
                        nikuser={value.user_mapped.username} 
                        jenisVaccine={value.session_mapped.vaccine_mapped.vaccine_name} 
                        family={value.family_mapped}
                    />
                  )
                }
              })}
          </div>
              {booking?.length > 0 ? (
          <Pagenation 
              data={booking} 
              size={size} 
              page={page} 
              setPage={setPage} 
              lengthPage={lengthPage}/>
              ):(
                null
              )
            }
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBooking;

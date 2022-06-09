import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dasboard/Dasboard";
import KelolaBerita from "./pages/KelolaBerita/KelolaBerita";
import DataBooking from "./pages/DataBooking/DataBooking";
import KelolaPengguna from "./pages/KelolaPengguna/KelolaPengguna";
import Jadwal from './pages/KelolaJadwal/jadwalVaksinasi';


// import ViewUser from './domain/veiwUser/ViewUser';
// import Login from './pages/Login/Login';

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/KelolaBerita" element={<KelolaBerita />} />
      <Route path="/DataBooking" element={<DataBooking />} />
      <Route path="/KelolaPengguna" element={<KelolaPengguna />} />
      <Route path="/KelolaJadwal" element={<Jadwal />} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;

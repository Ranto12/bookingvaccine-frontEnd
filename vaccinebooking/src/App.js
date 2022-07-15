import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
// const Login = React.lazy(()=> import('./pages/Login'));
// const RegisterPage = React.lazy(() => import('./Component/pages/RegisterPage'));
import Dashboard from "./pages/Dasboard/Dasboard";
import KelolaBerita from "./pages/KelolaBerita/KelolaBerita";
import DataBooking from "./pages/DataBooking/DataBooking";
import KelolaPengguna from "./pages/KelolaPengguna/KelolaPengguna";
import KelolaJadwal from "./pages/KelolaJadwal/KelolaJadwal";
import KelolaAdmin from "./pages/KelolaAdmin/KelolaAdmin";
import JadwalVaksinasi from "./pages/KelolaJadwal/jadwalVaksinasi";
import AddAdmin from "./pages/KelolaAdmin/AddAdmin";
import ArtikelTerbaru from "./pages/ArtikelTerbaru/ArtikelTerbaru";
import ErrorMessage from "./pages/ErrorMessage/Error";
import EditArtikel from "./pages/ArtikelTerbaru/EditArtikel";
import EditJadwalVaksinasi from "./pages/KelolaJadwal/EditJadwal";
import EditAdmin from "./pages/KelolaAdmin/EditAdmin";
import {PrivateRoute, PrivateRouteLogRes} from './component/PrivateRoute/PrivateRoute';
import Search from "./component/Basing/Search";
import Spiner from "./assets/Spinners/Spinners";

function App() {
  const roles = localStorage.getItem("role");
  return (
    <Routes>
      <Route element={<PrivateRouteLogRes/>}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route  element={<PrivateRoute/>}>
        {roles !== "ADMIN" ? (
          <Route>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/KelolaBerita" element={<KelolaBerita />} />
            <Route path="/DataBooking" element={<DataBooking />} />
            <Route path="/KelolaPengguna" element={<KelolaPengguna />} />
            <Route path="/jadwalvaksinasi" element={<JadwalVaksinasi />} />
            <Route path="/EditJadwalVaksinasi" element={<EditJadwalVaksinasi />} />
            <Route path="/login" element={<Login />} />
            <Route path="/KelolaJadwal" element={<KelolaJadwal />} />
            <Route path="/KelolaAdmin" element={<KelolaAdmin />} />
            <Route path="/ArtikelTerbaru" element={<ArtikelTerbaru />} />
            <Route path="/EditArtikel" element={<EditArtikel />} />
            <Route path="/AddAdmin" element={<AddAdmin />} />
            <Route path="/EditAdmin" element={<EditAdmin />} />
            <Route path="/*" element={<ErrorMessage />} />   
          </Route>
        ) : (
          <Route>
            <Route path="/" element={<Dashboard />} />
            <Route path="/AddAdmin" element={<AddAdmin />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/KelolaBerita" element={<KelolaBerita />} />
            <Route path="/DataBooking" element={<DataBooking />} />
            <Route path="/KelolaPengguna" element={<KelolaPengguna />} />
            <Route path="/jadwalvaksinasi" element={<JadwalVaksinasi />} />
            <Route path="/EditJadwalVaksinasi" element={<EditJadwalVaksinasi />} />
            <Route path="/login" element={<Login />} />
            <Route path="/KelolaJadwal" element={<KelolaJadwal />} />
            <Route path="/ArtikelTerbaru" element={<ArtikelTerbaru />} />
            <Route path="/EditArtikel" element={<EditArtikel />} />
            <Route path="/*" element={<ErrorMessage />} />   
            <Route path="/Search" element={<Search />} />   
            <Route path="/spinner" element={<Spiner />} />   
          </Route>
        )
      }         
      </Route>
    </Routes>
  );
}

export default App;
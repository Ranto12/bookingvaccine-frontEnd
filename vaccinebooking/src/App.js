import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dasboard/Dasboard";
import KelolaBerita from "./pages/KelolaBerita/KelolaBerita";
import DataBooking from "./pages/DataBooking/DataBooking";
import KelolaPengguna from "./pages/KelolaPengguna/KelolaPengguna";
import KelolaJadwal from "./pages/KelolaJadwal/KelolaJadwal";
import KelolaAdmin from "./pages/KelolaAdmin/KelolaAdmin";
import JadwalVaksinasi from "./pages/KelolaJadwal/jadwalVaksinasi";
import AddAdmin from "./pages/KelolaAdmin/AddAdmin";
import ArtikelTerbaru from "./pages/ArtikelTerbaru/ArtikelTerbaru";
import Overlaybookingvacinne from "./component/Overlay/Overlaybookingvacinne";
import Contoh from "./component/KelolaPenggunaTable/Contoh";
import ErrorMessage from "./pages/ErrorMessage/Index.jsx";
import EditArtikel from "./pages/ArtikelTerbaru/EditArtikel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/KelolaBerita" element={<KelolaBerita />} />
      <Route path="/DataBooking" element={<DataBooking />} />
      <Route path="/KelolaPengguna" element={<KelolaPengguna />} />
      <Route path="/jadwalvaksinasi" element={<JadwalVaksinasi />} />
      <Route path="/login" element={<Login />} />
      <Route path="/KelolaJadwal" element={<KelolaJadwal />} />
      <Route path="/KelolaAdmin" element={<KelolaAdmin />} />
      <Route path="/ArtikelTerbaru" element={<ArtikelTerbaru />} />
      <Route path="/EditArtikel" element={<EditArtikel />} />
      <Route path="/AddAdmin" element={<AddAdmin />} />
      <Route path="/popupModal" element={<Overlaybookingvacinne />} />
      <Route path="/contoh" element={<Contoh />} />
      <Route path="/*" element={<ErrorMessage />} />
    </Routes>
  );
}

export default App;

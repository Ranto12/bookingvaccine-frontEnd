import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login';
import Dashboard from './pages/Dasboard/Dasboard';
import KelolaBerita from './pages/KelolaBerita/KelolaBerita';
import KelolaJadwal from './pages/KelolaJadwal/KelolaJadwal';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/KelolaBerita' element={<KelolaBerita/>}/>
      <Route path='/KelolaJadwal' element={<KelolaJadwal/>}/>

      {/* <Route path='/login' element={<ViewUser/>}/> */}
    </Routes>
  );
}

export default App;

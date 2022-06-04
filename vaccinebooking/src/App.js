import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import ViewUser from './domain/veiwUser/ViewUser';
import Login from './pages/Login';
// import Sidebar from './component/SIdebar/Sidebar';
// import Login from './pages/Login/Login';
import Dasboard from './component/Dasboard/Dasboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dasboard' element={<Dasboard/>}/>
      {/* <Route path='/login' element={<ViewUser/>}/> */}
      {/* <Route path='/sideBar' element={<Sidebar/>}/> */}
    </Routes>
  );
}

export default App;

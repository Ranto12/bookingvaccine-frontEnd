import { Route, Routes } from 'react-router-dom';
// import './App.css';
import ViewUser from './domain/veiwUser/ViewUser';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ViewUser/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;

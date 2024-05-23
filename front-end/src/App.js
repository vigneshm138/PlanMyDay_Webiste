import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Userplanform from './Components/userPlanForm/Userplanform';
import Admin from './Components/Admin/Admin';
import Hometemplate from './Components/Admin/Home Template/Hometemplate';
import Singleplace from './Components/SinglePlace/Singleplace';
import DelethomeTemplate from './Components/Admin/Home Template/DelethomeTemplate';
import FirstLoad from './Components/Firstload/FirstLoad';
import Login from './Components/Login&Sign Up/Login';
import SignUp from './Components/Login&Sign Up/SignUp';
import Profile from './Components/Profile/Profile';
import Dask from './Components/Dask/Dask';
import Profile1 from './Components/Profile/Profile1';

function App() {
  return (
    <div className="app">
      <Navbar />
      <FirstLoad/>
      <div className='app-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/planYourDay' element={<Userplanform  />} /> */}
          <Route path='/admin' element={<Admin />} >
            <Route path='homeTemplate' element={<Hometemplate/>}/>
            <Route path='Delete_homeTemplate' element={<DelethomeTemplate/>}/>
          </Route>
          <Route path='/singlePlace' element={<Singleplace />} />
          <Route path='/login' element={<Login  />} />
          <Route path='/signup' element={<SignUp  />} />
          <Route path='/profile1' element={<Profile1  />} />
          <Route path='/suggestion' element={<Profile  />} />
          <Route path='/dask' element={<Dask  />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

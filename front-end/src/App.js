import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Userplanform from './Components/userPlanForm/Userplanform';
import Admin from './Components/Admin/Admin';
import Hometemplate from './Components/Admin/Home Template/Hometemplate';
import Singleplace from './Components/SinglePlace/Singleplace';
import DelethomeTemplate from './Components/Admin/Home Template/DelethomeTemplate';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className='app-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/planYourDay' element={<Userplanform  />} />
          <Route path='/admin' element={<Admin />} >
            <Route path='homeTemplate' element={<Hometemplate/>}/>
            <Route path='Delete_homeTemplate' element={<DelethomeTemplate/>}/>
          </Route>
          <Route path='/singlePlace' element={<Singleplace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

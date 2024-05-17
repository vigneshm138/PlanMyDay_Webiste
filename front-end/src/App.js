import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Userplanform from './Components/userPlanForm/Userplanform';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className='app-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/planYourDay' element={<Userplanform />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

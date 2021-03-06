import logo from './logo.svg';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import { ToastContainer } from 'react-toastify';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={<AddService></AddService>}></Route>
        <Route path='/manage' element={<ManageServices></ManageServices>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;

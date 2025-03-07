import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import ForgotPassword from './Pages/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Layout from './layout/Layout';

function App() {
  return (
    <>
      {/* <Header /> */}
      
      <ToastContainer />
      <Routes>
      
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        
       <Route element={<Layout/>}>
        <Route path='/' element={ <Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
      </Route >
        
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import ForgotPassword from './Pages/ForgotPassword'

function App() {


  return (
    <>
    <Header/>
     <Routes>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
     </Routes>
    <Footer/>
    </>
  )
}

export default App

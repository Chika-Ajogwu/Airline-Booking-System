import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
 import Home from './pages/Home/Home';
import LoginSignUp from './pages/LoginSignUp/LoginSignUp';
import Footer from './components/Footer/Footer';




function App() {

  return (

    <div  className='bg-[url(../src/assets/airport5.jpg)] bg-cover bg-no-repeat'>
     
     <BrowserRouter>
      <Header />
      
      <Routes>
      <Route path='/' element={<Home />} />
      <Route/>
          <Route path='/Login' element={<LoginSignUp />} />
      </Routes>

      <Footer />
     </BrowserRouter>


    </div>
  )
}

export default App

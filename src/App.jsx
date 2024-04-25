import './App.css'
import Booking from './components/Booking';
import Header from './components/Header';
import Table from './components/Table';



function App() {

  return (
    // <div className='bg-[url(../src/assets/airport5.jpg)] bg-cover bg-no-repeat'>

    <div  className='bg-[url(../src/assets/airport5.jpg)] bg-cover bg-no-repeat'>
     <Header />
     <section className='h-screen'>
     <Booking />
      <Table />
     </section>
    </div>
  )
}

export default App

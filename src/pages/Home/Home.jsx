import React from 'react'
import Booking from '../../components/Booking'
import Table from '../../components/Table'


const Home = () => {
  return (
    <div className='home'>
     


     <section className='h-screen'>
      <Booking />
        <Table />
      </section> 
    </div>
  )
}

export default Home
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { Link } from 'react-router-dom'
import React, { useState } from 'react'


const Header = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <header className="w-full p-4 bg-slate-50">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
            <a href="/" className="text-lg font-bold flex items-center"><MdOutlineFlightTakeoff className="text-2xl mr-1 text-indigo-600" />Travel Lix</a>
            <ul className="flex flex-row">
              
              <li className="mr-3 font-bold cursor-pointer hover:bg-indigo-600 hover:text-white hover:px-2" onClick={() =>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link> {menu=== "shop"? <hr  /> : <></>}</li>
              <li className="mr-3 font-bold cursor-pointer hover:bg-indigo-600 hover:text-white hover:px-2" onClick={() =>{setMenu("Services")}}><Link style={{textDecoration: 'none'}} to='/services'>Services</Link> {menu=== "mens"? <hr /> : <></>}</li>
              <li className="mr-3 font-bold cursor-pointer hover:bg-indigo-600 hover:text-white hover:px-2" onClick={() =>{setMenu("Contact")}}><Link style={{textDecoration: 'none'}} to='/contact'>Contact Us</Link> {menu=== "womens"? <hr /> : <></>}</li>
               </ul>

                <Link to='/login'> <button className="bg-indigo-600 text-white px-6 py-2 rounded font-medium">Login</button></Link> 
        
        </nav>
    </header>
  )
}

export default Header
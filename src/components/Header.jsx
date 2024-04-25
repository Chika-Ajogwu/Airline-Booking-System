import { MdOutlineFlightTakeoff } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full p-4 bg-slate-50">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
            <a href="/" className="text-lg font-bold flex items-center"><MdOutlineFlightTakeoff className="text-2xl mr-1 text-indigo-600" />Travel Lix</a>
            <ul className="flex flex-row">
               <li className="mr-3 font-bold cursor-pointer hover:bg-indigo-600 hover:text-white hover:px-2">Home</li>
                <li className="mr-3 font-bold cursor-pointer hover:bg-indigo-600 hover:text-white hover:px-2">Services</li>
                <li className="mr-3 font-bold cursor-pointer hover:bg-indigo-600 hover:text-white hover:px-2">Contact Us</li>
               </ul>

            <button className="bg-indigo-600 text-white px-6 py-2 rounded font-medium">Login</button>
        </nav>
    </header>
  )
}

export default Header
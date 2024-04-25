import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking } from "../redux/actions";


const Booking = () => {
const data = useSelector((state) => state.data);
const dispatch = useDispatch();
const size = data.length; 


const [bookingData, setbookingData] = useState({})

const handleChange = (e) => {
    // console.log(e.target.value);
    const newbookingData = {...bookingData};
    bookingData[e.target.name] = e.target.value;
    setbookingData(bookingData)
}

const handleBook = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    if(Object.keys(bookingData).length === 5) {
        dispatch(makeBooking({...bookingData, id: size + 1}))
    } 
    else {
        alert("Please select data properly!")
    }
}

console.log(bookingData);


  return (
    <div className="md:mt-[160px] mt-[100px] mx-4 relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="flex flex-col md:flex-row">

               
                {/* From */}

                <div className="py-1.5 px-2 flex-1 border-r-2"> 
                    <p className="font-medium">Destination From</p>
                    <div>
                        <select required onChange={(e) => handleChange(e)} name="from" id="from" className="outline-none p-2 w-full">
                            <option value="">Please Select</option>
                            <option>Lagos(Los)</option>
                            <option>Abuja(Abj)</option>
                            <option>Enugu(En)</option>
                            <option>Kano(Ko)</option>
                            
                        </select>
                    </div>
                </div>


                {/* Destination To */}
                <div className="py-1.5 px-2 flex-1 border-r-2"> 
                    <p className="font-medium">Destination To</p>
                    <div>
                        <select name="to" id="to" required onChange={(e) => handleChange(e)} className="outline-none p-2 w-full">
                            <option value="">Please Select</option>
                            <option>Lagos(Los)</option>
                            <option>Abuja(Abj)</option>
                            <option>Enugu(En)</option>
                            <option>Kano(Ko)</option>
                            
                        </select>
                    </div>
                </div>

                {/*Journey Date */}
                <div className="py-1.5 px-2 flex-1 border-r-2"> 
                    <p className="font-medium">Journey Date</p>
                    <input type="date" name="departureDate" required onChange={(e) => handleChange(e)} className="outline-none p-2 w-full"/>
                </div>


                {/* Guest Option */}
                <div className="py-1.5 px-2 flex-1 border-r-2"> 
                    <p className="font-medium">No Of Passenger(s)</p>
                    <div>
                        <select required name="passenger" id="passenger" onChange={(e) => handleChange(e)} className="outline-none p-2 w-full">
                            <option value="">Please Select</option>
                            <option>1 Person</option>
                            <option>2 Persons</option>
                            <option>3 Persons</option>
                            <option>4 Persons</option>
                            
                        </select>
                    </div>
                </div>
                


                {/* Travel Class */}
                <div className="py-1.5 px-2 flex-1 border-r-2"> 
                    <p className="font-medium">Travel Class</p>
                    <div>
                        <select required name="ticketClass" id="ticketClass" onChange={(e) => handleChange(e)} className="outline-none p-2 w-full">
                            <option value="">Please Select</option>
                            <option>Business class</option>
                            <option>Economy class</option>
                            
                        </select>
                    </div>
                </div>


                {/* Submit Button */}
                <button onClick={(e) => handleBook(e)} type="submit" className="bg-indigo-500 text-white px-1 py-1 space-x-2 text-center 
                flex items-center justify-center"><FaPlus className="mr-1"/>Book Now</button>
            </form>
        </div>
    </div>
  )
}

export default Booking
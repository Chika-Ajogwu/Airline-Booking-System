import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteBooking } from "../redux/actions";



const Table = () => {
    const data = useSelector((state) => state.data);
    const dispacth = useDispatch();

    const handleDelete = (e) => {
      const id = parseInt(e.currentTarget.id)
      dispacth(deleteBooking(id));
    }

    console.log(data)

  return (
    <>
    {
        data.length && (
            <div className="max-w-6xl mx-auto mt-5 bg-white">
                
                <div className="overflow-x-auto">

  <table className="table">
    {/* head */}
    <thead className="bg-slate-400 font-bold">
      <tr>
        
        
        <th>DESTINATION FROM</th>
        <th>DESTINATION TO</th>
        <th>TRAVELING DATE</th>
        <th>NO OF PASSENGER(S)</th>
        <th>FLIGHT CLASS</th>
        <th>DELETE</th>
      </tr>
    </thead>

    <tbody>
            {
                data.map((data, index) => (
                    <tr key={index}>
                    <th>{data.from}</th>
                    <td>{data.to}</td>
                    <td>{data.departureDate}</td>
                    <td>{data.passenger}</td>
                    <td>{data.ticketClass}</td>
                    <td><button id={`${data.id}`} onClick={(e) => handleDelete(e)} className="btn-xs bg-red-500 text-white"><MdDelete /></button></td>
                  </tr>
                ))
            }
     
       
    </tbody>
  </table>
</div>

            </div>
        )
    }
    </>
  )
}

export default Table
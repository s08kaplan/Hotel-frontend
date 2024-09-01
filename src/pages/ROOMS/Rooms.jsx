import { useEffect, useState } from "react"
import useRooms from "../../custom-hooks/useRooms"
import { useSelector } from "react-redux"



const Rooms = () => {
    // const [rooms, setRooms] = useState([])
  const { getRoomsInfo } = useRooms()
  const { rooms } = useSelector(state => state?.room)
 const data = rooms?.payload?.data
  //  console.log(data);
  // console.log(rooms.payload.data);
  useEffect(() => {
    getRoomsInfo()
  }, [])
  
    
  return (
    <main>
       <section >
        { data?.map(item => (
          <div   key={item._id}>
              <span> {item.roomNumber} </span>
         <span >{item.bedType}</span> 
         { item.image.map(address => (
          <img key={address} src={address} alt="image" width="250px" />
         ))}
         
          </div>
       
        ))}
       </section>
    </main>
  )
}

export default Rooms
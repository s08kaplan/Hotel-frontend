import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import Avatar from 'react-avatar';
import { useSelector } from "react-redux";
import "./Navbar.css"
import useAuthCalls from "../../custom-hooks/useAuthCalls";

const Navbar = () => {
  const [modal, setModal] = useState(false)
  const  modalRef  = useRef(null)
  const { user } = useSelector(state => state.auth)
  const { logout } = useAuthCalls()
  const username = user?.username




  // useEffect(() => {

  //   function handleModal(e)  {
  //     // if (modalRef.current && modalRef.current !== e.target) {
  //     if (modalRef.current && modalRef.current !== e.target) {
  //       console.log(modalRef.current.contains(e.target));
  //       setModal(false);
  //     }
  //   };
  //   document.addEventListener("click", handleModal)
  
  //   return () => {
  //     document.removeEventListener("click",handleModal)
  //   }
  // }, [])
  
  
  console.log(modalRef.current);
  console.log(modalRef);
  console.log(modal);
  const gender = ""
  return (
    <nav>
       <div><img src={logo} alt="logo" width="200rem"/> </div> 
       <ul className="main-ul">
       <Link to="/"> <li className="no-underline">Home</li></Link>
       <Link to="/booking"><li>Booking</li></Link> 
       <Link to="/contact"><li>Contact</li></Link> 
       <Link to="/about"><li>About</li></Link> 
       </ul>
       <div className="avatar" onClick={() => setModal(!modal)}>
        <Avatar size="50" round="50px" src={ gender == "male" ? `${import.meta.env.VITE_MALE_AVATAR}` : gender == "female" ? `${import.meta.env.VITE_FEMALE_AVATAR}` : `${import.meta.env.VITE_NO_GENDER_AVATAR}`}/>

       {modal && <div className="modal"  ref={modalRef}>
            <ul>
           <Link to={!username && "/login"}>
              <li onClick={()=> (username && logout())}>{username ? "Logout" : "Login"}</li>
            </Link>  
            <Link to="/"><li>Home</li></Link>  
            <Link to="/booking"><li>Booking</li></Link>  
            <Link to="/rooms"><li>Rooms</li></Link>   
            </ul>
          </div>}
       </div>
    </nav>
  )
}

export default Navbar
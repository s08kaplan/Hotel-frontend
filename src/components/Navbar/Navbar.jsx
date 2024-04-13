import { useRef, useState } from "react";
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


  const handleModal = (e) => {
    console.log(e.target);
    // if (!modalRef.current.contains(e.target)) {
    if (modalRef.current !== "div.modal") {
      setModal(false);
    }
  };
  
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

       {modal && <div className="modal" onClick={handleModal} ref={modalRef}>
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
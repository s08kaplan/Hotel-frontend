import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBooking from "../../custom-hooks/useBooking";
import useAxios from "../../custom-hooks/useAxios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MyModal from "../../components/MODAL/MyModal";
import AuthForm from "../../components/AUTH-FORM/AuthForm";
import PersonalInfo from "../../components/PERSONAL-INFO/PersonalInfo";

const Profile = () => {
  const { booking } = useSelector((state) => state.booking);
  const { user } = useSelector((state) => state.auth);
  const id = user?.id;
  const { getReservationInfo } = useBooking();
  const { axiosWithToken, axiosPublic } = useAxios();
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getReservationInfo(id);
    // const try1 = async() => {
    //   const { data } = await axiosWithToken(`reservations?filter[userId]=${user?.id}}`)
    //   console.log(data);
    // }
    // try1()
  }, []);

  console.log(user);
  console.log(booking);
  console.log(id);

  const handleNavigate = (e) => {
    if(e.target.textContent =="Check Your Reservations"){
      setShowModal(true)
    }
  };
  return (
    <Box>
      <PersonalInfo/>
      <Box>
        <Typography
          variant="h6"
          onClick={handleNavigate}
          sx={{
            cursor: "pointer",
            width: "230px",
            display: "flex",
            alignItems: "center",
            transition: "color 0.3s",
            color: "inherit",
            "&:hover": {
              color: "red",
            },
            "&:hover .arrow-icon": {
              opacity: 1,
              transform: "translateX(5px)",
            },
          }}
        >
          Update Personal Info
          <ArrowForwardIcon
            className="arrow-icon"
            sx={{
              marginLeft: "8px",
              opacity: 0,
              transition: "opacity 0.3s, transform 0.3s",
            }}
          />
        </Typography>
        <Typography
          variant="h6"
          onClick={handleNavigate}
          sx={{
            cursor: "pointer",
            width: "270px",
            display: "flex",
            alignItems: "center",
            transition: "color 0.3s",
            color: "inherit",
            "&:hover": {
              color: "red",
            },
            "&:hover .arrow-icon": {
              opacity: 1,
              transform: "translateX(5px)",
            },
          }}
        >
          Check Your Reservations
          <ArrowForwardIcon
            className="arrow-icon"
            sx={{
              marginLeft: "8px",
              opacity: 0,
              transition: "opacity 0.3s, transform 0.3s",
            }}
          />
        </Typography>
      </Box>
      {/* {showModal && <MyModal open={showModal} onClose={()=>setShowModal(prev=>!prev)}> </MyModal>} */}
    </Box>
  );
};

export default Profile;

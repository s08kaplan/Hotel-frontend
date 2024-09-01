import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBooking from "../../custom-hooks/useBooking";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Calendar from "../../components/FORM-INPUTS/Calendar";
import SelectOption from "../../components/FORM-INPUTS/SelectOption";
import useRooms from "../../custom-hooks/useRooms";

const Booking = () => {
  const { user } = useSelector((state) => state.auth);
  const { booking } = useSelector((state) => state.booking);
  const { rooms } = useSelector((state) => state.room);
  const { reservation } = useBooking();

  const { getRoomsInfo } = useRooms()

  useEffect(() => {
   getRoomsInfo()
  }, [])
  

  const data = booking?.payload?.data;
  console.log("booking: ", booking);
  console.log("rooms: ", rooms);

  const [inputs, setInputs] = useState({
    arrival_date: "",
    departure_date: "",
    guest_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newValue = name === "guest_number" ? Number(value) : value;
    setInputs({ ...inputs, [name]: newValue, username: user.username });
  };

  const handleSubmit = (e) => {
    reservation(inputs);
  };
  return (
    <Box sx={{marginTop:"1rem"}}>
      <Stack sx={{justifyContent: "center", alignItems: "center", gap:"1rem"}}>
        <Typography variant="h4">Let's find a Reservation for you </Typography>
        {/* <select name="guest_number" id="rooms" onChange={handleChange}>
            Rooms for number of Person
            <option value="1">A1</option>
            <option value="1">A2</option>
            <option value="2">A3</option>
            <option value="2">A4</option>
            <option value="4">A5</option>
            <option value="4">A6</option>
            <option value="6">A7</option>
          </select> */}

        <Calendar />
        <SelectOption rooms={rooms}/>
        <button onClick={handleSubmit}>Make a reservation</button>
        <button>New reservation</button>
      </Stack>
      {data && (
        <Box>
          <Stack>
            Dear {user.username}, for your request there has been made a
            reservation for the dates between
            <Typography>
              {new Date(data["arrival_date"]).toLocaleDateString("en-US")}
            </Typography>
            <Typography>
              {new Date(data["departure_date"]).toLocaleDateString("en-US")}
            </Typography>
            for <Typography>{data.night}</Typography> night with the total
            amount of <Typography>{data.totalPrice}</Typography>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Booking;

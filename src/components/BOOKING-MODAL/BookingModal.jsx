import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MyButton from "../FORM-INPUTS/MyButton";
import Calendar from "../../components/FORM-INPUTS/Calendar";
import { useSelector } from "react-redux";
import useBooking from "../../custom-hooks/useBooking";
import useRooms from "../../custom-hooks/useRooms";
import SelectOption from "../FORM-INPUTS/SelectOption";

const style = {
  width: "80%",
  height:"400px",
  overflow:"auto",
  display: "flex",
  flexDirection: "column",
  justifyContent:"center",
  alignItems:"center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  margin:"5rem auto",
  p: 4,
};

const guestNumber=[]
for(let i in [...Array(10)]){
 i !== "0" && guestNumber.push(Number(i))  
}
// console.log(guestNumber);

export default function BookingModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useSelector((state) => state.auth);
  const { booking } = useSelector((state) => state.booking);
  const { rooms } = useSelector((state) => state.room);
  const { reservation } = useBooking();

  const { getRoomsInfo } = useRooms();
  const { getReservationInfo } = useBooking();
  const calendarRef = React.useRef();
  const guestRef = React.useRef();
  const guestNumberRef = React.useRef();

  React.useEffect(() => {
    getRoomsInfo();
    getReservationInfo();
  }, []);

  const data = booking?.payload?.data;
  console.log("booking: ", booking);
  console.log("rooms: ", rooms);
  console.log("user in booking: ", user);



  const handleSubmit = () => {
    const selectedDateRange = calendarRef.current.getSelectedDateRange();
    console.log("Selected Date Range:", selectedDateRange);
    const bedType = guestRef.current.getBedType();
    const NumberOfPerson = guestNumberRef.current.getBedType();
    console.log("bedType:", bedType);
    console.log("NumberOfPerson:", NumberOfPerson);
    let guest_number;
    switch (bedType) {
      case "single":
        guest_number = 1;
        break;
      case "double":
        guest_number = 2;
        break;
      case "family":
        guest_number = 4;
        break;
      case "king":
        guest_number = 6;
        break;

      default:
        guest_number = 1;
        break;
    }
    const postData = {
      arrival_date: selectedDateRange.arrival_date,
      departure_date: selectedDateRange.departure_date,
      username: user?.username,
      guest_number,
    };
    console.log("postData: ", postData);
    reservation(postData);
  };

  return (
    <section
      style={{
        // width: "30rem", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4">
            Let's find a Reservation for you{" "}
          </Typography>
          <Stack
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* <Calendar onDateChange={handleDateChange} /> */}
            <Calendar ref={calendarRef} />
            <Stack
              sx={{
                flexDirection: "column",
                gap: "1rem",
                margin: ".5rem auto",
              }}
            >
              <Box sx={{ display: "flex", gap: ".4rem" }}>
                <SelectOption label="Rooms" rooms={rooms} ref={guestRef} />
                <SelectOption label="Guests" guests={guestNumber} ref={guestNumberRef} />
              </Box>

              <MyButton onClick={handleSubmit}>Make a reservation</MyButton>
              <MyButton>New reservation</MyButton>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </section>
  );
}

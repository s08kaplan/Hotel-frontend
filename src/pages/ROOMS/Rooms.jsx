import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import useRooms from "../../custom-hooks/useRooms";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Stack, Typography } from "@mui/material";

const Rooms = () => {
  // const [rooms, setRooms] = useState([])
  const { getRoomsInfo } = useRooms();
  const { rooms } = useSelector((state) => state?.room);

  const navigate = useNavigate()

  useEffect(() => {
    getRoomsInfo();
  }, []);

  console.log(rooms);

  const handleNavigate = (id) => {
    navigate(`/room-detail/${id}`)
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginLeft:"5rem",
        // padding:"3rem"
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{ placeItems: "center"}}
      >
        {rooms && rooms?.map((room) => (
          <Grid item xs={12} sm={12} md={4} lg={3} key={room._id} onClick={() => handleNavigate(room._id)}>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Typography>{room.roomNumber}</Typography>
              <Typography>{room.bedType}</Typography>
            </Stack>
            <Box>
              <img
                src={room.image[0]}
                alt={room.roomNumber}
                width={400}
                style={{ borderRadius: ".5rem" }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Rooms;

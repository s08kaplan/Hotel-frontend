import { Box, Typography } from "@mui/material";
import RoomCard from "../../components/ROOM-CARD/RoomCard"

const Home = () => {
  return (
    <Box>
      <Typography variant="h1">Welcome to PyScript Hotels Group</Typography>
      <RoomCard/>
    </Box>
  );
};

export default Home;

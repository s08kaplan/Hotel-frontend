import { Box, Typography } from "@mui/material";
import RoomCard from "../../components/ROOM-CARD/RoomCard"
import ImageSlider from "../../components/IMAGE-SLIDER/ImageSlider"

const Home = () => {
  return (
    <Box>
      <Typography variant="h1">Welcome to PyScript Hotels Group</Typography>
      {/* <RoomCard/> */}
      <ImageSlider/>
    </Box>
  );
};

export default Home;
